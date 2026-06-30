import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Receipt, FileText, CheckCircle2 } from "lucide-react";

export default function BuyerInvoicesPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Invoices & Payments</h1>
                    <p className="text-muted-foreground mt-1">Manage accounts payable, download GST invoices, and track payments.</p>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 hidden sm:flex">
                    <Download className="w-4 h-4 mr-2" /> Export All (YTD)
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-medium text-slate-500 mb-2">Total Outstanding</p>
                        <p className="text-3xl font-bold text-red-600">₹245,000</p>
                        <p className="text-sm text-slate-500 mt-2">Due within 15 days</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-medium text-slate-500 mb-2">Paid This Month</p>
                        <p className="text-3xl font-bold text-slate-900">₹850,500</p>
                        <p className="text-sm text-slate-500 mt-2">Across 12 invoices</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6 flex flex-col justify-center">
                        <Button variant="outline" className="w-full h-12 border-teal-200 text-teal-700 hover:bg-teal-50">
                            <Receipt className="w-5 h-5 mr-2" /> Request Pre-payment Discount
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card className="shadow-sm border-slate-200 overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                    <CardTitle className="text-lg">Recent Invoices</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="font-semibold text-slate-900">Invoice #</TableHead>
                                <TableHead className="font-semibold text-slate-900">Supplier</TableHead>
                                <TableHead className="font-semibold text-slate-900">Date</TableHead>
                                <TableHead className="font-semibold text-slate-900">Amount</TableHead>
                                <TableHead className="font-semibold text-slate-900">Status</TableHead>
                                <TableHead className="font-semibold text-slate-900 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <TableRow key={i} className="hover:bg-slate-50/50">
                                    <TableCell className="font-bold text-slate-900">INV-2026-00{i}</TableCell>
                                    <TableCell className="text-slate-600">Apex Packaging Ltd</TableCell>
                                    <TableCell className="text-slate-600">Oct {10 + i}, 2026</TableCell>
                                    <TableCell className="font-bold text-slate-900">₹45,{(i * 123).toString().padStart(3, '0')}</TableCell>
                                    <TableCell>
                                        {i < 3 ? (
                                            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Pending</Badge>
                                        ) : (
                                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Paid</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            {i < 3 && <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-xs h-8">Pay Now</Button>}
                                            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-blue-600">
                                                <Download className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
