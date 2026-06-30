"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Send, Clock, CheckCircle, TrendingUp, 
  Users, Package, DollarSign, BarChart3, Zap,
  ArrowRight, Target, Award, Shield
} from 'lucide-react';
import { TypewriterText } from '@/components/animations/AnimatedText';

export default function RFQSystem() {
  const [activeTab, setActiveTab] = useState('buyers');
  const [currentStep, setCurrentStep] = useState(0);

  const rfqProcess = [
    {
      title: "Post Your Requirement",
      description: "Submit detailed specifications in under 60 seconds",
      icon: <FileText />,
      time: "< 1 min",
      features: ["Product specs", "Quantity needed", "Delivery timeline", "Quality standards"]
    },
    {
      title: "AI-Powered Matching",
      description: "Our AI matches you with best-fit suppliers instantly",
      icon: <Zap />,
      time: "Instant",
      features: ["Smart matching", "Supplier scoring", "Price optimization", "Quality filtering"]
    },
    {
      title: "Receive Multiple Quotes",
      description: "Get competitive quotes from verified suppliers",
      icon: <Users />,
      time: "< 4 hours",
      features: ["Up to 5 quotes", "Price comparison", "Supplier profiles", "Rating & reviews"]
    },
    {
      title: "Compare & Negotiate",
      description: "Advanced comparison tools with real-time negotiation",
      icon: <BarChart3 />,
      time: "Real-time",
      features: ["Side-by-side comparison", "Chat with suppliers", "Sample requests", "Terms negotiation"]
    },
    {
      title: "Finalize Order",
      description: "Secure payment and guaranteed delivery",
      icon: <CheckCircle />,
      time: "Instant",
      features: ["Secure payment", "Contract generation", "Quality assurance", "Tracking enabled"]
    }
  ];

  const statistics = [
    { value: "2M+", label: "RFQs Processed", growth: "+45%" },
    { value: "4 hrs", label: "Avg Response Time", growth: "-60%" },
    { value: "35%", label: "Cost Savings", growth: "+25%" },
    { value: "98%", label: "Match Success Rate", growth: "+15%" }
  ];

  const buyerBenefits = [
    { icon: <DollarSign />, title: "Best Prices", desc: "Compare quotes from multiple suppliers" },
    { icon: <Clock />, title: "Quick Response", desc: "Get quotes within 4 hours" },
    { icon: <Shield />, title: "Verified Suppliers", desc: "All suppliers are pre-audited" },
    { icon: <Target />, title: "Perfect Match", desc: "AI-powered supplier matching" }
  ];

  const supplierBenefits = [
    { icon: <TrendingUp />, title: "Quality Leads", desc: "Pre-qualified buyer requirements" },
    { icon: <Users />, title: "New Customers", desc: "Access to 10,000+ buyers" },
    { icon: <Award />, title: "Fair Competition", desc: "Transparent bidding process" },
    { icon: <Package />, title: "Bulk Orders", desc: "High-value order opportunities" }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
            className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl border border-green-500/30 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <FileText className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-sm font-semibold">Smart RFQ System</span>
          </motion.span>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              Intelligent Quote Management
            </span>
          </h2>
          
          <div className="text-xl text-gray-300 max-w-3xl mx-auto">
            <TypewriterText 
              texts={[
                "Post requirements in 60 seconds",
                "Get quotes from verified suppliers",
                "Save up to 35% on procurement costs",
                "AI-powered supplier matching"
              ]}
              className="text-2xl font-semibold text-blue-400"
            />
          </div>
        </motion.div>

        {/* RFQ Process Flow */}
        <div className="mb-20">
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-white/5 backdrop-blur-xl rounded-full p-2">
              <button
                onClick={() => setActiveTab('buyers')}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === 'buyers' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'hover:bg-white/10'
                }`}
              >
                For Buyers
              </button>
              <button
                onClick={() => setActiveTab('suppliers')}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === 'suppliers' 
                    ? 'bg-gradient-to-r from-green-500 to-blue-500' 
                    : 'hover:bg-white/10'
                }`}
              >
                For Suppliers
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {rfqProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setCurrentStep(index)}
                >
                  <motion.div
                    className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-6 cursor-pointer ${
                      currentStep === index ? 'border-blue-500' : 'border-white/10'
                    }`}
                    whileHover={{ scale: 1.05, y: -10 }}
                    animate={currentStep === index ? {
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                    } : {}}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl ${
                        currentStep === index 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                          : 'bg-white/10'
                      }`}>
                        {step.icon}
                      </div>
                      <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">
                        {step.time}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{step.description}</p>
                    
                    <AnimatePresence>
                      {currentStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {step.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-300 mb-1">
                              <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                              {feature}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                <div className="inline-flex items-center text-xs text-green-400">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.growth}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Buyer Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Benefits for Buyers
            </h3>
            <div className="space-y-4">
              {buyerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-400">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Supplier Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
              Benefits for Suppliers
            </h3>
            <div className="space-y-4">
              {supplierBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-400">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-xl inline-flex items-center"
            >
              <span>Post Your RFQ</span>
              <ArrowRight className="w-6 h-6 ml-3" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full font-bold text-xl"
            >
              View Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

