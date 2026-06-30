import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Users, AlertCircle, CheckCircle2, Clock, Info } from "lucide-react";

const logs = [
    { id: 1, actor: "admin@toreso.com", action: "Approved Supplier", target: "Apex Packaging Pvt Ltd", ip: "203.88.1.45", time: "Today, 10:42 AM", level: "success" },
    { id: 2, actor: "system", action: "Auto-matched RFQ", target: "RFQ-2026-045 → 8 suppliers", ip: "internal", time: "Today, 09:15 AM", level: "info" },
    { id: 3, actor: "user:Rahul Sharma", action: "Failed Login (3 attempts)", target: "rahul@example.com", ip: "103.21.88.200", time: "Today, 08:50 AM", level: "warning" },
    { id: 4, actor: "admin@toreso.com", action: "Rejected Supplier Application", target: "Fake Box Co.", ip: "203.88.1.45", time: "Yesterday", level: "error" },
    { id: 5, actor: "system", action: "Payout Processed", target: "INV-2026-112 → Apex Packaging", ip: "internal", time: "Yesterday", level: "success" },
    { id: 6, actor: "user:Priya Iyer", action: "Audit Report Submitted", target: "AUD-2026-018", ip: "198.51.0.10", time: "2 days ago", level: "info" },
];

const levelConfig: Record<string, { class: string, icon: React.ElementType }> = {
    success: { class: "bg-emerald-100 text-emerald-700", icon: CheckCircle2 },
    info: { class: "bg-blue-100 text-blue-700", icon: Info },
    warning: { class: "bg-amber-100 text-amber-700", icon: AlertCircle },
    error: { class: "bg-rose-100 text-rose-700", icon: AlertCircle },
};

export default function AdminLogsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">System Logs</h1>
                    <p className="text-muted-foreground mt-1">Audit trail of all admin actions, system events, and security alerts.</p>
                </div>
                <Button variant="outline">Export Logs</Button>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search log events..." className="pl-9 bg-white" />
                </div>
                <div className="flex gap-2">
                    {["All", "success", "warning", "error", "info"].map(lvl => (
                        <Button key={lvl} variant="outline" size="sm" className="bg-white capitalize text-xs">{lvl}</Button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden font-mono">
                <div className="divide-y divide-slate-100">
                    {logs.map(log => {
                        const cfg = levelConfig[log.level];
                        const Icon = cfg.icon;
                        return (
                            <div key={log.id} className="p-4 hover:bg-slate-50/50 flex items-start gap-4 group">
                                <Badge className={`${cfg.class} border-0 shadow-none text-[10px] font-semibold capitalize shrink-0 mt-0.5`}>
                                    <Icon className="w-3 h-3 mr-1" />{log.level}
                                </Badge>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                                        <span className="text-xs font-semibold text-slate-700">{log.actor}</span>
                                        <span className="text-xs text-slate-400">→</span>
                                        <span className="text-xs text-slate-900 font-bold">{log.action}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-0.5">{log.target}</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-xs text-slate-400">{log.time}</p>
                                    <p className="text-[10px] text-slate-300 mt-0.5">{log.ip}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
