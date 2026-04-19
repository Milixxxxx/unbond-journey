import { Headphones, Play, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * MeditationCard · Wiederverwendbares Designelement, das in jedem Kapitel
 * direkt vor den Transformationszielen sitzt. Sage-grüner Akzent (Ruhe-Farbe,
 * abgesetzt von Übungs-Akzenten), großes 🧘-Icon mit dezenter Atem-Pulse,
 * zwei Wege: In-App-Player (lazy iframe) ODER externer YouTube-Tab.
 *
 * Erkennbarkeit: Immer dieselbe Form, immer Sage-Farbe, immer Atem-Pulse.
 */
export function MeditationCard({
  title,
  duration,
  source,
  youtubeId,
}: {
  title: string;
  duration: string;
  source: string;
  /** YouTube-Video-ID, z.B. "v9XmIgvP0Wc" (NICHT die ganze URL) */
  youtubeId: string;
}) {
  const [playing, setPlaying] = useState(false);
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  const cover = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage/12 via-cream/60 to-mauve/8 p-5 shadow-soft sm:p-6"
      style={{ borderLeft: "5px solid var(--color-sage)" }}
      aria-labelledby="meditation-title"
    >
      {/* Label */}
      <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-sage">
        <Headphones className="h-3.5 w-3.5" />
        Begleitende Meditation
      </div>

      <div className="mt-3 grid gap-4 sm:grid-cols-[88px_1fr] sm:items-start">
        {/* Atem-Pulse-Icon */}
        <div className="relative mx-auto h-16 w-16 sm:mx-0 sm:h-20 sm:w-20">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-sage/25"
            style={{ animation: "breath 4.5s ease-in-out infinite" }}
          />
          <span
            aria-hidden
            className="absolute inset-2 rounded-full bg-sage/35"
            style={{ animation: "breath 4.5s ease-in-out infinite", animationDelay: "0.6s" }}
          />
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-3xl" role="img" aria-label="Meditation">
              🧘
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <h3 id="meditation-title" className="font-display text-base font-bold text-bordeaux sm:text-lg">
            {title}
          </h3>
          <p className="mt-1 text-xs text-graphite/70">
            {duration} · {source}
          </p>

          {/* Player oder Cover */}
          {playing ? (
            <div className="mt-3 overflow-hidden rounded-xl bg-black shadow-glass">
              <div className="aspect-video">
                <iframe
                  src={embedUrl}
                  title={title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group mt-3 block w-full overflow-hidden rounded-xl bg-black/70 shadow-glass transition hover:shadow-elegant"
              aria-label={`${title} in der App abspielen`}
            >
              <div className="relative aspect-video">
                <img
                  src={cover}
                  alt=""
                  className="h-full w-full object-cover opacity-85 transition group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 grid place-items-center bg-gradient-to-t from-black/45 to-transparent">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-bordeaux shadow-soft transition group-hover:scale-105">
                    <Play className="ml-0.5 h-6 w-6 fill-current" />
                  </span>
                </div>
              </div>
            </button>
          )}

          {/* Aktionsleiste */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {!playing && (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="inline-flex items-center gap-1.5 rounded-full bg-sage px-3 py-1.5 text-xs font-semibold text-white shadow-soft transition hover:bg-sage/90 active:scale-95"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Im App ansehen
              </button>
            )}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-sage/40 bg-white/70 px-3 py-1.5 text-xs font-semibold text-bordeaux transition hover:border-sage hover:bg-white"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Bei YouTube öffnen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
