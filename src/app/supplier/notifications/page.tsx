import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, ShoppingCart, FileText, CheckCircle2, AlertCircle, DollarSign, Star, MessageSquare } from "lucide-react";

const notifications = [
    { id: 1, type: "order", icon: ShoppingCart, color: "blue", title: "New Purchase Order Received", desc: "Zenith Corp India placed a new PO for 5-Ply Corrugated Boxes worth ₹4,80,000. Confirm within 24h.", time: "30 mins ago", unread: true },
    { id: 2, type: "rfq", icon: FileText, color: "orange", title: "New RFQ Match: BOPP Woven Bags", desc: "An RFQ matching your product catalog has been posted by FoodFirst Pvt Ltd.", time: "3 hours ago", unread: true },
    { id: 3, type: "payment", icon: DollarSign, color: "emerald", title: "Payment received for INV-2026-112", desc: "₹1,10,000 has been credited to your registered bank account.", time: "Yesterday", unread: false },
    { id: 4, type: "review", icon: Star, color: "amber", title: "New buyer rating posted", desc: "BuildRight Ltd gave you a 4.8-star review for your recent order fulfillment.", time: "2 days ago", unread: false },
    { id: 5, type: "alert", icon: AlertCircle, color: "rose", title: "Certification expiring soon", desc: "Your BIS Certification for Corrugated Grade A will expire in 15 days. Please renew.", time: "2 days ago", unread: false },
    { id: 6, type: "message", icon: MessageSquare, color: "indigo", title: "Message from MediCare Packaging", desc: "They have questions about lead time on the Blister Pack quote you submitted.", time: "3 days ago", unread: false },
];

const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
    indigo: "bg-indigo-50 text-indigo-600",
};

export default function SupplierNotificationsPage() {
    const unread = notifications.filter(n => n.unread).length;

    return (
        <div className="flex-col pb-12 max-w-3xl">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Notifications</h1>
                    <p className="text-muted-foreground mt-1">New orders, RFQ matches, payments, and important alerts.</p>
                </div>
                <div className="flex gap-2">
                    {unread > 0 && <Badge className="bg-orange-500 text-white shadow-sm">{unread} unread</Badge>}
                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-900">Mark all read</Button>
                </div>
            </div>

            <div className="space-y-3">
                {notifications.map(n => (
                    <div key={n.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-colors cursor-pointer hover:shadow-sm ${n.unread ? "bg-orange-50/30 border-orange-100" : "bg-white border-slate-200 opacity-80"}`}>
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
                        {n.unread && <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
