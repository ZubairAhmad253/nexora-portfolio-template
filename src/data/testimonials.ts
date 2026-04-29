export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Founder",
    company: "SaaSPro",
    image: "/images/testimonials/avatar-1.png",
    review:
      "The dashboard redesign instantly made our product feel more premium. The storytelling and UI quality helped us build trust with customers faster.",
  },
  {
    id: 2,
    name: "Sarah Bennett",
    role: "Marketing Director",
    company: "GrowthLab",
    image: "/images/testimonials/avatar-2.png",
    review:
      "Our brand perception improved dramatically. The website no longer feels like a basic portfolio — it feels like a serious service business.",
  },
  {
    id: 3,
    name: "Daniel Khan",
    role: "Product Manager",
    company: "FinCore",
    image: "/images/testimonials/avatar-3.png",
    review:
      "The design improved onboarding clarity and made our fintech product feel safer, cleaner, and much easier to trust.",
  },
  {
    id: 4,
    name: "Emma Clarke",
    role: "Founder",
    company: "Nova Creative",
    image: "/images/testimonials/avatar-4.png",
    review:
      "The case-study structure helped us explain our value better and attract higher-quality clients. It felt premium from the first scroll.",
  },
];