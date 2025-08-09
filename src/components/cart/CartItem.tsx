"use client";

import { CartItemsComic, useCart } from "@/context/CartContext";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  min-width: 150px;
  height: 200px;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

const ItemThumb = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 2;
  transition: var(--transition) ease-in-out;
  &:hover {
    transform: scale(1.025);
  }
`;

const CartItemArticle = styled.article`
  display: flex;
  gap: 1rem;
`;

const CartItemDescription = styled.div`
  font-size: 1.5rem;
`;

const CartItemControls = styled.div``;

export default function CartItem({ item }: { item: CartItemsComic }) {
  const { removeFromCart, plusQuantity, minusQuantity } = useCart();

  return (
    <CartItemArticle>
      <ImageContainer>
        <ItemThumb
          src={item.thumbnail.path + "." + item.thumbnail.extension}
          alt={item.title + " thumb"}
          width={100}
          height={200}
        />
      </ImageContainer>
      <CartItemDescription>
        <h3>{item.title}</h3>
        <p>${item.price * item.quantity}</p>
        <CartItemControls>
          <p>{item.quantity}</p>
          <button onClick={() => plusQuantity(item.id)}>plus</button>
          <button onClick={() => minusQuantity(item.id)}>minus</button>
          <button onClick={() => removeFromCart(item.id)}>remove</button>
        </CartItemControls>
      </CartItemDescription>
    </CartItemArticle>
  );
}
