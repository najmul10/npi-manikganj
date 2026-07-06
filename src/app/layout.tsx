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

const SITE_URL = "https://npimanikganj.edu.bd";
const SITE_NAME = "National Polytechnic Institute, Manikganj (NPI)";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Diploma in Engineering`,
    template: `%s | NPI Manikganj`,
  },
  description:
    "National Polytechnic Institute Manikganj (NPI) offers Diploma in Engineering across 8 departments — Computer, Civil, Electrical, Mechanical, Food, Textile, Architecture & Automobile. Scholarships, modern labs & job placement support.",
  keywords: [
    "NPI Manikganj",
    "National Polytechnic Institute Manikganj",
    "Diploma in Engineering",
    "Polytechnic Manikganj",
    "BTEB",
    "Technical Education Bangladesh",
    "Polytechnic admission Bangladesh",
    "Engineering diploma Manikganj",
    "Computer Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
  ],
  authors: [{ name: "NPI Manikganj" }],
  creator: "NPI Manikganj",
  publisher: "NPI Manikganj",
  applicationName: "NPI Manikganj",
  category: "Education",
  icons: {
    icon: "/npi-logo.jpg",
    apple: "/npi-logo.jpg",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — Diploma in Engineering`,
    description:
      "Diploma in Engineering across 8 departments with scholarships, modern labs & job placement support. Admission 2024-25 open.",
    siteName: "NPI Manikganj",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "National Polytechnic Institute, Manikganj — Diploma in Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Diploma in Engineering`,
    description:
      "Diploma in Engineering across 8 departments with scholarships, modern labs & job placement support.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export const viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: SITE_NAME,
              alternateName: "NPI Manikganj",
              url: SITE_URL,
              logo: `${SITE_URL}/npi-logo.jpg`,
              description:
                "National Polytechnic Institute Manikganj offers Diploma in Engineering across 8 departments.",
              foundingDate: "2001",
              address: {
                "@type": "PostalAddress",
                streetAddress: "173/3 Narangai, Manikganj Sadar",
                addressLocality: "Manikganj",
                addressRegion: "Dhaka",
                addressCountry: "BD",
              },
              telephone: "+8801735782829",
              email: "contact@npimanikganj.edu.bd",
              sameAs: [
                "https://www.facebook.com/NationalPolytechnicInstituteManikganj",
              ],
            }),
          }}
        />
      </head>
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
