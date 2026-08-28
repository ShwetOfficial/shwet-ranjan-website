export interface Milestone {
  year: string;
  phase: string;
  title: string;
  location: string;
  description: string;
  keyTakeaways: string[];
  skillsGained: string[];
}

export const journeyTimeline: Milestone[] = [
  {
    year: "EARLY CAPITAL",
    phase: "01. Early Stock Market Investing & Valuation",
    title: "Stock Market Investing Since 2010",
    location: "Kolkata / Public Markets",
    description: "Began investing in the stock market early in 2010. Developed a disciplined dual-horizon equity approach: applying Warren Buffett's principles for long-term compounders with high economic moats, and Peter Lynch's principles for mid-term growth opportunities.",
    keyTakeaways: [
      "Early mastery of financial statement analysis, ROIC, and owner cash flows",
      "Warren Buffett Strategy: Long-term allocation in high-moat compounders with a strict 30% margin of safety",
      "Peter Lynch Strategy: Mid-term allocation targeting fast-growers, PEG ratios < 1.0, and operational inflection points"
    ],
    skillsGained: ["Equity Valuation", "Warren Buffett Moats", "Peter Lynch Growth", "DCF Modeling", "Capital Allocation"]
  },
  {
    year: "FOUNDATION",
    phase: "02. Tax, Accounting & Statutory Frameworks",
    title: "Taxation & Legal Structuring Foundation",
    location: "Kolkata, IN",
    description: "Deep immersion into statutory taxation, corporate law, financial auditing, and Indian GST mechanics. Developed a sharp analytical lens for financial statements and built taxamicus.in from scratch on WordPress.com.",
    keyTakeaways: [
      "Mastery of Indian GST architecture and Input Tax Credit dynamics",
      "Architected taxamicus.in from scratch on WordPress.com as the core corporate portal",
      "Financial statement auditing and forensic cash flow analysis"
    ],
    skillsGained: ["GST Law", "Corporate Tax", "WordPress.com", "Auditing", "Financial Accounting"]
  },
  {
    year: "OPERATIONS",
    phase: "03. E-Commerce & Business Execution",
    title: "Digital Commerce & Operational Scaling",
    location: "India",
    description: "Transitioned analytical precision into real-world business execution. Managed D2C storefront operations, supply chain logistics, inventory turn strategy, and customer acquisition unit economics.",
    keyTakeaways: [
      "First-hand experience with D2C cash conversion cycles & working capital",
      "Logistics optimization and courier reconciliation workflows",
      "Understanding customer lifetime value (LTV) vs acquisition cost (CAC)"
    ],
    skillsGained: ["Unit Economics", "Supply Chain", "Shopify / Web Storefronts", "Inventory Strategy", "Margin Optimization"]
  },
  {
    year: "LEVERAGE",
    phase: "04. Software Engineering & Automation",
    title: "Full-Stack Technology & Digital Tools",
    location: "Remote / Digital",
    description: "Recognized software as the ultimate force multiplier for business operations. Mastered modern full-stack web development, Python data automation, RESTful APIs, and AI integrations to automate manual processes.",
    keyTakeaways: [
      "Building production-ready Next.js applications and cloud workflows",
      "Automating complex financial reconciliations with Python scripts",
      "Integrating AI APIs and LLM agents into traditional business pipelines"
    ],
    skillsGained: ["Next.js", "TypeScript", "React", "Python ETL", "Tailwind CSS", "REST & AI APIs"]
  },
  {
    year: "SYNTHESIS",
    phase: "05. Multi-Disciplinary Operator & Investor",
    title: "Synthesis: Business • Tax • Tech • Capital",
    location: "Global",
    description: "Operating at the intersection of business strategy, tax precision, software automation, and fundamental equity investing. Building scalable ventures and high-leverage tools.",
    keyTakeaways: [
      "Combining tax compliance knowledge with automated software tools",
      "Applying Buffett & Lynch intrinsic value estimation to public equities & software assets",
      "Building enduring systems with zero tolerance for unnecessary friction"
    ],
    skillsGained: ["Strategic Leadership", "System Architecture", "Capital Allocation", "Product Strategy", "AI Workflow Engineering"]
  }
];

export interface PhilosophyModel {
  number: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
}

export const mentalModels: PhilosophyModel[] = [
  {
    number: "01",
    title: "First-Principles Execution",
    subtitle: "Deconstruct to Fundamentals",
    quote: "Never accept a process simply because 'that's how it's always been done.'",
    description: "Break every business problem, tax rule, or software bottleneck down to its foundational truths, then re-architect the solution from the ground up."
  },
  {
    number: "02",
    title: "Building vs. Consuming",
    subtitle: "Active Creation as Leverage",
    quote: "True digital authority comes from engineering tools, not just operating them.",
    description: "Shift focus from passive software usage to active software creation—from custom WordPress.com flagship portals to full-stack Next.js tax engines."
  },
  {
    number: "03",
    title: "Buffett x Lynch Dual-Horizon Capital",
    subtitle: "Long-Term Moats x Mid-Term Growth",
    quote: "Use Buffett principles for long-term compounders and Lynch principles for mid-term growth catalysts.",
    description: "Active stock market investor since 2010. I combine Warren Buffett's focus on economic moats, predictable ROIC, owner cash flows, and margin of safety for long-term holds, with Peter Lynch's focus on PEG ratios (< 1.0), inventory inflections, and category-leading fast growers for mid-term opportunities."
  },
  {
    number: "04",
    title: "Technology as Force Multiplier",
    subtitle: "Multiply Human Intelligence",
    quote: "Code and capital are the two formless forms of leverage.",
    description: "Use modern full-stack engineering and AI models to give a single strategic operator the output capacity of an entire legacy department."
  }
];

export interface PersonalRule {
  number: string;
  title: string;
  subtitle: string;
  quote: string;
  rule: string;
  badge: string;
}

export const personalRules: PersonalRule[] = [
  {
    number: "01",
    title: "Direct Reciprocal Trust",
    subtitle: "First-Hand Action Over Rumor",
    quote: "Professional trust is earned through direct action—good faith is met with dedication; bad faith with firm boundaries.",
    rule: "I evaluate partnerships strictly by direct, first-hand conduct. Good faith and performance are rewarded with complete commitment; non-performance or bad faith is met with swift, uncompromising boundary protection.",
    badge: "RECIPROCITY"
  },
  {
    number: "02",
    title: "Relational Thread Isolation",
    subtitle: "Independent Partnership Bounds",
    quote: "Every partnership stands on its own merit. External conflicts never bleed across independent relationships.",
    rule: "I isolate every relationship onto its own independent thread. I never allow third-party disputes or external political conflicts to compromise a direct professional partnership.",
    badge: "ISOLATION"
  },
  {
    number: "03",
    title: "Time as Irreversible Asset",
    subtitle: "Non-Renewable Resource Priority",
    quote: "Financial capital can be lost and re-earned; time once spent is permanently unrecoverable.",
    rule: "Time is the ultimate non-renewable asset in business and life. I prioritize high-leverage execution, respectful timeliness, and zero tolerance for artificial delays.",
    badge: "TIME ASSET"
  },
  {
    number: "04",
    title: "Focus & Operational Sovereignty",
    subtitle: "Sphere of Execution Boundaries",
    quote: "I respect organizational and personal boundaries, intervening only when shared integrity is at stake.",
    rule: "I focus relentlessly on my core sphere of execution and respect the autonomy of others, intervening only if external issues directly impact shared operations or integrity.",
    badge: "SOVEREIGNTY"
  },
  {
    number: "05",
    title: "Mutual Autonomy & Privacy",
    subtitle: "Strict Personal Privacy Respect",
    quote: "Complete personal autonomy thrives on mutual privacy and uncompromised boundaries.",
    rule: "I hold absolute respect for personal privacy and individual autonomy, operating under the expectation of reciprocal respect for my own personal and operational boundaries.",
    badge: "PRIVACY"
  }
];

export const nonLinearPursuits = [
  { topic: "Market Valuation & Intrinsic Margin of Safety", cat: "FINANCE" },
  { topic: "Micro-SaaS & Boilerplate Automation Architecture", cat: "TECH" },
  { topic: "Indian GST Statutory Case Law & Tax Optimization", cat: "LAW & TAX" },
  { topic: "Neo-Editorial Web Aesthetics & Typography Systems", cat: "DESIGN" },
  { topic: "Working Capital Optimization in D2C Logistics", cat: "BUSINESS" }
];
