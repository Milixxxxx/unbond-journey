import { Sparkles } from "lucide-react";
import { useDetoxCounter } from "@/hooks/use-detox-counter";

/**
 * Globaler 90-Tage-Detox-Counter im Modul-Top-Bar.
 * Erscheint nur, wenn die Nutzerin in Modul 03 ihren Kontrakt unterschrieben
 * (= ein Startdatum hinterlegt) hat. Sage-grüner sanfter Glow.
 */
export function DetoxBadge() {
  const { active, day, target } = useDetoxCounter();
  if (!active) return null;
  const pct = Math.min(100, Math.round((day / target) * 100));

  return (
    <div
      className="hidden flex-shrink-0 items-center gap-2 rounded-full border border-sage/40 bg-sage/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sage shadow-sm sm:inline-flex"
      title={`Du bist auf Tag ${day} von ${target} deiner No-Contact-Reise. Du machst das.`}
      aria-label={`No-Contact-Counter: Tag ${day} von ${target}`}
    >
      <Sparkles className="h-3 w-3" />
      <span>
        Tag {day}<span className="opacity-60"> / {target}</span>
      </span>
      <span
        aria-hidden
        className="ml-1 inline-block h-1.5 w-10 overflow-hidden rounded-full bg-sage/25"
      >
        <span
          className="block h-full rounded-full bg-sage transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </span>
    </div>
  );
}
