import Image from "next/image";

import Container from "@/components/common/container";
import SectionHeader from "@/components/common/section-header";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24">
            <Container>
                <SectionHeader
                    eyebrow="Client Proof"
                    title="Trust signals that make visitors believe faster."
                    description="Testimonials help the portfolio feel like a real premium service business, not a basic personal website."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {testimonials.map((item) => (
                        <article
                            key={item.id}
                            data-reveal-card
                            className="premium-card group relative overflow-hidden rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
                        >
                            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--glow-primary)] blur-3xl transition group-hover:bg-[var(--glow-secondary)]" />

                            <div className="relative">
                                <div className="flex items-center gap-4">
                                    <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/10">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="64px"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-sm text-[var(--muted)]">
                                            {item.role}, {item.company}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 text-sm text-yellow-400">★★★★★</div>

                                <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                                    “{item.review}”
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}