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
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="border-b border-[#111111]/10 bg-[#fffaf2] py-5">
          <div className="container mx-auto flex flex-wrap items-center gap-2 px-6 text-sm font-semibold text-[#7d766e]">
            <Link href="/orders" className="inline-flex items-center gap-2 text-[#8f5f4a]">
              <ArrowLeft className="h-4 w-4" />
              Orders
            </Link>
            <span>/</span>
            <span className="text-[#111111]">{id}</span>
          </div>
        </section>
        <OrderDetailClient orderId={id} />
      </main>
      <Footer />
    </div>
  );
}
