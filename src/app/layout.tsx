import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Reclaimed Relics — Handcrafted Lampshades & Vintage Furnishings",
  description:
    "Handcrafted custom lampshades made with character. From bold patterns to quiet neutrals, find a shade that feels like home.",
  openGraph: {
    title: "Reclaimed Relics — Handcrafted Lampshades",
    description: "Handcrafted custom lampshades made with character.",
    images: ["/images/hero-living-room.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ivory text-charcoal font-sans antialiased selection:bg-camel selection:text-charcoal">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
