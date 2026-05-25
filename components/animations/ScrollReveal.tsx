"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type RevealVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  margin?: string;
}

const variantMap: Record<
  RevealVariant,
  { initial: Record<string, number>; animate: Record<string, number> }
> = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  distance = 24,
  once = true,
  margin = "-50px",
}: ScrollRevealProps) {
  const base = variantMap[variant];

  const initial = { ...base.initial };
  const animate = { ...base.animate };

  if (variant === "fadeUp" || variant === "fadeLeft" || variant === "fadeRight") {
    const key = variant === "fadeUp" ? "y" : "x";
    const sign = variant === "fadeLeft" ? -1 : 1;
    initial[key] = sign * distance;
    animate[key] = 0;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
