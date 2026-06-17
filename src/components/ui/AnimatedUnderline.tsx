import { type ReactNode } from "react";

export function AnimatedUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="text-gradient-violet relative z-10">{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 300 24"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full"
      >
        <path
          d="M2 14 C 60 4, 120 22, 180 10 S 290 18, 298 8"
          fill="none"
          stroke="url(#u-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: "draw-line 3.6s cubic-bezier(0.65,0,0.35,1) 0.6s infinite",
          }}
        />
        <defs>
          <linearGradient id="u-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`
        @keyframes draw-line {
          0% { stroke-dashoffset: 1; }
          45%, 55% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1; }
        }
      `}</style>
    </span>
  );
}