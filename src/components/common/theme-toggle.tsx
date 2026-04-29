"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                aria-label="Toggle theme"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/[0.04]"
            />
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/[0.04] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}