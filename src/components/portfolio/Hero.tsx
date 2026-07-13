import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/ai-hero.png";

const roles = [
  "AI & Data Science Graduate",
  "Python Developer",
  "Machine Learning Enthusiast",
  "Cloud Certified",
];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4"
    >
      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-[#38BDF8] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-pulse-glow" />
            Available for opportunities
          </div>

          <p className="text-lg text-white/70 mb-2">Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="text-gradient">Jambugolam</span>
            <br />
            <span className="text-white">Charan</span>
          </h1>

          <div className="mt-6 h-8 text-xl sm:text-2xl font-medium text-white/90">
            <span className="text-[#06B6D4]">{typed}</span>
            <span className="inline-block w-0.5 h-6 align-middle ml-1 bg-[#38BDF8] animate-pulse" />
          </div>

          <p className="mt-6 text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build AI-powered software solutions, machine learning applications,
            and intelligent systems that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/40 hover:shadow-[#06B6D4]/50 hover:-translate-y-0.5 transition-all"
            >
              <FolderGit2 size={16} /> View Projects
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1UjLaH1gqBxBauc-YeIjByFzhQpVh0ZlW"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/90 border border-white/15 hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-3 justify-center lg:justify-start">
            {[
              { href: "https://github.com/Charan-3017?tab=repositories", Icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/charan-jambugolam-17b550348?utm_source=share_via&utm_content=profile&utm_medium=member_android", Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:charanjambugolam@gmail.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid place-items-center h-11 w-11 rounded-full glass text-white/80 hover:text-[#38BDF8] hover:border-[#38BDF8] hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex items-center justify-center lg:justify-end"
        >
          <div className="relative flex h-[560px] w-[560px] items-center justify-center">
            <motion.div
              animate={{ opacity: [0.45, 0.9, 0.45], scale: [0.95, 1.04, 0.95] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(42,183,255,0.28)_0%,_rgba(6,182,212,0.08)_45%,_transparent_72%)] blur-3xl"
            />

            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full opacity-70"
              aria-hidden="true"
            >
              <path d="M70 90 C135 115, 140 295, 220 245 S330 145, 345 105" stroke="#2AB7FF" strokeWidth="2" fill="none" strokeOpacity="0.7" strokeLinecap="round" />
              <path d="M80 310 C145 270, 220 320, 295 285 S340 215, 330 145" stroke="#8A4DFF" strokeWidth="2" fill="none" strokeOpacity="0.55" strokeLinecap="round" />
              <circle cx="70" cy="90" r="4" fill="#2AB7FF" />
              <circle cx="220" cy="245" r="4" fill="#2AB7FF" />
              <circle cx="345" cy="105" r="4" fill="#8A4DFF" />
              <circle cx="80" cy="310" r="4" fill="#8A4DFF" />
              <circle cx="295" cy="285" r="4" fill="#2AB7FF" />
            </svg>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[7%] rounded-full border border-[#2AB7FF]/70"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[18%] rounded-full border border-[#8A4DFF]/70"
            />

            {[
              { left: "14%", top: "16%", delay: 0 },
              { left: "82%", top: "22%", delay: 0.7 },
              { left: "20%", top: "78%", delay: 1.2 },
              { left: "74%", top: "72%", delay: 1.8 },
            ].map((particle, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0.6, y: 0 }}
                animate={{ opacity: [0.45, 1, 0.45], y: [0, -14, 0] }}
                transition={{ duration: 3.4 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
                className="absolute h-2.5 w-2.5 rounded-full bg-[#2AB7FF] shadow-[0_0_12px_rgba(42,183,255,0.9)]"
                style={{ left: particle.left, top: particle.top }}
              />
            ))}

            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.015, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <img
                src={heroImage}
                alt="Portrait"
                className="h-[540px] w-[540px] rounded-full overflow-hidden object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
