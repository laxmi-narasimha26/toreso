import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash2, Search, Filter, PackageOpen, Tag, TrendingDown, Eye } from "lucide-react";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const demoProducts = [
    { id: "1", name: "Premium 3-Ply Corrugated Box", sku: "SKU-CBX-001", category: "Corrugated Boxes", price: 18.50, inventory: 4200, status: "active" as const, lowStock: false },
    { id: "2", name: "E-Commerce Mailer Box (Custom Print)", sku: "SKU-MBX-012", category: "Printed Packaging", price: 32.00, inventory: 1800, status: "active" as const, lowStock: true },
    { id: "3", name: "LDPE Stretch Wrap Film 18\"", sku: "SKU-SWF-003", category: "Flexible Packaging", price: 245.00, inventory: 3600, status: "active" as const, lowStock: false },
    { id: "4", name: "Honeycomb Cushion Pad 12x12", sku: "SKU-HCP-007", category: "Industrial Packaging", price: 42.75, inventory: 950, status: "active" as const, lowStock: true },
    { id: "5", name: "Kraft Paper Carry Bag (Large)", sku: "SKU-KPB-015", category: "Carry Bags", price: 8.20, inventory: 12400, status: "active" as const, lowStock: false },
    { id: "6", name: "Rigid Magnetic Closure Box", sku: "SKU-RMB-022", category: "Rigid Boxes", price: 185.00, inventory: 600, status: "active" as const, lowStock: true },
    { id: "7", name: "Holographic Label Roll (500ct)", sku: "SKU-HLR-008", category: "Labels & Tags", price: 1250.00, inventory: 340, status: "draft" as const, lowStock: false },
    { id: "8", name: "5-Ply Heavy Duty Carton", sku: "SKU-HDC-004", category: "Corrugated Boxes", price: 45.00, inventory: 2100, status: "active" as const, lowStock: false },
];

export default function SupplierProductsPage() {
    const activeCount = demoProducts.filter(p => p.status === 'active').length;
    const draftCount = demoProducts.filter(p => p.status === 'draft').length;

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Products Catalog</h1>
                    <p className="text-muted-foreground mt-1">Manage your inventory, pricing, and product listings.</p>
                </div>
                <Link href="/supplier/products/create">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-sm font-semibold">
                        <Plus className="mr-2 h-4 w-4" /> Add Product
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Total Products</CardTitle>
                        <PackageOpen className="h-4 w-4 text-slate-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{demoProducts.length}</div>
                        <p className="text-xs text-slate-500 mt-1">Across all categories</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Active Listings</CardTitle>
                        <Tag className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{activeCount}</div>
                        <p className="text-xs text-slate-500 mt-1">Visible to buyers</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500">Low Stock Alerts</CardTitle>
                        <TrendingDown className="h-4 w-4 text-rose-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{demoProducts.filter(p => p.lowStock).length}</div>
                        <p className="text-xs text-slate-500 mt-1">Requires replenishment</p>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Tabs defaultValue="all" className="w-full sm:w-auto">
                        <TabsList className="bg-slate-200/50">
                            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">All Products</TabsTrigger>
                            <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Active ({activeCount})</TabsTrigger>
                            <TabsTrigger value="drafts" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Drafts ({draftCount})</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search SKU or name..." className="pl-9 h-9 border-slate-300" />
                        </div>
                        <Button variant="outline" size="sm" className="h-9 border-slate-300">
                            <Filter className="h-4 w-4 mr-2" /> Filter
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                            <TableRow>
                                <TableHead className="px-6 py-4">Product</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Base Price</TableHead>
                                <TableHead>Inventory</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {demoProducts.map((product) => (
                                <TableRow key={product.id} className="hover:bg-slate-50/50 group">
                                    <TableCell className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-100 rounded-md border border-slate-200 shrink-0"></div>
                                            <div>
                                                <div className="font-bold text-slate-900 leading-tight">{product.name}</div>
                                                <div className="text-xs text-slate-500 mt-0.5 font-mono">{product.sku}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-slate-600 text-sm">{product.category}</TableCell>
                                    <TableCell className="font-medium text-slate-900">₹{product.price.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <div className="text-sm font-medium text-slate-900">{product.inventory.toLocaleString()} units</div>
                                        {product.lowStock && <div className="text-[10px] text-amber-600 font-bold mt-0.5">Low Stock</div>}
                                    </TableCell>
                                    <TableCell>
                                        {product.status === 'draft' ? (
                                            <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200">Draft</Badge>
                                        ) : (
                                            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 shadow-none border-0">Active</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right px-6">
                                        <div className="flex justify-end gap-1">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900 hover:bg-slate-100">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-orange-600 hover:bg-orange-50">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-rose-600 hover:bg-rose-50">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
