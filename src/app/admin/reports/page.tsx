import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, ShoppingCart, Package, Download, Calendar } from "lucide-react";

const kpis = [
    { label: "GMV (Month)", value: "₹2.4Cr", change: "+23.1%", positive: true },
    { label: "New Users", value: "128", change: "+14.8%", positive: true },
    { label: "RFQ Volume", value: "247", change: "+8.2%", positive: true },
    { label: "Orders Placed", value: "1,847", change: "+19.5%", positive: true },
];

export default function AdminReportsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Platform Reports</h1>
                    <p className="text-muted-foreground mt-1">Comprehensive analytics on GMV, user growth, and marketplace activity.</p>
                </div>
                <div className="flex gap-3">
                    <select className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400">
                        <option>Last 30 Days</option>
                        <option>Last Quarter</option>
                        <option>Year to Date</option>
                    </select>
                    <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export PDF</Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4 mb-8">
                {kpis.map(kpi => (
                    <Card key={kpi.label} className="shadow-sm border-slate-200">
                        <CardContent className="p-5">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{kpi.label}</p>
                            <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
                            <p className={`text-xs mt-1 font-medium flex items-center ${kpi.positive ? "text-emerald-600" : "text-rose-600"}`}>
                                <TrendingUp className="w-3 h-3 mr-1" />{kpi.change}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {[
                    { title: "GMV Over Time", icon: BarChart3, color: "blue", desc: "Monthly transaction volume trending upward." },
                    { title: "User Acquisition by Role", icon: Users, color: "teal", desc: "New buyers and supplier registrations by week." },
                    { title: "Top 10 Product Categories", icon: Package, color: "purple", desc: "Revenue breakdown by packaging category." },
                    { title: "RFQ to Order Conversion", icon: ShoppingCart, color: "amber", desc: "Funnel analysis from RFQ creation to PO." },
                ].map(report => (
                    <Card key={report.title} className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-${report.color}-50 flex items-center justify-center shrink-0 border border-${report.color}-100`}>
                                <report.icon className={`w-6 h-6 text-${report.color}-600`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-1">{report.title}</h3>
                                <p className="text-sm text-slate-500 mb-4">{report.desc}</p>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full bg-${report.color}-500 rounded-full`} style={{ width: `${60 + Math.random() * 30}%` }} />
                                </div>
                                <p className="text-xs text-slate-400 mt-2">Data loading from live DB...</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
