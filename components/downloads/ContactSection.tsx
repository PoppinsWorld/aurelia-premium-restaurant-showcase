"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { contactContent } from "@/content";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 lg:py-40 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,169,110,0.3)] bg-[rgba(201,169,110,0.08)] px-4 py-1.5">
            <Mail size={14} className="text-[#C9A96E]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A96E]">
              {contactContent.badge}
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {contactContent.headline}
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#A3A3A3] sm:text-lg">
            {contactContent.subheadline}
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(201,169,110,0.1)] text-[#C9A96E]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-[#6B6B6B]">Phone</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-base text-white transition-colors hover:text-[#C9A96E]"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(201,169,110,0.1)] text-[#C9A96E]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-[#6B6B6B]">Email</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-base text-white transition-colors hover:text-[#C9A96E]"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(201,169,110,0.1)] text-[#C9A96E]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-[#6B6B6B]">Address</p>
                <p className="text-base text-white">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(201,169,110,0.1)] text-[#C9A96E]">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-[#6B6B6B]">Hours</p>
                <div className="space-y-1">
                  <p className="text-sm text-white">
                    <span className="text-[#A3A3A3]">Mon&ndash;Fri:</span>{" "}
                    {siteConfig.hours.weekday}
                  </p>
                  <p className="text-sm text-white">
                    <span className="text-[#A3A3A3]">Sat&ndash;Sun:</span>{" "}
                    {siteConfig.hours.weekend}
                  </p>
                  <p className="text-sm text-white">
                    <span className="text-[#A3A3A3]">Brunch:</span>{" "}
                    {siteConfig.hours.brunch}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#141414] p-6 sm:p-8"
            >
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-[#A3A3A3]"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className={cn(
                    "w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#0A0A0A] px-4 py-3.5",
                    "text-sm text-white placeholder:text-[#6B6B6B]",
                    "outline-none transition-all duration-200",
                    "hover:border-[rgba(255,255,255,0.1)]",
                    "focus:border-[rgba(201,169,110,0.4)] focus:shadow-[0_0_0_2px_rgba(201,169,110,0.1)]"
                  )}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-[#A3A3A3]"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className={cn(
                    "w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#0A0A0A] px-4 py-3.5",
                    "text-sm text-white placeholder:text-[#6B6B6B]",
                    "outline-none transition-all duration-200",
                    "hover:border-[rgba(255,255,255,0.1)]",
                    "focus:border-[rgba(201,169,110,0.4)] focus:shadow-[0_0_0_2px_rgba(201,169,110,0.1)]"
                  )}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-[#A3A3A3]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="How can we help?"
                  className={cn(
                    "w-full resize-none rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#0A0A0A] px-4 py-3.5",
                    "text-sm text-white placeholder:text-[#6B6B6B]",
                    "outline-none transition-all duration-200",
                    "hover:border-[rgba(255,255,255,0.1)]",
                    "focus:border-[rgba(201,169,110,0.4)] focus:shadow-[0_0_0_2px_rgba(201,169,110,0.1)]"
                  )}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={cn(
                  "w-full rounded-lg bg-[#C9A96E] py-4 text-sm font-semibold text-black",
                  "transition-colors duration-200 hover:bg-[#D4B87A]"
                )}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
