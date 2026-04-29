import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Blog from "@/components/sections/blog";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

import ScrollReveal from "@/components/animations/scroll-reveal";

export const metadata: Metadata = {
  title: "Premium Animated Portfolio Template",
  description:
    "Nexora is a premium Next.js portfolio template for developers, freelancers, agencies, and creators who want to sell services through story, trust, and premium UI.",
  openGraph: {
    title: "Nexora — Premium Animated Portfolio Template",
    description:
      "A story-driven portfolio template with services, projects, case studies, blogs, testimonials, contact funnels, animations, and dark/light mode.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora — Premium Animated Portfolio Template",
    description:
      "Premium animated portfolio template for serious creators and service providers.",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent text-[var(--foreground)]">
      <Navbar />

      <Hero />

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <Blog />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <Footer />
    </main>
  );
}