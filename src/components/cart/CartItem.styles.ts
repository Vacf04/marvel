'use client'
import Image from "next/image";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdRemoveShoppingCart,
} from "react-icons/md";
import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  min-width: 150px;
  height: 200px;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  @media(max-width: 550px) {
  min-width: 100px;
  height: 150px;
  }
  @media(max-width: 300px) {
  min-width: 80px;
  height: 130px;
  }
`;

export const ItemThumb = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 2;
  transition: var(--transition) ease-in-out;
  &:hover {
    transform: scale(1.025);
  }
`;

export const RareTag = styled.div`
  width: 4rem;
  height: 1rem;
  position: absolute;
  background-color: var(--secondary-color);
  top: 0.25rem;
  left: 0;
  z-index: 3;
  color: var(--main-color);
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.15rem 0.15rem 0;
`;


export const CartItemArticle = styled.article`
  display: flex;
  gap: 1rem;
`;

export const CartItemDescription = styled.div`
  font-size: 1.5rem;
  @media(max-width: 550px) {
  font-size: 1rem;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  @media(max-width: 550px) {
  gap: 0.5rem;
  }
`;

export const CartItemControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ControlButton = styled.button`
  transition: var(--transition);
  color: var(--primary-color);
  cursor: pointer;
  background-color: transparent;
  border: none;
  &:hover {
    color: var(--main-color);
  }
`;

export const PlusQuantityIcon = styled(MdKeyboardArrowRight)`
  width: 1.75rem;
  height: 1.75rem;
  @media(max-width: 550px) {
  width: 1.25rem;
  height: 1.25rem;
  }
`;

export const MinusQuantityIcon = styled(MdKeyboardArrowLeft)`
  width: 1.75rem;
  height: 1.75rem;
  @media(max-width: 550px) {
  width: 1.25rem;
  height: 1.25rem;
  }
`;
export const RemoveFromCartIcon = styled(MdRemoveShoppingCart)`
  width: 1.75rem;
  height: 1.75rem;
  @media(max-width: 550px) {
  width: 1.25rem;
  height: 1.25rem;
  }
`;