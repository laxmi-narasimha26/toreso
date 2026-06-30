import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IndianRupee, CheckCircle2, Clock, AlertCircle, BarChart, Download, ArrowUpRight } from "lucide-react";

const payments = [
    { id: "PAY-2026-045", invoice: "INV-2026-112", buyer: "Zenith Corp India", amount: "₹4,80,000", date: "Feb 18, 2026", mode: "NEFT", status: "received" },
    { id: "PAY-2026-044", invoice: "INV-2026-108", buyer: "FoodFirst Pvt Ltd", amount: "₹1,10,000", date: "Feb 15, 2026", mode: "UPI", status: "received" },
    { id: "PAY-2026-041", invoice: "INV-2026-101", buyer: "BuildRight Ltd", amount: "₹75,000", date: "Feb 23, 2026", mode: "—", status: "expected" },
    { id: "PAY-2026-038", invoice: "INV-2026-094", buyer: "MediCare Packaging", amount: "₹2,20,000", date: "Mar 5, 2026", mode: "—", status: "overdue" },
];

const statusConfig: Record<string, { label: string, class: string }> = {
    received: { label: "Received", class: "bg-emerald-100 text-emerald-700" },
    expected: { label: "Expected", class: "bg-blue-100 text-blue-700" },
    overdue: { label: "Overdue", class: "bg-rose-100 text-rose-700" },
};

export default function SupplierPaymentsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Payments Received</h1>
                    <p className="text-muted-foreground mt-1">Track all incoming payments, expected receipts, and overdue collections.</p>
                </div>
                <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export Statement</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-4 mb-8">
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-emerald-500">
                    <CardContent className="p-5">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Received (Feb)</p>
                        <p className="text-2xl font-bold text-slate-900">₹5.9L</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-blue-500">
                    <CardContent className="p-5">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Expected</p>
                        <p className="text-2xl font-bold text-slate-900">₹75K</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-rose-200 border-l-4 border-l-rose-500 bg-rose-50/20">
                    <CardContent className="p-5">
                        <p className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-1">Overdue</p>
                        <p className="text-2xl font-bold text-rose-700">₹2.2L</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-purple-500">
                    <CardContent className="p-5">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Avg. Collection Days</p>
                        <p className="text-2xl font-bold text-slate-900">18.4d</p>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50 text-xs uppercase text-slate-500">
                            <TableRow>
                                <TableHead className="px-6 py-4">Payment ID</TableHead>
                                <TableHead>Invoice</TableHead>
                                <TableHead>Buyer</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Mode</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right pr-6">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {payments.map(p => (
                                <TableRow key={p.id} className="hover:bg-slate-50/50">
                                    <TableCell className="px-6 font-mono text-xs text-slate-500">{p.id}</TableCell>
                                    <TableCell className="font-medium text-slate-800 text-sm">{p.invoice}</TableCell>
                                    <TableCell className="text-sm text-slate-700">{p.buyer}</TableCell>
                                    <TableCell className="font-bold text-slate-900">{p.amount}</TableCell>
                                    <TableCell className="text-sm text-slate-500">{p.date}</TableCell>
                                    <TableCell className="text-sm text-slate-500">{p.mode}</TableCell>
                                    <TableCell>
                                        <Badge className={`${statusConfig[p.status].class} border-0 shadow-none text-[10px] font-semibold`}>
                                            {statusConfig[p.status].label}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right pr-6">
                                        {p.status === "overdue" && (
                                            <Button size="sm" className="h-7 text-xs bg-rose-600 hover:bg-rose-700 text-white">Chase Up</Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
