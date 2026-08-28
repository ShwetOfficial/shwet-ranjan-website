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
        { priceRange: "₹270 – ₹300", verdict: "🟢🟢 Attractive (Last Close: ₹272.50)", color: "text-emerald-400" },
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
        { priceRange: "₹730 – ₹800", verdict: "🟡 Fair Value (Last Close: ₹728.00)", color: "text-amber-300" },
        { priceRange: "₹650 – ₹730", verdict: "🟢 Accumulation Zone", color: "text-emerald-400" },
        { priceRange: "Below ₹600", verdict: "🟢🟢 High Safety Margin", color: "text-cyan-300" }
      ]
    }
  },
  {
    id: "infosys-ltd",
    ticker: "NSE: INFY",
    companyName: "Infosys Limited",
    sector: "IT Services & Enterprise AI Infrastructure",
    currentPrice: "₹1,143.65",
    intrinsicValueRange: "₹1,000 – ₹1,600",
    centralIntrinsicValue: "₹1,450",
    upsidePercentage: "+26.8% Upside",
    marginOfSafety: "21.1% Margin of Safety (Discount)",
    dividendYield: "4.2% Yield (₹48.00/share)",
    buffettVerdict: "VERY ATTRACTIVE — 8.8/10 Buffett Scorecard (21% Discount)",
    verdictBadge: "🟢 VERY ATTRACTIVE",
    verdictColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",

    researchDate: "28 August 2026",
    dataAsOf: "Includes FY26 Full-Year Numbers & FY27 Guidance Baseline",

    summaryHeader: "High ROE (31.6%), Zero Debt, Exceptional FCF (112.3% Conversion) — AI Uncertainty Creates 21% Margin of Safety",

    whyItFell: {
      title: "Why Has Infosys Fallen ~33.8% From Its ₹1,727.85 High?",
      description: "Infosys's decline is driven by market uncertainty over AI's impact on traditional billable-hour IT services economics, client contract renegotiations, and modest FY27 revenue guidance.",
      keyPoints: [
        "AI Disruption Anxiety: Investors fear AI will reduce billable engineer hours, compressing legacy contract sizes.",
        "Slower Short-Term Growth: FY27 management revenue guidance moderated to 1.5–3.5% constant currency growth.",
        "Outcome-Based Billing Shift: Enterprise clients pushing for performance-linked contracts over pure time-and-material.",
        "Macro Tech Spending Drag: Temporary slowdown in US banking and retail client discretionary cloud spend."
      ]
    },

    normalizedEarnings: {
      title: "Owner Earnings & Balance Sheet Fortification Baseline",
      description: "Infosys exhibits textbook Buffett financial quality: ~31.6% ROE achieved with ZERO debt and ₹43,075 Cr net cash liquidity.",
      metrics: [
        { label: "FY26 Free Cash Flow", value: "₹33,097 Cr (112.3% PAT Conversion)" },
        { label: "Return on Equity (ROE)", value: "31.6% (Unleveraged)" },
        { label: "Net Cash & Investments", value: "₹43,075 Cr (Zero Debt)" },
        { label: "Capital Return Policy", value: "85% 5-Yr FCF Payout (113.9% in FY26)" }
      ]
    },

    intrinsicModel: {
      method: "Buffett Owner Earnings & AI Scenario DCF Model",
      description: "Using ₹71.58 FY26 EPS, ₹33,097 Cr FCF (₹80.5/share FCF), 10% Discount Rate, and 10-Year Horizon:",
      scenarios: [
        { name: "🔴 Bear Case", condition: "AI Hurts Growth (2-3% EPS Growth)", intrinsicValue: "₹1,000 – ₹1,100", status: "bear" },
        { name: "🟡 Conservative", condition: "Modest Growth (~4% EPS Growth)", intrinsicValue: "₹1,200 – ₹1,300", status: "conservative" },
        { name: "🟢 Base Case", condition: "AI Neutral / Implementation (~5-6% Growth)", intrinsicValue: "₹1,450 / share", status: "base" },
        { name: "🔵 Bull Case", condition: "AI Growth Engine (8-10% EPS Growth)", intrinsicValue: "₹1,650 – ₹1,850", status: "bull" }
      ]
    },

    buffettFramework: {
      moatScore: "88/100 (Scale, High Switching Costs, 328k Engineers)",
      reinvestmentNote: "At ₹1,143.65 (16x P/E, 7.0% FCF yield), Infosys trades at a 21.1% discount to its ₹1,450 central intrinsic value. 85% FCF return policy provides high capital protection.",
      buyThresholds: [
        { priceRange: "₹1,600+", verdict: "🔴 Expensive", color: "text-red-400" },
        { priceRange: "₹1,450 – ₹1,600", verdict: "🟡 Fair Value", color: "text-amber-400" },
        { priceRange: "₹1,250 – ₹1,450", verdict: "🟢 Attractive", color: "text-emerald-300" },
        { priceRange: "₹1,100 – ₹1,250", verdict: "🟢🟢 Very Attractive (Last Close: ₹1,143.65)", color: "text-emerald-400" },
        { priceRange: "Below ₹1,100", verdict: "🟢🟢🟢 Exceptional Bargain Zone", color: "text-cyan-300" }
      ]
    }
  },
  {
    id: "tcs-ltd",
    ticker: "NSE: TCS",
    companyName: "Tata Consultancy Services",
    sector: "Global IT Services & Enterprise AI Transformation",
    currentPrice: "₹2,344.00",
    intrinsicValueRange: "₹1,700 – ₹3,300",
    centralIntrinsicValue: "₹2,400",
    upsidePercentage: "+2.4% Upside",
    marginOfSafety: "2.3% Margin of Safety (At Fair Value)",
    dividendYield: "2.7% Yield (₹62.00/share)",
    buffettVerdict: "FAIRLY VALUED — 9.0/10 Buffett Scorecard (Superior Moat, At Fair Value)",
    verdictBadge: "🟡 FAIR VALUE",
    verdictColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",

    researchDate: "28 August 2026",
    dataAsOf: "Includes FY26 Annual Report (₹145.99 EPS) & Q1 FY27 Results",

    summaryHeader: "Unrivaled Scale (585k Engineers), 10-Yr EPS 2.2x Growth, $2.6B AI Revenue — Superior Franchise Currently Trading at Fair Value",

    whyItFell: {
      title: "Why Has TCS Fallen ~30% From Its ₹3,336.70 High?",
      description: "TCS's decline reflects global IT spending caution, P/E multiple compression from 35.7x to 16.5x, and FY26's modest constant-currency revenue performance (-2.4% YoY).",
      keyPoints: [
        "Multiple Compression: Valuation P/E re-rated from 35.7x (FY22) down to 16.5x baseline.",
        "Macro Enterprise Drag: US & European corporate clients pausing discretionary technology cloud spending.",
        "AI Disruption Risk: Market anxiety surrounding legacy IT headcount reduction.",
        "Constant-Currency Slowdown: FY26 revenue declined 2.4% CC, though operating margins expanded."
      ]
    },

    normalizedEarnings: {
      title: "10-Year Earnings Consistency & AI Productivity Gains",
      description: "TCS has doubled net profit (₹26.2k Cr ➔ ₹52.8k Cr) over 10 years. In FY26, employee count dropped (608k ➔ 585k) while revenue grew (+9% revenue/employee).",
      metrics: [
        { label: "10-Yr EPS Growth", value: "₹66.71 ➔ ₹145.99 (2.2x)" },
        { label: "Q1 FY27 AI Revenue", value: "$2.6 Billion (+13.6% QoQ)" },
        { label: "Annual FCF Conversion", value: "106.7% of Net Income" },
        { label: "FY26 Shareholder Payout", value: "₹39,571 Crore (Dividends + Buyback)" }
      ]
    },

    intrinsicModel: {
      method: "Buffett FCF & Normalized Earnings DCF Model",
      description: "Using ₹145.99 FY26 EPS, ₹130-135 FCF/share, 10% Discount Rate, and 10-Year Horizon:",
      scenarios: [
        { name: "🔴 Bear Case", condition: "AI Disrupts Outsourcing (3% EPS Growth)", intrinsicValue: "₹1,700 – ₹1,950", status: "bear" },
        { name: "🟡 Conservative", condition: "Modest Growth (~4-5% EPS Growth)", intrinsicValue: "₹2,100 – ₹2,300", status: "conservative" },
        { name: "🟢 Base Case", condition: "AI Neutral / Outcome Billing (5-6% Growth)", intrinsicValue: "₹2,400 / share", status: "base" },
        { name: "🔵 Bull Case", condition: "AI Growth Engine (7-8% EPS Growth)", intrinsicValue: "₹2,800 – ₹3,300", status: "bull" }
      ]
    },

    buffettFramework: {
      moatScore: "95/100 (Unrivaled Scale, 66 $100M+ Clients, Tata Brand)",
      reinvestmentNote: "TCS is a superior business (9.0/10 vs Infosys 8.8/10), but at ₹2,344 it trades at fair value (~2% discount). Infosys at ₹1,144 offers a higher margin of safety (21%).",
      buyThresholds: [
        { priceRange: "₹2,800+", verdict: "🔴 Expensive", color: "text-red-400" },
        { priceRange: "₹2,400 – ₹2,800", verdict: "🟡 Fair Value (Last Close: ₹2,344.00)", color: "text-amber-300" },
        { priceRange: "₹2,100 – ₹2,400", verdict: "🟢 Reasonably Attractive", color: "text-emerald-300" },
        { priceRange: "₹1,900 – ₹2,100", verdict: "🟢🟢 Attractive Zone (21% Discount)", color: "text-emerald-400" },
        { priceRange: "Below ₹1,700", verdict: "🟢🟢🟢 Exceptional Safety Margin", color: "text-cyan-300" }
      ]
    }
  }
];
