import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

interface EditProductPageProps {
    params: {
        id: string;
    };
}

async function updateProductAction(formData: FormData) {
    "use server";
    console.log("Updating product...");
}

export default async function EditProductPage({ params }: EditProductPageProps) {
    const { userId } = await auth();

    const product = await db.product.findUnique({
        where: { id: params.id },
    });

    if (!product) notFound();

    // Verify ownership (simplified)
    const user = await db.user.findUnique({
        where: { id: userId },
        include: { team_memberships: { include: { organization: true } } }
    });
    const org = user?.team_memberships.find(m => m.organization.type === 'supplier')?.organization;

    if (org?.id !== product.supplier_id) {
        return <div>Forbidden</div>;
    }

    const categories = await db.category.findMany({ where: { is_active: true } });

    return (
        <div className="container mx-auto py-8 max-w-2xl">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Edit Product</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={updateProductAction} className="space-y-6">
                        <input type="hidden" name="id" value={product.id} />

                        <div className="space-y-2">
                            <Label htmlFor="name">Product Name</Label>
                            <Input id="name" name="name" defaultValue={product.name} required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select name="category_id" defaultValue={product.category_id} required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map(c => (
                                            <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="sku">SKU</Label>
                                <Input id="sku" name="sku" defaultValue={product.sku || ""} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" defaultValue={product.description || ""} />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="price">Base Price</Label>
                                <Input id="price" name="base_price" type="number" step="0.01" defaultValue={Number(product.base_price)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="min_order">Min Order Quantity</Label>
                                <Input id="min_order" name="min_order_quantity" type="number" defaultValue={product.min_order_quantity} required />
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end gap-3">
                            <Button variant="outline" type="button">Cancel</Button>
                            <Button type="submit">Update Product</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
