// Demo-Fragen für Toxicometer (User liefert die echten 25 später nach).
export type ToxiQuestion = { id: string; text: string };

export const TOXI_QUESTIONS: ToxiQuestion[] = [
  { id: "q1", text: "Ich habe meine Bedürfnisse zurückgestellt, um Konflikte zu vermeiden." },
  { id: "q2", text: "Auf intensive Nähe folgte oft plötzlicher Rückzug, den ich mir nicht erklären konnte." },
  { id: "q3", text: "Ich fühle mich auch nach der Trennung körperlich unruhig oder krank, wenn ich an sie denke." },
  { id: "q4", text: "Ich habe Freundinnen, Familie oder Hobbys schleichend vernachlässigt." },
  { id: "q5", text: "Ich habe Verhalten entschuldigt, das mir bei einer Freundin Sorge machen würde." },
];

export type ToxiLevel = "gering" | "mittel" | "hoch" | "akut";

export function classify(score: number, max: number): { level: ToxiLevel; label: string; recommendation: string } {
  const pct = score / max;
  if (pct < 0.25) {
    return {
      level: "gering",
      label: "Geringe Belastung",
      recommendation: "Beginne mit der Einleitung und dem SOS-Modul, um die Werkzeuge kennenzulernen.",
    };
  }
  if (pct < 0.5) {
    return {
      level: "mittel",
      label: "Mittlere Belastung",
      recommendation: "Starte mit dem SOS-Modul und arbeite dich linear durch die Module.",
    };
  }
  if (pct < 0.75) {
    return {
      level: "hoch",
      label: "Hohe Belastung",
      recommendation: "Beginne sofort mit dem SOS-Modul zur Stabilisierung – Modul 01 direkt im Anschluss.",
    };
  }
  return {
    level: "akut",
    label: "Akute Belastung",
    recommendation: "Modul 01 (SOS) ist deine erste Station. Hilfetelefon 0800 116 016 ist 24/7 erreichbar.",
  };
}
