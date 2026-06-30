import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, ShieldCheck, MapPin, Star, Building, FileText, Factory } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BuyerSuppliersPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Suppliers Directory</h1>
                    <p className="text-muted-foreground mt-1">Discover, evaluate, and manage your packaging manufacturing partners.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Tabs defaultValue="saved" className="w-full sm:w-auto">
                        <TabsList className="bg-slate-200/50">
                            <TabsTrigger value="saved" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Saved Partners</TabsTrigger>
                            <TabsTrigger value="discover" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Discover New</TabsTrigger>
                            <TabsTrigger value="invited" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Invited</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search company names..." className="pl-9 h-9" />
                        </div>
                        <Button variant="outline" size="sm" className="h-9 border-slate-200">
                            <Filter className="h-4 w-4 mr-2" /> Filters
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <Card key={i} className="shadow-sm border-slate-200 hover:border-teal-400 transition-colors group flex flex-col">
                        <CardHeader className="p-6 pb-4">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 bg-slate-100 rounded border border-slate-200 flex items-center justify-center shrink-0">
                                    <Building className="w-6 h-6 text-slate-400" />
                                </div>
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0 shadow-none"><ShieldCheck className="w-3 h-3 mr-1" /> Verified</Badge>
                            </div>
                            <CardTitle className="text-xl leading-tight">Elite Packaging India {(i !== 1) ? `Group ${i}` : ''}</CardTitle>
                            <div className="flex items-center gap-1.5 mt-2">
                                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                                <span className="text-sm font-bold text-slate-900">4.8</span>
                                <span className="text-xs text-slate-500">(124 reviews)</span>
                            </div>
                        </CardHeader>
                        <CardContent className="px-6 py-0 flex-1">
                            <div className="space-y-3">
                                <div className="flex items-start gap-2.5">
                                    <Factory className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                                    <p className="text-sm text-slate-600">Corrugated, Flexible, Labels</p>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                                    <p className="text-sm text-slate-600">Mumbai, Maharashtra (3 Plants)</p>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">ISO 9001</Badge>
                                <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">FSC</Badge>
                            </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-6 mt-auto">
                            <div className="grid grid-cols-2 gap-3 w-full">
                                <Button variant="outline" className="w-full text-slate-600 hover:bg-slate-50 border-slate-200">Profile</Button>
                                <Link href="/buyer/rfq/create" className="w-full">
                                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Request Quote</Button>
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
