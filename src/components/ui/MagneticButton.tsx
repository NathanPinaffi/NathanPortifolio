import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  children: ReactNode;
};

export function MagneticButton({
  className,
  variant = "primary",
  children,
  ...rest
}: Props) {
  const ref = useMagnetic<HTMLButtonElement>(0.25);
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-shadow duration-300 will-change-transform",
        variant === "primary"
          ? "text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(139,92,246,0.8)]"
          : "glass text-white/90 hover:text-white",
        className,
      )}
      style={
        variant === "primary"
          ? {
              background:
                "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #06B6D4 100%)",
            }
          : undefined
      }
      {...rest}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.25), transparent 60%)",
          }}
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}