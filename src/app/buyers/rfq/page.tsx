"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Package, ArrowRight, Plus, Search, Filter,
  FileText, Clock, Users, CheckCircle, AlertCircle,
  Calendar, MapPin, DollarSign, Weight, Volume2,
  Target, Zap, Award, Star, Phone, Mail, Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

export default function RFQPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('create');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form state for creating RFQ
  const [rfqForm, setRfqForm] = useState({
    title: '',
    category: '',
    subcategory: '',
    description: '',
    quantity: '',
    unit: '',
    targetPrice: '',
    currency: 'INR',
    deliveryLocation: '',
    deliveryTimeline: '',
    urgency: 'standard',
    specifications: '',
    preferredCertifications: [] as string[],
    additionalRequirements: '',
    contactPreference: 'email'
  });

  // Mock data
  const rfqHistory = [
    {
      id: 'RFQ-001',
      title: 'Corrugated Boxes - Food Grade',
      category: 'Corrugated Packaging',
      status: 'active',
      responses: 8,
      createdDate: '2024-01-15',
      deadline: '2024-01-22',
      budget: '₹2,00,000 - ₹3,00,000'
    },
    {
      id: 'RFQ-002',
      title: 'Flexible Pouches - Pharma',
      category: 'Flexible Packaging',
      status: 'closed',
      responses: 12,
      createdDate: '2024-01-10',
      deadline: '2024-01-17',
      budget: '₹5,00,000 - ₹7,00,000'
    },
    {
      id: 'RFQ-003',
      title: 'Product Labels - Water Resistant',
      category: 'Labels & Printing',
      status: 'draft',
      responses: 0,
      createdDate: '2024-01-12',
      deadline: '2024-01-25',
      budget: '₹1,50,000 - ₹2,00,000'
    }
  ];

  const categories = [
    'Corrugated Boxes',
    'Flexible Packaging',
    'Rigid Packaging',
    'Labels & Tapes',
    'Protective Packaging',
    'Shipping Supplies'
  ];

  const subcategories = {
    'Corrugated Boxes': ['3-Ply Boxes', '5-Ply Boxes', 'Printed Boxes', 'White Boxes', 'Custom Boxes'],
    'Flexible Packaging': ['Stand-up Pouches', 'Plastic Films', 'Food Wraps', 'Vacuum Bags', 'Barrier Films'],
    'Rigid Packaging': ['Plastic Bottles', 'Glass Jars', 'Metal Containers', 'Rigid Boxes', 'Clamshells'],
    'Labels & Tapes': ['Product Labels', 'Security Tapes', 'Shipping Labels', 'Barcode Labels', 'Custom Stickers'],
    'Protective Packaging': ['Bubble Wrap', 'Foam Inserts', 'Air Pillows', 'Edge Protectors', 'Padding Materials'],
    'Shipping Supplies': ['Shipping Boxes', 'Mailer Bags', 'Poly Mailers', 'Padded Envelopes', 'Packing Slips']
  };

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'ISO 22000',
    'BRC Packaging',
    'FSSC 22000',
    'HACCP',
    'FDA Approved',
    'RoHS Compliant'
  ];

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!rfqForm.title.trim()) newErrors.title = 'RFQ title is required';
    if (!rfqForm.category) newErrors.category = 'Category is required';
    if (!rfqForm.subcategory) newErrors.subcategory = 'Subcategory is required';
    if (!rfqForm.description.trim()) newErrors.description = 'Description is required';
    if (!rfqForm.quantity.trim()) newErrors.quantity = 'Quantity is required';
    if (!rfqForm.targetPrice.trim()) newErrors.targetPrice = 'Target price is required';
    if (!rfqForm.deliveryLocation.trim()) newErrors.deliveryLocation = 'Delivery location is required';
    if (!rfqForm.deliveryTimeline.trim()) newErrors.deliveryTimeline = 'Delivery timeline is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitRFQ = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "RFQ Submitted Successfully!",
        description: "Your request has been posted and suppliers will start responding within minutes.",
      });

      // Reset form
      setRfqForm({
        title: '',
        category: '',
        subcategory: '',
        description: '',
        quantity: '',
        unit: '',
        targetPrice: '',
        currency: 'INR',
        deliveryLocation: '',
        deliveryTimeline: '',
        urgency: 'standard',
        specifications: '',
        preferredCertifications: [],
        additionalRequirements: '',
        contactPreference: 'email'
      });

      setActiveTab('history');
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your RFQ. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { variant: 'default' as const, label: 'Active', color: 'bg-green-100 text-green-800' },
      closed: { variant: 'secondary' as const, label: 'Closed', color: 'bg-gray-100 text-gray-800' },
      draft: { variant: 'outline' as const, label: 'Draft', color: 'bg-yellow-100 text-yellow-800' }
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.color}>{config.label}</Badge>;
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
              <Link href="/buyers/dashboard">
                <Button variant="outline">Dashboard</Button>
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
              Request for Quote (RFQ)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Post your packaging requirements and receive competitive quotes from verified suppliers within minutes
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="create">Create RFQ</TabsTrigger>
              <TabsTrigger value="history">My RFQs</TabsTrigger>
              <TabsTrigger value="responses">Supplier Responses</TabsTrigger>
            </TabsList>

            {/* Create RFQ Tab */}
            <TabsContent value="create" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <span>Create New RFQ</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Basic Information */}
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">RFQ Title *</Label>
                          <Input
                            id="title"
                            placeholder="e.g., Food Grade Corrugated Boxes for E-commerce"
                            value={rfqForm.title}
                            onChange={(e) => setRfqForm({...rfqForm, title: e.target.value})}
                            className={errors.title ? 'border-red-500' : ''}
                          />
                          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="category">Category *</Label>
                            <Select value={rfqForm.category} onValueChange={(value) => setRfqForm({...rfqForm, category: value, subcategory: ''})}>
                              <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map(cat => (
                                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                          </div>

                          <div>
                            <Label htmlFor="subcategory">Subcategory *</Label>
                            <Select
                              value={rfqForm.subcategory}
                              onValueChange={(value) => setRfqForm({...rfqForm, subcategory: value})}
                              disabled={!rfqForm.category}
                            >
                              <SelectTrigger className={errors.subcategory ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Select subcategory" />
                              </SelectTrigger>
                              <SelectContent>
                                {rfqForm.category && subcategories[rfqForm.category as keyof typeof subcategories]?.map(sub => (
                                  <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.subcategory && <p className="text-red-500 text-sm mt-1">{errors.subcategory}</p>}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="description">Detailed Description *</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your requirements, specifications, quality standards, and any special requirements..."
                            rows={4}
                            value={rfqForm.description}
                            onChange={(e) => setRfqForm({...rfqForm, description: e.target.value})}
                            className={errors.description ? 'border-red-500' : ''}
                          />
                          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                        </div>

                        {/* Quantity and Pricing */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="quantity">Quantity *</Label>
                            <Input
                              id="quantity"
                              placeholder="e.g., 10,000"
                              value={rfqForm.quantity}
                              onChange={(e) => setRfqForm({...rfqForm, quantity: e.target.value})}
                              className={errors.quantity ? 'border-red-500' : ''}
                            />
                            {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                          </div>

                          <div>
                            <Label htmlFor="unit">Unit</Label>
                            <Select value={rfqForm.unit} onValueChange={(value) => setRfqForm({...rfqForm, unit: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pieces">Pieces</SelectItem>
                                <SelectItem value="boxes">Boxes</SelectItem>
                                <SelectItem value="kg">Kilograms</SelectItem>
                                <SelectItem value="tons">Tons</SelectItem>
                                <SelectItem value="meters">Meters</SelectItem>
                                <SelectItem value="rolls">Rolls</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="targetPrice">Target Price Range *</Label>
                            <Input
                              id="targetPrice"
                              placeholder="e.g., ₹50,000 - ₹75,000"
                              value={rfqForm.targetPrice}
                              onChange={(e) => setRfqForm({...rfqForm, targetPrice: e.target.value})}
                              className={errors.targetPrice ? 'border-red-500' : ''}
                            />
                            {errors.targetPrice && <p className="text-red-500 text-sm mt-1">{errors.targetPrice}</p>}
                          </div>
                        </div>

                        {/* Delivery Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="deliveryLocation">Delivery Location *</Label>
                            <Input
                              id="deliveryLocation"
                              placeholder="City, State"
                              value={rfqForm.deliveryLocation}
                              onChange={(e) => setRfqForm({...rfqForm, deliveryLocation: e.target.value})}
                              className={errors.deliveryLocation ? 'border-red-500' : ''}
                            />
                            {errors.deliveryLocation && <p className="text-red-500 text-sm mt-1">{errors.deliveryLocation}</p>}
                          </div>

                          <div>
                            <Label htmlFor="deliveryTimeline">Required Delivery Timeline *</Label>
                            <Select value={rfqForm.deliveryTimeline} onValueChange={(value) => setRfqForm({...rfqForm, deliveryTimeline: value})}>
                              <SelectTrigger className={errors.deliveryTimeline ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="immediate">Immediate (ASAP)</SelectItem>
                                <SelectItem value="1-week">Within 1 week</SelectItem>
                                <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                                <SelectItem value="1-month">Within 1 month</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.deliveryTimeline && <p className="text-red-500 text-sm mt-1">{errors.deliveryTimeline}</p>}
                          </div>
                        </div>

                        {/* Certifications */}
                        <div>
                          <Label className="text-sm font-medium mb-3 block">Preferred Certifications</Label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {certifications.map(cert => (
                              <div key={cert} className="flex items-center space-x-2">
                                <Checkbox
                                  id={cert}
                                  checked={rfqForm.preferredCertifications.includes(cert)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      setRfqForm({...rfqForm, preferredCertifications: [...rfqForm.preferredCertifications, cert]});
                                    } else {
                                      setRfqForm({...rfqForm, preferredCertifications: rfqForm.preferredCertifications.filter(c => c !== cert)});
                                    }
                                  }}
                                />
                                <Label htmlFor={cert} className="text-sm">{cert}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Additional Requirements */}
                        <div>
                          <Label htmlFor="specifications">Technical Specifications</Label>
                          <Textarea
                            id="specifications"
                            placeholder="Any specific technical requirements, dimensions, materials, etc."
                            rows={3}
                            value={rfqForm.specifications}
                            onChange={(e) => setRfqForm({...rfqForm, specifications: e.target.value})}
                          />
                        </div>

                        <div>
                          <Label htmlFor="additionalRequirements">Additional Requirements</Label>
                          <Textarea
                            id="additionalRequirements"
                            placeholder="Any other special requirements or preferences..."
                            rows={3}
                            value={rfqForm.additionalRequirements}
                            onChange={(e) => setRfqForm({...rfqForm, additionalRequirements: e.target.value})}
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end pt-6 border-t">
                        <Button
                          onClick={handleSubmitRFQ}
                          disabled={isSubmitting}
                          className="px-8"
                        >
                          {isSubmitting ? 'Submitting...' : 'Post RFQ'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar - Tips and Stats */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="w-5 h-5 text-green-600" />
                        <span>RFQ Tips</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-medium">Be Specific</div>
                          <div className="text-gray-600">Detailed requirements get better responses</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-medium">Set Realistic Timeline</div>
                          <div className="text-gray-600">Allow sufficient time for quality responses</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-medium">Include Specifications</div>
                          <div className="text-gray-600">Technical details help suppliers provide accurate quotes</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <span>Platform Stats</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">5,000+</div>
                          <div className="text-sm text-gray-600">Verified Suppliers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">98%</div>
                          <div className="text-sm text-gray-600">Response Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600">24hrs</div>
                          <div className="text-sm text-gray-600">Avg Response Time</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* RFQ History Tab */}
            <TabsContent value="history" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>My RFQs</span>
                    </div>
                    <Button onClick={() => setActiveTab('create')}>
                      <Plus className="w-4 h-4 mr-2" />
                      Create New RFQ
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rfqHistory.map((rfq) => (
                      <div key={rfq.id} className="p-6 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-lg">{rfq.title}</h3>
                              {getStatusBadge(rfq.status)}
                            </div>
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                              <span>Category: {rfq.category}</span>
                              <span>Responses: {rfq.responses}</span>
                              <span>Budget: {rfq.budget}</span>
                              <span>Deadline: {rfq.deadline}</span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            {rfq.status === 'active' && (
                              <Button size="sm">
                                View Responses
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Supplier Responses Tab */}
            <TabsContent value="responses" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Supplier Responses</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Responses Yet</h3>
                    <p className="text-gray-600 mb-6">Supplier responses to your RFQs will appear here</p>
                    <Button onClick={() => setActiveTab('create')}>
                      <Plus className="w-4 h-4 mr-2" />
                      Create New RFQ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

