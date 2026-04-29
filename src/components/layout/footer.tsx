import Container from "@/components/common/container";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
    return (
        <footer className="relative py-10">
            <Container>
                <div className="premium-card rounded-[2rem] p-8">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-sm font-bold text-white">
                                    {siteConfig.brand.logoText}
                                </div>

                                <h2 className="text-xl font-bold tracking-wide">
                                    {siteConfig.brand.name.toUpperCase()}
                                </h2>
                            </div>

                            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
                                {siteConfig.brand.description}
                            </p>
                        </div>

                        <nav className="flex flex-wrap gap-5">
                            {siteConfig.navigation.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
                        <p>
                            © 2026 {siteConfig.brand.name}. All rights reserved.
                        </p>
                        <p>{siteConfig.brand.tagline}</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}