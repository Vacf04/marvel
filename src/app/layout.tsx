import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import StyledComponentsRegistry from "@/lib/styledComponents/registry";
import { GlobalStyle } from "./globalStyles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ComicsProvider } from "@/context/ComicsContext";
import { CartProvider } from "@/context/CartContext";

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marvel Comics",
  description: "Buy your marvel comic books!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.variable}`}>
        <StyledComponentsRegistry>
          <ComicsProvider>
            <CartProvider>
              <GlobalStyle />
              <div className="App">
                <Header />
                <main className="AppBody">{children}</main>
                <Footer />
              </div>
            </CartProvider>
          </ComicsProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
