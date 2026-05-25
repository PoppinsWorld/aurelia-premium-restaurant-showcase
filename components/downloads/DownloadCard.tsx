"use client";

import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadCardProps {
  name: string;
  architecture: string;
  description: string;
  size: string;
  path: string;
  isRecommended?: boolean;
}

export default function DownloadCard({
  name,
  architecture,
  description,
  size,
  path,
  isRecommended = false,
}: DownloadCardProps) {
  return (
    <motion.a
      href={path}
      download
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col gap-5 rounded-xl border p-6 sm:p-8",
        "bg-[#141414] transition-colors duration-300",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        isRecommended
          ? "border-[rgba(201,169,110,0.3)] hover:border-[rgba(201,169,110,0.6)]"
          : "border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.04)]"
      )}
      aria-label={`Download AURELIA app for ${name} (${architecture})`}
    >
      {/* Recommended badge */}
      {isRecommended && (
        <div className="absolute -top-3 right-6">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#C9A96E] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
            <Check size={12} strokeWidth={3} />
            Recommended
          </span>
        </div>
      )}

      {/* Architecture icon */}
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-lg",
          isRecommended
            ? "bg-[rgba(201,169,110,0.15)] text-[#C9A96E]"
            : "bg-[rgba(255,255,255,0.05)] text-[#A3A3A3]"
        )}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      </div>

      {/* Info */}
      <div className="flex-1 space-y-2">
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <span className="text-xs font-medium text-[#6B6B6B]">
            {architecture}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[#A3A3A3]">{description}</p>
        <p className="text-xs font-medium text-[#6B6B6B]">{size}</p>
      </div>

      {/* Download button */}
      <div
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-semibold",
          "transition-colors duration-200",
          isRecommended
            ? "bg-[#C9A96E] text-black hover:bg-[#D4B87A]"
            : "bg-[rgba(255,255,255,0.06)] text-white hover:bg-[rgba(255,255,255,0.1)]"
        )}
      >
        <Download size={16} />
        Download APK
      </div>

      {/* Hover glow for recommended */}
      {isRecommended && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: "0 0 40px rgba(201, 169, 110, 0.1)",
          }}
          aria-hidden="true"
        />
      )}
    </motion.a>
  );
}
