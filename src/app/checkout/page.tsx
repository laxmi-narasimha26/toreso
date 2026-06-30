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
    <div className="min-h-screen bg-[#fbfaf4] text-stone-950">
      <Navbar />
      <main className="pt-28">
        <section className="bg-stone-950 py-14 text-white">
          <div className="container mx-auto px-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Secure checkout</p>
            <h1 className="mt-3 text-4xl font-display font-bold sm:text-5xl">
              Complete your Toreso order.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300">
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
