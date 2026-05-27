"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { techStackContent } from "@/content";
import {
  Smartphone,
  Code,
  Database,
  Palette,
  Globe,
  Cloud,
} from "lucide-react";

const icons = [Smartphone, Code, Database, Palette, Globe, Cloud];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
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

export default function TechStack() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#C9A96E] mb-4">
            {techStackContent.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {techStackContent.headline}
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-lg mx-auto">
            {techStackContent.subheadline}
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techStackContent.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative flex items-start gap-4 p-6",
                  "bg-[#141414] rounded-xl",
                  "border border-white/[0.06]",
                  "transition-all duration-300",
                  "hover:border-[#C9A96E]/15"
                )}
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
