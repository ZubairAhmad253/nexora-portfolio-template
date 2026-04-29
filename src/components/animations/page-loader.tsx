"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setVisible(false);
        }, 1300);

        return () => window.clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--background)]">
            <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-xl font-bold text-white shadow-[0_0_60px_var(--glow-primary)]">
                    N
                </div>

                <h1 className="mt-6 text-2xl font-bold tracking-[0.35em]">NEXORA</h1>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Build. Launch. Grow.
                </p>

                <div className="mx-auto mt-7 h-1 w-44 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full origin-left animate-[loader_1.2s_ease-in-out_infinite] bg-[linear-gradient(135deg,var(--primary),var(--secondary))]" />
                </div>
            </div>
        </div>
    );
}