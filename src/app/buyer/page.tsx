"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Package, ArrowRight, CheckCircle, Building2,
  TrendingUp, Shield, Users, BarChart3, Clock,
  Truck, FileText, Calculator, Award, Star,
  Phone, Mail, MapPin, Linkedin, Twitter,
  Search, Filter, Grid3X3, List, ShoppingCart,
  Target, Zap, HandCoins, Activity, Eye, Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import type { Metadata } from 'next';

export default function BuyersPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock supplier data
  const featuredSuppliers = [
    {
      id: 'sup-1',
      name: 'ABC Packaging Solutions',
      location: 'Mumbai, Maharashtra',
      rating: 4.8,
      reviewCount: 156,
      verified: true,
      certifications: ['ISO 9001:2015', 'FSSC 22000'],
      category: 'Corrugated Boxes',
      minOrder: '500 boxes',
      responseTime: '2 hours',
      deliveryRate: '98%'
    },
    {
      id: 'sup-2',
      name: 'FlexiPack Industries',
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      reviewCount: 203,
      verified: true,
      certifications: ['BRC Packaging', 'FDA Approved'],
      category: 'Flexible Packaging',
      minOrder: '10,000 pouches',
      responseTime: '1.5 hours',
      deliveryRate: '100%'
    },
    {
      id: 'sup-3',
      name: 'BottleTech Manufacturing',
      location: 'Ahmedabad, Gujarat',
      rating: 4.7,
      reviewCount: 89,
      verified: true,
      certifications: ['ISO 14001:2015', 'GMP Certified'],
      category: 'Rigid Packaging',
      minOrder: '5,000 bottles',
      responseTime: '3 hours',
      deliveryRate: '96%'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: '8,000+', icon: Package },
    { id: 'corrugated', name: 'Corrugated Boxes', count: '2,500+', icon: Package },
    { id: 'flexible', name: 'Flexible Packaging', count: '1,800+', icon: Package },
    { id: 'rigid', name: 'Rigid Packaging', count: '1,200+', icon: Package },
    { id: 'labels', name: 'Labels & Tapes', count: '900+', icon: Package },
    { id: 'protective', name: 'Protective Packaging', count: '600+', icon: Package },
    { id: 'shipping', name: 'Shipping Supplies', count: '800+', icon: Package }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "15-25% Cost Savings",
      description: "Average procurement cost reduction through competitive bidding and bulk discounts",
      metric: "₹85K saved/month"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Suppliers Only",
      description: "All suppliers undergo rigorous quality audits and compliance verification",
      metric: "99.2% quality score"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Streamlined Procurement",
      description: "JIT delivery, real-time tracking, and automated procurement workflows",
      metric: "40% faster processing"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Advanced analytics and reporting for better procurement decisions",
      metric: "360° visibility"
    }
  ];

  const testimonials = [
    {
      name: "Amit Sharma",
      company: "Reliance Industries Ltd.",
      role: "Senior Procurement Manager",
      content: "Toreso has revolutionized our packaging procurement. We've reduced costs by 22% and improved supplier relationships significantly.",
      rating: 5
    },
    {
      name: "Sneha Patel",
      company: "HDFC Manufacturing",
      role: "Supply Chain Director",
      content: "The platform's quality assurance process and real-time tracking give us complete confidence in our supplier partnerships.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      company: "TechPack Solutions",
      role: "Operations Manager",
      content: "Outstanding platform! The automated workflows and supplier verification have saved us countless hours and improved our bottom line.",
      rating: 5
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Buyers", icon: <Users className="w-6 h-6" /> },
    { value: "5,000+", label: "Verified Suppliers", icon: <Shield className="w-6 h-6" /> },
    { value: "₹500Cr+", label: "GMV Processed", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "99.2%", label: "On-Time Delivery", icon: <Clock className="w-6 h-6" /> }
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
              <a href="#suppliers" className="text-gray-600 hover:text-gray-900 font-medium">Find Suppliers</a>
              <a href="#catalog" className="text-gray-600 hover:text-gray-900 font-medium">Product Catalog</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/buyers/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">
                Dashboard
              </Link>
              <Link href="/buyers/register" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
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
              <Award className="w-4 h-4 mr-2" />
              India's #1 B2B Packaging Procurement Platform
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Your Packaging
              <span className="text-blue-600"> Procurement Process</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join 10,000+ procurement professionals who have streamlined their packaging procurement, reduced costs by 15-25%, and built stronger supplier relationships.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/buyers/register" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/buyers/rfq" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold flex items-center justify-center">
                <FileText className="w-5 h-5 mr-2" />
                Post RFQ
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

      {/* Key Benefits */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Procurement Teams Choose Toreso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven results across industries with measurable cost savings and operational improvements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Suppliers */}
      <section id="suppliers" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Supplier Network
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with verified suppliers who meet the highest quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredSuppliers.map((supplier, index) => (
              <motion.div
                key={supplier.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{supplier.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {supplier.location}
                    </div>
                  </div>
                  {supplier.verified && (
                    <Badge className="bg-green-100 text-green-800">Verified</Badge>
                  )}
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{supplier.rating}</span>
                    <span className="text-sm text-gray-600 ml-1">({supplier.reviewCount})</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {supplier.responseTime} response
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Specializes in:</div>
                  <Badge variant="outline" className="mr-2">{supplier.category}</Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Min. Order:</span>
                    <span className="font-medium">{supplier.minOrder}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">On-time Delivery:</span>
                    <span className="font-medium text-green-600">{supplier.deliveryRate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {supplier.certifications.map(cert => (
                    <Badge key={cert} variant="outline" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    Contact Supplier
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/suppliers">
              <Button variant="outline" size="lg">
                View All Suppliers
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover thousands of packaging products from verified suppliers across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Browse our comprehensive collection of {category.name.toLowerCase()} from trusted suppliers.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Explore Category
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Procurement Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real procurement professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of procurement professionals already saving time and money with Toreso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buyers/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold">
                Start Free Trial
              </Link>
              <Link href="/buyers/rfq" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 font-semibold">
                Post Your First RFQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Package className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">Toreso</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                India's leading B2B packaging materials marketplace, connecting verified suppliers with procurement professionals.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Platform</h3>
              <ul className="space-y-3">
                <li><Link href="/buyers/dashboard" className="text-gray-400 hover:text-white">Buyer Dashboard</Link></li>
                <li><Link href="/buyers/rfq" className="text-gray-400 hover:text-white">Request for Quote</Link></li>
                <li><Link href="/buyers/orders" className="text-gray-400 hover:text-white">Order Management</Link></li>
                <li><Link href="/buyers/analytics" className="text-gray-400 hover:text-white">Analytics & Reports</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="/status" className="text-gray-400 hover:text-white">System Status</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">© 2024 Toreso Technologies Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
