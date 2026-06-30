import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck, CheckCircle2, AlertCircle, Download, Calendar } from "lucide-react";

const certs = [
    { id: "ISO 9001:2015", org: "Apex Packaging", body: "Bureau Veritas", issued: "Jan 2024", expiry: "Jan 2027", status: "valid" },
    { id: "ISO 14001:2015", org: "PolyCraft India", body: "SGS India", issued: "Mar 2024", expiry: "Feb 2027", status: "valid" },
    { id: "FSC Chain of Custody", org: "SafeWrap Co.", body: "SCS Global", issued: "Jun 2023", expiry: "Jun 2026", status: "valid" },
    { id: "BIS - Grade A Corrugated", org: "SecurePack Ltd.", body: "BIS", issued: "Sep 2022", expiry: "Sep 2025", status: "expired" },
];

export default function AdminCertificationsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Certifications Registry</h1>
                    <p className="text-muted-foreground mt-1">Platform-wide view of all supplier certifications and compliance status.</p>
                </div>
                <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export Registry</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-emerald-500">
                    <CardContent className="p-5"><p className="text-sm text-slate-500">Valid Certificates</p><p className="text-2xl font-bold text-slate-900">{certs.filter(c => c.status === "valid").length}</p></CardContent>
                </Card>
                <Card className="shadow-sm border-rose-100 border-l-4 border-l-rose-500 bg-rose-50/20">
                    <CardContent className="p-5"><p className="text-sm text-rose-700">Expired</p><p className="text-2xl font-bold text-rose-700">{certs.filter(c => c.status === "expired").length}</p></CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5"><p className="text-sm text-slate-500">Supplier Coverage</p><p className="text-2xl font-bold text-slate-900">78%</p></CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500">
                            <TableRow>
                                <TableHead className="px-6 py-4">Certificate</TableHead>
                                <TableHead>Supplier</TableHead>
                                <TableHead>Issuing Body</TableHead>
                                <TableHead>Issued</TableHead>
                                <TableHead>Expiry</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {certs.map(c => (
                                <TableRow key={`${c.id}-${c.org}`} className="hover:bg-slate-50/50">
                                    <TableCell className="px-6">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className={`w-4 h-4 ${c.status === "valid" ? "text-emerald-500" : "text-rose-400"}`} />
                                            <span className="font-semibold text-slate-900 text-sm">{c.id}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-700">{c.org}</TableCell>
                                    <TableCell className="text-sm text-slate-500">{c.body}</TableCell>
                                    <TableCell className="text-sm text-slate-500">{c.issued}</TableCell>
                                    <TableCell className="text-sm text-slate-500 flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5 text-slate-400" /> {c.expiry}
                                    </TableCell>
                                    <TableCell>
                                        <Badge className={`${c.status === "valid" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"} border-0 shadow-none text-[10px] font-semibold capitalize`}>
                                            {c.status === "valid" ? <><CheckCircle2 className="w-3 h-3 mr-1 inline" />Valid</> : <><AlertCircle className="w-3 h-3 mr-1 inline" />Expired</>}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right px-6">
                                        <Button variant="ghost" size="sm" className="h-7 text-xs text-slate-500">Download</Button>
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
