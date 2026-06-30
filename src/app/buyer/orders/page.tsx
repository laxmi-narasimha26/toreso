import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Eye, Search, Download, Filter, FileText, ChevronDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default async function BuyerOrdersPage({ searchParams }: { searchParams: { tab?: string } }) {
    const { userId } = await auth();

    const currentTab = searchParams.tab || 'all';

    let orders: any[] = [];
    try {
        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: { include: { organization: true } } }
        });
        const org = user?.team_memberships.find(m => m.organization.type === 'buyer')?.organization;

        if (org) {
            let whereClause: any = { buyer_id: org.id };
            if (currentTab === 'active') whereClause.status = { in: ['pending', 'confirmed', 'shipped'] };
            if (currentTab === 'completed') whereClause.status = 'delivered';
            if (currentTab === 'cancelled') whereClause.status = 'cancelled';

            orders = await db.order.findMany({
                where: whereClause,
                include: { supplier: true, order_items: { include: { product: true } } },
                orderBy: { created_at: 'desc' }
            });
        }
    } catch (error) {
        console.error(error);
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending': return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Pending Confirmation</Badge>;
            case 'confirmed': return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Processing</Badge>;
            case 'shipped': return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">In Transit</Badge>;
            case 'delivered': return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Delivered</Badge>;
            case 'cancelled': return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Cancelled</Badge>;
            default: return <Badge variant="outline">{status}</Badge>;
        }
    };

    return (
        <div className="flex-col pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Orders Management</h1>
                    <p className="text-muted-foreground mt-1">Track shipments, download invoices, and manage your procurements.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="text-slate-600 border-slate-200 hover:bg-slate-50">
                        <Download className="w-4 h-4 mr-2" /> Export CSV
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700">
                        <FileText className="w-4 h-4 mr-2" /> Quick Reorder
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Tabs defaultValue={currentTab} className="w-full sm:w-auto">
                        <TabsList className="bg-slate-200/50">
                            <Link href="?tab=all" scroll={false}><TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">All Orders</TabsTrigger></Link>
                            <Link href="?tab=active" scroll={false}><TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Active</TabsTrigger></Link>
                            <Link href="?tab=completed" scroll={false}><TabsTrigger value="completed" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Completed</TabsTrigger></Link>
                            <Link href="?tab=cancelled" scroll={false}><TabsTrigger value="cancelled" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Cancelled</TabsTrigger></Link>
                        </TabsList>
                    </Tabs>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search orders or suppliers..." className="pl-9 h-9" />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-9 border-slate-200">
                                    <Filter className="h-4 w-4 mr-2" /> Filters
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                                <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
                                <DropdownMenuItem>2025 Orders</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Table */}
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead className="font-semibold text-slate-900">Order ID</TableHead>
                            <TableHead className="font-semibold text-slate-900">Date & Time</TableHead>
                            <TableHead className="font-semibold text-slate-900">Supplier</TableHead>
                            <TableHead className="font-semibold text-slate-900">Items</TableHead>
                            <TableHead className="font-semibold text-slate-900">Total Price</TableHead>
                            <TableHead className="font-semibold text-slate-900">Status</TableHead>
                            <TableHead className="text-right font-semibold text-slate-900">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-48 text-center bg-slate-50/30">
                                    <div className="flex flex-col justify-center items-center">
                                        <FileText className="h-10 w-10 text-slate-300 mb-3" />
                                        <p className="text-slate-500 font-medium text-lg">No orders found.</p>
                                        <p className="text-slate-400 text-sm mt-1 mb-4">You haven't placed any orders matching this criteria.</p>
                                        <Link href="/buyer/catalog">
                                            <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">Start Sourcing</Button>
                                        </Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            orders.map((order) => (
                                <TableRow key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                    <TableCell className="font-medium text-slate-900">
                                        {order.order_number}
                                        {order.created_at > new Date(Date.now() - 86400000) && <Badge className="ml-2 bg-blue-100 text-blue-700 text-[10px] hover:bg-blue-100 border-0 px-1 py-0">NEW</Badge>}
                                    </TableCell>
                                    <TableCell className="text-slate-600">
                                        <div className="flex flex-col">
                                            <span>{new Date(order.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                            <span className="text-xs text-slate-400">{new Date(order.created_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium text-slate-900">{order.supplier.display_name}</div>
                                        <div className="text-xs text-slate-500 flex items-center mt-0.5">Rating: 4.8 ★</div>
                                    </TableCell>
                                    <TableCell>
                                        <span className="inline-flex items-center justify-center bg-slate-100 text-slate-700 rounded-full px-2.5 py-0.5 text-xs font-medium">
                                            {order.order_items.length} items
                                        </span>
                                    </TableCell>
                                    <TableCell className="font-bold text-slate-900">
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number(order.total_amount))}
                                    </TableCell>
                                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="sm" className="hidden sm:flex text-slate-500 hover:text-blue-600 hover:bg-blue-50">
                                                <FileText className="h-4 w-4 mr-1.5" /> Invoice
                                            </Button>
                                            <Link href={`/buyer/orders/${order.id}`}>
                                                <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                                                    View Details <ChevronDown className="h-3 w-3 ml-1.5 -rotate-90" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>

                {orders.length > 0 && (
                    <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-sm text-slate-500">
                        <span>Showing 1 to {orders.length} of {orders.length} orders</span>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" disabled>Previous</Button>
                            <Button variant="outline" size="sm" disabled>Next</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
