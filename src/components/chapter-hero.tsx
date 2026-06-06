import { bookImages, type BookImageKey } from "@/lib/book-images";

/**
 * ChapterHero – breites Kapitelheader-Bild oben in einem Modul.
 * Konsistente Optik im UNBOND-Design (sanfter Rand, weiches Schattenglow,
 * mauve/bordeaux-Akzent). Wird direkt vor ChapterIntro gerendert.
 */
export function ChapterHero({
  image,
  alt,
  caption,
  ratio = "21 / 9",
}: {
  image: BookImageKey;
  alt: string;
  caption?: string;
  ratio?: string;
}) {
  return (
    <figure className="-mt-2 mb-6 animate-fade-in">
      <div
        className="relative overflow-hidden rounded-2xl border border-bordeaux/10 bg-cream shadow-soft"
        style={{ aspectRatio: ratio }}
      >
        <img
          src={bookImages[image]}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/15 via-transparent to-transparent"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs italic text-graphite/65">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
