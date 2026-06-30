"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParallaxTilt from 'react-parallax-tilt';
import { 
  Shield, CheckCircle, FileText, Users, TrendingUp, 
  Award, Globe, Clock, ArrowRight, Upload, Building,
  BarChart3, Package, Truck, Star
} from 'lucide-react';
import { AnimatedText } from '@/components/animations/AnimatedText';

export default function SupplierOnboarding() {
  const [activeStep, setActiveStep] = useState(0);
  
  const onboardingSteps = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Register & Upload Documents",
      description: "Quick registration with automated document verification",
      features: ["GST Verification", "PAN/Aadhaar Check", "Company Registration", "Bank Details"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Audit & Verification",
      description: "Comprehensive quality audits by certified professionals",
      features: ["Factory Inspection", "Quality Certification", "Compliance Check", "Capacity Assessment"]
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Platform Onboarding",
      description: "Complete platform setup with dedicated support",
      features: ["Product Catalog", "Pricing Setup", "Training Session", "Account Manager"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Start Selling",
      description: "Access to thousands of verified buyers",
      features: ["RFQ Matching", "Order Management", "Payment Security", "Growth Analytics"]
    }
  ];

  const benefits = [
    { icon: <Users />, value: "10,000+", label: "Active Buyers" },
    { icon: <Globe />, value: "Pan-India", label: "Network Coverage" },
    { icon: <Clock />, value: "48 Hours", label: "Quick Onboarding" },
    { icon: <Award />, value: "100%", label: "Payment Guarantee" }
  ];

  const supplierCategories = [
    { name: "Corrugated Box Manufacturers", count: "2,500+", color: "from-blue-500 to-purple-500" },
    { name: "Flexible Packaging Suppliers", count: "1,800+", color: "from-green-500 to-teal-500" },
    { name: "Label & Tape Producers", count: "1,200+", color: "from-orange-500 to-red-500" },
    { name: "Protective Material Suppliers", count: "900+", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-sm font-semibold">Supplier Partnership Program</span>
          </motion.div>
          
          <AnimatedText 
            text="Become a Verified Supplier"
            className="text-5xl md:text-7xl font-bold mb-6"
            gradient={true}
          />
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join India's largest B2B packaging marketplace and unlock access to thousands of verified buyers
          </p>
        </motion.div>

        {/* Onboarding Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Simple 4-Step Onboarding Process
          </h3>
          
          <div className="relative">
            {/* Progress Bar */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-800 rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${(activeStep + 1) * 25}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {onboardingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer ${index <= activeStep ? 'opacity-100' : 'opacity-50'}`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        index <= activeStep 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                          : 'bg-gray-800'
                      }`}
                      animate={index === activeStep ? { 
                        boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.5)', '0 0 0 20px rgba(59, 130, 246, 0)'] 
                      } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {step.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-400 mb-4">{step.description}</p>
                    
                    <AnimatePresence mode="wait">
                      {index === activeStep && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-4 bg-white/5 rounded-xl"
                        >
                          {step.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300 mb-2">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                              {feature}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ParallaxTilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {benefit.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{benefit.label}</div>
                </div>
              </ParallaxTilt>
            </motion.div>
          ))}
        </div>

        {/* Supplier Categories */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
            Join Leading Suppliers Across Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplierCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`relative h-full p-6 rounded-2xl bg-gradient-to-br ${category.color} overflow-hidden group`}>
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10">
                    <Package className="w-10 h-10 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">{category.name}</h4>
                    <div className="text-3xl font-bold mb-4">{category.count}</div>
                    <div className="flex items-center text-sm">
                      <span>Active Suppliers</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-xl inline-flex items-center"
          >
            <span>Register as Supplier</span>
            <ArrowRight className="w-6 h-6 ml-3" />
          </motion.button>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              Free Registration
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-400" />
              100% Verified Platform
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-purple-400" />
              48-Hour Approval
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

