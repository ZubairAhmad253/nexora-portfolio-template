export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  theme: string;
  images: string[];
  liveUrl: string;
  codeUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    category: "SaaS Product",
    description:
      "A premium analytics dashboard built for business clarity, real-time KPIs, and scalable reporting.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Charts"],
    theme: "Blue / Purple",
    images: [
      "/images/projects/saas-1.png",
      "/images/projects/saas-2.png",
      "/images/projects/saas-3.png",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    slug: "ai-chat-app",
    title: "AI Chat App",
    category: "AI Product",
    description:
      "A modern AI assistant interface with chat, code generation, file analysis, and productivity workflows.",
    tech: ["React", "AI", "Tailwind", "UX"],
    theme: "Teal / Cyan",
    images: [
      "/images/projects/ai-1.png",
      "/images/projects/ai-2.png",
      "/images/projects/ai-3.png",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    slug: "ecommerce-website",
    title: "E-commerce Website",
    category: "Online Store",
    description:
      "A conversion-focused shopping experience with product pages, checkout flow, and mobile-first design.",
    tech: ["Next.js", "Commerce", "UX", "Payments"],
    theme: "Orange / Amber",
    images: [
      "/images/projects/ecommerce-1.png",
      "/images/projects/ecommerce-2.png",
      "/images/projects/ecommerce-3.png",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Personal Brand",
    description:
      "A story-driven portfolio designed to build trust, showcase projects, and convert visitors into clients.",
    tech: ["React", "GSAP", "Branding", "Motion"],
    theme: "Purple / Pink",
    images: [
      "/images/projects/portfolio-1.png",
      "/images/projects/portfolio-2.png",
      "/images/projects/portfolio-3.png",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "Fintech App",
    description:
      "A secure fintech experience with mobile banking, transaction flows, spending insights, and trust-focused UI.",
    tech: ["Mobile UI", "Fintech", "Security", "UX"],
    theme: "Emerald / Green",
    images: [
      "/images/projects/banking-1.png",
      "/images/projects/banking-2.png",
      "/images/projects/banking-3.png",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    slug: "analytics-platform",
    title: "Analytics Platform",
    category: "Enterprise SaaS",
    description:
      "A data intelligence platform with dashboards, reporting, advanced filters, and executive insights.",
    tech: ["Dashboard", "Analytics", "Data", "B2B"],
    theme: "Indigo / Blue",
    images: [
      "/images/projects/analytics-1.png",
      "/images/projects/analytics-2.png",
      "/images/projects/analytics-3.png",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
];