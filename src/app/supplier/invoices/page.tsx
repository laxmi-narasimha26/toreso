import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function SupplierInvoicesPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Invoices & Payments</h1>
                    <p className="text-muted-foreground mt-1">Manage your billing, track payments, and generate invoices.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export</Button>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        <Plus className="w-4 h-4 mr-2" /> Create Invoice
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Unpaid Invoices</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">₹4.2M</div>
                        <p className="text-xs text-amber-600 mt-1">₹800k Overdue</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Paid (Last 30 Days)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-emerald-600">₹12.5M</div>
                        <p className="text-xs text-slate-500 mt-1">14 Invoices Settled</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 bg-slate-900 text-white">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-400">Available for Discounting</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">₹2.4M</div>
                        <p className="text-xs text-blue-400 mt-1 hover:underline cursor-pointer">Get Paid Early →</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="shadow-sm border-slate-200">
                <CardHeader className="border-b border-slate-100 bg-slate-50/50 pb-4">
                    <div className="flex gap-4 w-full max-w-md">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search invoice or PO number..." className="pl-9 bg-white" />
                        </div>
                        <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="px-6">Invoice #</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Buyer</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <TableRow key={i} className="hover:bg-slate-50">
                                    <TableCell className="px-6 font-medium text-blue-600 cursor-pointer hover:underline">INV-2026-{900 + i}</TableCell>
                                    <TableCell className="text-slate-500">Oct {10 + i}, 2026</TableCell>
                                    <TableCell>Zenith Corp India</TableCell>
                                    <TableCell className="font-bold text-slate-900">₹{(i * 1.5).toFixed(2)}L</TableCell>
                                    <TableCell>
                                        {i === 1 ? <Badge className="bg-amber-100 text-amber-700 shadow-none border-0">Overdue</Badge> :
                                            i < 4 ? <Badge className="bg-blue-100 text-blue-700 shadow-none border-0">Pending</Badge> :
                                                <Badge className="bg-emerald-100 text-emerald-700 shadow-none border-0">Paid</Badge>}
                                    </TableCell>
                                    <TableCell className="text-right px-6">
                                        <Button variant="ghost" size="sm" className="h-8">Download</Button>
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
