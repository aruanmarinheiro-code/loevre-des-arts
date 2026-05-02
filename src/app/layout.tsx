import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loevre des Arts — Renaissance Series",
  description:
    "Museum-grade streetwear. Oversized t-shirts printed with masterpieces of the Italian Renaissance.",
  keywords: [
    "renaissance art",
    "oversized tee",
    "streetwear",
    "museum print",
    "art fashion",
  ],
  openGraph: {
    title: "Loevre des Arts",
    description: "Renaissance artifacts for modern uniforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <CartDrawer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
