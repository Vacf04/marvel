"use client";
import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  color: var(--primary-color);
`;

export default function Footer() {
  return (
    <FooterStyled>
      <p>©2025 MARVEL</p>
    </FooterStyled>
  );
}
