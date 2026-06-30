import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, FileCheck, Calendar } from "lucide-react";

export default function SupplierAuditsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Compliance & Audits</h1>
                    <p className="text-muted-foreground mt-1">Manage certifications, ESG reports, and factory audit results.</p>
                </div>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Upload Certificate
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card className="shadow-sm border-emerald-200 bg-emerald-50">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-emerald-900 flex items-center"><ShieldCheck className="w-5 h-5 mr-2" /> Overall Compliance Status</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <div className="text-2xl font-bold text-emerald-800 mb-1">Tier 1 Verified</div>
                        <p className="text-sm text-emerald-700">Your profile meets the highest compliance standards on Toreso.</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-slate-900 flex items-center"><FileCheck className="w-5 h-5 mr-2" /> Upcoming Renewals</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100 mb-2">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 text-amber-500 mr-2" />
                                <span className="font-semibold text-slate-900 text-sm">ISO 9001:2015</span>
                            </div>
                            <span className="text-xs font-bold text-amber-600">Expires in 45 Days</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-4">Active Certifications</h2>
            <div className="grid gap-4 md:grid-cols-3">
                {['ISO 14001', 'FSC Chain of Custody', 'BRCGS Packaging'].map(cert => (
                    <Card key={cert} className="shadow-sm border-slate-200">
                        <CardContent className="p-5 flex justify-between items-center">
                            <span className="font-semibold text-slate-900">{cert}</span>
                            <Badge className="bg-emerald-100 text-emerald-700 border-0 shadow-none">Active</Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
