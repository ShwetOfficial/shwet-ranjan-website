import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHWET RANJAN — Multi-Disciplinary Operator & Strategic Thinker",
  description: "Building scalable businesses, untangling complex tax frameworks (GST), and engineering digital leverage. Operator across Business, Taxation, E-Commerce, and Software Technology.",
  keywords: [
    "Shwet Ranjan",
    "Business Strategy",
    "Tax Compliance",
    "GST Architecture",
    "E-Commerce Operations",
    "Full-Stack Software",
    "Next.js Developer",
    "Intrinsic Value Investor"
  ],
  authors: [{ name: "Shwet Ranjan" }],
  openGraph: {
    title: "SHWET RANJAN — Personal Flagship Hub",
    description: "Building scalable businesses, untangling complex tax frameworks, and engineering digital leverage.",
    type: "website",
    locale: "en_US",
    siteName: "Shwet Ranjan",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable} ${jetbrains.variable} dark scroll-smooth`}>
      <head>
        <link rel="preload" href="/hero_background_sky.jpg" as="image" />
      </head>
      <body className="bg-[#09090b] text-[#FAFAF9] antialiased selection:bg-cobalt-700 selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

