import { NextRequest, NextResponse } from "next/server";
import {
  attachStorefrontSession,
  getStorefrontSession,
  trackStorefrontOrder,
} from "@/lib/storefront/store";

type RouteContext = {
  params: Promise<{ identifier: string }>;
};

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { identifier } = await params;
  const sessionId = getStorefrontSession(request);
  const order = await trackStorefrontOrder(identifier, sessionId);

  if (!order) {
    return attachStorefrontSession(
      NextResponse.json({ success: false, error: "Tracking record not found" }, { status: 404 }),
      sessionId,
    );
  }

  return attachStorefrontSession(NextResponse.json({ success: true, data: order }), sessionId);
}
