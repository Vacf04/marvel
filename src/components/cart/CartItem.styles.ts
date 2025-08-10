'use client'
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdRemoveShoppingCart,
} from "react-icons/md";
import styled from "styled-components";
import { ImageContainer } from "../home/ComicCard.styles";

export const ItemImageContainer = styled(ImageContainer)`
  width: 0;
  height: 0;
  min-width: 150px;
  height: 225px;
  @media(max-width: 550px) {
  min-width: 100px;
  height: 150px;
  }
  @media(max-width: 310px) {
  min-width: 80px;
  height: 130px;
  }
`;


export const CartItemArticle = styled.article`
  display: flex;
  gap: 1rem;
`;

export const CartItemDescription = styled.div`
  width: 100%;
  font-size: 1.5rem;
  @media(max-width: 550px) {
  font-size: .85rem;
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