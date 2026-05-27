"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { galleryContent } from "@/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Gallery() {
  return (
    <section
      id="gallery"
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
            {galleryContent.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {galleryContent.headline}
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-md mx-auto">
            {galleryContent.subheadline}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {galleryContent.items.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div
                className={cn(
                  "relative w-full bg-[#141414] border border-white/[0.06]",
                  "transition-all duration-500",
                  "group-hover:border-[#C9A96E]/20",
                  "group-hover:shadow-[0_0_40px_rgba(201,169,110,0.06)]",
                  item.aspect
                )}
              >
                {/* Cinematic image */}
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Matte overlay for cohesion */}
                <div
                  className="absolute inset-0 bg-[#0A0A0A]/20 transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#A3A3A3] group-hover:text-[#C9A96E] transition-colors duration-500">
                    {item.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
