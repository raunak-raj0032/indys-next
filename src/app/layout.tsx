import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "INDYS '26 — Indo-Nepal Diplomatic Youth Summit",
  description:
    "South Asia's first bilateral youth diplomacy conclave. 500+ delegates, 9 committees, 3 days. Siliguri, India — November 20–22, 2026.",
  keywords: ["MUN", "Model United Nations", "INDYS", "Indo-Nepal", "Siliguri", "diplomacy", "youth summit"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
