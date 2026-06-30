import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: string; // Product id
    name: string;
    sku: string;
    price: number;
    currency: string;
    quantity: number;
    supplierId: string;
    supplierName: string;
    imageUrl?: string;
    minOrderQuantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => void;
    getCartTotal: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (newItem) => {
                set((state) => {
                    const existingItem = state.items.find((i) => i.id === newItem.id);
                    if (existingItem) {
                        return {
                            items: state.items.map((i) =>
                                i.id === newItem.id
                                    ? { ...i, quantity: i.quantity + newItem.quantity }
                                    : i
                            ),
                        };
                    }
                    return { items: [...state.items, newItem] };
                });
            },
            removeItem: (id) => {
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                }));
            },
            updateQuantity: (id, quantity) => {
                set((state) => ({
                    items: state.items.map((i) =>
                        i.id === id ? { ...i, quantity: Math.max(i.minOrderQuantity, quantity) } : i
                    ),
                }));
            },
            clearCart: () => set({ items: [] }),
            getTotalItems: () => {
                // Zustand getter pattern
            },
            getCartTotal: () => {
            }
        }),
        {
            name: 'toreso-cart-storage', // unique name
        }
    )
);
