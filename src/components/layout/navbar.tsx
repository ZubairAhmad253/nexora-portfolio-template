"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import Button from "@/components/common/button";
import Container from "@/components/common/container";
import ThemeToggle from "@/components/common/theme-toggle";
import { siteConfig } from "@/data/site-config";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
            <Container>
                <div className="premium-card rounded-2xl px-3 py-3 sm:px-5 sm:py-4">
                    <div className="flex items-center justify-between gap-3 sm:gap-6">
                        <a href="#" className="flex min-w-0 items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-sm font-bold text-white shadow-[0_0_30px_var(--glow-primary)]">
                                {siteConfig.brand.logoText}
                            </div>

                            <div className="min-w-0">
                                <p className="hidden text-xs font-semibold tracking-[0.3em] text-[var(--muted)] sm:block">
                                    BRAND
                                </p>
                                <h2 className="truncate text-base font-bold tracking-wide sm:text-lg">
                                    {siteConfig.brand.name.toUpperCase()}
                                </h2>
                            </div>
                        </a>

                        <nav className="hidden items-center gap-7 lg:flex">
                            {siteConfig.navigation.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <div className="hidden items-center gap-3 md:flex">
                            <ThemeToggle />
                            <Button href="#contact">{siteConfig.cta.primary}</Button>
                        </div>

                        <div className="flex shrink-0 items-center gap-2 md:hidden">
                            <ThemeToggle />

                            <button
                                type="button"
                                aria-label="Toggle menu"
                                onClick={() => setOpen((value) => !value)}
                                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/[0.04] text-[var(--foreground)]"
                            >
                                {open ? <X size={19} /> : <Menu size={19} />}
                            </button>
                        </div>
                    </div>

                    {open && (
                        <div className="mt-4 border-t border-[var(--border)] pt-4 md:hidden">
                            <nav className="grid gap-3">
                                {siteConfig.navigation.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="rounded-2xl border border-[var(--border)] bg-white/[0.035] px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--foreground)]"
                                    >
                                        {link.label}
                                    </a>
                                ))}

                                <Button href="#contact" className="mt-2 w-full">
                                    {siteConfig.cta.primary}
                                </Button>
                            </nav>
                        </div>
                    )}
                </div>
            </Container>
        </header>
    );
}