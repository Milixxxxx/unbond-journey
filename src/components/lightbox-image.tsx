import { useEffect, useState } from "react";
import { ZoomIn, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * LightboxImage — inline image that opens fullscreen on click.
 * Preserves original layout (float, sizing) via className.
 */
export function LightboxImage({
  src,
  alt,
  className,
  caption,
  hint = "Tippen zum Vergrößern",
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  hint?: string;
}) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} – vergrößern`}
        className={cn(
          "group relative block cursor-zoom-in p-0",
          className,
        )}
      >
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
        <span
          className="pointer-events-none absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/85 text-bordeaux opacity-70 shadow-soft backdrop-blur transition group-hover:opacity-100"
          aria-hidden="true"
        >
          <ZoomIn className="h-4 w-4" />
        </span>
      </button>
      {caption && (
        <p className="mt-2 text-center text-xs italic text-graphite/65">{caption}</p>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-graphite/90 p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Schließen"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-graphite shadow-soft transition hover:scale-105"
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
              className="block max-h-[88vh] w-auto max-w-full object-contain"
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-[11px] text-cream/80 backdrop-blur">
            {hint} · Mobil: zwei Finger zum Zoomen · ESC schließt
          </p>
        </div>
      )}
    </>
  );
}
