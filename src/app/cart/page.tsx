import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartClient from "@/components/storefront/CartClient";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review Toreso packaging products, premium bundles, delivery promise, savings, and checkout summary.",
  alternates: {
    canonical: "/cart",
  },
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-3 pb-8 pt-5">
          <div className="mx-auto rounded-[2rem] bg-[#111111] px-6 py-12 text-[#f5f1eb] md:px-10">
          <div className="container mx-auto flex flex-col justify-between gap-5 px-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c27b]">Premium cart</p>
              <h1 className="mt-3 font-display text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Your Toreso packaging stack.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#d8cec1]">
                Review product bundles, delivery promise, return-ready packaging,
                and savings before checkout.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#f5f1eb]"
            >
              Continue shopping
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <CartClient />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
