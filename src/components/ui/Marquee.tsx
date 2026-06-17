import { type ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
      <div className="animate-marquee-x flex w-max gap-12 py-4">
        {children}
        {children}
      </div>
    </div>
  );
}