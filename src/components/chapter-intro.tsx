/**
 * ChapterIntro · Wiederverwendbarer Einleitungs-Block für jedes Kapitel.
 * Erscheint direkt unter dem Modul-Titel und enthält:
 *   1. Kapitelnamen (groß, Display-Font)
 *   2. Schlüsselbegriff-Pills (Keywords des Kapitels)
 *   3. 2–3 einleitende Sätze im Ton einer weisen Freundin
 *
 * Visuell als zarte Glasskarte mit Bordeaux-Akzent links.
 */
export function ChapterIntro({
  title,
  keywords,
  children,
}: {
  title: string;
  keywords: string[];
  children: React.ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream via-white/90 to-mauve/8 p-5 shadow-soft sm:p-6 animate-fade-in"
      style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
    >
      {/* Dekorativer Hummingbird-Schimmer rechts oben */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, var(--color-bordeaux) 0%, transparent 70%)",
        }}
      />

      <h2 className="font-display text-xl font-bold leading-tight text-bordeaux sm:text-2xl">
        {title}
      </h2>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {keywords.map((k) => (
          <li
            key={k}
            className="inline-flex items-center rounded-full border border-bordeaux/20 bg-white/70 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-bordeaux/85 shadow-sm"
          >
            {k}
          </li>
        ))}
      </ul>

      <div className="mt-4 space-y-2 text-sm leading-relaxed text-graphite/90 sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}
