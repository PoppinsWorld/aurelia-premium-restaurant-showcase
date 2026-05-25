/**
 * AURELIA - Performance Optimization Utilities
 *
 * Helpers for Lighthouse 95+ score.
 * Terminal 4 ownership: performance and optimization.
 */

// ── Preload critical resources ──────────────────────────────────
export function getPreloadLinks() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous" as const,
    },
  ];
}

// ── Font display configuration ──────────────────────────────────
// Use in CSS @font-face or next/font: display: "swap"
export const fontDisplayConfig = {
  display: "swap" as const,
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
};

// ── Lazy load images with IntersectionObserver ──────────────────
export function createLazyObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) {
  if (typeof window === "undefined") return null;

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    },
    {
      rootMargin: "200px 0px",
      threshold: 0.01,
      ...options,
    }
  );
}

// ── Image loading helper ────────────────────────────────────────
export function getOptimizedImageProps(
  src: string,
  alt: string,
  priority = false
) {
  return {
    src,
    alt,
    loading: (priority ? "eager" : "lazy") as "eager" | "lazy",
    decoding: "async" as const,
    ...(priority ? { fetchPriority: "high" as const } : {}),
  };
}

// ── Resource hints for APK downloads ────────────────────────────
export function getDownloadPreloads() {
  return [
    {
      rel: "prefetch",
      href: "/apk/app-arm64-v8a-release.apk",
      as: "fetch",
    },
  ];
}
