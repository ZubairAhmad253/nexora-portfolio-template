"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";

import Container from "@/components/common/container";
import SectionHeader from "@/components/common/section-header";
import Button from "@/components/common/button";
import { siteConfig } from "@/data/site-config";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [statusMessage, setStatusMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setStatus("loading");
        setStatusMessage("");

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            projectType: formData.get("projectType"),
            budget: formData.get("budget"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong.");
            }

            setStatus("success");
            setStatusMessage(result.message || "Message sent successfully.");
            form.reset();
        } catch (error) {
            setStatus("error");
            setStatusMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        }
    }

    return (
        <section id="contact" className="relative py-24">
            <Container>
                <div
                    data-reveal-card
                    className="premium-card-strong overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10"
                >
                    <SectionHeader
                        eyebrow="Start a Project"
                        title="Ready to turn your idea into a premium digital experience?"
                        description="This final section is built to convert visitors into serious leads with a clear, confident project inquiry flow."
                    />

                    <div className="grid gap-8 lg:grid-cols-12">
                        <div
                            data-reveal-card
                            className="rounded-[1.5rem] border border-[var(--border)] bg-white/[0.035] p-6 lg:col-span-7"
                        >
                            <form onSubmit={handleSubmit} className="grid gap-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        className="rounded-2xl border border-[var(--border)] bg-white/[0.04] px-5 py-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                                    />

                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email address"
                                        required
                                        className="rounded-2xl border border-[var(--border)] bg-white/[0.04] px-5 py-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                                    />
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <input
                                        name="projectType"
                                        type="text"
                                        placeholder="Project type"
                                        className="rounded-2xl border border-[var(--border)] bg-white/[0.04] px-5 py-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                                    />

                                    <input
                                        name="budget"
                                        type="text"
                                        placeholder="Budget range"
                                        className="rounded-2xl border border-[var(--border)] bg-white/[0.04] px-5 py-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    required
                                    className="resize-none rounded-2xl border border-[var(--border)] bg-white/[0.04] px-5 py-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                                />

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <Button className="w-fit">
                                        {status === "loading" ? "Sending..." : "Send Message"}{" "}
                                        <Send size={16} />
                                    </Button>

                                    {statusMessage && (
                                        <p
                                            className={`text-sm ${status === "success"
                                                    ? "text-emerald-400"
                                                    : "text-red-400"
                                                }`}
                                        >
                                            {statusMessage}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>

                        <div className="space-y-5 lg:col-span-5">
                            <div
                                data-reveal-card
                                className="rounded-[1.5rem] border border-[var(--border)] bg-white/[0.035] p-6"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-white shadow-[0_0_34px_var(--glow-primary)]">
                                    <Sparkles size={22} />
                                </div>

                                <h3 className="text-2xl font-semibold">
                                    Built to attract premium clients.
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                                    {siteConfig.brand.name} positions your work through services,
                                    proof, storytelling, case studies, testimonials, and a direct
                                    project inquiry experience.
                                </p>
                            </div>

                            <div
                                data-reveal-card
                                className="rounded-[1.5rem] border border-[var(--border)] bg-white/[0.035] p-6"
                            >
                                <div className="flex items-center gap-4">
                                    <Mail className="text-[var(--primary)]" size={20} />
                                    <span className="text-sm text-[var(--muted)]">
                                        {siteConfig.personal.email}
                                    </span>
                                </div>

                                <div className="mt-5 flex items-center gap-4">
                                    <MapPin className="text-[var(--primary)]" size={20} />
                                    <span className="text-sm text-[var(--muted)]">
                                        {siteConfig.personal.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}