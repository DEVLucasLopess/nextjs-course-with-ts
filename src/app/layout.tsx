import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estudo sobre Next.js",
  description: "Estudo sobre Next.js com TypeScript e Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-Br">
      <Header />
      <body className={montserrat.className}>{children}</body>
      <Footer />
    </html>
  );
}
