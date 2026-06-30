import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CheckoutClient from "@/components/storefront/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Premium Toreso checkout flow for shipping, payment, order review, and delivery promise.",
  alternates: {
    canonical: "/checkout",
  },
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-3 pb-8 pt-5">
          <div className="mx-auto rounded-[2rem] bg-[#111111] px-6 py-14 text-[#f5f1eb] md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c27b]">Secure checkout</p>
            <h1 className="mt-3 font-display text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Complete your Toreso order.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#d8cec1]">
              A premium checkout model with address, dispatch, payment, packaging
              promise, tracking, and replacement support.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <CheckoutClient />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
