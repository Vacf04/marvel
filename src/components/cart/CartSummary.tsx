"use client";
import {
  ApplyCouponButton,
  CartSummarySection,
  CartSummaryTitle,
  CheckoutButton,
  ComicsValue,
  DiscountValue,
  FinalPrice,
  InputCoupon,
  PriceText,
  PriceValue,
} from "./CartSummary.styles";
import ErrorMessage from "../helper/ErrorMessage";
import { useState } from "react";

type CartSummary = {
  finalPrice: number | null;
  applyCoupon: (couponCode: string) => void;
  totalDiscountValue: number;
  price: number;
  errorMessage: string | null;
};

export default function CartSummary({
  finalPrice,
  applyCoupon,
  totalDiscountValue,
  price,
  errorMessage,
}: CartSummary) {
  const [couponInput, setCouponInput] = useState("");

  const handleApplyCoupon = () => {
    applyCoupon(couponInput);
    setCouponInput("");
  };

  return (
    <CartSummarySection>
      <CartSummaryTitle>Summary</CartSummaryTitle>
      <ComicsValue>
        <PriceText>Comic Price:</PriceText>${price}
      </ComicsValue>
      {totalDiscountValue > 0 && (
        <DiscountValue data-cy="message-coupon">
          Cupom: <PriceValue>- ${totalDiscountValue}</PriceValue>
        </DiscountValue>
      )}
      <ErrorMessage error={errorMessage} />
      <InputCoupon
        type="text"
        value={couponInput}
        onChange={(e) => setCouponInput(e.currentTarget.value)}
        style={{ marginRight: ".2rem" }}
        placeholder="Type your coupon"
      />
      <ApplyCouponButton onClick={handleApplyCoupon} data-cy="button-coupon">
        APPLY
      </ApplyCouponButton>
      {!finalPrice || finalPrice <= 0 ? (
        <PriceText>Final Price</PriceText>
      ) : (
        <FinalPrice>
          <PriceText>Final Price:</PriceText>
          <PriceValue>${finalPrice}</PriceValue>
        </FinalPrice>
      )}
      <CheckoutButton>CHECKOUT</CheckoutButton>
    </CartSummarySection>
  );
}
