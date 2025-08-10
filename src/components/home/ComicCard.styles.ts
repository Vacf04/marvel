'use client'
import styled from "styled-components";
import Image from "next/image";

export const ImageContainer = styled.div`
  position: relative;
  width: 225px;
  height: 365px;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

export const ComicThumb = styled(Image)`
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

export const ComicTitle = styled.h3`
  max-width: 22ch;
  margin-top: 0.75rem;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  color: var(--secondary-color);
`;
