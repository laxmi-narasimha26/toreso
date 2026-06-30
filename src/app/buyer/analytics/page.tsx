import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, DollarSign, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BuyerAnalyticsPage() {
    return (
        <div className="flex-col pb-12 overflow-x-hidden">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Procurement Analytics</h1>
                    <p className="text-muted-foreground mt-1">Insights into your spending, savings, and supplier performance.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="hidden sm:flex">Export Report</Button>
                    <select className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                        <option>Year to Date (2026)</option>
                        <option>Last 12 Months</option>
                        <option>Q3 2026</option>
                    </select>
                </div>
            </div>

            {/* Top KPIs */}
            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <DollarSign className="w-24 h-24" />
                    </div>
                    <CardContent className="p-6 relative z-10">
                        <p className="text-sm font-medium text-slate-500 mb-2">Total Managed Spend</p>
                        <p className="text-4xl font-bold text-slate-900">₹4.2M</p>
                        <p className="text-sm text-green-600 mt-2 font-medium flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1" /> +12% vs previous period
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-teal-500">
                    <CardContent className="p-6">
                        <p className="text-sm font-medium text-slate-500 mb-2">Realized Savings</p>
                        <p className="text-4xl font-bold text-teal-600">₹580K</p>
                        <p className="text-sm text-slate-500 mt-2">Driven by competitive RFQ bidding</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-medium text-slate-500 mb-2">Orders Processed</p>
                        <p className="text-4xl font-bold text-slate-900">248</p>
                        <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                            <div className="bg-blue-500 h-full" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">85% On-time delivery rate</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Spend by Category Mock Chart */}
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                        <CardTitle className="text-lg flex items-center"><PieChart className="w-5 h-5 mr-2 text-teal-600" /> Spend by Category</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 flex items-center justify-center min-h-[300px]">
                        <div className="w-[200px] h-[200px] rounded-full border-[30px] border-teal-500 border-r-blue-500 border-b-purple-500 border-l-amber-500 shadow-inner relative flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-[10px] text-slate-500 font-bold uppercase">Top Category</p>
                                <p className="text-sm font-bold text-slate-900 leading-tight">Corrugated</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Supplier Performance */}
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                        <CardTitle className="text-lg flex items-center"><BarChart3 className="w-5 h-5 mr-2 text-blue-600" /> Top Suppliers by Volume</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-6">
                            {[
                                { name: 'Apex Packaging', value: 65, amount: '₹1.2M' },
                                { name: 'Global Box Corp', value: 45, amount: '₹850K' },
                                { name: 'EcoPack Solutions', value: 30, amount: '₹420K' },
                                { name: 'PolyIndia Ltd', value: 15, amount: '₹210K' }
                            ].map((mock, i) => (
                                <div key={i}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-slate-900">{mock.name}</span>
                                        <span className="text-sm font-bold text-slate-600">{mock.amount}</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                                        <div className="bg-teal-500 h-full rounded-full" style={{ width: `${mock.value}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
