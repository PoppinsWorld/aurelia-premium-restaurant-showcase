"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { menuContent } from "@/content";
import { UtensilsCrossed } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function MenuShowcase() {
  return (
    <section
      id="menu"
      className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden scroll-mt-20"
    >
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
            {menuContent.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {menuContent.headline}
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-md mx-auto">
            {menuContent.subheadline}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {menuContent.categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className={cn(
                "group relative p-7 md:p-9",
                "bg-[#121212] rounded-xl",
                "border border-white/[0.06]",
                "transition-all duration-300",
                "hover:border-[#C9A96E]/20 hover:shadow-[0_0_30px_rgba(201,169,110,0.05)]",
                "cursor-pointer"
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors duration-300" />
                </div>
                <span className="text-xs text-[#555555] font-medium">
                  {category.count} items
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A96E] transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                {category.description}
              </p>

              {/* Gold accent line at bottom */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/0 to-transparent group-hover:via-[#C9A96E]/30 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
