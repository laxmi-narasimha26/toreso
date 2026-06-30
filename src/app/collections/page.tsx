import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { collections } from "@/data/consumerCatalog";
import { innovationProducts } from "@/data/innovationCatalog";

const collectionTrackMap: Record<string, string[]> = {
  "food-on-the-go": [
    "Heat Sealing & Resealing Gadgets",
    "Bag Clips, Pour-Spouts & Resealable Closures",
    "Portion, Snack & Lunch Packaging",
  ],
  "home-refill": [
    "Bottle, Liquid & Beverage Sealing",
    "Label, Sticker & Identification Solutions",
    "Fridge & Pantry Organization",
  ],
  "gift-wrap": ["Gift Wrapping & Presentation Innovations", "Reusable & Eco Wraps (Beeswax / Fabric)"],
  "organize-store": [
    "Fridge & Pantry Organization",
    "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "Home, Closet & Bathroom Storage Extensions",
  ],
  "beauty-travel": [
    "Travel Packing & Clothes Compression",
    "Bottle, Liquid & Beverage Sealing",
    "Cable, Cord & Tech Small-Item Containment",
  ],
  "ship-return": [
    "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "Mini Stretch Film & Wrapping Reinventions",
    "Gift Wrapping & Presentation Innovations",
  ],
};

export const metadata: Metadata = {
  title: "Packaging Collections",
  description:
    "Explore Toreso packaging collections for food freshness, refill control, gift wrapping, storage, travel, shipping, and returns.",
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-[1700px] rounded-[2rem] bg-[#111111] px-6 py-20 text-[#f5f1eb] md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7d6fb]">Collections</p>
            <h1 className="mt-6 max-w-6xl font-sans text-5xl font-medium uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
              Product drops by daily ritual.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#cfc8bd]">
              Collections organize the 212-product shelf around how people actually pack,
              seal, carry, gift, store, and ship.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1700px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => {
              const tracks = collectionTrackMap[collection.slug] ?? [];
              const count = innovationProducts.filter((product) => tracks.includes(product.track)).length;
              return (
                <Link
                  key={collection.slug}
                  href={`/collections/${collection.slug}`}
                  className="group min-h-[420px] rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 transition hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d72b8]">
                    Drop {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-12 font-sans text-5xl font-medium uppercase leading-[0.88] tracking-[-0.08em]">
                    {collection.name}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-[#5a554f]">{collection.description}</p>
                  <div className="mt-10 flex items-center justify-between border-t border-[#111111]/10 pt-5">
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7d766e]">{collection.eyebrow}</span>
                    <span className="rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]">
                      {count} products
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
