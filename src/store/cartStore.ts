import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  productSlug?: string;
  name: string;
  sku: string;
  price: number;
  mrp?: number;
  discount?: number;
  currency: string;
  quantity: number;
  supplierId: string;
  supplierName: string;
  imageUrl?: string;
  minOrderQuantity: number;
  description?: string;
  deliveryPromise?: string;
  returnWindow?: string;
  aisle?: string;
  badges?: string[];
}

export type StorefrontOrderEvent = {
  label: string;
  detail: string;
  time: string;
  state: "complete" | "current" | "pending";
};

export type StorefrontOrder = {
  id: string;
  placedOn: string;
  status: string;
  promise: string;
  total: number;
  paymentMethod: string;
  courier: string;
  trackingId: string;
  address: {
    name: string;
    phone: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  items: CartItem[];
  events: StorefrontOrderEvent[];
};

type CheckoutInput = {
  customerName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  paymentMethod: string;
};

interface CartState {
  items: CartItem[];
  orders: StorefrontOrder[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: (input: CheckoutInput) => StorefrontOrder | null;
  getTotalItems: () => number;
  getCartTotal: () => number;
}

const clampQuantity = (item: CartItem, quantity: number) =>
  Math.max(item.minOrderQuantity || 1, Number.isFinite(quantity) ? Math.floor(quantity) : item.minOrderQuantity || 1);

const buildOrderEvents = (): StorefrontOrderEvent[] => [
  {
    label: "Order placed",
    detail: "Payment method selected and Toreso order created.",
    time: "Just now",
    state: "complete",
  },
  {
    label: "Packed in recyclable sleeve",
    detail: "Items will be packed with right-sized protection and a QR care card.",
    time: "Next",
    state: "current",
  },
  {
    label: "Dispatched",
    detail: "Tracking activates once the parcel leaves the Toreso launch hub.",
    time: "Pending",
    state: "pending",
  },
  {
    label: "Out for delivery",
    detail: "Courier partner will move the package to your delivery address.",
    time: "Pending",
    state: "pending",
  },
  {
    label: "Delivered",
    detail: "Replacement and return-ready packaging options remain available after delivery.",
    time: "Pending",
    state: "pending",
  },
];

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      orders: [],
      addItem: (newItem) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === newItem.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: clampQuantity(item, item.quantity + newItem.quantity) }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...newItem,
                productSlug: newItem.productSlug ?? newItem.id,
                quantity: clampQuantity(newItem, newItem.quantity),
              },
            ],
          };
        });
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      updateQuantity: (id, quantity) => {
        set((state) => {
          const currentItem = state.items.find((item) => item.id === id);

          if (!currentItem) {
            return state;
          }

          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.id !== id),
            };
          }

          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity: clampQuantity(item, quantity) } : item,
            ),
          };
        });
      },
      clearCart: () => set({ items: [] }),
      placeOrder: (input) => {
        const { items } = get();

        if (items.length === 0) {
          return null;
        }

        const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const deliveryFee = subtotal >= 999 ? 0 : 59;
        const orderNumber = Date.now().toString().slice(-7);
        const order: StorefrontOrder = {
          id: `TO-${new Date().getFullYear()}-${orderNumber}`,
          placedOn: new Intl.DateTimeFormat("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(new Date()),
          status: "Packing now",
          promise: "Dispatches in 24-48 hours",
          total: subtotal + deliveryFee,
          paymentMethod: input.paymentMethod,
          courier: "Toreso Circular Dispatch",
          trackingId: `TRS${orderNumber}IN`,
          address: {
            name: input.customerName,
            phone: input.phone,
            line1: input.line1,
            line2: input.line2,
            city: input.city,
            state: input.state,
            postalCode: input.postalCode,
            country: input.country,
          },
          items,
          events: buildOrderEvents(),
        };

        set((state) => ({
          items: [],
          orders: [order, ...state.orders].slice(0, 20),
        }));

        return order;
      },
      getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
      getCartTotal: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    {
      name: "toreso-cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        orders: state.orders,
      }),
    },
  ),
);
