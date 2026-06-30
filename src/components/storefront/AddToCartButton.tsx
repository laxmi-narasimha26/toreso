"use client";

import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";

type AddToCartButtonProps = {
  productSlug: string;
  label?: string;
  redirectTo?: string;
  className?: string;
};

export default function AddToCartButton({
  productSlug,
  label = "Add to cart",
  redirectTo,
  className,
}: AddToCartButtonProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "added" | "error">("idle");

  const addToCart = () => {
    setStatus("loading");

    startTransition(async () => {
      const response = await fetch("/api/storefront/cart/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug, quantity: 1 }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("added");

      if (redirectTo) {
        router.push(redirectTo);
      } else {
        router.refresh();
      }
    });
  };

  return (
    <button
      type="button"
      onClick={addToCart}
      disabled={status === "loading"}
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-lg bg-stone-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-wait disabled:opacity-70"
      }
    >
      {status === "loading" ? "Adding..." : status === "added" ? "Added" : status === "error" ? "Try again" : label}
    </button>
  );
}
