import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

const quoteSchema = z.object({
    unit_price: z.number().min(0),
    currency: z.string().default("INR"),
    valid_until: z.string().datetime(),
    comments: z.string().optional(),
    lead_time_days: z.number().min(1)
});

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        // Return quotes for this RFQ
        // Buyer sees all, Supplier sees only theirs?
        // Logic handled in UI or here.
        // For MVP, just return all authenticated (Buyer checks handled in UI/Context)
        const quotes = await db.rfqQuote.findMany({
            where: { rfq_id: params.id },
            include: {
                supplier: {
                    select: { display_name: true }
                }
            }
        });

        return NextResponse.json({ success: true, data: quotes });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth();
        if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: { include: { organization: true } } }
        });
        const org = user?.team_memberships.find(m => m.organization.type === 'supplier')?.organization;

        if (!org) {
            return NextResponse.json({ success: false, error: "Only suppliers can submit quotes" }, { status: 403 });
        }

        const body = await req.json();
        const validation = quoteSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ success: false, error: validation.error.errors }, { status: 400 });
        }

        const { unit_price, currency, valid_until, comments, lead_time_days } = validation.data;

        // Check if already quoted
        const existing = await db.rfqQuote.findFirst({
            where: { rfq_id: params.id, supplier_id: org.id }
        });

        if (existing) {
            return NextResponse.json({ success: false, error: "You have already submitted a quote for this RFQ" }, { status: 409 });
        }

        // Calculate total amount (Simple: unit_price * rfq.quantity)
        // Need to fetch RFQ quantity
        const rfq = await db.rfq.findUnique({ where: { id: params.id } });
        if (!rfq) return NextResponse.json({ success: false, error: "RFQ not found" }, { status: 404 });

        const total_amount = Number(unit_price) * rfq.quantity;

        const quote = await db.rfqQuote.create({
            data: {
                rfq_id: params.id,
                supplier_id: org.id,
                quoter_id: userId,
                unit_price,
                currency,
                total_amount,
                valid_until: new Date(valid_until),
                comments,
                lead_time_days,
                status: 'pending'
            }
        });

        return NextResponse.json({ success: true, data: quote }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
