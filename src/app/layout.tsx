import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "../components/header/Header";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
