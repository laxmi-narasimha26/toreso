"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    FileText,
    MessageSquare,
    Users,
    Boxes,
    Building2,
    Truck,
    Receipt,
    DollarSign,
    LineChart,
    ShieldCheck,
    BarChart,
    FolderOpen,
    Settings,
    LogOut,
    Factory,
    Bell,
    CreditCard,
    Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

const routes = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/supplier/dashboard" },
    { label: "Products", icon: Package, href: "/supplier/products" },
    { label: "Orders", icon: ShoppingCart, href: "/supplier/orders" },
    { label: "RFQs / RFIs", icon: FileText, href: "/supplier/rfq" },
    { label: "Quotes Sent", icon: MessageSquare, href: "/supplier/quotes" },
    { label: "Buyers", icon: Users, href: "/supplier/buyers" },
    { label: "Inventory", icon: Boxes, href: "/supplier/inventory" },
    { label: "Warehouses", icon: Building2, href: "/supplier/warehouses" },
    { label: "Logistics", icon: Truck, href: "/supplier/logistics" },
    { label: "Invoices", icon: Receipt, href: "/supplier/invoices" },
    { label: "Payments", icon: CreditCard, href: "/supplier/payments" },
    { label: "Finance", icon: DollarSign, href: "/supplier/finance" },
    { label: "Performance", icon: LineChart, href: "/supplier/performance" },
    { label: "Certifications", icon: Award, href: "/supplier/certifications" },
    { label: "Audits", icon: ShieldCheck, href: "/supplier/audits" },
    { label: "Analytics", icon: BarChart, href: "/supplier/analytics" },
    { label: "Documents", icon: FolderOpen, href: "/supplier/documents" },
    { label: "Messages", icon: MessageSquare, href: "/supplier/messages" },
    { label: "Notifications", icon: Bell, href: "/supplier/notifications" },
    { label: "Settings", icon: Settings, href: "/supplier/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 border-r border-slate-800 text-white">
            <div className="px-3 py-2 flex-1 overflow-y-auto custom-scrollbar">
                <Link href="/supplier/dashboard" className="flex items-center pl-3 mb-8">
                    <div className="relative w-8 h-8 mr-3 shrink-0">
                        <div className="bg-orange-500 w-full h-full rounded-md flex items-center justify-center font-bold text-white">S</div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold leading-none tracking-tight">Toreso</h1>
                        <p className="text-xs text-orange-400 font-medium">Supplier Portal</p>
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => {
                        const isActive = pathname === route.href || pathname.startsWith(route.href + '/');
                        return (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "text-sm group flex p-2.5 w-full justify-start font-medium cursor-pointer rounded-lg transition-all items-center",
                                    isActive
                                        ? "text-white bg-orange-500/10 shadow-sm border border-orange-500/20"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <route.icon className={cn("h-[18px] w-[18px] mr-3", isActive ? "text-orange-500" : "text-slate-400 group-hover:text-white")} />
                                {route.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="px-3 py-2 mt-auto border-t border-slate-800 pt-4">
                <div className="p-3 bg-white/5 rounded-lg mb-4 border border-white/10">
                    <div className="flex items-center gap-x-3">
                        <div className="bg-orange-500/20 p-2 rounded-full shrink-0 border border-orange-500/30">
                            <Factory className="w-4 h-4 text-orange-500" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-semibold truncate text-white">Acme Packaging Co.</p>
                            <p className="text-xs text-slate-400 truncate">Platinum Supplier</p>
                        </div>
                    </div>
                </div>
                <SignOutButton>
                    <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-white/10 h-10 px-3">
                        <LogOut className="h-[18px] w-[18px] mr-3" />
                        Sign Out
                    </Button>
                </SignOutButton>
            </div>
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #334155;
                  border-radius: 4px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                  background: #475569;
                }
            `}</style>
        </div>
    );
}
