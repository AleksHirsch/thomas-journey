import localFont from "next/font/local";
import type { Metadata } from "next";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "./globals.css";

const font = localFont({
  weight: "400",
  style: "normal",
  preload: true,
  src: "../fonts/joystix/joystix.otf",
});

export const metadata: Metadata = {
  title: "(Pijacka) Przygoda Tomka",
  description: "Made you look!",
};

gsap.registerPlugin(useGSAP);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gray-900`}>{children}</body>
    </html>
  );
}
