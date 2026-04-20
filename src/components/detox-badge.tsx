import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { useDetoxCounter } from "@/hooks/use-detox-counter";

/**
 * Globaler 90-Tage-Detox-Counter im Modul-Top-Bar.
 * Erscheint nur, wenn die Nutzerin in Modul 03 ihren Kontrakt unterschrieben hat.
 * Klickbar → führt zurück zum Kontrakt in Modul 03.
 */
export function DetoxBadge() {
  const { active, day, target } = useDetoxCounter();
  if (!active) return null;
  const pct = Math.min(100, Math.round((day / target) * 100));

  return (
    <Link
      to="/modul/$slug"
      params={{ slug: "modul-03" }}
      title={`Du bist auf Tag ${day} von ${target} deiner No-Contact-Reise. Klick für deinen Kontrakt.`}
      aria-label={`No-Contact-Counter: Tag ${day} von ${target}. Zum Kontrakt.`}
      className="group flex flex-shrink-0 items-center gap-2 rounded-full border-2 border-sage/60 bg-sage/15 px-3 py-1.5 shadow-soft transition-all hover:border-sage hover:bg-sage/25 hover:shadow-md sm:gap-2.5 sm:px-3.5 sm:py-2"
    >
      <Sparkles className="h-4 w-4 text-sage transition-transform group-hover:scale-110 sm:h-[18px] sm:w-[18px]" />
      <div className="flex items-baseline gap-1 leading-none">
        <span className="text-[10px] font-bold uppercase tracking-wider text-sage/70 sm:text-[11px]">
          No&#8209;Contact
        </span>
        <span className="font-display text-base font-extrabold text-sage sm:text-lg">
          {day}
        </span>
        <span className="text-xs font-semibold text-sage/60 sm:text-sm">
          /{target}
        </span>
      </div>
      <span
        aria-hidden
        className="ml-0.5 hidden h-2 w-12 overflow-hidden rounded-full bg-sage/25 sm:inline-block"
      >
        <span
          className="block h-full rounded-full bg-sage transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </span>
    </Link>
  );
}
