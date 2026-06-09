import type { Metadata } from "next";
import { EB_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "INDYS '26 — Indo-Nepal Diplomatic Youth Summit",
  description:
    "South Asia's first bilateral youth diplomacy conclave. 500+ delegates, 10 committees, and a dedicated press corps across 3 days in Siliguri, India — November 20–22, 2026.",
  keywords: ["MUN", "Model United Nations", "INDYS", "Indo-Nepal", "Siliguri", "diplomacy", "youth summit"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${ebGaramond.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
