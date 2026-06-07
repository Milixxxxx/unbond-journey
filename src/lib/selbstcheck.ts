/**
 * 5-Konzept-Selbstcheck — Diagnostischer Einstieg ins Buch.
 *
 * Fünf Konzepte aus dem Fundament:
 *   1. nervensystem  — Amygdala-Hijack, Alarmmodus
 *   2. polyvagal     — Dorsal / Sympathisch / Ventral
 *   3. narzissmus    — Altruistischer Narzissmus / Weaponized Virtue
 *   4. kptbs         — Komplexe PTBS-Symptome
 *   5. liebe_sucht   — Liebe vs. Sucht (Bancroft / Tango)
 *
 * Pro Konzept 3 Likert-Fragen (1–4). Score = Summe (3–12).
 * Ampel:  ≤5 grün · 6–8 gelb · ≥9 rot
 *
 * Persistenz: localStorage "unbond-selbstcheck-v1"
 * Auto-Pfadmodus: Nervensystem rot → "akut", sonst "klarheit".
 */
import type { PathMode } from "./path-mode";

export type ConceptId =
  | "nervensystem"
  | "polyvagal"
  | "narzissmus"
  | "kptbs"
  | "liebe_sucht";

export type Ampel = "gruen" | "gelb" | "rot";

export type ConceptDef = {
  id: ConceptId;
  label: string;
  short: string;
  desc: string;
  questions: string[];
  /** Empfohlenes Kapitel, wenn diese Ampel rot/gelb. Slug aus MODULES. */
  primarySlug: string;
  primaryLabel: string;
};

export const CONCEPTS: ConceptDef[] = [
  {
    id: "nervensystem",
    label: "Nervensystem im Alarm",
    short: "Amygdala-Hijack",
    desc: "Wie oft kippst du in körperlichen Alarm (Herzrasen, Panik, 3-Uhr-nachts-Loops)?",
    questions: [
      "Mein Herz rast oder ich kann nicht atmen, wenn ich an sie/ihn denke.",
      "Ich werde nachts wach und komme aus Gedanken-Loops nicht mehr raus.",
      "Mein Körper reagiert (Zittern, Übelkeit, Enge), bevor ich denken kann.",
    ],
    primarySlug: "sos-soforthilfe",
    primaryLabel: "SOS · Akute Stabilisierung",
  },
  {
    id: "polyvagal",
    label: "Polyvagale Regulation",
    short: "Erstarrt · Aktiviert · Sicher",
    desc: "Wo lebt dein Nervensystem aktuell am häufigsten?",
    questions: [
      "Ich fühle mich oft taub, leer oder wie eingefroren.",
      "Ich kippe schnell zwischen Übererregung und Erschöpfung.",
      "Echte körperliche Sicherheit (weiche Schultern, ruhiger Atem) ist selten.",
    ],
    primarySlug: "modul-05",
    primaryLabel: "Schritt 06 · Körper zuerst",
  },
  {
    id: "narzissmus",
    label: "Altruistischer Narzissmus",
    short: "Weaponized Virtue",
    desc: "Wurde Tugend (Fürsorge, Spiritualität, Aktivismus) gegen dich gewendet?",
    questions: [
      'Ihre/seine „Güte" nach außen passt nicht zu dem, was ich privat erlebt habe.',
      "Wenn ich Grenzen setzte, wurde ich als egoistisch, kalt oder krank dargestellt.",
      "Dritte glauben ihr/ihm — ich werde als die Schwierige wahrgenommen.",
    ],
    primarySlug: "modul-02",
    primaryLabel: "Schritt 03 · Rosa-Brille abnehmen",
  },
  {
    id: "kptbs",
    label: "Komplexe PTBS-Spuren",
    short: "kPTBS-Symptome",
    desc: "Anhaltende Spuren längerer Beziehungsgewalt.",
    questions: [
      "Ich habe Flashbacks, intrusive Bilder oder Albträume aus der Beziehung.",
      "Ich misstraue mir selbst — meiner Wahrnehmung, meinem Gedächtnis, meinen Gefühlen.",
      'Scham und das Gefühl, grundlegend „falsch" zu sein, sind ständige Begleiter.',
    ],
    primarySlug: "modul-01",
    primaryLabel: "Schritt 02 · Trauma-Bonding",
  },
  {
    id: "liebe_sucht",
    label: "Liebe vs. Sucht",
    short: "Bindung als Entzug",
    desc: "Funktioniert die Bindung eher wie Liebe — oder wie eine Substanz?",
    questions: [
      "Kontaktabbruch fühlt sich körperlich an wie Entzug (Craving, Unruhe, Sog).",
      "Schon eine Nachricht/ein Foto reicht, um mich tagelang in den Sog zu ziehen.",
      "Ich weiß, dass es mir schadet — und ich kann trotzdem nicht aufhören.",
    ],
    primarySlug: "modul-06",
    primaryLabel: "Schritt 07 · Suchtmuster brechen",
  },
];

export type AnswerMap = Partial<Record<ConceptId, number[]>>; // jeweils 3 Zahlen 1..4

export type ConceptResult = {
  id: ConceptId;
  score: number;
  ampel: Ampel;
};

export type SelbstcheckProfile = {
  answers: AnswerMap;
  results: ConceptResult[];
  recommendedPath: PathMode;
  /** Top-3 Konzept-IDs nach Score, höchste zuerst. */
  topConcepts: ConceptId[];
  updatedAt: string; // ISO
};

export const STORAGE_KEY = "unbond-selbstcheck-v1";

export function ampelFor(score: number): Ampel {
  if (score >= 9) return "rot";
  if (score >= 6) return "gelb";
  return "gruen";
}

export function evaluate(answers: AnswerMap): SelbstcheckProfile {
  const results: ConceptResult[] = CONCEPTS.map((c) => {
    const arr = answers[c.id] ?? [];
    const score = arr.reduce((a, b) => a + (b ?? 0), 0);
    return { id: c.id, score, ampel: ampelFor(score) };
  });
  const nervensystem = results.find((r) => r.id === "nervensystem");
  const recommendedPath: PathMode =
    nervensystem && nervensystem.ampel === "rot" ? "akut" : "klarheit";
  const topConcepts = [...results]
    .sort((a, b) => b.score - a.score)
    .map((r) => r.id);
  return {
    answers,
    results,
    recommendedPath,
    topConcepts,
    updatedAt: new Date().toISOString(),
  };
}

export function readProfile(): SelbstcheckProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SelbstcheckProfile;
  } catch {
    return null;
  }
}

export function writeProfile(p: SelbstcheckProfile) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    window.dispatchEvent(new Event("unbond-selbstcheck-updated"));
  } catch {
    /* noop */
  }
}

export function clearProfile() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("unbond-selbstcheck-updated"));
  } catch {
    /* noop */
  }
}

export function getConcept(id: ConceptId): ConceptDef {
  return CONCEPTS.find((c) => c.id === id)!;
}

/** Drei priorisierte Kapitel, basierend auf den höchsten Scores (rot/gelb bevorzugt). */
export function recommendedChapters(p: SelbstcheckProfile) {
  const ordered = [...p.results].sort((a, b) => b.score - a.score);
  const picks: { slug: string; label: string; reason: string; ampel: Ampel }[] = [];
  const seen = new Set<string>();
  for (const r of ordered) {
    if (picks.length >= 3) break;
    if (r.ampel === "gruen" && picks.length > 0) continue;
    const c = getConcept(r.id);
    if (seen.has(c.primarySlug)) continue;
    seen.add(c.primarySlug);
    picks.push({
      slug: c.primarySlug,
      label: c.primaryLabel,
      reason: c.label,
      ampel: r.ampel,
    });
  }
  return picks;
}
