"use client";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Button from "../Button";
import ErrorMessage from "../helper/ErrorMessage";
import {
  ApplyCouponButton,
  CartComicsContainer,
  CartEmptyContent,
  CartEmptyTitle,
  CartItemsTitle,
  CartSection,
  CartSectionContent,
  CartSummary,
  CartSummaryTitle,
  CheckoutButton,
  ComicItemList,
  DiscountValue,
  FinalPrice,
  InputCoupon,
} from "./Cart.styles";

export default function Cart() {
  const { cartItems, discount, applyCoupon } = useCart();
  const [price, setPrice] = useState(0);
  const [totalDiscountValue, setTotalDiscountValue] = useState(0);
  const [couponInput, setCouponInput] = useState("");
  const [finalPrice, setFinalPrice] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleApplyCoupon = () => {
    applyCoupon(couponInput);
    setCouponInput("");
  };

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
          <CartEmptyTitle>Your Cart is Empty</CartEmptyTitle>
          <Button onClick={() => redirect("/")}>Go Buy</Button>
        </CartEmptyContent>
      </CartSection>
    );
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
          <CartSummaryTitle>Summary</CartSummaryTitle>
          <p>Comics Price: ${price}</p>
          {totalDiscountValue > 0 && (
            <DiscountValue>Cupom: - ${totalDiscountValue} </DiscountValue>
          )}
          <ErrorMessage error={errorMessage} />
          <InputCoupon
            type="text"
            value={couponInput}
            onChange={(e) => setCouponInput(e.currentTarget.value)}
            style={{ marginRight: ".2rem" }}
            placeholder="Type your coupon"
          />
          <ApplyCouponButton onClick={handleApplyCoupon}>
            APPLY
          </ApplyCouponButton>
          {!finalPrice || finalPrice <= 0 ? (
            <p>Final Price:</p>
          ) : (
            <FinalPrice>Final Price: ${finalPrice}</FinalPrice>
          )}
          <CheckoutButton>CHECKOUT</CheckoutButton>
        </CartSummary>
      </CartSectionContent>
    </CartSection>
  );
}
