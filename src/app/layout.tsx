import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/common/theme-provider";
import SmoothScroll from "@/components/animations/smooth-scroll";
import MouseGlow from "@/components/animations/mouse-glow";
import PageLoader from "@/components/animations/page-loader";
import CardRevealProvider from "@/components/animations/card-reveal-provider";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.description,
  keywords: [
    "premium portfolio template",
    "developer portfolio template",
    "Next.js portfolio",
    "React portfolio template",
    "freelancer portfolio",
    "animated portfolio",
    "case study portfolio",
    "service portfolio website",
  ],
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    siteName: siteConfig.brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <PageLoader />
            <MouseGlow />
            <CardRevealProvider />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}