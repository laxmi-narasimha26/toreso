import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShieldCheck, Activity, AlertCircle, TrendingUp, Package, ShoppingCart } from "lucide-react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminDashboard() {
    const { userId } = await auth();

    // Global stats
    const totalUsers = await db.user.count();
    const activeSuppliers = await db.organization.count({ where: { type: 'supplier', status: 'active' } });
    const pendingSuppliers = await db.organization.count({ where: { type: 'supplier', status: 'pending' } });
    const totalOrders = await db.order.count();

    // Fetch recent pending suppliers for the quick action list
    const recentPendingSuppliers = await db.organization.findMany({
        where: { type: 'supplier', status: 'pending' },
        orderBy: { created_at: 'desc' },
        take: 5
    });

    // Fetch recent orders
    const recentOrders = await db.order.findMany({
        orderBy: { created_at: 'desc' },
        include: { supplier: true, buyer: true },
        take: 5
    });

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Platform Overview</h1>
                    <p className="text-muted-foreground mt-1">Monitor key metrics, manage users, and verify suppliers.</p>
                </div>
            </div>

            {/* Top KPI Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card className="shadow-sm border-slate-200 hover:border-red-200 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Total Users</CardTitle>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                            <Users className="h-4 w-4 text-slate-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{totalUsers}</div>
                        <p className="text-xs text-muted-foreground mt-1">Registered accounts</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200 hover:border-red-200 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Active Suppliers</CardTitle>
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                            <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{activeSuppliers}</div>
                        <p className="text-xs text-muted-foreground mt-1">Verified partners</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-amber-200 bg-amber-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-amber-900">Pending Verifications</CardTitle>
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                            <AlertCircle className="h-4 w-4 text-amber-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-amber-900">{pendingSuppliers}</div>
                        <p className="text-xs text-amber-700 mt-1">Require admin review</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200 hover:border-red-200 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Total Orders</CardTitle>
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                            <ShoppingCart className="h-4 w-4 text-blue-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{totalOrders}</div>
                        <p className="text-xs text-muted-foreground mt-1">Platform-wide transactions</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Action Required: Supplier Verifications */}
                <Card className="shadow-sm border-slate-200 flex flex-col">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-lg flex items-center">
                                <ShieldCheck className="w-5 h-5 mr-2 text-red-500" /> Pending Verifications
                            </CardTitle>
                            <Link href="/admin/suppliers/verification">
                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">View All</Button>
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1">
                        <div className="divide-y divide-slate-100">
                            {recentPendingSuppliers.length === 0 ? (
                                <div className="p-8 text-center text-slate-500">
                                    <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                                    <p>No suppliers pending verification at this time.</p>
                                </div>
                            ) : (
                                recentPendingSuppliers.map((supplier) => (
                                    <div key={supplier.id} className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                                        <div>
                                            <h4 className="font-semibold text-slate-900">{supplier.display_name}</h4>
                                            <p className="text-xs text-slate-500">Applied: {new Date(supplier.created_at).toLocaleDateString()}</p>
                                        </div>
                                        <Link href={`/admin/suppliers/verification/${supplier.id}`}>
                                            <Button size="sm" variant="outline" className="border-slate-300">Review</Button>
                                        </Link>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Orders Overview */}
                <Card className="shadow-sm border-slate-200 flex flex-col">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-lg flex items-center">
                                <Activity className="w-5 h-5 mr-2 text-blue-500" /> Recent Network Activity
                            </CardTitle>
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">View All</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1">
                        <div className="divide-y divide-slate-100">
                            {recentOrders.length === 0 ? (
                                <div className="p-8 text-center text-slate-500">
                                    <Activity className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                                    <p>No recent orders on the network.</p>
                                </div>
                            ) : (
                                recentOrders.map((order) => (
                                    <div key={order.id} className="p-4 hover:bg-slate-50 transition-colors flex justify-between items-center">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 shadow-none border-0 uppercase text-[10px]">PO-{order.id.substring(0, 6)}</Badge>
                                                <span className="text-xs text-slate-500">{new Date(order.created_at).toLocaleDateString()}</span>
                                            </div>
                                            <p className="text-sm text-slate-900 font-medium">
                                                {order.buyer?.display_name || 'Buyer'} <span className="text-slate-400 font-normal mx-1">→</span> {order.supplier?.display_name || 'Supplier'}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-slate-900">₹{Number(order.total_amount).toLocaleString()}</p>
                                            <Badge className={
                                                order.status === 'pending' ? 'bg-amber-100 text-amber-700 shadow-none border-0 text-[10px]' :
                                                    order.status === 'processing' ? 'bg-blue-100 text-blue-700 shadow-none border-0 text-[10px]' :
                                                        'bg-emerald-100 text-emerald-700 shadow-none border-0 text-[10px]'
                                            }>
                                                {order.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
