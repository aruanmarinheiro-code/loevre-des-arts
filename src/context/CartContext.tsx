"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { CartItem, Product, Size } from "@/types";

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size: Size) => void;
  removeItem: (productId: string, size: Size) => void;
  updateQuantity: (productId: string, size: Size, quantity: number) => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product: Product, size: Size) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.size === size
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, size: Size) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.size === size))
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, size: Size, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, size);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.product.id === productId && i.size === size
            ? { ...i, quantity }
            : i
        )
      );
    },
    [removeItem]
  );

  const total = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
