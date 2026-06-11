import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating";
import VersionBadge from "../components/VersionBadge";
import { siteConfig } from "../config/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://panificadorabigpao.com.br"),
  title: "Big Pão | Panificadora e Confeitaria no Afonso Pena",
  description: siteConfig.description,
  openGraph: {
    title: "Big Pão — Tradição e sabor desde 1984",
    description: "Produtos para diferentes momentos do dia, encomendas e pedidos na unidade Afonso Pena, em São José dos Pinhais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-soft-white text-coffee">
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <VersionBadge />
      </body>
    </html>
  );
}
