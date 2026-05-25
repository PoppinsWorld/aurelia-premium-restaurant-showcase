"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { performanceContent } from "@/content";

function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  label,
  delay,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = Date.now();
    const timer = setTimeout(() => {
      const animate = () => {
        const elapsed = Date.now() - startTime - delay;
        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(eased * value);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  const formatted =
    value % 1 === 0
      ? Math.round(display).toString()
      : display.toFixed(1);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#C9A96E] mb-3" style={{ textShadow: "0 0 30px rgba(201,169,110,0.15)" }}>
        {prefix && <span className="text-2xl sm:text-3xl mr-1">{prefix}</span>}
        {formatted}
        <span className="text-2xl sm:text-3xl ml-1">{suffix}</span>
      </div>
      <p className="text-[11px] text-[#6B6B6B] uppercase tracking-[0.2em] font-medium">
        {label}
      </p>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Performance() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden scroll-mt-20">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,169,110,0.03), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#C9A96E] mb-4">
            {performanceContent.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {performanceContent.headline}
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-md mx-auto">
            {performanceContent.subheadline}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {performanceContent.stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                delay={index * 150}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
