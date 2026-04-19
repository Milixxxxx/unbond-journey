import { useModuleProgress } from "@/hooks/use-module-progress";

type Level = "gruen" | "gelb" | "rot";

const LEVELS: { id: Level; emoji: string; label: string; color: string; tagline: string; action: string }[] = [
  {
    id: "gruen",
    emoji: "🟢",
    label: "Grün · Stabil",
    color: "var(--color-sage)",
    tagline: "Du denkst selten an sie. Du hast Energie für andere Dinge.",
    action: "Bleib in deinen Routinen — sie sind dein Schutzwall.",
  },
  {
    id: "gelb",
    emoji: "🟡",
    label: "Gelb · Warnung",
    color: "#d4a574",
    tagline: "Traurige Musik. Profil-Stalking. Idealisierung der Vergangenheit.",
    action: "Jetzt handeln: Freundin anrufen, raus an die Luft, Cue ausschalten.",
  },
  {
    id: "rot",
    emoji: "🔴",
    label: "Rot · Gefahr",
    color: "var(--color-bordeaux)",
    tagline: "Du tippst eine Nachricht. Du fährst an ihrem Haus vorbei.",
    action: "Notfall-Intervention: SOS-Knopf · 4-7-8-Atem · Mensch an deiner Seite.",
  },
];

/**
 * RelapseTrafficLight · Vibe-Check für Kapitel 06 (Suchtmuster brechen).
 *
 * Tap-basierte Selbsteinschätzung – keine Slider (Memory: Mobile-Regel).
 * Sobald die User:in tippt, leuchtet die Ampel und zeigt die zugeordnete
 * Sofort-Empfehlung. Persistiert in exerciseState.relapse_light.
 */
export function RelapseTrafficLight({ slug }: { slug: string }) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const current = (exerciseState.relapse_light as Level | undefined) ?? null;
  const set = (l: Level) => setExercise("relapse_light", l);
  const active = LEVELS.find((l) => l.id === current);

  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bordeaux/5 via-cream/60 to-sage/8 p-5 shadow-soft sm:p-6"
      style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bordeaux">
        Vibe-Check · Wo stehst du gerade?
      </p>
      <h3 className="mt-1.5 font-display text-lg font-bold text-bordeaux sm:text-xl">
        Die UNBOND-Rückfall-Ampel
      </h3>
      <p className="mt-1.5 text-sm text-graphite/75">
        Kein Urteil. Nur ein ehrlicher Blick — und ein konkreter nächster Schritt.
        Tippe die Farbe, die <em>jetzt gerade</em> stimmt.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {LEVELS.map((l) => {
          const isOn = current === l.id;
          return (
            <button
              key={l.id}
              type="button"
              onClick={() => set(l.id)}
              className={[
                "group flex flex-col items-start gap-1 rounded-xl border-2 p-3 text-left transition active:scale-[0.98]",
                isOn ? "shadow-elegant" : "border-bordeaux/15 bg-white/70 hover:border-bordeaux/40 hover:bg-white",
              ].join(" ")}
              style={isOn ? { borderColor: l.color, background: "white" } : undefined}
              aria-pressed={isOn}
            >
              <div className="flex items-center gap-2">
                <span
                  className={[
                    "text-2xl transition",
                    isOn ? "scale-110" : "opacity-60 group-hover:opacity-100",
                  ].join(" ")}
                  style={isOn ? { filter: "drop-shadow(0 0 6px " + l.color + ")" } : undefined}
                  aria-hidden
                >
                  {l.emoji}
                </span>
                <span className="font-display text-sm font-bold" style={{ color: l.color }}>
                  {l.label}
                </span>
              </div>
              <p className="text-[11px] leading-snug text-graphite/70">{l.tagline}</p>
            </button>
          );
        })}
      </div>

      {/* Sofort-Aktion */}
      {active && (
        <div
          className="mt-4 flex items-start gap-3 rounded-xl bg-white/80 p-4 shadow-glass animate-fade-in"
          style={{ borderLeft: `4px solid ${active.color}` }}
        >
          <span className="text-xl" aria-hidden>
            ✨
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: active.color }}>
              Dein nächster Schritt
            </p>
            <p className="mt-0.5 text-sm leading-relaxed text-graphite/85">{active.action}</p>
          </div>
        </div>
      )}
    </section>
  );
}
