import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileBarChart2, Download, Plus, Building2, Calendar, CheckCircle2, Clock } from "lucide-react";

const reports = [
    { id: "RPT-2026-014", audit: "AUD-2026-016", supplier: "SafeWrap Co.", type: "Supply Chain Sustainability", submitted: "Feb 16, 2026", status: "approved" },
    { id: "RPT-2026-011", audit: "AUD-2026-012", supplier: "SecurePack Ltd.", type: "Labour & Social Audit", submitted: "Feb 1, 2026", status: "approved" },
    { id: "RPT-2026-009", audit: "AUD-2026-010", supplier: "EcoPack Solutions", type: "FSC Chain of Custody", submitted: "Jan 21, 2026", status: "in_review" },
];

const statusConfig: Record<string, { label: string, class: string, icon: React.ElementType }> = {
    approved: { label: "Admin Approved", class: "bg-emerald-100 text-emerald-700", icon: CheckCircle2 },
    in_review: { label: "Under Admin Review", class: "bg-amber-100 text-amber-700", icon: Clock },
};

export default function AuditorReportsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Audit Reports</h1>
                    <p className="text-muted-foreground mt-1">All submitted audit reports, both approved and pending admin review.</p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm font-semibold">
                    <Plus className="w-4 h-4 mr-2" /> Submit New Report
                </Button>
            </div>

            <div className="space-y-5">
                {reports.map(r => {
                    const cfg = statusConfig[r.status];
                    const Icon = cfg.icon;
                    return (
                        <Card key={r.id} className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
                            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                                        <FileBarChart2 className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-mono text-xs text-slate-500 font-semibold">{r.id}</p>
                                            <Badge className={`${cfg.class} border-0 shadow-none text-[10px] font-semibold`}>
                                                <Icon className="w-3 h-3 mr-1" />{cfg.label}
                                            </Badge>
                                        </div>
                                        <h3 className="font-bold text-slate-900">{r.type}</h3>
                                        <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                                            <span className="flex items-center"><Building2 className="w-3.5 h-3.5 mr-1" />{r.supplier}</span>
                                            <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" />Submitted {r.submitted}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <Button variant="outline" size="sm" className="border-slate-300 h-8 text-xs">
                                        <Download className="w-3.5 h-3.5 mr-1.5" /> Download PDF
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
