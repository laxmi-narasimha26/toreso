import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  attachStorefrontSession,
  getStorefrontSession,
  updateStorefrontCartItem,
} from "@/lib/storefront/store";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

const updateCartItemSchema = z.object({
  quantity: z.number().int().min(0).max(99),
});

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  try {
    const { slug } = await params;
    const sessionId = getStorefrontSession(request);
    const input = updateCartItemSchema.parse(await request.json());
    const cart = await updateStorefrontCartItem(sessionId, slug, input.quantity);
    return attachStorefrontSession(NextResponse.json({ success: true, data: cart }), sessionId);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not update cart";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  const { slug } = await params;
  const sessionId = getStorefrontSession(request);
  const cart = await updateStorefrontCartItem(sessionId, slug, 0);
  return attachStorefrontSession(NextResponse.json({ success: true, data: cart }), sessionId);
}
