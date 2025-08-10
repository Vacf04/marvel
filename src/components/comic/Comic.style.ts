'use client'

import { ShowLeft } from "@/app/globalStyles";
import styled from "styled-components";
import { ImageContainer } from "../home/ComicCard.styles";
import Button from "../Button";


export const ComicSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: ${ShowLeft} 0.3s forwards;
`;

export const ComicSectionContent = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  gap: 2rem;
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const ImageContainerComic = styled(ImageContainer)`
  width: 400px;
  height: 600px;
  @media(max-width: 768px) {
    width: 100%;
  }
`;


export const ComicData = styled.div`
font-size: 1.5rem;
@media(max-width: 768px) {
    font-size: 1.25rem;
  }
@media(max-width: 400px) {
    font-size: 1rem;
  }
`;

export const ComicTitle = styled.h1`
margin-bottom: .5rem;
`

export const CardAddButton = styled(Button)`
    display:flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.25rem;
    margin-top: 1rem;
`;


export const ComicPrice = styled.p``
