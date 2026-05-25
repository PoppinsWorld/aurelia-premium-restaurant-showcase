/**
 * AURELIA Typography Presets
 *
 * Tailwind class combinations for consistent typography.
 */

export const typography = {
  display: {
    hero: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]",
    large: "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[0.95]",
    medium: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1]",
  },
  heading: {
    h1: "text-3xl sm:text-4xl font-bold tracking-tight leading-tight",
    h2: "text-2xl sm:text-3xl font-semibold tracking-tight leading-tight",
    h3: "text-xl sm:text-2xl font-semibold tracking-tight leading-snug",
    h4: "text-lg sm:text-xl font-semibold leading-snug",
  },
  body: {
    lg: "text-lg leading-relaxed",
    md: "text-base leading-relaxed",
    sm: "text-sm leading-relaxed",
    xs: "text-xs leading-relaxed",
  },
  label: {
    uppercase: "text-xs font-medium uppercase tracking-[0.2em]",
    badge: "text-xs font-semibold uppercase tracking-wider",
    caption: "text-[11px] font-medium uppercase tracking-[0.15em]",
  },
  gradient: {
    gold: "bg-gradient-to-r from-[#C9A96E] via-[#D4B87A] to-[#C9A96E] bg-clip-text text-transparent",
    subtle:
      "bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent",
  },
} as const;
