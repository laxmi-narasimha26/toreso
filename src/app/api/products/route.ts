import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productSchema } from "@/lib/validators";
import { getCurrentRole, getCurrentUser } from "@/lib/auth";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        const search = searchParams.get("search");
        const category = searchParams.get("category");
        const supplier = searchParams.get("supplier");

        const skip = (page - 1) * limit;

        const where: any = {};

        if (search) {
            where.OR = [
                { name: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
            ];
        }

        if (category) {
            where.category_id = category;
        }

        if (supplier) {
            where.supplier_id = supplier;
        }

        // Default to active products unless specific status requested by authorized user
        // For now simple public view
        where.status = 'active';

        const [products, total] = await Promise.all([
            db.product.findMany({
                where,
                skip,
                take: limit,
                include: {
                    category: true,
                    supplier: {
                        select: {
                            id: true,
                            display_name: true,
                            slug: true,
                        }
                    }
                },
                orderBy: { created_at: "desc" },
            }),
            db.product.count({ where }),
        ]);

        return NextResponse.json({
            success: true,
            data: products,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
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

        // Role check
        // In a real app we might fetch user role from DB or session claim
        // For now let's assume if they have a SupplierProfile they can post
        // OR just rely on our DB check

        const user = await db.user.findUnique({
            where: { id: userId },
            include: {
                team_memberships: {
                    include: {
                        organization: true
                    }
                }
            }
        });

        if (!user) {
            return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
        }

        // Find the supplier organization this user belongs to
        // Simplified: assume first organization is the one
        const membership = user.team_memberships.find(m => m.organization.type === 'supplier');

        if (!membership) {
            return NextResponse.json({ success: false, error: "Must be a supplier to create products" }, { status: 403 });
        }

        const body = await req.json();
        const validation = productSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ success: false, error: validation.error.errors }, { status: 400 });
        }

        const { name, slug, category_id, base_price, description, stock_quantity, min_order_quantity, currency } = validation.data;

        // Check slug uniqueness within supplier
        const existing = await db.product.findUnique({
            where: {
                supplier_id_slug: {
                    supplier_id: membership.organization.id,
                    slug: slug
                }
            }
        });

        if (existing) {
            return NextResponse.json({ success: false, error: "Product slug already exists for this supplier" }, { status: 409 });
        }

        const product = await db.product.create({
            data: {
                name,
                slug,
                category_id,
                base_price,
                description,
                stock_quantity,
                min_order_quantity,
                currency,
                supplier_id: membership.organization.id,
                status: 'draft', // Default to draft
            },
        });

        return NextResponse.json({ success: true, data: product }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
