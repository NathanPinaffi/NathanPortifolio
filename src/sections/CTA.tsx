import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { AnimatedUnderline } from "@/components/ui/AnimatedUnderline";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/data/site";

export function CTA() {
  return (
    <section id="contato" className="relative px-6 py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl">
        <div className="glass-strong relative rounded-3xl px-8 py-20 text-center sm:px-16 sm:py-28">
          <AuroraBackground />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 font-display text-4xl leading-[1.05] text-white sm:text-6xl"
          >
            Vamos construir algo{" "}
            <AnimatedUnderline>extraordinários</AnimatedUnderline> juntos.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative z-10 mx-auto mt-5 max-w-xl text-white/65"
          >
            Estou aberto a novos projetos, colaborações e oportunidades full-time.
            Se você quer transformar uma ideia em produto, vamos conversar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative z-10 mt-10 flex justify-center"
          >
            <MagneticButton
              className="px-7 py-4 text-base"
              onClick={() => (window.location.href = `mailto:${site.email}`)}
            >
              Entrar em contato
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}