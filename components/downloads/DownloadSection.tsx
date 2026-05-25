"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { apkAssets, recommendedApk } from "@/data/downloads";
import { downloadContent } from "@/content";
import DownloadCard from "./DownloadCard";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="relative py-24 md:py-32 lg:py-40 scroll-mt-20"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,169,110,0.03), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-20"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,169,110,0.3)] bg-[rgba(201,169,110,0.08)] px-4 py-1.5">
            <Smartphone size={14} className="text-[#C9A96E]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A96E]">
              {downloadContent.badge}
            </span>
          </div>

          {/* Headline */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {downloadContent.headline}
          </h2>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#A3A3A3] sm:text-lg">
            {downloadContent.subheadline}
          </p>
        </motion.div>

        {/* App showcase + download cards grid */}
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          {/* App mockup showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <Image
                src="/aurelia-premium-restaurant-showcase/images/app-showcase-mockup.jpeg"
                alt="AURELIA mobile app"
                fill
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
            </div>
            {/* Subtle gold glow behind mockup */}
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(201,169,110,0.15), transparent 70%)",
              }}
            />
          </motion.div>

          {/* Download cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
            {apkAssets.map((apk, index) => (
              <motion.div
                key={apk.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <DownloadCard
                  name={apk.name}
                  architecture={apk.architecture}
                  description={apk.description}
                  size={apk.size}
                  path={apk.path}
                  isRecommended={apk.id === recommendedApk.id}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-xs text-[#6B6B6B]"
        >
          All APKs are signed release builds. SHA1 checksums available alongside each download.
        </motion.p>
      </div>
    </section>
  );
}
