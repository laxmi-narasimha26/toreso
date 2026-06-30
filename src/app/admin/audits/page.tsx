import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Plus, Calendar, User, Building2, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const audits = [
    { id: "AUD-2026-019", supplier: "Apex Packaging Pvt Ltd", type: "ISO 9001 Quality Audit", auditor: "Ravi Kumar (Bureau Veritas)", scheduled: "Mar 5, 2026", status: "scheduled" },
    { id: "AUD-2026-018", supplier: "PolyCraft India", type: "Environmental Compliance", auditor: "Sarah Mathews (SGS)", scheduled: "Feb 28, 2026", status: "in_progress" },
    { id: "AUD-2026-016", supplier: "SafeWrap Co.", type: "Supply Chain Sustainability", auditor: "Nikhil Sharma (Toreso)", scheduled: "Feb 15, 2026", status: "completed" },
    { id: "AUD-2026-012", supplier: "SecurePack Ltd.", type: "Labour & Social Audit", auditor: "Priya Iyer (SEDEX)", scheduled: "Jan 30, 2026", status: "overdue" },
];

const statusConfig: Record<string, { label: string, class: string, icon: React.ElementType }> = {
    scheduled: { label: "Scheduled", class: "bg-blue-100 text-blue-700", icon: Calendar },
    in_progress: { label: "In Progress", class: "bg-amber-100 text-amber-700", icon: Clock },
    completed: { label: "Completed", class: "bg-emerald-100 text-emerald-700", icon: CheckCircle2 },
    overdue: { label: "Overdue", class: "bg-rose-100 text-rose-700", icon: AlertCircle },
};

export default function AdminAuditsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Audit Management</h1>
                    <p className="text-muted-foreground mt-1">Schedule and track supplier quality, compliance, and sustainability audits.</p>
                </div>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm font-semibold">
                    <Plus className="w-4 h-4 mr-2" /> Schedule Audit
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-4 mb-8">
                {[
                    { label: "Scheduled", count: 1, color: "blue" },
                    { label: "In Progress", count: 1, color: "amber" },
                    { label: "Completed (30d)", count: 1, color: "emerald" },
                    { label: "Overdue", count: 1, color: "rose" },
                ].map(stat => (
                    <Card key={stat.label} className={`shadow-sm border-${stat.color}-100 bg-${stat.color}-50/20`}>
                        <CardContent className="p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{stat.label}</p>
                            <p className="text-2xl font-bold text-slate-900">{stat.count}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500">
                            <TableRow>
                                <TableHead className="px-6 py-4">Audit ID</TableHead>
                                <TableHead>Supplier</TableHead>
                                <TableHead>Audit Type</TableHead>
                                <TableHead>Auditor</TableHead>
                                <TableHead>Scheduled Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
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
                                            <div className="flex items-center"><Building2 className="w-3.5 h-3.5 mr-1.5 text-slate-400" />{a.supplier}</div>
                                        </TableCell>
                                        <TableCell className="text-sm text-slate-700">{a.type}</TableCell>
                                        <TableCell className="text-sm text-slate-500">
                                            <div className="flex items-center"><User className="w-3.5 h-3.5 mr-1.5 text-slate-400" />{a.auditor}</div>
                                        </TableCell>
                                        <TableCell className="text-sm text-slate-500">
                                            <div className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />{a.scheduled}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={`${cfg.class} border-0 shadow-none text-[10px] font-semibold`}>
                                                <Icon className="w-3 h-3 mr-1" />{cfg.label}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right px-6">
                                            <Button variant="outline" size="sm" className="h-7 text-xs border-slate-300">View</Button>
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
