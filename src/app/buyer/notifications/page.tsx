import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, ShoppingCart, FileText, MessageSquare, TruckIcon, CheckCircle2, AlertCircle, DollarSign } from "lucide-react";

const notifications = [
    { id: 1, type: "order", icon: ShoppingCart, color: "blue", title: "Order PO-2026-0891 shipped", desc: "Apex Packaging has dispatched your order via BlueDart. Expected delivery Feb 22.", time: "2 hours ago", unread: true },
    { id: 2, type: "rfq", icon: FileText, color: "teal", title: "3 new quotes received on RFQ-2026-045", desc: "You have 3 new supplier quotes awaiting comparison on your Corrugated Box RFQ.", time: "5 hours ago", unread: true },
    { id: 3, type: "message", icon: MessageSquare, color: "indigo", title: "New message from PolyCraft India", desc: "They replied to your query about MOQ flexibility for BOPP bags.", time: "Yesterday", unread: false },
    { id: 4, type: "invoice", icon: DollarSign, color: "emerald", title: "Invoice INV-2026-118 due in 3 days", desc: "Payment of ₹1,25,000 is due to Green Pack Industries on Feb 23, 2026.", time: "Yesterday", unread: false },
    { id: 5, type: "alert", icon: AlertCircle, color: "amber", title: "RFQ-2026-031 closing in 24 hours", desc: "Your open RFQ for Shrink Wrap is closing tomorrow. 2 quotes received so far.", time: "2 days ago", unread: false },
    { id: 6, type: "success", icon: CheckCircle2, color: "emerald", title: "Supplier SafeWrap Co. verified", desc: "SafeWrap Co. has been verified as a Platinum partner. You can now place orders.", time: "3 days ago", unread: false },
];

const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    teal: "bg-teal-50 text-teal-600",
    indigo: "bg-indigo-50 text-indigo-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
};

export default function BuyerNotificationsPage() {
    const unreadCount = notifications.filter(n => n.unread).length;

    return (
        <div className="flex-col pb-12 max-w-3xl">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Notifications</h1>
                    <p className="text-muted-foreground mt-1">Stay up to date on orders, quotes, messages, and alerts.</p>
                </div>
                <div className="flex gap-2">
                    {unreadCount > 0 && <Badge className="bg-teal-600 text-white shadow-sm">{unreadCount} unread</Badge>}
                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-900">Mark all read</Button>
                </div>
            </div>

            <div className="space-y-3">
                {notifications.map(n => (
                    <div key={n.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-colors cursor-pointer hover:shadow-sm ${n.unread ? "bg-teal-50/30 border-teal-100" : "bg-white border-slate-200 opacity-80"}`}>
                        <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center ${colorMap[n.color]}`}>
                            <n.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                                <h4 className={`font-semibold text-sm ${n.unread ? "text-slate-900" : "text-slate-700"}`}>{n.title}</h4>
                                <span className="text-xs text-slate-400 shrink-0">{n.time}</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{n.desc}</p>
                        </div>
                        {n.unread && <div className="w-2 h-2 rounded-full bg-teal-500 mt-1.5 shrink-0" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
