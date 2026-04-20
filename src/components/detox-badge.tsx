import { useState } from "react";
import { Sparkles, Heart, Brain, Sprout, X } from "lucide-react";
import { useDetoxCounter } from "@/hooks/use-detox-counter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/**
 * Globaler 90-Tage-Detox-Counter im Modul-Top-Bar.
 * Erscheint nur, wenn die Nutzerin in Modul 03 ihren Kontrakt unterschrieben hat.
 * Klick öffnet ein Info-Popup mit Erklärung, Zuspruch und Gratulation.
 */
export function DetoxBadge() {
  const { active, day, target } = useDetoxCounter();
  const [open, setOpen] = useState(false);
  if (!active) return null;
  const pct = Math.min(100, Math.round((day / target) * 100));
  const remaining = Math.max(0, target - day);

  // Personalisierter Zuspruch je nach Phase
  const phase =
    day <= 3
      ? {
          title: "Die ersten Tage sind die härtesten.",
          body: "Was du gerade tust, ist enorm. Dein Nervensystem schreit nach dem alten Kick — und du gibst ihm trotzdem Ruhe. Das ist kein Verzicht. Das ist Selbstrettung.",
        }
        : day <= 14
          ? {
              title: "Du baust gerade neue Bahnen.",
              body: "Tag 4 bis 14 sind biochemisch der härteste Entzug. Wenn du jetzt durchhältst, beginnt dein Gehirn, die Belohnungsschleife auf sie zu lockern. Du machst das wirklich.",
            }
          : day <= 45
            ? {
                title: "Halbzeit-Mut.",
                body: "Du bist über den schlimmsten Punkt hinaus. Was du jetzt fühlst — Klarheit, Wut, Trauer in Wellen — ist Heilung, nicht Rückfall. Bleib dran.",
              }
            : day < target
              ? {
                  title: "Die Zielgerade gehört dir.",
                  body: `Nur noch ${remaining} Tag${remaining === 1 ? "" : "e"}. Dein Gehirn hat sich messbar verändert. Du bist nicht mehr die Frau, die diesen Vertrag unterschrieben hat — du bist freier.`,
                }
              : {
                  title: "90 Tage. Du hast es geschafft. 🌿",
                  body: "Was du durchgezogen hast, schaffen die wenigsten. Dein Selbstwert kommt nicht zurück — er wächst neu, auf eigenem Boden.",
                };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title={`Tag ${day} von ${target} · Klick für deine Geschichte`}
        aria-label={`No-Contact-Counter öffnen. Tag ${day} von ${target}.`}
        className="group flex flex-shrink-0 items-center gap-2 rounded-full border-2 border-sage bg-sage px-3 py-1.5 text-cream shadow-md transition-all hover:scale-105 hover:shadow-lg sm:gap-2.5 sm:px-3.5 sm:py-2"
      >
        <Sparkles className="h-4 w-4 text-cream transition-transform group-hover:rotate-12 sm:h-[18px] sm:w-[18px]" />
        <div className="flex items-baseline gap-1 leading-none">
          <span className="text-[10px] font-bold uppercase tracking-wider text-cream/85 sm:text-[11px]">
            No&#8209;Contact
          </span>
          <span className="font-display text-base font-extrabold text-cream sm:text-lg">
            {day}
          </span>
          <span className="text-xs font-semibold text-cream/75 sm:text-sm">
            /{target}
          </span>
        </div>
        <span
          aria-hidden
          className="ml-0.5 hidden h-2 w-12 overflow-hidden rounded-full bg-cream/25 sm:inline-block"
        >
          <span
            className="block h-full rounded-full bg-cream transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md border-sage/30 bg-cream p-0 sm:max-w-lg">
          {/* Header mit großem Counter */}
          <div className="relative rounded-t-lg bg-gradient-to-br from-sage to-sage/80 px-6 py-7 text-center text-cream">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-cream/70 transition hover:bg-cream/15 hover:text-cream"
              aria-label="Schließen"
            >
              <X className="h-4 w-4" />
            </button>
            <Sparkles className="mx-auto mb-2 h-7 w-7" />
            <DialogHeader className="space-y-1">
              <DialogTitle className="font-display text-5xl font-extrabold text-cream sm:text-6xl">
                Tag {day}
                <span className="text-2xl font-semibold text-cream/70 sm:text-3xl"> /{target}</span>
              </DialogTitle>
              <DialogDescription className="text-sm font-semibold uppercase tracking-wider text-cream/85">
                Deine 90-Tage No-Contact-Reise
              </DialogDescription>
            </DialogHeader>
            {/* Fortschrittsbalken */}
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-cream/20">
              <div
                className="h-full rounded-full bg-cream transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-1.5 text-[11px] font-semibold text-cream/80">
              {pct}% geschafft
            </p>
          </div>

          {/* Zuspruch */}
          <div className="space-y-5 px-6 pb-6 pt-5">
            <div className="rounded-xl border border-bordeaux/15 bg-bordeaux/5 p-4">
              <p className="font-display text-base font-bold text-bordeaux">
                {phase.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-graphite">
                {phase.body}
              </p>
            </div>

            {/* Warum gezählt wird */}
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-graphite/55">
                Warum wir zählen
              </p>
              <div className="flex gap-3">
                <Brain className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" />
                <div>
                  <p className="text-sm font-semibold text-graphite">Dein Gehirn braucht 90 Tage.</p>
                  <p className="text-xs leading-relaxed text-graphite/75">
                    Bindungs­schleifen lösen sich nicht in einer Woche. Studien zeigen: Erst nach
                    ca. 90 Tagen ohne Trigger fährt das Belohnungs­system auf sie messbar runter.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Heart className="mt-0.5 h-5 w-5 flex-shrink-0 text-bordeaux" />
                <div>
                  <p className="text-sm font-semibold text-graphite">Jeder Tag ist sichtbar.</p>
                  <p className="text-xs leading-relaxed text-graphite/75">
                    Damit du an schweren Tagen siehst, was du schon geschafft hast — und nicht aus
                    Versehen wegwirfst, was so viel Kraft gekostet hat.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Sprout className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" />
                <div>
                  <p className="text-sm font-semibold text-graphite">Du wächst, leise.</p>
                  <p className="text-xs leading-relaxed text-graphite/75">
                    Heilung passiert nicht laut. Aber sie passiert — Tag für Tag, auch wenn es sich
                    nicht so anfühlt.
                  </p>
                </div>
              </div>
            </div>

            <p className="border-t border-graphite/10 pt-3 text-center text-xs italic text-graphite/65">
              Du machst das. Wirklich.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
