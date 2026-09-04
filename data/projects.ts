export interface FlowchartNode {
  step: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  category: "E-Commerce" | "Tax Compliance" | "Investing" | "Technology & AI";
  summary: string;
  fullDescription: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  year: string;
  status: "Completed" | "Active" | "Lab Experiment";
  highlights: string[];
  flowchartNodes: FlowchartNode[];
  linkText?: string;
  linkUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "taxamicus-ecom-automation",
    title: "E-Commerce Tax & Government Template Filing Engine",
    category: "Tax Compliance",
    summary: "Multi-marketplace tax calculation & GST template generator that parses sales data from Flipkart, Amazon, Meesho, Myntra, Ajio, 1mg, B2B, and B2C.",
    fullDescription: "Developed an automated tax filing engine capable of ingesting raw sales reports across all major e-commerce marketplaces (Flipkart, Amazon, Meesho, Myntra, Ajio, 1mg) and direct B2B/B2C feeds. The engine auto-detects platform schemas, normalizes multi-state buyer tax liabilities, computes CGST/SGST/IGST breakdowns, and outputs government-compliant GSTR-1 and GSTR-3B audit templates.",
    impactMetrics: [
      { label: "Marketplaces", value: "10+" },
      { label: "Auto-Detection", value: "100%" },
      { label: "Time Saved", value: "95%" }
    ],
    tags: ["GST Filing", "E-Commerce Tax", "Automation Engine", "Flipkart/Amazon/Meesho", "ETL Pipelines"],
    year: "2025 - 2026",
    status: "Active",
    highlights: [
      "Auto-detects file schemas across Flipkart, Amazon, Meesho, Myntra, Ajio, 1mg & raw B2B/B2C files",
      "Multi-state buyer state tax rate mapping for seamless state-wise GST compliance",
      "Instant export into audit-ready government GST filing templates"
    ],
    flowchartNodes: [
      { step: "01", label: "Multi-Platform Upload", detail: "Ingest sales reports from Flipkart, Amazon, Meesho, B2B & B2C." },
      { step: "02", label: "Auto-Detect Engine", detail: "Identifies marketplace format & normalizes line-item tax data." },
      { step: "03", label: "GST State Matrix", detail: "Calculates CGST, SGST & IGST split based on buyer state & GSTIN." },
      { step: "04", label: "Gov Template Export", detail: "Generates audit-ready government GST filing templates." }
    ],
    linkText: "Launch Filing Automation",
    linkUrl: "https://experts.taxamicus.in"
  },
  {
    id: "taxamicus-enterprise-crm",
    title: "Taxamicus Enterprise Operations CRM & Task Dispatcher",
    category: "Technology & AI",
    summary: "Custom enterprise CRM built exclusively for internal operations, active job tracking, SLA delay monitoring, and interactive task inbox dispatching.",
    fullDescription: "Engineered a proprietary operational CRM to structure internal team workflows and eliminate compliance SLA bottlenecks. Features an Admin Command Center providing real-time visibility across active client jobs, turnaround times (TAT), and SLA delay metrics, paired with an automated Task Inbox featuring instant Accept/Reject task dispatching.",
    impactMetrics: [
      { label: "Active Jobs", value: "324+" },
      { label: "Closed Cycles", value: "390+" },
      { label: "SLA Delays", value: "0" }
    ],
    tags: ["Enterprise CRM", "Workflow Automation", "Task Dispatching", "TAT Analytics", "React / Next.js"],
    year: "2025 - 2026",
    status: "Active",
    highlights: [
      "Real-time operational command center monitoring 324+ live client work tickets",
      "Action Required Task Inbox with interactive Accept / Reject work dispatching",
      "Automated SLA tracking and client compliance deadline alerts"
    ],
    flowchartNodes: [
      { step: "01", label: "Task Ingestion", detail: "Compliance tickets & ad-hoc jobs logged into system inbox." },
      { step: "02", label: "Smart Dispatch", detail: "Routes task assignments to team members with interactive Accept/Reject." },
      { step: "03", label: "SLA & TAT Engine", detail: "Monitors turnaround times & flags potential SLA delays in real-time." },
      { step: "04", label: "Command Center", detail: "Executive oversight across active, delayed & closed cycle metrics." }
    ],
    linkText: "View CRM Command Center",
    linkUrl: "https://experts.taxamicus.in"
  },
  {
    id: "taxamicus-invoicing-platform",
    title: "Taxamicus Web Invoicing & Financial Performance Portal",
    category: "Tax Compliance",
    summary: "Dedicated financial web application for issuing sales invoices, tracking purchase bills, monitoring output GST in real time, and tracking pending payments.",
    fullDescription: "Designed and built a web invoicing application enabling businesses to generate GST-compliant sales invoices and manage purchase bills effortlessly. The platform provides real-time tracking of estimated output GST liabilities, pending customer payment tracking, and multi-month sales performance analytics.",
    impactMetrics: [
      { label: "Output GST", value: "Real-Time" },
      { label: "Sales Analytics", value: "6-Month Trend" },
      { label: "Payment Tracking", value: "100%" }
    ],
    tags: ["Invoicing App", "GST Output Tracking", "Sales Analytics", "Financial Dashboard", "Next.js"],
    year: "2025 - 2026",
    status: "Active",
    highlights: [
      "Real-time Estimated Output GST calculation for active billing periods",
      "Sales invoice and purchase bill management with customer history tracking",
      "Interactive 6-month sales performance revenue charts"
    ],
    flowchartNodes: [
      { step: "01", label: "Invoice Generator", detail: "Generates line-item sales invoices & purchase bills effortlessly." },
      { step: "02", label: "Live Tax Engine", detail: "Computes live estimated Output GST liability per billing cycle." },
      { step: "03", label: "Pending Dues Tracker", detail: "Monitors unpaid customer balances & settlement status." },
      { step: "04", label: "Sales Analytics", detail: "Renders 6-month performance charts & summary metrics." }
    ],
    linkText: "Launch Invoicing Portal",
    linkUrl: "https://invoice.taxamicus.in"
  },
  {
    id: "verifyreels-ai-engine",
    title: "VerifyReels AI – Multimodal Fact Verification & Claims Engine",
    category: "Technology & AI",
    summary: "Multimodal AI platform that transcribes video streams, extracts structured factual claims via LLMs, and executes low-latency web source verification.",
    fullDescription: "Engineered a multimodal verification engine that ingests video streams across major networks (YouTube, Instagram, X/Twitter, Facebook). The architecture transcribes speech-to-text, extracts verifiable claims using LLM pipelines, and cross-references claim validity against live web sources in under 5 seconds.",
    impactMetrics: [
      { label: "Supported Platforms", value: "5 Networks" },
      { label: "Fact Check Latency", value: "< 5s" },
      { label: "WhatsApp Bot", value: "Live" }
    ],
    tags: ["AI Fact-Checking", "LLM Transcription", "Claim Extraction", "Live Web Search", "WhatsApp Bot"],
    year: "2026",
    status: "Active",
    highlights: [
      "Multimodal video transcription and LLM-driven claim extraction pipeline",
      "Source-aware scanner supporting Standard (1 credit) and Deep Search (2 credits) modes",
      "Direct WhatsApp integration allowing users to forward reels for instant verification"
    ],
    flowchartNodes: [
      { step: "01", label: "Video Link Ingestion", detail: "Ingests links from Instagram, YouTube, X, TikTok, or Facebook." },
      { step: "02", label: "Audio Speech-to-Text", detail: "Transcribes video audio & isolates verifiable factual claims." },
      { step: "03", label: "Live Search Engine", detail: "Performs low-latency live web search & current source cross-checks." },
      { step: "04", label: "Human Verdict Report", detail: "Delivers score breakdown & source citations via web or WhatsApp." }
    ],
    linkText: "Visit VerifyReels.com",
    linkUrl: "https://verifyreels.com"
  },
  {
    id: "taxamicus-gst-chrome-extension",
    title: "Taxamicus Chrome Extension – Silent GST Portal Automation",
    category: "Tax Compliance",
    summary: "Browser extension for the Government GST Portal (return.gst.gov.in) that runs silent notice checks, rate-wise comparisons, and bulk FY downloads.",
    fullDescription: "Created a specialized Chrome Extension that overlays directly onto the official Government Goods & Services Tax Network (GSTN) portal. It silently monitors tax notices in the background, renders interactive rate-wise reconciliation comparisons (GSTR-1 vs 3B, 3B vs 2B, TDS/TCS vs 3B), and provides single-click full FY return downloads in CSV and raw JSON formats.",
    impactMetrics: [
      { label: "Reconciliations", value: "4 Matrix Types" },
      { label: "Notice Monitoring", value: "100% Silent" },
      { label: "Bulk Downloads", value: "CSV & JSON" }
    ],
    tags: ["Chrome Extension", "GST Portal Automation", "GSTR-1 vs 3B Reconciliation", "DOM Injection", "JavaScript"],
    year: "2025 - 2026",
    status: "Active",
    highlights: [
      "Silent background checking of government GST notices without workflow disruption",
      "Interactive rate-wise reconciliation table (GSTR-1 vs 3B, GSTR-1 vs 3B State-wise, GSTR-3B vs 2B, TDS/TCS)",
      "Full financial year bulk download generator for CSV summaries & zip raw JSON archives"
    ],
    flowchartNodes: [
      { step: "01", label: "Portal DOM Injection", detail: "Extension injects overlay control center on GST Portal login." },
      { step: "02", label: "Silent Notice Listener", detail: "Scans government notice endpoints silently in the background." },
      { step: "03", label: "Rate Comparison", detail: "Pulls GSTR-1, 3B & 2B feeds to display state/rate-wise tax deltas." },
      { step: "04", label: "Bulk Data Exporter", detail: "Bundles full FY returns into CSV summaries & zip archives." }
    ],
    linkText: "Chrome Extension Specs"
  },
  {
    id: "intrinsic-value-modeler",
    title: "Buffett & Lynch Intrinsic Value & Equity Valuation Engine",
    category: "Investing",
    summary: "Active stock market investor since 2010. Quantitative fundamental valuation framework combining Warren Buffett's economic moat principles with Peter Lynch's mid-term growth metrics.",
    fullDescription: "Designed an interactive fundamental valuation framework built on principles of active stock market investing since 2010. Ingests financial statements, normalizes owner earnings, evaluates high-ROIC reinvestment moats, applies 30% margin-of-safety DCF discounting (Warren Buffett Model), and scans PEG ratios (< 1.0) and inventory turnover inflections (Peter Lynch Model).",
    impactMetrics: [
      { label: "Experience", value: "2010 - Present" },
      { label: "Buffett Strategy", value: "Long Moats" },
      { label: "Lynch Strategy", value: "Fast Growth" }
    ],
    tags: ["Warren Buffett", "Peter Lynch", "DCF Valuation", "PEG Ratio", "Stock Market Since 2010"],
    year: "2010 - Present",
    status: "Active",
    highlights: [
      "Warren Buffett Long-Term Strategy: Owner Earnings normalization, high-ROIC reinvestment moats, and 30% margin of safety DCF entry pricing",
      "Peter Lynch Mid-Term Strategy: Fast-grower tracking, PEG ratio evaluation (< 1.0), working capital inventory shifts, and operational demand inflections",
      "Interactive DCF margin of safety calculator & PEG growth ratio scanner"
    ],
    flowchartNodes: [
      { step: "01", label: "Buffett Moat Filter", detail: "Evaluates durable competitive advantage, ROIC, and owner cash flows." },
      { step: "02", label: "Lynch Growth Scan", detail: "Analyzes PEG ratio (<1.0), inventory turnover & mid-term earnings growth." },
      { step: "03", label: "DCF Intrinsic Model", detail: "Calculates multi-stage DCF value bands with margin of safety." },
      { step: "04", label: "Dual Allocation", detail: "Allocates long-term compounders vs mid-term high-growth compounders." }
    ],
    linkText: "Launch Valuation Engine",
    linkUrl: "/investing-modeler"
  }
];

export const futureLabExperiments = [
  {
    title: "Micro-SaaS Automated Tax Filing API",
    tag: "TAX TECH",
    desc: "RESTful API endpoint for indie hackers to generate GST-compliant e-invoices instantly.",
    status: "In Development"
  },
  {
    title: "Automated Supply Chain Margin Simulator",
    tag: "OPERATIONS",
    desc: "Monte Carlo simulation tool for evaluating commodity price shifts on manufacturing margins.",
    status: "Research Phase"
  },
  {
    title: "Algorithmic Capital Allocation Tracker",
    tag: "FINANCE",
    desc: "Personal portfolio engine analyzing ROIC against hurdle rates in real-time.",
    status: "Prototyping"
  }
];
