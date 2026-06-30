import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { rfqSchema } from "@/lib/validators";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        // Get user's organization to determine view
        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: { include: { organization: true } } }
        });

        const org = user?.team_memberships[0]?.organization;

        const { searchParams } = new URL(req.url);
        const limit = parseInt(searchParams.get("limit") || "10");

        let where: any = {};

        if (!org) {
            // If no org, maybe public active RFQs?
            where.status = 'published';
        } else if (org.type === 'buyer') {
            // Buyer sees their own RFQs
            where.buyer_id = org.id;
        } else if (org.type === 'supplier') {
            // Supplier sees open/published RFQs
            // And potentially ones they are invited to (not implemented in simple query yet)
            where.status = 'published';
        }

        const rfqs = await db.rfq.findMany({
            where,
            take: limit,
            orderBy: { created_at: 'desc' },
            include: {
                category: true,
                _count: {
                    select: { quotes: true }
                }
            }
        });

        return NextResponse.json({ success: true, data: rfqs });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: { include: { organization: true } } }
        });

        const org = user?.team_memberships.find(m => m.organization.type === 'buyer')?.organization;

        if (!org) {
            return NextResponse.json({ success: false, error: "Must be a registered buyer to create RFQs" }, { status: 403 });
        }

        const body = await req.json();
        const validation = rfqSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ success: false, error: validation.error.errors }, { status: 400 });
        }

        const { title, product_description, category_id, quantity, response_deadline, delivery_plant_id } = validation.data;

        // Generate RFQ number
        const count = await db.rfq.count();
        const rfq_number = `RFQ-${new Date().getFullYear()}-${1000 + count + 1}`;

        const rfq = await db.rfq.create({
            data: {
                rfq_number,
                title,
                product_description,
                category_id,
                quantity,
                response_deadline: new Date(response_deadline),
                delivery_plant_id,
                buyer_id: org.id,
                created_by_id: userId,
                status: 'published', // Publish immediately for MVP
            },
        });

        return NextResponse.json({ success: true, data: rfq }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
