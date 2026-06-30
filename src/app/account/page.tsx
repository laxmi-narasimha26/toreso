import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bell, Heart, PackageCheck, RotateCcw, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { sampleOrders } from "@/data/commerce";

export const metadata: Metadata = {
  title: "Account",
  description: "Toreso account dashboard for orders, tracking, returns, saved products, and premium packaging support.",
  alternates: {
    canonical: "/account",
  },
};

const accountCards = [
  { title: "Your orders", detail: "Track, reorder, replace, or review purchases.", href: "/orders", icon: PackageCheck },
  { title: "Track package", detail: "Enter an order ID or tracking code.", href: "/track-order", icon: Truck },
  { title: "Returns", detail: "Start replacement or return-ready pickup.", href: "/returns", icon: RotateCcw },
  { title: "Saved products", detail: "Shortlist premium packaging innovations.", href: "/products", icon: Heart },
  { title: "Security", detail: "Manage addresses, payment, and alerts.", href: "/account", icon: ShieldCheck },
  { title: "Product drops", detail: "Get notified when new concepts launch.", href: "/products", icon: Bell },
];

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf4] text-stone-950">
      <Navbar />
      <main className="pt-28">
        <section className="bg-white py-14">
          <div className="container mx-auto px-6">
            <p className="text-sm font-bold uppercase text-emerald-800">Account</p>
            <h1 className="mt-2 text-4xl font-display font-bold sm:text-5xl">
              Your premium packaging command center.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
              Order status, tracking, returns, saved products, support, and upcoming
              product drops in one consumer account surface.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {accountCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-emerald-300"
                >
                  <card.icon className="mb-5 h-7 w-7 text-emerald-700" />
                  <h2 className="text-2xl font-display font-bold">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{card.detail}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
                    Open
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-950 p-6 text-white">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <ShoppingBag className="mb-4 h-7 w-7 text-emerald-300" />
                  <h2 className="text-3xl font-display font-bold">Latest order: {sampleOrders[0].id}</h2>
                  <p className="mt-2 text-sm text-stone-300">{sampleOrders[0].promise}</p>
                </div>
                <Link
                  href={`/orders/${sampleOrders[0].id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-stone-950"
                >
                  View order
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
