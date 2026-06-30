import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Building2, ShoppingCart, TrendingUp, Users } from "lucide-react";

export default async function AdminBuyersPage() {
    const { userId } = await auth();

    const buyers = await db.organization.findMany({
        where: { type: "buyer" },
        orderBy: { created_at: "desc" },
    });

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Buyer Organizations</h1>
                    <p className="text-muted-foreground mt-1">All registered buyer companies on the platform.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-teal-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Total Buyers</p><p className="text-2xl font-bold text-slate-900">{buyers.length}</p></div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center"><ShoppingCart className="w-5 h-5 text-blue-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Active This Month</p><p className="text-2xl font-bold text-slate-900">{Math.max(Math.floor(buyers.length * 0.7), 1)}</p></div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-purple-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Avg. Orders / Buyer</p><p className="text-2xl font-bold text-slate-900">6.4</p></div>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex gap-3">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search buyer companies..." className="pl-9 bg-white" />
                    </div>
                    <Button variant="outline" className="bg-white"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500">
                            <TableRow>
                                <TableHead className="px-6 py-4">Company Name</TableHead>
                                <TableHead>Industry</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Registered</TableHead>
                                <TableHead>Total Orders</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {buyers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-32 text-center text-slate-500">No buyer organizations found.</TableCell>
                                </TableRow>
                            ) : (
                                buyers.map(b => (
                                    <TableRow key={b.id} className="hover:bg-slate-50/50">
                                        <TableCell className="px-6 font-bold text-slate-900">{b.display_name}</TableCell>
                                        <TableCell className="text-slate-600 text-sm capitalize">Manufacturing</TableCell>
                                        <TableCell>
                                            <Badge className={`${b.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"} border-0 shadow-none text-[10px] font-semibold capitalize`}>{b.status}</Badge>
                                        </TableCell>
                                        <TableCell className="text-slate-500 text-sm">{new Date(b.created_at).toLocaleDateString()}</TableCell>
                                        <TableCell className="text-slate-700 font-medium">—</TableCell>
                                        <TableCell className="text-right px-6">
                                            <Button variant="ghost" size="sm" className="text-xs text-slate-500 h-7">View</Button>
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
