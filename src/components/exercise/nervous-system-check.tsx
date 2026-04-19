import { ExerciseFrame } from "./exercise-frame";
import { useModuleProgress } from "@/hooks/use-module-progress";

/**
 * NervousSystemCheck · Vibe-Check für Modul 05.
 * Wo bist du gerade auf der Polyvagal-Leiter? Drei Karten zum Antippen.
 * Persistiert die letzte Wahl + zählt, wie oft "ventral" gewählt wurde.
 */
type State = "dorsal" | "sympathisch" | "ventral";

const STATES: { id: State; emoji: string; label: string; desc: string; color: string }[] = [
  {
    id: "dorsal",
    emoji: "🧊",
    label: "Erstarrt",
    desc: "Taub, müde, leer. Dorsal Vagus.",
    color: "var(--color-bordeaux)",
  },
  {
    id: "sympathisch",
    emoji: "⚡",
    label: "Aktiviert",
    desc: "Wachsam, unruhig, Herz schnell. Kampf/Flucht.",
    color: "var(--color-terracotta)",
  },
  {
    id: "ventral",
    emoji: "🌿",
    label: "Sicher",
    desc: "Atmen geht leicht, Schultern weich. Ventral Vagus.",
    color: "var(--color-sage)",
  },
];

export function NervousSystemCheck({ slug }: { slug: string }) {
  const { exerciseState, setExerciseBulk, loaded } = useModuleProgress(slug);
  const stateKey = "ns_state";
  const ventralCountKey = "ns_ventral_count";
  const current = exerciseState[stateKey] as State | undefined;
  const ventralCount = (exerciseState[ventralCountKey] as number) ?? 0;

  const choose = (id: State) => {
    const next = { [stateKey]: id } as Record<string, any>;
    if (id === "ventral" && current !== "ventral") next[ventralCountKey] = ventralCount + 1;
    setExerciseBulk(next);
  };

  if (!loaded) return null;

  return (
    <ExerciseFrame
      title="Vibe-Check · Wo bin ich gerade?"
      subtitle="Kein Urteil. Nur Wahrnehmung. Tippe an, was am ehesten stimmt — auch wenn es schwankt."
      meta={`🎯 Polyvagal-Leiter · ${ventralCount}× heute schon „Sicher" markiert`}
      accent="sage"
      showSave={false}
    >
      <div className="grid gap-2 sm:grid-cols-3">
        {STATES.map((s) => {
          const on = current === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => choose(s.id)}
              className="rounded-xl border-2 p-3 text-left transition active:scale-95"
              style={{
                borderColor: on ? s.color : "rgba(0,0,0,0.08)",
                background: on ? `color-mix(in oklab, ${s.color} 14%, white)` : "rgba(255,255,255,0.7)",
              }}
              aria-pressed={on}
            >
              <div className="text-2xl">{s.emoji}</div>
              <p
                className="mt-1 font-display text-sm font-bold"
                style={{ color: s.color }}
              >
                {s.label}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-graphite/75">{s.desc}</p>
            </button>
          );
        })}
      </div>

      {current && (
        <div className="rounded-xl bg-sage/10 p-3 text-xs text-graphite/85">
          {current === "ventral"
            ? "Bleib hier kurz. Spüre, was Sicherheit körperlich heißt — das ist die Spur, die du verbreitern willst."
            : current === "sympathisch"
            ? "Probier den 4-7-8-Atem (Übung 2) oder den Panorama-Blick. Verlängerte Ausatmung holt dich zurück."
            : "Sanft. Beweg dich minimal: Schultern rollen, Füße spüren. Erst Bewegung, dann Atem, dann Gedanken."}
        </div>
      )}
    </ExerciseFrame>
  );
}
