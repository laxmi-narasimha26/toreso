import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        const rfq = await db.rfq.findUnique({
            where: { id: params.id },
            include: {
                category: true,
                buyer: {
                    select: { display_name: true }
                },
                items: true,
                quotes: {
                    include: {
                        supplier: {
                            select: { display_name: true, slug: true }
                        }
                    }
                }
            }
        });

        if (!rfq) {
            return NextResponse.json({ success: false, error: "RFQ not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: rfq });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        // Update logic (e.g. close RFQ, edit details if not quoted)
        // MVP: mainly for closing or creating order?

        const updatedRfq = await db.rfq.update({
            where: { id: params.id },
            data: body // Validate in real app
        });

        return NextResponse.json({ success: true, data: updatedRfq });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
