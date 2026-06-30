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
    <div className="min-h-screen bg-[#fbfaf4] text-stone-950">
      <Navbar />
      <main className="pt-28">
        <section className="bg-stone-950 py-16 text-white">
          <div className="container mx-auto px-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Track package</p>
            <h1 className="mt-3 max-w-4xl text-5xl font-display font-bold">Real-time order tracking surface.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-300">
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
