"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  MapPin,
  Package,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function OrderDetailClient({ orderId }: { orderId: string }) {
  const order = useCartStore((state) =>
    state.orders.find((entry) => entry.id.toLowerCase() === orderId.toLowerCase()),
  );

  if (!order) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-10 text-center shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
          <h1 className="font-display text-4xl font-semibold tracking-[-0.04em]">Order not found in this browser.</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#5a554f]">
            Orders are stored locally for the current static storefront. Use the same browser where checkout was completed.
          </p>
          <Link href="/orders" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]">
            Back to orders
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const address = `${order.address.line1}${order.address.line2 ? `, ${order.address.line2}` : ""}, ${order.address.city}, ${order.address.state} ${order.address.postalCode}`;

  return (
    <div className="space-y-12">
      <section className="bg-[#111111] py-16 text-[#f5f1eb]">
        <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f0c27b]">Order status</p>
            <h1 className="mt-3 font-display text-6xl font-semibold tracking-[-0.06em]">{order.status}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#d8cec1]">Order {order.id} was placed on {order.placedOn}.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">{order.id}</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">{order.trackingId}</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">{order.courier}</span>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6">
            <Truck className="mb-5 h-7 w-7 text-[#f0c27b]" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d8cec1]">Delivery address</p>
            <p className="mt-3 text-sm leading-6 text-white">{address}</p>
            <Link
              href="/track-order"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#111111]"
            >
              Track live
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em]">Tracking timeline</h2>
          <div className="mt-8">
            {order.events.map((event, index) => (
              <div key={`${event.label}-${event.time}`} className="grid grid-cols-[32px_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      event.state === "pending"
                        ? "bg-[#d8cec1] text-[#5a554f]"
                        : event.state === "current"
                          ? "bg-[#f0c27b] text-[#111111]"
                          : "bg-[#8f5f4a] text-white"
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {index < order.events.length - 1 ? <span className="h-16 w-px bg-[#111111]/12" /> : null}
                </div>
                <div className="pb-8">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <h3 className="text-lg font-bold">{event.label}</h3>
                    <span className="text-sm font-semibold text-[#7d766e]">{event.time}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#5a554f]">{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">Order summary</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <CreditCard className="h-4 w-4 text-[#8f5f4a]" />
                <span>{order.paymentMethod}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#8f5f4a]" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-3">
                <ClipboardList className="h-4 w-4 text-[#8f5f4a]" />
                <span>Rs. {order.total.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
          <Link href="/returns" className="flex items-center justify-between rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-5 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
            <span className="inline-flex items-center gap-3 font-bold">
              <RotateCcw className="h-5 w-5 text-[#8f5f4a]" />
              Return or replace
            </span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/account" className="flex items-center justify-between rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-5 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
            <span className="inline-flex items-center gap-3 font-bold">
              <ShieldCheck className="h-5 w-5 text-[#8f5f4a]" />
              Account support
            </span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </section>

      <section className="bg-[#fffaf2] py-12">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em]">Items in this order</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {order.items.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.productSlug ?? item.id}`}
                className="rounded-[2rem] border border-[#111111]/10 bg-[#f5f1eb] p-5 transition hover:border-[#8f5f4a]"
              >
                <Package className="mb-5 h-8 w-8 text-[#8f5f4a]" />
                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">{item.name}</h3>
                <p className="mt-4 text-sm font-bold">Qty {item.quantity}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
