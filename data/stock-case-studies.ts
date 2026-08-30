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

export interface DetailedSegment {
  name: string;
  revenue: string;
  profit: string;
  margin: string;
  quality: string;
}

export interface ScorecardItem {
  factor: string;
  score: string;
  comment?: string;
}

export interface DetailedAnalysis {
  investingStyle: "Peter Lynch" | "Warren Buffett";
  classification: string;
  threeSentenceStory: string;
  segmentBreakdown: DetailedSegment[];
  moatBreakdown: {
    score: string;
    points: string[];
    caveats: string[];
  };
  quarterlySignalQ1FY27: {
    revenue: string;
    revenueGrowth: string;
    pat: string;
    patGrowth: string;
    marginCompressionReason: string;
  };
  growthTriggers: string[];
  tenbaggerAnalysis: {
    targetMarketCap: string;
    requiredPAT: string;
    yearsAt12Percent: string;
    yearsAt15Percent: string;
    verdict: string;
  };
  scuttlebuttVerdict: string;
  lynchScorecard: ScorecardItem[];
  lynchVerdictSummary: string;
  fiveThingsToWatch: string[];
  risksAndGovernance?: string[];
}

export interface StockCaseStudy {
  id: string;
  ticker: string;
  companyName: string;
  sector: string;
  qualityScore: string;
  qualityTag: string;
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
  
  // Framework Designation (Buffett vs Lynch)
  framework?: "Peter Lynch" | "Warren Buffett";
  frameworkBadge?: string;

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

  // Optional Rich Deep-Dive Detailed Analysis
  fullAnalysis?: DetailedAnalysis;
}

export const stockCaseStudiesData: StockCaseStudy[] = [
  {
    id: "irctc-ltd",
    ticker: "NSE: IRCTC",
    companyName: "IRCTC Limited",
    sector: "Monopoly Railway E-Commerce & Catering (PSU)",
    qualityScore: "9.0/10",
    qualityTag: "Digital Toll Booth & Monopoly Moat",
    currentPrice: "₹485.65",
    intrinsicValueRange: "₹563 – ₹983",
    centralIntrinsicValue: "₹768",
    upsidePercentage: "+58.1% Upside",
    marginOfSafety: "36.8% Margin of Safety",
    dividendYield: "1.8% Yield (₹8.75/share)",
    buffettVerdict: "BUY-WATCHLIST (PETER LYNCH STALWART) — 9.0/10 Business Quality (27.9x P/E, ~37% Margin of Safety to Base ₹768 Intrinsic Value)",
    verdictBadge: "🟢 BUY-WATCHLIST",
    verdictColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",

    researchDate: "28 August 2026",
    dataAsOf: "Includes Q1 FY27 (June 2026) Results & FY26 Full-Year Financials",

    framework: "Peter Lynch",
    frameworkBadge: "🟢 PETER LYNCH STALWART",

    summaryHeader: "Peter Lynch Stalwart (~27.9x P/E, 9.5/10 Moat, 46% ROCE) — Regulated Digital Toll Booth with Catering & Tourism Growth Optionality",

    whyItFell: {
      title: "Why Is IRCTC Trading at ₹485.65 (~27.9x P/E) After Slower PAT Growth?",
      description: "IRCTC has matured from a Fast Grower into a High-Quality Stalwart. While FY26 revenue grew 11.6% (₹5,215 Cr), PAT growth slowed to 5.9% (₹1,393 Cr). In Q1 FY27, revenue surged +18.1% (₹1,369.5 Cr), but PAT stayed flat (-0.2% YoY to ₹330.2 Cr) due to temporary gratuity and post-retirement benefit expense spikes that compressed EBITDA margins from 34% to 28.2%.",
      keyPoints: [
        "Growth Profile Transition: Matured from 20%+ fast grower to high-quality Stalwart compounding at ~10-15%.",
        "Q1 FY27 Margin Compression: EBITDA margin contracted from ~34% to 28.2% due to one-time employee benefit accounting hikes.",
        "Segment Mix Shift: Faster growth in lower-margin catering (+34% YoY in Q1) dilutes consolidated EBITDA margin.",
        "PSU Policy Discount: Government majority stake (62.4%) creates regulatory uncertainty over convenience fees & license terms."
      ]
    },

    normalizedEarnings: {
      title: "The Crown Jewel: High-Margin Internet Ticketing Cash Machine",
      description: "IRCTC holds an ~89% share of online reserved ticketing with extraordinary ~82.5% segment profit margins (₹1,268 Cr profit on ₹1,536 Cr revenue in FY26). It operates as a regulated digital toll booth requiring zero capex for railway tracks or locomotives.",
      metrics: [
        { label: "FY26 Consolidated Revenue", value: "₹5,215 Cr (+11.6% YoY)" },
        { label: "FY26 Consolidated PAT", value: "₹1,393 Cr (27.9x P/E)" },
        { label: "Ticketing Margin", value: "82.5% Segment Profit Margin (₹1,268 Cr)" },
        { label: "ROCE / ROE", value: "46% ROCE / 35% ROE (D/E 0.02)" }
      ]
    },

    intrinsicModel: {
      method: "Peter Lynch 5-Year Normalized EPS Scenario Matrix",
      description: "Using FY26 baseline EPS of ₹17.42, evaluating 5-year compounding trajectories across bear, base, and bull valuation multiples:",
      scenarios: [
        { name: "🔴 Bear Case (8% EPS CAGR)", condition: "Ticketing growth stays muted; margins capped @ 22x P/E", intrinsicValue: "₹563", status: "bear" },
        { name: "🟡 Conservative (10% EPS CAGR)", condition: "Modest ad monetization & catering volume growth @ 24x P/E", intrinsicValue: "₹672", status: "conservative" },
        { name: "🟢 Base Intrinsic (12% EPS CAGR)", condition: "ARPU expansion + catering expansion @ 25x P/E", intrinsicValue: "₹768 / share", status: "base" },
        { name: "🔵 Bull Case (15% EPS CAGR)", condition: "Tourism acceleration + e-catering margin recovery @ 28x P/E", intrinsicValue: "₹983", status: "bull" }
      ]
    },

    buffettFramework: {
      moatScore: "95/100 (Government Authorization, 89% Reserved Ticket Share, Captive Ecosystem)",
      reinvestmentNote: "At ₹485.65 (27.9x P/E), IRCTC offers a ~36.8% margin of safety against our ₹768 central intrinsic value. Minimal incremental capex is needed for ticketing, driving 46% ROCE and robust dividend distribution.",
      buyThresholds: [
        { priceRange: "₹700+", verdict: "🔴 Expensive", color: "text-red-400" },
        { priceRange: "₹600 – ₹700", verdict: "🟡 Reasonable only with >15% growth", color: "text-amber-300" },
        { priceRange: "₹500 – ₹600", verdict: "🟢 Fundamental Interest Zone", color: "text-emerald-300" },
        { priceRange: "₹425 – ₹500", verdict: "🟢🟢 Attractive Zone (Last Close: ₹485.65)", color: "text-emerald-400" },
        { priceRange: "Below ₹400", verdict: "🟢🟢🟢 Exceptional Bargain Zone", color: "text-cyan-300" }
      ]
    },

    fullAnalysis: {
      investingStyle: "Peter Lynch",
      classification: "🟢 STALWART — With Monopoly-Like Moat (Growth Optionality in Tourism & Catering)",
      threeSentenceStory: "IRCTC is the government-authorised platform that sells railway tickets online and provides catering, Rail Neer packaged water, and tourism services to Indian railway passengers. Its biggest advantage is that Indian Railways gives it an extremely difficult-to-replicate position in the railway-ticketing ecosystem. Ordinary consumers understand the business effortlessly: Need a train ticket? → IRCTC. Need food on a train? → IRCTC. Need tourism packages? → IRCTC.",
      segmentBreakdown: [
        { name: "Internet Ticketing", revenue: "₹1,536 Cr (+7.7%)", profit: "₹1,268 Cr", margin: "82.5%", quality: "Crown Jewel Digital Toll Booth (89% share)" },
        { name: "Catering", revenue: "₹2,399 Cr (+12.9%)", profit: "₹250 Cr", margin: "10.4%", quality: "Growth Driver (+34% Q1 FY27 YoY)" },
        { name: "Tourism", revenue: "₹890 Cr (+19.5%)", profit: "₹128 Cr", margin: "14.4%", quality: "High-Margin Expansion (+36% profit growth)" },
        { name: "Rail Neer", revenue: "₹391 Cr (+3.2%)", profit: "₹56 Cr", margin: "14.3%", quality: "Captive Bottled Water Distribution" },
      ],
      moatBreakdown: {
        score: "9.5 / 10 (Highest Tier Moat)",
        points: [
          "Government Authorization: Sole authorised provider of online railway ticketing in India.",
          "Digital Toll Booth Economics: Earns transaction revenue without owning trains, locomotives, tracks, or stations.",
          "Entrenched User Habits & Network Effect: Hundreds of millions of Indian travelers defaulted to IRCTC.",
          "High Switching Costs: Private aggregators still route back to Indian Railways / IRCTC gateway."
        ],
        caveats: [
          "Regulatory Ownership Risk: Government owns ~62.4% and can alter convenience fees, licensing terms, or revenue splits.",
          "Public Good Priority: Government may prioritize passenger convenience over maximizing shareholder profit margin."
        ]
      },
      quarterlySignalQ1FY27: {
        revenue: "₹1,369.5 Cr",
        revenueGrowth: "+18.1% YoY",
        pat: "₹330.2 Cr",
        patGrowth: "-0.2% YoY",
        marginCompressionReason: "EBITDA fell from ₹397.3 Cr (34% margin) to ₹386.7 Cr (28.2% margin) primarily due to one-off employee expense adjustments for gratuity enhancements and post-retirement benefits."
      },
      growthTriggers: [
        "ARPU Monetization: Increasing non-convenience-fee revenue per passenger via advertising, payment services, e-catering, and insurance.",
        "Catering Infrastructure Expansion: Surging Vande Bharat trains, premium pantry services, and e-catering (+34% YoY in Q1 FY27).",
        "Tourism & Special Trains: Holiday packages, pilgrimage trains, hotel partnerships, and luxury rail experiences (+19.5% YoY in FY26).",
        "Digital Ticketing Penetration: Steady growth in digital payments and reserved seating volumes across Indian Railways."
      ],
      tenbaggerAnalysis: {
        targetMarketCap: "₹3,88,520 Cr (~₹3.89 Lakh Crore)",
        requiredPAT: "₹15,600 Cr (11.2x current FY26 PAT of ₹1,393 Cr)",
        yearsAt12Percent: "~21 Years",
        yearsAt15Percent: "~18 Years",
        verdict: "IRCTC is NOT a rapid tenbagger candidate from ₹485.65. It is a classic Peter Lynch Stalwart—a high-quality, dividend-paying 10–15% compounder."
      },
      scuttlebuttVerdict: "Ask 100 Indian passengers where they book train tickets—they immediately answer IRCTC. Even when users vent frustration over Tatkal server speed or app UI, they return to IRCTC because there is no alternative. Complaint + compulsory usage is the hallmark of a bulletproof moat.",
      lynchScorecard: [
        { factor: "Business Simplicity", score: "⭐⭐⭐⭐⭐ 5/5", comment: "Crystal clear model understood by ordinary consumers" },
        { factor: "Competitive Moat", score: "⭐⭐⭐⭐⭐ 5/5", comment: "Government-backed 89% monopoly in reserved ticketing" },
        { factor: "Financial Strength", score: "⭐⭐⭐⭐⭐ 5/5", comment: "Near zero debt (D/E ~0.02), ₹1,273 Cr operating cash flow" },
        { factor: "Capital Return (ROCE)", score: "⭐⭐⭐⭐⭐ 5/5", comment: "46% ROCE / 35% ROE with minimal reinvestment capex" },
        { factor: "Cash Flow Conversion", score: "⭐⭐⭐⭐½ 4.5/5", comment: "High conversion of net profit to operating cash flow" },
        { factor: "Growth Runway", score: "⭐⭐⭐½ 3.5/5", comment: "Ticketing matured; upside driven by ARPU, catering & tourism" },
        { factor: "Management Autonomy", score: "⭐⭐⭐ 3/5", comment: "PSU structure; decisions influenced by Railway Ministry policy" },
        { factor: "Customer Stickiness", score: "⭐⭐⭐⭐⭐ 5/5", comment: "High habituation & default platform for Indian rail travel" },
        { factor: "Regulatory Risk", score: "⭐⭐⭐ 3/5", comment: "Convenience fees and revenue split subject to ministry policy" },
        { factor: "Valuation Discipline", score: "⭐⭐⭐½ 3.5/5", comment: "27.9x P/E is reasonable for a 9.5/10 moat (vs 50x peak)" }
      ],
      lynchVerdictSummary: "BUY-WATCHLIST — Business Quality: 9/10 | Moat: 9.5/10 | Attractiveness at ₹485: 7.5/10. IRCTC is a prime candidate for long-term gradual accumulation as a durable Stalwart compounder.",
      fiveThingsToWatch: [
        "① Internet ticketing revenue growth >10%",
        "② Catering growth >15%",
        "③ Tourism growth >15–20%",
        "④ Consolidated PAT growth >12–15%",
        "⑤ EBITDA margin stabilization around ~30%"
      ],
      risksAndGovernance: [
        "Ecosystem Dependence: Low customer concentration, but 100% ecosystem dependence on Indian Railways regulatory framework.",
        "Leadership Transition: Former CMD Sanjay Kumar Jain stepped down in July 2026; Rahul Himalian (Director Tourism & Marketing) assumed additional charge.",
        "Pending Legal/Tax Matters: GST input-tax-credit claims and a ₹50.4 Cr National Anti-Profiteering Authority notice on Rail Neer (financially manageable vs balance sheet)."
      ]
    }
  },
  {
    id: "icicibank-ltd",
    ticker: "NSE: ICICIBANK",
    companyName: "ICICI Bank Limited",
    sector: "Banking & Financial Services (Private Sector)",
    qualityScore: "9.2/10",
    qualityTag: "Highest-Tier Private Bank",
    currentPrice: "₹1,422.80",
    intrinsicValueRange: "₹1,050 – ₹1,750",
    centralIntrinsicValue: "₹1,350",
    upsidePercentage: "-5.1%",
    marginOfSafety: "0% Safety Margin (5.1% Premium)",
    dividendYield: "0.8% Yield (₹11.00/share)",
    buffettVerdict: "SLIGHTLY PREMIUM — 9.2/10 Business Quality (2.81x P/B; 0% Safety Margin; Preferred Entry Zone ₹1,100–1,200)",
    verdictBadge: "🔴 SLIGHTLY PREMIUM",
    verdictColor: "text-red-400 border-red-500/30 bg-red-500/10",

    researchDate: "28 August 2026",
    dataAsOf: "Includes FY26 Standalone Financials (₹75.89 EPS, ₹507 BVPS) & Q1 FY27 Results",

    summaryHeader: "Premier Private Franchise (16-18% ROE, 1.38% GNPA, 4.36% NIM) — Trading at ~2.81x Standalone Book Value (Fair to Premium Zone)",

    whyItFell: {
      title: "Why Is ICICI Bank Trading ~3.8% Below Its ₹1,480 52-Week High?",
      description: "ICICI Bank is trading near multi-year high valuations (~2.81x FY26 standalone book value), reflecting market recognition of its turnaround from the FY18-19 bad-loan era, resilient 4.36% NIM, and 19.6% YoY credit growth.",
      keyPoints: [
        "Demanding Valuation: At ~₹1,422.80, stock trades at ~2.81x FY26 standalone book value (₹507/share).",
        "Remarkable Asset Quality Turnaround: Gross NPA dropped from corporate stress era peak (>7%) down to 1.38% (Q1 FY27).",
        "Resilient Net Interest Margins: Q1 FY27 NIM expanded to 4.36% vs 4.34% YoY, defying sector-wide funding cost pressures.",
        "Systemic Private Credit Leader: Advances grew 19.6% YoY to ₹16.31 Lakh Cr with deposits up 14% to ₹18.34 Lakh Cr."
      ]
    },

    normalizedEarnings: {
      title: "Buffett Residual Earnings & Book Value Compounding Engine",
      description: "ICICI doubled standalone book value in 4 years (₹257 ➔ ₹507, 18.5% CAGR) through sustained 16–18% ROE and high PCR (74.7%).",
      metrics: [
        { label: "FY26 Standalone BVPS", value: "₹507.00 / share (18.5% 4-Yr CAGR)" },
        { label: "FY26 Standalone EPS", value: "₹75.89 (20% 4-Yr CAGR)" },
        { label: "Q1 FY27 Asset Quality", value: "1.38% GNPA / 0.35% NNPA (PCR 74.7%)" },
        { label: "Capital Adequacy (CAR)", value: "17.18% (Tier-1 Cushion)" }
      ]
    },

    intrinsicModel: {
      method: "Buffett Residual Income & Sustainable P/B Valuation",
      description: "Using ₹507 Standalone Book Value, 12% Cost of Equity, and 16–18% Sustainable ROE:",
      scenarios: [
        { name: "🔴 Bear Case", condition: "ROE moderates to 15-16% (2.0–2.2x Book)", intrinsicValue: "₹1,050 – ₹1,200", status: "bear" },
        { name: "🟡 Conservative", condition: "ROE ~17% (2.2–2.4x Book)", intrinsicValue: "₹1,250 – ₹1,350", status: "conservative" },
        { name: "🟢 Central Intrinsic", condition: "Sustainable 17% ROE Baseline", intrinsicValue: "₹1,350 / share", status: "base" },
        { name: "🔵 Optimistic / Bull", condition: "ROE 18% + Ecosystem Synergies (2.8–3.0x Book)", intrinsicValue: "₹1,550 – ₹1,750", status: "bull" }
      ]
    },

    buffettFramework: {
      moatScore: "93/100 (iMobile Digital Ecosystem, Deposit Scale, Sandeep Bakhshi Governance)",
      reinvestmentNote: "At ₹1,422.80 (2.81x FY26 book value), ICICI Bank is a 9.2/10 business trading at fair-to-premium valuation (~5% above ₹1,350 central intrinsic value). Preferred entry for a 15–20% safety margin is ₹1,100–1,200 (~2.2x book).",
      buyThresholds: [
        { priceRange: "₹1,400+", verdict: "🔴 Fair / Premium (Last Close: ₹1,422.80)", color: "text-red-400" },
        { priceRange: "₹1,300 – ₹1,400", verdict: "🟡 Around Fair Value", color: "text-amber-300" },
        { priceRange: "₹1,200 – ₹1,300", verdict: "🟢 Reasonably Attractive Zone", color: "text-emerald-300" },
        { priceRange: "₹1,100 – ₹1,200", verdict: "🟢🟢 Attractive Entry (15-20% Safety Margin)", color: "text-emerald-400" },
        { priceRange: "Below ₹1,050", verdict: "🟢🟢🟢 Potential Buffett Bargain (<2.0x P/B)", color: "text-cyan-300" }
      ]
    }
  },
  {
    id: "hcltech-ltd",
    ticker: "NSE: HCLTECH",
    companyName: "HCL Technologies",
    sector: "IT Services, ER&D & Enterprise Software",
    qualityScore: "8.8/10",
    qualityTag: "ER&D + Software IP Leader",
    currentPrice: "₹1,316.00",
    intrinsicValueRange: "₹1,000 – ₹1,800",
    centralIntrinsicValue: "₹1,350",
    upsidePercentage: "+2.6%",
    marginOfSafety: "2.5% Margin of Safety (At Fair Value)",
    dividendYield: "4.1% Yield (₹54.00/share)",
    buffettVerdict: "FAIRLY VALUED — 8.8/10 Buffett Scorecard (19.5x P/E; Entry Zone ₹1,080–1,150 for 15-20% Margin of Safety)",
    verdictBadge: "🟡 FAIR VALUE",
    verdictColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",

    researchDate: "28 August 2026",
    dataAsOf: "Includes FY26 Financials (₹61.46 EPS) & Q1 FY27 Results ($171M Advanced AI Revenue)",

    summaryHeader: "Strong ROIC (40.7%), Zero Debt, 99% FCF Conversion & $171M Advanced AI Revenue (+62.1% YoY) — Trading Near Fair Value",

    whyItFell: {
      title: "Why Has HCLTech Fallen ~26% From Its ₹1,780 52-Week High?",
      description: "HCLTech's pullback from its peak of ₹1,780 reflects sector-wide valuation multiple compression, client discretionary spending drag, modest FY27 CC revenue guidance (1–4%), and FY26's slight EPS dip.",
      keyPoints: [
        "Multiple Compression: P/E re-rated from ~26x peak to 19.5x baseline.",
        "FY26 Profit Moderation: Standalone EPS dipped from ₹64.16 (FY25) to ₹61.46 (FY26) as revenue growth outstripped margins.",
        "Modest Growth Guidance: FY27 CC revenue growth guided at 1–4% with 17.5–18.5% EBIT margins.",
        "AI Disruption Anxiety: Market uncertainty over traditional billable-hour IT headcount cannibalization."
      ]
    },

    normalizedEarnings: {
      title: "Owner Cash Flows, Zero Debt & High ROIC Engine",
      description: "HCLTech exhibits high financial quality: ~22.1% ROE, 40.7% LTM ROIC, near-zero debt, and 99% FCF conversion (FCF/Net Income).",
      metrics: [
        { label: "LTM ROIC (Unleveraged)", value: "40.7% (Debt/Equity ~0.00)" },
        { label: "LTM FCF Conversion", value: "99% of Reported Net Income" },
        { label: "Q1 FY27 Advanced AI Rev", value: "$171 Million (+62.1% YoY CC)" },
        { label: "Q1 FY27 Net New Bookings", value: "$2.4 Billion (Record Q1 Wins)" }
      ]
    },

    intrinsicModel: {
      method: "Buffett Owner Earnings & AI Productivity DCF Model",
      description: "Using ₹64–67 Normalized EPS, 99% FCF conversion, 10% Discount Rate, and 10-Year Horizon:",
      scenarios: [
        { name: "🔴 Bear Case", condition: "AI Cannibalization / Weak Spend (3% EPS Growth)", intrinsicValue: "₹1,000 – ₹1,150", status: "bear" },
        { name: "🟡 Conservative", condition: "Modest Recovery (~5-6% EPS Growth)", intrinsicValue: "₹1,250 – ₹1,350", status: "conservative" },
        { name: "🟢 Base Central Intrinsic", condition: "AI Implementation Engine (~6% Growth)", intrinsicValue: "₹1,350 / share", status: "base" },
        { name: "🔵 Bull Case", condition: "AI & HCLSoftware Acceleration (8-9% Growth)", intrinsicValue: "₹1,550 – ₹1,800", status: "bull" }
      ]
    },

    buffettFramework: {
      moatScore: "88/100 (ER&D DNA, HCLSoftware IP, OpenAI Partnership)",
      reinvestmentNote: "At ₹1,316.00 (19.5x P/E, 4.1% dividend yield), HCLTech trades at a 2.5% discount to its ₹1,350 intrinsic value. Preferred entry zone for a 15–20% Margin of Safety is ₹1,080–1,150.",
      buyThresholds: [
        { priceRange: "₹1,550+", verdict: "🔴 Expensive", color: "text-red-400" },
        { priceRange: "₹1,350 – ₹1,550", verdict: "🟡 Fair Value (Last Close: ₹1,316.00)", color: "text-amber-300" },
        { priceRange: "₹1,150 – ₹1,350", verdict: "🟢 Reasonably Attractive Zone", color: "text-emerald-300" },
        { priceRange: "₹1,080 – ₹1,150", verdict: "🟢🟢 Attractive (15-20% Safety Margin)", color: "text-emerald-400" },
        { priceRange: "Below ₹1,000", verdict: "🟢🟢🟢 Potential Buffett Bargain", color: "text-cyan-300" }
      ]
    }
  },
  {
    id: "sbi-ltd",
    ticker: "NSE: SBIN",
    companyName: "State Bank of India",
    sector: "Banking & Financial Services (PSU)",
    qualityScore: "8.3/10",
    qualityTag: "Dominant Deposit Franchise",
    currentPrice: "₹1,047.50",
    intrinsicValueRange: "₹720 – ₹1,150",
    centralIntrinsicValue: "₹975",
    upsidePercentage: "-6.9%",
    marginOfSafety: "0% Safety Margin (6.9% Premium)",
    dividendYield: "1.6% Yield (₹16.70/share)",
    buffettVerdict: "SLIGHTLY PREMIUM — 8.3/10 Buffett Scorecard (2.04x P/B; 0% Safety Margin; Target ≤1.5x P/B)",
    verdictBadge: "🔴 SLIGHTLY PREMIUM",
    verdictColor: "text-red-400 border-red-500/30 bg-red-500/10",

    researchDate: "28 August 2026",
    dataAsOf: "Includes FY26 Reported Numbers (₹87.59 EPS, ₹512.31 BVPS) & Q1 FY27 Results",

    summaryHeader: "India's Largest Bank (18.6% ROE, 1.49% GNPA) — Trading at ~2.04x Standalone Book Value (Fair Value Zone)",

    whyItFell: {
      title: "Why Has SBI Retracted From Its ₹1,234.70 52-Week High?",
      description: "SBI's pullback from its 52-week peak of ₹1,234.70 reflects Net Interest Margin (NIM) compression across the banking sector, market caution over through-the-cycle bad loan risks, and valuation re-rating near 2.0x standalone book value.",
      keyPoints: [
        "NIM Compression: NIM moderated from 3.09% (FY25) to 2.91% (FY26) as deposit costs caught up with loan yields.",
        "Valuation Re-rating: At ~₹1,047.50, stock trades at ~2.04x FY26 standalone book value (₹512.31/share).",
        "PSU Management Discount: Governance & policy-driven lending obligations create a historical valuation ceiling.",
        "Cycle Peak Anxiety: Investors questioning if 18.57% ROE is sustainable or represents a credit cycle peak."
      ]
    },

    normalizedEarnings: {
      title: "Buffett Residual Income & Book Value Compounding Engine",
      description: "For banks, ROE is the engine of book-value growth. Retaining ~80% of 18% ROE allows standalone book value (₹512.31/share) to compound at ~14% annually.",
      metrics: [
        { label: "FY26 Standalone BVPS", value: "₹512.31 / share" },
        { label: "FY26 Standalone EPS", value: "₹87.59 (25% 4-Yr CAGR)" },
        { label: "Return on Equity (ROE)", value: "18.57% (ROA 1.12%)" },
        { label: "Asset Quality (GNPA / NNPA)", value: "1.49% / 0.39% (Multi-Year Low)" }
      ]
    },

    intrinsicModel: {
      method: "Buffett Residual Income & Sustainable P/B Valuation",
      description: "Using ₹512.31 Standalone Book Value, 12% Cost of Equity, and 16–18% Sustainable ROE:",
      scenarios: [
        { name: "🔴 Bear Case", condition: "ROE drops to 14-15% (1.4–1.6x Book)", intrinsicValue: "₹720 – ₹820", status: "bear" },
        { name: "🟡 Base / Fair Case", condition: "ROE ~16-17% (1.6–1.8x Book)", intrinsicValue: "₹850 – ₹1,000", status: "conservative" },
        { name: "🟢 Central Intrinsic", condition: "Sustainable 17% ROE Baseline", intrinsicValue: "₹975 / share", status: "base" },
        { name: "🔵 Optimistic / Bull", condition: "ROE 18-19% + Subsidiaries (1.9–2.1x Book)", intrinsicValue: "₹1,050 – ₹1,150", status: "bull" }
      ]
    },

    buffettFramework: {
      moatScore: "92/100 (Unrivaled Scale, Low-Cost Deposit Franchise, Ecosystem Moat)",
      reinvestmentNote: "At ₹1,047.50 (2.04x FY26 book value), SBI is at fair value. Classic Buffett margin of safety (≤1.5x book) demands entry at ₹750–850.",
      buyThresholds: [
        { priceRange: "₹1,050+", verdict: "🔴 Fair / Expensive (P/B > 2.0x)", color: "text-red-400" },
        { priceRange: "₹950 – ₹1,050", verdict: "🟡 Fairly Valued (Last Close: ₹1,047.50)", color: "text-amber-300" },
        { priceRange: "₹850 – ₹950", verdict: "🟢 Good Margin of Safety (1.7–1.8x P/B)", color: "text-emerald-300" },
        { priceRange: "₹750 – ₹850", verdict: "🟢🟢 Very Attractive (1.5–1.6x P/B)", color: "text-emerald-400" },
        { priceRange: "Below ₹750", verdict: "🟢🟢🟢 Potential Buffett Bargain (≤1.5x P/B)", color: "text-cyan-300" }
      ]
    }
  },
  {
    id: "wipro-ltd",
    ticker: "NSE: WIPRO",
    companyName: "Wipro Limited",
    sector: "IT Services & Cloud Consulting",
    qualityScore: "7.5/10",
    qualityTag: "High FCF Value Play",
    currentPrice: "₹180.40",
    intrinsicValueRange: "₹140 – ₹280",
    centralIntrinsicValue: "₹205",
    upsidePercentage: "+13.6% Upside",
    marginOfSafety: "12.2% Margin of Safety (Discount)",
    dividendYield: "6.1% Yield (₹11.00/share)",
    buffettVerdict: "ATTRACTIVE VALUE PLAY — 7.5/10 Buffett Scorecard (14.3x P/E, 6.1% Yield)",
    verdictBadge: "🟢 ATTRACTIVE VALUE",
    verdictColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",

    researchDate: "28 August 2026",
    dataAsOf: "Includes FY26 Annual Results & ₹150B Buyback Baseline",

    summaryHeader: "High OCF Conversion (112.6%), 14.3x P/E, 6.1% Yield — Weaker Growth Than Peers Creates 12.2% Margin of Safety",

    whyItFell: {
      title: "Why Has Wipro Fallen ~34% From Its ₹273.15 High?",
      description: "Wipro's decline reflects flat FY26 earnings (+0.5% net profit), IT services constant-currency growth contraction (-1.6%), and historical valuation discount vs TCS & Infosys.",
      keyPoints: [
        "Flat Earnings Growth: FY26 net income increased just 0.5% YoY (EPS +0.3% to ₹12.60).",
        "Contracting IT Growth: IT Services constant-currency revenue declined 1.6% YoY in FY26.",
        "Operating Margin Gap: Operating margin of 17.2% lags peers (TCS ~25%, Infosys ~20%+).",
        "Multiple Discount: Market assigns lower 14.3x P/E multiple due to historical execution drag."
      ]
    },

    normalizedEarnings: {
      title: "Cash Flow Strength & Large Deal Momentum",
      description: "Wipro generated ₹14,930 Cr operating cash flow (112.6% PAT conversion) and expanded large-deal TCV to $7.8B (+45.4% YoY).",
      metrics: [
        { label: "FY26 Operating Cash", value: "₹14,930 Cr (112.6% Conversion)" },
        { label: "Large Deal TCV", value: "$7.8 Billion (+45.4% YoY)" },
        { label: "Valuation & Yield", value: "14.3x P/E | 6.1% Yield" },
        { label: "Capital Payout", value: "₹15,000 Cr Buyback + ₹11 Dividend" }
      ]
    },

    intrinsicModel: {
      method: "Buffett FCF & Normalized Earnings DCF Model",
      description: "Using ₹12.60 FY26 EPS, ₹14,930 Cr OCF, 10% Discount Rate, and 10-Year Horizon:",
      scenarios: [
        { name: "🔴 Bear Case", condition: "Weak Spending / Cannibalization (2-3% Growth)", intrinsicValue: "₹140 – ₹155", status: "bear" },
        { name: "🟡 Conservative", condition: "Modest Growth (~4% EPS Growth)", intrinsicValue: "₹170 – ₹190", status: "conservative" },
        { name: "🟢 Base Case", condition: "AI Neutral / Margin Improvement (5-6% Growth)", intrinsicValue: "₹205 / share", status: "base" },
        { name: "🔵 Bull Case", condition: "AI Productivity Surge (8% EPS Growth)", intrinsicValue: "₹240 – ₹280", status: "bull" }
      ]
    },

    buffettFramework: {
      moatScore: "70/100 (Scale, High Switching Costs, 242k Engineers)",
      reinvestmentNote: "In the IT Triad ranking: Infosys is #1 (Best Value, 21% Discount), Wipro is #2 (Value Play, 12% Discount, 6.1% Yield), TCS is #3 (Best Business, At Fair Value).",
      buyThresholds: [
        { priceRange: "₹250+", verdict: "🔴 Expensive", color: "text-red-400" },
        { priceRange: "₹220 – ₹250", verdict: "🟡 Fair / Expensive", color: "text-amber-400" },
        { priceRange: "₹200 – ₹220", verdict: "🟡 Around Fair Value", color: "text-amber-300" },
        { priceRange: "₹175 – ₹200", verdict: "🟢 Attractive (Last Close: ₹180.40)", color: "text-emerald-400" },
        { priceRange: "Below ₹150", verdict: "🟢🟢🟢 Potential Bargain Zone", color: "text-cyan-300" }
      ]
    }
  },
  {
    id: "tcs-ltd",
    ticker: "NSE: TCS",
    companyName: "Tata Consultancy Services",
    sector: "Global IT Services & Enterprise AI Transformation",
    qualityScore: "9.5/10",
    qualityTag: "Unrivaled Scale & Tata Moat",
    currentPrice: "₹2,344.00",
    intrinsicValueRange: "₹1,700 – ₹3,300",
    centralIntrinsicValue: "₹2,400",
    upsidePercentage: "+2.4% Upside",
    marginOfSafety: "2.3% Margin of Safety (At Fair Value)",
    dividendYield: "2.7% Yield (₹62.00/share)",
    buffettVerdict: "FAIRLY VALUED — 9.5/10 Buffett Scorecard (Superior Moat, At Fair Value)",
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
      reinvestmentNote: "TCS is a superior business (9.5/10 vs Infosys 8.8/10), but at ₹2,344 it trades at fair value (~2% discount). Infosys at ₹1,144 offers a higher margin of safety (21%).",
      buyThresholds: [
        { priceRange: "₹2,800+", verdict: "🔴 Expensive", color: "text-red-400" },
        { priceRange: "₹2,400 – ₹2,800", verdict: "🟡 Fair Value (Last Close: ₹2,344.00)", color: "text-amber-300" },
        { priceRange: "₹2,100 – ₹2,400", verdict: "🟢 Reasonably Attractive", color: "text-emerald-300" },
        { priceRange: "₹1,900 – ₹2,100", verdict: "🟢🟢 Attractive Zone (21% Discount)", color: "text-emerald-400" },
        { priceRange: "Below ₹1,700", verdict: "🟢🟢🟢 Exceptional Safety Margin", color: "text-cyan-300" }
      ]
    }
  },
  {
    id: "infosys-ltd",
    ticker: "NSE: INFY",
    companyName: "Infosys Limited",
    sector: "IT Services & Enterprise AI Infrastructure",
    qualityScore: "8.8/10",
    qualityTag: "Ultra-High ROE & Zero Debt",
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
    id: "hdfc-bank",
    ticker: "NSE: HDFCBANK",
    companyName: "HDFC Bank Limited",
    sector: "Banking & Financial Services",
    qualityScore: "9.1/10",
    qualityTag: "Systemic CASA Deposit Moat",
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
    id: "itc-ltd",
    ticker: "NSE: ITC",
    companyName: "ITC Limited",
    sector: "FMCG & Consumer Staples",
    qualityScore: "9.4/10",
    qualityTag: "High FCF & FMCG Moat",
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
  }
];
