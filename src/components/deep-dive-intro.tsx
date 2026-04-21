import { ReactNode, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface DeepDiveIntroProps {
  /** Sichtbarer Einladungstext (Default: „Wenn du tiefer verstehen willst …") */
  label?: string;
  /** Optionaler kleiner Hint unter dem Label */
  hint?: string;
  /** Inhalt, der nach dem Aufklappen erscheint (z.B. ein <SectionBlock kind="deep-dive">) */
  children: ReactNode;
  /** Standardmäßig zugeklappt (FernUSG-konform: optional) */
  defaultOpen?: boolean;
  className?: string;
}

/**
 * DeepDiveIntro — sanfte, optionale Einleitung vor jeder Deep-Dive-Sektion.
 * Vermittelt: Tiefe ist eine Einladung, kein Pflicht-Element.
 * Brand: Sage-Akzent, kursiv, ruhig.
 */
export function DeepDiveIntro({
  label = "Wenn du tiefer verstehen willst …",
  hint,
  children,
  defaultOpen = false,
  className,
}: DeepDiveIntroProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("my-6", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "group flex w-full items-center gap-3 rounded-2xl border border-[color:var(--color-sage)]/25",
          "bg-gradient-to-r from-white/60 to-[color:var(--color-sage)]/8 px-5 py-3.5 text-left",
          "transition-all duration-300 hover:border-[color:var(--color-sage)]/55 hover:shadow-[0_8px_28px_-12px_color-mix(in_oklab,var(--color-sage)_45%,transparent)]",
        )}
      >
        <Sparkles
          className="h-4 w-4 shrink-0 text-[color:var(--color-sage)] transition-transform duration-500 group-hover:rotate-12"
          aria-hidden="true"
        />
        <span className="flex-1">
          <span className="block font-display text-[15px] italic text-[color:var(--color-sage)]">
            {label}
          </span>
          {hint && (
            <span className="mt-0.5 block text-xs text-graphite/65">{hint}</span>
          )}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-[color:var(--color-sage)] transition-transform duration-300",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
