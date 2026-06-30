"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Search,
    ShoppingCart,
    FileText,
    MessageSquare,
    Users,
    Factory,
    Receipt,
    BarChart,
    FolderOpen,
    Settings,
    LogOut,
    User,
    PackageSearch,
    Info,
    Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

const routes = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/buyer/dashboard" },
    { label: "Catalog", icon: PackageSearch, href: "/buyer/catalog" },
    { label: "Advanced Search", icon: Search, href: "/buyer/search" },
    { label: "Orders", icon: ShoppingCart, href: "/buyer/orders" },
    { label: "RFQs", icon: FileText, href: "/buyer/rfq" },
    { label: "RFIs", icon: Info, href: "/buyer/rfi" },
    { label: "Quotes", icon: MessageSquare, href: "/buyer/quotes" },
    { label: "Suppliers", icon: Users, href: "/buyer/suppliers" },
    { label: "Plants & Warehouses", icon: Factory, href: "/buyer/plants" },
    { label: "Invoices & Payments", icon: Receipt, href: "/buyer/invoices" },
    { label: "Analytics", icon: BarChart, href: "/buyer/analytics" },
    { label: "Documents", icon: FolderOpen, href: "/buyer/documents" },
    { label: "Messages", icon: MessageSquare, href: "/buyer/messages" },
    { label: "Notifications", icon: Bell, href: "/buyer/notifications" },
    { label: "Settings", icon: Settings, href: "/buyer/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white overflow-y-auto custom-scrollbar">
            <div className="px-3 py-2 flex-1">
                <Link href="/buyer/dashboard" className="flex items-center pl-3 mb-10">
                    <div className="relative w-8 h-8 mr-4">
                        <div className="bg-teal-500 w-full h-full rounded-md flex items-center justify-center font-bold text-white shadow-lg shadow-teal-500/20">B</div>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Toreso <span className="text-teal-400">Buyer</span>
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition-all duration-200",
                                pathname === route.href || pathname.startsWith(route.href + '/')
                                    ? "text-white bg-teal-500/10 border border-teal-500/20"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3 transition-colors", pathname === route.href || pathname.startsWith(route.href + '/') ? "text-teal-400" : "text-zinc-400 group-hover:text-zinc-300")} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="px-3 py-2 mt-auto">
                <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl mb-4 border border-slate-700/50">
                    <div className="flex items-center gap-x-3 mb-3">
                        <div className="bg-teal-500/20 p-2.5 rounded-full">
                            <User className="w-5 h-5 text-teal-400" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white">Buyer Portal</p>
                            <p className="text-xs text-zinc-400">Procurement</p>
                        </div>
                    </div>
                </div>
                <SignOutButton>
                    <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-red-500/10 hover:text-red-400 transition-colors">
                        <LogOut className="h-5 w-5 mr-3" />
                        Sign Out
                    </Button>
                </SignOutButton>
            </div>
        </div>
    );
}
