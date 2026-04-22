import { useState, useEffect } from "react";
import { ZoomIn, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoGraphicBlockProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  /** Aspect ratio. Default "16/9" (Landscape). */
  aspect?: "16/9" | "4/3" | "1/1" | "3/4";
  className?: string;
}

/**
 * InfoGraphicBlock — Wiederverwendbarer Container für Infografiken.
 *
 * Features:
 *  - Responsive: skaliert immer auf 100% Container-Breite
 *  - Tap-to-Zoom: Mobile-User können die Grafik im Lightbox-Modal vergrößern
 *  - Pinch-Zoom im Modal über native Browser-Gesten (touch-action)
 *  - ESC schließt das Modal
 *  - Caption unterhalb für Quellenangabe / Erklärung
 *
 * Visuelle Einbettung: cream/Glass-Frame, der zum Buch-Look passt —
 * KEIN Story-Look (zu dunkel), KEIN harter Diagnose-Sage (zu thematisch).
 * Stattdessen ein neutraler Premium-Frame, damit die Grafik selbst
 * die ganze Aufmerksamkeit bekommt.
 */
export function InfoGraphicBlock({
  src,
  alt,
  title,
  caption,
  aspect = "16/9",
  className,
}: InfoGraphicBlockProps) {
  const [open, setOpen] = useState(false);

  // ESC zum Schließen + Body-Scroll-Lock im Modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const aspectClass =
    aspect === "16/9"
      ? "aspect-[16/9]"
      : aspect === "4/3"
        ? "aspect-[4/3]"
        : aspect === "1/1"
          ? "aspect-square"
          : "aspect-[3/4]";

  return (
    <figure
      className={cn(
        "my-6 overflow-hidden rounded-2xl",
        "border border-mauve/15 bg-white/85",
        "shadow-[0_10px_30px_-12px_oklch(0.30_0.02_30/0.25)]",
        className,
      )}
    >
      {title && (
        <figcaption className="border-b border-mauve/10 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-mauve sm:text-xs">
          {title}
        </figcaption>
      )}

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} — vergrößern`}
        className={cn(
          "group relative block w-full overflow-hidden bg-cream/40",
          aspectClass,
        )}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
        <span
          className={cn(
            "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full",
            "bg-white/90 text-bordeaux shadow-soft backdrop-blur",
            "opacity-90 transition group-hover:opacity-100 group-hover:scale-105",
          )}
        >
          <ZoomIn className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </button>

      {caption && (
        <figcaption className="border-t border-mauve/10 bg-cream/30 px-4 py-2.5 text-center text-[11px] italic leading-snug text-graphite/65 sm:text-xs">
          {caption}
        </figcaption>
      )}

      {/* Lightbox / Zoom-Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-graphite/90 p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Schließen"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-graphite shadow-soft transition hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-full max-w-[1400px] overflow-auto"
            style={{ touchAction: "pinch-zoom" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="block max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-[11px] text-cream/80 backdrop-blur">
            Mobil: Zwei Finger zum Zoomen · ESC schließt
          </p>
        </div>
      )}
    </figure>
  );
}
