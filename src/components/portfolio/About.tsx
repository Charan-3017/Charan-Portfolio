import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { GraduationCap, Code2, Bot, Cloud, BarChart3 } from "lucide-react";

const highlights = [
  { Icon: GraduationCap, label: "B.Tech AI & Data Science", tint: "text-[#38BDF8]" },
  { Icon: Code2, label: "Python Developer", tint: "text-[#06B6D4]" },
  { Icon: Bot, label: "Machine Learning", tint: "text-[#2563EB]" },
  { Icon: Cloud, label: "AWS Cloud Practitioner", tint: "text-[#38BDF8]" },
  { Icon: BarChart3, label: "Data Analytics", tint: "text-[#06B6D4]" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="Get to know me" title="About Me" />
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong rounded-2xl p-8"
        >
          <p className="text-white/80 leading-relaxed text-lg">
            I'm <span className="text-[#38BDF8] font-semibold">Jambugolam Charan</span>,
            a B.Tech graduate in Artificial Intelligence and Data Science. I enjoy
            building intelligent software solutions using Machine Learning, Computer
            Vision, Python, and Web Technologies.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            My passion is solving real-world problems through AI and continuously
            learning modern technologies. I love turning complex ideas into
            production-ready, user-friendly systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 grid gap-3"
        >
          {highlights.map(({ Icon, label, tint }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-xl p-4 flex items-center gap-3 hover:border-[#38BDF8]/40 hover:-translate-y-0.5 transition-all"
            >
              <div className={`grid place-items-center h-10 w-10 shrink-0 rounded-lg bg-white/5 ${tint}`}>
                <Icon size={20} />
              </div>
              <span className="font-medium text-white/90">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
