"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CardRevealProvider() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray<HTMLElement>("[data-reveal-card]");

        const animations = cards.map((card) =>
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 42,
                    scale: 0.96,
                    filter: "blur(10px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        );

        ScrollTrigger.refresh();

        return () => {
            animations.forEach((animation) => animation.kill());
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return null;
}