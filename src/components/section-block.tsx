import { ReactNode } from "react";
import { BookOpen, Stethoscope, Sparkles, Wrench, Microscope, ListChecks, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export type SectionKind =
  | "story"
  | "diagnose"
  | "loesung"
  | "uebung"
  | "deep-dive"
  | "checkliste"
  | "sos";

const META: Record<SectionKind, {
  box: string;
  label: string;
  icon: typeof BookOpen;
  iconClass: string;
  labelClass: string;
}> = {
  story: {
    box: "story-box",
    label: "Geschichte",
    icon: BookOpen,
    iconClass: "text-cream",
    labelClass: "text-cream/80",
  },
  diagnose: {
    box: "diagnose-box",
    label: "Diagnose",
    icon: Stethoscope,
    iconClass: "text-[color:var(--color-sage)]",
    labelClass: "text-[color:var(--color-sage)]",
  },
  loesung: {
    box: "loesung-box",
    label: "Lösung",
    icon: Sparkles,
    iconClass: "text-[color:var(--color-terracotta)]",
    labelClass: "text-[color:var(--color-terracotta)]",
  },
  uebung: {
    box: "uebung-box",
    label: "Übung",
    icon: Wrench,
    iconClass: "text-[color:var(--color-terracotta)]",
    labelClass: "text-[color:var(--color-terracotta)]",
  },
  "deep-dive": {
    box: "science-box",
    label: "Deep Dive",
    icon: Microscope,
    iconClass: "text-[color:var(--color-sage)]",
    labelClass: "text-[color:var(--color-sage)]",
  },
  checkliste: {
    box: "progress-box",
    label: "Checkliste",
    icon: ListChecks,
    iconClass: "text-[color:var(--color-mauve)]",
    labelClass: "text-[color:var(--color-mauve)]",
  },
  sos: {
    box: "sos-box",
    label: "SOS",
    icon: ShieldAlert,
    iconClass: "text-[color:var(--color-warning)]",
    labelClass: "text-[color:var(--color-warning)]",
  },
};

interface SectionBlockProps {
  kind: SectionKind;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  /** Hide the standard kind label/eyebrow row */
  bare?: boolean;
}

/**
 * SectionBlock: einheitlicher Modul-Baustein.
 * Farbe + Icon + Layout werden automatisch aus `kind` abgeleitet.
 * Pflicht-Wrapper für ALLE neuen Modul-Sections.
 */
export function SectionBlock({
  kind,
  title,
  eyebrow,
  children,
  className,
  bare = false,
}: SectionBlockProps) {
  const meta = META[kind];
  const Icon = meta.icon;
  const isStory = kind === "story";

  return (
    <section className={cn(meta.box, "my-6 animate-fade-in", className)}>
      {!bare && (
        <header className="mb-3 flex items-center gap-2">
          <Icon className={cn("h-4 w-4", meta.iconClass)} aria-hidden="true" />
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.18em]",
              meta.labelClass,
            )}
          >
            {eyebrow ?? meta.label}
          </span>
        </header>
      )}
      {title && (
        <h3
          className={cn(
            "mb-3 font-display text-xl md:text-2xl",
            isStory ? "text-cream" : "",
          )}
        >
          {title}
        </h3>
      )}
      <div
        className={cn(
          "space-y-3",
          isStory ? "text-cream/95 leading-relaxed" : "text-foreground",
        )}
      >
        {children}
      </div>
    </section>
  );
}
