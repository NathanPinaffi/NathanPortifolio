import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedUnderline } from "@/components/ui/AnimatedUnderline";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/data/site";
import eu from "@/assets/eu.png";

const badges = ["Full Stack", "IA & Automação", "Arquitetura", "Design Engineering"];

export function About() {
  return (
    <section id="sobre" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <GlassCard strong className="relative aspect-[4/5] w-full">
            <img
              src={eu}
              alt="Nathan Pinaffi"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.85) 100%)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  Engenheiro de software
                </p>
                <p className="mt-1 font-display text-2xl text-white">
                  Construído com obsessão por detalhes
                </p>
              </div>
            </div>
          </GlassCard>
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-3xl opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(124,58,237,0.4), transparent 60%)",
            }}
          />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Sobre mim"
            title={
              <>
                Engenharia, design e <AnimatedUnderline>inteligência artificial</AnimatedUnderline>{" "}
                em um só lugar.
              </>
            }
            description="Sou desenvolvedor há mais de cinco anos, atuando full stack e construindo produtos com inteligência artificial em sua espinha dorsal. Acredito em código limpo, interfaces refinadas e em entregar valor real — não só features."
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="glass rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/75"
              >
                {b}
              </span>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-10 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <GlassCard className="p-5">
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-sm text-white/55">{s.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}