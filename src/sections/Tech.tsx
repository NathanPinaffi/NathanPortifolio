import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedUnderline } from "@/components/ui/AnimatedUnderline";
import { techs } from "@/data/site";

function TiltCard({ name, category }: { name: string; category: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -10;
    const ry = (px - 0.5) * 12;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative transition-transform duration-200 ease-out will-change-transform"
    >
      <GlassCard className="relative h-full p-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(300px circle at var(--mx,50%) var(--my,50%), rgba(139,92,246,0.18), transparent 60%)",
          }}
        />
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
          {category}
        </p>
        <p className="mt-3 font-display text-2xl text-white">{name}</p>
      </GlassCard>
    </div>
  );
}

export function Tech() {
  return (
    <section id="stack" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Stack & ferramentas"
          title={
            <>
              Ferramentas que uso para construir{" "}
              <AnimatedUnderline>aplicações únicas</AnimatedUnderline>.
            </>
          }
          description="Do front-end refinado ao back-end resiliente, passando por modelos de IA generativa e infraestrutura em nuvem."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3"
        >
          {techs.map((t) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard name={t.name} category={t.category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}