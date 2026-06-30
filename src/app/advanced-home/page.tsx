"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Package, Truck, Shield, BarChart3, Users, Globe, ArrowRight,
  CheckCircle, Star, Zap, Play
} from 'lucide-react';

export default function AdvancedHomePage() {
  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Smart Procurement",
      description: "AI-powered supplier matching and automated procurement workflows",
      link: "/solutions/procurement"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Regular audits and compliance tracking for all suppliers",
      link: "/solutions/quality"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "JIT Delivery",
      description: "Just-in-time delivery with real-time tracking",
      link: "/solutions/logistics"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Access suppliers from across India and internationally",
      link: "/suppliers"
    }
  ];

  const stats = [
    { value: "10K+", label: "Buyers", icon: <Users /> },
    { value: "5K+", label: "Suppliers", icon: <Shield /> },
    { value: "₹500Cr+", label: "GMV", icon: <Globe /> },
    { value: "98%", label: "Satisfaction", icon: <Star /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Toreso</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-600 hover:text-gray-900 font-medium">Solutions</a>
              <a href="#platform" className="text-gray-600 hover:text-gray-900 font-medium">Platform</a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900 font-medium">Resources</a>
              <a href="#company" className="text-gray-600 hover:text-gray-900 font-medium">Company</a>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                Sign In
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              India's #1 B2B Packaging Marketplace
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Revolutionizing
              <span className="text-blue-600"> Packaging Procurement</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Connect with 5,000+ verified suppliers, leverage AI-powered procurement,
              and transform your supply chain with real-time tracking and instant payments
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/register" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/request-demo" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-blue-600">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete B2B Solutions</h2>
            <p className="text-xl text-gray-600">Everything you need for packaging procurement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="text-blue-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link href={feature.link} className="text-blue-400 hover:text-blue-300">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Experience the Future of B2B Commerce
            </span>
          </h2>

          <Link href="/advanced-home">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full font-bold text-xl inline-flex items-center"
            >
              <Zap className="w-6 h-6 mr-3" />
              <span>Explore Advanced Features</span>
              <ArrowRight className="w-6 h-6 ml-3" />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Package className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold">Toreso</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                India's leading B2B packaging materials marketplace, connecting verified suppliers with businesses across the country.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">For Suppliers</h3>
              <ul className="space-y-3">
                <li><Link href="/suppliers/register" className="text-gray-400 hover:text-white">Supplier Registration</Link></li>
                <li><Link href="/suppliers/dashboard" className="text-gray-400 hover:text-white">Supplier Dashboard</Link></li>
                <li><Link href="/suppliers/verification" className="text-gray-400 hover:text-white">Verification Process</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">For Buyers</h3>
              <ul className="space-y-3">
                <li><Link href="/buyers/register" className="text-gray-400 hover:text-white">Buyer Registration</Link></li>
                <li><Link href="/buyers/dashboard" className="text-gray-400 hover:text-white">Buyer Dashboard</Link></li>
                <li><Link href="/buyers/rfq" className="text-gray-400 hover:text-white">Request Quote</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

