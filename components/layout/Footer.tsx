import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0A0A0A]">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 py-20 md:flex-row md:justify-between md:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a
              href="/"
              className="select-none text-xl font-bold tracking-[0.2em]"
            >
              <span className="bg-gradient-to-r from-[#C9A96E] via-[#D4B87A] to-[#C9A96E] bg-clip-text text-transparent">
                AURELIA
              </span>
            </a>
            <p className="text-xs tracking-widest text-[#6B6B6B]">
              PREMIUM DINING EXPERIENCE
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#A3A3A3] transition-colors duration-300 hover:text-[#C9A96E]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2 text-sm text-[#6B6B6B] md:items-end">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors duration-300 hover:text-[#C9A96E]"
            >
              {siteConfig.contact.email}
            </a>
            <span className="text-xs">{siteConfig.contact.phone}</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-[#4A4A4A]">
              &copy; {currentYear} AURELIA. All rights reserved.
            </p>
            <p className="text-[10px] tracking-[0.2em] text-[#3A3A3A]">
              CRAFTED WITH PASSION
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
