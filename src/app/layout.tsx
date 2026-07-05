import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "National Polytechnic Institute, Manikganj (NPI) — Diploma in Engineering",
  description:
    "National Polytechnic Institute Manikganj (NPI) offers Diploma in Engineering across 8 departments — Computer, Civil, Electrical, Mechanical, Food, Textile, Architecture & Automobile. Scholarships, job guarantee & modern labs.",
  keywords: [
    "NPI Manikganj",
    "National Polytechnic Institute",
    "Diploma in Engineering",
    "Polytechnic Manikganj",
    "BTEB",
    "Technical Education Bangladesh",
  ],
  authors: [{ name: "NPI Manikganj" }],
  icons: {
    icon: "https://npimanikganj.edu.bd/wp-content/uploads/2023/09/logo.png",
  },
  openGraph: {
    title: "National Polytechnic Institute, Manikganj (NPI)",
    description:
      "Diploma in Engineering across 8 departments with scholarships, modern labs & job placement support.",
    siteName: "NPI Manikganj",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </body>
    </html>
  );
}
