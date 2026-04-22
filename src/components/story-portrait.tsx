import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface StoryPortraitProps {
  src: string;
  alt: string;
  caption?: string;
  /** "left" | "right" — Float-Seite auf Desktop. Mobile: immer oben, voller Breite. */
  side?: "left" | "right";
  className?: string;
}

/**
 * StoryPortrait — Bild für Mary-&-Sandra-Story-Boxen.
 *
 * Layout:
 *  - Desktop (sm+): float links/rechts, Text umfließt das Bild.
 *  - Mobile: voller Breite oberhalb des Texts (kein float).
 *
 * Rahmen: moderner, ruhiger Frame im Story-Look —
 * silbriger Glass-Border + warmer Innenschimmer, KEIN harter Schlagschatten,
 * passt zum Premium/Apple-Vibe der Story-Box.
 *
 * Benutzung INNERHALB einer SectionBlock kind="story" — direkt am
 * Anfang des Children-Bereichs platzieren, dann ganz normal Absätze
 * dahinter setzen. Sie umfließen automatisch.
 */
export function StoryPortrait({
  src,
  alt,
  caption,
  side = "left",
  className,
}: StoryPortraitProps) {
  const floatStyle: CSSProperties = {
    // shape-outside lässt Text sanft ums Bild fließen
    shapeOutside: "inset(0 round 14px)",
  };

  return (
    <figure
      style={floatStyle}
      className={cn(
        // Mobile-Default: kein float, voller Breite, mb für Text-Abstand
        "mb-4 w-full",
        // Desktop: float + begrenzte Breite + seitliches Margin
        side === "left"
          ? "sm:float-left sm:mr-5 sm:w-[44%] md:w-[40%]"
          : "sm:float-right sm:ml-5 sm:w-[44%] md:w-[40%]",
        // Reset Story-Box-Spacing
        "not-prose",
        className,
      )}
    >
      <div
        className={cn(
          "group relative overflow-hidden rounded-[14px]",
          // Moderner Frame: doppelter Glow-Border ohne klobigen Schatten
          "ring-1 ring-cream/25",
          "shadow-[0_8px_30px_-8px_oklch(0.20_0.01_250/0.55)]",
        )}
      >
        {/* Bild — Aspect 4:5, S/W-Foto sitzt im warmen Grau-Frame */}
        <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-graphite/40 to-graphite/70">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          {/* Sanfter Vignette-Übergang nach unten — verbindet Bild mit Caption */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-graphite/60 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      {caption && (
        <figcaption className="mt-2 text-center text-[11px] italic leading-snug text-cream/65">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
