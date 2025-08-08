"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #f0f0f0;
    --secondary-color: #121212;
    --main-color: #e62429;
    --background-color: #212121;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-roboto), sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
  display: block;
  max-width: 100%;
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
    background-color: var(--background-color);
    color: var(--primary-color);
  }
`;
