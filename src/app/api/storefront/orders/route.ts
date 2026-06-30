import { NextRequest, NextResponse } from "next/server";
import {
  attachStorefrontSession,
  getStorefrontSession,
  listStorefrontOrders,
} from "@/lib/storefront/store";

export async function GET(request: NextRequest) {
  const sessionId = getStorefrontSession(request);
  const orders = await listStorefrontOrders(sessionId);
  return attachStorefrontSession(NextResponse.json({ success: true, data: orders }), sessionId);
}
