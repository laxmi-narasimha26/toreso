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
    <div className="min-h-screen bg-[#fbfaf4] text-stone-950">
      <Navbar />
      <main className="pt-28">
        <section className="border-b border-stone-200 bg-white py-14">
          <div className="container mx-auto flex flex-col justify-between gap-5 px-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-emerald-800">Orders</p>
              <h1 className="mt-2 text-4xl font-display font-bold sm:text-5xl">
                Order status and history.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
                A premium order center for active deliveries, delivered shipments,
                returns, replacements, invoices, and reorder actions.
              </p>
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
