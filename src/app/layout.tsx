import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio — Minimalist",
  description: "A clean, minimalist black and white portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
