import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Packaging Materials Guide",
  description:
    "Learn how Toreso uses paper, aluminium, steel, reusable silicone, mono-material formats, and plant fiber for daily packaging products.",
};

const materials = [
  {
    name: "Kraft and recycled paper",
    fit: "Mailers, gift boxes, honeycomb wrap, paper tape, labels, and void fill.",
    note: "Best when the product avoids unnecessary lamination and can be flattened or separated after use.",
  },
  {
    name: "Reusable silicone",
    fit: "Food bags, stretch lids, huggers, snack pouches, and travel bottle parts.",
    note: "Useful when the product will be washed and reused many times instead of thrown away after one meal.",
  },
  {
    name: "Aluminium and steel",
    fit: "Cutters, refill pods, travel tins, reusable tools, and long-life closures.",
    note: "Works well for durable components that need a premium feel and a longer service life.",
  },
  {
    name: "Mono-material film",
    fit: "Freezer pouches, mini stretch wrap, return sleeves, and protective films.",
    note: "A clearer choice than mixed formats when the local recovery path accepts clean flexible film.",
  },
  {
    name: "Molded fiber",
    fit: "Corner guards, jar sleeves, fragile inserts, and protective shipping structures.",
    note: "Useful when a product needs shape, cushioning, and a paper-led material story.",
  },
  {
    name: "Moisture-control media",
    fit: "Wardrobe bags, document boxes, dry pods, shoe inserts, and pantry sachets.",
    note: "Packaging can protect what people already own, especially during humid storage seasons.",
  },
];

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-[1700px] rounded-[2rem] bg-[#111111] px-6 py-20 text-[#f5f1eb] md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7d6fb]">Materials</p>
            <h1 className="mt-6 max-w-6xl font-sans text-5xl font-medium uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
              Material clarity before material claims.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#cfc8bd]">
              Toreso’s sustainability story should be practical: what the material is, why it
              fits the job, how long it should stay in use, and what happens after.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1700px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material, index) => (
              <article key={material.name} className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d72b8]">
                  Material {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-8 font-display text-4xl font-semibold leading-[0.9] tracking-[-0.05em]">{material.name}</h2>
                <p className="mt-5 text-sm font-semibold leading-7 text-[#111111]">{material.fit}</p>
                <p className="mt-4 text-sm leading-7 text-[#5a554f]">{material.note}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
