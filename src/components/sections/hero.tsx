"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import Container from "@/components/common/container";
import Button from "@/components/common/button";

export default function Hero() {
    const heroRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(".hero-reveal", {
                opacity: 0,
                y: 36,
                filter: "blur(12px)",
            });

            gsap.set(".hero-visual", {
                opacity: 0,
                y: 44,
                scale: 0.94,
                filter: "blur(14px)",
            });

            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            timeline
                .to(".hero-reveal", {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                    stagger: 0.12,
                })
                .to(
                    ".hero-visual",
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 1.15,
                    },
                    "-=0.55"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32"
        >
            <Image
                src="/images/hero/hero-bg.png"
                alt="Premium abstract background"
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 -z-30 object-cover object-center opacity-20"
            />

            <div className="absolute left-[-80px] top-32 -z-20 h-64 w-64 rounded-full bg-[var(--glow-primary)] blur-3xl sm:left-10 sm:h-72 sm:w-72" />
            <div className="absolute right-[-80px] top-20 -z-20 h-72 w-72 rounded-full bg-[var(--glow-secondary)] blur-3xl sm:right-10 sm:h-80 sm:w-80" />

            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-7">
                        <div className="hero-reveal mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.25em]">
                            Premium Portfolio Template
                        </div>

                        <h1 className="hero-reveal max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
                            Build a portfolio that{" "}
                            <span className="gradient-text">wins trust</span> and sells your
                            services.
                        </h1>

                        <p className="hero-reveal mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:mt-7 sm:text-lg sm:leading-8">
                            Nexora is not a resume website. It is a story-driven premium
                            portfolio built for developers, freelancers, and creators who want
                            to look elite and attract serious clients.
                        </p>

                        <div className="hero-reveal mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-row">
                            <Button href="#projects" className="w-full sm:w-auto">
                                View Projects
                            </Button>

                            <Button
                                href="#contact"
                                variant="secondary"
                                className="w-full sm:w-auto"
                            >
                                Start a Project
                            </Button>
                        </div>

                        <div className="hero-reveal mt-9 grid max-w-xl grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
                            <div className="premium-card rounded-2xl p-4">
                                <p className="gradient-text text-3xl font-bold">40+</p>
                                <p className="mt-2 text-sm text-[var(--muted)]">
                                    Projects Built
                                </p>
                            </div>

                            <div className="premium-card rounded-2xl p-4">
                                <p className="gradient-text text-3xl font-bold">20+</p>
                                <p className="mt-2 text-sm text-[var(--muted)]">
                                    Happy Clients
                                </p>
                            </div>

                            <div className="premium-card rounded-2xl p-4">
                                <p className="gradient-text text-3xl font-bold">5★</p>
                                <p className="mt-2 text-sm text-[var(--muted)]">
                                    Premium Quality
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual lg:col-span-5">
                        <div className="premium-card-strong glow-border rounded-3xl p-3 sm:p-5">
                            <div className="relative overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/projects/portfolio-1.png"
                                    alt="Portfolio preview"
                                    width={700}
                                    height={520}
                                    priority
                                    className="h-auto w-full object-cover"
                                />
                            </div>

                            <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
                                <div className="rounded-2xl border border-[var(--border)] p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                                        Focus
                                    </p>
                                    <p className="mt-2 font-semibold">Client Conversion</p>
                                </div>

                                <div className="rounded-2xl border border-[var(--border)] p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                                        Style
                                    </p>
                                    <p className="mt-2 font-semibold">Modern Luxury UI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}