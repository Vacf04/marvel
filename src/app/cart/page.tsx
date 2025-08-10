import Cart from "@/components/cart/Cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marvel Comics | Cart",
};

export default function CartPage() {
  return <Cart />;
}
