"use client";
import { createContext, useState, useContext, ReactNode } from "react";
import { useComics, ComicWithRarity } from "./ComicsContext";

export type CartContextProps = {
  cartItems: CartItemsComic[];
  addToCart: (comicId: number) => void;
  removeFromCart: (comicId: number) => void;
  discount: { value: number; type: string };
  applyCoupon: (couponCode: string) => void;
  plusQuantity: (comicId: number) => void;
  minusQuantity: (comicId: number) => void;
  message: string | null;
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
  const [message, setMessage] = useState<string | null>(null);
  const [discount, setDiscount] = useState({
    value: 0,
    type: "initial",
  });
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
      setMessage("Item Added To Cart");
      setTimeout(() => {
        setMessage(null);
      }, 500);
    }
  };

  const removeFromCart = (comicId: number) => {
    const comicToRemove = cartItems?.find((comic) => comic.id === comicId);
    if (comicToRemove) {
      setCartItems((prevItems) => {
        const cartItems = prevItems.filter((item) => item.id !== comicId);
        return cartItems;
      });
      setMessage("Item Removed From Cart");
      setTimeout(() => {
        setMessage(null);
      }, 500);
    }
  };

  const plusQuantity = (comicId: number) => {
    const comicToAdd = cartItems.find((comic) => comic.id === comicId);
    if (comicToAdd) {
      setCartItems((prevItems) => {
        return prevItems.map((item) =>
          item.id === comicId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      });
    }
  };

  const minusQuantity = (comicId: number) => {
    const comicToMinus = cartItems?.find((comic) => comic.id === comicId);
    if (comicToMinus) {
      if (comicToMinus.quantity === 1) return;
      setCartItems((prevItems) => {
        return prevItems.map((item) =>
          item.id === comicId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        );
      });
    }
  };

  const applyCoupon = (couponCode: string) => {
    if (couponCode === "RARE_COUPON") {
      const rareItems = cartItems.filter((item) => item.isRare);
      const rareDiscount = rareItems.length > 0 ? 0.2 : 0;
      setDiscount({
        value: rareDiscount,
        type: "RARE",
      });
    } else if (couponCode === "COMMON_COUPON") {
      const commonItems = cartItems.filter((item) => !item.isRare);
      const commonDiscount = commonItems.length > 0 ? 0.1 : 0;
      setDiscount({
        value: commonDiscount,
        type: "COMMON",
      });
    } else {
      setDiscount({
        value: 0,
        type: "NONE",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        discount,
        applyCoupon,
        plusQuantity,
        minusQuantity,
        message,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
