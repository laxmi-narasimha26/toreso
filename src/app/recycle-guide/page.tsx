import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Reuse and Recycle Guide for Daily Packaging",
  description:
    "A practical Toreso guide for reusing, returning, recycling, and separating daily packaging products at home.",
};

const steps = [
  {
    title: "Reuse the tool",
    text: "Keep sealers, wrap rollers, cutters, travel bottles, clips, boxes, and label docks in use before thinking about disposal.",
  },
  {
    title: "Separate the material",
    text: "Paper, rigid plastic, flexible film, metal, glass, and silicone should not be mixed when local disposal options require separation.",
  },
  {
    title: "Keep it clean and dry",
    text: "Food residue, oil, and liquid reduce recovery chances. Empty, wipe, dry, and flatten where possible before disposal.",
  },
  {
    title: "Return where designed",
    text: "Two-way mailers, reusable sleeves, repair kits, and refill systems should loop back into use instead of becoming one-trip packaging.",
  },
];

export default function RecycleGuidePage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-[1700px] overflow-hidden rounded-[2rem] bg-[#d8d5ec] px-6 py-20 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2d72b8]">Reuse and recycle</p>
            <h1 className="mt-6 max-w-6xl font-sans text-5xl font-medium uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
              End-of-life should be obvious.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#3b3941]">
              Better packaging does not end at checkout. The product should tell people what to
              reuse, what to separate, what to keep dry, and when a return loop exists.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1700px] gap-5 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 md:p-8">
                <p className="font-sans text-6xl font-medium leading-none tracking-[-0.08em] text-[#2d9cff]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-8 font-display text-4xl font-semibold leading-[0.9] tracking-[-0.05em]">{step.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#5a554f]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-3 pb-3">
          <div className="rounded-[2rem] bg-[#111111] px-6 py-16 text-center text-[#f5f1eb]">
            <h2 className="mx-auto max-w-5xl font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.08em] md:text-7xl">
              Shop products with clearer material behavior.
            </h2>
            <Link
              href="/products"
              className="mt-9 inline-flex rounded-full bg-[#f5f1eb] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]"
            >
              Open the shelf
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
