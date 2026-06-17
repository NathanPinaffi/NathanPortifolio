import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { timeline } from "@/data/site";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    }, ref);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section id="timeline" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          align="center"
          eyebrow="Jornada"
          title={
            <>
              Uma <span className="text-gradient-violet">linha do tempo</span> da
              minha trajetória.
            </>
          }
        />

        <div ref={ref} className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block"
          />
          <div
            ref={lineRef}
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(180deg, #7C3AED 0%, #06B6D4 100%)",
              boxShadow: "0 0 20px rgba(139,92,246,0.6)",
            }}
          />

          <ul className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid gap-6 md:grid-cols-2 md:items-center ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}>
                    <GlassCard className="inline-block p-6 text-left">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                        {item.year}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
                    style={{
                      background:
                        "radial-gradient(circle, #fff 0%, #A855F7 60%)",
                      boxShadow: "0 0 18px rgba(168,85,247,0.8)",
                    }}
                  />
                  <div className="hidden md:block" />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}