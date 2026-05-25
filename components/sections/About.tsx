"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { aboutContent } from "@/content";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#C9A96E] mb-4">
                {aboutContent.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
                {aboutContent.headline}
              </h2>
            </motion.div>

            <motion.div
              className="w-16 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              className="text-lg leading-relaxed text-[#A3A3A3] max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {aboutContent.body}
            </motion.p>

            {/* Cinematic hallway image */}
            <motion.div
              className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.06]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/aurelia-premium-restaurant-showcase/images/luxury-hallway.jpeg"
                alt="Luxury dining hallway at AURELIA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/20" />
            </motion.div>
          </div>

          {/* Right: Highlights + visual */}
          <div className="space-y-8">
            {aboutContent.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className={cn(
                  "group relative pl-6 border-l border-white/[0.06]",
                  "transition-colors duration-300 hover:border-[rgba(201,169,110,0.25)]"
                )}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#777777]">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Private dining table image */}
            <motion.div
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.06]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/aurelia-premium-restaurant-showcase/images/private-dining-table.jpeg"
                alt="Private dining experience at AURELIA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/20" />
            </motion.div>
          </div>
        </div>

        {/* Full-width cinematic scene divider */}
        <motion.div
          className="relative mt-20 md:mt-28 lg:mt-32 aspect-[21/9] rounded-xl overflow-hidden border border-white/[0.06]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/aurelia-premium-restaurant-showcase/images/final-cinematic-scene.jpeg"
            alt="AURELIA cinematic dining atmosphere"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Cinematic letterbox overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]/30" />

          {/* Centered quote overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-lg sm:text-xl md:text-2xl font-light italic text-white/80 tracking-wide max-w-2xl">
                &ldquo;An experience that transcends dining&rdquo;
              </p>
              <div className="mt-4 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
