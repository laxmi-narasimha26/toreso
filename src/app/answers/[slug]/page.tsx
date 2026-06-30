import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { formatPrice, getCommerceProfile } from "@/data/commerce";
import { answerPages, getAnswerPage, getRelatedProductsForSlugs } from "@/data/seoContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return answerPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getAnswerPage(slug);

  if (!page) return {};

  return {
    title: page.question,
    description: page.shortAnswer,
    alternates: {
      canonical: `/answers/${page.slug}`,
    },
    openGraph: {
      title: `${page.question} | Toreso`,
      description: page.shortAnswer,
      url: `https://toreso.com/answers/${page.slug}`,
      type: "article",
    },
  };
}

export default async function AnswerPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getAnswerPage(slug);

  if (!page) {
    notFound();
  }

  const relatedProducts = getRelatedProductsForSlugs(page.relatedProductSlugs);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.question,
      description: page.shortAnswer,
      datePublished: "2026-06-30",
      dateModified: "2026-06-30",
      author: { "@type": "Organization", name: "Toreso" },
      publisher: { "@type": "Organization", name: "Toreso" },
      mainEntityOfPage: `https://toreso.com/answers/${page.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <article>
          <section className="relative overflow-hidden px-4 py-20">
            <div className="mx-auto max-w-[1500px] rounded-[2rem] bg-[#d8d5ec] px-6 py-16 md:px-10">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5d5960]">
                <Link href="/answers" className="hover:text-[#111111]">Answers</Link>
                <span>/</span>
                <span>Daily packaging</span>
              </div>
              <h1 className="mt-8 max-w-5xl font-sans text-5xl font-medium uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
                {page.question}
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-[#3b3941]">{page.shortAnswer}</p>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.74fr_0.26fr]">
              <div className="rounded-[2rem] bg-[#fffaf2] p-6 md:p-10">
                {page.body.map((paragraph) => (
                  <p key={paragraph} className="mb-6 text-lg leading-9 text-[#4d4740] last:mb-0">
                    {paragraph}
                  </p>
                ))}

                <div className="mt-12 grid gap-4">
                  {page.faqs.map((faq) => (
                    <section key={faq.question} className="border-t border-[#111111]/12 pt-6">
                      <h2 className="font-display text-3xl font-semibold leading-[0.95] tracking-[-0.04em]">
                        {faq.question}
                      </h2>
                      <p className="mt-3 text-base leading-8 text-[#5a554f]">{faq.answer}</p>
                    </section>
                  ))}
                </div>
              </div>

              <aside className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d766e]">Related products</p>
                {relatedProducts.map((product) => {
                  const commerce = getCommerceProfile(product);
                  return (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="block rounded-[1.4rem] border border-[#111111]/10 bg-[#fffaf2] p-5 transition hover:-translate-y-1"
                    >
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#2d72b8]">{product.aisle}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold leading-[0.95] tracking-[-0.035em]">{product.name}</h3>
                      <p className="mt-4 text-sm font-semibold text-[#111111]">{formatPrice(commerce.price)}</p>
                    </Link>
                  );
                })}
              </aside>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
