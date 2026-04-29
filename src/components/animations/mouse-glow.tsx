"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
    const [position, setPosition] = useState({ x: -200, y: -200 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed z-[5] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glow-primary)] blur-3xl lg:block"
            style={{
                left: position.x,
                top: position.y,
                opacity: 0.22,
            }}
        />
    );
}