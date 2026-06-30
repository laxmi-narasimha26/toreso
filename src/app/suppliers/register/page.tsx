"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Package, ArrowRight, Upload, Building, MapPin,
  Phone, Mail, Globe, FileText, Shield, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export default function SupplierRegistration() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gstNumber: '',
    panNumber: '',
    website: '',
    category: '',
    capacity: '',
    description: ''
  });

  const steps = [
    { id: 1, title: 'Company Details', description: 'Basic company information' },
    { id: 2, title: 'Business Info', description: 'GST, PAN and business details' },
    { id: 3, title: 'Capabilities', description: 'Products and manufacturing capacity' },
    { id: 4, title: 'Verification', description: 'Document upload and verification' }
  ];

  const categories = [
    'Corrugated Boxes & Cartons',
    'Flexible Packaging Materials',
    'Rigid Packaging Solutions',
    'Labels & Printing Materials',
    'Protective Packaging',
    'Industrial Packaging',
    'Food Grade Packaging',
    'Pharmaceutical Packaging'
  ];

  const benefits = [
    { icon: <Globe />, title: 'Pan-India Reach', desc: 'Access buyers across India' },
    { icon: <Shield />, title: 'Verified Platform', desc: '100% verified buyer network' },
    { icon: <Package />, title: 'Bulk Orders', desc: 'High-value order opportunities' },
    { icon: <CheckCircle />, title: 'Quick Payments', desc: 'Secure and timely payments' }
  ];

  // Form validation
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
        break;
      case 2:
        if (!formData.gstNumber.trim()) newErrors.gstNumber = 'GST number is required';
        if (!formData.panNumber.trim()) newErrors.panNumber = 'PAN number is required';
        if (!formData.description.trim()) newErrors.description = 'Company description is required';
        break;
      case 3:
        if (!formData.category) newErrors.category = 'Product category is required';
        if (!formData.capacity.trim()) newErrors.capacity = 'Production capacity is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the formData to your API
      console.log('Supplier registration submitted:', formData);

      toast({
        title: "Registration Successful!",
        description: "Your supplier registration has been submitted successfully. Our verification team will review your application within 48 hours.",
      });

      // Redirect to success page
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
              Join as a Verified Supplier
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with thousands of buyers across India and grow your packaging business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Sidebar - Benefits */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>Why Join Toreso?</span>
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
                    <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                    <div className="text-gray-600">Active Suppliers</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">₹500Cr+</div>
                    <div className="text-gray-600">Business Volume</div>
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
                      <CardTitle>Supplier Registration</CardTitle>
                      <p className="text-gray-600">Step {currentStep} of 4</p>
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
                              placeholder="Full name of contact person"
                              value={formData.contactPerson}
                              onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                              className={errors.contactPerson ? 'border-red-500' : ''}
                            />
                            {errors.contactPerson && <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>}
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

                    {/* Step 2: Business Information */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="gstNumber">GST Number *</Label>
                            <Input
                              id="gstNumber"
                              placeholder="22AAAAA0000A1Z5"
                              value={formData.gstNumber}
                              onChange={(e) => setFormData({...formData, gstNumber: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="panNumber">PAN Number *</Label>
                            <Input
                              id="panNumber"
                              placeholder="AAAAA0000A"
                              value={formData.panNumber}
                              onChange={(e) => setFormData({...formData, panNumber: e.target.value})}
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="website">Company Website</Label>
                          <Input
                            id="website"
                            placeholder="https://www.yourcompany.com"
                            value={formData.website}
                            onChange={(e) => setFormData({...formData, website: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="description">Company Description *</Label>
                          <textarea
                            id="description"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={4}
                            placeholder="Describe your company, years of experience, key strengths..."
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 3: Capabilities */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="category">Primary Product Category *</Label>
                          <select
                            id="category"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            value={formData.category}
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                          >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="capacity">Monthly Production Capacity *</Label>
                          <Input
                            id="capacity"
                            placeholder="e.g., 10,000 units per month"
                            value={formData.capacity}
                            onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                          />
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">Additional Information</h4>
                          <p className="text-blue-800 text-sm">
                            You can add more product categories and detailed capabilities after registration.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Verification */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div className="text-center mb-8">
                          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Complete!</h3>
                          <p className="text-gray-600">
                            Your registration has been submitted successfully. Our team will verify your details and activate your account within 24-48 hours.
                          </p>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-4">What happens next?</h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                              <div>
                                <p className="font-medium">Document Verification</p>
                                <p className="text-sm text-gray-600">We'll verify your GST, PAN, and company details</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                              <div>
                                <p className="font-medium">Quality Audit (Optional)</p>
                                <p className="text-sm text-gray-600">Schedule a quality audit for premium supplier status</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                              <div>
                                <p className="font-medium">Account Activation</p>
                                <p className="text-sm text-gray-600">Start receiving RFQs and connecting with buyers</p>
                              </div>
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
                    
                    {currentStep < 4 ? (
                      <Button onClick={handleNext}>
                        Next Step
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Link href="/suppliers/dashboard">
                        <Button>
                          Go to Dashboard
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
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

