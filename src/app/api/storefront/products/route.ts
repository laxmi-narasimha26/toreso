import { NextRequest, NextResponse } from "next/server";
import { listStorefrontProducts } from "@/lib/storefront/store";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase();
  const category = searchParams.get("category");
  const limit = Number(searchParams.get("limit") ?? "0");
  const products = await listStorefrontProducts();
  const filtered = products.filter((product) => {
    const matchesQuery = query
      ? `${product.name} ${product.description} ${product.aisle} ${product.format}`
          .toLowerCase()
          .includes(query)
      : true;
    const matchesCategory = category ? product.categorySlug === category : true;
    return matchesQuery && matchesCategory;
  });

  return NextResponse.json({
    success: true,
    data: limit > 0 ? filtered.slice(0, limit) : filtered,
  });
}
