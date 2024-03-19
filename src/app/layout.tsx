import type { Metadata } from "next";
import { Ubuntu } from "next/font/google"; // Importe a fonte Poppins
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "FAEM - Faculdade Embu das Artes",
  description: "A Melhor Faculdade da Região de Embu das Artes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
