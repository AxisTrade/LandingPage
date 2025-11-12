export type Feature = {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  image: string;      // /public path
  bullets: string[];
  outcomes: { label: string; value: string }[];
};

export const FEATURES: Feature[] = [
  {
    slug: "easy-access",
    title: "Enable easy access for everyone",
    tagline: "One workspace to discover, compare, and sign with confidence.",
    excerpt:
      "Give your teams a single, intuitive place to discover verified mining suppliers, compare offers, and secure contracts.",
    image: "/features/feature-1.jpg",
    bullets: [
      "Verified supplier profiles with documentation & track record",
      "Saved searches, shortlists, and side-by-side offer comparison",
      "Role-based access & SSO for fast, secure sign-in",
      "Audit trail for every action and document",
    ],
    outcomes: [
      { label: "Cycle time", value: "-32%" },
      { label: "Onboarding time", value: "-55%" },
      { label: "User adoption", value: "+3.2×" },
    ],
  },
  {
    slug: "supply-journey",
    title: "Understand the full supply journey",
    tagline: "Real-time visibility from pit to port.",
    excerpt:
      "Track shipments with standardized milestones, documents, and notifications — all in one place.",
    image: "/features/feature-2.jpg",
    bullets: [
      "Milestones: pickup, export, customs, vessel, import, delivery",
      "Automated document packs & versioning",
      "Exception handling & alerts on delays or discrepancies",
      "APIs for ERP / TMS integrations",
    ],
    outcomes: [
      { label: "Exceptions resolved", value: "2× faster" },
      { label: "Lost docs", value: "-90%" },
      { label: "On-time delivery", value: "+18%" },
    ],
  },
  {
    slug: "insights-to-deals",
    title: "Turn insights into better deals",
    tagline: "Use data to negotiate smarter and reduce risk.",
    excerpt:
      "Pricing history, performance metrics, and market data help you unlock new opportunities.",
    image: "/features/feature-3.jpg",
    bullets: [
      "Price history & variance by supplier and lane",
      "Performance & risk scoring",
      "Scenario planning for volume & terms",
      "CSV export & BI connectors",
    ],
    outcomes: [
      { label: "Savings realized", value: "3–7%" },
      { label: "Negotiation time", value: "-25%" },
      { label: "Risk exposure", value: "-40%" },
    ],
  },
];

export function getFeatureBySlug(slug: string) {
  return FEATURES.find(f => f.slug === slug);
}
