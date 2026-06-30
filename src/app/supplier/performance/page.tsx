import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trophy, TrendingUp, Target, BarChart, CheckCircle2 } from "lucide-react";

export default function SupplierPerformancePage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Performance & Ratings</h1>
                    <p className="text-muted-foreground mt-1">Track your quality metrics, delivery reliability, and buyer feedback.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                <Trophy className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="text-sm font-bold text-emerald-600">+2%</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-500">Overall Rating</p>
                        <p className="text-3xl font-bold text-slate-900">4.8<span className="text-sm text-slate-500">/5.0</span></p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-slate-500">On-Time Delivery (OTD)</p>
                        <p className="text-3xl font-bold text-slate-900">98.2%</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <Target className="w-5 h-5 text-purple-600" />
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-slate-500">Defect Rate (PPM)</p>
                        <p className="text-3xl font-bold text-slate-900">142</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-orange-600" />
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-slate-500">Quote Win Rate</p>
                        <p className="text-3xl font-bold text-slate-900">32%</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="shadow-sm border-slate-200">
                <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                    <CardTitle className="text-lg flex items-center"><BarChart className="w-5 h-5 mr-2 text-slate-500" /> Historical Trend Analysis</CardTitle>
                </CardHeader>
                <CardContent className="p-12 text-center text-slate-500">
                    <p>Charts and graphs comparing your performance against platform benchmarks will appear here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
