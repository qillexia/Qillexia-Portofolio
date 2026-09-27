import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mori = localFont({
  src: [
    {
      path: "../../public/fonts/PPMori-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mori",
  display: "swap",
});

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
    <html lang="id" className={mori.variable}>
      <body className="antialiased font-sans selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
