import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { InfoGraphicBlock } from "@/components/infographic-block";
import { cn } from "@/lib/utils";

type Hotspot = {
  id: string;
  x: number;
  y: number;
  label: string;
  body: string;
};

export function InfographicHotspots({
  src,
  alt,
  title,
  caption,
  hotspots,
  className,
}: {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  hotspots: Hotspot[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = useMemo(
    () => hotspots.find((spot) => spot.id === activeId) ?? null,
    [activeId, hotspots],
  );

  return (
    <div className={cn("relative", className)}>
      <InfoGraphicBlock src={src} alt={alt} title={title} caption={caption} aspect="16/9" />

      <div className="pointer-events-none absolute inset-x-0 top-[2.55rem] px-4 sm:px-5">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          {hotspots.map((spot) => {
            const isActive = spot.id === activeId;
            return (
              <button
                key={spot.id}
                type="button"
                onClick={() => setActiveId(isActive ? null : spot.id)}
                className="pointer-events-auto absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center focus-visible:outline-none"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                aria-pressed={isActive}
                aria-label={`${spot.label} öffnen`}
              >
                <span className="absolute h-10 w-10 rounded-full bg-[color:var(--color-sage)]/18 animate-ping motion-reduce:animate-none" />
                <span className="relative grid h-8 min-w-8 place-items-center rounded-full border border-white/70 bg-white/92 px-2 text-[10px] font-semibold text-[color:var(--color-bordeaux)] shadow-soft backdrop-blur">
                  {spot.label}
                </span>
              </button>
            );
          })}

          {active && (
            <div className="pointer-events-auto absolute bottom-3 left-3 right-3 rounded-2xl border border-white/65 bg-white/88 p-4 shadow-soft backdrop-blur-xl sm:left-auto sm:max-w-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-sage)]">
                    Hotspot
                  </p>
                  <h4 className="mt-1 font-display text-base font-semibold text-bordeaux">
                    {active.label}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/90 text-graphite shadow-glass transition hover:scale-105"
                  aria-label="Hotspot schließen"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-graphite/80">{active.body}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}