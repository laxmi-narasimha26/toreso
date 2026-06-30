import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Search, Filter, MapPin, Clock, Building2, TrendingUp, Target, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export default async function SupplierRfqListPage() {
    const { userId } = await auth();

    let rfqs = [];
    try {
        rfqs = await db.rfq.findMany({
            where: { status: 'published' },
            orderBy: { created_at: 'desc' },
            include: {
                category: true,
                buyer: { select: { display_name: true, buyer_profile: true } },
                _count: { select: { quotes: true } }
            },
            take: 10
        });
    } catch (e) { console.error(e) }

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">RFQ Opportunities</h1>
                    <p className="text-muted-foreground mt-1">Discover buyer requests, submit quotes, and win new contracts.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-semibold text-slate-500 mb-2">New Matches</p>
                        <p className="text-3xl font-bold text-orange-600">12</p>
                        <p className="text-xs text-slate-500 mt-2 flex items-center"><Target className="w-4 h-4 mr-1" /> High probability</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-semibold text-slate-500 mb-2">Active Quotes</p>
                        <p className="text-3xl font-bold text-slate-900">8</p>
                        <p className="text-xs text-slate-500 mt-2 flex items-center"><Clock className="w-4 h-4 mr-1 text-amber-500" /> Under buyer review</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-semibold text-slate-500 mb-2">Won (YTD)</p>
                        <p className="text-3xl font-bold text-emerald-600">24</p>
                        <p className="text-xs text-slate-500 mt-2 flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> 32% Win Rate</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 bg-orange-50 border-orange-100">
                    <CardContent className="p-6">
                        <p className="text-sm font-semibold text-orange-800 mb-2">Potential Value</p>
                        <p className="text-3xl font-bold text-orange-900">₹4.2M</p>
                        <p className="text-xs text-orange-700 mt-2 flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> From active bids</p>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Tabs defaultValue="matches" className="w-full sm:w-auto">
                        <TabsList className="bg-slate-200/50">
                            <TabsTrigger value="matches" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Matches For You</TabsTrigger>
                            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">All Public RFQs</TabsTrigger>
                            <TabsTrigger value="submitted" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">My Quotes</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search RFQs or buyers..." className="pl-9 h-9 border-slate-300" />
                        </div>
                        <Button variant="outline" size="sm" className="h-9 border-slate-300">
                            <Filter className="h-4 w-4 mr-2" /> Filters
                        </Button>
                    </div>
                </div>

                <div className="p-0">
                    <div className="grid grid-cols-1 divide-y divide-slate-100">
                        {rfqs.length === 0 ? (
                            // Mock Data if empty
                            [1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="p-6 hover:bg-slate-50 transition-colors flex flex-col lg:flex-row gap-6">
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-medium border-0 tracking-wide text-[10px] uppercase">Corrugated Boxes</Badge>
                                            <Badge variant="outline" className="text-emerald-700 border-emerald-200 bg-emerald-50 text-[10px]">Verified Buyer</Badge>
                                            <span className="text-xs text-slate-400 font-mono ml-2">RFQ-902{i}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                                <Link href={`/supplier/rfq/mock-${i}`}>500,000 Custom Printed Mailer Boxes (Monthly)</Link>
                                            </h3>
                                            <div className="flex items-center mt-1.5 text-sm text-slate-600">
                                                <Building2 className="w-4 h-4 mr-1.5 text-slate-400" />
                                                <span className="font-medium text-slate-900 mr-4">Zenith Retail India</span>
                                                <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                                                <span>Delivery to Gurugram, HR</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                                            Looking for a reliable supplier to provide 500k units monthly of 3-ply corrugated mailer boxes. E-flute, 150 GSM Kraft top liner, 1-color black flexo print with our branding and handling instructions...
                                        </p>
                                    </div>
                                    <div className="lg:w-[280px] shrink-0 bg-slate-50/50 rounded-lg p-5 border border-slate-100 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Total Volume</span>
                                                <span className="font-bold text-slate-900">500,000 units</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Competition</span>
                                                <div className="flex -space-x-2">
                                                    <span className="inline-block w-6 h-6 rounded-full border-2 border-white bg-slate-200"></span>
                                                    <span className="inline-block w-6 h-6 rounded-full border-2 border-white bg-slate-300"></span>
                                                    <span className="inline-block w-6 h-6 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-[9px] font-bold text-orange-700">+{i}</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center bg-rose-50 text-rose-700 p-2 rounded -mx-2">
                                                <span className="text-xs uppercase tracking-wider font-semibold flex items-center"><Clock className="w-3 h-3 mr-1" /> Closes In</span>
                                                <span className="font-bold text-sm">{i} days</span>
                                            </div>
                                        </div>
                                        <Link href={`/supplier/rfq/mock-${i}`} className="mt-6 block">
                                            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-sm">Review & Quote</Button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            rfqs.map(rfq => (
                                // Real data mapping similar to mock above
                                <div key={rfq.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col lg:flex-row gap-6">
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-medium border-0 tracking-wide text-[10px] uppercase">{rfq.category?.name || 'Category'}</Badge>
                                            <span className="text-xs text-slate-400 font-mono ml-2">RFQ-{rfq.id.substring(0, 6)}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                                <Link href={`/supplier/rfq/${rfq.id}`}>{rfq.title}</Link>
                                            </h3>
                                            <div className="flex items-center mt-1.5 text-sm text-slate-600">
                                                <Building2 className="w-4 h-4 mr-1.5 text-slate-400" />
                                                <span className="font-medium text-slate-900 mr-4">{rfq.buyer?.display_name || 'Buyer'}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                                            {rfq.product_description}
                                        </p>
                                    </div>
                                    <div className="lg:w-[280px] shrink-0 bg-slate-50/50 rounded-lg p-5 border border-slate-100 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Total Volume</span>
                                                <span className="font-bold text-slate-900">{rfq.quantity.toLocaleString()} units</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Quotes Received</span>
                                                <span className="font-bold text-slate-900">{rfq._count.quotes}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-rose-600">
                                                <span className="text-xs uppercase tracking-wider font-semibold flex items-center"><Clock className="w-3 h-3 mr-1" /> Deadline</span>
                                                <span className="font-bold text-sm">{new Date(rfq.response_deadline).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        <Link href={`/supplier/rfq/${rfq.id}`} className="mt-6 block">
                                            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-sm">Review & Quote</Button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
