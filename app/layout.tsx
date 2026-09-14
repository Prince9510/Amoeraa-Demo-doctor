import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope, DM_Mono } from "next/font/google";
import "./globals.css";

import TopDemoBanner from "@/components/ui/TopDemoBanner";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingActionBar from "@/components/ui/FloatingActionBar";

const serifFont = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F5C5E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Dr. Julian Vance, MD | Aura Medical Pavilion",
    template: "%s | Aura Medical Pavilion",
  },
  description:
    "Private medical practice specializing in integrative internal medicine, advanced biomarker mapping, and proactive longevity care. Portfolio demonstration by Amperaa.",
  keywords: [
    "Private Medical Practice",
    "Integrative Medicine",
    "Preventive Health Mapping",
    "Biomarker Diagnostics",
    "Longevity Medicine",
    "Amperaa Portfolio Demo",
  ],
  authors: [{ name: "Amperaa Creative Studio" }],
  creator: "Amperaa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auramedical-demo.amperaa.com",
    title: "Dr. Julian Vance, MD | Aura Medical Pavilion",
    description:
      "Compassionate care. Backed by expertise. Thoughtful private medical practice demo by Amperaa.",
    siteName: "Aura Medical Pavilion",
    images: [
      {
        url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Dr. Julian Vance, MD - Aura Medical Pavilion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Julian Vance, MD | Aura Medical Pavilion",
    description: "Thoughtful private medical practice demo by Amperaa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-warm-bg text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
        <SmoothScroll>
          <CustomCursor />
          <TopDemoBanner />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingActionBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
