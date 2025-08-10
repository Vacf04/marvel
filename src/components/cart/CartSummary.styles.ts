'use client'
import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";


export const CartSummarySection = styled.div`
  background-color: var(--background-color);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  padding: 1.75rem;
  border-radius: var(--border-radius);
  height: max-content;

  font-size: 1.25rem;
`;

export const CartSummaryTitle = styled.h1`
  margin-bottom: 0.75rem;
`;


export const CheckoutButton = styled(Button)`
  margin-top: 0.5rem;
  width: 100%;
  font-size: 1.25rem;
`;

export const ApplyCouponButton = styled(Button)`
  margin-top: 0.5rem;
  width: 100%;
  font-size: 1.25rem;
`;

export const InputCoupon = styled(Input)`
  margin-top: 1rem;
  font-size: 1.25rem;
`;

export const  DiscountValue = styled.p`
  color: #116430d9;
`;

export const  FinalPrice = styled.p`
  margin-top: 2rem;
  color: #116430d9;
`;
