export type CaseStudySection = {
  title: string;
  description: string;
  image: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  heroImage: string;
  problem: CaseStudySection;
  solution: CaseStudySection;
  result: CaseStudySection;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    category: "SaaS Product",
    intro:
      "A premium analytics dashboard designed to help teams understand key metrics, reduce reporting friction, and make faster business decisions.",
    heroImage: "/images/case-studies/saas/hero.png",
    problem: {
      title: "Scattered data created slow decisions.",
      description:
        "The team relied on disconnected tools, messy spreadsheets, and outdated reports. This made it difficult to understand performance quickly and created friction across departments.",
      image: "/images/case-studies/saas/problem.png",
    },
    solution: {
      title: "A unified dashboard with real-time clarity.",
      description:
        "We designed a clean SaaS dashboard with live KPIs, automated reporting, intuitive charts, and a scalable layout that helped teams see the right data faster.",
      image: "/images/case-studies/saas/solution.png",
    },
    result: {
      title: "Faster reporting, stronger visibility, better growth.",
      description:
        "The final experience improved decision-making speed, reduced manual reporting, and gave leadership a clearer view of growth metrics.",
      image: "/images/case-studies/saas/result.png",
    },
  },
  {
    slug: "ai-chat-app",
    title: "AI Chat App",
    category: "AI Product",
    intro:
      "An intelligent AI chat workspace that combines conversations, code generation, files, and productivity workflows into one premium interface.",
    heroImage: "/images/case-studies/ai/hero.png",
    problem: {
      title: "Users were switching between too many tools.",
      description:
        "Chat, documentation, code, files, and automation lived across separate apps. This created context switching, slower support, and poor productivity.",
      image: "/images/case-studies/ai/problem.png",
    },
    solution: {
      title: "One AI workspace for modern workflows.",
      description:
        "The solution combined chat, code assistance, file analysis, saved prompts, and assistant tools inside a clean AI-first experience.",
      image: "/images/case-studies/ai/solution.png",
    },
    result: {
      title: "Faster responses and better productivity.",
      description:
        "The AI workspace helped users move faster, reduce repetitive work, and increase engagement through a smoother intelligent workflow.",
      image: "/images/case-studies/ai/result.png",
    },
  },
  {
    slug: "ecommerce-website",
    title: "E-commerce Website",
    category: "Online Store",
    intro:
      "A conversion-focused e-commerce experience built around speed, trust, product clarity, and a smoother checkout journey.",
    heroImage: "/images/case-studies/ecommerce/hero.png",
    problem: {
      title: "Poor UX was hurting sales.",
      description:
        "Slow loading, weak product pages, poor mobile UX, and cart abandonment created friction that reduced conversions and revenue.",
      image: "/images/case-studies/ecommerce/problem.png",
    },
    solution: {
      title: "A faster shopping experience designed for trust.",
      description:
        "We rebuilt the storefront with clean product cards, mobile-first layouts, secure checkout cues, real-time inventory, and stronger visual hierarchy.",
      image: "/images/case-studies/ecommerce/solution.png",
    },
    result: {
      title: "More conversions and stronger revenue growth.",
      description:
        "The final store improved conversion flow, reduced friction, and helped customers move from browsing to checkout with confidence.",
      image: "/images/case-studies/ecommerce/result.png",
    },
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Personal Brand",
    intro:
      "A premium portfolio system built to help creators sell services through story, trust, visual proof, and conversion-focused sections.",
    heroImage: "/images/case-studies/portfolio/hero.png",
    problem: {
      title: "The old portfolio looked like a basic resume.",
      description:
        "Generic layouts, weak branding, poor project storytelling, and unclear CTAs made it difficult to convert visitors into serious clients.",
      image: "/images/case-studies/portfolio/problem.png",
    },
    solution: {
      title: "A premium service-selling portfolio.",
      description:
        "We created a story-driven experience with services, visual projects, case studies, testimonials, blog authority, and strong contact CTAs.",
      image: "/images/case-studies/portfolio/solution.png",
    },
    result: {
      title: "Stronger brand, more trust, better inquiries.",
      description:
        "The final portfolio helped position the creator like a premium service provider instead of a job-seeking resume page.",
      image: "/images/case-studies/portfolio/result.png",
    },
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "Fintech App",
    intro:
      "A secure mobile banking experience designed around trust, clarity, financial confidence, and simple money movement.",
    heroImage: "/images/case-studies/banking/hero.png",
    problem: {
      title: "Users lacked trust in the banking experience.",
      description:
        "Outdated UI, confusing transfers, slow interactions, and poor security signals made everyday banking feel stressful and unclear.",
      image: "/images/case-studies/banking/problem.png",
    },
    solution: {
      title: "A secure fintech app with clear flows.",
      description:
        "The new experience focused on biometric trust, instant transfers, spending insights, clean navigation, and transparent notifications.",
      image: "/images/case-studies/banking/solution.png",
    },
    result: {
      title: "Higher trust, better engagement, more transactions.",
      description:
        "The redesigned app improved confidence, reduced friction, and helped users complete financial actions more comfortably.",
      image: "/images/case-studies/banking/result.png",
    },
  },
  {
    slug: "analytics-platform",
    title: "Analytics Platform",
    category: "Enterprise SaaS",
    intro:
      "An enterprise analytics platform built to turn scattered data into clear insights, faster reporting, and smarter business decisions.",
    heroImage: "/images/case-studies/analytics/hero.png",
    problem: {
      title: "Teams were stuck with messy reporting.",
      description:
        "Disconnected data sources, manual reports, noisy dashboards, and outdated insights slowed down decision-making across the business.",
      image: "/images/case-studies/analytics/problem.png",
    },
    solution: {
      title: "A unified analytics system with live insights.",
      description:
        "We created real-time dashboards, custom reports, AI-powered insights, filters, and a scalable enterprise data experience.",
      image: "/images/case-studies/analytics/solution.png",
    },
    result: {
      title: "Smarter decisions and stronger performance.",
      description:
        "The platform helped teams reduce reporting time, increase clarity, and make faster data-led decisions with confidence.",
      image: "/images/case-studies/analytics/result.png",
    },
  },
];