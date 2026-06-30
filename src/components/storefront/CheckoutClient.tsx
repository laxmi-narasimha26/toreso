"use client";

import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CreditCard, LockKeyhole, PackageCheck } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const initialForm = {
  customerName: "",
  phone: "",
  line1: "",
  line2: "",
  city: "Hyderabad",
  state: "Telangana",
  postalCode: "",
  country: "India",
  paymentMethod: "Cash on delivery",
};

export default function CheckoutClient() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const placeOrder = useCartStore((state) => state.placeOrder);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "placing" | "error">("idle");
  const [error, setError] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const mrp = items.reduce((sum, item) => sum + (item.mrp ?? item.price) * item.quantity, 0);
  const savings = Math.max(0, mrp - subtotal);
  const deliveryFee = subtotal >= 999 || subtotal === 0 ? 0 : 59;
  const total = subtotal + deliveryFee;

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitOrder = () => {
    setError("");

    const requiredFields: Array<keyof typeof form> = ["customerName", "phone", "line1", "city", "state", "postalCode"];
    const missingField = requiredFields.find((field) => !form[field].trim());

    if (missingField) {
      setStatus("error");
      setError("Fill name, phone, address, city, state, and PIN code before placing the order.");
      return;
    }

    setStatus("placing");
    const order = placeOrder(form);

    if (!order) {
      setStatus("error");
      setError("Your cart is empty.");
      return;
    }

    startTransition(() => {
      router.push(`/orders?order=${encodeURIComponent(order.id)}`);
    });
  };

  if (items.length === 0) {
    return (
      <div className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-10 text-center shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
        <PackageCheck className="mx-auto mb-5 h-10 w-10 text-[#8f5f4a]" />
        <h2 className="font-display text-4xl font-semibold tracking-[-0.04em]">Cart is empty.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#5a554f]">
          Add products before checkout. Your cart is saved in this browser.
        </p>
        <Link href="/products" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]">
          Browse products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-5">
        <section className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f5f4a]">Delivery details</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em]">Where should this packaging stack go?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["customerName", "Full name"],
              ["phone", "Phone"],
              ["postalCode", "PIN code"],
              ["city", "City"],
              ["state", "State"],
              ["country", "Country"],
            ].map(([field, label]) => (
              <label key={field} className="grid gap-2 text-sm font-semibold text-[#111111]">
                {label}
                <input
                  value={form[field as keyof typeof form]}
                  onChange={(event) => updateField(field as keyof typeof form, event.target.value)}
                  className="h-12 rounded-full border border-[#111111]/12 bg-[#f5f1eb] px-4 text-sm outline-none focus:border-[#8f5f4a]"
                />
              </label>
            ))}
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-[#111111]">
            Address line
            <input
              value={form.line1}
              onChange={(event) => updateField("line1", event.target.value)}
              className="h-12 rounded-full border border-[#111111]/12 bg-[#f5f1eb] px-4 text-sm outline-none focus:border-[#8f5f4a]"
            />
          </label>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-[#111111]">
            Apartment, landmark, delivery note
            <input
              value={form.line2}
              onChange={(event) => updateField("line2", event.target.value)}
              className="h-12 rounded-full border border-[#111111]/12 bg-[#f5f1eb] px-4 text-sm outline-none focus:border-[#8f5f4a]"
            />
          </label>
        </section>

        <section className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f5f4a]">Payment method</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {["Cash on delivery", "UPI on delivery"].map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => updateField("paymentMethod", method)}
                className={`rounded-[1.3rem] border p-5 text-left text-sm font-semibold transition ${
                  form.paymentMethod === method
                    ? "border-[#111111] bg-[#111111] text-[#f5f1eb]"
                    : "border-[#111111]/10 bg-[#f5f1eb] text-[#111111]"
                }`}
              >
                {method}
                <span className="mt-2 block text-xs font-normal opacity-70">
                  Payment gateway can be added when Razorpay/Stripe credentials are ready.
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <aside className="h-fit rounded-[2rem] border border-[#111111]/10 bg-[#111111] p-6 text-[#f5f1eb] shadow-[0_24px_80px_rgba(17,17,17,0.16)]">
        <div className="flex items-center gap-3">
          <LockKeyhole className="h-5 w-5 text-[#f0c27b]" />
          <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">Secure summary</h2>
        </div>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between gap-4 text-sm">
              <div>
                <p className="font-semibold text-[#f5f1eb]">{item.name}</p>
                <p className="text-[#d8cec1]">Qty {item.quantity}</p>
              </div>
              <p className="font-semibold">{formatMoney(item.price * item.quantity)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3 border-t border-white/12 pt-5 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">{formatMoney(subtotal)}</span>
          </div>
          <div className="flex justify-between text-[#f0c27b]">
            <span>Savings</span>
            <span className="font-semibold">-{formatMoney(savings)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span className="font-semibold">{deliveryFee === 0 ? "Free" : formatMoney(deliveryFee)}</span>
          </div>
          <div className="flex justify-between border-t border-white/12 pt-4 font-display text-2xl font-semibold">
            <span>Total</span>
            <span>{formatMoney(total)}</span>
          </div>
        </div>
        {error ? <p className="mt-4 rounded-[1rem] bg-[#f5d8d0] p-3 text-sm font-semibold text-[#7b1f13]">{error}</p> : null}
        <button
          type="button"
          onClick={submitOrder}
          disabled={status === "placing"}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f5f1eb] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] disabled:cursor-wait disabled:opacity-70"
        >
          <CreditCard className="h-4 w-4" />
          {status === "placing" ? "Placing order..." : "Place order"}
        </button>
      </aside>
    </div>
  );
}
