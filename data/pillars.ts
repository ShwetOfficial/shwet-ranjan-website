export interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyCapabilities: string[];
  metricsHighlight: string;
  badge: string;
  accentColor: string;
}

export const pillarsData: Pillar[] = [
  {
    id: "business",
    number: "01",
    title: "Business & Entrepreneurship",
    subtitle: "Scalable Operations & Unit Economics",
    description: "Designing resilient operational architectures, optimizing cash conversion cycles, and formulating sustainable growth models grounded in first-principles business analysis.",
    keyCapabilities: [
      "Financial Modeling & Unit Economics",
      "Supply Chain & Operational Efficiency",
      "Growth Systems & GTM Strategy",
      "Margin Expansion & Cost Structuring"
    ],
    metricsHighlight: "Multi-Domain Operator",
    badge: "OPERATIONS",
    accentColor: "from-blue-600/10 to-indigo-600/10"
  },
  {
    id: "taxation",
    number: "02",
    title: "Tax & GST Compliance",
    subtitle: "Indian Taxation & Corporate Compliance",
    description: "Navigating complex Indian tax frameworks, GST multi-tier architecture, corporate compliance structuring, and tax-efficient capital allocation for growth-stage entities.",
    keyCapabilities: [
      "GST Architecture & Multi-Tier Filing",
      "Direct Tax & Corporate Structuring",
      "Regulatory Audit Readiness & Defense",
      "Automated Tax Reconciliations"
    ],
    metricsHighlight: "Zero-Margin Compliance Error",
    badge: "TAX & COMPLIANCE",
    accentColor: "from-teal-600/10 to-emerald-600/10"
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-Commerce Operations",
    subtitle: "Digital Storefronts & Inventory Leverage",
    description: "Managing end-to-end digital commerce ecosystems—from D2C customer acquisition economics and warehouse logistics exposure to inventory turn acceleration.",
    keyCapabilities: [
      "D2C Storefront Tech Stack & UX",
      "Inventory Turnover & Working Capital",
      "Multi-Channel Marketplace Analytics",
      "Logistics & Fulfillment Optimization"
    ],
    metricsHighlight: "Omnichannel Scaling",
    badge: "E-COMMERCE",
    accentColor: "from-amber-600/10 to-orange-600/10"
  },
  {
    id: "technology",
    number: "04",
    title: "Technology & Digital Projects",
    subtitle: "Full-Stack Web, AI & Workflow Automation",
    description: "Engineering robust full-stack software solutions, custom automation scripts, internal tooling, and AI integration to multiply human leverage across business domains.",
    keyCapabilities: [
      "Full-Stack Web Apps (Next.js/React/Node)",
      "AI APIs & Agentic Tool Integration",
      "Automated ETL & Business Pipelines",
      "Clean UI/UX & High-Perf Architecture"
    ],
    metricsHighlight: "10x Operational Leverage",
    badge: "SOFTWARE & AI",
    accentColor: "from-violet-600/10 to-purple-600/10"
  }
];
