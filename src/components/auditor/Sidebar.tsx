"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    ClipboardCheck,
    Building2,
    FileBarChart2,
    LogOut,
    ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

const routes = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/auditor/dashboard" },
    { label: "Assigned Audits", icon: ClipboardCheck, href: "/auditor/audits" },
    { label: "Supplier Profiles", icon: Building2, href: "/auditor/suppliers" },
    { label: "Reports", icon: FileBarChart2, href: "/auditor/reports" },
];

export function AuditorSidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 border-r border-slate-800 text-white">
            <div className="px-3 py-2 flex-1 overflow-y-auto">
                <Link href="/auditor/dashboard" className="flex items-center pl-3 mb-8">
                    <div className="relative w-8 h-8 mr-3 shrink-0">
                        <div className="bg-indigo-500 w-full h-full rounded-md flex items-center justify-center font-bold text-white">
                            <ShieldCheck className="w-4 h-4" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold leading-none tracking-tight">Toreso</h1>
                        <p className="text-xs text-indigo-400 font-medium">Auditor Portal</p>
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map(route => {
                        const isActive = pathname === route.href || pathname.startsWith(route.href + "/");
                        return (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "text-sm group flex p-2.5 w-full justify-start font-medium cursor-pointer rounded-lg transition-all items-center",
                                    isActive
                                        ? "text-white bg-indigo-500/10 shadow-sm border border-indigo-500/20"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <route.icon className={cn("h-[18px] w-[18px] mr-3", isActive ? "text-indigo-400" : "text-slate-400 group-hover:text-white")} />
                                {route.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="px-3 py-2 mt-auto border-t border-slate-800 pt-4">
                <div className="p-3 bg-white/5 rounded-lg mb-4 border border-white/10">
                    <div className="flex items-center gap-x-3">
                        <div className="bg-indigo-500/20 p-2 rounded-full shrink-0 border border-indigo-500/30">
                            <ShieldCheck className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-semibold truncate text-white">Auditor Role</p>
                            <p className="text-xs text-slate-400 truncate">Bureau Veritas</p>
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
        </div>
    );
}
