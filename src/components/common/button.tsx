import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
    href?: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
};

export default function Button({
    href,
    children,
    variant = "primary",
    className,
}: ButtonProps) {
    const classes = cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
        "bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:scale-105",
        variant === "secondary" &&
        "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--primary)] hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]",
        variant === "ghost" &&
        "text-[var(--muted)] hover:text-[var(--foreground)]",
        className
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return <button className={classes}>{children}</button>;
}