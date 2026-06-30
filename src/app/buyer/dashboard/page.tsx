import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, Package, AlertCircle, Clock, Truck, TrendingDown, ArrowRight, Search, FileEdit, Building2, Bell, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function BuyerDashboard() {
    const name = "Buyer";

    const stats = {
        totalSpend: 2340000,
        openRfqs: 5,
        pendingOrders: 8,
        savings: 280800,
    };

    const recentOrders = [
        { id: "1", order_number: "ORD-2026-5912", supplier: "EcoPack Solutions", items: 6, total: 184200, status: "shipped" },
        { id: "2", order_number: "ORD-2026-5897", supplier: "Prime Polymers Pvt Ltd", items: 3, total: 92400, status: "confirmed" },
        { id: "3", order_number: "ORD-2026-5841", supplier: "Global Box Corp", items: 12, total: 451000, status: "delivered" },
        { id: "4", order_number: "ORD-2026-5790", supplier: "Apex Packaging Ltd", items: 4, total: 126800, status: "pending" },
    ];

    return (
        <div className="flex-col pb-12">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back, {name}</h2>
                    <p className="text-muted-foreground mt-1">Here&apos;s what&apos;s happening with your procurement today.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <Button variant="outline" size="icon" className="rounded-full relative">
                        <Bell className="h-5 w-5 text-slate-600" />
                        <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
                    </Button>
                </div>
            </div>

            {/* ── Floating Metrics — No borders, pure typography ── */}
            <div className="mb-10 py-8 relative">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/80 to-transparent pointer-events-none" />

                <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-y-8">
                    {/* Vertical gradient separators */}
                    <div className="hidden lg:block absolute left-1/4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                    <div className="hidden lg:block absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                    <div className="hidden lg:block absolute left-3/4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                    {/* Mobile: horizontal separator between rows */}
                    <div className="block lg:hidden absolute left-[10%] right-[10%] top-1/2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    {/* Total Spend */}
                    <div className="text-center px-4 relative group">
                        <p className="text-[40px] sm:text-[48px] lg:text-[56px] font-display font-bold leading-none tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent">
                            ₹23.4L
                        </p>
                        <p className="text-xs font-semibold text-teal-600 uppercase tracking-[0.15em] mt-2">Total Spend (YTD)</p>
                        <div className="flex items-center justify-center gap-1 mt-1.5">
                            <TrendingDown className="w-3 h-3 text-red-500" />
                            <span className="text-[11px] font-medium text-red-500">-4% vs last year</span>
                        </div>
                    </div>

                    {/* Cost Savings */}
                    <div className="text-center px-4 relative group">
                        <p className="text-[40px] sm:text-[48px] lg:text-[56px] font-display font-bold leading-none tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent">
                            ₹2.8L
                        </p>
                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-[0.15em] mt-2">Cost Savings</p>
                        <div className="flex items-center justify-center gap-1 mt-1.5">
                            <span className="text-[11px] font-medium text-emerald-600">12.4% avg per RFQ</span>
                        </div>
                    </div>

                    {/* Active Orders */}
                    <div className="text-center px-4 relative group">
                        <p className="text-[40px] sm:text-[48px] lg:text-[56px] font-display font-bold leading-none tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent">
                            {stats.pendingOrders}
                        </p>
                        <p className="text-xs font-semibold text-amber-600 uppercase tracking-[0.15em] mt-2">Active Orders</p>
                        <div className="flex items-center justify-center gap-1.5 mt-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-[11px] font-medium text-amber-600">3 arriving this week</span>
                        </div>
                    </div>

                    {/* Open RFQs */}
                    <div className="text-center px-4 relative group">
                        <p className="text-[40px] sm:text-[48px] lg:text-[56px] font-display font-bold leading-none tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent">
                            {stats.openRfqs}
                        </p>
                        <p className="text-xs font-semibold text-purple-600 uppercase tracking-[0.15em] mt-2">Open RFQs</p>
                        <div className="flex items-center justify-center gap-1 mt-1.5">
                            <span className="text-[11px] font-medium text-purple-600">12 quotes pending</span>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative line */}
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </div>

            {/* Quick Actions & Pending Actions */}
            <div className="grid gap-6 md:grid-cols-12 mb-8">
                {/* Quick Actions */}
                <Card className="col-span-12 md:col-span-4 shadow-sm">
                    <CardHeader className="pb-3 border-b border-slate-100">
                        <CardTitle className="text-lg">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-3">
                        <Link href="/buyer/rfq/create" className="flex items-center p-3 rounded-lg border border-slate-200 hover:border-teal-500 hover:bg-teal-50 transition-colors group">
                            <div className="bg-teal-100 p-2 rounded-md mr-4 group-hover:bg-teal-500 transition-colors">
                                <FileEdit className="h-5 w-5 text-teal-600 group-hover:text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-semibold text-slate-900">Create New RFQ</h4>
                                <p className="text-xs text-slate-500">Source custom packaging</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-teal-600" />
                        </Link>

                        <Link href="/buyer/catalog" className="flex items-center p-3 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                            <div className="bg-blue-100 p-2 rounded-md mr-4 group-hover:bg-blue-500 transition-colors">
                                <Search className="h-5 w-5 text-blue-600 group-hover:text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-semibold text-slate-900">Browse Catalog</h4>
                                <p className="text-xs text-slate-500">Find ready-to-ship items</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                        </Link>

                        <Link href="/buyer/suppliers" className="flex items-center p-3 rounded-lg border border-slate-200 hover:border-purple-500 hover:bg-purple-50 transition-colors group">
                            <div className="bg-purple-100 p-2 rounded-md mr-4 group-hover:bg-purple-500 transition-colors">
                                <Building2 className="h-5 w-5 text-purple-600 group-hover:text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-semibold text-slate-900">Find Suppliers</h4>
                                <p className="text-xs text-slate-500">Discover verified partners</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600" />
                        </Link>
                    </CardContent>
                </Card>

                {/* Pending Actions / Alerts */}
                <Card className="col-span-12 md:col-span-8 shadow-sm">
                    <CardHeader className="pb-3 border-b border-slate-100 flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Pending Actions & Alerts</CardTitle>
                        <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">3 Items Need Attention</Badge>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <div className="divide-y divide-slate-100">
                            <div className="py-4 flex items-start gap-4">
                                <div className="mt-1 bg-blue-100 p-1.5 rounded-full">
                                    <MessageSquare className="w-4 h-4 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-semibold text-slate-900">New Quotes Received</h4>
                                        <span className="text-xs text-slate-500">2 hours ago</span>
                                    </div>
                                    <p className="text-sm text-slate-600 mt-1">You received 3 new quotes for <span className="font-medium text-slate-900">RFQ-2026-1002 (Corrugated Boxes)</span>.</p>
                                    <Button variant="link" className="p-0 h-auto text-blue-600 text-sm mt-2">Review Quotes</Button>
                                </div>
                            </div>

                            <div className="py-4 flex items-start gap-4">
                                <div className="mt-1 bg-amber-100 p-1.5 rounded-full">
                                    <AlertCircle className="w-4 h-4 text-amber-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-semibold text-slate-900">Supplier Certification Expiring</h4>
                                        <span className="text-xs text-slate-500">Yesterday</span>
                                    </div>
                                    <p className="text-sm text-slate-600 mt-1">ISO 9001 certification for <span className="font-medium text-slate-900">Apex Packaging Ltd</span> expires in 14 days.</p>
                                    <Button variant="link" className="p-0 h-auto text-amber-600 text-sm mt-2">View Supplier Profile</Button>
                                </div>
                            </div>

                            <div className="py-4 flex items-start gap-4">
                                <div className="mt-1 bg-teal-100 p-1.5 rounded-full">
                                    <Truck className="w-4 h-4 text-teal-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-semibold text-slate-900">Action Required: Confirm Delivery</h4>
                                        <span className="text-xs text-slate-500">Oct 24</span>
                                    </div>
                                    <p className="text-sm text-slate-600 mt-1">Order <span className="font-medium text-slate-900">ORD-2026-5591</span> has been marked as delivered by the supplier. Please confirm receipt.</p>
                                    <Button variant="link" className="p-0 h-auto text-teal-600 text-sm mt-2">Confirm Receipt</Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recommended & Recent */}
            <div className="grid gap-6 md:grid-cols-12">
                {/* Recent Orders */}
                <Card className="col-span-12 md:col-span-7 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-slate-100">
                        <CardTitle className="text-lg">Recent Orders</CardTitle>
                        <Link href="/buyer/orders">
                            <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">View All</Button>
                        </Link>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <div className="space-y-4">
                            {recentOrders.map(order => (
                                <div key={order.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-slate-100 p-3 rounded-md hidden sm:block">
                                            <Package className="w-5 h-5 text-slate-500" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-slate-900">{order.order_number}</p>
                                            <p className="text-xs text-slate-500 line-clamp-1">{order.supplier} • {order.items} items</p>
                                        </div>
                                    </div>
                                    <div className="text-right flex flex-col items-end gap-1">
                                        <p className="font-bold text-sm text-slate-900">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(order.total)}
                                        </p>
                                        <Badge variant="outline" className={
                                            order.status === 'delivered' ? 'bg-green-50 text-green-700 border-green-200' :
                                                order.status === 'shipped' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                                    order.status === 'confirmed' ? 'bg-teal-50 text-teal-700 border-teal-200' :
                                                        'bg-slate-100 text-slate-700 border-slate-200'
                                        }>
                                            {order.status}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Favorite Suppliers */}
                <Card className="col-span-12 md:col-span-5 shadow-sm">
                    <CardHeader className="pb-3 border-b border-slate-100">
                        <CardTitle className="text-lg">Favorite Suppliers</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <div className="space-y-4">
                            {[
                                { name: "EcoPack Solutions", rating: 4.8, category: "Sustainable Packaging", id: 1 },
                                { name: "Global Box Corp", rating: 4.5, category: "Corrugated Boxes", id: 2 },
                                { name: "Prime Polymers", rating: 4.9, category: "Flexible Packaging", id: 3 },
                            ].map(supplier => (
                                <div key={supplier.id} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex flex-shrink-0 items-center justify-center text-slate-600 font-bold border border-slate-200">
                                            {supplier.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 transition-colors cursor-pointer">{supplier.name}</h4>
                                            <div className="flex items-center text-xs text-slate-500 gap-2">
                                                <span className="flex items-center"><StarIcon className="w-3 h-3 text-amber-500 mr-0.5 fill-amber-500" /> {supplier.rating}</span>
                                                <span>•</span>
                                                <span>{supplier.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Separator className="my-2" />

                            <Link href="/buyer/suppliers">
                                <Button variant="link" className="w-full text-teal-600">Browse All Suppliers</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function StarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
