import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrdersClient from "@/components/storefront/OrdersClient";

export const metadata: Metadata = {
  title: "Your Orders",
  description: "View Toreso order history, delivery status, tracking, reorder links, and replacement actions.",
  alternates: {
    canonical: "/orders",
  },
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-3 pb-8 pt-5">
          <div className="mx-auto rounded-[2rem] bg-[#111111] px-6 py-14 text-[#f5f1eb] md:px-10">
          <div className="container mx-auto flex flex-col justify-between gap-5 px-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c27b]">Orders</p>
              <h1 className="mt-3 font-display text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Order status and history.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#d8cec1]">
                A premium order center for active deliveries, delivered shipments,
                returns, replacements, invoices, and reorder actions.
              </p>
            </div>
          </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <OrdersClient />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
