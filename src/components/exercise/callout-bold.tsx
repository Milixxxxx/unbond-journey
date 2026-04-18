import { Brain, FlaskConical, Sparkles, Target, BookOpen } from "lucide-react";
import type { ReactNode } from "react";

export type CalloutKind = "act" | "science" | "insight" | "deepdive" | "quote";

const config: Record<CalloutKind, { label: string; icon: ReactNode; color: string }> = {
  act: { label: "ACT · Acceptance & Commitment", icon: <Target className="h-3.5 w-3.5" />, color: "var(--color-mauve)" },
  science: { label: "Wissenschaft", icon: <FlaskConical className="h-3.5 w-3.5" />, color: "var(--color-sage)" },
  insight: { label: "Insight", icon: <Sparkles className="h-3.5 w-3.5" />, color: "var(--color-terracotta)" },
  deepdive: { label: "Deep Dive", icon: <Brain className="h-3.5 w-3.5" />, color: "var(--color-bordeaux)" },
  quote: { label: "Zitat", icon: <BookOpen className="h-3.5 w-3.5" />, color: "var(--color-bordeaux)" },
};

/**
 * Variant A · Bold Callout mit linker Akzent-Leiste.
 * Universeller Wissens-/Reflexions-Block, der überall im Buch eingestreut wird.
 */
export function CalloutBold({
  kind,
  title,
  source,
  children,
}: {
  kind: CalloutKind;
  title: string;
  source?: string;
  children: ReactNode;
}) {
  const c = config[kind];
  return (
    <aside
      className="rounded-2xl bg-white/75 p-5 shadow-glass backdrop-blur-sm"
      style={{ borderLeft: `5px solid ${c.color}` }}
    >
      <div
        className="mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
        style={{ background: `color-mix(in oklab, ${c.color} 18%, white)`, color: c.color }}
      >
        {c.icon}
        {c.label}
      </div>
      <h4 className="font-display text-base font-bold text-bordeaux sm:text-lg">{title}</h4>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-graphite/90">{children}</div>
      {source && (
        <p className="mt-3 text-[11px] italic text-graphite/55">Quelle: {source}</p>
      )}
    </aside>
  );
}
