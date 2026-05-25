"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
}

const directionMap = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: -24 },
  right: { x: 24 },
  none: {},
};

export default function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 24,
}: FadeInProps) {
  const offset = directionMap[direction];
  const adjusted =
    direction === "up"
      ? { y: distance }
      : direction === "down"
        ? { y: -distance }
        : direction === "left"
          ? { x: -distance }
          : direction === "right"
            ? { x: distance }
            : {};

  return (
    <motion.div
      initial={{ opacity: 0, ...adjusted }}
      whileInView={{ opacity: 1, ...offset }}
      viewport={{ once: true, margin: "-50px" }}
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
