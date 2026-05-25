"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />

      {/* Primary cinematic background image */}
      <div className="absolute inset-0">
        <Image
          src="/aurelia-premium-restaurant-showcase/images/hero-master-bg.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.35 }}
        />
      </div>

      {/* Secondary atmospheric layer - city rooftop */}
      <div className="absolute inset-0">
        <Image
          src="/aurelia-premium-restaurant-showcase/images/hero-city-rooftop.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center mix-blend-soft-light"
          style={{ opacity: 0.15 }}
        />
      </div>

      {/* Cinematic color overlay - warm dark matte */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.5) 70%, rgba(10,10,10,0.9) 100%)",
        }}
      />

      {/* Primary gold radial - top center */}
      <motion.div
        className="absolute -top-[30%] left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.06) 0%, rgba(201,169,110,0.02) 40%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary gold spot - left */}
      <motion.div
        className="absolute left-[10%] top-[30%] h-[40vh] w-[40vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tertiary gold spot - right */}
      <motion.div
        className="absolute right-[15%] top-[50%] h-[35vh] w-[35vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.03) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, -18, 0],
          y: [0, 14, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Top edge gradient for navbar blend */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent" />

      {/* Bottom edge gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </div>
  );
}
