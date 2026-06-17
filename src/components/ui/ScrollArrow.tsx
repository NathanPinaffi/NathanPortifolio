import { ChevronDown } from "lucide-react";

export function ScrollArrow({ href = "#sobre" }: { href?: string }) {
  return (
    <a
      href={href}
      aria-label="Rolar para baixo"
      className="group flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <span className="relative flex h-10 w-6 items-start justify-center overflow-hidden rounded-full border border-white/15">
        <span className="animate-scroll-arrow mt-2 block h-1.5 w-1 rounded-full bg-white/70" />
      </span>
      <ChevronDown className="h-3 w-3 animate-bounce" />
    </a>
  );
}