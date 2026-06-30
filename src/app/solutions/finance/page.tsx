"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Package, ArrowRight, DollarSign, Clock, Shield, 
  CheckCircle, CreditCard, BarChart3, Zap, TrendingUp,
  Calculator, FileText, Users, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function InvoiceDiscounting() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [days, setDays] = useState(45);
  
  const discountRate = 1.2; // 1.2% per month
  const processingFee = 0.5; // 0.5% processing fee
  const discount = (loanAmount * discountRate * days) / (100 * 30);
  const fees = (loanAmount * processingFee) / 100;
  const netAmount = loanAmount - discount - fees;

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Liquidity",
      description: "Convert your pending invoices into immediate working capital within 24 hours of approval.",
      benefits: ["24-hour processing", "No waiting for payments", "Improved cash flow"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Rates",
      description: "Industry-best interest rates starting from 1.2% per month with transparent pricing.",
      benefits: ["Starting from 1.2% monthly", "No hidden charges", "Transparent pricing"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Secure",
      description: "Bank-grade security with encrypted transactions and regulatory compliance.",
      benefits: ["Bank-grade security", "RBI compliance", "Data protection"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Approval",
      description: "Automated underwriting system provides instant approval decisions.",
      benefits: ["2-hour approval", "Minimal documentation", "Digital process"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Upload Invoice",
      description: "Upload your verified invoice from completed Toreso orders",
      time: "2 minutes"
    },
    {
      step: "02", 
      title: "Instant Verification",
      description: "Our system automatically verifies invoice authenticity and buyer creditworthiness",
      time: "5 minutes"
    },
    {
      step: "03",
      title: "Get Offer",
      description: "Receive competitive discounting offer with transparent terms",
      time: "10 minutes"
    },
    {
      step: "04",
      title: "Receive Funds",
      description: "Accept offer and receive funds directly in your bank account",
      time: "24 hours"
    }
  ];

  const stats = [
    { value: "₹500Cr+", label: "Funds Disbursed", icon: <CreditCard /> },
    { value: "5,000+", label: "Suppliers Funded", icon: <Users /> },
    { value: "24hrs", label: "Average Processing", icon: <Clock /> },
    { value: "1.2%", label: "Starting Rate", icon: <TrendingUp /> }
  ];

  const benefits = [
    "No collateral or guarantor required",
    "Flexible repayment options",
    "No prepayment penalties", 
    "Dedicated relationship manager",
    "24/7 online portal access",
    "Integration with accounting software",
    "Bulk invoice processing",
    "Credit limit enhancement options"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Toreso</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/solutions" className="text-gray-600 hover:text-gray-900">Solutions</Link>
              <Link href="/platform" className="text-gray-600 hover:text-gray-900">Platform</Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
              <Link href="/company" className="text-gray-600 hover:text-gray-900">Company</Link>
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link href="/register">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-emerald-100 text-emerald-800 border-emerald-200">
              <DollarSign className="w-4 h-4 mr-2" />
              Invoice Discounting Solution
            </Badge>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Unlock <span className="text-emerald-600">Instant Cash</span> Flow
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Convert your pending invoices into immediate working capital. Get funded within 24 hours at competitive rates starting from 1.2% per month.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/suppliers/register">
                <Button size="lg" className="px-8 py-4 text-lg bg-emerald-600 hover:bg-emerald-700">
                  Get Instant Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Calculate Savings
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Instant Cash
              </h2>
              <p className="text-xl text-gray-600">
                See how much you can get for your pending invoices
              </p>
            </div>

            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label htmlFor="amount" className="text-base font-medium mb-3 block">
                    Invoice Amount (₹)
                  </Label>
                  <Input
                    id="amount"
                    type="range"
                    min="50000"
                    max="5000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full mb-2"
                  />
                  <div className="text-3xl font-bold text-gray-900">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="days" className="text-base font-medium mb-3 block">
                    Payment Terms (Days)
                  </Label>
                  <Input
                    id="days"
                    type="range"
                    min="15"
                    max="90"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full mb-2"
                  />
                  <div className="text-3xl font-bold text-gray-900">
                    {days} Days
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Invoice Amount</div>
                  <div className="text-xl font-bold">₹{loanAmount.toLocaleString('en-IN')}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Discount Charges</div>
                  <div className="text-xl font-bold text-yellow-600">₹{Math.round(discount).toLocaleString('en-IN')}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Processing Fee</div>
                  <div className="text-xl font-bold text-orange-600">₹{Math.round(fees).toLocaleString('en-IN')}</div>
                </div>
                <div className="text-center bg-emerald-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">You Receive</div>
                  <div className="text-2xl font-bold text-emerald-600">₹{Math.round(netAmount).toLocaleString('en-IN')}</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="px-12 py-4 bg-emerald-600 hover:bg-emerald-700">
                  Apply for Financing
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Invoice Discounting?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, secure, and transparent financing solutions designed specifically for packaging suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From application to funding in less than 24 hours
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-emerald-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-center mb-3">{step.description}</p>
                    <div className="text-center">
                      <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                        {step.time}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Complete Financing Solution
              </h2>
              <p className="text-xl text-gray-600">
                Designed specifically for packaging suppliers with flexible terms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-800">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center bg-emerald-50 p-8 rounded-lg">
              <Award className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by 5,000+ Suppliers</h3>
              <p className="text-gray-600 mb-6">
                We've processed over ₹500 Crores in invoice discounting, helping suppliers maintain healthy cash flow and grow their businesses.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-emerald-600">₹500Cr+</div>
                  <div className="text-sm text-gray-600">Total Disbursed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">5,000+</div>
                  <div className="text-sm text-gray-600">Happy Suppliers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">99.8%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Improve Your Cash Flow?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of suppliers who have transformed their business with instant invoice discounting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/suppliers/register">
                <Button size="lg" className="px-12 py-4 text-lg bg-emerald-600 hover:bg-emerald-700">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-12 py-4 text-lg">
                Talk to Expert
              </Button>
            </div>
            <p className="text-gray-500 mt-6">
              No setup fees • Quick approval • Competitive rates
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Package className="w-8 h-8" />
                <span className="text-2xl font-bold">Toreso</span>
              </div>
              <p className="text-gray-400">
                Empowering suppliers with instant liquidity and flexible financing solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/solutions/procurement" className="hover:text-white">Smart Procurement</Link></li>
                <li><Link href="/solutions/quality" className="hover:text-white">Quality Assurance</Link></li>
                <li><Link href="/solutions/logistics" className="hover:text-white">JIT Delivery</Link></li>
                <li><Link href="/solutions/finance" className="hover:text-white">Invoice Discounting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Financing</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/solutions/finance#calculator" className="hover:text-white">Rate Calculator</Link></li>
                <li><Link href="/solutions/finance#process" className="hover:text-white">Application Process</Link></li>
                <li><Link href="/solutions/finance#terms" className="hover:text-white">Terms & Conditions</Link></li>
                <li><Link href="/solutions/finance#faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/resources/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/company/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/legal/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Toreso Technologies Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

