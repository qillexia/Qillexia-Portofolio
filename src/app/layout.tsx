import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { LanguageProvider } from "@/context";
import "./globals.css";

const mori = localFont({
  src: [
    {
      path: "../../public/fonts/PPMori-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-SemiBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-SemiBold.woff2",
      weight: "800",
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
      <body className={`${mori.className} antialiased selection:bg-neutral-900 selection:text-white`}>
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
