import { Code, Database, Wrench } from "lucide-react";

import Container from "@/components/common/container";
import SectionHeader from "@/components/common/section-header";

const skillGroups = [
    {
        title: "Frontend Engineering",
        description:
            "Interactive, responsive interfaces built with reusable components and premium visual polish.",
        icon: Code,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "Product Foundations",
        description:
            "Clean architecture for dashboards, SaaS flows, authentication, APIs, and scalable data structures.",
        icon: Database,
        skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Auth"],
    },
    {
        title: "Premium Motion",
        description:
            "Smooth storytelling animations, scroll interactions, hover effects, and high-end transitions.",
        icon: Wrench,
        skills: ["GSAP", "ScrollTrigger", "Lenis", "Figma", "Vercel"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24">
            <Container>
                <SectionHeader
                    eyebrow="Capabilities"
                    title="A stack built for premium product experiences."
                    description="Skills are presented as business capabilities — helping clients understand how each tool contributes to better products."
                />

                <div className="grid gap-6 lg:grid-cols-3">
                    {skillGroups.map((group) => {
                        const Icon = group.icon;

                        return (
                            <article
                                key={group.title}
                                data-reveal-card
                                className="premium-card group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
                            >
                                <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[var(--glow-primary)] blur-3xl transition group-hover:bg-[var(--glow-secondary)]" />

                                <div className="relative">
                                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/[0.04] text-[var(--primary)]">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="text-2xl font-semibold">{group.title}</h3>

                                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                                        {group.description}
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-[var(--border)] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--foreground)]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}