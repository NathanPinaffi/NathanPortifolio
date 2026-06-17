import { motion } from "framer-motion";

export function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
        Disponível para projetos e oportunidades
      </span>
    </motion.div>
  );
}