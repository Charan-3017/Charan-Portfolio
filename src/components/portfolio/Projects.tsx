import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Generative AI-Based Real-Time E-Commerce Fraud Detection",
    description:
      "An intelligent fraud detection system that identifies suspicious online transactions using Machine Learning and behavioral analysis.",
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    github: "https://github.com/Charan-3017/Online-Payment-Fraud-Detection",
    category: "AI/ML",
  },
  {
    title: "Trisva Assistive System",
    description:
      "An AI-powered accessibility system supporting differently-abled users with Blind Mode, Deaf Mode, and Mute Mode using Computer Vision and Speech Processing.",
    tech: ["Python", "OpenCV", "Speech Recognition", "Text-to-Speech", "Tkinter"],
    github: "https://github.com/Charan-3017/Trisva-Assistive-System",
    category: "Computer Vision",
  },
];

const filters = ["All", "AI/ML", "Computer Vision"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <SectionHeader eyebrow="Selected work" title="Projects" />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? "bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-lg shadow-[#2563EB]/30"
                : "glass text-white/70 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-strong rounded-2xl p-6 group relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] opacity-10 blur-3xl group-hover:opacity-25 transition-opacity" />

              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-lg">
                  <Sparkles size={20} />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full glass text-[#38BDF8]">
                  {p.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">{p.title}</h3>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                <button
                  disabled
                  className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium text-white/50 cursor-not-allowed"
                >
                  <ExternalLink size={14} /> Live Demo · Coming Soon
                </button>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#2563EB]/30 hover:-translate-y-0.5 transition-all"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
