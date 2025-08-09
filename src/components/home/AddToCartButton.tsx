import { useCart } from "@/context/CartContext";
import { MdAddShoppingCart } from "react-icons/md";
import styled from "styled-components";

const AddToCart = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const CartIcon = styled(MdAddShoppingCart)`
  width: 1.75rem;
  height: 1.75rem;
  transition: var(--transition);
  color: var(--primary-color);
  &:hover {
    color: var(--main-color);
  }
`;

export default function AddToCartButton({ comicId }: { comicId: number }) {
  const { addToCart } = useCart();

  return (
    <AddToCart onClick={() => addToCart(comicId)} aria-label="Add to cart">
      <CartIcon />
    </AddToCart>
  );
}
