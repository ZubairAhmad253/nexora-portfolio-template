import { cn } from "@/lib/utils";

type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
};

export default function SectionHeader({
    eyebrow,
    title,
    description,
    align = "center",
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "mb-16 max-w-3xl",
                align === "center" && "mx-auto text-center",
                align === "left" && "text-left",
                className
            )}
        >
            {eyebrow && (
                <div
                    className={cn(
                        "mb-5 inline-flex rounded-full border border-[var(--border)] bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)] backdrop-blur-xl",
                        align === "center" && "mx-auto"
                    )}
                >
                    {eyebrow}
                </div>
            )}

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
            </h2>

            {description && (
                <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}