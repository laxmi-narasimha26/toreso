import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const product = await db.product.findUnique({
            where: { id: params.id },
            include: {
                category: true,
                supplier: {
                    include: { supplier_profile: true }
                }
            }
        });

        if (!product) return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });

        return NextResponse.json({ success: true, data: product });
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

        // Verify ownership
        const product = await db.product.findUnique({ where: { id: params.id } });
        if (!product) return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });

        // Check if user belongs to the supplier org
        // Simplified check: assume server action or similar handles strict checks, 
        // here we check if user has access to this product's org.
        // Fetch user org
        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: { include: { organization: true } } }
        });
        const org = user?.team_memberships.find(m => m.organization.id === product.supplier_id);

        if (!org && !user?.role.includes('admin')) {
            return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
        }

        const body = await req.json();
        const updatedProduct = await db.product.update({
            where: { id: params.id },
            data: body // In real app, validate body with Zod partial schema
        });

        return NextResponse.json({ success: true, data: updatedProduct });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth();
        if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

        // Verify ownership similar to PUT
        const product = await db.product.findUnique({ where: { id: params.id } });
        if (!product) return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });

        // Fetch user org
        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: { include: { organization: true } } }
        });
        const org = user?.team_memberships.find(m => m.organization.id === product.supplier_id);

        if (!org && !user?.role.includes('admin')) {
            return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
        }

        // Soft delete
        await db.product.update({
            where: { id: params.id },
            data: { status: 'archived' }
        });

        return NextResponse.json({ success: true, message: "Product deleted" });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
