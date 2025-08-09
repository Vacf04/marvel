"use client";
import styled from "styled-components";
import { ShowLeft } from "@/app/globalStyles";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

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
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

const CartItemsTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1.75rem;
`;

const ComicItemList = styled.li`
  margin-top: 1.25rem;
`;

const CartComicsContainer = styled.div`
  background-color: var(--background-color);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  padding: 1.75rem;
  border-radius: var(--border-radius);
`;

const CartSummary = styled.div`
  background-color: var(--background-color);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  padding: 1.75rem;
  border-radius: var(--border-radius);
  height: max-content;
`;

export default function Cart() {
  const { cartItems, discount, applyCoupon } = useCart();
  const [price, setPrice] = useState(0);
  const [couponInput, setCouponInput] = useState("");
  const [finalPrice, setFinalPrice] = useState<number | null>(null);

  useEffect(() => {
    const price = cartItems
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    setPrice(price);
  }, [cartItems]);

  useEffect(() => {
    switch (discount.type) {
      case "RARE":
        const discountRareValue = cartItems
          .filter((item) => item.isRare)
          .map((item) => {
            const discountValue = item.price * item.quantity * discount.value;
            return discountValue;
          })
          .reduce((acc, curr) => {
            return acc + curr;
          }, 0);
        const finalPriceRare = price - discountRareValue;
        setFinalPrice(finalPriceRare);
        break;
      case "COMMON":
        const discountCommonValue = cartItems
          .filter((item) => item.isRare === false)
          .map((item) => {
            const discountValue = item.price * item.quantity * discount.value;
            return discountValue;
          })
          .reduce((acc, curr) => {
            return acc + curr;
          }, 0);
        const finalPrice = price - discountCommonValue;
        setFinalPrice(finalPrice);
        break;
      default:
        setFinalPrice(price);
    }
  }, [discount, cartItems, price]);

  return (
    <CartSection>
      <CartSectionContent>
        <CartComicsContainer>
          <CartItemsTitle>Comic Books</CartItemsTitle>
          <ul>
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <ComicItemList key={item.id}>
                  <CartItem item={item} />
                </ComicItemList>
              ))}
          </ul>
        </CartComicsContainer>
        <CartSummary>
          <h1>Summary</h1>
          <p>Comics Price: {price}</p>
          {!finalPrice || finalPrice <= 0 ? (
            <p>Final Price:</p>
          ) : (
            <p>Final Price: {finalPrice}</p>
          )}
          <input
            type="text"
            value={couponInput}
            onChange={(e) => setCouponInput(e.currentTarget.value)}
          />
          <button onClick={() => applyCoupon(couponInput)}>Apply Coupon</button>
          <button>Checkout</button>
        </CartSummary>
      </CartSectionContent>
    </CartSection>
  );
}
