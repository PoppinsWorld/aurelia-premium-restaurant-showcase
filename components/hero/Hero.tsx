"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroContent } from "@/content";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations";
import HeroBackground from "./HeroBackground";

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
          className="flex flex-col items-center text-center -mt-8"
        >
          {/* Badge */}
          <motion.div variants={staggerChild}>
            <span
              className={cn(
                "inline-block rounded-full border px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em]",
                "border-[rgba(201,169,110,0.2)] text-[#C9A96E]",
                "shadow-[0_0_20px_rgba(201,169,110,0.08)]"
              )}
            >
              {heroContent.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerChild}
            className="mt-10 text-5xl font-bold tracking-tight leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {heroContent.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 0 ? (
                  line
                ) : (
                  <span className="bg-gradient-to-r from-[#C9A96E] via-[#D4B87A] to-[#C9A96E] bg-clip-text text-transparent">
                    {line}
                  </span>
                )}
              </span>
            ))}
          </motion.h1>

          {/* Separator */}
          <motion.div
            variants={staggerChild}
            className="mt-8 h-px w-16 bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent"
          />

          {/* Subheadline */}
          <motion.p
            variants={staggerChild}
            className="mt-6 max-w-lg text-base leading-relaxed text-[#8A8A8A] sm:text-lg"
          >
            {heroContent.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerChild}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={heroContent.cta.primary.href}
              className={cn(
                "inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium",
                "bg-[#C9A96E] text-[#0A0A0A]",
                "transition-all duration-300 ease-out",
                "hover:bg-[#D4B87A] hover:shadow-[0_4px_20px_rgba(201,169,110,0.3)]",
                "active:scale-[0.97]"
              )}
            >
              {heroContent.cta.primary.label}
            </a>
            <a
              href={heroContent.cta.secondary.href}
              className={cn(
                "inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium",
                "border border-[rgba(201,169,110,0.3)] text-[#C9A96E]",
                "transition-all duration-300 ease-out",
                "hover:border-[#C9A96E] hover:bg-[rgba(201,169,110,0.06)]",
                "active:scale-[0.97]"
              )}
            >
              {heroContent.cta.secondary.label}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <FadeIn
        direction="up"
        delay={1.5}
        duration={0.8}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#555555]">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-[#555555]" />
        </motion.div>
      </FadeIn>
    </section>
  );
}
