"use client";

import { CartItemsComic, useCart } from "@/context/CartContext";
import {
  CartItemArticle,
  CartItemControls,
  CartItemDescription,
  ControlButton,
  ImageContainer,
  ItemThumb,
  MinusQuantityIcon,
  PlusQuantityIcon,
  QuantityControl,
  RemoveFromCartIcon,
} from "./CartItem.styles";

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
          <QuantityControl>
            <ControlButton
              aria-label="Minus Quantity"
              onClick={() => minusQuantity(item.id)}
            >
              <MinusQuantityIcon />
            </ControlButton>
            <p>{item.quantity}</p>
            <ControlButton
              aria-label="Plus Quantity"
              onClick={() => plusQuantity(item.id)}
            >
              <PlusQuantityIcon />
            </ControlButton>
          </QuantityControl>
          <ControlButton
            aria-label="Remove From Cart"
            onClick={() => removeFromCart(item.id)}
          >
            <RemoveFromCartIcon />
          </ControlButton>
        </CartItemControls>
      </CartItemDescription>
    </CartItemArticle>
  );
}
