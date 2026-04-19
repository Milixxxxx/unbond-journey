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
    title: "Suchtmuster brechen · No-Contact als Entzug",
    subtitle: "Strikter Kontaktabbruch als neurobiologische Notwendigkeit",
    phase: 2,
    available: false,
    stubBlurb:
      "No-Contact ist kein Liebesentzug – es ist Entgiftung. Dein dopaminerges System braucht 60–90 Tage, um zu resetten. Hier landet auch die Sucht-Vertiefung (Love Addiction) aus dem ursprünglichen Fundament-Kapitel.",
    stubTopics: [
      "Sucht-Anatomie der Liebe",
      "Trigger-Inventar",
      "Digitale Hygiene",
      "Notfallplan für Begegnungen",
      "Kalender: Tag 1 bis Tag 90",
    ],
  },
  {
    slug: "modul-04",
    number: "04",
    title: "Trigger entmachten",
    subtitle: "Trigger-Landkarte und Urge Surfing in der Tiefe",
    phase: 3,
    available: false,
    stubBlurb:
      "Trigger sind nicht der Feind – sie sind Wegweiser. In diesem Modul lernst du, sie zu lesen, zu surfen und zu integrieren.",
    stubTopics: [
      "Trigger-Landkarte erstellen",
      "Polyvagal-Theorie anwenden",
      "Detached Mindfulness",
      "Übung: Welle für Welle",
    ],
  },
  {
    slug: "modul-05",
    number: "05",
    title: "Der Körper zuerst",
    subtitle: "Polyvagal-Theorie, Vagus-Reset, somatische Regulation",
    phase: 3,
    available: false,
    stubBlurb:
      "Heilung beginnt nicht im Kopf – sie beginnt im Nervensystem. Hier landet die Polyvagal-Theorie aus dem ursprünglichen Fundament-Kapitel, plus konkrete Werkzeuge zur körperlichen Selbstregulation.",
    stubTopics: [
      "Polyvagal-Theorie verstehen",
      "Vagus-Reset (Atem, Kälte, Summen)",
      "Sicherheitssignale für den Körper",
      "Übung: Tägliches Nervensystem-Ritual",
    ],
  },
  {
    slug: "modul-06",
    number: "06",
    title: "Identität jenseits der Bindung",
    subtitle: "Wer bist du, ohne sie?",
    phase: 4,
    available: false,
    stubBlurb:
      "In toxischen Beziehungen verschmilzt Identität. Hier rekonstruierst du, wer du warst, bevor du dich verlierst – und wer du jetzt sein willst.",
    stubTopics: [
      "Identitäts-Inventar",
      "Verlorene Hobbys reaktivieren",
      "Self-Concept Recovery",
      "Übung: Ein Brief an mein altes Ich",
    ],
  },
  {
    slug: "modul-07",
    number: "07",
    title: "Self-Expansion",
    subtitle: "Neue dopaminerge Belohnungssysteme aufbauen",
    phase: 4,
    available: false,
    stubBlurb:
      "Aron & Aron (1986): Wir wachsen durch Erweiterung. Du tauschst die süchtig machende Bindung gegen breite, nahrhafte Quellen von Bedeutung.",
    stubTopics: [
      "Novelty-Inventur",
      "Skills statt Suchen",
      "Flow-Aktivitäten",
      "Übung: 30 Tage – 30 neue Mikro-Erfahrungen",
    ],
  },
  {
    slug: "modul-08",
    number: "08",
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
    slug: "modul-09",
    number: "09",
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
