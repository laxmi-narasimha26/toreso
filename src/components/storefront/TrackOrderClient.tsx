"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPinned, PackageCheck, Search, Truck } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import type { StorefrontOrder } from "@/store/cartStore";

export default function TrackOrderClient() {
  const orders = useCartStore((state) => state.orders);
  const [identifier, setIdentifier] = useState("");
  const [order, setOrder] = useState<StorefrontOrder | null>(null);
  const [error, setError] = useState("");

  const track = () => {
    const query = identifier.trim().toLowerCase();
    setError("");
    setOrder(null);

    if (!query) {
      setError("Enter an order ID or tracking ID.");
      return;
    }

    const match = orders.find(
      (entry) => entry.id.toLowerCase() === query || entry.trackingId.toLowerCase() === query,
    );

    if (!match) {
      setError("Tracking record not found in this browser. Use the order ID created at checkout.");
      return;
    }

    setOrder(match);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
        <label className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d766e]" htmlFor="tracking">
          Order ID or tracking number
        </label>
        <div className="mt-3 flex gap-2">
          <input
            id="tracking"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            placeholder="Example: TO-2026-1234567"
            className="h-12 flex-1 rounded-full border border-[#111111]/12 bg-[#f5f1eb] px-4 text-sm font-semibold outline-none focus:border-[#8f5f4a]"
          />
          <button
            type="button"
            onClick={track}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#111111] px-5 text-sm font-semibold text-[#f5f1eb]"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
        {error ? <p className="mt-4 rounded-[1rem] bg-[#f5d8d0] p-3 text-sm font-semibold text-[#7b1f13]">{error}</p> : null}

        {order ? (
          <div className="mt-8 rounded-[2rem] border border-[#111111]/10 bg-[#f5f1eb] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8f5f4a]">{order.id}</p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-[-0.04em]">{order.status}</h2>
            <p className="mt-2 text-sm leading-6 text-[#5a554f]">Tracking ID: {order.trackingId}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { icon: Truck, title: "Courier", text: order.courier },
                { icon: MapPinned, title: "Destination", text: `${order.address.city}, ${order.address.state} ${order.address.postalCode}` },
                { icon: PackageCheck, title: "Packaging state", text: "Return sleeve and QR care card included" },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.2rem] border border-[#111111]/10 bg-[#fffaf2] p-5">
                  <item.icon className="mb-4 h-5 w-5 text-[#8f5f4a]" />
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5a554f]">{item.text}</p>
                </div>
              ))}
            </div>
            <Link
              href={`/orders?order=${encodeURIComponent(order.id)}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]"
            >
              Full order details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>

      <aside className="rounded-[2rem] border border-[#111111]/10 bg-[#111111] p-6 text-[#f5f1eb] shadow-[0_24px_80px_rgba(17,17,17,0.16)]">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">How tracking works</h2>
        <p className="mt-3 text-sm leading-7 text-[#d8cec1]">
          Checkout creates a local Toreso order with a tracking ID. Paste the order ID or tracking ID
          here in the same browser to retrieve its status.
        </p>
      </aside>
    </div>
  );
}
