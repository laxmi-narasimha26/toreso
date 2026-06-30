import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Factory,
  Lightbulb,
  PackageCheck,
  Search,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  innovationProducts,
  innovationTracks,
  researchSignals,
} from "@/data/innovationCatalog";

export const metadata: Metadata = {
  title: "Packaging Innovation Catalog",
  description:
    "Explore Toreso's 200+ B2C packaging product concepts built by converting industrial packaging categories into useful daily consumer products.",
  alternates: {
    canonical: "/innovation-catalog",
  },
};

const heroExamples = [
  "Stretch film becomes a pocket roller.",
  "Water-activated paper tape becomes a home sealing dock.",
  "Desiccants become monsoon protection kits.",
  "VCI barrier packaging becomes rust guard storage.",
];

export default function InnovationCatalogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Toreso Packaging Innovation Catalog",
    description:
      "A B2C packaging product universe converting B2B packaging families into consumer-ready daily packaging products.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: innovationProducts.length,
      itemListElement: innovationProducts.slice(0, 40).map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          category: product.track,
          description: product.b2cInnovation,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#fbfaf4] text-stone-950">
      <Navbar />
      <main className="pt-28">
        <section className="relative overflow-hidden border-b border-stone-200 bg-stone-950 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.34),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.24),transparent_26%),linear-gradient(135deg,#0c0a09_0%,#064e3b_100%)]" />
          <div className="container relative mx-auto px-6">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-100">
                <Sparkles className="h-4 w-4" />
                Packaging products only
              </p>
              <h1 className="text-5xl font-display font-bold leading-[1.02] sm:text-6xl">
                B2B packaging, redesigned into B2C daily packaging products.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50/80">
                This is the Toreso product universe: industrial packaging formats
                converted into useful, compact, consumer-ready objects for home,
                travel, returns, storage, gifting, food packets, creators, and
                small sellers.
              </p>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-4">
              {heroExamples.map((example) => (
                <div key={example} className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <Lightbulb className="mb-3 h-5 w-5 text-amber-200" />
                  <p className="text-sm font-semibold leading-6 text-white">{example}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                `${innovationProducts.length}+ product concepts`,
                `${innovationTracks.length} packaging tracks`,
                "APAC-style compact innovation",
              ].map((stat) => (
                <div key={stat} className="rounded-lg border border-white/10 bg-white/10 p-5">
                  <p className="text-2xl font-display font-bold text-white">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200 bg-white py-14">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase text-emerald-800">Research logic</p>
                <h2 className="mt-3 text-3xl font-display font-bold text-stone-950">
                  The catalog starts from packaging supply, not lifestyle products.
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Each concept keeps a packaging origin visible, then adds a consumer
                  mechanism: a dispenser, sleeve, tab, label, pouch, insert, handle,
                  seal, kit, or refill format.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {researchSignals.map((signal) => (
                  <article key={signal.source} className="rounded-lg border border-stone-200 bg-[#fbfaf4] p-5">
                    <Factory className="mb-4 h-5 w-5 text-emerald-700" />
                    <h3 className="text-base font-bold text-stone-950">{signal.source}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-600">{signal.insight}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase text-emerald-800">Product tracks</p>
                <h2 className="mt-2 text-3xl font-display font-bold text-stone-950">
                  13 packaging families converted for daily use.
                </h2>
              </div>
              <div className="inline-flex max-w-md items-center gap-3 rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-500">
                <Search className="h-4 w-4 text-stone-400" />
                Use browser find to search a product, origin, or use case.
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {innovationTracks.map((track) => (
                <Link
                  key={track.name}
                  href={`/packaging-categories/${track.slug}`}
                  className="rounded-lg border border-stone-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-emerald-300"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <Box className="h-5 w-5 text-emerald-700" />
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                      {track.count} ideas
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-stone-950">{track.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{track.b2bOrigin}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase text-emerald-800">Full product universe</p>
              <h2 className="mt-2 text-3xl font-display font-bold text-stone-950">
                More than 200 Toreso packaging product concepts.
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                These are product directions, not generic SKU fillers. The next
                step is prototype ranking, sourcing validation, costing, and MOQ
                checks track by track.
              </p>
            </div>

            <div className="space-y-12">
              {innovationTracks.map((track) => {
                const products = innovationProducts.filter((product) => product.track === track.name);
                const slug = track.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

                return (
                  <section key={track.name} id={slug} className="[content-visibility:auto]">
                    <div className="mb-5 rounded-lg border border-stone-200 bg-[#fbfaf4] p-5">
                      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                            {track.count} concepts
                          </p>
                          <h3 className="mt-2 text-2xl font-display font-bold text-stone-950">
                            {track.name}
                          </h3>
                        </div>
                        <p className="max-w-2xl text-sm leading-6 text-stone-600">{track.signal}</p>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {products.map((product, index) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          className="rounded-lg border border-stone-200 bg-white p-5 shadow-soft transition hover:border-emerald-300"
                        >
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">
                              #{String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                              {product.format}
                            </span>
                          </div>
                          <h4 className="text-lg font-display font-bold text-stone-950">{product.name}</h4>
                          <dl className="mt-4 space-y-3 text-sm">
                            <div>
                              <dt className="font-bold text-stone-500">B2B origin</dt>
                              <dd className="mt-1 leading-6 text-stone-800">{product.b2bOrigin}</dd>
                            </div>
                            <div>
                              <dt className="font-bold text-stone-500">User problem</dt>
                              <dd className="mt-1 leading-6 text-stone-700">{product.userProblem}</dd>
                            </div>
                            <div>
                              <dt className="font-bold text-stone-500">B2C innovation</dt>
                              <dd className="mt-1 leading-6 text-stone-700">{product.b2cInnovation}</dd>
                            </div>
                          </dl>
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 py-16 text-white">
          <div className="container mx-auto flex flex-col justify-between gap-6 px-6 md:flex-row md:items-center">
            <div>
              <PackageCheck className="mb-4 h-7 w-7 text-emerald-300" />
              <h2 className="max-w-2xl text-3xl font-display font-bold">
                Rank the first launch around high-frequency consumer problems.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-emerald-50/80">
                Best first drops: pocket stretch film roller, paper tape starter dock,
                USB snack bag resealer, honeycomb pull box, monsoon shoe pack,
                return mailer set, and small-seller packing desk kit.
              </p>
            </div>
            <Link
              href="/categories"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-stone-950"
            >
              View starter shop
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
