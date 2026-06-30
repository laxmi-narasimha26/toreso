"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  DollarSign, TrendingUp, Clock, Shield, 
  CreditCard, BarChart3, Zap, CheckCircle,
  ArrowRight, Percent, Calendar, Award
} from 'lucide-react';
import CountUp from 'react-countup';

export default function InvoiceDiscounting() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [days, setDays] = useState(30);
  const controls = useAnimation();

  const discountRate = 1.2; // 1.2% per month
  const processingFee = 0.5; // 0.5% processing fee
  const discount = (loanAmount * discountRate * days) / (100 * 30);
  const fees = (loanAmount * processingFee) / 100;
  const netAmount = loanAmount - discount - fees;

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 }
    });
  }, [loanAmount, days, controls]);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Liquidity",
      description: "Get paid in 24 hours instead of 60-90 days",
      stat: "24 hrs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Low Interest Rates",
      description: "Industry-best rates starting at 1.2% per month",
      stat: "1.2%",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Secure",
      description: "Bank-grade security with encrypted transactions",
      stat: "100%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Approval",
      description: "Automated approval within 2 hours",
      stat: "2 hrs",
      color: "from-orange-500 to-red-500"
    }
  ];

  const process = [
    { step: 1, title: "Upload Invoice", desc: "Upload verified invoice from Toreso orders" },
    { step: 2, title: "Instant Verification", desc: "AI-powered verification in seconds" },
    { step: 3, title: "Get Offer", desc: "Receive competitive discounting offer" },
    { step: 4, title: "Accept & Receive", desc: "Money credited within 24 hours" }
  ];

  const benefits = [
    "No collateral required",
    "Flexible repayment options",
    "Transparent pricing",
    "Dedicated support team",
    "No hidden charges",
    "Digital documentation"
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-purple-900/10 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        {/* Floating Money Icons */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500/20 text-6xl"
            initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight }}
            animate={{
              y: -100,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ₹
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <DollarSign className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-sm font-semibold">Invoice Discounting</span>
          </motion.span>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
              Unlock Instant Cash Flow
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Convert your pending invoices into immediate working capital with India's fastest invoice discounting platform
          </p>
        </motion.div>

        {/* Interactive Calculator */}
        <motion.div
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Calculate Your Instant Cash</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Invoice Amount (₹)</label>
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
                  ₹<CountUp end={loanAmount} duration={0.5} separator="," />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Payment Terms (Days)</label>
                <input
                  type="range"
                  min="7"
                  max="90"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {days} Days
                </div>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
              animate={controls}
            >
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-sm text-gray-400 mb-1">Invoice Amount</div>
                <div className="text-xl font-bold">₹<CountUp end={loanAmount} separator="," /></div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-sm text-gray-400 mb-1">Discount Charges</div>
                <div className="text-xl font-bold text-yellow-400">₹<CountUp end={discount} separator="," /></div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-sm text-gray-400 mb-1">Processing Fee</div>
                <div className="text-xl font-bold text-orange-400">₹<CountUp end={fees} separator="," /></div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                <div className="text-sm text-gray-400 mb-1">You Receive</div>
                <div className="text-2xl font-bold text-green-400">₹<CountUp end={netAmount} separator="," /></div>
              </div>
            </motion.div>

            <motion.button
              className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-bold text-lg"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get Instant Cash Now
            </motion.button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {feature.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Simple 4-Step Process</h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl font-bold"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.step}
                    </motion.div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Invoice Discounting?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8">
              <Award className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Trusted by 5000+ Suppliers</h3>
              <p className="text-gray-400 mb-6">
                We've processed over ₹500 Crores in invoice discounting, helping suppliers maintain healthy cash flow.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-green-400">₹500Cr+</div>
                  <div className="text-sm text-gray-400">Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">5000+</div>
                  <div className="text-sm text-gray-400">Happy Suppliers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

