import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Mail, Phone, Github, Linkedin, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:charanjambugolam@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <Section id="contact">
      <SectionHeader eyebrow="Get in touch" title="Contact" description="Have a role, project, or collaboration in mind? Let's talk." />

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 space-y-4"
        >
          <h3 className="text-xl font-bold text-white mb-2">Let's connect</h3>
          {[
            { Icon: Mail, label: "Email", value: "charanjambugolam@gmail.com", href: "mailto:charanjambugolam@gmail.com" },
            { Icon: Phone, label: "Phone", value: "+91 89771 78359", href: "tel:+918977178359" },
            { Icon: Github, label: "GitHub", value: "github.com/Charan-3017", href: "https://github.com/Charan-3017" },
            { Icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "#" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white group-hover:scale-110 transition-transform shrink-0">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-white/50">{label}</div>
                <div className="text-sm font-medium text-white truncate">{value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 space-y-4"
        >
          <div>
            <label className="text-xs font-medium text-white/70 mb-1.5 block">Name</label>
            <input
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/30 text-white placeholder-white/40 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-white/70 mb-1.5 block">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/30 text-white placeholder-white/40 transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-white/70 mb-1.5 block">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/30 text-white placeholder-white/40 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/40 hover:shadow-[#06B6D4]/50 hover:-translate-y-0.5 transition-all"
          >
            {sent ? (<><Check size={16} /> Opening your email…</>) : (<><Send size={16} /> Send Message</>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
