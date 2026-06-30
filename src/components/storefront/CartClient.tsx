"use client";

import { startTransition, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Package, ShieldCheck, ShoppingBag, Trash2, Truck } from "lucide-react";

type CartState = {
  items: Array<{
    productSlug: string;
    quantity: number;
    product: {
      slug: string;
      name: string;
      description: string;
      price: number;
      mrp: number;
      discount: number;
      deliveryPromise: string;
      returnWindow: string;
      aisle: string;
      badges: string[];
    };
    linePrice: number;
    lineMrp: number;
  }>;
  count: number;
  formatted: {
    subtotal: string;
    mrp: string;
    savings: string;
    deliveryFee: string;
    total: string;
  };
};

const loadCart = async () => {
  const response = await fetch("/api/storefront/cart", { cache: "no-store" });
  const json = await response.json();
  return json.data as CartState;
};

export default function CartClient() {
  const [cart, setCart] = useState<CartState | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    loadCart().then(setCart).catch(() => setCart(null));
  }, []);

  const updateQuantity = (slug: string, quantity: number) => {
    setIsUpdating(true);
    startTransition(async () => {
      const response = await fetch(`/api/storefront/cart/items/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      const json = await response.json();
      setCart(json.data);
      setIsUpdating(false);
    });
  };

  const clearCart = () => {
    setIsUpdating(true);
    startTransition(async () => {
      const response = await fetch("/api/storefront/cart", { method: "DELETE" });
      const json = await response.json();
      setCart(json.data);
      setIsUpdating(false);
    });
  };

  if (!cart) {
    return <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">Loading cart...</div>;
  }

  if (cart.items.length === 0) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-soft">
        <ShoppingBag className="mx-auto mb-5 h-10 w-10 text-emerald-700" />
        <h2 className="text-3xl font-display font-bold">Your cart is empty.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600">
          Add a packaging product from any product page and it will persist locally through the storefront API.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white"
        >
          Browse products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm font-bold text-emerald-950">
            {cart.count} item{cart.count === 1 ? "" : "s"} in your persistent cart
          </p>
          <button
            type="button"
            onClick={clearCart}
            disabled={isUpdating}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900"
          >
            <Trash2 className="h-4 w-4" />
            Clear
          </button>
        </div>
        {cart.items.map((item) => (
          <article key={item.productSlug} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft">
            <div className="grid gap-5 md:grid-cols-[150px_1fr_auto]">
              <Link
                href={`/products/${item.product.slug}`}
                className="flex aspect-square items-end rounded-xl bg-gradient-to-br from-emerald-800 to-stone-950 p-4 text-white"
              >
                <Package className="h-10 w-10" />
              </Link>
              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  {item.product.badges.slice(0, 3).map((badge) => (
                    <span key={badge} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                      {badge}
                    </span>
                  ))}
                </div>
                <Link href={`/products/${item.product.slug}`} className="text-xl font-display font-bold hover:text-emerald-800">
                  {item.product.name}
                </Link>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.product.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <select
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.productSlug, Number(event.target.value))}
                    className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-semibold"
                  >
                    {Array.from({ length: 10 }, (_, index) => index + 1).map((quantity) => (
                      <option key={quantity} value={quantity}>
                        Qty {quantity}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.productSlug, 0)}
                    className="text-sm font-semibold text-stone-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-xl font-display font-bold text-stone-950">Rs. {item.linePrice.toLocaleString("en-IN")}</p>
                <p className="mt-1 text-sm text-stone-500 line-through">Rs. {item.lineMrp.toLocaleString("en-IN")}</p>
                <p className="mt-1 text-sm font-bold text-emerald-800">{item.product.discount}% off</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-display font-bold">Order summary</h2>
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-stone-600">MRP</span>
            <span className="font-semibold">{cart.formatted.mrp}</span>
          </div>
          <div className="flex justify-between text-emerald-800">
            <span>Savings</span>
            <span className="font-semibold">-{cart.formatted.savings}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-600">Delivery</span>
            <span className="font-semibold">{cart.formatted.deliveryFee}</span>
          </div>
          <div className="flex justify-between border-t border-stone-200 pt-4 text-lg font-display font-bold">
            <span>Total</span>
            <span>{cart.formatted.total}</span>
          </div>
        </div>
        <Link
          href="/checkout"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-stone-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Proceed to checkout
          <ShoppingBag className="h-4 w-4" />
        </Link>
        <div className="mt-5 grid gap-3 text-sm">
          {[
            { icon: Truck, label: "Fast premium dispatch" },
            { icon: ShieldCheck, label: "Damage replacement support" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-lg bg-[#fbfaf4] p-3">
              <item.icon className="h-4 w-4 text-emerald-700" />
              <span className="font-semibold text-stone-700">{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
