"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Package, ArrowRight, Building, MapPin,
  Phone, Mail, Users, ShoppingCart, CheckCircle, Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export default function BuyerRegistration() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gstNumber: '',
    industry: '',
    companySize: '',
    monthlyRequirement: '',
    currentSuppliers: '',
    painPoints: ''
  });

  const steps = [
    { id: 1, title: 'Company Details', description: 'Basic company information' },
    { id: 2, title: 'Business Profile', description: 'Industry and requirements' },
    { id: 3, title: 'Procurement Needs', description: 'Current challenges and goals' }
  ];

  const industries = [
    'Food & Beverage',
    'Pharmaceuticals & Healthcare',
    'Consumer Goods (FMCG)',
    'Electronics & Technology',
    'Automotive & Manufacturing',
    'E-commerce & Retail',
    'Textiles & Apparel',
    'Chemical & Industrial',
    'Agriculture & Agri-food',
    'Others'
  ];

  const companySizes = [
    'Startup (1-10 employees)',
    'Small (11-50 employees)', 
    'Medium (51-200 employees)',
    'Large (201-1000 employees)',
    'Enterprise (1000+ employees)'
  ];

  const benefits = [
    { icon: <Target />, title: 'Cost Savings', desc: 'Save up to 35% on packaging costs' },
    { icon: <CheckCircle />, title: 'Quality Assured', desc: 'All suppliers are pre-verified' },
    { icon: <ShoppingCart />, title: 'Easy Procurement', desc: 'Streamlined ordering process' },
    { icon: <Users />, title: 'Dedicated Support', desc: '24/7 procurement assistance' }
  ];

  // Form validation
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
        if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.gstNumber.trim()) newErrors.gstNumber = 'GST number is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
        break;
      case 2:
        if (!formData.industry) newErrors.industry = 'Industry is required';
        if (!formData.companySize) newErrors.companySize = 'Company size is required';
        if (!formData.monthlyRequirement.trim()) newErrors.monthlyRequirement = 'Monthly requirement is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the formData to your API
      console.log('Form submitted:', formData);

      toast({
        title: "Registration Successful!",
        description: "Your buyer registration has been submitted successfully. Our team will review and activate your account within 24 hours.",
      });

      // Redirect to success page or dashboard
      window.location.href = '/registration-success';
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Toreso</span>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Already registered?</span>
              <Link href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your Procurement Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of companies who have streamlined their packaging procurement with Toreso
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Sidebar - Benefits */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                    <span>Why Choose Toreso?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-blue-600 mt-1">{benefit.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                    <div className="text-gray-600">Active Buyers</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                    <div className="text-gray-600">Average Cost Savings</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <CardTitle>Buyer Registration</CardTitle>
                      <p className="text-gray-600">Step {currentStep} of 3</p>
                    </div>
                    <Badge variant="outline">
                      {steps[currentStep - 1]?.title}
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-center space-x-2 mb-8">
                    {steps.map((step, index) => (
                      <React.Fragment key={step.id}>
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          step.id <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {step.id < currentStep ? <CheckCircle className="w-4 h-4" /> : step.id}
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`flex-1 h-1 ${
                            step.id < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                          }`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 1: Company Details */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="companyName">Company Name *</Label>
                            <Input
                              id="companyName"
                              placeholder="Enter your company name"
                              value={formData.companyName}
                              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                              className={errors.companyName ? 'border-red-500' : ''}
                            />
                            {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                          </div>
                          <div>
                            <Label htmlFor="contactPerson">Contact Person *</Label>
                            <Input
                              id="contactPerson"
                              placeholder="Full name"
                              value={formData.contactPerson}
                              onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                              className={errors.contactPerson ? 'border-red-500' : ''}
                            />
                            {errors.contactPerson && <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>}
                          </div>
                          <div>
                            <Label htmlFor="designation">Designation *</Label>
                            <Input
                              id="designation"
                              placeholder="e.g., Procurement Manager"
                              value={formData.designation}
                              onChange={(e) => setFormData({...formData, designation: e.target.value})}
                              className={errors.designation ? 'border-red-500' : ''}
                            />
                            {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="company@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className={errors.email ? 'border-red-500' : ''}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className={errors.phone ? 'border-red-500' : ''}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                          </div>
                          <div>
                            <Label htmlFor="gstNumber">GST Number *</Label>
                            <Input
                              id="gstNumber"
                              placeholder="22AAAAA0000A1Z5"
                              value={formData.gstNumber}
                              onChange={(e) => setFormData({...formData, gstNumber: e.target.value})}
                              className={errors.gstNumber ? 'border-red-500' : ''}
                            />
                            {errors.gstNumber && <p className="text-red-500 text-sm mt-1">{errors.gstNumber}</p>}
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="address">Complete Address *</Label>
                          <Input
                            id="address"
                            placeholder="Street address, building number"
                            value={formData.address}
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              placeholder="City"
                              value={formData.city}
                              onChange={(e) => setFormData({...formData, city: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State *</Label>
                            <Input
                              id="state"
                              placeholder="State"
                              value={formData.state}
                              onChange={(e) => setFormData({...formData, state: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="pincode">Pincode *</Label>
                            <Input
                              id="pincode"
                              placeholder="123456"
                              value={formData.pincode}
                              onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Business Profile */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="industry">Industry *</Label>
                            <select
                              id="industry"
                              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                              value={formData.industry}
                              onChange={(e) => setFormData({...formData, industry: e.target.value})}
                            >
                              <option value="">Select your industry</option>
                              {industries.map((industry) => (
                                <option key={industry} value={industry}>{industry}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="companySize">Company Size *</Label>
                            <select
                              id="companySize"
                              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                              value={formData.companySize}
                              onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                            >
                              <option value="">Select company size</option>
                              {companySizes.map((size) => (
                                <option key={size} value={size}>{size}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="monthlyRequirement">Monthly Packaging Requirement *</Label>
                          <Input
                            id="monthlyRequirement"
                            placeholder="e.g., ₹5,00,000 per month or 10,000 units"
                            value={formData.monthlyRequirement}
                            onChange={(e) => setFormData({...formData, monthlyRequirement: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="currentSuppliers">Current Number of Suppliers</Label>
                          <Input
                            id="currentSuppliers"
                            placeholder="e.g., 3-5 suppliers"
                            value={formData.currentSuppliers}
                            onChange={(e) => setFormData({...formData, currentSuppliers: e.target.value})}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 3: Procurement Needs */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="painPoints">Current Procurement Challenges</Label>
                          <textarea
                            id="painPoints"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={4}
                            placeholder="Tell us about your current challenges in packaging procurement (e.g., high costs, quality issues, delivery delays, limited supplier options, etc.)"
                            value={formData.painPoints}
                            onChange={(e) => setFormData({...formData, painPoints: e.target.value})}
                          />
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-3">What you'll get after registration:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              <span className="text-blue-800 text-sm">Access to 5,000+ verified suppliers</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              <span className="text-blue-800 text-sm">Instant RFQ system with automated matching</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              <span className="text-blue-800 text-sm">Dedicated account manager</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              <span className="text-blue-800 text-sm">Real-time order tracking and analytics</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button 
                      variant="outline" 
                      onClick={handlePrevious}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    
                    {currentStep < 3 ? (
                      <Button onClick={handleNext}>
                        Next Step
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button onClick={handleSubmit}>
                        Complete Registration
                        <CheckCircle className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

