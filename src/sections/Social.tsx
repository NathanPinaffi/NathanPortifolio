import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/data/site";

const items = [
  { name: "GitHub", href: site.socials.github, icon: Github, handle: "@seu-usuario" },
  { name: "LinkedIn", href: site.socials.linkedin, icon: Linkedin, handle: "in/seu-usuario" },
  { name: "Instagram", href: site.socials.instagram, icon: Instagram, handle: "@seu-usuario" },
  { name: "X / Twitter", href: site.socials.x, icon: Twitter, handle: "@seu-usuario" },
  { name: "Email", href: `mailto:${site.email}`, icon: Mail, handle: site.email },
];

export function Social() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Redes"
          title={
            <>
              Vamos nos <span className="text-gradient-violet">conectar</span>.
            </>
          }
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {items.map((it) => (
            <motion.a
              key={it.name}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              style={{ transformPerspective: 800 }}
            >
              <GlassCard className="flex h-full flex-col gap-4 p-6">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(6,182,212,0.25))",
                    boxShadow: "0 0 25px -8px rgba(139,92,246,0.6)",
                  }}
                >
                  <it.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-xl text-white">{it.name}</p>
                  <p className="mt-1 truncate font-mono text-xs text-white/55">
                    {it.handle}
                  </p>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}