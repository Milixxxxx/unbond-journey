export type Phase = 1 | 2 | 3 | 4;

export type ModuleMeta = {
  slug: string;
  number: string; // "0", "01", "02"...
  title: string;
  subtitle: string;
  phase: Phase;
  available: boolean; // false = locked (Inhalt folgt)
  // Stub-Daten für noch nicht voll ausgearbeitete Module:
  stubBlurb?: string;
  stubTopics?: string[];
};

export const PHASES: Record<Phase, { title: string; description: string; range: string }> = {
  1: {
    title: "Phase 1 · Akutstabilisierung & Verstehen",
    description: "Physiologische Regulation und neurobiologisches Verständnis vor allem anderen.",
    range: "SOS – Modul 01",
  },
  2: {
    title: "Phase 2 · Kognitive Entzauberung",
    description: "Systematische Dekonstruktion der Idealisierung & Kontaktabbruch als Entzug.",
    range: "Module 02 – 03",
  },
  3: {
    title: "Phase 3 · Emotionsregulation",
    description: "Trigger-Landkarten, Polyvagal-Theorie & ACT-Techniken.",
    range: "Module 04 – 05",
  },
  4: {
    title: "Phase 4 · Identitätsrekonstruktion",
    description: "Wertearbeit, Self-Expansion, posttraumatisches Wachstum.",
    range: "Module 06 – 09",
  },
};

export const MODULES: ModuleMeta[] = [
  {
    slug: "sos-soforthilfe",
    number: "01",
    title: "SOS: Stabilisierung",
    subtitle:
      "TIPP-Protokoll, STOPP-Technik, Urge Surfing und Notfallkontakte — aus jedem Kapitel über den SOS-Button erreichbar.",
    phase: 1,
    available: true,
  },
  {
    slug: "modul-01",
    number: "02",
    title: "Trauma-Bonding",
    subtitle:
      "Intermittierende Verstärkung, Dopamin-Achterbahn und der Spielautomaten-Effekt — warum sich die Bindung wie Sucht anfühlt.",
    phase: 1,
    available: true,
  },
  {
    slug: "modul-02",
    number: "03",
    title: "Rosa-Brille",
    subtitle:
      "Kognitive Dissonanz auflösen, Gaslighting dokumentieren, Hoovering benennen — Realität statt Hoffnung.",
    phase: 2,
    available: true,
  },
  {
    slug: "modul-03",
    number: "04",
    title: "No Contact",
    subtitle:
      "Kontaktabbruch als medizinisches Entzugsprotokoll — drei Schleusen, 90 Tage, Wenn-Dann-Pläne.",
    phase: 2,
    available: true,
  },
  {
    slug: "modul-04",
    number: "05",
    title: "Trigger entmachten",
    subtitle: "Trigger-Landkarte, ABC-Analyse und Urge Surfing — den Drang reiten statt ihm folgen",
    phase: 3,
    available: true,
  },
  {
    slug: "modul-05",
    number: "06",
    title: "Körper zuerst",
    subtitle: "Polyvagal-Theorie, Vagus-Reset, somatische Regulation – Heilung beginnt im Nervensystem",
    phase: 3,
    available: true,
  },
  {
    slug: "modul-06",
    number: "07",
    title: "Suchtmuster brechen",
    subtitle: "Extinction Burst, Cue-Audit und Rückfall-Ampel — wenn das Feuer am stärksten brennt, ist es kurz vor dem Erlöschen",
    phase: 4,
    available: true,
  },
  {
    slug: "modul-07",
    number: "08",
    title: "WLW-Kontext",
    subtitle: "Small-Pool, Fusion, Grey Rock — wenn totaler No Contact unmöglich ist und die Szene zu klein bleibt",
    phase: 4,
    available: true,
  },
  {
    slug: "modul-08",
    number: "09",
    title: "Bindungsmuster",
    subtitle:
      'Anxious-Avoidant-Trap, Reactive Abuse & Reparenting — warum dein „hysterisches" Verhalten biologische Notwehr war',
    phase: 4,
    available: true,
  },
  {
    slug: "modul-09",
    number: "10",
    title: "Identität & Abschluss",
    subtitle: "Werte-Kompass, Self-Expansion, Kintsugi-Manifest — wer du wirst, wenn die Bindung nicht mehr definiert, wer du bist.",
    phase: 4,
    available: true,
  },
  {
    slug: "bonus-d",
    number: "D",
    title: "Bonus D · Behörden",
    subtitle:
      "Litigation Abuse, DARVO, Institutional Betrayal — Dokumentation, Vorsorge & queere Rechtsressourcen",
    phase: 4,
    available: true,
  },
  {
    slug: "bonus-e",
    number: "E",
    title: "Bonus E · Warum",
    subtitle:
      "Schema-Therapie (Young) & IFS-Parts (Schwartz) — die Tiefenschichten, die deine Bindungswahl produzieren",
    phase: 4,
    available: true,
  },
  {
    slug: "bonus-f",
    number: "F",
    title: "Bonus F · Trauer",
    subtitle:
      "Disenfranchised Grief, 5 Verlustebenen & finale Kintsugi-Apotheose — der letzte Schritt im Complete-Pfad",
    phase: 4,
    available: true,
  },
];

export const BONUS_SLUGS = ["bonus-d", "bonus-e", "bonus-f"];

export function isBonus(slug: string) {
  return BONUS_SLUGS.includes(slug);
}

export function getModule(slug: string): ModuleMeta | undefined {
  return MODULES.find((m) => m.slug === slug);
}

export function getNeighbors(slug: string) {
  const idx = MODULES.findIndex((m) => m.slug === slug);
  return {
    prev: idx > 0 ? MODULES[idx - 1] : undefined,
    next: idx >= 0 && idx < MODULES.length - 1 ? MODULES[idx + 1] : undefined,
  };
}
