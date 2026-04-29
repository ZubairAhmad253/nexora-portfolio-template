import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/common/container";
import Button from "@/components/common/button";
import ScrollReveal from "@/components/animations/scroll-reveal";
import { caseStudies } from "@/data/case-studies";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = caseStudies.find((item) => item.slug === slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} Case Study`,
        description: project.intro,
    };
}

export default async function ProjectCaseStudyPage({
    params,
}: PageProps) {
    const { slug } = await params;
    const project = caseStudies.find((item) => item.slug === slug);

    if (!project) notFound();

    return (
        <>
            <Navbar />

            <main className="min-h-screen pt-32 pb-20 sm:pt-36 sm:pb-24">
                <Container>
                    <ScrollReveal>
                        <Link
                            href="/#projects"
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[var(--muted)]"
                        >
                            <ArrowLeft size={16} />
                            Back to Projects
                        </Link>
                    </ScrollReveal>

                    <ScrollReveal>
                        <section>
                            <div className="mb-4 inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)] sm:text-xs">
                                {project.category}
                            </div>

                            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                                {project.title}
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                                {project.intro}
                            </p>

                            <div className="premium-card-strong mt-8 overflow-hidden rounded-[1.5rem] p-2 sm:mt-10 sm:rounded-[2rem] sm:p-3">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] sm:aspect-[16/9] sm:rounded-[1.5rem]">
                                    <Image
                                        src={project.heroImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {[
                        ["Problem", project.problem, false],
                        ["Solution", project.solution, true],
                        ["Result", project.result, false],
                    ].map(([label, data, reverse], i) => (
                        <ScrollReveal key={i}>
                            <section className="mt-16 grid items-center gap-8 sm:mt-24 lg:grid-cols-12 lg:gap-10">
                                <div
                                    className={`${reverse
                                            ? "lg:order-2 lg:col-span-6"
                                            : "lg:col-span-6"
                                        }`}
                                >
                                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)] sm:text-sm">
                                        {label as string}
                                    </p>

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        {(data as any).title}
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                                        {(data as any).description}
                                    </p>
                                </div>

                                <div
                                    className={`premium-card overflow-hidden rounded-[1.5rem] p-2 sm:rounded-[2rem] sm:p-3 ${reverse
                                            ? "lg:order-1 lg:col-span-6"
                                            : "lg:col-span-6"
                                        }`}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
                                        <Image
                                            src={(data as any).image}
                                            alt={(data as any).title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>
                    ))}

                    <ScrollReveal>
                        <section className="premium-card-strong mt-16 rounded-[1.5rem] p-6 text-center sm:mt-24 sm:rounded-[2rem] sm:p-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Want a project like this?
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:mt-5 sm:text-base sm:leading-8">
                                Use Nexora to position your skills through premium storytelling,
                                trust, and conversion-focused design.
                            </p>

                            <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:justify-center">
                                <Button href="/#contact" className="w-full sm:w-auto">
                                    Start a Project
                                </Button>

                                <Button
                                    href="/#projects"
                                    variant="secondary"
                                    className="w-full sm:w-auto"
                                >
                                    Back to Projects
                                </Button>
                            </div>
                        </section>
                    </ScrollReveal>
                </Container>
            </main>

            <Footer />
        </>
    );
}