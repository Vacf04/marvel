"use client";

import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "@/context/CartContext";

type CartLinkProps = {
  cartquantity: string | number;
  displayquantity: "flex" | "none";
};

const HeaderStyled = styled.header`
  box-shadow: 0 1px 1px #0000001a;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
  background-color: var(--background-color);
  color: var(--primary-color);
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const CartLink = styled(Link)<CartLinkProps>`
  position: relative;
  display: "block";
  &::after {
    content: "${(props) => props.cartquantity}";
    position: absolute;
    top: -2rem;
    right: -0.75rem;
    width: 0.25rem;
    height: 0.25rem;
    color: var(--background-color);
    background-color: var(--primary-color);
    border-radius: 50%;
    display: ${(props) => props.displayquantity};
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
  }
`;

const CartIcon = styled(MdShoppingCart)`
  width: 2rem;
  height: 2rem;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  const { cartItems } = useCart();

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link href="/">
          <Image src={Logo} alt="Logo Marvel" />
        </Link>
        <nav>
          <ul>
            <li>
              <CartLink
                href="/cart"
                cartquantity={cartItems.length > 0 ? cartItems.length : ""}
                displayquantity={cartItems.length > 0 ? "flex" : "none"}
              >
                <CartIcon />
              </CartLink>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </HeaderStyled>
  );
}
