"use client";

import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";

const HeaderStyled = styled.header`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
`;

const CartIcon = styled(MdShoppingCart)`
  width: 2.25rem;
  height: 2.25rem;
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
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link href="/">
          <Image src={Logo} alt="Logo Marvel" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/cart">
                <CartIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </HeaderStyled>
  );
}
