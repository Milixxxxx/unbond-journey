/**
 * Journey · 3 Transformationsziele pro Kapitel.
 *
 * Diese Ziele sind die Meta-Ebene über den modul-internen Übungen:
 * Sie beschreiben den inneren Zustand, der sich verändert haben darf,
 * damit ein Kapitel der Reise als "transformiert" gilt.
 *
 * Regel: ALLE 3 Ziele müssen markiert sein, damit das Segment des
 * Winding-Path aufleuchtet und das nächste Kapitel sichtbar wird.
 */

export type JourneyChapter = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  goals: [string, string, string];
};

export const JOURNEY_CHAPTERS: JourneyChapter[] = [
  {
    slug: "modul-01",
    number: "01",
    title: "Trauma-Bonding verstehen",
    shortTitle: "Trauma-Bond",
    goals: [
      "Ich verstehe meine Sehnsucht als neurobiologische Reaktion, nicht als Beweis für Liebe.",
      "Ich kann den Zyklus aus Idealisierung, Abwertung und Versöhnung benennen.",
      "Ich höre auf, mich für meine Bindung zu beschämen.",
    ],
  },
  {
    slug: "modul-02",
    number: "02",
    title: "Die Rosa-Brille abnehmen",
    shortTitle: "Rosa-Brille",
    goals: [
      "Ich erkenne Gaslighting im Nachhinein und vertraue meiner Erinnerung.",
      "Ich kann Idealisierung von Realität trennen.",
      "Ich glaube meiner eigenen Wahrnehmung mehr als ihrer Erzählung.",
    ],
  },
  {
    slug: "modul-03",
    number: "03",
    title: "No Contact als Neurobiologie",
    shortTitle: "No Contact",
    goals: [
      "Ich verstehe No Contact als medizinischen Entzug, nicht als Strafe.",
      "Ich habe meine drei Schleusen (digital, physisch, mental) geschlossen.",
      "Ich entlarve Breadcrumbing als Wiederherstellungsversuch des Suchtkreises.",
    ],
  },
  {
    slug: "modul-04",
    number: "04",
    title: "Trigger entmachten",
    shortTitle: "Trigger",
    goals: [
      "Ich kann meine Trigger benennen, statt von ihnen überrollt zu werden.",
      "Ich reite den Drang, statt ihm zu folgen.",
      "Ich habe einen Wenn-Dann-Plan für meine drei stärksten Trigger.",
    ],
  },
  {
    slug: "modul-05",
    number: "05",
    title: "Der Körper zuerst",
    shortTitle: "Körper",
    goals: [
      "Ich erkenne meinen Nervensystem-Zustand (kämpfen, fliehen, erstarren, regulieren).",
      "Ich kann meinen Vagus mit einer einfachen Übung aktivieren.",
      "Ich fühle, dass Heilung im Körper beginnt, nicht im Kopf.",
    ],
  },
  {
    slug: "modul-06",
    number: "06",
    title: "Suchtmuster brechen",
    shortTitle: "Sucht",
    goals: [
      "Ich erkenne den Extinction Burst und reagiere nicht.",
      "Ich habe meine Cues (Auslöser) identifiziert und entschärft.",
      "Ich kenne meine Rückfall-Ampel und kann sie nutzen.",
    ],
  },
  {
    slug: "modul-07",
    number: "07",
    title: "WLW-Realität & Community",
    shortTitle: "WLW",
    goals: [
      "Ich akzeptiere die kleine Szene, ohne mich erpressen zu lassen.",
      "Ich beherrsche Grey Rock, wenn Begegnung unvermeidbar ist.",
      "Ich entkopple meine Identität von gemeinsamer Community.",
    ],
  },
  {
    slug: "modul-08",
    number: "08",
    title: "Bindungsmuster & Inneres Kind",
    shortTitle: "Inneres Kind",
    goals: [
      "Ich verstehe mein „hysterisches" Verhalten als biologische Notwehr.",
      "Ich erkenne den Anxious-Avoidant-Tanz und kann ihn unterbrechen.",
      "Ich beginne, mein inneres Kind zu beelternisieren.",
    ],
  },
  {
    slug: "modul-09",
    number: "09",
    title: "Identität & Zukunft",
    shortTitle: "Identität",
    goals: [
      "Ich kenne meine drei Kernwerte unabhängig von ihr.",
      "Ich erweitere mich (Self-Expansion) in neue Bereiche.",
      "Mein Vakuum wird zum Möglichkeitsraum.",
    ],
  },
  {
    slug: "modul-10",
    number: "10",
    title: "Kintsugi · Wachstum",
    shortTitle: "Kintsugi",
    goals: [
      "Ich benenne mindestens drei Wachstumsfelder durch diese Erfahrung.",
      "Ich habe meine Bruchstellen vergoldet, nicht versteckt.",
      "Mein Manifest ist geschrieben — ich bin nicht kaputt, ich bin erfahren.",
    ],
  },
];

export type ChapterState = "locked" | "in_progress" | "completed";

export function computeChapterState(
  chapterIndex: number,
  goalsByChapter: Record<string, boolean[]>,
): ChapterState {
  const chapter = JOURNEY_CHAPTERS[chapterIndex];
  const myGoals = goalsByChapter[chapter.slug] ?? [false, false, false];
  const myChecked = myGoals.filter(Boolean).length;

  if (myChecked === 3) return "completed";

  // Erstes Kapitel ist nie locked, sonst nur entsperrt wenn Vorgänger completed
  if (chapterIndex === 0) {
    return myChecked > 0 ? "in_progress" : "in_progress";
  }
  const prev = JOURNEY_CHAPTERS[chapterIndex - 1];
  const prevGoals = goalsByChapter[prev.slug] ?? [false, false, false];
  const prevCompleted = prevGoals.every(Boolean);

  if (!prevCompleted) return "locked";
  return myChecked > 0 ? "in_progress" : "in_progress";
}
