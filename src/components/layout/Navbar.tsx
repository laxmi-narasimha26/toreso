"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ToresoMark } from "@/components/brand/ToresoMark";

const navLinks = [
  { label: "Shop", href: "/products" },
  { label: "Aisles", href: "/packaging-categories" },
  { label: "Guides", href: "/guides" },
  { label: "Answers", href: "/answers" },
  { label: "Compare", href: "/compare" },
  { label: "Track", href: "/track-order" },
];

const mobileLinks = [
  ...navLinks,
  { label: "Cart", href: "/cart" },
  { label: "Orders", href: "/orders" },
  { label: "Returns", href: "/returns" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#242424]/15 bg-[#fbf8f2]/92 py-3 shadow-[0_16px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl"
          : "bg-[#fbf8f2]/82 py-4 backdrop-blur-xl"
      }`}
    >
      <nav className="container mx-auto px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-6">
          <ToresoMark />

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-[#5f5a54] transition hover:bg-[#242424] hover:text-[#f3eee6]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/orders"
              className="rounded-full border border-[#242424]/18 px-4 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#242424] transition hover:border-[#242424]"
            >
              Orders
            </Link>
            <Link
              href="/cart"
              className="rounded-full bg-[#242424] px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#f3eee6] transition hover:bg-[#3a3430]"
            >
              Cart
            </Link>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-[#242424]/18 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="grid gap-1.5">
              <span className={`h-0.5 w-5 bg-[#242424] transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-[#242424] transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-[#242424] transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <div className="container mx-auto px-6 pb-6 pt-5">
              <div className="grid gap-2 rounded-[1.4rem] border border-[#242424]/15 bg-[#fbf8f2] p-3">
                {mobileLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#242424] transition hover:bg-[#f3eee6]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <span className="text-[#2d72b8]">{String(index + 1).padStart(2, "0")}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
