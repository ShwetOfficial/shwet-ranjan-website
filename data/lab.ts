export interface LabItem {
  id: string;
  category: string;
  title: string;
  detail: string;
  status: string;
  date: string;
}

export const labData: LabItem[] = [
  {
    id: "1",
    category: "RESEARCH",
    title: "GST Statutory Case Law Analysis (2025-2026)",
    detail: "Synthesizing recent High Court rulings on Input Tax Credit (ITC) revocation and natural justice principles.",
    status: "Active Study",
    date: "Aug 2026"
  },
  {
    id: "2",
    category: "CODE LAB",
    title: "Agentic Tax Reconciliation Tool",
    detail: "Building a Python CLI tool using LLM function calling to match ambiguous party names in GSTR-2B datasets.",
    status: "v0.4 Beta",
    date: "Aug 2026"
  },
  {
    id: "3",
    category: "READING",
    title: "Poor Charlie's Almanack & The Essays of Warren Buffett",
    detail: "Re-reading mental models on inversion, circle of competence, and economic moats.",
    status: "Ongoing",
    date: "Jul 2026"
  },
  {
    id: "4",
    category: "EXPERIMENT",
    title: "Dynamic D2C Inventory Velocity Modeling",
    detail: "Developing a lead-time buffer calculator for cross-border logistics during peak demand shifts.",
    status: "Prototype",
    date: "Jun 2026"
  }
];
