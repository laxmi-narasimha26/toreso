import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { collections } from "@/data/consumerCatalog";
import { formatPrice, getCommerceProfile } from "@/data/commerce";
import { innovationProducts } from "@/data/innovationCatalog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);

  if (!collection) return {};

  return {
    title: `${collection.name} Packaging Collection`,
    description: collection.description,
    alternates: {
      canonical: `/collections/${collection.slug}`,
    },
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);

  if (!collection) {
    notFound();
  }

  const tracks = collectionTrackMap[collection.slug] ?? [];
  const collectionProducts = innovationProducts.filter((product) => tracks.includes(product.track));

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-[1700px] overflow-hidden rounded-[2rem] bg-[#d8d5ec] px-6 py-20 md:px-10">
            <Link href="/collections" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d72b8]">
              Back to collections
            </Link>
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.22em] text-[#5d5960]">{collection.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl font-sans text-5xl font-medium uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
              {collection.name}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#3b3941]">{collection.description}</p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1700px] gap-4 md:grid-cols-2 xl:grid-cols-3">
            {collectionProducts.map((product, index) => {
              const commerce = getCommerceProfile(product);
              return (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-4 transition hover:-translate-y-1"
                >
                  <div className="relative mb-5 h-52 overflow-hidden rounded-[1.4rem] bg-[#111111]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(45,156,255,0.35),transparent_24%),linear-gradient(135deg,#111111,#242424)]" />
                    <span className="absolute left-6 top-8 h-24 w-24 rounded-full bg-[#2d9cff]" />
                    <span className="absolute bottom-8 right-8 h-16 w-32 rounded-[1rem] bg-[#f5f1eb]" />
                    <span className="absolute left-4 top-4 rounded-full bg-[#f5f1eb] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-[#111111]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#2d72b8]">{product.aisle}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h2 className="font-display text-3xl font-semibold leading-[0.92] tracking-[-0.04em]">{product.name}</h2>
                    <span className="font-sans text-xl font-medium tracking-[-0.05em]">{formatPrice(commerce.price)}</span>
                  </div>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#5a554f]">{product.b2cInnovation}</p>
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
