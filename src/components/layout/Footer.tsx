"use client";

import Link from "next/link";
import { ToresoMark } from "@/components/brand/ToresoMark";

const footerSections = [
  {
    title: "Recyclable Shop",
    links: [
      { label: "All packaging products", href: "/products" },
      { label: "Recyclable aisles", href: "/packaging-categories" },
      { label: "Food packet rescue", href: "/packaging-categories/heat-sealing-and-resealing-gadgets" },
      { label: "Shipping protection", href: "/packaging-categories/cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention" },
    ],
  },
  {
    title: "Materials",
    links: [
      { label: "Sustainability hub", href: "/sustainability" },
      { label: "Material guide", href: "/materials" },
      { label: "Recycle guide", href: "/recycle-guide" },
      { label: "HoneyWrap Roll", href: "/products/honeywrap-roll" },
      { label: "SnapSeal Mini", href: "/products/toreso-snapseal-mini" },
    ],
  },
  {
    title: "Customer Loop",
    links: [
      { label: "Cart", href: "/cart" },
      { label: "Checkout", href: "/checkout" },
      { label: "Orders", href: "/orders" },
      { label: "Track order", href: "/track-order" },
      { label: "Returns", href: "/returns" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Sustainability hub", href: "/sustainability" },
      { label: "Packaging guides", href: "/guides" },
      { label: "Quick answers", href: "/answers" },
      { label: "Product comparisons", href: "/compare" },
      { label: "Recycle guide", href: "/recycle-guide" },
    ],
  },
];

const proofPoints = [
  "Reusable before disposable",
  "Mono-material wherever possible",
  "Right-sized packs to reduce waste",
  "QR care, reuse, and recycle instructions",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ink-panel text-[#f3eee6]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <ToresoMark inverse />
            <p className="mt-6 max-w-md text-base leading-7 text-[#d8cec1]">
              Toreso is being built as the daily packaging store for total recyclable solutions:
              wraps, paper tapes, mailers, cushion sheets, labels, storage packs, food rescue
              tools, and return-ready shipping systems.
            </p>
            <div className="mt-8 grid gap-3">
              {proofPoints.map((point) => (
                <span key={point} className="rounded-full border border-[#f3eee6]/15 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#b96b4d]">
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#b96b4d]">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm leading-6 text-[#d8cec1] transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 border-t border-[#f3eee6]/12 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96b4d]">Material newsletter</p>
            <form className="mt-3 flex max-w-xl gap-2" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Get recyclable product drops and material notes"
                className="h-12 flex-1 rounded-full border border-[#f3eee6]/15 bg-[#f3eee6]/8 px-5 text-sm text-white outline-none placeholder:text-[#d8cec1]/60 focus:border-[#b96b4d]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#b96b4d] px-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#242424]"
              >
                Join
              </button>
            </form>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-[#f3eee6] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#242424]"
          >
            Shop recyclable products
          </Link>
        </div>

        <p className="mt-8 text-xs text-[#d8cec1]/65">
          Copyright {currentYear} Toreso. Total Recyclable Solutions for daily packaging.
        </p>
      </div>
    </footer>
  );
}
