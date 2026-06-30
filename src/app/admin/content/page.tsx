import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Plus, Edit, Trash2, Eye, Search } from "lucide-react";

const pages = [
    { id: 1, title: "How It Works", slug: "/how-it-works", status: "published", updatedAt: "Feb 15, 2026" },
    { id: 2, title: "For Buyers", slug: "/for-buyers", status: "published", updatedAt: "Feb 10, 2026" },
    { id: 3, title: "For Suppliers", slug: "/for-suppliers", status: "published", updatedAt: "Feb 10, 2026" },
    { id: 4, title: "Packaging Industry Trends Q1 2026", slug: "/blog/trends-q1-2026", status: "draft", updatedAt: "Feb 18, 2026" },
    { id: 5, title: "Case Study: Zenith Corp 30% Cost Reduction", slug: "/case-studies/zenith", status: "draft", updatedAt: "Feb 17, 2026" },
];

export default function AdminContentPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Content Management</h1>
                    <p className="text-muted-foreground mt-1">Manage public pages, blog posts, and case studies.</p>
                </div>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm font-semibold">
                    <Plus className="w-4 h-4 mr-2" /> New Page
                </Button>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search pages..." className="pl-9 bg-white" />
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="divide-y divide-slate-100">
                    {pages.map(page => (
                        <div key={page.id} className="p-5 hover:bg-slate-50/50 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                                    <FileText className="w-5 h-5 text-slate-500" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-slate-900 text-sm truncate">{page.title}</h3>
                                    <p className="text-xs text-slate-500 font-mono">{page.slug}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <span className="text-xs text-slate-400">Updated {page.updatedAt}</span>
                                <Badge className={`${page.status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"} border-0 shadow-none text-[10px] font-semibold capitalize`}>
                                    {page.status}
                                </Badge>
                                <div className="flex gap-1">
                                    <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400 hover:text-blue-600"><Eye className="w-3.5 h-3.5" /></Button>
                                    <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400 hover:text-slate-900"><Edit className="w-3.5 h-3.5" /></Button>
                                    <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400 hover:text-rose-600"><Trash2 className="w-3.5 h-3.5" /></Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
