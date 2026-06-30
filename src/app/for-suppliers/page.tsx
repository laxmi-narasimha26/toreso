"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Globe,
  Shield,
  BarChart3,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const benefits = [
  {
    icon: Users,
    title: "Access 10,000+ Qualified Buyers",
    description: "Connect with procurement teams from enterprises, SMEs, and growing startups.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    description: "Get orders from buyers across 15+ Indian states without a sales team.",
  },
  {
    icon: TrendingUp,
    title: "Grow Revenue 3x",
    description: "Our top suppliers have tripled their order volume within the first year.",
  },
  {
    icon: Shield,
    title: "Verified Business Profile",
    description: "Stand out with a verified badge that gives buyers confidence in your quality.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Track views, inquiries, order trends, and competitive pricing insights.",
  },
  {
    icon: Zap,
    title: "Instant Payments",
    description: "Get paid on time with escrow-backed payments and optional invoice discounting.",
  },
];

const steps = [
  "Register your business and get verified",
  "List your products with specs and pricing",
  "Receive RFQs from qualified buyers",
  "Fulfill orders and grow your business",
];

export default function ForSuppliersPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 bg-gradient-to-br from-toreso-amber-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.p
              className="text-sm font-semibold text-toreso-amber-600 uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              For Suppliers
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl font-display font-bold text-toreso-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Reach thousands of
              <span className="text-toreso-amber-600"> new buyers</span>
            </motion.h1>
            <motion.p
              className="text-lg text-toreso-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              List your packaging products on India&apos;s largest B2B marketplace. Get
              qualified leads, fulfill orders, and grow your business — with zero
              upfront costs.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/register?type=supplier"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-toreso-amber-500 text-white font-semibold rounded-xl hover:bg-toreso-amber-600 transition-colors shadow-lg group"
              >
                Start Selling Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-toreso-slate-200 text-toreso-slate-700 font-semibold rounded-xl hover:border-toreso-amber-300 transition-colors"
              >
                Talk to Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white border-b border-toreso-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-toreso-slate-900 text-center mb-10">
            Get started in 4 easy steps
          </h2>
          <div className="flex flex-col sm:flex-row items-start gap-6 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-toreso-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-toreso-amber-700">{i + 1}</span>
                </div>
                <p className="text-sm text-toreso-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-toreso-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-toreso-slate-900 text-center mb-4">
            Why suppliers choose Toreso
          </h2>
          <p className="text-lg text-toreso-slate-500 text-center mb-16 max-w-xl mx-auto">
            Everything you need to grow your packaging business online.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-7 rounded-2xl bg-white border border-toreso-slate-200 hover:border-toreso-amber-200 hover:shadow-medium transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-toreso-amber-50 flex items-center justify-center mb-4 group-hover:bg-toreso-amber-100 transition-colors">
                  <b.icon className="w-6 h-6 text-toreso-amber-600" />
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
      <section className="py-20 bg-gradient-to-r from-toreso-amber-500 to-toreso-amber-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-4">
            Start selling on Toreso today
          </h2>
          <p className="text-toreso-amber-100 mb-8 max-w-lg mx-auto">
            Zero listing fees. Zero setup cost. Unlimited potential.
          </p>
          <Link
            href="/register?type=supplier"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-toreso-amber-700 font-semibold rounded-xl hover:bg-toreso-amber-50 transition-colors shadow-lg group"
          >
            Register as Supplier
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
