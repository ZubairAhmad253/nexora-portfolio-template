"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";

import Container from "@/components/common/container";
import SectionHeader from "@/components/common/section-header";
import Button from "@/components/common/button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
    const [activeImages, setActiveImages] = useState<Record<number, number>>({});

    const getActiveIndex = (projectId: number) => activeImages[projectId] ?? 0;

    const setPreview = (projectId: number, index: number) => {
        setActiveImages((prev) => ({
            ...prev,
            [projectId]: index,
        }));
    };

    return (
        <section id="projects" className="relative py-16 sm:py-20 lg:py-24">
            <Container>
                <SectionHeader
                    eyebrow="Selected Work"
                    title="Story-driven projects, not just screenshots."
                    description="Each project is presented like a real product: visual proof, technical stack, service value, and a detailed case study."
                />

                <div className="grid gap-6 lg:grid-cols-2">
                    {projects.map((project, index) => {
                        const activeIndex = getActiveIndex(project.id);
                        const featured = index === 0 || index === 3;

                        return (
                            <article
                                key={project.id}
                                data-reveal-card
                                className={cn(
                                    "premium-card group overflow-hidden rounded-[1.5rem] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--primary)] sm:rounded-[2rem]",
                                    featured && "lg:col-span-2"
                                )}
                            >
                                <div
                                    className={cn(
                                        "grid",
                                        featured ? "lg:grid-cols-12" : "grid-cols-1"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "relative overflow-hidden bg-black/20 p-3 sm:p-4",
                                            featured && "lg:col-span-7"
                                        )}
                                    >
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="relative block aspect-[16/9] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]"
                                        >
                                            <Image
                                                src={project.images[activeIndex]}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 55vw"
                                                className="object-cover transition duration-700 group-hover:scale-[1.02]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                                            <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-xl">
                                                {project.theme}
                                            </div>
                                        </Link>

                                        <div className="mt-4 flex items-center justify-center gap-2">
                                            {project.images.map((image, imageIndex) => (
                                                <button
                                                    key={image}
                                                    type="button"
                                                    aria-label={`Show ${project.title} image ${imageIndex + 1
                                                        }`}
                                                    onClick={() => setPreview(project.id, imageIndex)}
                                                    className={cn(
                                                        "h-2.5 rounded-full transition-all duration-300",
                                                        activeIndex === imageIndex
                                                            ? "w-8 bg-[linear-gradient(135deg,var(--primary),var(--secondary))]"
                                                            : "w-2.5 bg-white/25 hover:bg-white/50"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div
                                        className={cn(
                                            "flex flex-col justify-between p-6 sm:p-7",
                                            featured && "lg:col-span-5"
                                        )}
                                    >
                                        <div>
                                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                                <span className="rounded-full border border-[var(--border)] bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--primary)] sm:text-xs">
                                                    {project.category}
                                                </span>

                                                <span className="rounded-full border border-[var(--border)] bg-white/[0.04] px-3 py-1 text-[10px] text-[var(--muted)] sm:text-xs">
                                                    Case Study
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                                {project.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                                                {project.description}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {project.tech.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-full border border-[var(--border)] bg-white/[0.04] px-3 py-1.5 text-xs text-[var(--muted)]"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
                                            <Button
                                                href={project.liveUrl}
                                                className="w-full px-4 py-2 text-xs sm:w-auto"
                                            >
                                                Live <ArrowUpRight size={16} />
                                            </Button>

                                            <Button
                                                href={project.codeUrl}
                                                variant="secondary"
                                                className="w-full px-4 py-2 text-xs sm:w-auto"
                                            >
                                                Code <Code2 size={16} />
                                            </Button>

                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-white/[0.035] px-4 py-2 text-xs font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto"
                                            >
                                                View Case Study →
                                            </Link>
                                        </div>
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