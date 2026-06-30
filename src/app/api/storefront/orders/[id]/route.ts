import { NextRequest, NextResponse } from "next/server";
import {
  attachStorefrontSession,
  getStorefrontOrder,
  getStorefrontSession,
} from "@/lib/storefront/store";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  const sessionId = getStorefrontSession(request);
  const order = await getStorefrontOrder(id, sessionId);

  if (!order) {
    return attachStorefrontSession(
      NextResponse.json({ success: false, error: "Order not found" }, { status: 404 }),
      sessionId,
    );
  }

  return attachStorefrontSession(NextResponse.json({ success: true, data: order }), sessionId);
}
