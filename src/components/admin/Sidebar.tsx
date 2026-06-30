"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Users,
    ShieldCheck,
    Package,
    FileText,
    DollarSign,
    Settings,
    LogOut,
    Shield,
    ShoppingCart,
    Building2,
    BarChart3,
    FileBarChart2,
    ClipboardCheck,
    CreditCard,
    Newspaper,
    ScrollText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

const routeGroups = [
    {
        label: "OVERVIEW",
        routes: [
            { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
        ]
    },
    {
        label: "PEOPLE & ORGS",
        routes: [
            { label: "User Management", icon: Users, href: "/admin/users" },
            { label: "Buyer Companies", icon: Building2, href: "/admin/buyers" },
            { label: "Supplier Verification", icon: ShieldCheck, href: "/admin/suppliers/verification" },
        ]
    },
    {
        label: "MARKETPLACE",
        routes: [
            { label: "All Products", icon: Package, href: "/admin/products" },
            { label: "All RFQs", icon: FileText, href: "/admin/rfqs" },
            { label: "All Orders", icon: ShoppingCart, href: "/admin/orders" },
        ]
    },
    {
        label: "COMPLIANCE",
        routes: [
            { label: "Audits", icon: ClipboardCheck, href: "/admin/audits" },
            { label: "Certifications", icon: ShieldCheck, href: "/admin/certifications" },
        ]
    },
    {
        label: "FINANCE",
        routes: [
            { label: "Payments & GMV", icon: CreditCard, href: "/admin/payments" },
            { label: "Finance Tools", icon: DollarSign, href: "/admin/finance" },
        ]
    },
    {
        label: "GROWTH",
        routes: [
            { label: "Reports", icon: BarChart3, href: "/admin/reports" },
            { label: "Content (CMS)", icon: Newspaper, href: "/admin/content" },
        ]
    },
    {
        label: "SYSTEM",
        routes: [
            { label: "System Logs", icon: ScrollText, href: "/admin/logs" },
            { label: "Settings", icon: Settings, href: "/admin/settings" },
        ]
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full bg-slate-900 text-white border-r border-slate-800">
            <div className="px-4 py-5 flex items-center border-b border-slate-800 shrink-0">
                <div className="bg-rose-600 w-8 h-8 rounded-md flex items-center justify-center font-bold text-white shrink-0 mr-3">
                    <Shield className="w-4 h-4" />
                </div>
                <div>
                    <h1 className="text-base font-bold tracking-tight">Toreso</h1>
                    <p className="text-[10px] text-rose-400 font-semibold uppercase tracking-wider">Admin Portal</p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
                {routeGroups.map(group => (
                    <div key={group.label}>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 px-3 mb-1.5">{group.label}</p>
                        <div className="space-y-0.5">
                            {group.routes.map(route => {
                                const isActive = pathname === route.href || pathname.startsWith(route.href + "/");
                                return (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className={cn(
                                            "text-sm group flex p-2.5 w-full justify-start font-medium cursor-pointer rounded-lg transition-all items-center",
                                            isActive
                                                ? "text-white bg-rose-600/10 border border-rose-600/20"
                                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        <route.icon className={cn("h-[17px] w-[17px] mr-3 shrink-0", isActive ? "text-rose-400" : "text-slate-500 group-hover:text-white")} />
                                        {route.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="px-3 py-3 border-t border-slate-800 shrink-0">
                <SignOutButton>
                    <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-white/10 h-9 px-3 text-sm">
                        <LogOut className="h-[17px] w-[17px] mr-3" />
                        Sign Out
                    </Button>
                </SignOutButton>
            </div>
        </div>
    );
}
