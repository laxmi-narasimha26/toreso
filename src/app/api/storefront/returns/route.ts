import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  attachStorefrontSession,
  createReturnRequest,
  getStorefrontSession,
  listReturnRequests,
} from "@/lib/storefront/store";

const returnRequestSchema = z.object({
  orderId: z.string().min(1),
  productSlug: z.string().optional(),
  reason: z.string().min(3),
  resolution: z.enum(["replacement", "refund", "repair-kit"]).default("replacement"),
});

type ReturnRequestInput = {
  orderId: string;
  productSlug?: string;
  reason: string;
  resolution: "replacement" | "refund" | "repair-kit";
};

export async function GET(request: NextRequest) {
  const sessionId = getStorefrontSession(request);
  const returns = await listReturnRequests(sessionId);
  return attachStorefrontSession(NextResponse.json({ success: true, data: returns }), sessionId);
}

export async function POST(request: NextRequest) {
  try {
    const sessionId = getStorefrontSession(request);
    const input = returnRequestSchema.parse(await request.json()) as ReturnRequestInput;
    const returnRequest = await createReturnRequest(sessionId, input);
    return attachStorefrontSession(
      NextResponse.json({ success: true, data: returnRequest }, { status: 201 }),
      sessionId,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not create return request";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
