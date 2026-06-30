import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, ShoppingCart, IndianRupee, TrendingUp, MoreHorizontal } from "lucide-react";

export default async function AdminOrdersPage() {
    const { userId } = await auth();

    const orders = await db.order.findMany({
        orderBy: { created_at: "desc" },
        include: { buyer: true, supplier: true },
        take: 50,
    });

    const totalValue = orders.reduce((sum, o) => sum + Number(o.total_amount), 0);

    const statusConfig: Record<string, string> = {
        pending: "bg-amber-100 text-amber-700",
        processing: "bg-blue-100 text-blue-700",
        shipped: "bg-indigo-100 text-indigo-700",
        delivered: "bg-emerald-100 text-emerald-700",
        cancelled: "bg-rose-100 text-rose-700",
    };

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">All Orders</h1>
                    <p className="text-muted-foreground mt-1">Platform-wide order management and oversight.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center"><ShoppingCart className="w-5 h-5 text-blue-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Total Orders</p><p className="text-2xl font-bold text-slate-900">{orders.length}</p></div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center"><IndianRupee className="w-5 h-5 text-emerald-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Total GMV</p><p className="text-2xl font-bold text-slate-900">₹{(totalValue / 100000).toFixed(1)}L</p></div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-purple-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Avg. Order Value</p><p className="text-2xl font-bold text-slate-900">₹{orders.length > 0 ? Math.round(totalValue / orders.length).toLocaleString() : 0}</p></div>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex gap-3">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search orders..." className="pl-9 bg-white" />
                    </div>
                    <Button variant="outline" className="bg-white"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500">
                            <TableRow>
                                <TableHead className="px-6 py-4">Order ID</TableHead>
                                <TableHead>Buyer → Supplier</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-32 text-center text-slate-500">No orders found.</TableCell>
                                </TableRow>
                            ) : (
                                orders.map(o => (
                                    <TableRow key={o.id} className="hover:bg-slate-50/50">
                                        <TableCell className="px-6 font-mono text-xs text-slate-500 font-semibold">PO-{o.id.substring(0, 8).toUpperCase()}</TableCell>
                                        <TableCell>
                                            <p className="text-sm text-slate-900 font-medium">{o.buyer?.display_name || "—"}</p>
                                            <p className="text-xs text-slate-500">→ {o.supplier?.display_name || "—"}</p>
                                        </TableCell>
                                        <TableCell className="font-bold text-slate-900">₹{Number(o.total_amount).toLocaleString()}</TableCell>
                                        <TableCell className="text-sm text-slate-500">{new Date(o.created_at).toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <Badge className={`${statusConfig[o.status] || "bg-slate-100 text-slate-600"} border-0 shadow-none text-[10px] font-semibold capitalize`}>{o.status}</Badge>
                                        </TableCell>
                                        <TableCell className="text-right px-6">
                                            <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400"><MoreHorizontal className="w-4 h-4" /></Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
