import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sustainable Recyclable Packaging Products",
  description:
    "Toreso sustainability hub for recyclable packaging products, reusable packaging tools, material clarity, low-waste shipping, recycling guidance, and circular daily packaging.",
  keywords: [
    "sustainable packaging products",
    "recyclable packaging products",
    "reusable packaging for home",
    "eco friendly daily packaging",
    "circular packaging",
    "recycling packaging guide",
    "plastic free packaging alternatives",
    "low waste packaging products",
  ],
  alternates: {
    canonical: "/sustainability",
  },
  openGraph: {
    title: "Sustainable Recyclable Packaging Products | Toreso",
    description:
      "A practical sustainability system for daily packaging: reuse more, separate materials better, ship lighter, and recycle cleaner.",
    url: "https://toreso.com/sustainability",
    type: "website",
  },
};

const principles = [
  {
    label: "01",
    title: "Reuse before recycle",
    text: "A sealer, clip, stretch roller, silicone pouch, return sleeve, or label dock should solve the same packaging job again and again before it becomes waste.",
  },
  {
    label: "02",
    title: "Make materials readable",
    text: "Every Toreso product page should tell people the main material, why it fits the job, how to keep it clean, and what separation path makes sense after use.",
  },
  {
    label: "03",
    title: "Prefer simple structures",
    text: "Paper with paper, film with film, metal as durable hardware, and reusable silicone where repeated washing beats one-trip disposables.",
  },
  {
    label: "04",
    title: "Right-size the pack",
    text: "Daily packaging should protect the item without oversized void fill, unnecessary mixed layers, or decorative waste that cannot be separated.",
  },
];

const impactTracks = [
  {
    title: "Food packet rescue",
    href: "/packaging-categories/heat-sealing-and-resealing-gadgets",
    text: "Mini sealers, pour clips, freshness pods, and pantry labels help people finish what they already bought instead of throwing stale food away.",
  },
  {
    title: "Cleaner shipping",
    href: "/packaging-categories/cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    text: "Honeycomb paper, molded fiber, paper tape, return-ready sleeves, and right-sized inserts reduce mixed-material parcel waste.",
  },
  {
    title: "Reusable storage",
    href: "/packaging-categories/reusable-silicone-solutions",
    text: "Silicone bags, stretch lids, fabric wraps, document sleeves, and moisture-control packs keep packaging in circulation longer.",
  },
];

const materialPaths = [
  "Recycled kraft paper, honeycomb wrap, paper tape, paper mailers, and molded-fiber inserts for paper-led recovery.",
  "Reusable silicone for food storage, travel leak control, and repeat-use closures where washing is realistic.",
  "Mono-material flexible film for clean stretch, freezer, or protection jobs where local film collection exists.",
  "Aluminium and steel for blades, cutters, tins, and durable tools that should stay in use for years.",
  "Moisture-control media for wardrobes, documents, shoes, and electronics so existing products last longer.",
];

const faqs = [
  {
    question: "What makes Toreso packaging sustainable?",
    answer:
      "Toreso focuses on daily packaging products that stay useful, use clearer material structures, reduce avoidable waste, and give people practical reuse, separation, and recycling guidance.",
  },
  {
    question: "Is recyclable packaging always better than reusable packaging?",
    answer:
      "Not always. A reusable product that replaces many single-use packs can be better for daily routines. Recycling matters most after reuse has been exhausted and the material is clean and separated.",
  },
  {
    question: "Why does Toreso talk about material clarity instead of only eco-friendly claims?",
    answer:
      "Because vague green claims do not help a customer dispose correctly. Material clarity tells people what the product is made from, how to use it longer, and how to separate it at end of life.",
  },
  {
    question: "Which Toreso products help reduce household packaging waste?",
    answer:
      "SnapSeal Mini, WrapRoller Mini, HoneyWrap Roll, reusable silicone bags, pour clips, return mailers, paper tape, label systems, and moisture-control packs are built around repeat daily packaging jobs.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sustainable Recyclable Packaging Products",
    url: "https://toreso.com/sustainability",
    description:
      "Toreso sustainability hub for recyclable packaging products, reusable packaging tools, material clarity, low-waste shipping, recycling guidance, and circular daily packaging.",
    about: [
      "sustainable packaging",
      "recyclable packaging",
      "reusable packaging",
      "circular packaging",
      "packaging recycling",
    ],
    isPartOf: {
      "@type": "WebSite",
      name: "Toreso",
      url: "https://toreso.com",
    },
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

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden px-3 pb-8 pt-5 md:px-5">
          <div className="relative mx-auto min-h-[88vh] max-w-[1860px] overflow-hidden rounded-[2rem] bg-[#14110f] text-[#f5f1eb] shadow-[0_26px_100px_rgba(17,17,17,0.2)]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-58"
              src="/brand-assets/videos/sustainability-only-loop-hd.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.88),rgba(17,17,17,0.5)_52%,rgba(17,17,17,0.14)),radial-gradient(circle_at_78%_20%,rgba(245,241,235,0.26),transparent_24%)]" />
            <div className="absolute inset-x-0 top-10 opacity-[0.11]">
              <div className="animate-marquee marquee-phrase whitespace-nowrap font-sans text-[14vw] font-medium uppercase leading-none">
                reuse first / recycle clean / waste less / reuse first / recycle clean / waste less /
              </div>
            </div>

            <div className="relative z-10 grid min-h-[88vh] gap-10 px-6 py-12 md:px-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
              <div>
                <p className="w-fit rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0c27b] backdrop-blur">
                  Total recyclable solutions
                </p>
                <h1 className="mt-10 max-w-6xl font-sans text-[15vw] font-medium uppercase leading-[0.86] tracking-[-0.055em] text-white md:text-[9vw] lg:text-[6.8vw]">
                  Packaging
                  <span className="block text-[#f0c27b]">that earns</span>
                  <span className="block">another use.</span>
                </h1>
              </div>

              <div className="rounded-[1.6rem] border border-white/15 bg-[#f5f1eb]/12 p-5 backdrop-blur-md md:p-7">
                <p className="text-lg leading-8 text-[#f5f1eb]">
                  Toreso is not building a vague green shelf. The goal is a daily packaging
                  ecosystem where every product has a job, a material reason, a reuse habit, and a
                  clearer end-of-life instruction.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {["Reusable tools", "Recyclable packs", "Cleaner returns"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f0c27b]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-[1700px] gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6">
                <p className="font-sans text-5xl font-medium leading-none tracking-[-0.08em] text-[#b96b4d]">
                  {principle.label}
                </p>
                <h2 className="mt-8 font-display text-4xl font-semibold leading-[0.9] tracking-[-0.05em]">
                  {principle.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#5a554f]">{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-3 pb-20">
          <div className="mx-auto grid max-w-[1860px] gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[2rem] bg-[#d8d5ec]">
              <video
                className="h-[42rem] w-full object-cover"
                src="/brand-assets/videos/earth-material-recovery-uhd.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="rounded-[2rem] bg-[#111111] p-7 text-[#f5f1eb] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0c27b]">
                Sustainability engine
              </p>
              <h2 className="mt-8 font-sans text-5xl font-medium uppercase leading-[0.88] tracking-[-0.07em] md:text-7xl">
                Stop selling objects. Sell better loops.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#d8cec1]">
                Searchers want direct answers: what is recyclable packaging, how to reduce
                packaging waste, what materials can be recycled, and which products replace
                single-use packing habits. This page is structured to answer those questions
                without turning the brand into a lecture.
              </p>
              <div className="mt-8 grid gap-3">
                {materialPaths.map((path) => (
                  <p key={path} className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-[#efe5d7]">
                    {path}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1700px]">
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2d72b8]">
                Circular product tracks
              </p>
              <h2 className="mt-5 font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.07em] md:text-8xl">
                Sustainability must sit inside the product shelf.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {impactTracks.map((track, index) => (
                <Link
                  key={track.href}
                  href={track.href}
                  className="group overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,17,17,0.12)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96b4d]">
                    Track {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-10 font-display text-4xl font-semibold leading-[0.9] tracking-[-0.05em]">
                    {track.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#5a554f]">{track.text}</p>
                  <span className="mt-8 inline-flex rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]">
                    Open aisle
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-3 pb-3">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "/brand-assets/videos/circular-packaging-flow-uhd.mp4",
              "/brand-assets/videos/nature-packaging-system-uhd.mp4",
              "/brand-assets/videos/vertical-earth-care-uhd.mp4",
            ].map((src) => (
              <div key={src} className="overflow-hidden rounded-[2rem] bg-[#111111]">
                <video className="h-[36rem] w-full object-cover" src={src} autoPlay muted loop playsInline preload="metadata" />
              </div>
            ))}
          </div>
        </section>

        <section className="px-3 pb-3">
          <div className="rounded-[2rem] bg-[#111111] px-6 py-16 text-center text-[#f5f1eb]">
            <h2 className="mx-auto max-w-6xl font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.08em] md:text-7xl">
              Build the habit: reuse, separate, return, recycle.
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/recycle-guide"
                className="rounded-full bg-[#f5f1eb] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]"
              >
                Read recycle guide
              </Link>
              <Link
                href="/materials"
                className="rounded-full border border-white/15 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f1eb]"
              >
                Material guide
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
