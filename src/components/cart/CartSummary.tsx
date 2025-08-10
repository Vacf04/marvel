"use client";
import {
  ApplyCouponButton,
  CartSummarySection,
  CartSummaryTitle,
  CheckoutButton,
  DiscountValue,
  FinalPrice,
  InputCoupon,
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
      <p>Comics Price: ${price}</p>
      {totalDiscountValue > 0 && (
        <DiscountValue data-cy="message-coupon">
          Cupom: - ${totalDiscountValue}{" "}
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
        <p>Final Price:</p>
      ) : (
        <FinalPrice>Final Price: ${finalPrice}</FinalPrice>
      )}
      <CheckoutButton>CHECKOUT</CheckoutButton>
    </CartSummarySection>
  );
}
