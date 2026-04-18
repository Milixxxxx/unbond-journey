export type Phase = 1 | 2 | 3 | 4;

export type ModuleMeta = {
  slug: string;
  number: string; // "0", "01", "02"...
  title: string;
  subtitle: string;
  phase: Phase;
  available: boolean; // false = locked (Inhalt folgt)
};

export const PHASES: Record<Phase, { title: string; description: string; range: string }> = {
  1: {
    title: "Phase 1 · Akutstabilisierung & Entzug",
    description: "Physiologische Regulation vor psychologischer Analyse.",
    range: "Kapitel 0 – Modul 02",
  },
  2: {
    title: "Phase 2 · Kognitive Entzauberung",
    description: "Systematische Dekonstruktion der Idealisierung.",
    range: "Module 03 – 04",
  },
  3: {
    title: "Phase 3 · Emotionsregulation",
    description: "Trigger-Landkarten und ACT-Techniken.",
    range: "Module 05 – 06",
  },
  4: {
    title: "Phase 4 · Identitätsrekonstruktion",
    description: "Wertearbeit, Self-Expansion, posttraumatisches Wachstum.",
    range: "Module 07 – 10",
  },
};

export const MODULES: ModuleMeta[] = [
  {
    slug: "kapitel-0",
    number: "0",
    title: "Fundament",
    subtitle: "Willkommen im Schmerz – verstehen, was passiert",
    phase: 1,
    available: true,
  },
  {
    slug: "modul-01",
    number: "01",
    title: "SOS · Akute Stabilisierung",
    subtitle: "TIPP, Urge Surfing, STOPP – wenn der Verstand offline ist",
    phase: 1,
    available: true,
  },
  {
    slug: "modul-02",
    number: "02",
    title: "Trauma-Bonding · Anatomie der Fessel",
    subtitle: "Warum dein Körper nicht loslassen will",
    phase: 1,
    available: false,
  },
  {
    slug: "modul-03",
    number: "03",
    title: "Toxikometer & Realitäts-Check",
    subtitle: "Idealisierung systematisch dekonstruieren",
    phase: 2,
    available: false,
  },
  {
    slug: "modul-04",
    number: "04",
    title: "No-Contact als Entzug",
    subtitle: "Strikter Kontaktabbruch als neurobiologische Notwendigkeit",
    phase: 2,
    available: false,
  },
  {
    slug: "modul-05",
    number: "05",
    title: "Trigger entmachten",
    subtitle: "Trigger-Landkarte und Urge Surfing in der Tiefe",
    phase: 3,
    available: false,
  },
  {
    slug: "modul-06",
    number: "06",
    title: "ACT · Werte statt Wunden",
    subtitle: "Akzeptanz, Defusion, wertebasiertes Handeln",
    phase: 3,
    available: false,
  },
  {
    slug: "modul-07",
    number: "07",
    title: "Identität jenseits der Bindung",
    subtitle: "Wer bist du, ohne sie?",
    phase: 4,
    available: false,
  },
  {
    slug: "modul-08",
    number: "08",
    title: "Self-Expansion",
    subtitle: "Neue dopaminerge Belohnungssysteme aufbauen",
    phase: 4,
    available: false,
  },
  {
    slug: "modul-09",
    number: "09",
    title: "WLW-Realität & Community",
    subtitle: "Fusion, kleine Pools, Re-Integration",
    phase: 4,
    available: false,
  },
  {
    slug: "modul-10",
    number: "10",
    title: "Kintsugi · Posttraumatisches Wachstum",
    subtitle: "Narben als Teil deiner Stärke",
    phase: 4,
    available: false,
  },
];

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
