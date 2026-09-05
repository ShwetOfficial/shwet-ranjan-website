import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import { Analytics } from "@vercel/analytics/next";

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
  title: "SHWET RANJAN — Enterprise Systems Architect & Tax Compliance Infrastructure",
  description: "Architecting enterprise operating systems, automated GST compliance frameworks, high-throughput software platforms, and quantitative capital allocation tools.",
  keywords: [
    "Shwet Ranjan",
    "Enterprise Systems Architect",
    "Tax Compliance Architecture",
    "GST Automation Engine",
    "E-Commerce Operations",
    "Enterprise CRM",
    "Capital Allocation",
    "Intrinsic Value DCF Valuation"
  ],
  authors: [{ name: "Shwet Ranjan" }],
  openGraph: {
    title: "SHWET RANJAN — Enterprise Systems & Financial Architecture",
    description: "Architecting enterprise operating systems, automated GST compliance, and high-throughput software platforms.",
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
      <body className="bg-[#0B0F17] text-[#FAFAF9] antialiased selection:bg-cobalt-700 selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}

