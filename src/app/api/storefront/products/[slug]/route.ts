import { NextResponse } from "next/server";
import { getStorefrontProduct } from "@/lib/storefront/store";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const product = await getStorefrontProduct(slug);

  if (!product) {
    return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: product });
}
