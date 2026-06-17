import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<HTMLMotionProps<"div">, "children"> & {
  strong?: boolean;
  children?: ReactNode;
};

export const GlassCard = forwardRef<HTMLDivElement, Props>(function GlassCard(
  { className, strong, children, ...rest },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      className={cn(
        strong ? "glass-strong" : "glass",
        "relative overflow-hidden rounded-2xl",
        className,
      )}
      {...rest}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
        }}
      />
      {children}
    </motion.div>
  );
});