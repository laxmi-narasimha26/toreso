import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackOrderClient from "@/components/storefront/TrackOrderClient";

export const metadata: Metadata = {
  title: "Track Order",
  description: "Track Toreso order delivery status, shipment progress, courier updates, and return-ready packaging state.",
  alternates: {
    canonical: "/track-order",
  },
};

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-3 pb-8 pt-5">
          <div className="mx-auto rounded-[2rem] bg-[#111111] px-6 py-16 text-[#f5f1eb] md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c27b]">Track package</p>
            <h1 className="mt-3 max-w-4xl font-display text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Real-time order tracking surface.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#d8cec1]">
              Track by order ID or courier tracking number. Orders created through checkout are persisted locally.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <TrackOrderClient />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
