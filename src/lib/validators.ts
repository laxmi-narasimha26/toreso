import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(3),
    slug: z.string().min(3),
    category_id: z.string().uuid(),
    short_description: z.string().optional(),
    description: z.string().optional(),
    base_price: z.number().min(0),
    currency: z.string().default("INR"),
    min_order_quantity: z.number().min(1).default(1),
    stock_quantity: z.number().min(0).default(0),
    images: z.array(z.string().url()).optional(),
    specifications: z.record(z.any()).optional(),
});

export const rfqSchema = z.object({
    title: z.string().min(5),
    product_description: z.string().min(10),
    category_id: z.string().uuid(),
    quantity: z.number().min(1),
    response_deadline: z.string().datetime(), // ISO string
    delivery_plant_id: z.string().uuid().optional(),
});

export const orderSchema = z.object({
    items: z.array(z.object({
        product_id: z.string().uuid(),
        quantity: z.number().min(1),
    })).min(1),
    delivery_address: z.any().optional(),
});

export const organizationSchema = z.object({
    legal_name: z.string().min(2),
    display_name: z.string().min(2),
    type: z.enum(["buyer", "supplier"]),
    gst_number: z.string().optional(), // regex usually needed
});
