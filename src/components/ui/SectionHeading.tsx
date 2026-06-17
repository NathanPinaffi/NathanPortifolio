import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
        <span className="h-1 w-1 rounded-full" style={{ background: "#A855F7" }} />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-white/60 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}