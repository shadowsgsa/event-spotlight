import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-button text-[11px] tracking-[0.35em] uppercase text-[var(--gold)]">
      <span className="h-px w-8 bg-[var(--gold)]/60" /> {children}
    </span>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-display text-4xl md:text-6xl mt-4 leading-[0.95] text-foreground">
      {children}
    </h2>
  );
}