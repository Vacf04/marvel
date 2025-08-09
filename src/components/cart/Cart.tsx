"use client";
import styled from "styled-components";
import { ShowLeft } from "@/app/globalStyles";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";

const CartSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: ${ShowLeft} 0.3s forwards;
`;

const CartSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
export default function Cart() {
  const { cartItems } = useCart();

  return (
    <CartSection>
      <CartSectionContent>
        {cartItems.length > 0 &&
          cartItems.map((item) => <CartItem item={item} key={item.id} />)}
      </CartSectionContent>
    </CartSection>
  );
}
