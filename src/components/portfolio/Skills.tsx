import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Code2, Brain, Cloud, Wrench } from "lucide-react";

const groups = [
  {
    Icon: Code2,
    title: "Programming",
    color: "from-[#2563EB] to-[#38BDF8]",
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 78 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "HTML / CSS", level: 88 },
    ],
  },
  {
    Icon: Brain,
    title: "AI & Machine Learning",
    color: "from-[#06B6D4] to-[#38BDF8]",
    skills: [
      { name: "Machine Learning", level: 88 },
      { name: "OpenCV", level: 82 },
      { name: "Scikit-learn", level: 85 },
      { name: "Pandas", level: 90 },
    ],
  },
  {
    Icon: Cloud,
    title: "Cloud",
    color: "from-[#2563EB] to-[#06B6D4]",
    skills: [{ name: "AWS Cloud Practitioner", level: 85 }],
  },
  {
    Icon: Wrench,
    title: "Tools",
    color: "from-[#38BDF8] to-[#2563EB]",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Git / GitHub", level: 88 },
      { name: "Tableau", level: 80 },
      { name: "Jupyter Notebook", level: 92 },
      { name: "MS Excel / PowerPoint", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="What I work with" title="Skills" />
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-strong rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${g.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
            <div className="flex items-center gap-3 mb-5">
              <div className={`grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br ${g.color} text-white shadow-lg`}>
                <g.Icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/85 font-medium">{s.name}</span>
                    <span className="text-white/50">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${g.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
