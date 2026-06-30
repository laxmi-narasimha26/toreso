import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRightLeft, Clock } from "lucide-react";
import Link from "next/link";

export default function BuyerQuotesPage() {
    return (
        <div className="flex-col pb-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Quotes & Negotiations</h1>
                <p className="text-muted-foreground mt-1">Review incoming bids, propose counter-offers, and finalize pricing.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-medium text-slate-500 mb-2">Pending Your Review</p>
                        <p className="text-3xl font-bold text-slate-900">14</p>
                        <p className="text-sm text-amber-600 mt-2 flex items-center"><Clock className="w-4 h-4 mr-1" /> 5 expiring this week</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-medium text-slate-500 mb-2">Active Negotiations</p>
                        <p className="text-3xl font-bold text-slate-900">3</p>
                        <p className="text-sm text-slate-500 mt-2">Counter-offers sent</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <p className="text-sm font-medium text-slate-500 mb-2">Quotes Accepted (MTD)</p>
                        <p className="text-3xl font-bold text-teal-600">8</p>
                        <p className="text-sm text-slate-500 mt-2 flex items-center">Converting to orders</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="shadow-sm border-slate-200 overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-slate-100 flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Recent Quote Activity</CardTitle>
                    <div className="flex gap-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 cursor-pointer">All</Badge>
                        <Badge variant="outline" className="bg-white text-slate-600 cursor-pointer hover:bg-slate-50">Pending</Badge>
                        <Badge variant="outline" className="bg-white text-slate-600 cursor-pointer hover:bg-slate-50">Negotiating</Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                            <TableRow>
                                <TableHead className="px-6 py-4">RFQ / Product</TableHead>
                                <TableHead>Supplier</TableHead>
                                <TableHead className="text-right">Quoted Price</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right px-6">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1, 2, 3, 4].map((i) => (
                                <TableRow key={i} className="hover:bg-slate-50/50 group">
                                    <TableCell className="px-6 py-4">
                                        <div className="font-bold text-slate-900">Custom Mailer Box 5x5x5</div>
                                        <div className="text-xs text-slate-500 mt-1 font-mono">RFQ-902{i}</div>
                                    </TableCell>
                                    <TableCell className="text-slate-900 font-medium">EcoPack India Ltd.</TableCell>
                                    <TableCell className="text-right">
                                        <div className="font-bold text-slate-900 text-base">₹{(i * 12.5).toFixed(2)} <span className="text-xs text-slate-500 font-normal">/ unit</span></div>
                                        <div className="text-xs text-slate-500 mt-1 line-through">₹{(i * 14.0).toFixed(2)}</div>
                                    </TableCell>
                                    <TableCell>
                                        {i === 1 ? <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Countered</Badge> :
                                            i === 2 ? <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">New Quote</Badge> :
                                                i === 3 ? <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200">Reviewing</Badge> :
                                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 shadow-none border-0">Accepted</Badge>}
                                    </TableCell>
                                    <TableCell className="text-right px-6">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-50" title="Discuss">
                                                <MessageSquare className="w-4 h-4" />
                                            </Button>
                                            {i !== 4 ? (
                                                <Button size="sm" variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 group-hover:bg-teal-50">
                                                    Review <ArrowRightLeft className="w-3 h-3 ml-1.5" />
                                                </Button>
                                            ) : (
                                                <Link href="/buyer/orders">
                                                    <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800">View PO</Button>
                                                </Link>
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
