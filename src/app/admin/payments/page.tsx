import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IndianRupee, ArrowUpRight, ArrowDownLeft, Download, CreditCard } from "lucide-react";

const transactions = [
    { id: "TRX-20260218-001", type: "platform_fee", desc: "Commission fee - PO-2026-0891", from: "Apex Packaging", amount: "+₹4,800", date: "Feb 18, 2026" },
    { id: "TRX-20260217-003", type: "payout", desc: "Supplier payout - INV-2026-112", to: "Apex Packaging", amount: "-₹4,75,200", date: "Feb 17, 2026" },
    { id: "TRX-20260215-001", type: "platform_fee", desc: "Commission fee - PO-2026-0880", from: "PolyCraft India", amount: "+₹1,100", date: "Feb 15, 2026" },
    { id: "TRX-20260215-002", type: "payout", desc: "Supplier payout - INV-2026-108", to: "PolyCraft India", amount: "-₹1,08,900", date: "Feb 15, 2026" },
];

export default function AdminPaymentsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Platform Finance</h1>
                    <p className="text-muted-foreground mt-1">Commission revenue, supplier payouts, and escrow balances.</p>
                </div>
                <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export Ledger</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-emerald-500">
                    <CardContent className="p-5"><p className="text-sm text-slate-500">Commission Revenue (Feb)</p><p className="text-2xl font-bold text-emerald-700">+₹5,900</p></CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-rose-500">
                    <CardContent className="p-5"><p className="text-sm text-slate-500">Supplier Payouts (Feb)</p><p className="text-2xl font-bold text-rose-700">-₹5.84L</p></CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-blue-500">
                    <CardContent className="p-5"><p className="text-sm text-slate-500">Escrow Balance</p><p className="text-2xl font-bold text-slate-900">₹2.2L</p></CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                    <h3 className="font-semibold text-slate-800 text-sm flex items-center"><CreditCard className="w-4 h-4 mr-2 text-slate-400" />Recent Transactions</h3>
                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500">
                            <TableRow>
                                <TableHead className="px-6 py-4">Transaction ID</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Party</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right px-6">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map(t => (
                                <TableRow key={t.id} className="hover:bg-slate-50/50">
                                    <TableCell className="px-6 font-mono text-xs text-slate-500">{t.id}</TableCell>
                                    <TableCell className="text-sm text-slate-700">{t.desc}</TableCell>
                                    <TableCell className="text-sm text-slate-500">{t.from || t.to}</TableCell>
                                    <TableCell className="text-sm text-slate-500">{t.date}</TableCell>
                                    <TableCell className="text-right px-6">
                                        <span className={`font-bold text-sm flex items-center justify-end ${t.amount.startsWith("+") ? "text-emerald-700" : "text-rose-700"}`}>
                                            {t.amount.startsWith("+") ? <ArrowUpRight className="w-3.5 h-3.5 mr-1" /> : <ArrowDownLeft className="w-3.5 h-3.5 mr-1" />}
                                            {t.amount}
                                        </span>
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
