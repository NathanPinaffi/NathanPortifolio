import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function AuroraBackground({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".aurora-blob", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="aurora-blob animate-aurora absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
      />
      <div
        className="aurora-blob animate-aurora absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl"
        style={{
          background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="aurora-blob animate-aurora absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          animationDelay: "-12s",
        }}
      />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}