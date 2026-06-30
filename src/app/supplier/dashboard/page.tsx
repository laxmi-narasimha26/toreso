import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Activity, ShoppingCart, DollarSign, Package, TrendingUp,
    ArrowUpRight, Clock, FileText, CheckCircle2,
    Users, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function SupplierDashboard() {
    const { userId } = await auth();

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Supplier Dashboard</h1>
                    <p className="text-muted-foreground mt-1">Welcome back, Acme Packaging Co. Here's what's happening today.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="text-slate-600">
                        Download Report
                    </Button>
                    <Link href="/supplier/products/create">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-sm font-semibold">
                            <Package className="w-4 h-4 mr-2" /> Add New Product
                        </Button>
                    </Link>
                </div>
            </div>

            {/* ── Floating Metrics — No borders, pure typography ── */}
            <div className="mb-10 py-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/80 to-transparent pointer-events-none" />

                <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-y-8">
                    {/* Vertical gradient separators */}
                    <div className="hidden lg:block absolute left-1/4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                    <div className="hidden lg:block absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                    <div className="hidden lg:block absolute left-3/4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                    <div className="block lg:hidden absolute left-[10%] right-[10%] top-1/2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    {/* Revenue */}
                    <div className="text-center px-4">
                        <p className="text-[40px] sm:text-[48px] lg:text-[56px] font-display font-bold leading-none tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent">
                            ₹8.4M
                        </p>
                        <p className="text-xs font-semibold text-orange-600 uppercase tracking-[0.15em] mt-2">Revenue (MTD)</p>
                        <div className="flex items-center justify-center gap-1 mt-1.5">
                            <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                            <span className="text-[11px] font-medium text-emerald-600">+15.2% vs last month</span>
                        </div>
                    </div>

                    {/* Pending Orders */}
                    <div className="text-center px-4">
                        <p className="text-[40px] sm:text-[48px] lg:text-[56px] font-display font-bold leading-none tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent">
                            24
                        </p>
                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mt-2">Pending Orders</p>
                        <div className="flex items-center justify-center gap-1.5 mt-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-[11px] font-medium text-amber-600">8 need action</span>
                        </div>
                    </div>

                    {/* Win Rate */}
                    <div className="text-center px-4">
                        <p className="text-[40px] sm:text-[48px] lg:text-[56px] font-display font-bold leading-none tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent">
                            32<span className="text-[24px] sm:text-[28px] lg:text-[32px]" style={{ WebkitTextFillColor: 'initial', color: '#10b981' }}>%</span>
                        </p>
                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-[0.15em] mt-2">Win Rate</p>
                        <div className="flex items-center justify-center gap-1 mt-1.5">
                            <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                            <span className="text-[11px] font-medium text-emerald-600">+4.1% vs last month</span>
                        </div>
                    </div>

                    {/* RFQ Matches */}
                    <div className="text-center px-4">
                        <p className="text-[40px] sm:text-[48px] lg:text-[56px] font-display font-bold leading-none tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent">
                            12
                        </p>
                        <p className="text-xs font-semibold text-purple-600 uppercase tracking-[0.15em] mt-2">New RFQ Matches</p>
                        <div className="flex items-center justify-center gap-1 mt-1.5">
                            <span className="text-[11px] font-medium text-purple-600">High match probability</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-7 mb-8">
                {/* Main Content Area */}
                <Card className="col-span-5 shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50 pb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-lg">Action Center</CardTitle>
                                <CardDescription>Tasks requiring your immediate attention</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">View All</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100">
                            {[
                                { type: 'order', title: 'New Order Received', desc: 'PO-2026-892 from Zenith Corp ($12,400)', time: '2 hours ago', icon: ShoppingCart, color: 'text-blue-600', bg: 'bg-blue-50' },
                                { type: 'rfq', title: 'RFQ Deadline Approaching', desc: 'RFQ-9021 for Custom Mailers closes in 4 hours', time: '4 hours ago', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
                                { type: 'message', title: 'New Message from Buyer', desc: 'TechPack Solutions is asking about MOQ for SKU-1092', time: 'Yesterday', icon: Users, color: 'text-amber-600', bg: 'bg-amber-50' },
                                { type: 'quote', title: 'Quote Accepted', desc: 'Your quote for RFQ-8890 was accepted. Awaiting PO.', time: 'Yesterday', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                                    <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center mr-4 shrink-0`}>
                                        <item.icon className={`w-5 h-5 ${item.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                    <div className="text-right ml-4">
                                        <p className="text-xs text-slate-400 whitespace-nowrap">{item.time}</p>
                                        <Button size="sm" variant="outline" className="mt-2 h-7 text-xs border-slate-200 font-medium shadow-none">Review</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Right Sidebar Area */}
                <div className="col-span-2 space-y-6">
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                            <CardTitle className="text-base">Supplier Performance</CardTitle>
                        </CardHeader>
                        <CardContent className="p-5 space-y-5">
                            <div>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="font-medium text-slate-700">On-Time Delivery</span>
                                    <span className="font-bold text-slate-900">98%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '98%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="font-medium text-slate-700">Quality Defect Rate</span>
                                    <span className="font-bold text-slate-900">0.4%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '4%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="font-medium text-slate-700">Quote Response Time</span>
                                    <span className="font-bold text-slate-900">4.5 hrs</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0">
                        <CardContent className="p-6">
                            <Badge className="bg-orange-500 hover:bg-orange-600 border-none mb-4 tracking-wide shadow-none">FINANCE</Badge>
                            <h3 className="text-lg font-bold mb-2">Invoice Discounting</h3>
                            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                                You have <span className="text-white font-bold">₹2.4M</span> in approved invoices eligible for early payment.
                            </p>
                            <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold">
                                Get Paid Early
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
