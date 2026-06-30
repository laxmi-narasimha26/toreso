import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { NextRequest, NextResponse } from "next/server";
import { cartItems as demoCartItems, getCommerceProfile } from "@/data/commerce";
import { innovationProducts } from "@/data/innovationCatalog";
import { cleanCatalogText } from "@/lib/catalog-copy";

export const STOREFRONT_SESSION_COOKIE = "toreso_storefront_session";

export type StorefrontProduct = {
  slug: string;
  name: string;
  aisle: string;
  categorySlug: string;
  format: string;
  description: string;
  price: number;
  mrp: number;
  discount: number;
  rating: string;
  reviews: number;
  inventory: number;
  deliveryPromise: string;
  returnWindow: string;
  sku: string;
  badges: string[];
};

export type StorefrontCartLine = {
  productSlug: string;
  quantity: number;
  addedAt: string;
};

export type StorefrontTrackingEvent = {
  label: string;
  detail: string;
  time: string;
  state: "complete" | "current" | "pending";
};

export type StorefrontOrder = {
  id: string;
  sessionId: string;
  status: string;
  placedOn: string;
  total: number;
  subtotal: number;
  savings: number;
  deliveryFee: number;
  paymentMethod: string;
  courier: string;
  trackingId: string;
  address: StorefrontAddress;
  customer: StorefrontCustomer;
  items: Array<StorefrontCartLine & { unitPrice: number; unitMrp: number; name: string; sku: string }>;
  events: StorefrontTrackingEvent[];
};

export type StorefrontReturnRequest = {
  id: string;
  sessionId: string;
  orderId: string;
  productSlug?: string;
  reason: string;
  resolution: "replacement" | "refund" | "repair-kit";
  status: string;
  createdAt: string;
};

export type StorefrontAddress = {
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type StorefrontCustomer = {
  name: string;
  email: string;
  phone: string;
};

type StorefrontStore = {
  products: StorefrontProduct[];
  carts: Record<string, StorefrontCartLine[]>;
  orders: StorefrontOrder[];
  returns: StorefrontReturnRequest[];
  updatedAt: string;
};

const storePath = path.join(process.cwd(), ".data", "storefront.json");

const now = () => new Date().toISOString();

const formatApiPrice = (value: number) => `Rs. ${value.toLocaleString("en-IN")}`;

const toStorefrontProduct = (slug: string): StorefrontProduct | null => {
  const product = innovationProducts.find((item) => item.slug === slug);
  if (!product) {
    return null;
  }

  const profile = getCommerceProfile(product);
  const index = innovationProducts.findIndex((item) => item.slug === slug);

  return {
    slug: product.slug,
    name: cleanCatalogText(product.name),
    aisle: cleanCatalogText(product.aisle),
    categorySlug: product.categorySlug,
    format: cleanCatalogText(product.format),
    description: cleanCatalogText(product.b2cInnovation),
    price: profile.price,
    mrp: profile.mrp,
    discount: profile.discount,
    rating: profile.rating,
    reviews: profile.reviews,
    inventory: 24 + (index % 11) * 7,
    deliveryPromise: profile.deliveryPromise,
    returnWindow: profile.returnWindow,
    sku: profile.sku,
    badges: profile.badges,
  };
};

const buildInitialStore = (): StorefrontStore => {
  const demoSessionId = "demo-session";

  return {
    products: innovationProducts
      .map((product) => toStorefrontProduct(product.slug))
      .filter((product): product is StorefrontProduct => Boolean(product)),
    carts: {
      [demoSessionId]: demoCartItems.map((item) => ({
        productSlug: item.product.slug,
        quantity: item.quantity,
        addedAt: now(),
      })),
    },
    orders: [],
    returns: [],
    updatedAt: now(),
  };
};

async function readStore(): Promise<StorefrontStore> {
  try {
    const file = await readFile(storePath, "utf8");
    const parsed = JSON.parse(file) as StorefrontStore;
    const freshProducts = buildInitialStore().products;
    const products = freshProducts;
    const validProductSlugs = new Set(products.map((product) => product.slug));
    const carts = Object.fromEntries(
      Object.entries(parsed.carts ?? {}).map(([sessionId, lines]) => [
        sessionId,
        lines.filter((line) => validProductSlugs.has(line.productSlug)),
      ]),
    );

    return {
      ...parsed,
      products,
      carts,
      orders: parsed.orders ?? [],
      returns: parsed.returns ?? [],
    };
  } catch {
    const initialStore = buildInitialStore();
    await writeStore(initialStore);
    return initialStore;
  }
}

async function writeStore(store: StorefrontStore) {
  await mkdir(path.dirname(storePath), { recursive: true });
  await writeFile(storePath, JSON.stringify({ ...store, updatedAt: now() }, null, 2));
}

export function getStorefrontSession(request: NextRequest) {
  return request.cookies.get(STOREFRONT_SESSION_COOKIE)?.value ?? `guest-${randomUUID()}`;
}

export function attachStorefrontSession(response: NextResponse, sessionId: string) {
  response.cookies.set(STOREFRONT_SESSION_COOKIE, sessionId, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
  });

  return response;
}

const getProductOrThrow = (store: StorefrontStore, slug: string) => {
  const product = store.products.find((item) => item.slug === slug);
  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

const summarizeCart = (store: StorefrontStore, sessionId: string) => {
  const lines = store.carts[sessionId] ?? [];
  const items = lines.map((line) => {
    const product = getProductOrThrow(store, line.productSlug);
    return {
      ...line,
      product,
      linePrice: product.price * line.quantity,
      lineMrp: product.mrp * line.quantity,
    };
  });
  const subtotal = items.reduce((total, item) => total + item.linePrice, 0);
  const mrp = items.reduce((total, item) => total + item.lineMrp, 0);
  const savings = Math.max(0, mrp - subtotal);
  const deliveryFee = subtotal === 0 || subtotal > 999 ? 0 : 79;

  return {
    sessionId,
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    subtotal,
    mrp,
    savings,
    deliveryFee,
    total: subtotal + deliveryFee,
    formatted: {
      subtotal: formatApiPrice(subtotal),
      mrp: formatApiPrice(mrp),
      savings: formatApiPrice(savings),
      deliveryFee: deliveryFee === 0 ? "Free" : formatApiPrice(deliveryFee),
      total: formatApiPrice(subtotal + deliveryFee),
    },
  };
};

export async function listStorefrontProducts() {
  const store = await readStore();
  return store.products;
}

export async function getStorefrontProduct(slug: string) {
  const store = await readStore();
  return store.products.find((product) => product.slug === slug) ?? null;
}

export async function getStorefrontCart(sessionId: string) {
  const store = await readStore();
  return summarizeCart(store, sessionId);
}

export async function addStorefrontCartItem(sessionId: string, productSlug: string, quantity = 1) {
  const store = await readStore();
  getProductOrThrow(store, productSlug);
  const lines = store.carts[sessionId] ?? [];
  const existing = lines.find((line) => line.productSlug === productSlug);

  if (existing) {
    existing.quantity = Math.min(99, existing.quantity + quantity);
  } else {
    lines.push({ productSlug, quantity: Math.max(1, quantity), addedAt: now() });
  }

  store.carts[sessionId] = lines;
  await writeStore(store);
  return summarizeCart(store, sessionId);
}

export async function updateStorefrontCartItem(sessionId: string, productSlug: string, quantity: number) {
  const store = await readStore();
  const lines = store.carts[sessionId] ?? [];
  store.carts[sessionId] =
    quantity <= 0
      ? lines.filter((line) => line.productSlug !== productSlug)
      : lines.map((line) =>
          line.productSlug === productSlug ? { ...line, quantity: Math.min(99, quantity) } : line,
        );
  await writeStore(store);
  return summarizeCart(store, sessionId);
}

export async function clearStorefrontCart(sessionId: string) {
  const store = await readStore();
  store.carts[sessionId] = [];
  await writeStore(store);
  return summarizeCart(store, sessionId);
}

const buildOrderEvents = (): StorefrontTrackingEvent[] => [
  {
    label: "Order placed",
    detail: "Payment route selected and order created.",
    time: "Just now",
    state: "complete",
  },
  {
    label: "Packed in recyclable mailer",
    detail: "Toreso fulfillment will pack this order with QR care labels and return-ready sleeve.",
    time: "Next checkpoint",
    state: "current",
  },
  {
    label: "Shipped",
    detail: "Tracking ID activates once the shipment leaves the fulfillment desk.",
    time: "Pending",
    state: "pending",
  },
  {
    label: "Out for delivery",
    detail: "Courier update appears here with estimated delivery window.",
    time: "Pending",
    state: "pending",
  },
  {
    label: "Delivered",
    detail: "Proof of delivery and return/replacement options appear here.",
    time: "Pending",
    state: "pending",
  },
];

export async function createStorefrontOrder(
  sessionId: string,
  input: {
    customer: StorefrontCustomer;
    address: StorefrontAddress;
    paymentMethod: string;
  },
) {
  const store = await readStore();
  const cart = summarizeCart(store, sessionId);

  if (cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  const orderSequence = String(store.orders.length + 1842).padStart(4, "0");
  const dateStamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const orderId = `TO-${dateStamp}-${orderSequence}`;
  const order: StorefrontOrder = {
    id: orderId,
    sessionId,
    status: "Order placed",
    placedOn: new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    total: cart.total,
    subtotal: cart.subtotal,
    savings: cart.savings,
    deliveryFee: cart.deliveryFee,
    paymentMethod: input.paymentMethod,
    courier: "Toreso PrimePack Logistics",
    trackingId: `TPX${Math.floor(100000000 + Math.random() * 899999999)}IN`,
    customer: input.customer,
    address: input.address,
    items: cart.items.map((item) => ({
      productSlug: item.productSlug,
      quantity: item.quantity,
      addedAt: item.addedAt,
      unitPrice: item.product.price,
      unitMrp: item.product.mrp,
      name: item.product.name,
      sku: item.product.sku,
    })),
    events: buildOrderEvents(),
  };

  store.orders.unshift(order);
  store.carts[sessionId] = [];
  await writeStore(store);
  return order;
}

export async function listStorefrontOrders(sessionId: string) {
  const store = await readStore();
  return store.orders.filter((order) => order.sessionId === sessionId || sessionId === "demo-session");
}

export async function getStorefrontOrder(id: string, sessionId?: string) {
  const store = await readStore();
  return (
    store.orders.find(
      (order) =>
        order.id.toLowerCase() === id.toLowerCase() &&
        (!sessionId || order.sessionId === sessionId || sessionId === "demo-session"),
    ) ?? null
  );
}

export async function trackStorefrontOrder(identifier: string, sessionId?: string) {
  const store = await readStore();
  return (
    store.orders.find(
      (order) =>
        (order.id.toLowerCase() === identifier.toLowerCase() ||
          order.trackingId.toLowerCase() === identifier.toLowerCase()) &&
        (!sessionId || order.sessionId === sessionId || sessionId === "demo-session"),
    ) ?? null
  );
}

export async function createReturnRequest(
  sessionId: string,
  input: {
    orderId: string;
    productSlug?: string;
    reason: string;
    resolution: "replacement" | "refund" | "repair-kit";
  },
) {
  const store = await readStore();
  const order = store.orders.find(
    (item) => item.id.toLowerCase() === input.orderId.toLowerCase() && item.sessionId === sessionId,
  );

  if (!order) {
    throw new Error("Order not found");
  }

  const request: StorefrontReturnRequest = {
    id: `RET-${String(store.returns.length + 1001)}`,
    sessionId,
    orderId: order.id,
    productSlug: input.productSlug,
    reason: input.reason,
    resolution: input.resolution,
    status: "submitted",
    createdAt: now(),
  };

  store.returns.unshift(request);
  await writeStore(store);
  return request;
}

export async function listReturnRequests(sessionId: string) {
  const store = await readStore();
  return store.returns.filter((request) => request.sessionId === sessionId || sessionId === "demo-session");
}
