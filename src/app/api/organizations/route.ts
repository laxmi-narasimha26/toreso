import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { organizationSchema } from "@/lib/validators";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const type = searchParams.get("type"); // 'buyer' or 'supplier'
        const limit = parseInt(searchParams.get("limit") || "10");

        const where: any = {
            status: 'active' // Only active orgs by default
        };

        if (type) {
            where.type = type;
        }

        const organizations = await db.organization.findMany({
            where,
            take: limit,
            select: {
                id: true,
                display_name: true,
                slug: true,
                logo_url: true,
                type: true,
                // Don't expose sensitive info like GST by default in list
                ...(type === 'supplier' ? {
                    supplier_profile: {
                        select: {
                            business_type: true,
                            overall_rating: true,
                        }
                    }
                } : {})
            }
        });

        return NextResponse.json({ success: true, data: organizations });
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

        const body = await req.json();
        const validation = organizationSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ success: false, error: validation.error.errors }, { status: 400 });
        }

        const { legal_name, display_name, type, gst_number } = validation.data;

        // Check if user already owns an org? Maybe allow multiple?
        // For MVP, user creates one org.

        // Check slug uniqueness (generate from display_name)
        const slug = display_name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const existing = await db.organization.findUnique({ where: { slug } });
        if (existing) {
            return NextResponse.json({ success: false, error: "Organization name already taken" }, { status: 409 });
        }

        // Transaction to create org and link user as admin team member
        const org = await db.$transaction(async (tx) => {
            const newOrg = await tx.organization.create({
                data: {
                    legal_name,
                    display_name,
                    slug,
                    type,
                    gst_number,
                    status: 'pending', // Pending verification
                }
            });

            // Add user as team member
            await tx.teamMember.create({
                data: {
                    organization_id: newOrg.id,
                    user_id: userId,
                    role: 'admin',
                    status: 'active'
                }
            });

            // Create profile based on type
            if (type === 'buyer') {
                await tx.buyerProfile.create({
                    data: { organization_id: newOrg.id }
                });
            } else {
                await tx.supplierProfile.create({
                    data: { organization_id: newOrg.id }
                });
            }

            return newOrg;
        });

        return NextResponse.json({ success: true, data: org }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
