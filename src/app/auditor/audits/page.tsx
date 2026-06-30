import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ClipboardCheck, Calendar, Building2, Upload, FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const audits = [
    { id: "AUD-2026-019", supplier: "Apex Packaging Pvt Ltd", type: "ISO 9001 Quality Audit", date: "Mar 5, 2026", status: "scheduled", location: "Gurugram, Haryana" },
    { id: "AUD-2026-018", supplier: "PolyCraft India", type: "Environmental Compliance", date: "Feb 28, 2026", status: "in_progress", location: "Surat, Gujarat" },
    { id: "AUD-2026-016", supplier: "SafeWrap Co.", type: "Supply Chain Sustainability", date: "Feb 15, 2026", status: "report_pending", location: "Pune, Maharashtra" },
    { id: "AUD-2026-012", supplier: "SecurePack Ltd.", type: "Labour & Social Audit", date: "Jan 30, 2026", status: "completed", location: "Chennai, Tamil Nadu" },
    { id: "AUD-2026-010", supplier: "EcoPack Solutions", type: "FSC Chain of Custody", date: "Jan 20, 2026", status: "completed", location: "Ahmedabad, Gujarat" },
];

const statusConfig: Record<string, { label: string, class: string, icon: React.ElementType }> = {
    scheduled: { label: "Scheduled", class: "bg-blue-100 text-blue-700", icon: Calendar },
    in_progress: { label: "In Progress", class: "bg-amber-100 text-amber-700", icon: Clock },
    report_pending: { label: "Report Due", class: "bg-rose-100 text-rose-700", icon: AlertCircle },
    completed: { label: "Completed", class: "bg-emerald-100 text-emerald-700", icon: CheckCircle2 },
};

export default function AuditorAuditsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Assigned Audits</h1>
                    <p className="text-muted-foreground mt-1">All supplier audits assigned to you, across all statuses.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500">
                            <TableRow>
                                <TableHead className="px-6 py-4">Audit ID</TableHead>
                                <TableHead>Supplier</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right px-6">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {audits.map(a => {
                                const cfg = statusConfig[a.status];
                                const Icon = cfg.icon;
                                return (
                                    <TableRow key={a.id} className="hover:bg-slate-50/50">
                                        <TableCell className="px-6 font-mono text-xs text-slate-500 font-semibold">{a.id}</TableCell>
                                        <TableCell className="font-bold text-slate-900 text-sm">
                                            <div className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-slate-400" />{a.supplier}</div>
                                        </TableCell>
                                        <TableCell className="text-sm text-slate-700">{a.type}</TableCell>
                                        <TableCell className="text-sm text-slate-500">{a.location}</TableCell>
                                        <TableCell className="text-sm text-slate-500 flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-400" />{a.date}</TableCell>
                                        <TableCell>
                                            <Badge className={`${cfg.class} border-0 shadow-none text-[10px] font-semibold`}>
                                                <Icon className="w-3 h-3 mr-1" />{cfg.label}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right px-6">
                                            {a.status === "report_pending" ? (
                                                <Button size="sm" className="h-7 text-xs bg-rose-600 hover:bg-rose-700 text-white">
                                                    <Upload className="w-3 h-3 mr-1" /> Submit Report
                                                </Button>
                                            ) : (
                                                <Button variant="outline" size="sm" className="h-7 text-xs border-slate-300">
                                                    <FileText className="w-3 h-3 mr-1" /> Details
                                                </Button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
