import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ShoppingCart, Truck, CheckCircle2, AlertCircle, TrendingUp, Calendar, MapPin, Building2, MoreHorizontal, Eye } from "lucide-react";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function SupplierOrdersPage() {
    const { userId } = await auth();

    let orders = [];
    try {
        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: { include: { organization: true } } }
        });
        const org = user?.team_memberships.find(m => m.organization.type === 'supplier')?.organization;

        if (org) {
            orders = await db.order.findMany({
                where: { supplier_id: org.id },
                orderBy: { created_at: 'desc' },
                include: {
                    buyer: { select: { display_name: true } }
                }
            });
        }
    } catch (e) { console.error(e) }

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Incoming Orders</h1>
                    <p className="text-muted-foreground mt-1">Manage purchase orders, update fulfillment status, and track shipments.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="text-slate-600">
                        Export CSV
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-semibold text-slate-500 mb-2">Pending Fulfillment</p>
                        <p className="text-3xl font-bold text-slate-900">24</p>
                        <p className="text-xs text-amber-600 mt-2 flex items-center font-medium"><AlertCircle className="w-4 h-4 mr-1" /> 8 require immediate action</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-semibold text-slate-500 mb-2">In Transit</p>
                        <p className="text-3xl font-bold text-slate-900">12</p>
                        <p className="text-xs text-blue-600 mt-2 flex items-center font-medium"><Truck className="w-4 h-4 mr-1" /> 3 out for delivery</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-semibold text-slate-500 mb-2">Completed (MTD)</p>
                        <p className="text-3xl font-bold text-emerald-600">89</p>
                        <p className="text-xs text-slate-500 mt-2 flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> 98% On-time delivery rate</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 bg-slate-900 text-white border-slate-800">
                    <CardContent className="p-6">
                        <p className="text-sm font-semibold text-slate-400 mb-2">Revenue (Pending)</p>
                        <p className="text-3xl font-bold text-white">₹1.4M</p>
                        <p className="text-xs text-emerald-400 mt-2 flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> Secure upon delivery</p>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Tabs defaultValue="active" className="w-full sm:w-auto">
                        <TabsList className="bg-slate-200/50">
                            <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Active Orders</TabsTrigger>
                            <TabsTrigger value="pending" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">New (Pending)</TabsTrigger>
                            <TabsTrigger value="completed" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Completed</TabsTrigger>
                            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">All</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search PO number or buyer..." className="pl-9 h-9 border-slate-300" />
                        </div>
                        <Button variant="outline" size="sm" className="h-9 border-slate-300">
                            <Filter className="h-4 w-4 mr-2" /> Filter
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                            <TableRow>
                                <TableHead className="px-6 py-4">Order ID & Date</TableHead>
                                <TableHead>Buyer</TableHead>
                                <TableHead>Value</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Expected Delivery</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.length === 0 ? (
                                // Mock data if empty
                                [1, 2, 3, 4, 5].map((i) => {
                                    const isPending = i === 1;
                                    const isProcessing = i === 2 || i === 3;
                                    const isShipped = i === 4;
                                    const isDelivered = i === 5;

                                    return (
                                        <TableRow key={i} className="hover:bg-slate-50/50 group">
                                            <TableCell className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <Link href={`/supplier/orders/mock-${i}`} className="font-bold text-slate-900 leading-tight hover:text-orange-600 transition-colors">PO-2026-89{i}</Link>
                                                    <div className="text-xs text-slate-500 mt-1 flex items-center"><Calendar className="w-3 h-3 mr-1" /> Today, 10:2{i} AM</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center text-sm text-slate-700">
                                                    <Building2 className="w-4 h-4 text-slate-400 mr-2" />
                                                    Zenith Corp India
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-medium text-slate-900">₹{(i * 12400).toLocaleString()}</TableCell>
                                            <TableCell>
                                                {isPending && <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-0 shadow-none">Pending Action</Badge>}
                                                {isProcessing && <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 shadow-none">Processing</Badge>}
                                                {isShipped && <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 shadow-none">In Transit</Badge>}
                                                {isDelivered && <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-0 shadow-none">Delivered</Badge>}
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-sm font-medium text-slate-900">{isDelivered ? 'Delivered' : `+${i * 3} Days`}</div>
                                                {isPending && <div className="text-[10px] text-amber-600 font-bold mt-0.5">Accept order to set date</div>}
                                            </TableCell>
                                            <TableCell className="text-right px-6">
                                                <div className="flex justify-end gap-2 items-center">
                                                    {isPending && <Button size="sm" className="h-8 text-xs font-semibold bg-orange-600 hover:bg-orange-700">Accept</Button>}
                                                    {isProcessing && <Button size="sm" variant="outline" className="h-8 text-xs font-semibold border-slate-300">Ship Items</Button>}
                                                    <Link href={`/supplier/orders/mock-${i}`}>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900 hover:bg-slate-100">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            ) : (
                                orders.map((order) => {
                                    const statusColors = {
                                        pending: 'bg-amber-100 text-amber-700',
                                        processing: 'bg-blue-100 text-blue-700',
                                        shipped: 'bg-purple-100 text-purple-700',
                                        delivered: 'bg-emerald-100 text-emerald-700',
                                        cancelled: 'bg-slate-100 text-slate-700'
                                    };
                                    return (
                                        <TableRow key={order.id} className="hover:bg-slate-50/50 group">
                                            <TableCell className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <Link href={`/supplier/orders/${order.id}`} className="font-bold text-slate-900 leading-tight hover:text-orange-600 transition-colors">PO-{order.id.substring(0, 6).toUpperCase()}</Link>
                                                    <div className="text-xs text-slate-500 mt-1 flex items-center"><Calendar className="w-3 h-3 mr-1" /> {new Date(order.created_at).toLocaleDateString()}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center text-sm text-slate-700">
                                                    <Building2 className="w-4 h-4 text-slate-400 mr-2" />
                                                    {order.buyer?.display_name || 'Buyer'}
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-medium text-slate-900">₹{Number(order.total_amount).toLocaleString()}</TableCell>
                                            <TableCell>
                                                <Badge className={`${statusColors[order.status] || 'bg-slate-100 text-slate-700'} border-0 shadow-none uppercase text-[10px] font-bold tracking-wider`}>
                                                    {order.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-sm font-medium text-slate-900">Est. +7 Days</div>
                                            </TableCell>
                                            <TableCell className="text-right px-6">
                                                <div className="flex justify-end gap-2 items-center">
                                                    {order.status === 'pending' && <Button size="sm" className="h-8 text-xs font-semibold bg-orange-600 hover:bg-orange-700">Accept</Button>}
                                                    {order.status === 'processing' && <Button size="sm" variant="outline" className="h-8 text-xs font-semibold border-slate-300">Ship Items</Button>}
                                                    <Link href={`/supplier/orders/${order.id}`}>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900 hover:bg-slate-100">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
