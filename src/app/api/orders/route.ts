import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { orderSchema } from "@/lib/validators";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const limit = parseInt(searchParams.get("limit") || "10");

        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: { include: { organization: true } } }
        });

        const org = user?.team_memberships[0]?.organization;

        let where: any = {};

        if (org?.type === 'buyer') {
            where.buyer_id = org.id;
        } else if (org?.type === 'supplier') {
            where.supplier_id = org.id;
        }

        const orders = await db.order.findMany({
            where,
            take: limit,
            orderBy: { created_at: 'desc' },
            include: {
                order_items: true
            }
        });

        return NextResponse.json({ success: true, data: orders });
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

        // Check if user is a buyer
        const membership = user?.team_memberships.find(m => m.organization.type === 'buyer');
        if (!membership) {
            return NextResponse.json({ success: false, error: "Must be a registered buyer to place orders" }, { status: 403 });
        }

        const body = await req.json();
        const validation = orderSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ success: false, error: validation.error.errors }, { status: 400 });
        }

        const { items, delivery_address } = validation.data;

        // Validate items exist and have enough stock
        // Also all items must be from same supplier for MVP? 
        // Or we split orders? For simplicity, we assume single supplier or handle split later.
        // Let's assume single supplier for now or check.

        // Fetch products
        const productIds = items.map(i => i.product_id);
        const products = await db.product.findMany({
            where: { id: { in: productIds } }
        });

        if (products.length !== items.length) {
            return NextResponse.json({ success: false, error: "Some products not found" }, { status: 400 });
        }

        // Check supplier (must be same for all items for a single order)
        const supplierId = products[0].supplier_id;
        const mixedSuppliers = products.some(p => p.supplier_id !== supplierId);

        if (mixedSuppliers) {
            return NextResponse.json({ success: false, error: "Cannot mix products from different suppliers in one order (MVP restriction)" }, { status: 400 });
        }

        // Calculations
        let subtotal = 0;
        const orderItemsData = items.map(item => {
            const product = products.find(p => p.id === item.product_id)!;
            const lineTotal = Number(product.base_price) * item.quantity;
            subtotal += lineTotal;

            return {
                product_id: item.product_id,
                product_name: product.name,
                product_sku: product.sku,
                quantity: item.quantity,
                unit_price: product.base_price,
                subtotal: lineTotal,
                total_amount: lineTotal, // Tax/Discount logic later
            };
        });

        const total_amount = subtotal; // + Tax + Shipping

        // Generate Order Number
        const count = await db.order.count();
        const order_number = `ORD-${new Date().getFullYear()}-${1000 + count + 1}`;

        const order = await db.order.create({
            data: {
                order_number,
                buyer_id: membership.organization.id,
                supplier_id: supplierId,
                buyer_user_id: userId,
                subtotal,
                total_amount,
                status: 'pending',
                delivery_address: delivery_address || {},
                order_items: {
                    create: orderItemsData
                },
                status_history: {
                    create: {
                        status: 'pending',
                        notes: 'Order Created',
                        changed_by_id: userId
                    }
                }
            },
            include: {
                order_items: true
            }
        });

        return NextResponse.json({ success: true, data: order }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
