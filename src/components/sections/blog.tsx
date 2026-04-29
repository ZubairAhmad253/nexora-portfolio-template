import Image from "next/image";
import Link from "next/link";

import Container from "@/components/common/container";
import SectionHeader from "@/components/common/section-header";
import { blogs } from "@/data/blogs";

export default function Blog() {
    return (
        <section id="blog" className="relative py-16 sm:py-20 lg:py-24">
            <Container>
                <SectionHeader
                    eyebrow="Insights"
                    title="Content that turns expertise into trust."
                    description="The blog section supports the portfolio by showing thinking, process, and authority behind each project type."
                />

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            data-reveal-card
                            className="premium-card group overflow-hidden rounded-[1.5rem] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--primary)] sm:rounded-[2rem]"
                        >
                            <Link href={`/blog/${blog.slug}`} className="block">
                                <div className="p-3 sm:p-4">
                                    <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition duration-700 group-hover:scale-[1.03]"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                                        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-xl">
                                            {blog.category}
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                                    <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em]">
                                        <span className="font-semibold text-[var(--primary)]">
                                            Insight
                                        </span>

                                        <span className="text-[var(--muted)]">{blog.readTime}</span>
                                    </div>

                                    <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
                                        {blog.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-7 inline-flex rounded-full border border-[var(--border)] bg-white/[0.04] px-4 py-2 text-sm font-semibold transition group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]">
                                        Read Article →
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}