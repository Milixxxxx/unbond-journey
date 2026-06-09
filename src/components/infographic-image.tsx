import { LightboxImage } from "@/components/lightbox-image";
import { bookImages, type BookImageKey } from "@/lib/book-images";

/**
 * InfographicImage – zoombare Infografik mit Lightbox.
 * Quelle/Caption optional. Klick öffnet Vollbild (siehe LightboxImage).
 */
export function InfographicImage({
  image,
  alt,
  caption,
  className,
}: {
  image: BookImageKey;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={"my-5 w-full animate-fade-in " + (className ?? "")}>
      <LightboxImage
        src={bookImages[image]}
        alt={alt}
        caption={caption}
        className="overflow-hidden rounded-2xl border border-bordeaux/10 bg-cream shadow-soft"
      />
    </div>
  );
}
