import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Packaging Recycling Guide for Daily Products",
  description:
    "A practical Toreso recycling guide for paper packaging, flexible film, reusable silicone, metal tools, mailers, tapes, labels, and daily packaging products.",
  keywords: [
    "packaging recycling guide",
    "how to recycle packaging",
    "recyclable packaging products",
    "paper packaging recycling",
    "flexible film recycling",
    "reuse packaging before recycling",
  ],
  alternates: {
    canonical: "/recycle-guide",
  },
  openGraph: {
    title: "Packaging Recycling Guide | Toreso",
    description:
      "How to reuse, clean, separate, return, and recycle daily packaging products without vague greenwashing.",
    url: "https://toreso.com/recycle-guide",
    type: "article",
  },
};

const steps = [
  {
    title: "Reuse the useful part first",
    text: "Keep sealers, clips, cutters, label docks, wrap rollers, travel bottles, boxes, and silicone packs in service. Recycling is the last step, not the first claim.",
  },
  {
    title: "Empty, wipe, dry, flatten",
    text: "Food residue, oil, and liquid can contaminate recovery streams. Empty packs, wipe residue, let them dry, and flatten paper-based packaging where possible.",
  },
  {
    title: "Separate mixed pieces",
    text: "Remove labels, blades, magnets, inserts, elastic, and non-paper windows when they can be separated safely. Simple streams recover better than mixed bundles.",
  },
  {
    title: "Return designed loops",
    text: "Use return-ready sleeves, refill pods, two-way mailers, repair kits, and reusable storage systems again before putting anything into recycling.",
  },
];

const materialRows = [
  {
    material: "Paper mailers, honeycomb wrap, kraft tape, molded fiber",
    action: "Keep dry, remove non-paper parts, flatten, and recycle through paper streams where accepted.",
    products: "HoneyWrap Roll, paper tape, fragile inserts, return-ready mailers.",
  },
  {
    material: "Clean flexible film and stretch wrap",
    action: "Reuse on small jobs first. Recycle only where local flexible-film collection accepts clean film.",
    products: "WrapRoller Mini, freezer pouches, dust sleeves, protective film.",
  },
  {
    material: "Reusable silicone",
    action: "Wash and reuse repeatedly. Do not treat it like one-trip plastic packaging.",
    products: "EverBag Silicone Zip, stretch lids, snack pouches, travel leak guards.",
  },
  {
    material: "Metal tools and durable parts",
    action: "Keep blades, tins, cutters, and dispenser hardware in use; recycle metal only at end of useful life.",
    products: "SnapSeal cutters, refill tins, label docks, durable closures.",
  },
  {
    material: "Moisture-control and freshness packs",
    action: "Follow the product label. Some inserts protect products longer but should not be mixed into paper recycling.",
    products: "FreshOrb, DryHang closet packs, document dry pods, shoe inserts.",
  },
];

const faqs = [
  {
    question: "What is the first step before recycling packaging?",
    answer:
      "Reuse anything that still performs a packaging job. Then empty, clean, dry, separate, and recycle only through the correct local stream.",
  },
  {
    question: "Can flexible plastic film be recycled?",
    answer:
      "Clean flexible film can be recycled only where local film collection exists. If there is no accepted stream, reuse the film on small packing jobs first and avoid mixing it with paper recycling.",
  },
  {
    question: "How should paper packaging be prepared for recycling?",
    answer:
      "Keep paper packaging clean and dry, remove obvious non-paper parts where possible, flatten it, and follow local paper recycling rules.",
  },
  {
    question: "Why does Toreso design return-ready packaging?",
    answer:
      "Return-ready packaging keeps a mailer or sleeve useful for more than one trip, reducing the need for a new parcel pack each time.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to recycle daily packaging products",
    description:
      "A practical sequence for reusing, cleaning, separating, returning, and recycling everyday packaging products.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function RecycleGuidePage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-24">
        <section className="px-3 pb-8 pt-5 md:px-5">
          <div className="relative mx-auto grid min-h-[78vh] max-w-[1860px] overflow-hidden rounded-[2rem] bg-[#111111] text-[#f5f1eb] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative z-10 flex flex-col justify-end p-7 md:p-10">
              <p className="w-fit rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0c27b]">
                Reuse and recycle guide
              </p>
              <h1 className="mt-10 max-w-5xl font-sans text-[15vw] font-medium uppercase leading-[0.86] tracking-[-0.055em] md:text-[9vw] lg:text-[6.4vw]">
                Make disposal obvious.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d8cec1]">
                The best recycling instruction is simple enough to follow at the kitchen counter,
                packing table, hostel room, or small seller desk.
              </p>
            </div>
            <div className="relative min-h-[34rem] overflow-hidden">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/brand-assets/videos/recycling-sort-loop-hd.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.45),transparent)]" />
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-[1700px] gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 md:p-8">
                <p className="font-sans text-6xl font-medium leading-none tracking-[-0.08em] text-[#2d72b8]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-8 font-display text-4xl font-semibold leading-[0.9] tracking-[-0.05em]">{step.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#5a554f]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-3 pb-20">
          <div className="mx-auto grid max-w-[1860px] gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid gap-4">
              {[
                "/brand-assets/videos/paper-fiber-loop-hd.mp4",
                "/brand-assets/videos/recyclable-packaging-table-hd.mp4",
              ].map((src) => (
                <div key={src} className="overflow-hidden rounded-[2rem] bg-[#111111]">
                  <video className="h-[24rem] w-full object-cover" src={src} autoPlay muted loop playsInline preload="metadata" />
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] bg-[#fffaf2] p-6 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b96b4d]">Material paths</p>
              <h2 className="mt-6 max-w-5xl font-sans text-5xl font-medium uppercase leading-[0.88] tracking-[-0.07em] md:text-7xl">
                Recycle by material, not by wish.
              </h2>
              <div className="mt-10 grid gap-4">
                {materialRows.map((row) => (
                  <article key={row.material} className="rounded-[1.4rem] border border-[#111111]/10 bg-[#f5f1eb] p-5">
                    <h3 className="font-display text-3xl font-semibold leading-[0.95] tracking-[-0.04em]">{row.material}</h3>
                    <p className="mt-4 text-sm font-semibold leading-7 text-[#111111]">{row.action}</p>
                    <p className="mt-2 text-sm leading-7 text-[#5a554f]">Toreso examples: {row.products}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1500px] rounded-[2rem] border border-[#111111]/10 bg-[#d8d5ec] p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2d72b8]">Quick answers</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.4rem] bg-[#f5f1eb]/76 p-5">
                  <h2 className="font-display text-3xl font-semibold leading-[0.95] tracking-[-0.04em]">{faq.question}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#5a554f]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-3 pb-3">
          <div className="rounded-[2rem] bg-[#111111] px-6 py-16 text-center text-[#f5f1eb]">
            <h2 className="mx-auto max-w-5xl font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.08em] md:text-7xl">
              Choose products with clearer material behavior.
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/products"
                className="rounded-full bg-[#f5f1eb] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]"
              >
                Open the shelf
              </Link>
              <Link
                href="/sustainability"
                className="rounded-full border border-white/15 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f1eb]"
              >
                Sustainability hub
              </Link>
            </div>
          </div>
        </section>
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
