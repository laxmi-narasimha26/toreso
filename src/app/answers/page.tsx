import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { answerPages } from "@/data/seoContent";

export const metadata: Metadata = {
  title: "Packaging Answers",
  description:
    "Direct answers for daily packaging problems: resealing packets, monsoon storage, food freshness, shipping, travel leaks, and reusable packaging.",
  alternates: {
    canonical: "/answers",
  },
};

export default function AnswersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Toreso Packaging Answers",
    description: "Short practical answers for everyday packaging decisions.",
    url: "https://toreso.com/answers",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: answerPages.length,
      itemListElement: answerPages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://toreso.com/answers/${page.slug}`,
        name: page.question,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="relative overflow-hidden px-4 py-20">
          <div className="mx-auto max-w-[1700px] rounded-[2rem] bg-[#111111] px-6 py-20 text-[#f5f1eb] md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ebdf6]">Answer library</p>
            <h1 className="mt-6 max-w-6xl font-sans text-5xl font-medium uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
              Fast answers for daily packaging decisions.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#cfc8bd]">
              Short, practical pages for the questions people ask before buying packaging:
              freshness, moisture, shipping, travel, storage, labels, and returns.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1700px] gap-4 md:grid-cols-2 xl:grid-cols-3">
            {answerPages.map((page, index) => (
              <Link
                key={page.slug}
                href={`/answers/${page.slug}`}
                className="group min-h-[320px] rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 shadow-[0_18px_60px_rgba(17,17,17,0.06)] transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d72b8]">
                  Answer {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-8 font-display text-4xl font-semibold leading-[0.92] tracking-[-0.04em]">
                  {page.question}
                </h2>
                <p className="mt-5 line-clamp-4 text-sm leading-7 text-[#5a554f]">{page.shortAnswer}</p>
                <span className="mt-8 inline-flex rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]">
                  Read answer
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
