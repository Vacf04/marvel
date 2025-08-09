"use client";
import { createContext, useState, useContext, ReactNode } from "react";
import { useComics, ComicWithRarity } from "./ComicsContext";

export type CartContextProps = {
  cartItems: CartItemsComic[];
  addToCart: (comicId: number) => void;
  discount: number;
  applyCoupon: (couponCode: string) => void;
};

export type CartItemsComic = ComicWithRarity & {
  quantity: number;
};

export const CartContext = createContext<CartContextProps | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useContext must be used inside a Provider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemsComic[]>([]);
  const [discount, setDiscount] = useState(0);
  const { comics } = useComics();

  const addToCart = (comicId: number) => {
    const comicToAdd = comics?.find((comic) => comic.id === comicId);
    if (comicToAdd) {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === comicId);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === comicId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevItems, { ...comicToAdd, quantity: 1 }];
      });
    }
    console.log(cartItems);
  };

  const applyCoupon = (couponCode: string) => {
    if (couponCode === "RARE_COUPON") {
      const rareItems = cartItems.filter((item) => item.isRare);
      const rareDiscount = rareItems.length > 0 ? 0.2 : 0;
      setDiscount(rareDiscount);
    } else if (couponCode === "COMMON_COUPON") {
      const commonItems = cartItems.filter((item) => !item.isRare);
      const commonDiscount = commonItems.length > 0 ? 0.1 : 0;
      setDiscount(commonDiscount);
    } else {
      setDiscount(0);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, discount, applyCoupon }}
    >
      {children}
    </CartContext.Provider>
  );
};
