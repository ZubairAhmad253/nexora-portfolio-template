import Image from "next/image";
import Container from "@/components/common/container";
import SectionHeader from "@/components/common/section-header";

const stats = [
    {
        value: "5+",
        label: "Years Experience",
    },
    {
        value: "40+",
        label: "Projects Delivered",
    },
    {
        value: "20+",
        label: "Happy Clients",
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-24">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <div className="premium-card-strong glow-border relative mx-auto aspect-square max-w-[420px] overflow-hidden rounded-[2rem] p-3">
                            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                                <Image
                                    src="/images/about/avatar.png"
                                    alt="Abstract developer avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <SectionHeader
                            align="left"
                            eyebrow="About"
                            title="Built for creators who want to look like a premium brand."
                            description="This template is not designed like a resume. It is designed like a high-end service website — helping visitors understand your value, your process, and your results."
                            className="mb-8"
                        />

                        <div className="premium-card rounded-3xl p-7">
                            <p className="text-base leading-8 text-[var(--muted)]">
                                Nexora helps developers, designers, and freelancers showcase
                                their work through story-driven sections, visual proof, case
                                studies, blog authority, and conversion-focused calls to action.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-2xl border border-[var(--border)] bg-white/[0.035] p-5"
                                    >
                                        <div className="gradient-text text-3xl font-bold">
                                            {stat.value}
                                        </div>

                                        <p className="mt-2 text-sm text-[var(--muted)]">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}