import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Search, TrendingUp, CheckCircle2, Clock, XCircle, IndianRupee, Calendar, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const quotes = [
    { id: "QT-2026-091", rfqId: "RFQ-2026-045", buyer: "Zenith Corp India", product: "5-Ply Corrugated Boxes", value: "₹4,80,000", status: "won", submitted: "Feb 15, 2026", validUntil: "Feb 28, 2026" },
    { id: "QT-2026-088", rfqId: "RFQ-2026-038", buyer: "FoodFirst Pvt Ltd", product: "BOPP Bopp Bags 50kg", value: "₹1,10,000", status: "pending", submitted: "Feb 17, 2026", validUntil: "Mar 3, 2026" },
    { id: "QT-2026-085", rfqId: "RFQ-2026-030", buyer: "MediCare Packaging", product: "Blister Pack Trays", value: "₹2,20,000", status: "pending", submitted: "Feb 18, 2026", validUntil: "Mar 5, 2026" },
    { id: "QT-2026-079", rfqId: "RFQ-2026-021", buyer: "BuildRight Ltd", product: "PP Woven Bags", value: "₹75,000", status: "lost", submitted: "Feb 1, 2026", validUntil: "Feb 15, 2026" },
];

const statusConfig: Record<string, { label: string, class: string }> = {
    won: { label: "Won", class: "bg-emerald-100 text-emerald-700" },
    pending: { label: "Awaiting Decision", class: "bg-amber-100 text-amber-700" },
    lost: { label: "Lost", class: "bg-rose-100 text-rose-700" },
};

export default function SupplierQuotesPage() {
    const won = quotes.filter(q => q.status === "won").length;
    const pending = quotes.filter(q => q.status === "pending").length;

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Quotes Sent</h1>
                    <p className="text-muted-foreground mt-1">Track the status of all submitted quotations and negotiations.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center"><Clock className="w-5 h-5 text-amber-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Pending Decisions</p><p className="text-2xl font-bold text-slate-900">{pending}</p></div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Quotes Won</p><p className="text-2xl font-bold text-slate-900">{won}</p></div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-orange-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Win Rate (30d)</p><p className="text-2xl font-bold text-slate-900">62%</p></div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search quotes..." className="pl-9 bg-white" />
                </div>
            </div>

            <Tabs defaultValue="all">
                <TabsList className="bg-slate-100 p-1 mb-6">
                    <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">All</TabsTrigger>
                    <TabsTrigger value="pending" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Pending</TabsTrigger>
                    <TabsTrigger value="won" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Won</TabsTrigger>
                    <TabsTrigger value="lost" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Lost</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="divide-y divide-slate-100">
                            {quotes.map(q => (
                                <div key={q.id} className="p-5 hover:bg-slate-50/50 transition-colors flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
                                    <div>
                                        <div className="flex gap-2 mb-2">
                                            <Badge className="bg-slate-100 text-slate-600 border-0 shadow-none text-[10px] font-mono">{q.id}</Badge>
                                            <Badge className={`${statusConfig[q.status].class} border-0 shadow-none text-[10px] font-semibold`}>{statusConfig[q.status].label}</Badge>
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-0.5">{q.product}</h4>
                                        <p className="text-sm text-slate-500 flex items-center"><Building2 className="w-3.5 h-3.5 mr-1" />{q.buyer}</p>
                                    </div>
                                    <div className="flex items-center gap-6 shrink-0">
                                        <div className="text-right">
                                            <p className="font-bold text-slate-900 flex items-center justify-end"><IndianRupee className="w-3.5 h-3.5" />{q.value.replace('₹', '')}</p>
                                            <p className="text-xs text-slate-500 flex items-center justify-end"><Calendar className="w-3 h-3 mr-1" />Valid: {q.validUntil}</p>
                                        </div>
                                        <Link href={`/supplier/rfq`}>
                                            <Button variant="outline" size="sm" className="border-slate-300 text-xs h-8">
                                                View RFQ <ArrowRight className="w-3 h-3 ml-1" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
