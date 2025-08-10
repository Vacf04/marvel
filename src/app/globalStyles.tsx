"use client";

import { createGlobalStyle, keyframes } from "styled-components";

export const ShowLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
}
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #333;
    --secondary-color: #444;
    --main-color: #e62429;
    --background-color:  #fff;
    --hover-main-color: #b31d22;

    --border-radius: 0.5rem;
    --transition: 0.3s;
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
  .App {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 10rem);
  }
  .AppBody {
    flex: 1;
    background-color: var(--background-color);
    color: var(--primary-color);
    padding-top: 5rem;
  }
`;
