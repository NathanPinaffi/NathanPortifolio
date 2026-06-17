import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Tech } from "@/sections/Tech";
import { Projects } from "@/sections/Projects";
import { Timeline } from "@/sections/Timeline";
import { Social } from "@/sections/Social";
import { CTA } from "@/sections/CTA";
import { Footer } from "@/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfólio · Desenvolvedor Full Stack & IA" },
      {
        name: "description",
        content:
          "Portfólio premium de um desenvolvedor full stack e especialista em IA. Projetos, stack, jornada e contato.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Timeline />
        <Social />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
