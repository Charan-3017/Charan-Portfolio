import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { BackToTop } from "@/components/portfolio/BackToTop";
import {
  ParticlesBackground,
  CursorGlow,
  ScrollProgress,
} from "@/components/portfolio/Background";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#0F172A] text-white overflow-hidden">
      <ScrollProgress />
      <ParticlesBackground />
      <CursorGlow />

      {/* Ambient gradient blobs */}
      <div className="pointer-events-none fixed -top-40 -left-40 h-96 w-96 rounded-full bg-[#2563EB]/20 blur-3xl -z-10" aria-hidden="true" />
      <div className="pointer-events-none fixed top-1/2 -right-40 h-96 w-96 rounded-full bg-[#06B6D4]/20 blur-3xl -z-10" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 px-4 text-center text-sm text-white/60">
        <div className="mx-auto max-w-6xl space-y-1">
          <p>© 2026 Jambugolam Charan. All rights reserved.</p>
          <p className="text-xs text-white/40">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
