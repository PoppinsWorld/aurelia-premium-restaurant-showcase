/**
 * AURELIA Motion Presets
 *
 * Framer Motion variants for consistent animations.
 * Organized by animation type for easy reuse.
 */

import type { Variants, Transition } from "framer-motion";

const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

const smooth: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

const snappy: Transition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smooth,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smooth,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smooth,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smooth,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smooth,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring,
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

export const hoverScale = {
  scale: 1.03,
  transition: snappy,
};

export const hoverLift = {
  y: -4,
  transition: snappy,
};

export const tapScale = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

export const motionPresets = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideUp,
  staggerContainer,
  staggerFast,
  staggerSlow,
  hoverScale,
  hoverLift,
  tapScale,
  transitions: { spring, smooth, snappy },
} as const;
