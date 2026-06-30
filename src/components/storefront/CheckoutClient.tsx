"use client";

import { startTransition, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CreditCard, LockKeyhole, PackageCheck } from "lucide-react";

type CartSummary = {
  items: Array<{ product: { name: string }; quantity: number; linePrice: number }>;
  formatted: { subtotal: string; savings: string; deliveryFee: string; total: string };
};

export default function CheckoutClient() {
  const router = useRouter();
  const [cart, setCart] = useState<CartSummary | null>(null);
  const [status, setStatus] = useState<"idle" | "placing" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/storefront/cart", { cache: "no-store" })
      .then((response) => response.json())
      .then((json) => setCart(json.data))
      .catch(() => setCart(null));
  }, []);

  const placeOrder = () => {
    setStatus("placing");
    setError("");

    startTransition(async () => {
      const response = await fetch("/api/storefront/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            name: "Chaitanya",
            email: "chaitanya@example.com",
            phone: "+91 90000 00000",
          },
          address: {
            name: "Chaitanya",
            phone: "+91 90000 00000",
            line1: "Toreso demo address",
            line2: "Premium packaging drop point",
            city: "Hyderabad",
            state: "Telangana",
            postalCode: "500081",
            country: "India",
          },
          paymentMethod: "Cash on delivery demo",
        }),
      });
      const json = await response.json();

      if (!response.ok) {
        setStatus("error");
        setError(json.error ?? "Checkout failed");
        return;
      }

      router.push(`/orders/${json.data.id}`);
    });
  };

  if (!cart) {
    return <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">Loading checkout...</div>;
  }

  if (cart.items.length === 0) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-soft">
        <PackageCheck className="mx-auto mb-5 h-10 w-10 text-emerald-700" />
        <h2 className="text-3xl font-display font-bold">Cart is empty.</h2>
        <Link href="/products" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white">
          Browse products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-5">
        {[
          ["Address", "Chaitanya, Hyderabad, Telangana 500081"],
          ["Delivery", "Premium recyclable dispatch with QR return sleeve"],
          ["Payment", "Cash on delivery demo. Payment gateway can plug in here."],
          ["Review", "Order will be persisted through /api/storefront/checkout"],
        ].map(([title, detail], index) => (
          <article key={title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">Step {index + 1}</p>
            <h2 className="mt-2 text-2xl font-display font-bold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">{detail}</p>
          </article>
        ))}
      </div>

      <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <LockKeyhole className="h-5 w-5 text-emerald-700" />
          <h2 className="text-2xl font-display font-bold">Secure summary</h2>
        </div>
        <div className="mt-6 space-y-4">
          {cart.items.map((item) => (
            <div key={item.product.name} className="flex justify-between gap-4 text-sm">
              <div>
                <p className="font-semibold text-stone-800">{item.product.name}</p>
                <p className="text-stone-500">Qty {item.quantity}</p>
              </div>
              <p className="font-bold">Rs. {item.linePrice.toLocaleString("en-IN")}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3 border-t border-stone-200 pt-5 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">{cart.formatted.subtotal}</span>
          </div>
          <div className="flex justify-between text-emerald-800">
            <span>Savings</span>
            <span className="font-semibold">-{cart.formatted.savings}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span className="font-semibold">{cart.formatted.deliveryFee}</span>
          </div>
          <div className="flex justify-between border-t border-stone-200 pt-4 text-lg font-display font-bold">
            <span>Total</span>
            <span>{cart.formatted.total}</span>
          </div>
        </div>
        {error ? <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p> : null}
        <button
          type="button"
          onClick={placeOrder}
          disabled={status === "placing"}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-stone-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-wait disabled:opacity-70"
        >
          <CreditCard className="h-4 w-4" />
          {status === "placing" ? "Placing order..." : "Place real local order"}
        </button>
      </aside>
    </div>
  );
}
