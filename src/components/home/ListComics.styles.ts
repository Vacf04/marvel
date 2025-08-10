'use client'

import styled from "styled-components";
import { ShowLeft } from "@/app/globalStyles";

export const ComicsSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: ${ShowLeft} 0.3s forwards;
`;

export const ComicsSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const ComicsList = styled.ul`
  display: grid;
  justify-items: center;
  row-gap: 2rem;
  column-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;