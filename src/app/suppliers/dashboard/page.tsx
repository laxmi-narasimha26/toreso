"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Package, Bell, Search, Filter, Plus, Eye,
  BarChart3, TrendingUp, Users, ShoppingCart, Clock,
  FileText, CheckCircle, AlertTriangle, ArrowRight,
  Download, Settings, LogOut, Menu, X, Star,
  DollarSign, Truck, Award, Calendar, Zap, Target,
  HandCoins, Activity, TrendingDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

export default function SupplierDashboard() {
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const stats = [
    {
      title: 'Active RFQs',
      value: '18',
      change: '+5 new today',
      changeType: 'positive' as const,
      icon: FileText,
      trend: 'up',
      color: 'blue'
    },
    {
      title: 'Pending Orders',
      value: '12',
      change: '3 to ship today',
      changeType: 'positive' as const,
      icon: ShoppingCart,
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Monthly Revenue',
      value: '₹8.4L',
      change: '+22% vs last month',
      changeType: 'positive' as const,
      icon: TrendingUp,
      trend: 'up',
      color: 'purple'
    },
    {
      title: 'Supplier Rating',
      value: '4.8',
      change: 'Top 5% suppliers',
      changeType: 'positive' as const,
      icon: Star,
      trend: 'up',
      color: 'yellow'
    },
    {
      title: 'Conversion Rate',
      value: '67%',
      change: '+8% this month',
      changeType: 'positive' as const,
      icon: Target,
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Available Credit',
      value: '₹5L',
      change: 'Ready for discounting',
      changeType: 'positive' as const,
      icon: HandCoins,
      trend: 'up',
      color: 'orange'
    }
  ];

  const newRFQs = [
    {
      id: 'RFQ-001',
      buyer: 'Tech Innovations Pvt Ltd',
      title: 'Corrugated Boxes - Food Grade',
      quantity: '10,000 units',
      budget: '₹2,00,000 - ₹3,00,000',
      deadline: '2024-01-22',
      category: 'Corrugated Packaging',
      location: 'Mumbai, MH'
    },
    {
      id: 'RFQ-002',
      buyer: 'Pharma Plus Ltd',
      title: 'Flexible Pouches - Pharma Grade',
      quantity: '50,000 units',
      budget: '₹8,00,000 - ₹12,00,000',
      deadline: '2024-01-25',
      category: 'Flexible Packaging',
      location: 'Pune, MH'
    },
    {
      id: 'RFQ-003',
      buyer: 'Food Corp India',
      title: 'Product Labels - Water Resistant',
      quantity: '25,000 pieces',
      budget: '₹1,50,000 - ₹2,50,000',
      deadline: '2024-01-28',
      category: 'Labels & Printing',
      location: 'Delhi, DL'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-125',
      buyer: 'ABC Manufacturing',
      product: 'Corrugated Boxes',
      quantity: '5,000 units',
      amount: '₹1,25,000',
      status: 'production',
      deadline: '2024-01-20'
    },
    {
      id: 'ORD-124',
      buyer: 'XYZ Foods',
      product: 'Flexible Pouches',
      quantity: '15,000 units',
      amount: '₹2,80,000',
      status: 'shipped',
      deadline: '2024-01-18'
    },
    {
      id: 'ORD-123',
      buyer: 'Global Pharma',
      product: 'Medicine Bottles',
      quantity: '8,000 units',
      amount: '₹95,000',
      status: 'delivered',
      deadline: '2024-01-15'
    }
  ];

  const performanceMetrics = [
    { label: 'Order Success Rate', value: '98%', trend: '+2%' },
    { label: 'On-time Delivery', value: '96%', trend: '+1%' },
    { label: 'Quality Score', value: '4.8/5', trend: '+0.2' },
    { label: 'Response Time', value: '2.3 hrs', trend: '-0.5hrs' }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      production: { variant: 'default' as const, label: 'In Production' },
      shipped: { variant: 'secondary' as const, label: 'Shipped' },
      delivered: { variant: 'outline' as const, label: 'Delivered' },
      pending: { variant: 'destructive' as const, label: 'Pending' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'rfqs', label: 'RFQs', icon: FileText },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'buyers', label: 'Buyers', icon: Users },
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                {sidebarOpen ? <X /> : <Menu />}
              </button>
              <Link href="/" className="flex items-center space-x-3">
                <Package className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">Toreso</span>
              </Link>
              <Badge variant="outline">Supplier Dashboard</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-400" />
                <Input placeholder="Search RFQs..." className="w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Notifications</span>
                <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1">5</span>
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Settings</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex flex-col h-full">
            <div className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">ABC Packaging Solutions</h3>
                <p className="text-sm text-gray-600">Verified Supplier</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">4.8 Rating</span>
                </div>
              </div>
            </div>
            
            <nav className="flex-1 px-3">
              <ul className="space-y-1">
                {sidebarItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                        activeTab === item.id
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="p-3 border-t">
              <button className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="overview" className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Supplier Dashboard</h1>
                  <p className="text-gray-600">Manage your business and track performance.</p>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Data
                  </Button>
                  <Link href="/suppliers/products">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Product
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        <div className={`p-2 rounded-lg ${
                          stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          stat.color === 'green' ? 'bg-green-100 text-green-600' :
                          stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          stat.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                          stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          <stat.icon className="h-4 w-4" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground">
                          <span className={`inline-flex items-center ${
                            stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                            {stat.change}
                          </span>
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions & Performance */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Quick Actions */}
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      <span>Quick Actions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/suppliers/rfqs">
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Browse RFQs
                      </Button>
                    </Link>
                    <Link href="/suppliers/products">
                      <Button className="w-full justify-start" variant="outline">
                        <Package className="w-4 h-4 mr-2" />
                        Manage Products
                      </Button>
                    </Link>
                    <Link href="/suppliers/finance">
                      <Button className="w-full justify-start" variant="outline">
                        <HandCoins className="w-4 h-4 mr-2" />
                        Apply for Financing
                      </Button>
                    </Link>
                    <Link href="/suppliers/analytics">
                      <Button className="w-full justify-start" variant="outline">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Analytics
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-blue-600" />
                      <span>Performance Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">RFQ Response Rate</span>
                          <span className="text-sm text-gray-600">89%</span>
                        </div>
                        <Progress value={89} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">Above average performance</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Order Fulfillment</span>
                          <span className="text-sm text-gray-600">96%</span>
                        </div>
                        <Progress value={96} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">Excellent delivery rate</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Customer Satisfaction</span>
                          <span className="text-sm text-gray-600">4.8/5</span>
                        </div>
                        <Progress value={96} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">Outstanding feedback</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Business Growth</span>
                          <span className="text-sm text-gray-600">22%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">Revenue increase</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* New RFQs & Recent Orders */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* New RFQs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      New RFQ Opportunities
                      <Link href="/suppliers/rfqs">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View All
                        </Button>
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {newRFQs.map((rfq) => (
                        <div key={rfq.id} className="p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="font-medium">{rfq.title}</div>
                              <div className="text-sm text-gray-600">{rfq.buyer} • {rfq.location}</div>
                            </div>
                            <Badge className="bg-green-100 text-green-800">New</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                            <div>Quantity: {rfq.quantity}</div>
                            <div>Budget: {rfq.budget}</div>
                            <div>Category: {rfq.category}</div>
                            <div>Deadline: {rfq.deadline}</div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1">
                              Submit Quote
                            </Button>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Recent Orders
                      <Link href="/suppliers/orders">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View All
                        </Button>
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium">{order.id}</div>
                            <div className="text-sm text-gray-600">
                              {order.buyer} • {order.product}
                            </div>
                            <div className="text-xs text-gray-500">
                              {order.quantity} • {order.amount} • Due: {order.deadline}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusBadge(order.status)}
                            <Button variant="outline" size="sm">
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Performance Metrics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                        <div className="text-xs text-green-600 font-medium">{metric.trend}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button className="p-6 h-auto flex-col">
                      <Package className="w-8 h-8 mb-2" />
                      <span>Add New Product</span>
                    </Button>
                    <Button variant="outline" className="p-6 h-auto flex-col">
                      <Truck className="w-8 h-8 mb-2" />
                      <span>Update Inventory</span>
                    </Button>
                    <Button variant="outline" className="p-6 h-auto flex-col">
                      <Calendar className="w-8 h-8 mb-2" />
                      <span>Schedule Audit</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other tabs */}
            <TabsContent value="rfqs">
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">RFQ Management</h3>
                <p className="text-gray-600 mb-6">Browse and respond to RFQ opportunities</p>
                <Button>
                  <Search className="w-4 h-4 mr-2" />
                  Browse RFQs
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Order Management</h3>
                <p className="text-gray-600">Track and fulfill your orders</p>
              </div>
            </TabsContent>

            <TabsContent value="products">
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Product Catalog</h3>
                <p className="text-gray-600 mb-6">Manage your product listings and inventory</p>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="buyers">
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Buyer Network</h3>
                <p className="text-gray-600">Connect and communicate with your buyers</p>
              </div>
            </TabsContent>

            <TabsContent value="finance">
              <div className="text-center py-12">
                <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
                <p className="text-gray-600 mb-6">Invoice discounting and payment management</p>
                <Button>
                  Apply for Financing
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Analytics</h3>
                <p className="text-gray-600">Insights into your business performance</p>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="text-center py-12">
                <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
                <p className="text-gray-600">Manage your supplier profile and preferences</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

