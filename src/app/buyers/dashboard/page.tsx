"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Package, Bell, Search, Filter, Plus, Eye,
  BarChart3, TrendingUp, Users, ShoppingCart, Clock,
  FileText, CheckCircle, AlertTriangle, ArrowRight,
  Download, Settings, LogOut, Menu, X, Star,
  TrendingDown, Activity, Target, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

export default function BuyerDashboard() {
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const stats = [
    {
      title: 'Active RFQs',
      value: '12',
      change: '+3 this week',
      changeType: 'positive' as const,
      icon: FileText,
      trend: 'up',
      color: 'blue'
    },
    {
      title: 'Pending Orders',
      value: '8',
      change: '2 delivered today',
      changeType: 'positive' as const,
      icon: ShoppingCart,
      trend: 'down',
      color: 'green'
    },
    {
      title: 'Monthly Spend',
      value: '₹2.4L',
      change: '-15% vs last month',
      changeType: 'positive' as const,
      icon: TrendingUp,
      trend: 'down',
      color: 'purple'
    },
    {
      title: 'Active Suppliers',
      value: '24',
      change: '+2 new suppliers',
      changeType: 'positive' as const,
      icon: Users,
      trend: 'up',
      color: 'orange'
    },
    {
      title: 'Cost Savings',
      value: '₹85K',
      change: '22% vs target',
      changeType: 'positive' as const,
      icon: Target,
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Quality Score',
      value: '4.8/5',
      change: '+0.2 this month',
      changeType: 'positive' as const,
      icon: Star,
      trend: 'up',
      color: 'yellow'
    }
  ];

  const recentRFQs = [
    {
      id: 'RFQ-001',
      title: 'Corrugated Boxes - Food Grade',
      quantity: '10,000 units',
      responses: 5,
      status: 'active',
      deadline: '2024-01-20',
      category: 'Corrugated Packaging'
    },
    {
      id: 'RFQ-002',
      title: 'Flexible Pouches - Pharma',
      quantity: '50,000 units',
      responses: 8,
      status: 'closed',
      deadline: '2024-01-18',
      category: 'Flexible Packaging'
    },
    {
      id: 'RFQ-003',
      title: 'Labels - Product Branding',
      quantity: '25,000 pieces',
      responses: 3,
      status: 'draft',
      deadline: '2024-01-25',
      category: 'Labels & Printing'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      supplier: 'ABC Packaging Solutions',
      product: 'Corrugated Boxes',
      amount: '₹85,000',
      status: 'in_transit',
      expectedDelivery: '2024-01-19'
    },
    {
      id: 'ORD-002',
      supplier: 'FlexiPack Industries',
      product: 'Flexible Pouches',
      amount: '₹1,25,000',
      status: 'delivered',
      expectedDelivery: '2024-01-17'
    },
    {
      id: 'ORD-003',
      supplier: 'PrintPro Labels',
      product: 'Product Labels',
      amount: '₹45,000',
      status: 'processing',
      expectedDelivery: '2024-01-22'
    }
  ];

  const topSuppliers = [
    {
      name: 'ABC Packaging Solutions',
      category: 'Corrugated Packaging',
      rating: 4.8,
      orders: 12,
      onTime: '98%',
      location: 'Mumbai, MH'
    },
    {
      name: 'FlexiPack Industries',
      category: 'Flexible Packaging',
      rating: 4.9,
      orders: 8,
      onTime: '100%',
      location: 'Chennai, TN'
    },
    {
      name: 'PrintPro Labels',
      category: 'Labels & Printing',
      rating: 4.7,
      orders: 15,
      onTime: '96%',
      location: 'Delhi, DL'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { variant: 'default' as const, label: 'Active' },
      closed: { variant: 'secondary' as const, label: 'Closed' },
      draft: { variant: 'outline' as const, label: 'Draft' },
      in_transit: { variant: 'default' as const, label: 'In Transit' },
      delivered: { variant: 'secondary' as const, label: 'Delivered' },
      processing: { variant: 'outline' as const, label: 'Processing' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'rfqs', label: 'RFQs', icon: FileText },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'suppliers', label: 'Suppliers', icon: Users },
    { id: 'catalog', label: 'Catalog', icon: Package },
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
              <Badge variant="outline">Buyer Dashboard</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-400" />
                <Input placeholder="Search..." className="w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Notifications</span>
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Tech Innovations Pvt Ltd</h3>
                <p className="text-sm text-gray-600">Buyer Account</p>
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
                  <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                  <p className="text-gray-600">Welcome back! Here's what's happening with your procurement.</p>
                </div>
                <div className="flex space-x-3">
                  <Link href="/buyers/rfq">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      New RFQ
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
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span>Quick Actions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/buyers/rfq">
                      <Button className="w-full justify-start" variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        Create New RFQ
                      </Button>
                    </Link>
                    <Link href="/buyers/orders">
                      <Button className="w-full justify-start" variant="outline">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Track Orders
                      </Button>
                    </Link>
                    <Link href="/buyers/suppliers">
                      <Button className="w-full justify-start" variant="outline">
                        <Users className="w-4 h-4 mr-2" />
                        Find Suppliers
                      </Button>
                    </Link>
                    <Link href="/buyers/analytics">
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
                      <Activity className="w-5 h-5 text-green-600" />
                      <span>Performance Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Cost Savings Goal</span>
                          <span className="text-sm text-gray-600">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">₹85K saved vs ₹100K target</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">On-Time Delivery</span>
                          <span className="text-sm text-gray-600">94%</span>
                        </div>
                        <Progress value={94} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">Above industry average</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Supplier Satisfaction</span>
                          <span className="text-sm text-gray-600">4.6/5</span>
                        </div>
                        <Progress value={92} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">Excellent rating</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Process Efficiency</span>
                          <span className="text-sm text-gray-600">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">Streamlined workflows</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent RFQs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Recent RFQs
                      <Link href="/buyers/rfq">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View All
                        </Button>
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentRFQs.map((rfq) => (
                        <div key={rfq.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium">{rfq.title}</div>
                            <div className="text-sm text-gray-600">{rfq.quantity} • {rfq.category}</div>
                            <div className="text-xs text-gray-500">
                              {rfq.responses} responses • Deadline: {rfq.deadline}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusBadge(rfq.status)}
                            <Button variant="outline" size="sm">
                              <ArrowRight className="w-4 h-4" />
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
                      <Link href="/buyers/orders">
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
                              {order.supplier} • {order.product}
                            </div>
                            <div className="text-xs text-gray-500">
                              {order.amount} • Expected: {order.expectedDelivery}
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

              {/* Top Suppliers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Top Suppliers</span>
                    </div>
                    <Link href="/buyers/suppliers">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View All
                      </Button>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topSuppliers.map((supplier, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{supplier.name}</div>
                          <div className="text-sm text-gray-600">{supplier.category} • {supplier.location}</div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="text-center">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              <span className="font-medium">{supplier.rating}</span>
                            </div>
                            <div className="text-xs text-gray-500">Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium">{supplier.orders}</div>
                            <div className="text-xs text-gray-500">Orders</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-green-600">{supplier.onTime}</div>
                            <div className="text-xs text-gray-500">On-time</div>
                          </div>
                          <Button variant="outline" size="sm">
                            Contact
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other tabs would have their content here */}
            <TabsContent value="rfqs">
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">RFQ Management</h3>
                <p className="text-gray-600 mb-6">Manage your requests for quotes and track responses</p>
                <Link href="/buyers/rfq">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New RFQ
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Order Management</h3>
                <p className="text-gray-600">Track and manage all your orders in one place</p>
              </div>
            </TabsContent>

            <TabsContent value="suppliers">
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Supplier Network</h3>
                <p className="text-gray-600">Discover and manage your supplier relationships</p>
              </div>
            </TabsContent>

            <TabsContent value="catalog">
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Product Catalog</h3>
                <p className="text-gray-600">Browse our comprehensive packaging materials catalog</p>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
                <p className="text-gray-600">Get insights into your procurement performance</p>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="text-center py-12">
                <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
                <p className="text-gray-600">Manage your account preferences and settings</p>
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

