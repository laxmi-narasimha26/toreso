import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrderDetailClient from "@/components/storefront/OrderDetailClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Order ${id}`,
    description: "Live Toreso order status, shipment timeline, tracking ID, and return/replacement actions.",
    alternates: {
      canonical: `/orders/${id}`,
    },
  };
}

export default async function OrderDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#fbfaf4] text-stone-950">
      <Navbar />
      <main className="pt-28">
        <section className="border-b border-stone-200 bg-white py-5">
          <div className="container mx-auto flex flex-wrap items-center gap-2 px-6 text-sm font-semibold text-stone-500">
            <Link href="/orders" className="inline-flex items-center gap-2 text-emerald-800">
              <ArrowLeft className="h-4 w-4" />
              Orders
            </Link>
            <span>/</span>
            <span className="text-stone-950">{id}</span>
          </div>
        </section>
        <OrderDetailClient orderId={id} />
      </main>
      <Footer />
    </div>
  );
}
