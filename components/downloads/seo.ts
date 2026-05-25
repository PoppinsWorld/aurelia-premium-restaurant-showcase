/**
 * AURELIA - SEO Configuration
 *
 * Structured data, Open Graph, and Twitter card helpers.
 * Terminal 4 ownership: SEO and social preview metadata.
 */

import { siteConfig } from "@/data/site";

// ── Open Graph image paths ──────────────────────────────────────
export const ogImages = {
  default: "/images/og-image.jpg",
  hero: "/images/og-hero.jpg",
  menu: "/images/og-menu.jpg",
} as const;

// ── Twitter card meta tags ──────────────────────────────────────
export function getTwitterMeta(title?: string, description?: string) {
  return {
    card: "summary_large_image" as const,
    site: "@aurelia",
    creator: "@aurelia",
    title: title ?? siteConfig.title,
    description: description ?? siteConfig.description,
    images: [`${siteConfig.url}${ogImages.default}`],
  };
}

// ── Open Graph meta tags ────────────────────────────────────────
export function getOpenGraphMeta(title?: string, description?: string) {
  return {
    type: "website" as const,
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: title ?? siteConfig.title,
    description: description ?? siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${ogImages.default}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  };
}

// ── JSON-LD structured data (Restaurant schema) ─────────────────
export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${ogImages.default}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "16:00",
        closes: "00:00",
      },
    ],
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.facebook,
      siteConfig.links.twitter,
    ],
  };
}

// ── JSON-LD for mobile app (SoftwareApplication schema) ─────────
export function getAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: `${siteConfig.name} App`,
    description:
      "Order, reserve, and explore the AURELIA menu from your Android device.",
    operatingSystem: "Android",
    applicationCategory: "Food & Drink",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: `${siteConfig.url}/apk/app-arm64-v8a-release.apk`,
  };
}
