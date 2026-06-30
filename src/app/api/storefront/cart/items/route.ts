import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  addStorefrontCartItem,
  attachStorefrontSession,
  getStorefrontSession,
} from "@/lib/storefront/store";

const addCartItemSchema = z.object({
  productSlug: z.string().min(1),
  quantity: z.number().int().min(1).max(99).default(1),
});

export async function POST(request: NextRequest) {
  try {
    const sessionId = getStorefrontSession(request);
    const input = addCartItemSchema.parse(await request.json());
    const cart = await addStorefrontCartItem(sessionId, input.productSlug, input.quantity);
    return attachStorefrontSession(NextResponse.json({ success: true, data: cart }, { status: 201 }), sessionId);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not add item";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
