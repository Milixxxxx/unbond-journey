import { ScrollText, Sparkles, HeartHandshake } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ChapterIntro } from "@/components/chapter-intro";
import { BonusLock } from "@/components/bonus-lock";

const SLUG = "bonus-f";

/**
 * BONUS F · Ankommen in der Trauer (Stub-Version)
 *
 * Quelle: Phase-2-Briefing (Doka 1989 Disenfranchised Grief, 5 Verlustebenen).
 * Vollständiger Inhalt folgt in einer späteren Iteration — dieses Stub
 * existiert bereits als Slug, damit die Abschluss-Logik (Modul 10 → CTA →
 * Übergang → finale Kintsugi-Apotheose nach Bonus F) sauber verkabelt ist.
 *
 * Sperre: Story + Vorschau-Inhalt offen, "richtige" Übungen + finale
 *         Kintsugi-Apotheose hinter BonusLock.
 */
export function BonusF() {
  return (
    <article className="space-y-7">
      <ChapterIntro
        title="Bonus F · Ankommen in der Trauer"
        keywords={[
          "Disenfranchised Grief",
          "5 Verlustebenen",
          "queere Trauer",
          "Abschiedsritual",
          "Kintsugi-Apotheose",
        ]}
      >
        <p>
          Es gibt einen Schmerz nach dieser Beziehung, den niemand so recht
          benennt: Du hast keine geliebte Person verloren — du hast jemanden
          verloren, der dir wehgetan hat. <strong>Trotzdem trauerst du.</strong>{" "}
          Und das ist verwirrend. Dieses Kapitel gibt dieser Trauer einen Namen,
          eine Form und einen Abschluss.
        </p>
        <p>
          Kenneth Doka prägte 1989 den Begriff <em>Disenfranchised Grief</em> —
          „aberkannte Trauer". Eine Trauer, die nicht öffentlich anerkannt wird:
          Ex-Partner*innen, toxische Beziehungen, Trennungen, in denen die Welt
          sagt „du bist doch jetzt frei, sei froh". Aber Trauer fragt nicht, ob
          sie erlaubt ist. Sie kommt einfach.
        </p>
        <p>
          Bonus F ist <strong>in Vorbereitung</strong>. Sobald der Inhalt steht,
          wirst du hier durch fünf Verlustebenen geführt — Person, gemeinsame
          Zukunft, Identität, Community, Naivität — und am Ende kommt die finale
          Kintsugi-Apotheose, die das gesamte Programm besiegelt.
        </p>
      </ChapterIntro>

      <section
        className="rounded-2xl border-2 border-mauve/25 bg-gradient-to-br from-cream via-white/85 to-mauve/10 p-6 shadow-soft"
        style={{ borderLeft: "5px solid var(--color-mauve)" }}
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
          <ScrollText className="h-4 w-4" />
          Vorschau · Was dich erwartet
        </div>
        <h3 className="mt-3 font-display text-lg font-bold text-bordeaux">
          Die fünf Verlustebenen nach Doka & Eigenarbeit
        </h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-graphite/85">
          <li>
            <strong>1 · Die Person</strong> — auch wenn sie dich verletzt hat,
            war sie ein Mensch in deinem Leben.
          </li>
          <li>
            <strong>2 · Die gemeinsame Zukunft</strong> — Pläne, Reisen, Häuser,
            Kinder, die nicht mehr stattfinden werden.
          </li>
          <li>
            <strong>3 · Die Identität</strong> — du warst „ihre Frau", „ihre
            Partnerin", „die mit ihr". Wer bist du jetzt?
          </li>
          <li>
            <strong>4 · Die Community</strong> — gemeinsame Freundinnen,
            Szene-Orte, queere Räume, die jetzt anders schmecken.
          </li>
          <li>
            <strong>5 · Die Naivität</strong> — der Glaube, dass Liebe immer
            sicher ist. Auch das darf sterben.
          </li>
        </ul>
      </section>

      {/* Story + Diagnose folgen in der nächsten Iteration */}

      <BonusLock slug={SLUG} bonusLabel="Bonus F">
        <FinalKintsugiApotheose />
      </BonusLock>
    </article>
  );
}

/**
 * FinalKintsugiApotheose · Erscheint NUR nach Bonus F im Complete-Pfad.
 * Das ist das absolute Finale des gesamten Programms.
 */
function FinalKintsugiApotheose() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bordeaux via-mauve to-sage p-7 text-center text-white shadow-elegant sm:p-9"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Finale · Kintsugi-Apotheose
        </div>

        <h3 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
          Hier endet das Buch.
          <br />
          <span className="font-light italic">Hier beginnt dein Leben.</span>
        </h3>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/90">
          Du hast 10 Hauptkapitel und drei Bonus-Vertiefungen durchschritten.
          Du hast deine Bruchstellen benannt, deine Behörden vorbereitet, deine
          Tiefenschichten verstanden und deine Trauer eingeladen. Was bleibt,
          ist nicht das alte Du — und auch nicht das Du <em>vor</em> ihr.
        </p>

        <p className="mx-auto mt-3 max-w-md font-display text-base italic text-white/95">
          Es ist das Du, das durch alles hindurch gegangen ist
          <br />
          und dabei nicht zerbrochen, sondern ge<strong>gold</strong>en wurde.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80">
          <span className="h-px w-10 bg-white/40" />
          <HeartHandshake className="h-4 w-4" />
          UNBOND · Complete · Ende
          <span className="h-px w-10 bg-white/40" />
        </div>

        <Link
          to="/dashboard"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    </section>
  );
}
