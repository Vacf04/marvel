"use client";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Button from "../Button";
import {
  CartComicsContainer,
  CartEmptyContent,
  CartEmptyTitle,
  CartItemsTitle,
  CartSection,
  CartSectionContent,
} from "./Cart.styles";
import { ComicItemList } from "./Cart.styles";
import CartSummary from "./CartSummary";

export default function Cart() {
  const { cartItems, discount, applyCoupon } = useCart();
  const [price, setPrice] = useState(0);
  const [totalDiscountValue, setTotalDiscountValue] = useState(0);
  const [finalPrice, setFinalPrice] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const price = cartItems
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    setPrice(price);
  }, [cartItems]);

  useEffect(() => {
    setErrorMessage(null);
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
        if (discountRareValue === 0)
          setErrorMessage("Invalid Coupon for this items");
        const finalPriceRare = price - discountRareValue;
        setFinalPrice(finalPriceRare);
        setTotalDiscountValue(discountRareValue);
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
        if (discountCommonValue === 0)
          setErrorMessage("Invalid Coupon for this items");
        const finalPrice = price - discountCommonValue;
        setFinalPrice(finalPrice);
        setTotalDiscountValue(discountCommonValue);
        break;
      case "NONE":
        setFinalPrice(price);
        setTotalDiscountValue(0);
        setErrorMessage("Invalid Coupon");
        break;
      default:
        setFinalPrice(price);
        setTotalDiscountValue(0);
        setErrorMessage(null);
    }
  }, [discount, cartItems, price, totalDiscountValue]);

  if (cartItems.length <= 0)
    return (
      <CartSection>
        <CartEmptyContent>
          <CartEmptyTitle data-cy="cart-empty-title">
            Your Cart is Empty
          </CartEmptyTitle>
          <Button onClick={() => redirect("/")}>Go Buy</Button>
        </CartEmptyContent>
      </CartSection>
    );
  return (
    <CartSection>
      <CartSectionContent>
        <CartComicsContainer>
          <CartItemsTitle>Comic Books</CartItemsTitle>
          <ul data-cy="cart-comics-list">
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <ComicItemList key={item.id}>
                  <CartItem item={item} />
                </ComicItemList>
              ))}
          </ul>
        </CartComicsContainer>
        <CartSummary
          applyCoupon={applyCoupon}
          finalPrice={finalPrice}
          errorMessage={errorMessage}
          price={price}
          totalDiscountValue={totalDiscountValue}
        />
      </CartSectionContent>
    </CartSection>
  );
}
