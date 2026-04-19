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
    number: "0",
    title: "SOS · Notfallkoffer",
    subtitle: "Selbst-Monitoring, Notfallkontakte & Quick-Tools – aus jedem Kapitel über den SOS-Button erreichbar",
    phase: 1,
    available: true,
  },
  {
    slug: "modul-01",
    number: "01",
    title: "Trauma-Bonding verstehen",
    subtitle: "Die neurobiologische Fessel: intermittierende Verstärkung, Dopamin-Achterbahn, Cycle of Abuse",
    phase: 1,
    available: true,
  },
  {
    slug: "modul-02",
    number: "02",
    title: "Die Rosa-Brille abnehmen",
    subtitle: "Kognitive Dissonanz auflösen, Gaslighting dokumentieren, Hoovering entlarven",
    phase: 2,
    available: true,
  },
  {
    slug: "modul-03",
    number: "03",
    title: "No Contact als Neurobiologie",
    subtitle: "Medizinisches Protokoll, drei Schleusen, 90-Tage-Detox – Breadcrumbing entlarven",
    phase: 2,
    available: true,
  },
  {
    slug: "modul-04",
    number: "04",
    title: "Trigger entmachten",
    subtitle: "Trigger-Landkarte, ABC-Analyse und Urge Surfing — den Drang reiten statt ihm folgen",
    phase: 3,
    available: true,
  },
  {
    slug: "modul-05",
    number: "05",
    title: "Der Körper zuerst",
    subtitle: "Polyvagal-Theorie, Vagus-Reset, somatische Regulation – Heilung beginnt im Nervensystem",
    phase: 3,
    available: true,
  },
  {
    slug: "modul-06",
    number: "06",
    title: "Suchtmuster brechen",
    subtitle: "Extinction Burst, Cue-Audit und Rückfall-Ampel — wenn das Feuer am stärksten brennt, ist es kurz vor dem Erlöschen",
    phase: 4,
    available: true,
  },
  {
    slug: "modul-07",
    number: "07",
    title: "WLW-Realität & Community",
    subtitle: "Fusion, kleine Pools, Re-Integration",
    phase: 4,
    available: false,
    stubBlurb:
      "Lesbische und queere Communities sind klein und verflochten. Wir bauen Strategien für emotionale Sicherheit und gesunde Verbindungen.",
    stubTopics: [
      "Minority-Stress verstehen",
      "Boundaries in kleinen Szenen",
      "Re-Integration ohne Re-Trauma",
      "Übung: Mein queer Support-Net",
    ],
  },
  {
    slug: "modul-08",
    number: "08",
    title: "Bindungsmuster & Inneres Kind",
    subtitle: "Bindungsstile, Anxious-Avoidant Trap, Reparenting",
    phase: 4,
    available: false,
    stubBlurb:
      "Bowlby & Ainsworth zeigten: Wir lieben so, wie wir geliebt wurden. Wir entlarven dein Muster und reparenten das innere Kind, das immer noch wartet.",
    stubTopics: [
      "Mein Bindungsstil",
      "Die Anxious-Avoidant-Falle",
      "Reparenting-Übungen",
      "Der innere sichere Hafen",
    ],
  },
  {
    slug: "modul-09",
    number: "09",
    title: "Identität & Zukunft",
    subtitle: "Self-Expansion, Werte-Kompass und das Vakuum füllen — wer du wirst, wenn die Bindung nicht mehr definiert, wer du bist",
    phase: 4,
    available: true,
  },
  {
    slug: "modul-10",
    number: "10",
    title: "Kintsugi · Posttraumatisches Wachstum",
    subtitle: "Narben als Teil deiner Stärke",
    phase: 4,
    available: false,
    stubBlurb:
      "Tedeschi & Calhoun (2004): Posttraumatisches Wachstum ist real. Nicht trotz, sondern durch die Erfahrung. Wir vergolden die Bruchstellen.",
    stubTopics: [
      "Meine 5 Stärken",
      "Sinn-Konstruktion",
      "Narrative Reframing",
      "Abschluss: Mein Kintsugi-Manifest",
    ],
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
