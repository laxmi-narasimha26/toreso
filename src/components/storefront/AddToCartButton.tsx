"use client";

import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";
import type { CartItem } from "@/store/cartStore";
import { useCartStore } from "@/store/cartStore";

type AddToCartButtonProps = {
  item: Omit<CartItem, "quantity"> & { quantity?: number };
  label?: string;
  redirectTo?: string;
  className?: string;
};

export default function AddToCartButton({
  item,
  label = "Add to cart",
  redirectTo,
  className,
}: AddToCartButtonProps) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const [status, setStatus] = useState<"idle" | "added">("idle");

  const addToCart = () => {
    addItem({
      ...item,
      quantity: item.quantity ?? item.minOrderQuantity ?? 1,
    });
    setStatus("added");

    if (redirectTo) {
      startTransition(() => {
        router.push(redirectTo);
      });
      return;
    }

    window.setTimeout(() => setStatus("idle"), 1400);
  };

  return (
    <button
      type="button"
      onClick={addToCart}
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-lg bg-stone-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#8f5f4a]"
      }
    >
      {status === "added" ? "Added to cart" : label}
    </button>
  );
}
