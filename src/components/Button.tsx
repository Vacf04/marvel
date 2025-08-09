"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  background-color: var(--main-color);
  color: var(--background-color);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: var(--transition);
  &:hover {
    background-color: var(--hover-main-color);
  }
`;

export default function Button({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
