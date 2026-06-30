import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, TrendingUp, PieChart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SupplierAnalyticsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Analytics & Insights</h1>
                    <p className="text-muted-foreground mt-1">Deep dive into your sales performance, market trends, and buyer behavior.</p>
                </div>
                <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export Data</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Total Revenue (YTD)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">₹84.2M</div>
                        <p className="text-xs text-emerald-600 mt-1 flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +15.2% vs last year</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="shadow-sm border-slate-200 min-h-[400px]">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                        <CardTitle className="text-lg flex items-center"><BarChart className="w-5 h-5 mr-2 text-blue-500" /> Revenue by Month</CardTitle>
                    </CardHeader>
                    <CardContent className="p-12 flex items-center justify-center text-slate-400">
                        <p>Chart data loading...</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 min-h-[400px]">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                        <CardTitle className="text-lg flex items-center"><PieChart className="w-5 h-5 mr-2 text-purple-500" /> Sales by Category</CardTitle>
                    </CardHeader>
                    <CardContent className="p-12 flex items-center justify-center text-slate-400">
                        <p>Chart data loading...</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
