import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/common/container";
import Button from "@/components/common/button";
import ScrollReveal from "@/components/animations/scroll-reveal";
import { blogs } from "@/data/blogs";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
            description: "The requested blog article could not be found.",
        };
    }

    return {
        title: blog.title,
        description: blog.excerpt,
        openGraph: {
            title: `${blog.title} — Nexora`,
            description: blog.excerpt,
            images: [
                {
                    url: blog.image,
                    width: 1200,
                    height: 675,
                    alt: blog.title,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${blog.title} — Nexora`,
            description: blog.excerpt,
            images: [blog.image],
        },
    };
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <>
            <Navbar />

            <main className="min-h-screen pt-32 pb-20 sm:pt-36 sm:pb-24">
                <Container>
                    <ScrollReveal>
                        <Link
                            href="/#blog"
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--foreground)] sm:mb-10"
                        >
                            <ArrowLeft size={16} />
                            Back to Blog
                        </Link>
                    </ScrollReveal>

                    <ScrollReveal>
                        <article>
                            <div className="mb-4 flex flex-wrap items-center gap-3 sm:mb-5">
                                <span className="inline-flex rounded-full border border-[var(--border)] bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)] sm:text-xs sm:tracking-[0.25em]">
                                    {blog.category}
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.18em]">
                                    <Clock size={14} />
                                    {blog.readTime}
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                                {blog.title}
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">
                                {blog.excerpt}
                            </p>

                            <div className="premium-card-strong mt-8 overflow-hidden rounded-[1.5rem] p-2 sm:mt-10 sm:rounded-[2rem] sm:p-3">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] sm:aspect-[16/9] sm:rounded-[1.5rem]">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mx-auto mt-12 max-w-3xl sm:mt-16">
                                <div className="premium-card rounded-[1.5rem] p-6 sm:rounded-[2rem] sm:p-10">
                                    {blog.sections.map((section, index) => (
                                        <section
                                            key={section.heading}
                                            className={index === 0 ? "" : "mt-9 sm:mt-10"}
                                        >
                                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                                {section.heading}
                                            </h2>

                                            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:mt-5 sm:text-base sm:leading-8">
                                                {section.body}
                                            </p>
                                        </section>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </ScrollReveal>

                    <ScrollReveal>
                        <section className="premium-card-strong mx-auto mt-12 max-w-3xl rounded-[1.5rem] p-6 text-center sm:mt-16 sm:rounded-[2rem] sm:p-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Want to build a premium portfolio?
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:mt-5 sm:text-base sm:leading-8">
                                Nexora helps creators turn projects, case studies, testimonials,
                                and content into a premium service-selling experience.
                            </p>

                            <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:justify-center">
                                <Button href="/#projects" className="w-full sm:w-auto">
                                    View Projects
                                </Button>

                                <Button
                                    href="/#contact"
                                    variant="secondary"
                                    className="w-full sm:w-auto"
                                >
                                    Start a Project
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