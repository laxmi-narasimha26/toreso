"use client";

import { startTransition, useEffect, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

type OrderSummary = {
  id: string;
  items: Array<{ name: string; productSlug: string }>;
};

type ReturnRequest = {
  id: string;
  orderId: string;
  reason: string;
  resolution: string;
  status: string;
};

export default function ReturnsClient() {
  const [orders, setOrders] = useState<OrderSummary[]>([]);
  const [requests, setRequests] = useState<ReturnRequest[]>([]);
  const [orderId, setOrderId] = useState("");
  const [reason, setReason] = useState("Damaged in transit");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const refresh = async () => {
    const [ordersResponse, returnsResponse] = await Promise.all([
      fetch("/api/storefront/orders", { cache: "no-store" }),
      fetch("/api/storefront/returns", { cache: "no-store" }),
    ]);
    const ordersJson = await ordersResponse.json();
    const returnsJson = await returnsResponse.json();
    setOrders(ordersJson.data ?? []);
    setRequests(returnsJson.data ?? []);
    setOrderId(ordersJson.data?.[0]?.id ?? "");
  };

  useEffect(() => {
    refresh().catch(() => undefined);
  }, []);

  const submitReturn = () => {
    setStatus("submitting");
    startTransition(async () => {
      const response = await fetch("/api/storefront/returns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, reason, resolution: "replacement" }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("idle");
      await refresh();
    });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <RotateCcw className="mb-5 h-8 w-8 text-emerald-700" />
        <h2 className="text-3xl font-display font-bold">Start a return or replacement.</h2>
        <p className="mt-3 text-sm leading-6 text-stone-600">
          This form writes a return request into the local storefront API. Place an order first if the order list is empty.
        </p>
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold">
            Order
            <select
              value={orderId}
              onChange={(event) => setOrderId(event.target.value)}
              className="h-12 rounded-lg border border-stone-300 bg-white px-3"
            >
              {orders.length === 0 ? <option value="">No orders yet</option> : null}
              {orders.map((order) => (
                <option key={order.id} value={order.id}>
                  {order.id}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Reason
            <select
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              className="h-12 rounded-lg border border-stone-300 bg-white px-3"
            >
              {["Damaged in transit", "Missing accessory or refill", "Wrong product delivered", "Mechanism failed during warranty", "Returnable sleeve pickup"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={submitReturn}
            disabled={!orderId || status === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit replacement request"}
            <ArrowRight className="h-4 w-4" />
          </button>
          {status === "error" ? <p className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">Could not create return request.</p> : null}
        </div>
      </div>

      <aside className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-display font-bold">Existing requests</h2>
        <div className="mt-5 space-y-3">
          {requests.length === 0 ? (
            <p className="text-sm leading-6 text-stone-600">No return requests yet.</p>
          ) : (
            requests.map((request) => (
              <div key={request.id} className="rounded-lg border border-stone-200 bg-[#fbfaf4] p-4">
                <p className="font-bold">{request.id}</p>
                <p className="mt-1 text-sm text-stone-600">{request.orderId}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-800">{request.status}</p>
                <p className="mt-1 text-sm text-stone-600">{request.reason}</p>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  );
}
