import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Landmark, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function SupplierFinancePage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Financial Services</h1>
                    <p className="text-muted-foreground mt-1">Access working capital, supply chain financing, and invoice discounting.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                <Card className="shadow-sm border-blue-200 bg-blue-50">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-blue-900 flex items-center"><Landmark className="w-5 h-5 mr-2" /> Invoice Discounting</CardTitle>
                        <CardDescription className="text-blue-700">Get paid early on approved invoices.</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <div className="text-3xl font-bold text-blue-900">₹2.4M</div>
                        <p className="text-sm text-blue-800 mt-1 mb-6">Available against 3 invoices</p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Apply for Early Payment</Button>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-slate-900 flex items-center"><Wallet className="w-5 h-5 mr-2 text-indigo-500" /> Working Capital Loan</CardTitle>
                        <CardDescription>Unsecured credit line for PO fulfillment.</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <p className="text-sm font-semibold text-slate-500">Pre-approved Limit</p>
                                <div className="text-2xl font-bold text-slate-900">₹10.0M</div>
                            </div>
                            <Badge className="bg-slate-100 text-slate-700 shadow-none border-0">Up to 90 Days</Badge>
                        </div>
                        <Button variant="outline" className="w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50">View Offer Details</Button>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-amber-200 bg-amber-50">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-amber-900 flex items-center"><AlertCircle className="w-5 h-5 mr-2" /> KYC Status</CardTitle>
                        <CardDescription className="text-amber-800">Required for financial services.</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <div className="space-y-3 mb-6 relative z-10">
                            <div className="flex items-center text-sm text-amber-900">
                                <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" /> Business PAN
                            </div>
                            <div className="flex items-center text-sm text-amber-900">
                                <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" /> GST Registration
                            </div>
                            <div className="flex items-center text-sm text-amber-900 font-medium">
                                <AlertCircle className="w-4 h-4 mr-2 text-amber-600" /> Last 6mo Bank Statements (Pending)
                            </div>
                        </div>
                        <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white relative z-10">Upload Documents</Button>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-4 mt-12">Recent Financing Activity</h2>
            <Card className="shadow-sm border-slate-200">
                <CardContent className="p-8 text-center text-slate-500">
                    <p>No recent financing activity.</p>
                </CardContent>
            </Card>
        </div>
    );
}
