import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const org = await db.organization.findUnique({
            where: { id: params.id },
            include: {
                buyer_profile: true,
                supplier_profile: true
            }
        });

        if (!org) return NextResponse.json({ success: false, error: "Organization not found" }, { status: 404 });

        return NextResponse.json({ success: true, data: org });
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

        // Verify membership
        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: true }
        });

        const isMember = user?.team_memberships.some(m => m.organization_id === params.id && (m.role === 'admin' || m.role === 'owner'));

        if (!isMember) {
            return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
        }

        const body = await req.json();
        const updatedOrg = await db.organization.update({
            where: { id: params.id },
            data: body
        });

        return NextResponse.json({ success: true, data: updatedOrg });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
