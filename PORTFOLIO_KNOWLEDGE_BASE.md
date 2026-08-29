# SHWET RANJAN — Flagship Web Application & Knowledge Base

> **Primary Domain**: [shwetranjan.com](https://shwetranjan.com)  
> **Repository Name**: `Shwet Ranjan Website`  
> **Technology Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, HTML5 Canvas (3D Math), Sharp Image Optimization, Lucide Icons.

---

## 1. Executive Summary & Persona

**Shwet Ranjan** is a multi-disciplinary business operator, tax compliance architect, AI/software engineer, and long-term intrinsic value investor.

- **Primary Persona**: Engineering scalable business operations, untangling complex Indian tax compliance frameworks (GST), building production-grade software platforms, and managing equity capital.
- **Core Value Proposition**: Turning operational friction into seamless, asymmetric business growth through automation, custom CRM architectures, and deep domain expertise.
- **Primary Contact Email**: `info@shwetranjan.com`
- **Location**: New Delhi / Patna / Kolkata, India (IST timezone).

---

## 2. Platform Architecture & Live Pages

### A. Main Portfolio Hub (`app/page.tsx` — `/`)
The primary single-page experience containing 10 high-impact interactive sections:
1. **Top Navbar & Scroll Progress**: Sticky glassmorphic navbar with active section spring tab indicators, live operational status pill (`5 Live Apps Online`), and `Cmd + K` search launcher.
2. **3D Hero Section**: Features an edge-to-edge (`100vw`) 3D Perspective Cyber Grid & Horizon Floor Canvas (`components/hero-3d-background.tsx`) reacting dynamically to mouse movement and scroll.
3. **Interactive Product Showcase (`#projects`)**: Live interactive simulators for built platforms with 3D tilt cards, category filters, architecture spec modals, and lazy-loaded simulators.
4. **Financial & Tax Calculators (`#calculators`)**: Dual-mode interactive calculators for **GST Cash Lock / ITC Delinquency Audit** and **D2C Net Realization / CM3 Contribution Margin**. Features `Intl.NumberFormat('en-IN')` formatting and one-click clipboard summary copying.
5. **Core Pillars (`#pillars`)**: 4 strategic domain pillars (Business Operations, Tax Compliance Architecture, Full-Stack Engineering, Intrinsic Value Investing).
6. **Journey & Philosophy (`#journey`)**: Milestone timeline spanning Stock Market Investing (2010) to E-Commerce GST Automation (2025–2026).
7. **Skills Matrix & Tech Stack (`#skills`)**: Categorized technical proficiency matrix across Tax Engines, Web Apps, Cloud Infrastructure, and AI/Automation.
8. **Public Equity Case Studies (`#stock-case-studies`)**: Fundamental valuation deep dives on **ITC Limited** and **HDFC Bank** with real-time stock quote API integration (`/api/stock-quote`).
9. **Editorial Insights (`#insights`)**: Essays on GST reconciliation, D2C unit economics, and AI automation leverage.
10. **Direct Channel Dock & Footer (`#contact`)**: Interactive inquiry message dispatcher (`/api/contact`), live India Standard Time (IST) digital clock, social channels, and `info@shwetranjan.com` copy tool.

---

### B. Intrinsic Value Equity Modeler (`app/investing-modeler/page.tsx` — `/investing-modeler`)
A dedicated Bloomberg/Koyfin-style equity valuation terminal hosted at `shwetranjan.com/investing-modeler`:
- **Live Stock Tickers**: Toggle between AAPL, MSFT, GOOGL, NVDA, and TSLA.
- **Valuation Engine**: Computes DCF Fair Value, Margin of Safety (%), Buffett Economic Moat Score, and Peter Lynch Fast-Grower Peg Ratio.
- **Interactive SVG Financial Curves**: Displays 5-year historical revenue vs intrinsic value trajectory.
- **Methodology Breakdown**: Deep dive into Buffett's Economic Moat Framework vs Lynch's Growth Rate criteria.

---

## 3. Performance & Low-Network Optimizations

1. **Next.js Image Optimization & HTTP Caching**:
   - Re-enabled image optimization in `next.config.mjs` with AVIF/WebP formats (`formats: ["image/avif", "image/webp"]`).
   - Enabled response compression (`compress: true`).
   - Configured 1-year immutable caching headers (`Cache-Control: public, max-age=31536000, immutable`) for static assets.

2. **Code Splitting & Dynamic Imports**:
   - Below-the-fold components in `app/page.tsx` (`BentoPillars`, `ProjectsShowcase`, `Calculators`, `JourneyPhilosophy`, `SkillsMatrix`, `LabExploring`, `StockCaseStudies`, `InsightsIndex`, `ContactFooter`, `ScrollVelocityMarquee`) are loaded asynchronously via `next/dynamic`.
   - Heavy modal simulators (`app-simulators.tsx`) inside `components/projects-showcase.tsx` are dynamically imported with `{ ssr: false }`.

3. **Asset Byte Size Compression**:
   - `/public/hero_background_sky.jpg` compressed from **879 KB to 263 KB** (70% size reduction) with 100% visual fidelity.
   - Cleaned up 1.55 MB of unused mountain JPEG files from `/public/`.
   - Added image preloading tag (`<link rel="preload" href="/hero_background_sky.jpg" as="image" />`) in `app/layout.tsx`.

---

## 4. Built Production Systems & Simulators

### 1. E-Commerce Tax & Government Template Filing Engine
- **Category**: Tax Compliance
- **Description**: Automated tax filing engine that ingests raw sales reports across all major e-commerce marketplaces (Flipkart, Amazon, Meesho, Myntra, Ajio, 1mg) and direct B2B/B2C feeds.
- **Core Functionality**: Auto-detects platform schemas, normalizes multi-state buyer tax liabilities, computes CGST/SGST/IGST breakdowns, and outputs government-compliant GSTR-1 and GSTR-3B audit templates.
- **Live URL**: [experts.taxamicus.in](https://experts.taxamicus.in)

### 2. Enterprise Tax Operations CRM
- **Category**: Business Operations / Software
- **Description**: Operational task management CRM built specifically for tax practitioners and e-commerce seller compliance teams.
- **Core Functionality**: Manages 324+ active client jobs, tracks filing deadlines, dispatches automated task alerts, and streamlines document collection.
- **Live URL**: [experts.taxamicus.in](https://experts.taxamicus.in)

### 3. Financial Invoicing Platform
- **Category**: E-Commerce & Invoicing
- **Description**: Dedicated cloud invoicing portal built for generating compliant B2B and B2C tax invoices, credit notes, and automated GSTR-1 JSON dumps.
- **Live URL**: [invoice.taxamicus.in](https://invoice.taxamicus.in)

### 4. VerifyReels.com (AI Video Fact-Checker)
- **Category**: AI & Technology
- **Description**: AI-powered platform for detecting viral video misinformation and automated WhatsApp verification bot.
- **Live URL**: [verifyreels.com](https://verifyreels.com)

### 5. GST Portal Chrome Extension
- **Category**: Chrome Extension / Automation
- **Description**: Browser extension that runs silently inside the official Indian GST portal (`gst.gov.in`).
- **Core Functionality**: Auto-checks notice history, highlights GSTR-1 vs GSTR-3B mismatch discrepancies, and warns of supplier filing delinquencies in real time.

---

## 5. Key Financial & Business Logic

### GST Cash Lock Formula
$$\text{Output Tax} = \frac{\text{Gross Sales} \times \text{Tax Rate}}{100}$$
$$\text{Raw ITC} = \frac{\text{Purchases} \times \text{Tax Rate}}{100}$$
$$\text{Locked ITC (GSTR-2B)} = \text{Raw ITC} \times \frac{\text{Delinquent Vendor \%}}{100}$$
$$\text{Eligible ITC} = \text{Raw ITC} - \text{Locked ITC}$$
$$\text{Net Cash Tax Payable} = \max(0, \text{Output Tax} - \text{Eligible ITC})$$

### D2C CM3 Net Realization Formula
$$\text{COD \%} = 100 - \text{Prepaid \%}$$
$$\text{RTO Freight Cost} = \text{Forward Freight} \times 1.6$$
$$\text{Weighted Freight Per Order} = \left(\text{Forward Freight} \times (1 - \text{RTO \%})\right) + \left(\text{RTO Freight} \times \text{RTO \%}\right)$$
$$\text{Gateway Fee} = \text{Selling Price} \times 2\%$$
$$\text{CM3 Margin Per Order} = \text{Selling Price} - \text{COGS} - \text{Weighted Freight} - \text{Gateway Fee} - \text{CAC}$$
$$\text{CM3 Margin \%} = \left(\frac{\text{CM3 Margin}}{\text{Selling Price}}\right) \times 100$$

---

## 6. Technical Codebase Structure

```
Shwet Ranjan Website/
├── app/
│   ├── api/
│   │   ├── contact/route.ts       # Contact message dispatcher endpoint
│   │   └── stock-quote/route.ts   # Live market quote proxy endpoint (Yahoo Finance + 60s cache)
│   ├── globals.css                # Global CSS variables, Plus Jakarta Sans font, custom scrollbar
│   ├── layout.tsx                 # Root layout, Google Font imports, metadata SEO & image preload
│   ├── page.tsx                   # Main 10-section portfolio hub (with dynamic code splitting)
│   └── investing-modeler/
│       └── page.tsx               # Dedicated Equity Valuation Terminal route (/investing-modeler)
├── components/
│   ├── app-simulators.tsx         # Interactive simulators for all 5 projects (Bloomberg terminal, GST engine, etc.)
│   ├── bento-pillars.tsx          # 4 Strategic Pillars cards
│   ├── browser-frame.tsx          # macOS-style window container wrapper
│   ├── calculators.tsx            # GST & D2C financial calculators with INR formatting
│   ├── command-palette.tsx        # Cmd + K search modal overlay
│   ├── contact-footer.tsx         # Direct message dispatcher, IST clock, info@shwetranjan.com copy tool
│   ├── custom-cursor.tsx          # Follower cursor with contextual text pills
│   ├── hero-3d-background.tsx     # HTML5 Canvas 3D Cyber Grid & Sci-Fi Horizon background engine
│   ├── hero.tsx                   # Main Hero typography, quick launchers, scroll indicator
│   ├── insights-index.tsx         # Editorial essays list
│   ├── journey-philosophy.tsx     # Career milestone timeline
│   ├── modal.tsx                  # Project architecture spec modal
│   ├── navbar.tsx                 # Top reading progress bar, navigation links with spring pill, Cmd+K trigger
│   ├── projects-showcase.tsx      # Projects grid with 3D tilt cards, category filters & dynamic app-simulators
│   ├── scroll-tracing-beam.tsx    # Animated SVG beam tracking page scroll
│   ├── scroll-velocity-marquee.tsx# Infinite tech stack marquee
│   ├── scroll-word-reveal.tsx     # Typography word-by-word scroll reveal
│   ├── skills-matrix.tsx          # Tech stack skill badges
│   ├── stock-case-studies.tsx     # Stock research case studies with live quote integration
│   └── smooth-scroll.tsx          # Lenis smooth scroll wrapper
├── data/
│   ├── insights.ts                # Editorial essays dataset
│   ├── projects.ts                # 5 flagship projects dataset
│   └── stock-case-studies.ts       # Stock research dataset
├── public/                        # Static assets (optimized images, icons, wallpapers)
├── next.config.mjs                # Next.js configuration (Image optimization, compression, cache headers)
├── tailwind.config.ts             # Tailwind CSS theme, colors, font mappings
├── tsconfig.json                  # TypeScript strict compiler config
└── package.json                   # Dependencies: Next 14, Framer Motion, Lucide React, Sharp
```

---

## 7. How to Use This Knowledge Base with Gemini / LLMs

You can upload or copy-paste this document into Gemini to ask questions such as:
- *"How does the GST Cash Lock calculation work in Shwet Ranjan's website?"*
- *"Where is the stock valuation terminal located, and what metrics does it calculate?"*
- *"How are low-network performance optimizations implemented in this Next.js app?"*
- *"What technologies are used for the 3D Hero canvas background?"*
- *"Draft a new blog essay on GST Section 16(4) compliance formatted for the Insights section."*
