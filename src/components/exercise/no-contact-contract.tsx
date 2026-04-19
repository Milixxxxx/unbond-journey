import { useState } from "react";
import { CalendarDays, FileSignature, Heart } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

/**
 * Übung 4 · Mein No-Contact-Kontrakt mit 90-Tage-Countdown.
 * Nutzerin wählt Startdatum, listet geschlossene Kanäle, unterzeichnet symbolisch.
 *
 * Beim Unterzeichnen wird `nc_kontrakt_start` (ISO-Datum) im exerciseState
 * persistiert — der globale DetoxBadge im Top-Bar startet automatisch.
 *
 * Sobald unterzeichnet, zeigt die Karte einen großen Countdown-Ring mit
 * Tagen-bis-90 als motivierendes Vibe-Element.
 */
export function NoContactContract({
  slug,
  accent = "bordeaux" as ExerciseAccent,
}: {
  slug: string;
  accent?: ExerciseAccent;
}) {
  const { exerciseState, setExercise, setExerciseBulk, loaded } = useModuleProgress(slug);
  const [draft, setDraft] = useState({
    startDate: "",
    kanaele: "",
    motivation: "",
  });

  if (!loaded) return null;

  const signed: string | undefined = exerciseState.nc_kontrakt_start;
  const kanaele: string = exerciseState.nc_kontrakt_kanaele ?? "";
  const motivation: string = exerciseState.nc_kontrakt_motivation ?? "";

  // Wenn schon unterzeichnet → Countdown-Ansicht
  if (signed) {
    const start = new Date(signed);
    const day =
      Math.max(0, Math.floor((Date.now() - start.getTime()) / 86_400_000)) + 1;
    const cappedDay = Math.min(day, 90);
    const pct = (cappedDay / 90) * 100;
    const radius = 56;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - pct / 100);

    const reset = () => {
      setExercise("nc_kontrakt_start", "");
    };

    return (
      <ExerciseFrame
        title="Übung 4 · Mein 90-Tage-Detox-Kontrakt"
        subtitle="Unterzeichnet — du bist im Protokoll."
        meta={`📜 Unterzeichnet am ${start.toLocaleDateString("de-DE")} · ⏱ läuft`}
        accent={accent}
      >
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-bordeaux/10 via-mauve/8 to-sage/10 p-6">
          {/* Countdown-Ring */}
          <div className="relative">
            <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
              <circle
                cx="70"
                cy="70"
                r={radius}
                fill="none"
                stroke="var(--color-sage)"
                strokeOpacity="0.18"
                strokeWidth="10"
              />
              <circle
                cx="70"
                cy="70"
                r={radius}
                fill="none"
                stroke="var(--color-bordeaux)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                style={{ transition: "stroke-dashoffset 700ms ease-out" }}
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="font-display text-3xl font-extrabold text-bordeaux tabular-nums">
                  {cappedDay}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-graphite/65">
                  von 90 Tagen
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-display text-base font-bold text-bordeaux">
              {cappedDay >= 90
                ? "✦ Detox vollendet."
                : cappedDay >= 60
                  ? "Du bist tief drin im Heilungsprozess."
                  : cappedDay >= 30
                    ? "Dein Nervensystem beginnt zu resetten."
                    : cappedDay >= 7
                      ? "Die ersten 7 Tage sind die härtesten — du hast sie überstanden."
                      : "Tag für Tag. Du musst es nur heute schaffen."}
            </p>
            <p className="mt-1 text-xs italic text-graphite/70">
              {cappedDay >= 90
                ? "Wissenschaftlich belegt: Deine konditionierte Bahn ist messbar geschwächt."
                : `Noch ${90 - cappedDay} Tage bis dein dopaminerges System zurückgesetzt ist.`}
            </p>
          </div>

          {motivation && (
            <div className="w-full rounded-xl bg-white/80 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-mauve">
                Mein Versprechen an mich
              </p>
              <p className="mt-1 text-sm italic leading-relaxed text-graphite/85">
                „{motivation}"
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={reset}
            className="text-[11px] font-medium text-graphite/55 underline hover:text-bordeaux"
          >
            Vertrag zurücksetzen (neu starten)
          </button>
        </div>
      </ExerciseFrame>
    );
  }

  // Unterzeichnungs-Formular
  const today = new Date().toISOString().slice(0, 10);
  const canSign = !!draft.startDate;

  const sign = () => {
    if (!canSign) return;
    setExercise("nc_kontrakt_start", draft.startDate);
    setExercise("nc_kontrakt_kanaele", draft.kanaele);
    setExercise("nc_kontrakt_motivation", draft.motivation);
  };

  return (
    <ExerciseFrame
      title="Übung 4 · Mein No-Contact-Kontrakt"
      subtitle="Schreib dir selbst eine medizinische Verschreibung. 90 Tage, drei Schleusen, eine Frau: du."
      meta="📜 Selbstverpflichtung · ⏱ 15 Min · 💡 Implementation Intention (Gollwitzer)"
      accent={accent}
    >
      <div className="space-y-4">
        {/* Startdatum */}
        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-bordeaux">
            <CalendarDays className="h-4 w-4" />
            Mein 90-Tage-Detox startet am:
          </span>
          <input
            type="date"
            min={today}
            value={draft.startDate}
            onChange={(e) => setDraft({ ...draft, startDate: e.target.value })}
            className="w-full rounded-lg border-2 border-sage/30 bg-white/85 p-3 text-sm focus:border-bordeaux focus:outline-none"
          />
        </label>

        {/* Geschlossene Kanäle */}
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-bordeaux">
            Diese Kanäle habe ich aus Übung 1 geschlossen:
          </span>
          <textarea
            value={draft.kanaele}
            onChange={(e) => setDraft({ ...draft, kanaele: e.target.value })}
            placeholder="z.B. WhatsApp blockiert, Instagram entfolgt, Spotify-Playlists gelöscht, Pulli verschenkt…"
            rows={4}
            className="w-full resize-none rounded-lg border-2 border-sage/30 bg-white/85 p-3 text-sm leading-relaxed focus:border-bordeaux focus:outline-none"
          />
        </label>

        {/* Versprechen */}
        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-bordeaux">
            <Heart className="h-4 w-4" />
            Mein Versprechen an mich (1 Satz):
          </span>
          <textarea
            value={draft.motivation}
            onChange={(e) => setDraft({ ...draft, motivation: e.target.value })}
            placeholder="z.B. „Ich wähle mich. 90 Tage lang. Auch wenn es weh tut.“"
            rows={2}
            className="w-full resize-none rounded-lg border-2 border-sage/30 bg-white/85 p-3 text-sm italic leading-relaxed focus:border-bordeaux focus:outline-none"
          />
        </label>

        {/* Unterzeichnen */}
        <button
          type="button"
          onClick={sign}
          disabled={!canSign}
          className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition ${
            canSign
              ? "bg-bordeaux text-white shadow-soft hover:opacity-90"
              : "cursor-not-allowed bg-graphite/15 text-graphite/50"
          }`}
        >
          <FileSignature className="h-4 w-4" />
          {canSign ? "Ich unterzeichne · Detox starten" : "Bitte Startdatum wählen"}
        </button>

        <p className="text-center text-[11px] italic text-graphite/55">
          Sobald du unterzeichnest, erscheint oben rechts dein persönlicher
          90-Tage-Counter. Er begleitet dich durch jedes Kapitel.
        </p>
      </div>
    </ExerciseFrame>
  );
}
