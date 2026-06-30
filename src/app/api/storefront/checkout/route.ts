import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  attachStorefrontSession,
  createStorefrontOrder,
  getStorefrontSession,
  type StorefrontAddress,
  type StorefrontCustomer,
} from "@/lib/storefront/store";

const checkoutSchema = z.object({
  customer: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),
  }),
  address: z.object({
    name: z.string().min(2),
    phone: z.string().min(8),
    line1: z.string().min(5),
    line2: z.string().optional(),
    city: z.string().min(2),
    state: z.string().min(2),
    postalCode: z.string().min(4),
    country: z.string().min(2).default("India"),
  }),
  paymentMethod: z.string().min(2).default("cod"),
});

export async function POST(request: NextRequest) {
  try {
    const sessionId = getStorefrontSession(request);
    const input = checkoutSchema.parse(await request.json()) as {
      customer: StorefrontCustomer;
      address: StorefrontAddress;
      paymentMethod: string;
    };
    const order = await createStorefrontOrder(sessionId, input);
    return attachStorefrontSession(NextResponse.json({ success: true, data: order }, { status: 201 }), sessionId);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
