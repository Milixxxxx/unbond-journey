import { useEffect, useState } from "react";
import { Heart, Phone, X, Wind } from "lucide-react";

export function SosFloatingButton() {
  const [open, setOpen] = useState(false);
  const [breathing, setBreathing] = useState(false);

  useEffect(() => {
    if (!open) setBreathing(false);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="SOS – Notfall-Hilfe"
        className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--color-sos)] text-white shadow-elegant animate-pulse-soft transition hover:scale-105 md:bottom-8 md:right-8"
        style={{ boxShadow: "0 10px 36px oklch(0.55 0.21 25 / 0.45)" }}
      >
        <Heart className="h-6 w-6" fill="currentColor" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 px-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div
            className="glass-card-strong relative w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-graphite hover:bg-black/5"
            >
              <X className="h-4 w-4" />
            </button>

            <h2 className="text-xl font-bold text-bordeaux">SOS · Du bist nicht allein</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Atme zuerst. Drei Minuten – mehr braucht es jetzt nicht.
            </p>

            <div className="mt-5 grid place-items-center">
              <div
                className={`grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-[var(--color-sage)] to-[var(--color-mauve)] text-white text-sm font-medium ${
                  breathing ? "animate-breath" : ""
                }`}
              >
                <span className="font-display">{breathing ? "atme" : "4-7-8"}</span>
              </div>
              <button
                onClick={() => setBreathing((b) => !b)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-sage px-5 py-2 text-sm font-medium text-white"
              >
                <Wind className="h-4 w-4" />
                {breathing ? "Atem stoppen" : "Atem starten"}
              </button>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href="tel:08001110111"
                className="flex items-center gap-3 rounded-lg bg-white/70 p-3 text-sm hover:bg-white"
              >
                <Phone className="h-4 w-4 text-bordeaux" />
                <div>
                  <div className="font-bold">Telefonseelsorge</div>
                  <div className="text-xs text-muted-foreground">0800 111 0 111 · kostenlos · 24/7</div>
                </div>
              </a>
              <a
                href="tel:08001110111"
                className="flex items-center gap-3 rounded-lg bg-white/70 p-3 text-sm hover:bg-white"
              >
                <Phone className="h-4 w-4 text-bordeaux" />
                <div>
                  <div className="font-bold">Hilfetelefon Gewalt gegen Frauen</div>
                  <div className="text-xs text-muted-foreground">0800 116 016 · kostenlos · 24/7</div>
                </div>
              </a>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              In akuter Lebensgefahr: <strong>112</strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
