import type { InnovationProduct } from "@/data/innovationCatalog";
import { getInnovationProduct, innovationProducts } from "@/data/innovationCatalog";
import { cleanCatalogText } from "@/lib/catalog-copy";

export type CommerceProfile = {
  sku: string;
  mrp: number;
  price: number;
  discount: number;
  rating: string;
  reviews: number;
  boughtPastMonth: number;
  stock: string;
  deliveryPromise: string;
  fastDelivery: string;
  returnWindow: string;
  warranty: string;
  packOptions: string[];
  badges: string[];
  premiumBullets: string[];
  technicalSpecs: Array<{ label: string; value: string }>;
  boxContents: string[];
};

export type CartItem = {
  product: InnovationProduct;
  quantity: number;
  profile: CommerceProfile;
};

export type OrderEvent = {
  label: string;
  detail: string;
  time: string;
  state: "complete" | "current" | "pending";
};

export type CommerceOrder = {
  id: string;
  placedOn: string;
  status: string;
  promise: string;
  total: number;
  payment: string;
  courier: string;
  trackingId: string;
  address: string;
  items: CartItem[];
  events: OrderEvent[];
};

const getIndex = (slug: string) => {
  const index = innovationProducts.findIndex((product) => product.slug === slug);
  return index >= 0 ? index : 0;
};

const basePriceByTrack: Record<string, number> = {
  "Heat Sealing & Resealing Gadgets": 299,
  "Vacuum Sealing & Food Compression": 599,
  "Travel Packing & Clothes Compression": 699,
  "Bag Clips, Pour-Spouts & Resealable Closures": 149,
  "Reusable Silicone Solutions": 449,
  "Reusable & Eco Wraps (Beeswax / Fabric)": 349,
  "Fridge & Pantry Organization": 499,
  "Freshness & Moisture Control (VCI / desiccant reinvention)": 349,
  "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)": 299,
  "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)": 399,
  "Mini Stretch Film & Wrapping Reinventions": 249,
  "Bottle, Liquid & Beverage Sealing": 199,
  "Gift Wrapping & Presentation Innovations": 299,
  "Portion, Snack & Lunch Packaging": 349,
  "Cable, Cord & Tech Small-Item Containment": 199,
  "Label, Sticker & Identification Solutions": 179,
  "Home, Closet & Bathroom Storage Extensions": 449,
  "Seasonal, Novelty & Impulse \"Fun\" Packaging": 199,
  "Outdoor, Picnic & On-the-Go Packaging": 399,
  "Specialty Sealing & Preservation (advanced)": 549,
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const getCommerceProfile = (product: InnovationProduct): CommerceProfile => {
  const index = getIndex(product.slug);
  const basePrice = basePriceByTrack[product.track] ?? 299;
  const price = basePrice + (index % 5) * 40;
  const mrp = Math.round(price * (1.22 + (index % 4) * 0.03));
  const discount = Math.round(((mrp - price) / mrp) * 100);
  const rating = (4.4 + (index % 5) * 0.1).toFixed(1);
  const reviews = 180 + index * 17;
  const cleanName = cleanCatalogText(product.name);
  const cleanAisle = cleanCatalogText(product.aisle);
  const cleanInnovation = cleanCatalogText(product.b2cInnovation);
  const cleanAudience = cleanCatalogText(product.audience);
  const cleanOrigin = cleanCatalogText(product.b2bOrigin);
  const cleanFormat = cleanCatalogText(product.format);

  return {
    sku: `TOR-${product.categorySlug.slice(0, 3).toUpperCase()}-${String(index + 1).padStart(4, "0")}`,
    mrp,
    price,
    discount,
    rating,
    reviews,
    boughtPastMonth: 90 + (index % 9) * 35,
    stock: index % 7 === 0 ? "Only a few launch units left" : "In launch stock",
    deliveryPromise: index % 3 === 0 ? "Get it by tomorrow" : "Get it in 2-3 days",
    fastDelivery: index % 3 === 0 ? "Premium same-city dispatch" : "Priority recyclable dispatch",
    returnWindow: "10-day replacement for damaged or incorrect shipments",
    warranty: "6-month mechanism warranty on reusable parts",
    packOptions: ["Single unit", "Starter bundle", "Family pack", "Small-seller pack"],
    badges: [
      cleanCatalogText(product.launchPriority),
      cleanAisle,
      index % 2 === 0 ? "Premium drop" : "Innovation pick",
      index % 3 === 0 ? "Fast dispatch" : "Bundle eligible",
    ],
    premiumBullets: [
      cleanInnovation,
      `Designed for ${cleanAudience.toLowerCase()}.`,
      `Converts ${cleanOrigin.toLowerCase()} into a consumer-friendly ${cleanFormat.toLowerCase()}.`,
      "Premium Toreso finish with clear labels, refill logic, and recyclable outer packaging.",
    ],
    technicalSpecs: [
      ...product.specs.map((spec) => ({
        label: cleanCatalogText(spec.label),
        value: cleanCatalogText(spec.value),
      })),
      { label: "SKU", value: `TOR-${product.categorySlug.slice(0, 3).toUpperCase()}-${String(index + 1).padStart(4, "0")}` },
      { label: "Pack options", value: "Single, starter bundle, family pack, small-seller pack" },
      { label: "Replacement window", value: "10 days for transit damage or incorrect item" },
      { label: "Dispatch type", value: index % 3 === 0 ? "Premium same-city dispatch" : "Priority recyclable dispatch" },
      { label: "Packaging promise", value: "Ships in a return-ready recyclable mailer with QR care label" },
    ],
    boxContents: [
      cleanName,
      ...product.bundle.map((item) => cleanCatalogText(item).replace(/^\w/, (letter) => letter.toUpperCase())),
      "QR care and reuse card",
      "Return-ready shipping sleeve",
    ],
  };
};

const cartSlugs = [
  "toreso-snapseal-mini",
  "toreso-wraproller-mini",
  "honeywrap-roll",
  "toreso-dryhang-closet-bag",
];

export const cartItems: CartItem[] = cartSlugs
  .map((slug, index) => {
    const product = getInnovationProduct(slug);
    if (!product) {
      return null;
    }

    return {
      product,
      quantity: index === 0 ? 2 : 1,
      profile: getCommerceProfile(product),
    };
  })
  .filter((item): item is CartItem => Boolean(item));

export const cartSubtotal = cartItems.reduce(
  (total, item) => total + item.profile.price * item.quantity,
  0,
);

export const cartMrp = cartItems.reduce(
  (total, item) => total + item.profile.mrp * item.quantity,
  0,
);

export const cartSavings = cartMrp - cartSubtotal;

const orderItems = cartItems.slice(0, 3);

export const sampleOrders: CommerceOrder[] = [
  {
    id: "TO-2026-0627-1842",
    placedOn: "27 Jun 2026",
    status: "Out for delivery",
    promise: "Arriving today by 8 PM",
    total: orderItems.reduce((total, item) => total + item.profile.price * item.quantity, 0),
    payment: "UPI ending 0842",
    courier: "Toreso PrimePack Logistics",
    trackingId: "TPX784219560IN",
    address: "Chaitanya, Hyderabad, Telangana 500081",
    items: orderItems,
    events: [
      {
        label: "Order placed",
        detail: "Payment verified and order created.",
        time: "27 Jun, 10:24 AM",
        state: "complete",
      },
      {
        label: "Packed in recyclable mailer",
        detail: "Items were packed with honeycomb cushioning and return-ready sleeve.",
        time: "27 Jun, 12:10 PM",
        state: "complete",
      },
      {
        label: "Shipped",
        detail: "Shipment moved to Toreso PrimePack city hub.",
        time: "27 Jun, 2:35 PM",
        state: "complete",
      },
      {
        label: "Out for delivery",
        detail: "Courier partner is heading to the delivery address.",
        time: "Today, 5:40 PM",
        state: "current",
      },
      {
        label: "Delivered",
        detail: "Proof of delivery and QR care card will appear here.",
        time: "Expected by 8 PM",
        state: "pending",
      },
    ],
  },
  {
    id: "TO-2026-0625-1098",
    placedOn: "25 Jun 2026",
    status: "Delivered",
    promise: "Delivered on 26 Jun",
    total: 1187,
    payment: "Visa ending 4409",
    courier: "Toreso PrimePack Logistics",
    trackingId: "TPX783918420IN",
    address: "Chaitanya, Hyderabad, Telangana 500081",
    items: cartItems.slice(1, 4),
    events: [
      { label: "Order placed", detail: "Payment verified and order created.", time: "25 Jun, 9:05 AM", state: "complete" },
      { label: "Packed", detail: "Packed in premium return-ready packaging.", time: "25 Jun, 11:20 AM", state: "complete" },
      { label: "Shipped", detail: "Left Toreso fulfillment hub.", time: "25 Jun, 5:50 PM", state: "complete" },
      { label: "Delivered", detail: "Delivered to front desk.", time: "26 Jun, 2:12 PM", state: "complete" },
    ],
  },
];

export const getOrderById = (id: string) =>
  sampleOrders.find((order) => order.id.toLowerCase() === id.toLowerCase());
