import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { AnimatedUnderline } from "@/components/ui/AnimatedUnderline";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollArrow } from "@/components/ui/ScrollArrow";
import { site } from "@/data/site";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <>
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-24"
    >
      <AuroraBackground />
      <AnimatedGrid />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 font-display text-[44px] leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Transformando ideias em{" "}
          <AnimatedUnderline>softwares extraordinários</AnimatedUnderline>
          <span className="text-white/90">.</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-2xl text-base text-white/65 sm:text-lg"
        >
          {site.role}. Eu projeto, construo e escalo produtos digitais com
          experiências fluidas, performance impecável e IA aplicada de verdade.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 3, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <MagneticButton onClick={() => (window.location.hash = "#projetos")}>
            Ver projetos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            onClick={() => (window.location.hash = "#contato")}
          >
            <Mail className="h-4 w-4" />
            Entrar em contato
          </MagneticButton>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-float-y"
        >
        </motion.div>
        <br />
        <br />
        <ScrollArrow />
      </div>
    </section>
    </>
  );
}