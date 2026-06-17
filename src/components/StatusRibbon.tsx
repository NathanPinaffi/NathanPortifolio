import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface RibbonProps {
  text: string;
  reverse?: boolean;
  className?: string;
}

export function StatusRibbon({
  text,
  reverse = false,
  className = "",
}: RibbonProps) {
  const items = Array(12).fill(text);

  return (
    <div
      className={`
        absolute
        left-[-20%]
        w-[140%]
        overflow-hidden
        bg-gradient-to-r
        from-violet-600
        via-fuchsia-500
        to-violet-600
        py-3
        shadow-[0_0_50px_rgba(139,92,246,0.4)]
        backdrop-blur-xl
        ${className}
      `}
    >
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6"
          >
            <span className="font-semibold uppercase tracking-[0.25em] text-black">
              {item}
            </span>

            <Sparkles
              size={18}
              className="text-black"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}