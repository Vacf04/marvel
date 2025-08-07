import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import StyledComponentsRegistry from "@/lib/styledComponents/registry";
import "./globals.css";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marvel Comics",
  description: "Buy your marvel comic books!",
};

const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
`;

const AppBody = styled.main`
  flex: 1;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <App>
            <AppBody>{children}</AppBody>
          </App>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
