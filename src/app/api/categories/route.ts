import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
    try {
        const categories = await db.category.findMany({
            where: { is_active: true },
            orderBy: { sort_order: "asc" },
            include: {
                children: true
            }
        });

        // Build hierarchy
        const rootCategories = categories.filter(c => !c.parent_id);

        return NextResponse.json({ success: true, data: categories });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
