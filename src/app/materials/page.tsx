import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Recyclable Packaging Materials Guide",
  description:
    "Learn how Toreso uses recycled paper, honeycomb wrap, molded fiber, reusable silicone, mono-material film, metal tools, and moisture-control media for daily packaging.",
  keywords: [
    "recyclable packaging materials",
    "sustainable packaging materials",
    "paper packaging",
    "honeycomb paper wrap",
    "reusable silicone packaging",
    "mono material packaging",
    "molded fiber packaging",
  ],
  alternates: {
    canonical: "/materials",
  },
  openGraph: {
    title: "Recyclable Packaging Materials Guide | Toreso",
    description:
      "A clear material guide for daily packaging products: what each material does, where it works, and how to keep it recoverable.",
    url: "https://toreso.com/materials",
    type: "article",
  },
};

const materials = [
  {
    name: "Recycled kraft and paperboard",
    fit: "Mailers, gift boxes, paper tape, labels, sleeves, document packs, and refill cartons.",
    behavior: "Works best when it stays dry, avoids plastic lamination, and can be flattened after use.",
    link: "/packaging-categories/gift-wrapping-and-presentation-innovations",
  },
  {
    name: "Honeycomb paper and molded fiber",
    fit: "Fragile shipping protection, jar sleeves, corner guards, void fill, and cushion inserts.",
    behavior: "A paper-led substitute for many bubble and foam jobs when cushioning geometry is designed correctly.",
    link: "/packaging-categories/cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
  },
  {
    name: "Reusable silicone",
    fit: "Food bags, stretch lids, huggers, leak guards, travel pouches, and snack packs.",
    behavior: "A good fit only when the product is washed and reused many times instead of treated as disposable.",
    link: "/packaging-categories/reusable-silicone-solutions",
  },
  {
    name: "Mono-material flexible film",
    fit: "Mini stretch wrap, freezer sleeves, dust covers, garment wraps, and clean protective film.",
    behavior: "Prefer simpler film structures where local film collection accepts clean material.",
    link: "/packaging-categories/mini-stretch-film-and-wrapping-reinventions",
  },
  {
    name: "Aluminium, steel, and durable hardware",
    fit: "Cutters, reusable tins, blades, label docks, dispenser rails, clips, and closure hardware.",
    behavior: "Use metal where durability matters; the best sustainability outcome is long service life.",
    link: "/products/toreso-snapseal-mini",
  },
  {
    name: "Moisture-control media",
    fit: "Wardrobe dry packs, document storage, shoe inserts, pantry sachets, electronics protection, and monsoon storage.",
    behavior: "Protecting what already exists is part of waste reduction, especially in humid storage conditions.",
    link: "/packaging-categories/freshness-and-moisture-control-vci-desiccant-reinvention",
  },
];

const decisionRules = [
  "Use paper where the job is dry, flat, printable, and easy to separate.",
  "Use reusable silicone where repeat washing is realistic and frequent.",
  "Use film only when thinness, stretch, sealing, or moisture protection is essential.",
  "Use metal for durable tools, not throwaway decoration.",
  "Use inserts and desiccants when they prevent larger product loss.",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Recyclable Packaging Materials Guide",
  description:
    "A clear material guide for daily packaging products: what each material does, where it works, and how to keep it recoverable.",
  author: {
    "@type": "Organization",
    name: "Toreso",
  },
  publisher: {
    "@type": "Organization",
    name: "Toreso",
  },
  mainEntityOfPage: "https://toreso.com/materials",
};

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-24">
        <section className="px-3 pb-8 pt-5 md:px-5">
          <div className="relative mx-auto grid min-h-[82vh] max-w-[1860px] overflow-hidden rounded-[2rem] bg-[#111111] text-[#f5f1eb] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 flex flex-col justify-end p-7 md:p-10">
              <p className="w-fit rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#b7d6fb]">
                Material guide
              </p>
              <h1 className="mt-10 max-w-6xl font-sans text-[15vw] font-medium uppercase leading-[0.86] tracking-[-0.055em] md:text-[9vw] lg:text-[6.2vw]">
                No material is green by itself.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d8cec1]">
                The right material depends on the job: food freshness, parcel protection, storage,
                travel leakage, labels, return shipping, or repeated reuse.
              </p>
            </div>
            <div className="grid min-h-[34rem] grid-cols-2 gap-3 p-3">
              {[
                "/brand-assets/videos/vertical-material-closeup-hd.mp4",
                "/brand-assets/videos/vertical-reuse-detail-hd.mp4",
              ].map((src) => (
                <div key={src} className="overflow-hidden rounded-[1.5rem] bg-[#222]">
                  <video className="h-full min-h-[34rem] w-full object-cover" src={src} autoPlay muted loop playsInline preload="metadata" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-[1700px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material, index) => (
              <Link
                key={material.name}
                href={material.link}
                className="group rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,17,17,0.12)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d72b8]">
                  Material {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-8 font-display text-4xl font-semibold leading-[0.9] tracking-[-0.05em]">{material.name}</h2>
                <p className="mt-5 text-sm font-semibold leading-7 text-[#111111]">{material.fit}</p>
                <p className="mt-4 text-sm leading-7 text-[#5a554f]">{material.behavior}</p>
                <span className="mt-7 inline-flex rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]">
                  See product logic
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-3 pb-20">
          <div className="mx-auto grid max-w-[1860px] gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] bg-[#111111]">
              <video
                className="h-[42rem] w-full object-cover"
                src="/brand-assets/videos/nature-packaging-system-uhd.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="rounded-[2rem] bg-[#d8d5ec] p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2d72b8]">Decision rules</p>
              <h2 className="mt-6 font-sans text-5xl font-medium uppercase leading-[0.88] tracking-[-0.07em] md:text-7xl">
                Material choice should explain itself.
              </h2>
              <div className="mt-9 grid gap-4">
                {decisionRules.map((rule, index) => (
                  <p key={rule} className="rounded-[1.4rem] bg-[#f5f1eb]/72 p-5 text-sm font-semibold leading-7 text-[#111111]">
                    {String(index + 1).padStart(2, "0")} / {rule}
                  </p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/recycle-guide"
                  className="rounded-full bg-[#111111] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]"
                >
                  Recycle guide
                </Link>
                <Link
                  href="/sustainability"
                  className="rounded-full border border-[#111111]/15 px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111]"
                >
                  Sustainability hub
                </Link>
              </div>
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
