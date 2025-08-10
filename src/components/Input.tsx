"use client";

import { InputHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  border: 0.015rem solid var(--primary-color);
  background-color: var(--background-color);
  color: var(--primary-color);
  padding: 0.75rem;
  font-weight: normal;
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: var(--transition);
  display: block;
  width: 100%;
  &:hover {
    border: 0.015rem solid var(--main-color);
  }
  &:focus {
    border: 0.015rem solid var(--main-color);
    outline: none;
  }
`;

export default function Input({
  ...props
}: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>) {
  return <InputStyled {...props} data-cy="input" />;
}
