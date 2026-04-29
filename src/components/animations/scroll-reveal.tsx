"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollRevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
};

export default function ScrollReveal({
    children,
    className,
    delay = 0,
    y = 48,
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const element = elementRef.current;
        if (!element) return;

        const ctx = gsap.context(() => {
            gsap.set(element, {
                opacity: 0,
                y,
                filter: "blur(12px)",
            });

            gsap.to(element, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                    invalidateOnRefresh: true,
                },
            });

            ScrollTrigger.refresh();
        }, element);

        return () => {
            ctx.revert();
            ScrollTrigger.refresh();
        };
    }, [delay, y]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}