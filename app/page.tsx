import { Hero } from "@/components/hero";
import { MenuShowcase, Gallery } from "@/components/showcase";
import { About, TechStack, Performance } from "@/components/sections";
import { DownloadSection, ContactSection } from "@/components/downloads";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <div className="section-divider" />
      <MenuShowcase />
      <div className="section-divider" />
      <Gallery />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <Performance />
      <div className="section-divider" />
      <DownloadSection />
      <div className="section-divider" />
      <ContactSection />
    </main>
  );
}
