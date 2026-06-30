import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Search, Filter, Mail, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function SupplierBuyersPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Buyers</h1>
                    <p className="text-muted-foreground mt-1">Manage your customer relationships and view buyer profiles.</p>
                </div>
            </div>

            <Card className="shadow-sm border-slate-200 mb-6">
                <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50">
                    <div className="flex gap-4 w-full max-w-md">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search buyer name or ID..." className="pl-9 bg-white" />
                        </div>
                        <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4].map(i => (
                    <Card key={i} className="shadow-sm border-slate-200 group hover:shadow-md transition-all">
                        <CardHeader className="pb-3 border-b border-slate-100 flex flex-row justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <CardTitle className="text-base group-hover:text-blue-600 transition-colors">Zenith Corp India {i}</CardTitle>
                                    <p className="text-xs text-slate-500 font-mono mt-0.5">BUYER-092{i}</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-amber-500">
                                <Star className="w-4 h-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="pt-4 space-y-4 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-500">Total Lifetime Spend</span>
                                <span className="font-bold text-slate-900">₹{(i * 1.2).toFixed(1)}M</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-500">Total Orders</span>
                                <span className="font-semibold text-slate-900">{i * 12}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-500">Account Status</span>
                                <Badge className="bg-emerald-100 text-emerald-700 shadow-none border-0 font-normal">Active</Badge>
                            </div>
                            <Button className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200 shadow-none">
                                View Profile & History
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
