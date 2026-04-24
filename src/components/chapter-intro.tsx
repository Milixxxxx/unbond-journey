import { Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from "react";

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
  introSentenceLimit,
}: {
  title: string;
  keywords: string[];
  children: ReactNode;
  introSentenceLimit?: number;
}) {
  const introBlocks = Children.toArray(children);
  const validatedChildren = introSentenceLimit
    ? introBlocks.map((child, index) => {
        if (!isValidElement(child)) return child;

        const sentenceCount = getSentenceCount(child.props.children);
        const exceedsLimit = sentenceCount > introSentenceLimit;

        if (!exceedsLimit) return child;

        const existingClassName = typeof child.props.className === "string" ? child.props.className : "";

        return cloneElement(child as ReactElement<{ className?: string }>, {
          className: [
            existingClassName,
            "rounded-xl border border-destructive/35 bg-destructive/10 px-3 py-2 text-destructive",
          ]
            .filter(Boolean)
            .join(" "),
          "data-intro-sentence-warning": true,
        });
      })
    : introBlocks;

  const offendingCount = introSentenceLimit
    ? introBlocks.filter((child) => {
        if (!isValidElement(child)) return false;
        return getSentenceCount(child.props.children) > introSentenceLimit;
      }).length
    : 0;

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
        {validatedChildren}
      </div>

      {offendingCount > 0 ? (
        <p className="mt-3 text-xs font-medium text-destructive">
          Intro-Check: {offendingCount} Satzblock/Satzblöcke sind länger als 1 Satz.
        </p>
      ) : null}
    </section>
  );
}

function getSentenceCount(content: ReactNode): number {
  const text = extractText(content).replace(/\s+/g, " ").trim();
  if (!text) return 0;

  const matches = text.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g);
  return matches ? matches.length : 0;
}

function extractText(content: ReactNode): string {
  if (content == null || typeof content === "boolean") return "";
  if (typeof content === "string" || typeof content === "number") return String(content);
  if (Array.isArray(content)) return content.map(extractText).join(" ");
  if (isValidElement(content)) return extractText(content.props.children);
  return "";
}
