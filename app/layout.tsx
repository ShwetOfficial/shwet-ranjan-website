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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://shwetranjan.com/#person",
      "name": "Shwet Ranjan",
      "url": "https://shwetranjan.com",
      "email": "mailto:info@shwetranjan.com",
      "jobTitle": [
        "Tax Compliance Architect",
        "Software Engineer",
        "Intrinsic Value Investor",
        "Business Operator"
      ],
      "description": "Multi-disciplinary business operator, tax compliance architect, software engineer, and intrinsic value investor.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Delhi / Bihar / West Bengal",
        "addressLocality": "New Delhi / Patna / Kolkata"
      },
      "workLocation": [
        {
          "@type": "Place",
          "name": "New Delhi, India"
        },
        {
          "@type": "Place",
          "name": "Patna, India"
        },
        {
          "@type": "Place",
          "name": "Kolkata, India"
        }
      ],
      "sameAs": [
        "https://shwetranjan.com",
        "https://experts.taxamicus.in",
        "https://verifyreels.com"
      ]
    },
    {
      "@type": "ProfilePage",
      "@id": "https://shwetranjan.com/#profilepage",
      "url": "https://shwetranjan.com",
      "name": "SHWET RANJAN — Personal Flagship Hub",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://shwetranjan.com/#website",
        "url": "https://shwetranjan.com",
        "name": "Shwet Ranjan Website",
        "publisher": {
          "@id": "https://shwetranjan.com/#person"
        }
      },
      "mainEntity": {
        "@id": "https://shwetranjan.com/#person"
      }
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090b] text-[#FAFAF9] antialiased selection:bg-cobalt-700 selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

