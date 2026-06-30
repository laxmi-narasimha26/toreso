import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShieldCheck, AlertCircle, FileText, CheckCircle2, XCircle, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default async function AdminSupplierVerificationPage() {
    const { userId } = await auth();

    // Fetch organizations
    const orgs = await db.organization.findMany({
        where: { type: 'supplier' },
        orderBy: [
            { status: 'asc' }, // 'pending' comes before 'active' usually if 'pending' is a state
            { created_at: 'desc' }
        ]
    });

    const pendingCount = orgs.filter(o => o.status === 'pending').length;

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Supplier Verification</h1>
                    <p className="text-muted-foreground mt-1">Review onboarding applications and conduct KYC/compliance checks.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-amber-200 bg-amber-50">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold text-amber-900 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-2" /> Pending Reviews
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-amber-900">{pendingCount}</div>
                        <p className="text-xs text-amber-700 mt-1">Awaiting admin action</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Average Review Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">2.4 Days</div>
                        <p className="text-xs text-slate-500 mt-1">Last 30 days (-1.2d)</p>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex gap-4 w-full max-w-md">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search company name..." className="pl-9 bg-white" />
                        </div>
                        <Button variant="outline" className="bg-white"><Filter className="w-4 h-4 mr-2" /> Status</Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                            <TableRow>
                                <TableHead className="px-6 py-4">Company Name</TableHead>
                                <TableHead>Application Date</TableHead>
                                <TableHead>Documents</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orgs.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-32 text-center text-slate-500">No suppliers found.</TableCell>
                                </TableRow>
                            ) : (
                                orgs.map((org) => (
                                    <TableRow key={org.id} className="hover:bg-slate-50/50 group">
                                        <TableCell className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900">{org.display_name}</span>
                                                <span className="text-xs text-slate-500 font-mono mt-0.5">ID: {org.id.substring(0, 8)}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-slate-600 text-sm">
                                            {new Date(org.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm text-slate-500">
                                                <FileText className="w-4 h-4 mr-1.5 text-blue-500" /> 3 of 3 Provided
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={`${org.status === 'pending' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' :
                                                    org.status === 'active' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' :
                                                        'bg-rose-100 text-rose-700 hover:bg-rose-200'
                                                } border-0 shadow-none capitalize font-semibold tracking-wide text-[10px]`}>
                                                {org.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right px-6">
                                            {org.status === 'pending' ? (
                                                <Link href={`/admin/suppliers/verification/${org.id}`}>
                                                    <Button size="sm" className="h-8 text-xs font-semibold bg-red-600 hover:bg-red-700">Review</Button>
                                                </Link>
                                            ) : (
                                                <Link href={`/admin/suppliers/${org.id}`}>
                                                    <Button variant="outline" size="sm" className="h-8 text-xs font-semibold border-slate-300">
                                                        <SearchIcon className="w-3 h-3 mr-1.5" /> View Profile
                                                    </Button>
                                                </Link>
                                            )}
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
