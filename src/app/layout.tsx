import type { Metadata } from "next";
import { EB_Garamond, Source_Sans_3 } from "next/font/google";
import {
  createMetadata,
  defaultDescription,
  defaultTitle,
  siteName,
  siteUrl,
} from "@/lib/seo";
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
  ...createMetadata({
    title: defaultTitle,
    description: defaultDescription,
    path: "/",
    keywords: [
      "MUN",
      "Model United Nations",
      "Indo-Nepal",
      "Siliguri",
      "diplomacy",
      "youth summit",
      "India Nepal student conference",
    ],
  }),
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  authors: [{ name: "INDYS Secretariat" }],
  creator: "INDYS Secretariat",
  publisher: "INDYS Secretariat",
  category: "education",
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
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
