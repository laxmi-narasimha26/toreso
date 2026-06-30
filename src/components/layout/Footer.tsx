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
    <footer className="bg-[#111111] px-3 pb-3 text-[#f3eee6]">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#f3eee6]/10 bg-[#171412]">
        <video
          className="absolute right-0 top-0 hidden h-full w-[42%] object-cover opacity-28 lg:block"
          src="/brand-assets/videos/paper-fiber-loop-hd.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(240,194,123,0.2),transparent_26%),linear-gradient(90deg,#171412_0%,rgba(23,20,18,0.96)_52%,rgba(23,20,18,0.72)_100%)]" />
        <div className="relative mx-auto px-6 py-16 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
            <ToresoMark inverse />
            <p className="mt-6 max-w-md text-base leading-7 text-[#d8cec1]">
              Toreso is being built as the daily packaging store for total recyclable solutions:
              wraps, paper tapes, mailers, cushion sheets, labels, storage packs, food rescue
              tools, and return-ready shipping systems.
            </p>
            <div className="mt-8 grid gap-3">
              {proofPoints.map((point) => (
                <span key={point} className="rounded-full border border-[#f3eee6]/15 bg-[#f3eee6]/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#f0c27b]">
                  {point}
                </span>
              ))}
            </div>
          </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f0c27b]">{section.title}</h3>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c27b]">Material newsletter</p>
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
                className="rounded-full bg-[#f0c27b] px-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#242424]"
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
      </div>
    </footer>
  );
}
