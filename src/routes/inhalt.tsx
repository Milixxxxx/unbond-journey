import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/inhalt")({
  component: Inhalt,
  head: () => ({
    meta: [
      { title: "Inhaltsverzeichnis · UNBOND" },
      {
        name: "description",
        content: "Dein Programm im Überblick – alle 10 Schritte plus Bonus-Kapitel.",
      },
      { property: "og:title", content: "Inhaltsverzeichnis · UNBOND" },
      {
        property: "og:description",
        content: "Dein Weg durch UNBOND – 10 Schritte und Bonus-Kapitel.",
      },
    ],
  }),
});

type Item = {
  num: string;
  title: string;
  sub: string;
  to?: "/einleitung" | "/routing" | "/modul/$slug";
  slug?: string;
  cta?: boolean;
};

const ITEMS: Item[] = [
  {
    num: "✦ Einleitung",
    title: "Mary & Sandra · Das Programm verstehen",
    sub: "Wer sind Mary und Sandra? · Wie du dieses Programm nutzt · Für wen ist UNBOND? · Zwei Zielgruppen, ein Weg",
    to: "/einleitung",
    cta: true,
  },
  {
    num: "🧭 Routing",
    title: "Wo stehst du gerade?",
    sub: "Self-Select · Persönliche Routingempfehlung",
    to: "/routing",
  },
  {
    num: "Schritt 01",
    title: "Trauma-Bonding verstehen",
    sub: "Toxische Muster benennen · 10 Warnsignale · Spielautomaten-Effekt · ACT-Defusion",
    to: "/modul/$slug",
    slug: "modul-01",
  },
  {
    num: "Schritt 02",
    title: "Die Rosa-Brille abnehmen",
    sub: "Kognitive Dissonanz · Negative Reappraisal · 4-Spalten-Realitätscheck",
    to: "/modul/$slug",
    slug: "modul-02",
  },
  {
    num: "Schritt 03",
    title: "No Contact als Neurobiologie",
    sub: "90-Tage-Entzug · Hoover-Anatomie · Detox-Kontrakt · Wenn-Dann-Pläne",
    to: "/modul/$slug",
    slug: "modul-03",
  },
  {
    num: "Schritt 04",
    title: "Trigger entmachten",
    sub: "ABC-Analyse · Urge Surfing · Gegenkonditionierung · Trigger-Logbuch",
    to: "/modul/$slug",
    slug: "modul-04",
  },
  {
    num: "Schritt 05",
    title: "Körper zuerst",
    sub: "Polyvagal-Theorie · Fenster der Toleranz · Vagus-Reset · Schlaf-Rituale",
    to: "/modul/$slug",
    slug: "modul-05",
  },
  {
    num: "Schritt 06",
    title: "Suchtmuster brechen",
    sub: "Dopamin-Quellen · Cue-Audit · 30-Tage-Detox · Belohnungsplan",
    to: "/modul/$slug",
    slug: "modul-06",
  },
  {
    num: "Schritt 07",
    title: "WLW-Realität & Community",
    sub: "Fusion · U-Hauling · Community-Verlust · Late Bloomer · Spezifische Hürden",
    to: "/modul/$slug",
    slug: "modul-07",
  },
  {
    num: "Schritt 08",
    title: "Bindungsmuster & Inneres Kind",
    sub: "Bindungsstile · Anxious-Avoidant · Reactive Abuse · Sichere Bindung aufbauen",
    to: "/modul/$slug",
    slug: "modul-08",
  },
  {
    num: "Schritt 09",
    title: "Identität & Zukunft",
    sub: "Self-Expansion · Werte-Kompass · das Vakuum füllen",
    to: "/modul/$slug",
    slug: "modul-09",
  },
  {
    num: "Schritt 10",
    title: "Kintsugi · Posttraumatisches Wachstum",
    sub: "Bruchstellen vergolden · Manifest schreiben · Kintsugi",
    to: "/modul/$slug",
    slug: "modul-10",
  },
  {
    num: "Bonus D",
    title: "Wenn Behörden zur Waffe werden",
    sub: "Litigation Abuse · DARVO · Dokumentation · Rechtliche Vorsorge",
    to: "/modul/$slug",
    slug: "bonus-d",
  },
];

function Inhalt() {
  return (
    <main className="min-h-screen px-4 py-10 pb-24">
      <div className="mx-auto max-w-3xl space-y-7">
        <Link to="/poem" className="inline-flex items-center gap-1 text-sm text-bordeaux hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Marys Geschichte
        </Link>

        <header className="text-center animate-fade-in">
          <p className="inline-block rounded-full bg-mauve/15 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-mauve">
            Dein Programm im Überblick
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-bordeaux">
            Inhaltsverzeichnis
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-graphite/75">
            Dein Weg durch UNBOND ist so individuell wie deine Geschichte. Das
            Routing hilft dir, deinen persönlichen Einstiegspunkt zu finden.
          </p>
        </header>

        <ul className="grid gap-3 sm:grid-cols-2 animate-fade-in">
          {ITEMS.map((item, i) => (
            <li key={i} className={item.cta ? "sm:col-span-2" : ""}>
              <TocCard item={item} />
            </li>
          ))}
        </ul>

        <div className="pt-4 text-center">
          <Link
            to="/dashboard"
            className="text-sm text-bordeaux hover:underline"
          >
            → Direkt zum Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

function TocCard({ item }: { item: Item }) {
  const cls = `group block h-full rounded-xl border bg-white/70 p-4 transition-all duration-300 hover:bg-white hover:shadow-soft hover:-translate-y-[1px] ${
    item.cta
      ? "border-bordeaux/40 bg-gradient-to-br from-bordeaux/10 via-mauve/5 to-transparent"
      : "border-border/60"
  }`;

  const inner = (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mauve">
        {item.num}
      </p>
      <h3 className="mt-1.5 font-display text-base font-semibold leading-tight text-bordeaux">
        {item.title}
      </h3>
      <p className="mt-1 text-xs leading-snug text-graphite/70">{item.sub}</p>
    </>
  );

  if (item.to === "/modul/$slug" && item.slug) {
    return (
      <Link to="/modul/$slug" params={{ slug: item.slug }} className={cls}>
        {inner}
      </Link>
    );
  }
  if (item.to === "/einleitung") {
    return <Link to="/einleitung" className={cls}>{inner}</Link>;
  }
  if (item.to === "/routing") {
    return <Link to="/routing" className={cls}>{inner}</Link>;
  }
  return <div className={cls}>{inner}</div>;
}
