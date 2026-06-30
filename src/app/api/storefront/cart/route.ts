import { NextRequest, NextResponse } from "next/server";
import {
  attachStorefrontSession,
  clearStorefrontCart,
  getStorefrontCart,
  getStorefrontSession,
} from "@/lib/storefront/store";

export async function GET(request: NextRequest) {
  const sessionId = getStorefrontSession(request);
  const cart = await getStorefrontCart(sessionId);
  return attachStorefrontSession(NextResponse.json({ success: true, data: cart }), sessionId);
}

export async function DELETE(request: NextRequest) {
  const sessionId = getStorefrontSession(request);
  const cart = await clearStorefrontCart(sessionId);
  return attachStorefrontSession(NextResponse.json({ success: true, data: cart }), sessionId);
}
