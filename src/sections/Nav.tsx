import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contato", href: "#contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl text-white"
        >
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, #A855F7 0%, #06B6D4 100%)",
              boxShadow: "0 0 16px rgba(168,85,247,0.7)",
            }}
          />
          <span>Nathan Pinaffi</span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full px-4 py-2 text-sm font-medium text-white transition-shadow hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] md:inline-flex"
          style={{
            background:
              "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
          }}
        >
          Vamos conversar
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="glass rounded-full p-2 text-white md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-6 mt-3 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}