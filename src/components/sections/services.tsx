import {
    BrainCircuit,
    Code2,
    LayoutDashboard,
    Palette,
    ShoppingCart,
    Sparkles,
} from "lucide-react";

import Container from "@/components/common/container";
import SectionHeader from "@/components/common/section-header";

const services = [
    {
        title: "Premium Web Development",
        description:
            "High-performance websites with clean code, strong visual direction, and conversion-focused structure.",
        icon: Code2,
        span: "lg:col-span-2",
    },
    {
        title: "SaaS Interfaces",
        description:
            "Dashboards, product experiences, onboarding flows, and scalable UI systems for modern SaaS brands.",
        icon: LayoutDashboard,
        span: "lg:col-span-1",
    },
    {
        title: "AI Product UI",
        description:
            "AI chat apps, intelligent workflows, prompt systems, and futuristic product interfaces.",
        icon: BrainCircuit,
        span: "lg:col-span-1",
    },
    {
        title: "E-commerce Experiences",
        description:
            "Product pages, storefronts, and checkout flows designed to build trust and increase sales.",
        icon: ShoppingCart,
        span: "lg:col-span-1",
    },
    {
        title: "UI/UX Design Systems",
        description:
            "Reusable components, brand consistency, visual hierarchy, and premium interaction patterns.",
        icon: Palette,
        span: "lg:col-span-1",
    },
    {
        title: "Motion & Storytelling",
        description:
            "GSAP animations, scroll reveals, parallax, and micro-interactions that make the experience memorable.",
        icon: Sparkles,
        span: "lg:col-span-2",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-16 sm:py-20 lg:py-24">
            <Container>
                <SectionHeader
                    eyebrow="Services"
                    title="Not a CV. A premium service experience."
                    description="The portfolio is designed to position you like a serious digital partner — showing what you solve, how you think, and why clients should trust you."
                />

                <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                data-reveal-card
                                className={`premium-card group relative overflow-hidden rounded-[1.5rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] sm:rounded-3xl sm:p-7 ${service.span}`}
                            >
                                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-[var(--glow-primary)] blur-3xl transition group-hover:bg-[var(--glow-secondary)] sm:h-32 sm:w-32" />

                                <div className="relative">
                                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-white shadow-[0_0_34px_var(--glow-primary)] sm:mb-8 sm:h-14 sm:w-14">
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="max-w-xl text-xl font-semibold sm:text-2xl">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:mt-4">
                                        {service.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}