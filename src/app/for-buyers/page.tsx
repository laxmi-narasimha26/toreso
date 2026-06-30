"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  TrendingDown,
  Truck,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
  Receipt,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const benefits = [
  {
    icon: Search,
    title: "Browse 50,000+ Products",
    description: "Search across 200+ packaging categories from corrugated boxes to flexible pouches.",
  },
  {
    icon: FileText,
    title: "Smart RFQ System",
    description: "Create detailed requirements and receive competitive bids from verified suppliers.",
  },
  {
    icon: TrendingDown,
    title: "Save 15-25% on Costs",
    description: "Access bulk pricing, competitive bidding, and AI-powered price benchmarking.",
  },
  {
    icon: Shield,
    title: "100% Verified Suppliers",
    description: "Every supplier is audited for quality, compliance, and reliability before listing.",
  },
  {
    icon: Truck,
    title: "Real-Time Order Tracking",
    description: "Track every shipment from factory to your doorstep with live updates.",
  },
  {
    icon: Receipt,
    title: "Invoice Discounting",
    description: "Unlock working capital with instant invoice financing at competitive rates.",
  },
];

export default function ForBuyersPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 bg-gradient-to-br from-toreso-teal-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.p
              className="text-sm font-semibold text-toreso-teal-600 uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              For Buyers
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl font-display font-bold text-toreso-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Source packaging
              <span className="text-toreso-teal-600"> smarter, faster, cheaper</span>
            </motion.h1>
            <motion.p
              className="text-lg text-toreso-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Stop wasting time calling suppliers individually. Post your requirement once,
              get competitive quotes from 5,000+ verified suppliers, and manage everything
              from one dashboard.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/register?type=buyer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-toreso-teal-600 text-white font-semibold rounded-xl hover:bg-toreso-teal-700 transition-colors shadow-lg group"
              >
                Start Sourcing Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/request-demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-toreso-slate-200 text-toreso-slate-700 font-semibold rounded-xl hover:border-toreso-teal-300 transition-colors"
              >
                Request a Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-toreso-slate-900 text-center mb-4">
            Everything you need to procure packaging
          </h2>
          <p className="text-lg text-toreso-slate-500 text-center mb-16 max-w-xl mx-auto">
            One platform to find, compare, order, and track all your packaging needs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-7 rounded-2xl border border-toreso-slate-200 hover:border-toreso-teal-200 hover:shadow-medium transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-toreso-teal-50 flex items-center justify-center mb-4 group-hover:bg-toreso-teal-100 transition-colors">
                  <b.icon className="w-6 h-6 text-toreso-teal-600" />
                </div>
                <h3 className="text-lg font-display font-bold text-toreso-slate-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-toreso-slate-500 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-toreso-teal-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to simplify your procurement?
          </h2>
          <p className="text-toreso-teal-100 mb-8 max-w-lg mx-auto">
            Join 10,000+ buyers already saving time and money on Toreso.
          </p>
          <Link
            href="/register?type=buyer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-toreso-teal-700 font-semibold rounded-xl hover:bg-toreso-teal-50 transition-colors shadow-lg group"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
