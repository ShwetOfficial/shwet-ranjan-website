export interface ValuationScenario {
  name: string;
  condition: string;
  intrinsicValue: string;
  status: "bear" | "conservative" | "base" | "bull";
}

export interface BuyThreshold {
  priceRange: string;
  verdict: string;
  color: string;
}

export interface StockCaseStudy {
  id: string;
  ticker: string;
  companyName: string;
  sector: string;
  currentPrice: string;
  intrinsicValueRange: string;
  centralIntrinsicValue: string;
  upsidePercentage: string;
  marginOfSafety: string;
  dividendYield: string;
  buffettVerdict: string;
  verdictBadge: string;
  verdictColor: string;
  
  // Archival & Compliance Dates
  researchDate: string;
  dataAsOf: string;
  
  // Public-Friendly 4-Part Summary
  summaryHeader: string;
  whyItFell: {
    title: string;
    description: string;
    keyPoints: string[];
  };
  normalizedEarnings: {
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
  };
  intrinsicModel: {
    method: string;
    description: string;
    scenarios: ValuationScenario[];
  };
  buffettFramework: {
    moatScore: string;
    reinvestmentNote: string;
    buyThresholds: BuyThreshold[];
  };
}

export const stockCaseStudiesData: StockCaseStudy[] = [
  {
    id: "itc-ltd",
    ticker: "NSE: ITC",
    companyName: "ITC Limited",
    sector: "FMCG & Consumer Staples",
    currentPrice: "₹272",
    intrinsicValueRange: "₹350 – ₹390",
    centralIntrinsicValue: "₹368",
    upsidePercentage: "+35%",
    marginOfSafety: "26% Margin of Safety",
    dividendYield: "5.3% Yield (₹14.50/share)",
    buffettVerdict: "ATTRACTIVE ENTRY — High FCF & Dividend Cushion",
    verdictBadge: "🟢 ATTRACTIVE",
    verdictColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",

    researchDate: "26 August 2026",
    dataAsOf: "Includes FY26 Full-Year & Q1 FY27 Numbers",

    summaryHeader: "High FCF Generation + 5.3% Dividend Yield vs Temporary Cigarette Tax Shock",
    
    whyItFell: {
      title: "Why Has ITC Fallen ~36% From Its ₹426 Peak?",
      description: "The primary trigger was the sharp cigarette tax hike effective Feb 1, 2026 (40% GST + additional excise). Cigarettes generate the vast majority of ITC's operating profits.",
      keyPoints: [
        "Tax Shock: GST increased to 40% + excise duty, squeezing short-term cigarette margins.",
        "Q1 FY27 Earnings Impact: Standalone PAT fell 27% YoY as volume dropped ~4-5%.",
        "Market Overreaction: Investors panicked about cigarette profits, driving the stock down from ₹426 to ~₹270.",
        "Recovery Catalyst: Post-Q1, stock rebounded +4% as volumes proved more resilient than feared."
      ]
    },

    normalizedEarnings: {
      title: "Buffett Owner Earnings & Cash Generation",
      description: "Unlike high-capex industrials, ITC generates massive Free Cash Flow (FCF) with minimal reinvestment required just to maintain operations.",
      metrics: [
        { label: "FY26 Normalized EPS", value: "₹16.20 / share" },
        { label: "FY26 Operating Cash Flow", value: "₹18,464 Crore" },
        { label: "FY26 Free Cash Flow (FCF)", value: "₹16,300 Crore" },
        { label: "FY26 ROE (Return on Equity)", value: "~29% (Ultra-Low Debt)" }
      ]
    },

    intrinsicModel: {
      method: "10-Year Conservative DCF (Owner Earnings)",
      description: "Assuming a conservative 6% long-term EPS growth rate and a 10% discount rate with 5% terminal growth:",
      scenarios: [
        { name: "🔴 Bear Case", condition: "4% Growth (Persistent Tax Pressure)", intrinsicValue: "₹310 – ₹320", status: "bear" },
        { name: "🟡 Conservative", condition: "5% Growth (Modest Re-rating)", intrinsicValue: "₹335 – ₹350", status: "conservative" },
        { name: "🟢 Base Case", condition: "6% Growth (Historical Reinvestment)", intrinsicValue: "₹368 / share", status: "base" },
        { name: "🔵 Optimistic", condition: "7-8% Growth (FMCG Margin Expansion)", intrinsicValue: "₹395 – ₹430", status: "bull" }
      ]
    },

    buffettFramework: {
      moatScore: "94/100 (Unrivaled Distribution Moat)",
      reinvestmentNote: "ITC's 5.3% current dividend yield provides an immediate cash return while waiting for valuation re-rating to ₹368.",
      buyThresholds: [
        { priceRange: "₹400+", verdict: "🔴 Expensive", color: "text-red-400" },
        { priceRange: "₹350 – ₹400", verdict: "🟡 Fairly Valued", color: "text-amber-400" },
        { priceRange: "₹300 – ₹350", verdict: "🟢 Reasonably Attractive", color: "text-emerald-300" },
        { priceRange: "₹270 – ₹300", verdict: "🟢🟢 Attractive (Current: ₹272)", color: "text-emerald-400" },
        { priceRange: "Below ₹240", verdict: "🟢🟢🟢 Exceptional Value", color: "text-cyan-300" }
      ]
    }
  },
  {
    id: "hdfc-bank",
    ticker: "NSE: HDFCBANK",
    companyName: "HDFC Bank Limited",
    sector: "Banking & Financial Services",
    currentPrice: "₹728",
    intrinsicValueRange: "₹730 – ₹750",
    centralIntrinsicValue: "₹734",
    upsidePercentage: "At Fair Value",
    marginOfSafety: "0% Margin of Safety (At Fair Value)",
    dividendYield: "1.8% Yield",
    buffettVerdict: "FAIRLY VALUED — Watch ROE Recovery to 15-16%",
    verdictBadge: "🟡 FAIR VALUE",
    verdictColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",

    researchDate: "26 August 2026",
    dataAsOf: "Includes FY26 Full-Year & Q1 FY27 Numbers",

    summaryHeader: "Great Franchise at Fair Value — Intrinsic Expansion Hinges on ROE Normalization",

    whyItFell: {
      title: "Why Has HDFC Bank Fallen ~29% From Its ₹1,020 High?",
      description: "HDFC Bank's decline is driven by post-merger integration digestion, compressed Net Interest Margins (NIM), and heavy foreign institutional (FII) selling.",
      keyPoints: [
        "Post-Merger Digestion: Market expecting stronger post-merger loan growth than FY26's +7.9% net profit.",
        "Margin Compression: NIM compressed to 3.26% due to funding cost and deposit competition pressures.",
        "Heavy FII Selling: Foreign ownership dropped from 48.39% (Sep 2025) to 41.83% (Jun 2026).",
        "ROE Compression: Q1 FY27 ROE dipped to ~13.8% vs historical 17-18% benchmark."
      ]
    },

    normalizedEarnings: {
      title: "Residual Earnings & Book Value Baseline",
      description: "For banks, value is determined by excess return on equity (ROE) above the cost of capital (11.5%).",
      metrics: [
        { label: "Book Value per Share", value: "₹390 / share" },
        { label: "Current Price to Book (P/B)", value: "1.86x BV" },
        { label: "Q1 FY27 PAT", value: "₹19,060 Crore (+5% YoY)" },
        { label: "Q1 FY27 Advances & Deposits", value: "+15.4% / +13.3% YoY" }
      ]
    },

    intrinsicModel: {
      method: "Buffett Residual Earnings & Excess Return Model",
      description: "Using ₹390 Book Value, 11.5% Cost of Equity, and 10-Year Reinvestment Horizon:",
      scenarios: [
        { name: "🔴 Bear Case", condition: "13.5% ROE (Stagnant Margins)", intrinsicValue: "₹560", status: "bear" },
        { name: "🟡 Conservative", condition: "14.0% ROE (Slow NIM Recovery)", intrinsicValue: "₹618", status: "conservative" },
        { name: "🟢 Base Case", condition: "15.0% ROE (Current Baseline)", intrinsicValue: "₹734 / share", status: "base" },
        { name: "🔵 Bull Case", condition: "16-17% ROE (Post-Merger Synergies)", intrinsicValue: "₹832 – ₹930", status: "bull" }
      ]
    },

    buffettFramework: {
      moatScore: "91/100 (CASA & Low-Cost Deposit Moat)",
      reinvestmentNote: "At ₹728, HDFC Bank is at fair value. True upside requires ROE expanding back from 13.8% toward 16%.",
      buyThresholds: [
        { priceRange: "₹900+", verdict: "🔴 Expensive", color: "text-red-400" },
        { priceRange: "₹800 – ₹900", verdict: "⚠️ Requires ROE Evidence", color: "text-amber-400" },
        { priceRange: "₹730 – ₹800", verdict: "🟡 Fair Value (Current: ₹728)", color: "text-amber-300" },
        { priceRange: "₹650 – ₹730", verdict: "🟢 Accumulation Zone", color: "text-emerald-400" },
        { priceRange: "Below ₹600", verdict: "🟢🟢 High Safety Margin", color: "text-cyan-300" }
      ]
    }
  }
];
