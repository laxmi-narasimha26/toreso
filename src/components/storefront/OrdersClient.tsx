"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Package, Search, Truck } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import OrderDetailClient from "@/components/storefront/OrderDetailClient";

export default function OrdersClient() {
  const orders = useCartStore((state) => state.orders);
  const [requestedOrderId, setRequestedOrderId] = useState("");

  useEffect(() => {
    const match = window.location.pathname.match(/^\/orders\/([^/?#]+)/);
    const queryOrder = new URLSearchParams(window.location.search).get("order");
    setRequestedOrderId(decodeURIComponent(match?.[1] ?? queryOrder ?? ""));
  }, []);

  if (requestedOrderId) {
    return <OrderDetailClient orderId={requestedOrderId} />;
  }

  if (orders.length === 0) {
    return (
      <div className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-10 text-center shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
        <Truck className="mx-auto mb-5 h-10 w-10 text-[#8f5f4a]" />
        <h2 className="font-display text-4xl font-semibold tracking-[-0.04em]">No orders yet.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#5a554f]">
          Place an order from checkout and it will appear here instantly in this browser.
        </p>
        <Link href="/products" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]">
          Browse products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <Link href="/track-order" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#f5f1eb]">
          Track an order
          <Search className="h-4 w-4" />
        </Link>
      </div>
      {orders.map((order) => (
        <article key={order.id} className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#d8d5ec] px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-[#111111]">
                  {order.status}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#5a554f]">
                  <CalendarDays className="h-4 w-4" />
                  Placed {order.placedOn}
                </span>
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.04em]">{order.id}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5a554f]">Tracking ID: {order.trackingId}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {order.items.map((item) => (
                  <Link
                    key={`${order.id}-${item.id}`}
                    href={`/products/${item.productSlug ?? item.id}`}
                    className="flex items-center gap-3 rounded-full border border-[#111111]/10 bg-[#f5f1eb] px-4 py-2"
                  >
                    <Package className="h-4 w-4 text-[#8f5f4a]" />
                    <span className="text-sm font-semibold text-[#111111]">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 lg:min-w-[260px]">
              <div className="rounded-[1.3rem] border border-[#111111]/10 bg-[#f5f1eb] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f5f4a]">Order total</p>
                <p className="mt-2 font-sans text-3xl font-medium tracking-[-0.06em]">
                  Rs. {order.total.toLocaleString("en-IN")}
                </p>
              </div>
              <Link
                href={`/orders?order=${encodeURIComponent(order.id)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#f5f1eb]"
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
