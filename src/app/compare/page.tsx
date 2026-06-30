import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { comparePages } from "@/data/seoContent";

export const metadata: Metadata = {
  title: "Packaging Product Comparisons",
  description:
    "Compare everyday packaging products like mini bag sealers, clips, honeycomb paper, reusable bags, vacuum bags, and dehumidifiers.",
  alternates: {
    canonical: "/compare",
  },
};

export default function CompareIndexPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Toreso Packaging Comparisons",
    url: "https://toreso.com/compare",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: comparePages.length,
      itemListElement: comparePages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://toreso.com/compare/${page.slug}`,
        name: page.title,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-[1700px] rounded-[2rem] bg-[#2d9cff] px-6 py-20 text-[#111111] md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em]">Compare</p>
            <h1 className="mt-6 max-w-6xl font-sans text-5xl font-medium uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
              Choose the right packaging product.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8">
              Clear product-vs-product pages for shoppers deciding what actually fits their use case.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1700px] gap-4 md:grid-cols-2">
            {comparePages.map((page, index) => (
              <Link
                key={page.slug}
                href={`/compare/${page.slug}`}
                className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 transition hover:-translate-y-1 md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d72b8]">
                  Comparison {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-8 font-display text-5xl font-semibold leading-[0.9] tracking-[-0.05em]">
                  {page.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-[#5a554f]">{page.verdict}</p>
              </Link>
            ))}
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
