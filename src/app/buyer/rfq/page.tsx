import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FileEdit, Search, PlusCircle, Filter, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function BuyerRfqPage({ searchParams }: { searchParams: { tab?: string } }) {
    const { userId } = await auth();

    const currentTab = searchParams.tab || 'active';

    let rfqs: any[] = [];
    try {
        const user = await db.user.findUnique({
            where: { id: userId },
            include: { team_memberships: { include: { organization: true } } }
        });
        const org = user?.team_memberships.find(m => m.organization.type === 'buyer')?.organization;

        if (org) {
            let whereClause: any = { buyer_id: org.id };
            if (currentTab === 'active') whereClause.status = 'published';
            if (currentTab === 'drafts') whereClause.status = 'draft';
            if (currentTab === 'closed') whereClause.status = 'closed';

            rfqs = await db.rfq.findMany({
                where: whereClause,
                include: { quotes: true, category: true },
                orderBy: { created_at: 'desc' }
            });
        }
    } catch (e) {
        console.error(e);
    }

    return (
        <div className="flex-col pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">RFQ Management</h1>
                    <p className="text-muted-foreground mt-1">Request, compare, and award custom packaging quotes.</p>
                </div>
                <Link href="/buyer/rfq/create">
                    <Button className="bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-500/20">
                        <PlusCircle className="mr-2 h-4 w-4" /> Create Custom RFQ
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-4 mb-8">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500">Active RFQs</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">12</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-full"><FileEdit className="w-5 h-5 text-teal-600" /></div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500">Pending Quotes</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">8</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-full"><MessageSquare className="w-5 h-5 text-amber-600" /></div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500">Expiring Soon</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">3</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-full"><Clock className="w-5 h-5 text-blue-600" /></div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500">Awarded (YTD)</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">45</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-full"><CheckCircle2 className="w-5 h-5 text-purple-600" /></div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Tabs defaultValue={currentTab} className="w-full sm:w-auto">
                        <TabsList className="bg-slate-200/50">
                            <Link href="?tab=active" scroll={false}><TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Active</TabsTrigger></Link>
                            <Link href="?tab=drafts" scroll={false}><TabsTrigger value="drafts" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Drafts</TabsTrigger></Link>
                            <Link href="?tab=closed" scroll={false}><TabsTrigger value="closed" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Closed</TabsTrigger></Link>
                            <Link href="?tab=templates" scroll={false}><TabsTrigger value="templates" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Templates</TabsTrigger></Link>
                        </TabsList>
                    </Tabs>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search RFQs..." className="pl-9 h-9" />
                        </div>
                        <Button variant="outline" size="sm" className="h-9 border-slate-200">
                            <Filter className="h-4 w-4 mr-2" /> Filter
                        </Button>
                    </div>
                </div>

                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead className="font-semibold text-slate-900">RFQ Title / ID</TableHead>
                            <TableHead className="font-semibold text-slate-900">Category</TableHead>
                            <TableHead className="font-semibold text-slate-900">Deadline</TableHead>
                            <TableHead className="font-semibold text-slate-900">Quotes Received</TableHead>
                            <TableHead className="font-semibold text-slate-900">Status</TableHead>
                            <TableHead className="text-right font-semibold text-slate-900">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rfqs.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-48 text-center bg-slate-50/30">
                                    <div className="flex flex-col justify-center items-center">
                                        <FileEdit className="h-10 w-10 text-slate-300 mb-3" />
                                        <p className="text-slate-500 font-medium text-lg">No RFQs found in this tab.</p>
                                        {currentTab === 'active' && (
                                            <Link href="/buyer/rfq/create" className="mt-4">
                                                <Button className="bg-teal-600 hover:bg-teal-700">Create Your First RFQ</Button>
                                            </Link>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            rfqs.map((rfq) => (
                                <TableRow key={rfq.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                                    <TableCell className="font-medium text-slate-900">
                                        <Link href={`/buyer/rfq/${rfq.id}`} className="group-hover:text-teal-600 transition-colors">
                                            {rfq.title}
                                        </Link>
                                        <div className="text-xs text-slate-400 mt-1 font-mono">{rfq.id.split('-')[0].toUpperCase()}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="bg-slate-100 font-normal hover:bg-slate-200">{rfq.category?.name || "General"}</Badge>
                                    </TableCell>
                                    <TableCell className="text-slate-600">
                                        {new Date(rfq.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        {new Date(rfq.deadline) < new Date(Date.now() + 86400000 * 3) && rfq.status === 'published' && (
                                            <span className="ml-2 inline-flex items-center text-[10px] text-red-600 bg-red-50 px-1.5 py-0.5 rounded font-bold">Expiring</span>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <span className="inline-flex w-6 h-6 rounded-full bg-blue-50 text-blue-700 items-center justify-center text-xs font-bold mr-2 border border-blue-100">
                                                {rfq.quotes?.length || 0}
                                            </span>
                                            <span className="text-xs text-slate-500">quotes</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {rfq.status === 'published' ? <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0 shadow-none">Active</Badge> :
                                            rfq.status === 'closed' ? <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-white shadow-none">Closed</Badge> :
                                                <Badge variant="outline" className="border-slate-200 text-slate-600 bg-white">Draft</Badge>}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Link href={`/buyer/rfq/${rfq.id}`}>
                                            <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50 group-hover:bg-teal-50">View <span className="sr-only">Details</span></Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
