export interface SkillCategory {
  title: string;
  badge: string;
  skills: { name: string; level: number; note: string }[];
  frameworks: string[];
}

export const skillsMatrixData: SkillCategory[] = [
  {
    title: "Business & Strategy",
    badge: "OPERATIONS",
    skills: [
      { name: "Financial Modeling & Unit Economics", level: 95, note: "DCF, LTV/CAC, CapEx Optimization" },
      { name: "Supply Chain & Logistics", level: 88, note: "Inventory Turnover, Fulfillment" },
      { name: "Operational Workflow Engineering", level: 92, note: "Process Optimization, SOPs" },
      { name: "Growth Strategy & Go-To-Market", level: 85, note: "Market Analysis, Positioning" }
    ],
    frameworks: ["DuPont Analysis", "Working Capital Cycle", "Margin Waterfall", "Lean Operations"]
  },
  {
    title: "Taxation & Compliance",
    badge: "INDIAN TAX & LAW",
    skills: [
      { name: "GST Architecture & Reconciliation", level: 96, note: "GSTR-1, 3B, 2B Credit Matching" },
      { name: "Corporate Income Tax Structuring", level: 90, note: "Tax Planning, Allowable Deductions" },
      { name: "Statutory Compliance & Audit Defense", level: 92, note: "Notice Handling, Books Audit" },
      { name: "Entity Structuring & Law", level: 86, note: "Company Incorporation, Agreements" }
    ],
    frameworks: ["Input Tax Credit (ITC) Rules", "GST Act Statutory Provisions", "Corporate Tax Codes", "Audit Trails"]
  },
  {
    title: "Technology & Software",
    badge: "FULL-STACK & AI",
    skills: [
      { name: "Full-Stack Web Development", level: 92, note: "Next.js, React, TypeScript, Node.js" },
      { name: "AI APIs & Workflow Automation", level: 90, note: "LLM Agents, Python Scripts, Webhooks" },
      { name: "CSS Systems & UI/UX Craft", level: 94, note: "Tailwind CSS, Framer Motion, Design Tokens" },
      { name: "Database & Cloud Architecture", level: 84, note: "PostgreSQL, Vercel, REST APIs" }
    ],
    frameworks: ["Next.js App Router", "Tailwind CSS v3/v4", "Framer Motion", "Python Pandas/ETL", "Git / GitHub"]
  },
  {
    title: "Investing & Capital",
    badge: "VALUATION & FINANCE",
    skills: [
      { name: "Fundamental Equity Analysis", level: 90, note: "Balance Sheet & Cash Flow Audit" },
      { name: "Intrinsic Value Estimation", level: 88, note: "Multi-Stage DCF & Margin of Safety" },
      { name: "Capital Allocation & ROIC Analysis", level: 86, note: "Hurdle Rates, Reinvestment Risk" },
      { name: "Risk Management & Portfolio Theory", level: 85, note: "Asymmetric Risk/Reward Ratios" }
    ],
    frameworks: ["Discounted Cash Flow (DCF)", "Owner Earnings Model", "ROIC vs WACC", "Graham Safety Margin"]
  }
];
