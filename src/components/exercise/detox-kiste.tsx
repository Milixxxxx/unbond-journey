import { Package, Calendar } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";

/**
 * DetoxKiste · Übung aus SCHRITT_4_FINAL.html (Übung 3, Teil A).
 * "Verwahren statt Vernichten" — physische Erinnerungsstücke in eine Kiste,
 * mit Datum in 90 Tagen beschriftet. Das Gehirn braucht zu wissen, dass es
 * nicht für immer weg ist.
 *
 * Mini-Visual: Eine SVG-Kiste, deren "Deckel" sich symbolisch nach 90 Tagen
 * öffnet. Im UI: Countdown auf das eingegebene Öffnungsdatum.
 */
export function DetoxKiste({ slug }: { slug: string }) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const inhalt = (exerciseState.kiste_inhalt as string) ?? "";
  const ort = (exerciseState.kiste_ort as string) ?? "";
  const datum = (exerciseState.kiste_datum as string) ?? "";

  // Tage bis zur Öffnung
  let daysLeft: number | null = null;
  if (datum) {
    const target = new Date(datum);
    if (!isNaN(target.getTime())) {
      const diff = Math.ceil((target.getTime() - Date.now()) / 86400000);
      daysLeft = Math.max(0, diff);
    }
  }

  return (
    <ExerciseFrame
      title="Übung · Die Detox-Kiste"
      subtitle="Verwahren statt vernichten. Dein Gehirn braucht zu wissen, dass es nicht für immer weg ist."
      meta="📦 Physische Detox-Handlung · ~20 Min"
      accent="bordeaux"
    >
      {/* Symbolisches Kisten-Visual */}
      <div className="grid place-items-center rounded-xl bg-gradient-to-b from-cream/60 to-mauve/8 p-5">
        <svg width="140" height="120" viewBox="0 0 140 120" aria-hidden>
          {/* Schatten */}
          <ellipse cx="70" cy="112" rx="55" ry="5" fill="black" opacity="0.08" />
          {/* Kiste */}
          <rect
            x="22"
            y="45"
            width="96"
            height="60"
            rx="4"
            fill="var(--color-bordeaux)"
            opacity="0.85"
          />
          <rect
            x="22"
            y="45"
            width="96"
            height="60"
            rx="4"
            fill="none"
            stroke="var(--color-bordeaux)"
            strokeWidth="2"
          />
          {/* Holzlatten */}
          <line x1="22" y1="68" x2="118" y2="68" stroke="white" strokeOpacity="0.18" />
          <line x1="22" y1="85" x2="118" y2="85" stroke="white" strokeOpacity="0.18" />
          {/* Deckel (leicht angehoben wenn ablauf nah) */}
          <g
            style={{
              transformOrigin: "70px 45px",
              transform:
                daysLeft !== null && daysLeft <= 0
                  ? "rotate(-18deg) translateY(-6px)"
                  : "rotate(0deg)",
              transition: "transform 1.2s ease",
            }}
          >
            <rect
              x="18"
              y="38"
              width="104"
              height="14"
              rx="3"
              fill="var(--color-bordeaux)"
            />
            <rect
              x="18"
              y="38"
              width="104"
              height="14"
              rx="3"
              fill="none"
              stroke="var(--color-bordeaux)"
              strokeWidth="2"
            />
          </g>
          {/* Datum-Etikett */}
          <rect
            x="48"
            y="74"
            width="44"
            height="22"
            rx="2"
            fill="var(--color-cream)"
            opacity="0.92"
          />
          <text
            x="70"
            y="89"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="700"
            fill="var(--color-bordeaux)"
            textAnchor="middle"
          >
            {daysLeft !== null ? `T-${daysLeft}` : "T-90"}
          </text>
        </svg>
        <p className="mt-1 text-[11px] italic text-graphite/65">
          {daysLeft === null
            ? "Setze ein Öffnungsdatum unten."
            : daysLeft === 0
              ? "Heute darfst du die Kiste öffnen ✦"
              : `Noch ${daysLeft} ${daysLeft === 1 ? "Tag" : "Tage"} bis zur Öffnung.`}
        </p>
      </div>

      {/* Felder */}
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-bordeaux">
          <Package className="mr-1.5 inline h-4 w-4" />
          Was habe ich in die Kiste gepackt?
        </span>
        <textarea
          value={inhalt}
          onChange={(e) => setExercise("kiste_inhalt", e.target.value)}
          placeholder="z.B. Armband · 3 Fotos · der Brief vom Herbst · ihr Pulli, der noch bei mir lag …"
          rows={4}
          className="w-full resize-none rounded-lg border-2 border-sage/30 bg-white/85 p-3 text-sm leading-relaxed outline-none transition focus:border-sage"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-bordeaux">
          Wo ist die Kiste jetzt?
        </span>
        <input
          type="text"
          value={ort}
          onChange={(e) => setExercise("kiste_ort", e.target.value)}
          placeholder="z.B. Abstellkammer · Keller · bei Jana"
          className="w-full rounded-lg border-2 border-sage/30 bg-white/85 p-3 text-sm outline-none transition focus:border-sage"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-bordeaux">
          <Calendar className="mr-1.5 inline h-4 w-4" />
          Wann darf ich sie öffnen? (Datum in ca. 90 Tagen)
        </span>
        <input
          type="date"
          value={datum}
          onChange={(e) => setExercise("kiste_datum", e.target.value)}
          className="w-full rounded-lg border-2 border-sage/30 bg-white/85 p-3 text-sm outline-none transition focus:border-sage"
        />
      </label>

      <p className="rounded-lg bg-mauve/10 p-3 text-xs italic leading-relaxed text-graphite/75">
        💡 Nicht vernichten — verwahren. Vernichten ist ein dramatischer Akt, der dein
        Nervensystem alarmiert. Verwahren ist medizinisch: Du sagst deinem Gehirn,
        dass die Erinnerung sicher abgelegt ist und nicht aktiv abgerufen werden muss.
      </p>
    </ExerciseFrame>
  );
}
