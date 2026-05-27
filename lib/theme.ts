/**
 * AURELIA Design System - Theme Constants
 *
 * Central source of truth for all design tokens.
 * Used by components for consistent styling.
 */

export const theme = {
  colors: {
    bg: {
      primary: "#0A0A0A",
      secondary: "#111111",
      tertiary: "#1A1A1A",
      card: "#141414",
      overlay: "rgba(0, 0, 0, 0.8)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A3A3A3",
      muted: "#6B6B6B",
      accent: "#C9A96E",
    },
    gold: {
      primary: "#C9A96E",
      light: "#D4B87A",
      dark: "#B8944F",
      glow: "rgba(201, 169, 110, 0.15)",
      glowStrong: "rgba(201, 169, 110, 0.3)",
    },
    border: {
      subtle: "rgba(255, 255, 255, 0.06)",
      default: "rgba(255, 255, 255, 0.1)",
      accent: "rgba(201, 169, 110, 0.3)",
    },
  },
  spacing: {
    section: "py-16 sm:py-24 md:py-32 lg:py-40",
    container: "max-w-7xl mx-auto px-5 sm:px-6 lg:px-8",
    containerNarrow: "max-w-5xl mx-auto px-5 sm:px-6 lg:px-8",
    containerWide: "max-w-[90rem] mx-auto px-5 sm:px-6 lg:px-8",
  },
  borderRadius: {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-2xl",
    full: "rounded-full",
  },
  transitions: {
    fast: "transition-all duration-200 ease-out",
    default: "transition-all duration-300 ease-out",
    slow: "transition-all duration-500 ease-out",
    spring: "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
  },
} as const;

export type Theme = typeof theme;
