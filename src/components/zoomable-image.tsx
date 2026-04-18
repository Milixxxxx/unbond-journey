import { ZoomIn } from "lucide-react";
import { useState } from "react";

export function ZoomableImage({
  src,
  alt,
  caption,
}: {
  src?: string;
  alt: string;
  caption?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="overflow-hidden rounded-xl shadow-soft">
        <button
          type="button"
          onClick={() => src && setOpen(true)}
          className="group relative block aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-sage/20 via-mauve/10 to-terracotta/15"
          aria-label={`${alt} vergrößern`}
        >
          {src ? (
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          ) : (
            <div className="grid h-full w-full place-items-center text-center text-sm text-bordeaux/60">
              <div>
                <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full bg-white/60">
                  <ZoomIn className="h-5 w-5" />
                </div>
                Bild folgt
                <div className="text-xs opacity-70">{alt}</div>
              </div>
            </div>
          )}
          {src && (
            <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/80 opacity-0 transition group-hover:opacity-100">
              <ZoomIn className="h-4 w-4 text-bordeaux" />
            </span>
          )}
        </button>
        {caption && (
          <figcaption className="bg-white/85 px-3 py-2 text-center text-xs italic text-graphite/65">
            {caption}
          </figcaption>
        )}
      </figure>

      {open && src && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </>
  );
}
