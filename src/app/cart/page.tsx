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
    <div className="min-h-screen bg-[#fbfaf4] text-stone-950">
      <Navbar />
      <main className="pt-28">
        <section className="border-b border-stone-200 bg-white py-10">
          <div className="container mx-auto flex flex-col justify-between gap-5 px-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-emerald-800">Premium cart</p>
              <h1 className="mt-2 text-4xl font-display font-bold sm:text-5xl">
                Your Toreso packaging stack.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
                Review product bundles, delivery promise, return-ready packaging,
                and savings before checkout.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-semibold"
            >
              Continue shopping
              <ArrowRight className="h-4 w-4" />
            </Link>
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
