'use client'

import styled from "styled-components";



export const ButtonPage = styled.button`
  background-color: transparent;
  border: none;
  transition: var(--transition);
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem;
  display: ${(props) => (props.disabled ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) =>
    props["aria-current"] === "page"
      ? "var(--main-color)"
      : "var(--primary-color)"};
  &:hover {
    color: var(--main-color);
  }

  @media (max-width: 350px) {
    padding: 0.25rem;
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`;

export const PaginationMenu = styled.nav`
  margin-top: 2rem;
`;
