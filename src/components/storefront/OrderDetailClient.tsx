"use client";

import { useEffect, useState } from "react";
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

type OrderDetail = {
  id: string;
  status: string;
  placedOn: string;
  total: number;
  paymentMethod: string;
  courier: string;
  trackingId: string;
  address: { line1: string; line2?: string; city: string; state: string; postalCode: string; country: string };
  items: Array<{ name: string; productSlug: string; quantity: number }>;
  events: Array<{ label: string; detail: string; time: string; state: "complete" | "current" | "pending" }>;
};

export default function OrderDetailClient({ orderId }: { orderId: string }) {
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/storefront/orders/${orderId}`, { cache: "no-store" })
      .then(async (response) => {
        const json = await response.json();
        if (!response.ok) {
          setNotFound(true);
          return;
        }
        setOrder(json.data);
      })
      .catch(() => setNotFound(true));
  }, [orderId]);

  if (notFound) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-soft">
        <h1 className="text-3xl font-display font-bold">Order not found.</h1>
        <Link href="/orders" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white">
          Back to orders
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  if (!order) {
    return <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">Loading order...</div>;
  }

  const address = `${order.address.line1}${order.address.line2 ? `, ${order.address.line2}` : ""}, ${order.address.city}, ${order.address.state} ${order.address.postalCode}`;

  return (
    <div className="space-y-12">
      <section className="bg-stone-950 py-16 text-white">
        <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Order status</p>
            <h1 className="mt-3 text-5xl font-display font-bold">{order.status}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">Order {order.id} was placed on {order.placedOn}.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">{order.id}</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">{order.trackingId}</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">{order.courier}</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
            <Truck className="mb-5 h-7 w-7 text-emerald-300" />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-stone-300">Delivery address</p>
            <p className="mt-3 text-sm leading-6 text-white">{address}</p>
            <Link
              href="/track-order"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-stone-950"
            >
              Track live
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <h2 className="text-3xl font-display font-bold">Tracking timeline</h2>
          <div className="mt-8 space-y-0">
            {order.events.map((event, index) => (
              <div key={`${event.label}-${event.time}`} className="grid grid-cols-[32px_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      event.state === "pending"
                        ? "bg-stone-200 text-stone-500"
                        : event.state === "current"
                          ? "bg-amber-400 text-stone-950"
                          : "bg-emerald-700 text-white"
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {index < order.events.length - 1 ? <span className="h-16 w-px bg-stone-200" /> : null}
                </div>
                <div className="pb-8">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <h3 className="text-lg font-bold">{event.label}</h3>
                    <span className="text-sm font-semibold text-stone-500">{event.time}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-display font-bold">Order summary</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <CreditCard className="h-4 w-4 text-emerald-700" />
                <span>{order.paymentMethod}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald-700" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-3">
                <ClipboardList className="h-4 w-4 text-emerald-700" />
                <span>Rs. {order.total.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
          <Link
            href="/returns"
            className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-soft transition hover:border-emerald-300"
          >
            <span className="inline-flex items-center gap-3 font-bold">
              <RotateCcw className="h-5 w-5 text-emerald-700" />
              Return or replace
            </span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/account"
            className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-soft transition hover:border-emerald-300"
          >
            <span className="inline-flex items-center gap-3 font-bold">
              <ShieldCheck className="h-5 w-5 text-emerald-700" />
              Account support
            </span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold">Items in this order</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {order.items.map((item) => (
              <Link
                key={item.productSlug}
                href={`/products/${item.productSlug}`}
                className="rounded-2xl border border-stone-200 bg-[#fbfaf4] p-5 transition hover:border-emerald-300 hover:bg-white"
              >
                <Package className="mb-5 h-8 w-8 text-emerald-700" />
                <h3 className="text-lg font-display font-bold">{item.name}</h3>
                <p className="mt-4 text-sm font-bold">Qty {item.quantity}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
