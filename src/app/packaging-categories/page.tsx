import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ProductArtifact } from "@/components/brand/ToresoMark";
import { innovationCategories, innovationProducts } from "@/data/innovationCatalog";
import { cleanCatalogText, compactCatalogText } from "@/lib/catalog-copy";

export const metadata: Metadata = {
  title: "Recyclable Packaging Categories",
  description:
    "Browse Toreso recyclable packaging categories for wrap and bundle, paper tape, mailers, moving protection, food packet rescue, gifting, moisture protection, labels, and circular returns.",
  keywords: [
    "recyclable packaging categories",
    "eco friendly packaging categories",
    "recyclable mailers",
    "paper tape packaging",
    "food packet packaging",
    "reusable return packaging",
    "sustainable packaging India",
  ],
  alternates: {
    canonical: "/packaging-categories",
  },
};

const categoryHero = [
  { variant: "mailer" as const, title: "Return mailers", material: "two-seal recyclable shipping" },
  { variant: "honeycomb" as const, title: "Paper cushioning", material: "bubble-wrap alternative" },
  { variant: "pouch" as const, title: "Food packet rescue", material: "reseal and refill tools" },
];

export default function PackagingCategoriesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Toreso Recyclable Packaging Categories",
    description: "Category pages for recyclable daily packaging products.",
    url: "https://toreso.com/packaging-categories",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: innovationCategories.length,
      itemListElement: innovationCategories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://toreso.com/packaging-categories/${category.slug}`,
        name: `${cleanCatalogText(category.aisle)} recyclable packaging products`,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#f3eee6] text-[#242424]">
      <Navbar />
      <main className="pt-28">
        <section className="ink-panel py-20 text-[#f3eee6]">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96b4d]">Recyclable category architecture</p>
                <h1 className="mt-5 max-w-5xl font-display text-4xl font-semibold leading-[0.92] tracking-[-0.025em] sm:text-6xl">
                  Category pages for every daily packaging problem.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8cec1]">
                  Each aisle is written for real buyer intent: recyclable packaging products,
                  eco friendly shipping supplies, paper tape, reusable mailers, food packet
                  rescue, moving protection, labels, and circular return systems.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {categoryHero.map((item, index) => (
                  <ProductArtifact
                    key={item.title}
                    {...item}
                    accent={index === 0 ? "fiber" : index === 1 ? "amber" : "sage"}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="fiber-surface py-20">
          <div className="container mx-auto px-6">
            <div className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <div>
                <p className="material-stamp bg-[#fbf8f2]">Daily aisles</p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">
                  Rankable pages, not thin product filters.
                </h2>
              </div>
              <p className="text-base leading-8 text-[#5f5a54]">
                These pages are designed to answer what the product is, what material it uses,
                what problem it solves, what alternatives it replaces, and how shoppers should
                recycle, reuse, or return it.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {innovationCategories.map((category, index) => {
                const products = innovationProducts.filter((product) => product.categorySlug === category.slug);
                return (
                  <Link
                    key={category.slug}
                    href={`/packaging-categories/${category.slug}`}
                    className="group relative min-h-[360px] overflow-hidden rounded-[1.8rem] border border-[#242424]/14 bg-[#fbf8f2] p-6 loop-outline transition hover:-translate-y-1"
                  >
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-[#b96b4d]/80" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6d5c35]">
                        Aisle {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full bg-[#b96b4d] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#242424]">
                        {products.length} products
                      </span>
                    </div>
                    <h2 className="mt-8 max-w-sm font-display text-4xl font-semibold leading-[0.94] tracking-[-0.035em] text-[#242424]">
                      {cleanCatalogText(category.aisle)}
                    </h2>
                    <p className="mt-5 line-clamp-4 text-sm leading-6 text-[#5f5a54]">{compactCatalogText(category.signal, 190)}</p>
                    <div className="mt-6 grid gap-2">
                      {products.slice(0, 3).map((product) => (
                        <span key={product.slug} className="rounded-full border border-[#242424]/10 bg-[#f3eee6] px-3 py-2 text-xs font-bold text-[#5f5a54]">
                          {cleanCatalogText(product.name)}
                        </span>
                      ))}
                    </div>
                    <span className="mt-7 inline-flex rounded-full bg-[#242424] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f3eee6]">
                      Explore aisle
                    </span>
                  </Link>
                );
              })}
            </div>
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
