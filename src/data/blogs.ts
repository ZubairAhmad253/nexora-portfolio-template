export type BlogSection = {
  heading: string;
  body: string;
};

export type Blog = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "premium-saas-dashboard",
    title: "How I Built a Premium SaaS Dashboard",
    excerpt:
      "Designing dashboards that feel premium while improving clarity, KPIs, and decision making.",
    image: "/images/blog/blog-1.png",
    category: "SaaS",
    readTime: "5 min read",
    sections: [
      {
        heading: "Start with business clarity",
        body: "A premium SaaS dashboard should not be a collection of random charts. It should help users understand what matters first: revenue, growth, activity, retention, and operational health.",
      },
      {
        heading: "Design the hierarchy before the UI",
        body: "The strongest dashboards guide the eye from high-level KPIs to deeper insights. Cards, charts, tables, and filters should feel connected, not scattered.",
      },
      {
        heading: "Make the data feel actionable",
        body: "Good dashboard design helps users make decisions faster. That means clear labels, strong contrast, useful comparisons, and clean spacing around every metric.",
      },
    ],
  },
  {
    id: 2,
    slug: "ai-chat-modern-ux",
    title: "Building AI Chat Apps with Modern UX",
    excerpt:
      "How to create AI products that feel fast, clear, and enjoyable to use.",
    image: "/images/blog/blog-2.png",
    category: "AI",
    readTime: "6 min read",
    sections: [
      {
        heading: "AI apps need clarity, not complexity",
        body: "Users should immediately understand what the assistant can do. A clean chat area, clear prompt input, and useful side tools make the experience feel powerful without overwhelming users.",
      },
      {
        heading: "Context is the product",
        body: "The best AI interfaces show files, prompts, chat history, and assistant settings in a way that supports the current task. This makes the product feel intelligent and useful.",
      },
      {
        heading: "Trust comes from feedback",
        body: "Loading states, generated previews, file confirmations, and clear responses help users trust the AI system. Premium UX makes the interaction feel controlled and reliable.",
      },
    ],
  },
  {
    id: 3,
    slug: "ecommerce-sales-ux",
    title: "E-commerce UX That Increases Sales",
    excerpt:
      "Conversion-first UI patterns that improve trust and boost revenue.",
    image: "/images/blog/blog-3.png",
    category: "E-commerce",
    readTime: "4 min read",
    sections: [
      {
        heading: "Remove friction from buying",
        body: "E-commerce design should make browsing, comparing, adding to cart, and checking out feel effortless. Every extra confusing step can reduce trust and hurt conversions.",
      },
      {
        heading: "Product pages must build confidence",
        body: "Strong product visuals, clear pricing, trust badges, variant selection, and visible CTAs help customers make decisions faster.",
      },
      {
        heading: "Checkout should feel safe",
        body: "A premium checkout flow uses simple forms, clear order summaries, secure payment cues, and minimal distractions. The goal is to make payment feel easy and trustworthy.",
      },
    ],
  },
  {
    id: 4,
    slug: "portfolio-gets-clients",
    title: "Portfolio Design That Gets Clients",
    excerpt:
      "Why most portfolios fail and how to turn yours into a sales machine.",
    image: "/images/blog/blog-4.png",
    category: "Portfolio",
    readTime: "5 min read",
    sections: [
      {
        heading: "A portfolio is not a CV",
        body: "A strong portfolio should sell your services, not simply list your skills. Visitors need to understand what you solve, how you work, and why they should trust you.",
      },
      {
        heading: "Projects need stories",
        body: "Instead of only showing screenshots, explain the problem, solution, and result. This makes your work feel more strategic and business-focused.",
      },
      {
        heading: "Trust must be visible",
        body: "Testimonials, case studies, service positioning, strong visuals, and clear CTAs help visitors move from curiosity to inquiry.",
      },
    ],
  },
  {
    id: 5,
    slug: "fintech-trust-ui",
    title: "Fintech App UI: Trust by Design",
    excerpt:
      "Design principles for financial products that users trust instantly.",
    image: "/images/blog/blog-5.png",
    category: "Fintech",
    readTime: "6 min read",
    sections: [
      {
        heading: "Trust starts with clarity",
        body: "Finance apps must make balances, transactions, transfers, and confirmations easy to understand. Confusion creates anxiety, especially when money is involved.",
      },
      {
        heading: "Security should be visible",
        body: "Users need to feel protected. Biometric login, secure confirmations, alerts, and transparent flows help create confidence.",
      },
      {
        heading: "Make money movement simple",
        body: "Transfers, payments, and account actions should be direct, predictable, and easy to review before confirmation.",
      },
    ],
  },
  {
    id: 6,
    slug: "analytics-users-love",
    title: "Analytics Dashboards Users Love",
    excerpt:
      "How to design analytics tools that users actually enjoy using.",
    image: "/images/blog/blog-6.png",
    category: "Analytics",
    readTime: "5 min read",
    sections: [
      {
        heading: "Data needs a clear story",
        body: "Analytics platforms should not overwhelm users with endless numbers. The interface should explain what changed, why it matters, and what action to take next.",
      },
      {
        heading: "Filters must feel effortless",
        body: "Date ranges, segments, channels, regions, and reports should be easy to adjust without breaking the user’s focus.",
      },
      {
        heading: "Executives need quick answers",
        body: "The best analytics products help teams make decisions quickly through summary cards, comparison views, alerts, and clean visualizations.",
      },
    ],
  },
];