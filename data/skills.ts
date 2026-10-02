export interface SkillCategory {
  title: string;
  badge: string;
  skills: { name: string; level: number; note: string }[];
  frameworks: string[];
}

export const skillsMatrixData: SkillCategory[] = [
  {
    title: "Business & Operations Strategy",
    badge: "OPERATIONS",
    skills: [
      { name: "Financial Modeling & Unit Economics", level: 95, note: "DCF, LTV/CAC, CapEx Optimization" },
      { name: "Supply Chain & Fulfillment Arbitrage", level: 88, note: "Multi-State VPOB, RTO Reduction" },
      { name: "Operational Workflow Architecture", level: 92, note: "SOP Automation, Task Systems" },
      { name: "Enterprise Growth & Go-To-Market", level: 86, note: "Market Positioning, Retainers" }
    ],
    frameworks: ["DuPont Analysis", "Working Capital Cycle", "Margin Waterfall", "Lean Operations"]
  },
  {
    title: "Taxation & Statutory Compliance",
    badge: "TAXATION",
    skills: [
      { name: "Multi-State GST & ITC Reconciliation", level: 96, note: "GSTR-1, 3B, 2B Matching" },
      { name: "Corporate Income Tax Structuring", level: 90, note: "Tax Planning, Deductions" },
      { name: "Statutory Notice & Audit Defense", level: 92, note: "DRC-01A, Sec 16(2) Precedents" },
      { name: "Commercial Entity Structuring & Law", level: 86, note: "Incorporation, Agreements" }
    ],
    frameworks: ["Input Tax Credit Rules", "GST Statutory Provisions", "Corporate Tax Codes", "Audit Defense Trails"]
  },
  {
    title: "Technology & Software Systems",
    badge: "FULL-STACK & AI",
    skills: [
      { name: "Full-Stack Web Architecture", level: 94, note: "Next.js, TypeScript, React, APIs" },
      { name: "Computer Vision & Invoice OCR", level: 95, note: "PaddleOCR 3.x, Mod-36 Checksums" },
      { name: "Conversational AI & WhatsApp CRM", level: 93, note: "Baileys Sockets, Gemini Flash" },
      { name: "High-Throughput Database Systems", level: 89, note: "SQLite WAL, Concurrency, PM2" }
    ],
    frameworks: ["Next.js & TypeScript", "PaddleOCR & Vision", "Baileys WhatsApp", "SQLite WAL Mode"]
  },
  {
    title: "Capital Allocation & Valuation",
    badge: "EQUITY FINANCE",
    skills: [
      { name: "Fundamental Equity Research", level: 91, note: "Balance Sheet & Cash Flow Audit" },
      { name: "Multi-Stage Intrinsic Value DCF", level: 89, note: "Owner Earnings & Hurdle Rates" },
      { name: "Economic Moats & ROIC Analysis", level: 88, note: "Pricing Power vs WACC" },
      { name: "Risk Management & Portfolio Theory", level: 86, note: "Asymmetric Risk/Reward Ratios" }
    ],
    frameworks: ["Multi-Stage DCF", "Owner Earnings Model", "ROIC vs WACC", "Lynch PEG & Moat"]
  }
];
