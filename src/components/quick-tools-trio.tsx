import { Zap, Wind, Quote } from "lucide-react";

/**
 * QuickToolsTrio – drei farbige Sofort-Werkzeuge unter dem Hero.
 * Standalone-Karten ohne Interaktivität: Erkenntnis · Atem · Merksatz.
 */
type Tool = {
  icon: React.ReactNode;
  label: string;
  text: string;
  tint: "bordeaux" | "sage" | "mauve";
};

const TINT: Record<Tool["tint"], string> = {
  bordeaux:
    "border-l-[color:var(--color-bordeaux)] bg-[color:var(--color-bordeaux)]/8 [&_.qt-label]:text-bordeaux",
  sage:
    "border-l-[color:var(--color-sage)] bg-[color:var(--color-sage)]/10 [&_.qt-label]:text-[color:var(--color-sage)]",
  mauve:
    "border-l-[color:var(--color-mauve)] bg-[color:var(--color-mauve)]/10 [&_.qt-label]:text-mauve",
};

export function QuickToolsTrio({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {tools.map((t) => (
        <div
          key={t.label}
          className={`rounded-xl border-l-4 bg-white/70 p-4 backdrop-blur-sm ${TINT[t.tint]}`}
        >
          <div className="qt-label mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]">
            {t.icon}
            {t.label}
          </div>
          <p className="text-sm leading-relaxed text-graphite/90">{t.text}</p>
        </div>
      ))}
    </div>
  );
}

export const QUICK_TOOLS_M02: Tool[] = [
  {
    icon: <Zap className="h-3.5 w-3.5" />,
    label: "Sofort-Erkenntnis",
    text:
      "Du kämpfst nicht gegen die Liebe. Du kämpfst gegen einen konditionierten Spielautomaten.",
    tint: "bordeaux",
  },
  {
    icon: <Wind className="h-3.5 w-3.5" />,
    label: "Atem · 4-7-8",
    text:
      "Einatmen 4 · Halten 7 · Ausatmen 8 — unterbricht den Craving-Reflex.",
    tint: "sage",
  },
  {
    icon: <Quote className="h-3.5 w-3.5" />,
    label: "Merksatz",
    text: "Das ist Neurobiologie, kein persönliches Versagen.",
    tint: "mauve",
  },
];
