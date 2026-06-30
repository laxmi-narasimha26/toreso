"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Package, Search, Truck } from "lucide-react";

type OrderSummary = {
  id: string;
  placedOn: string;
  status: string;
  total: number;
  trackingId: string;
  items: Array<{ name: string; productSlug: string; quantity: number }>;
};

export default function OrdersClient() {
  const [orders, setOrders] = useState<OrderSummary[] | null>(null);

  useEffect(() => {
    fetch("/api/storefront/orders", { cache: "no-store" })
      .then((response) => response.json())
      .then((json) => setOrders(json.data))
      .catch(() => setOrders([]));
  }, []);

  if (!orders) {
    return <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-soft">
        <Truck className="mx-auto mb-5 h-10 w-10 text-emerald-700" />
        <h2 className="text-3xl font-display font-bold">No orders yet.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600">
          Place an order from checkout and it will appear here from the persistent storefront API.
        </p>
        <Link href="/products" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white">
          Browse products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <Link href="/track-order" className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white">
          Track an order
          <Search className="h-4 w-4" />
        </Link>
      </div>
      {orders.map((order) => (
        <article key={order.id} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                  {order.status}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600">
                  <CalendarDays className="h-4 w-4" />
                  Placed {order.placedOn}
                </span>
              </div>
              <h2 className="text-2xl font-display font-bold">{order.id}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">Tracking ID: {order.trackingId}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {order.items.map((item) => (
                  <Link
                    key={`${order.id}-${item.productSlug}`}
                    href={`/products/${item.productSlug}`}
                    className="flex items-center gap-3 rounded-lg border border-stone-200 bg-[#fbfaf4] px-3 py-2"
                  >
                    <Package className="h-4 w-4 text-emerald-700" />
                    <span className="text-sm font-semibold text-stone-700">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 lg:min-w-[260px]">
              <div className="rounded-lg border border-stone-200 bg-[#fbfaf4] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">Order total</p>
                <p className="mt-2 text-2xl font-display font-bold">Rs. {order.total.toLocaleString("en-IN")}</p>
              </div>
              <Link
                href={`/orders/${order.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white"
              >
                View status
                <Truck className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
