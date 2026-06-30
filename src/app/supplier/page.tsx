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
  Target, Zap, HandCoins, Activity, Eye, Plus,
  Globe, Factory, DollarSign, TrendingDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import type { Metadata } from 'next';

export default function SuppliersPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // Mock buyer data
  const featuredBuyers = [
    {
      id: 'buyer-1',
      company: 'Reliance Industries Ltd.',
      industry: 'Manufacturing',
      location: 'Mumbai, Maharashtra',
      annualSpend: '₹50Cr+',
      rating: 4.9,
      orders: 156,
      paymentTerms: '30 days',
      requirements: ['Corrugated Boxes', 'Flexible Packaging', 'Labels'],
      verified: true
    },
    {
      id: 'buyer-2',
      company: 'HDFC Manufacturing',
      industry: 'Consumer Goods',
      location: 'Delhi, NCR',
      annualSpend: '₹25Cr+',
      rating: 4.8,
      orders: 89,
      paymentTerms: '45 days',
      requirements: ['Rigid Packaging', 'Protective Materials', 'Shipping Supplies'],
      verified: true
    },
    {
      id: 'buyer-3',
      company: 'TechPack Solutions',
      industry: 'E-commerce',
      location: 'Bangalore, Karnataka',
      annualSpend: '₹15Cr+',
      rating: 4.7,
      orders: 203,
      paymentTerms: '15 days',
      requirements: ['Mailer Bags', 'Bubble Wrap', 'Custom Boxes'],
      verified: true
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: '10,000+', icon: Building2 },
    { id: 'manufacturing', name: 'Manufacturing', count: '3,500+', icon: Factory },
    { id: 'fmcg', name: 'FMCG', count: '2,800+', icon: Package },
    { id: 'pharma', name: 'Pharmaceuticals', count: '1,200+', icon: Shield },
    { id: 'ecommerce', name: 'E-commerce', count: '1,500+', icon: ShoppingCart },
    { id: 'food', name: 'Food & Beverage', count: '800+', icon: Package },
    { id: 'automotive', name: 'Automotive', count: '400+', icon: Truck }
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Access 10,000+ Verified Buyers",
      description: "Connect with legitimate businesses across India with proven procurement needs",
      metric: "500+ new opportunities/month"
    },
    {
      icon: <HandCoins className="w-6 h-6" />,
      title: "Instant Invoice Discounting",
      description: "Get immediate cash flow through our financing partners with competitive rates",
      metric: "₹2Cr+ disbursed daily"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Steady Order Flow",
      description: "Consistent demand from enterprise buyers with automated lead generation",
      metric: "95% order fulfillment"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Recognition Program",
      description: "Build credibility through our verification process and performance tracking",
      metric: "4.8/5 avg supplier rating"
    }
  ];

  const testimonials = [
    {
      name: "Ravi Kumar",
      company: "Supreme Packaging Pvt. Ltd.",
      role: "Managing Director",
      content: "Toreso has opened doors to new markets we never had access to. Our revenue has grown by 40% in just 6 months.",
      rating: 5
    },
    {
      name: "Anita Desai",
      company: "EcoPack Innovations",
      role: "Operations Head",
      content: "The instant payment feature through invoice discounting has revolutionized our cash flow management.",
      rating: 5
    },
    {
      name: "Suresh Patel",
      company: "Flexi-Tubes America",
      role: "Business Development Manager",
      content: "The platform's verification process has helped us build trust with enterprise clients. Highly recommended for serious suppliers.",
      rating: 5
    }
  ];

  const stats = [
    { value: "5,000+", label: "Verified Suppliers", icon: <Package className="w-6 h-6" /> },
    { value: "10,000+", label: "Active Buyers", icon: <Users className="w-6 h-6" /> },
    { value: "₹500Cr+", label: "Annual GMV", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "98%", label: "Supplier Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Toreso</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#opportunities" className="text-gray-600 hover:text-gray-900 font-medium">Opportunities</a>
              <a href="#buyers" className="text-gray-600 hover:text-gray-900 font-medium">Find Buyers</a>
              <a href="#financing" className="text-gray-600 hover:text-gray-900 font-medium">Financing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/suppliers/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">
                Dashboard
              </Link>
              <Link href="/suppliers/register" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-slate-50 to-emerald-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-4 h-4 mr-2" />
              Join 5,000+ Successful Suppliers
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Grow Your Business with
              <span className="text-green-600"> Verified Buyers</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join India's largest B2B packaging marketplace and connect with verified buyers, access instant payments, and scale your manufacturing business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/suppliers/register" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 font-semibold flex items-center justify-center group">
                Start Free Registration
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/suppliers/dashboard" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold flex items-center justify-center">
                <Eye className="w-5 h-5 mr-2" />
                View Dashboard
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
                  <div className="flex justify-center mb-2 text-green-600">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="opportunities" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Suppliers Choose Toreso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of suppliers who have transformed their business with our platform
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
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Buyers */}
      <section id="buyers" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with Enterprise Buyers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Work with established companies that have consistent procurement needs and reliable payment terms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredBuyers.map((buyer, index) => (
              <motion.div
                key={buyer.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{buyer.company}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Building2 className="w-3 h-3 mr-1" />
                      {buyer.industry}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {buyer.location}
                    </div>
                  </div>
                  {buyer.verified && (
                    <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
                  )}
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{buyer.rating}</span>
                    <span className="text-sm text-gray-600 ml-1">({buyer.orders} orders)</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Annual Spend:</span>
                    <span className="font-medium">{buyer.annualSpend}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Payment Terms:</span>
                    <span className="font-medium text-green-600">{buyer.paymentTerms}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Requirements:</div>
                  <div className="flex flex-wrap gap-1">
                    {buyer.requirements.map(req => (
                      <Badge key={req} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    Send Proposal
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/buyers">
              <Button variant="outline" size="lg">
                View All Buyers
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="financing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with buyers from diverse industries with consistent packaging needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedIndustry(industry.id)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{industry.name}</h3>
                    <p className="text-sm text-gray-600">{industry.count}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Discover opportunities in the {industry.name.toLowerCase()} sector with regular procurement needs.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Explore Opportunities
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
              Success Stories from Our Suppliers
            </h2>
            <p className="text-xl text-gray-600">
              Real suppliers, real growth, real results
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
                  <div className="text-sm text-green-600 font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Join 5,000+ suppliers already connecting with verified buyers and scaling their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/suppliers/register" className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold">
                Start Free Registration
              </Link>
              <Link href="/suppliers/dashboard" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 font-semibold">
                View Supplier Dashboard
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
                <Package className="w-8 h-8 text-green-400" />
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
              <h3 className="text-lg font-semibold mb-6">For Suppliers</h3>
              <ul className="space-y-3">
                <li><Link href="/suppliers/register" className="text-gray-400 hover:text-white">Supplier Registration</Link></li>
                <li><Link href="/suppliers/dashboard" className="text-gray-400 hover:text-white">Supplier Dashboard</Link></li>
                <li><Link href="/suppliers/verification" className="text-gray-400 hover:text-white">Verification Process</Link></li>
                <li><Link href="/suppliers/success-stories" className="text-gray-400 hover:text-white">Success Stories</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-white">Supplier Resources</Link></li>
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
