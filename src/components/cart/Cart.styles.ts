'use client'
import styled from "styled-components";
import { ShowLeft } from "@/app/globalStyles";

export const CartSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: ${ShowLeft} 0.3s forwards;
`;

export const CartSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  @media(max-width: 768px) {
  grid-template-columns: 1fr;
  }
`;

export const CartItemsTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1.75rem;
`;

export const ComicItemList = styled.li`
  margin-top: 1.25rem;
`;

export const CartComicsContainer = styled.div`
  background-color: var(--background-color);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  padding: 1.75rem;
  border-radius: var(--border-radius);
`;


export const CartEmptyContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CartEmptyTitle = styled.h1`
  margin-bottom: 1rem;
`;
