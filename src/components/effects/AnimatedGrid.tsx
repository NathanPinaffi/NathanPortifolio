export function AnimatedGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`grid-pattern pointer-events-none absolute inset-0 ${className}`}
    />
  );
}