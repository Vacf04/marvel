"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .App {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 10rem);
  }
  .AppBody {
    flex: 1;
  }
`;
