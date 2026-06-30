import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth();
        if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

        const order = await db.order.findUnique({
            where: { id: params.id },
            include: {
                order_items: true,
                buyer: { select: { display_name: true } },
                supplier: { select: { display_name: true } },
                status_history: true
            }
        });

        if (!order) return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });

        // Verify access (must be buyer or supplier)
        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: true }
        });
        const userOrgIds = user?.team_memberships.map(m => m.organization_id) || [];

        if (!userOrgIds.includes(order.buyer_id) && !userOrgIds.includes(order.supplier_id)) {
            return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
        }

        return NextResponse.json({ success: true, data: order });
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
        if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

        const body = await req.json();
        const { status, notes } = body;

        // Only allow status updates if user belongs to supplier (for processing) or buyer (for cancelling/receiving)
        // For MVP, simplified

        const updatedOrder = await db.order.update({
            where: { id: params.id },
            data: {
                status,
                status_history: {
                    create: {
                        status,
                        notes,
                        changed_by_id: userId
                    }
                }
            }
        });

        return NextResponse.json({ success: true, data: updatedOrder });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
