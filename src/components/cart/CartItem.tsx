"use client";

import { CartItemsComic, useCart } from "@/context/CartContext";
import {
  CartItemArticle,
  CartItemControls,
  CartItemDescription,
  ControlButton,
  MinusQuantityIcon,
  PlusQuantityIcon,
  QuantityControl,
  RemoveFromCartIcon,
  ItemImageContainer,
} from "./CartItem.styles";
import { ComicThumb, RareTag } from "../home/ComicCard.styles";

export default function CartItem({ item }: { item: CartItemsComic }) {
  const { removeFromCart, plusQuantity, minusQuantity } = useCart();
  return (
    <CartItemArticle>
      <ItemImageContainer>
        {item.isRare && <RareTag data-cy="rare-item-cart">RARE</RareTag>}
        <ComicThumb
          src={item.thumbnail.path + "." + item.thumbnail.extension}
          alt={item.title + " thumb"}
          width={100}
          height={200}
        />
      </ItemImageContainer>
      <CartItemDescription>
        <h3>{item.title}</h3>
        <p>${item.price * item.quantity}</p>
        <CartItemControls>
          <QuantityControl>
            <ControlButton
              aria-label="Minus Quantity"
              onClick={() => minusQuantity(item.id)}
              data-cy="cart-item-minus"
            >
              <MinusQuantityIcon />
            </ControlButton>
            <p data-cy="cart-item-quantity">{item.quantity}</p>
            <ControlButton
              aria-label="Plus Quantity"
              onClick={() => plusQuantity(item.id)}
              data-cy="cart-item-plus"
            >
              <PlusQuantityIcon />
            </ControlButton>
          </QuantityControl>
          <ControlButton
            aria-label="Remove From Cart"
            onClick={() => removeFromCart(item.id)}
            data-cy="cart-item-remove"
          >
            <RemoveFromCartIcon />
          </ControlButton>
        </CartItemControls>
      </CartItemDescription>
    </CartItemArticle>
  );
}
