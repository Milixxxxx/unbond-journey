import { Smartphone, Home, Users, Check } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

type Schleuse = {
  key: "digital" | "physisch" | "sozial";
  icon: React.ReactNode;
  title: string;
  intro: string;
  items: { id: string; text: string }[];
};

const SCHLEUSEN: Schleuse[] = [
  {
    key: "digital",
    icon: <Smartphone className="h-5 w-5" />,
    title: "Digitale Schleuse",
    intro:
      "Jede App ist eine Schleuse. Solange auch nur eine offen steht, läuft das Wasser zurück.",
    items: [
      { id: "d1", text: "Telefonnummer gelöscht & blockiert" },
      { id: "d2", text: "WhatsApp / iMessage blockiert" },
      { id: "d3", text: "Instagram entfolgt + blockiert + Stories stumm" },
      { id: "d4", text: "Facebook / TikTok / Snapchat geschlossen" },
      { id: "d5", text: "E-Mail-Adresse blockiert oder Filter-Regel aktiv" },
      { id: "d6", text: "Gemeinsame Apps gelöscht (Spotify-Playlists, Notes, Photos)" },
    ],
  },
  {
    key: "physisch",
    icon: <Home className="h-5 w-5" />,
    title: "Physische Schleuse",
    intro:
      "Orte, Gegenstände und Rituale, die mit ihr verknüpft sind. Jeder Cue feuert dein Suchtzentrum.",
    items: [
      { id: "p1", text: "Geschenke in eine Box gepackt (Keller / Freundin) — nicht mehr sichtbar" },
      { id: "p2", text: "Fotos archiviert (nicht löschen — verstecken reicht)" },
      { id: "p3", text: "Stammcafé / Lieblingsbar für 3 Monate gemieden" },
      { id: "p4", text: "Gemeinsamen Ort (Wohnung / Quartier) bewusst umgangen" },
      { id: "p5", text: "Ihren Pulli / Parfüm aus dem Schlafzimmer entfernt" },
    ],
  },
  {
    key: "sozial",
    icon: <Users className="h-5 w-5" />,
    title: "Soziale Schleuse",
    intro:
      "Flying Monkeys & gemeinsame Freundinnen sind Hintertüren. Informationsstopp ist Selbstschutz.",
    items: [
      { id: "s1", text: "Gemeinsamen Freundinnen klar gesagt: „Erzähl mir nichts über sie.“" },
      { id: "s2", text: "Mutual Friends auf Instagram stummgeschaltet (nicht entfolgt)" },
      { id: "s3", text: "Kein Stalking durch Dritte — auch nicht „nur zur Sicherheit“" },
      { id: "s4", text: "Eine Vertraute benannt, die als Filter fungiert (Notfälle only)" },
    ],
  },
];

/**
 * Übung 1 · Die digitale Kontakt-Inventur (3 Schleusen).
 * Mobile-first: 3 Karten untereinander, jede mit klickbarer Checkliste.
 * Persistiert pro Item-ID in exerciseState["nc_schleusen"].
 *
 * Wenn alle Items einer Schleuse erledigt sind, kippt die Karte auf grün
 * und zeigt einen sanften „Geschlossen ✦"-Indikator.
 */
export function NoContactSchleusen({
  slug,
  storageKey = "nc_schleusen",
  accent = "bordeaux" as ExerciseAccent,
}: {
  slug: string;
  storageKey?: string;
  accent?: ExerciseAccent;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const checked: Record<string, boolean> = exerciseState[storageKey] ?? {};
  const toggle = (id: string) => {
    setExercise(storageKey, { ...checked, [id]: !checked[id] });
  };

  const totalItems = SCHLEUSEN.reduce((n, s) => n + s.items.length, 0);
  const checkedTotal = Object.values(checked).filter(Boolean).length;

  return (
    <ExerciseFrame
      title="Übung 1 · Die digitale Kontakt-Inventur"
      subtitle="Schließe alle drei Schleusen. Jede offene Tür ist eine Hintertür für die Sucht."
      meta={`🔒 ${checkedTotal} / ${totalItems} geschlossen · ⏱ 30 Min · 💡 Cue-Reduktion`}
      accent={accent}
    >
      <div className="space-y-4">
        {SCHLEUSEN.map((s) => {
          const sChecked = s.items.filter((it) => checked[it.id]).length;
          const closed = sChecked === s.items.length;
          return (
            <div
              key={s.key}
              className={`rounded-xl border-2 p-4 transition-all ${
                closed
                  ? "border-sage bg-sage/10"
                  : "border-bordeaux/15 bg-white/75"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span
                    className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full ${
                      closed ? "bg-sage text-white" : "bg-bordeaux/10 text-bordeaux"
                    }`}
                  >
                    {closed ? <Check className="h-5 w-5" strokeWidth={3} /> : s.icon}
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-bordeaux">
                      {s.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-graphite/75">
                      {s.intro}
                    </p>
                  </div>
                </div>
                <span
                  className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    closed
                      ? "bg-sage text-white"
                      : "bg-bordeaux/10 text-bordeaux"
                  }`}
                >
                  {sChecked}/{s.items.length}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5">
                {s.items.map((it) => {
                  const on = !!checked[it.id];
                  return (
                    <li key={it.id}>
                      <button
                        type="button"
                        onClick={() => toggle(it.id)}
                        aria-pressed={on}
                        className={`flex w-full items-start gap-2.5 rounded-lg p-2 text-left text-sm transition ${
                          on
                            ? "bg-sage/15 text-graphite"
                            : "hover:bg-bordeaux/5"
                        }`}
                      >
                        <span
                          className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded border-2 transition ${
                            on
                              ? "border-sage bg-sage text-white"
                              : "border-bordeaux/30 bg-white"
                          }`}
                        >
                          {on && <Check className="h-3 w-3" strokeWidth={3} />}
                        </span>
                        <span
                          className={`text-xs leading-snug ${
                            on
                              ? "font-medium line-through decoration-sage/50"
                              : ""
                          }`}
                        >
                          {it.text}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {closed && (
                <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-wider text-sage">
                  ✦ Schleuse geschlossen
                </p>
              )}
            </div>
          );
        })}
      </div>
    </ExerciseFrame>
  );
}
