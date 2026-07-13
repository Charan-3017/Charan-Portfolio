import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Award, Keyboard } from "lucide-react";

const certs = [
  { title: "AWS Certified Cloud Practitioner", meta: "CLF-C02" },
  { title: "IBM Python for Data Science", meta: "IBM" },
  { title: "Machine Learning", meta: "Reliance Foundation" },
  { title: "Typing Proficiency", meta: "31 WPM · 97% Accuracy", Icon: Keyboard },
];

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader eyebrow="Credentials" title="Certifications" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certs.map((c, i) => {
          const Icon = c.Icon ?? Award;
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-strong rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 to-[#06B6D4]/0 group-hover:from-[#2563EB]/10 group-hover:to-[#06B6D4]/10 transition-all" />
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-lg shadow-[#2563EB]/30 mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{c.title}</h3>
                <p className="mt-2 text-xs text-white/60">{c.meta}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
