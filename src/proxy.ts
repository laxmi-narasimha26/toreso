import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const authProxy = clerkMiddleware();

export default function proxy(...args: Parameters<typeof authProxy>) {
  if (process.env.LOCAL_AUTH_BYPASS === "true") {
    return NextResponse.next();
  }

  return authProxy(...args);
}

export const config = {
  matcher: [
    // Allow Clerk internals through the proxy
    "/((?!_next|_vercel|__clerk).*)",
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
