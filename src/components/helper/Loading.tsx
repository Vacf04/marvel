"use client";

import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  width: 5rem;
  height: 5rem;
  background: transparent;
  border-radius: 50%;
  border-top: 0.5rem solid var(--main-color);
  border-right: 0.5rem solid transparent;
  border-left: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  animation: ${LoadingAnimation} 0.7s infinite;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
}
