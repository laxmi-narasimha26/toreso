"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPinned, PackageCheck, Search, Truck } from "lucide-react";

type TrackOrder = {
  id: string;
  status: string;
  trackingId: string;
  courier: string;
  address: { line1: string; city: string; state: string; postalCode: string };
  events: Array<{ label: string; detail: string; time: string }>;
};

export default function TrackOrderClient() {
  const [identifier, setIdentifier] = useState("");
  const [order, setOrder] = useState<TrackOrder | null>(null);
  const [error, setError] = useState("");

  const track = async () => {
    setError("");
    setOrder(null);

    if (!identifier.trim()) {
      setError("Enter an order ID or tracking ID.");
      return;
    }

    const response = await fetch(`/api/storefront/track/${encodeURIComponent(identifier.trim())}`, {
      cache: "no-store",
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error ?? "Tracking record not found");
      return;
    }

    setOrder(json.data);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <label className="text-sm font-bold uppercase tracking-[0.18em] text-stone-500" htmlFor="tracking">
          Order ID or tracking number
        </label>
        <div className="mt-3 flex gap-2">
          <input
            id="tracking"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            placeholder="Paste order ID after checkout"
            className="h-12 flex-1 rounded-lg border border-stone-300 bg-white px-4 text-sm font-semibold outline-none focus:border-emerald-500"
          />
          <button
            type="button"
            onClick={track}
            className="inline-flex h-12 items-center justify-center rounded-lg bg-stone-950 px-5 text-sm font-semibold text-white"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
        {error ? <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p> : null}

        {order ? (
          <div className="mt-8 rounded-2xl border border-stone-200 bg-[#fbfaf4] p-6">
            <p className="text-sm font-bold uppercase text-emerald-800">{order.id}</p>
            <h2 className="mt-2 text-3xl font-display font-bold">{order.status}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">Tracking ID: {order.trackingId}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { icon: Truck, title: "Courier", text: order.courier },
                { icon: MapPinned, title: "Destination", text: `${order.address.city}, ${order.address.state} ${order.address.postalCode}` },
                { icon: PackageCheck, title: "Packaging state", text: "Return sleeve and QR care card included" },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-stone-200 bg-white p-5">
                  <item.icon className="mb-4 h-5 w-5 text-emerald-700" />
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
                </div>
              ))}
            </div>
            <Link
              href={`/orders/${order.id}`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white"
            >
              Full order details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>

      <aside className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-display font-bold">How tracking works</h2>
        <p className="mt-3 text-sm leading-6 text-stone-600">
          Checkout creates a persisted local order with a Toreso tracking ID. Paste either the order ID
          or tracking ID here to retrieve its status from the storefront API.
        </p>
      </aside>
    </div>
  );
}
