import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    Icon: Briefcase,
    role: "AI & Machine Learning Intern",
    company: "SmartBridge Educational Services Pvt. Ltd.",
    period: "September 2025 – March 2026",
    desc: "Worked on Artificial Intelligence, Machine Learning, and practical industry projects.",
  },
  {
    Icon: Briefcase,
    role: "Data Analytics Intern",
    company: "SmartBridge Educational Services Pvt. Ltd.",
    period: "May 2025 – July 2025",
    desc: "Worked on Tableau dashboards, analytics, and business insights.",
  },
  {
    Icon: GraduationCap,
    role: "B.Tech — Artificial Intelligence & Data Science",
    company: "Annamacharya Institute of Technology and Sciences",
    period: "2022 – 2026",
    desc: "Score: 85% · Focused on AI, ML, data analytics and modern software engineering.",
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Career timeline" title="Experience & Education" />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#38BDF8]/40 to-transparent" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                <div className="glass-strong rounded-2xl p-6 inline-block text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white">
                      <it.Icon size={16} />
                    </div>
                    <span className="text-xs font-medium text-[#38BDF8]">{it.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{it.role}</h3>
                  <p className="text-sm text-white/60 mt-0.5">{it.company}</p>
                  <p className="text-sm text-white/70 mt-3 leading-relaxed">{it.desc}</p>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#06B6D4] ring-4 ring-[#0F172A] shadow-lg shadow-[#06B6D4]/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
