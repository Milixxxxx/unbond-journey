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
 * Klick öffnet ein Info-Popup mit kurzem Zuspruch und Erklärung.
 * Form: rounded-md (Buch-Standard, siehe button.tsx).
 */
export function DetoxBadge() {
  const { active, day, target } = useDetoxCounter();
  const [open, setOpen] = useState(false);
  if (!active) return null;
  const pct = Math.min(100, Math.round((day / target) * 100));
  const remaining = Math.max(0, target - day);

  // Phasen-Zuspruch (kurz)
  const phase =
    day <= 3
      ? {
          title: "Die ersten Tage sind die härtesten.",
          body: "Was du tust, ist Selbstrettung — nicht Verzicht.",
        }
      : day <= 14
        ? {
            title: "Du baust neue Bahnen.",
            body: "Tag 4–14 sind der härteste Entzug. Du machst das.",
          }
        : day <= 45
          ? {
              title: "Halbzeit-Mut.",
              body: "Klarheit, Wut, Trauer in Wellen — das ist Heilung, kein Rückfall.",
            }
          : day < target
            ? {
                title: "Die Zielgerade gehört dir.",
                body: `Noch ${remaining} Tag${remaining === 1 ? "" : "e"}. Du bist freier als am Anfang.`,
              }
            : {
                title: "90 Tage. Du hast es geschafft. 🌿",
                body: "Dein Selbstwert wächst neu — auf eigenem Boden.",
              };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title={`Tag ${day} von ${target} · Klick für Details`}
        aria-label={`No-Contact-Counter öffnen. Tag ${day} von ${target}.`}
        className="group flex flex-shrink-0 items-center gap-2 rounded-md border-2 border-sage bg-sage px-3 py-1.5 text-cream shadow-md transition-all hover:scale-105 hover:shadow-lg sm:gap-2.5 sm:px-3.5 sm:py-2"
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
        <DialogContent className="max-w-sm border-sage/30 bg-cream p-0 sm:max-w-md">
          {/* Header mit großem Counter */}
          <div className="relative rounded-t-lg bg-gradient-to-br from-sage to-sage/80 px-6 py-6 text-center text-cream">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-cream/70 transition hover:bg-cream/15 hover:text-cream"
              aria-label="Schließen"
            >
              <X className="h-4 w-4" />
            </button>
            <Sparkles className="mx-auto mb-1.5 h-6 w-6" />
            <DialogHeader className="space-y-1">
              <DialogTitle className="font-display text-5xl font-extrabold text-cream">
                Tag {day}
                <span className="text-2xl font-semibold text-cream/70"> /{target}</span>
              </DialogTitle>
              <DialogDescription className="text-[11px] font-semibold uppercase tracking-wider text-cream/85">
                90-Tage No-Contact
              </DialogDescription>
            </DialogHeader>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-cream/20">
              <div
                className="h-full rounded-full bg-cream transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-1 text-[11px] font-semibold text-cream/80">{pct}% geschafft</p>
          </div>

          {/* Zuspruch (kurz) */}
          <div className="space-y-4 px-6 pb-5 pt-4">
            <div className="rounded-xl border border-bordeaux/15 bg-bordeaux/5 p-3.5">
              <p className="font-display text-sm font-bold text-bordeaux">{phase.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-graphite">{phase.body}</p>
            </div>

            {/* Warum gezählt wird — kurz */}
            <div className="space-y-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-graphite/55">
                Warum wir zählen
              </p>
              <div className="flex items-start gap-2.5">
                <Brain className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
                <p className="text-xs leading-relaxed text-graphite">
                  <span className="font-semibold">90 Tage</span> braucht dein Gehirn, um die
                  Belohnungs­schleife auf sie messbar zu lockern.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Heart className="mt-0.5 h-4 w-4 flex-shrink-0 text-bordeaux" />
                <p className="text-xs leading-relaxed text-graphite">
                  <span className="font-semibold">Sichtbar machen</span>, was du schon geschafft
                  hast — gerade an schweren Tagen.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Sprout className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
                <p className="text-xs leading-relaxed text-graphite">
                  Heilung passiert <span className="font-semibold">leise</span> — aber sie passiert.
                </p>
              </div>
            </div>

            <p className="border-t border-graphite/10 pt-2.5 text-center text-xs italic text-graphite/65">
              Du machst das. Wirklich.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
