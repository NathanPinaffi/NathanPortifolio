import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedUnderline } from "@/components/ui/AnimatedUnderline";

import { getGithubProjects } from "@/services/github";

interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  github: string;
  demo: string;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getGithubProjects();

        setProjects(data.slice(0, 4));
      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <section id="projetos" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projetos selecionados"
          title={
            <>
              Produtos que misturam{" "}
              <AnimatedUnderline>design</AnimatedUnderline>
              , <AnimatedUnderline>engenharia</AnimatedUnderline> e 
              <AnimatedUnderline>IA</AnimatedUnderline>.
            </>
          }
        />

        {loading ? (
          <div className="mt-14 flex justify-center">
            <p className="text-white/60">
              Carregando projetos...
            </p>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="
              mt-14
              grid
              gap-6
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {projects.map((p) => (
              <motion.article
                key={`${p.title}-${p.github}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 32,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: -2,
                }}
                style={{
                  perspective: "1000px",
                }}
                className="group"
              >
                <GlassCard
                  className="
                    overflow-hidden
                    transition-all
                    duration-500
                    group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
                  "
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={
                        p.image ||
                        "https://placehold.co/1280x800/111111/ffffff?text=Projeto"
                      }
                      alt={p.title}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.7) 100%)",
                      }}
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,.2), rgba(6,182,212,.15))",
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl text-white">
                      {p.title}
                    </h3>

                    <p className="mt-2 min-h-[72px] text-sm text-white/60 line-clamp-3">
                      {p.description}
                    </p>

                    {!!p.stack?.length && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="
                              rounded-full
                              border
                              border-white/10
                              bg-white/[0.03]
                              px-2.5
                              py-0.5
                              font-mono
                              text-[10px]
                              uppercase
                              tracking-[0.15em]
                              text-white/70
                            "
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 flex items-center gap-3">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            glass
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            px-4
                            py-2
                            text-xs
                            text-white/80
                            transition-colors
                            hover:text-white
                          "
                        >
                          <Github className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      )}

                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            px-4
                            py-2
                            text-xs
                            font-medium
                            text-white
                            shadow-[0_10px_30px_-10px_rgba(139,92,246,0.6)]
                          "
                          style={{
                            background:
                              "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
                          }}
                        >
                          Ver demo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}