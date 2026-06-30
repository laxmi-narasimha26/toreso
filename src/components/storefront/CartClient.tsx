"use client";

import Link from "next/link";
import { ArrowRight, Minus, Package, Plus, ShieldCheck, ShoppingBag, Trash2, Truck } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function CartClient() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const mrp = items.reduce((sum, item) => sum + (item.mrp ?? item.price) * item.quantity, 0);
  const savings = Math.max(0, mrp - subtotal);
  const deliveryFee = subtotal >= 999 || subtotal === 0 ? 0 : 59;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-10 text-center shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
        <ShoppingBag className="mx-auto mb-5 h-10 w-10 text-[#8f5f4a]" />
        <h2 className="font-display text-4xl font-semibold tracking-[-0.04em]">Your cart is empty.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#5a554f]">
          Add a packaging product from any product page. The cart updates instantly and stays
          saved in this browser.
        </p>
        <Link
          href="/products"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]"
        >
          Browse products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-[1.3rem] border border-[#111111]/10 bg-[#d8d5ec] p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#111111]">
            {count} item{count === 1 ? "" : "s"} in your packaging stack
          </p>
          <button
            type="button"
            onClick={clearCart}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8f5f4a]"
          >
            <Trash2 className="h-4 w-4" />
            Clear
          </button>
        </div>

        {items.map((item) => {
          const linePrice = item.price * item.quantity;
          const lineMrp = (item.mrp ?? item.price) * item.quantity;

          return (
            <article key={item.id} className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-5 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
              <div className="grid gap-5 md:grid-cols-[150px_1fr_auto]">
                <Link
                  href={`/products/${item.productSlug ?? item.id}`}
                  className="flex aspect-square items-end rounded-[1.4rem] bg-[radial-gradient(circle_at_30%_30%,#f0c27b,transparent_32%),linear-gradient(135deg,#111111,#3b332e)] p-4 text-[#f5f1eb]"
                >
                  <Package className="h-10 w-10" />
                </Link>
                <div>
                  <div className="mb-2 flex flex-wrap gap-2">
                    {(item.badges ?? []).slice(0, 3).map((badge) => (
                      <span key={badge} className="rounded-full bg-[#f5f1eb] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.13em] text-[#8f5f4a]">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/products/${item.productSlug ?? item.id}`}
                    className="font-display text-3xl font-semibold leading-[0.95] tracking-[-0.04em] hover:text-[#8f5f4a]"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-3 text-sm leading-7 text-[#5a554f]">{item.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center overflow-hidden rounded-full border border-[#111111]/12 bg-[#f5f1eb]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="grid h-10 w-10 place-items-center text-[#111111]"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-12 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="grid h-10 w-10 place-items-center text-[#111111]"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f5f4a]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-sans text-3xl font-medium tracking-[-0.06em] text-[#111111]">{formatMoney(linePrice)}</p>
                  {lineMrp > linePrice ? (
                    <p className="mt-1 text-sm text-[#7d766e] line-through">{formatMoney(lineMrp)}</p>
                  ) : null}
                  {item.discount ? <p className="mt-1 text-sm font-semibold text-[#8f5f4a]">{item.discount}% off</p> : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <aside className="h-fit rounded-[2rem] border border-[#111111]/10 bg-[#111111] p-6 text-[#f5f1eb] shadow-[0_24px_80px_rgba(17,17,17,0.16)]">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">Order summary</h2>
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-[#d8cec1]">MRP</span>
            <span className="font-semibold">{formatMoney(mrp)}</span>
          </div>
          <div className="flex justify-between text-[#f0c27b]">
            <span>Savings</span>
            <span className="font-semibold">-{formatMoney(savings)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#d8cec1]">Delivery</span>
            <span className="font-semibold">{deliveryFee === 0 ? "Free" : formatMoney(deliveryFee)}</span>
          </div>
          <div className="flex justify-between border-t border-white/12 pt-4 font-display text-2xl font-semibold">
            <span>Total</span>
            <span>{formatMoney(total)}</span>
          </div>
        </div>
        <Link
          href="/checkout"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f5f1eb] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111]"
        >
          Proceed to checkout
          <ShoppingBag className="h-4 w-4" />
        </Link>
        <div className="mt-5 grid gap-3 text-sm">
          {[
            { icon: Truck, label: "Fast recyclable dispatch" },
            { icon: ShieldCheck, label: "Damage replacement support" },
          ].map((entry) => (
            <div key={entry.label} className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/7 p-3">
              <entry.icon className="h-4 w-4 text-[#f0c27b]" />
              <span className="font-semibold text-[#efe5d7]">{entry.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
