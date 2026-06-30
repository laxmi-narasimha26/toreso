import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { guidePages } from "@/data/seoContent";

export const metadata: Metadata = {
  title: "Packaging Guides",
  description:
    "Practical Toreso guides for food freshness, monsoon storage, small-seller shipping, and travel packing.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Toreso Packaging Guides",
    url: "https://toreso.com/guides",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: guidePages.length,
      itemListElement: guidePages.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://toreso.com/guides/${guide.slug}`,
        name: guide.title,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-[1700px] rounded-[2rem] bg-[#111111] px-6 py-20 text-[#f5f1eb] md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ebdf6]">Guides</p>
            <h1 className="mt-6 max-w-6xl font-sans text-5xl font-medium uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
              Build better packaging habits at home.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#cfc8bd]">
              Practical buying and use guides for the daily problems behind the product shelf.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1700px] gap-5 lg:grid-cols-2">
            {guidePages.map((guide, index) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 transition hover:-translate-y-1 md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d72b8]">
                  Guide {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-10 font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.08em]">
                  {guide.title}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#5a554f]">{guide.description}</p>
                <span className="mt-8 inline-flex rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]">
                  Open guide
                </span>
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
