import { useState } from "react";
import { Feather, Printer, Sparkles } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";

/**
 * KintsugiManifest · Finale Selbstverpflichtung als gerendertes Manifest.
 *
 * Drei Felder werden zu einem typografisch gesetzten "Manifest" verwoben,
 * das die Nutzerin ausdrucken oder als Screenshot speichern kann.
 * Persistiert in exerciseState["manifest_*"].
 */
type FieldKey = "manifest_ich_bin" | "manifest_ich_lasse_los" | "manifest_ich_waehle";

const FIELDS: { key: FieldKey; label: string; placeholder: string; prefix: string }[] = [
  {
    key: "manifest_ich_bin",
    label: "1 · Ich bin …",
    placeholder: 'z.B. „eine Frau, die durch Gold zusammengehalten wird, nicht durch Angst."',
    prefix: "Ich bin",
  },
  {
    key: "manifest_ich_lasse_los",
    label: "2 · Ich lasse los …",
    placeholder: 'z.B. „die Idee, dass ich erst geheilt sein muss, um geliebt zu werden."',
    prefix: "Ich lasse los",
  },
  {
    key: "manifest_ich_waehle",
    label: "3 · Ich wähle …",
    placeholder: 'z.B. „Menschen, neben denen mein Nervensystem ruhig wird."',
    prefix: "Ich wähle",
  },
];

export function KintsugiManifest({ slug }: { slug: string }) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  const [preview, setPreview] = useState(false);
  if (!loaded) return null;

  const get = (k: FieldKey) => (exerciseState[k] as string) ?? "";
  const set = (k: FieldKey, v: string) => setExercise(k, v);

  const allFilled = FIELDS.every((f) => get(f.key).trim().length > 0);

  return (
    <ExerciseFrame
      title="Übung 4 · Dein Kintsugi-Manifest"
      subtitle="Drei Sätze, mit denen du deine neue Wahrheit besiegelst. Schreib sie in deinen eigenen Worten — das Manifest entsteht beim Tippen. Wenn alle drei Sätze stehen, kannst du es ausdrucken oder einen Screenshot machen."
      meta="✦ Selbstverpflichtung · ~10 Min · Druckbar"
      accent="bordeaux"
    >
      <div className="space-y-3">
        {FIELDS.map((f) => (
          <label key={f.key} className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux/85">
              {f.label}
            </span>
            <textarea
              value={get(f.key)}
              onChange={(e) => set(f.key, e.target.value)}
              placeholder={f.placeholder}
              rows={2}
              className="mt-1.5 w-full rounded-lg border border-mauve/25 bg-white px-3 py-2 text-sm text-graphite placeholder:text-graphite/40 focus:border-bordeaux focus:outline-none"
            />
          </label>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] text-graphite/60">
          {allFilled
            ? "Alle drei Sätze stehen — dein Manifest ist bereit."
            : "Schreibe alle drei Sätze, um dein Manifest zu sehen."}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={!allFilled}
            onClick={() => setPreview((p) => !p)}
            className="inline-flex items-center gap-1.5 rounded-full bg-bordeaux px-3 py-1.5 text-xs font-semibold text-white shadow-soft transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Sparkles className="h-3 w-3" />
            {preview ? "Bearbeiten" : "Manifest ansehen"}
          </button>
          {preview && allFilled && (
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-full border border-bordeaux/30 bg-white/80 px-3 py-1.5 text-xs font-semibold text-bordeaux hover:bg-bordeaux/5"
            >
              <Printer className="h-3 w-3" /> Drucken
            </button>
          )}
        </div>
      </div>

      {preview && allFilled && (
        <div
          className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-cream to-amber-50 p-6 shadow-elegant animate-fade-in print:shadow-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(200,149,57,0.18), transparent 40%), radial-gradient(circle at 88% 82%, rgba(200,149,57,0.16), transparent 45%)",
          }}
        >
          <div className="flex items-center justify-center gap-2 text-bordeaux">
            <Feather className="h-4 w-4" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em]">
              Mein Kintsugi-Manifest
            </p>
            <Feather className="h-4 w-4 -scale-x-100" />
          </div>

          <div className="mt-5 space-y-4 text-center">
            {FIELDS.map((f) => (
              <p
                key={f.key}
                className="font-display text-base leading-relaxed text-bordeaux sm:text-lg"
              >
                <span className="text-amber-700/90">{f.prefix}</span>{" "}
                <span className="italic">{get(f.key).replace(/^["„'']?(.+?)["""'']?$/, "$1")}</span>
                <span className="text-amber-700/90">.</span>
              </p>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px flex-1 max-w-[60px] bg-amber-700/40" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-700/80">
              ✦ {new Date().toLocaleDateString("de-DE")}
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-amber-700/40" />
          </div>

          <p className="mt-3 text-center text-[10px] uppercase tracking-[0.22em] text-bordeaux/60">
            UNBOND · Breaking Chains
          </p>
        </div>
      )}
    </ExerciseFrame>
  );
}
