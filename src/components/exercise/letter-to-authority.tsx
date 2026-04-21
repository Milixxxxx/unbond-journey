import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";
import { Mail, Printer, RotateCcw } from "lucide-react";

type State = {
  senderName: string;
  senderAddress: string;
  recipientName: string;
  recipientAddress: string;
  city: string;
  date: string;
  subject: string;
  reference: string;
  body: string;
};

const TEMPLATE_BODY = `Sehr geehrte Damen und Herren,

ich nehme Bezug auf das o. g. Verfahren und möchte zu meiner Person und zur Sache wie folgt Stellung nehmen.

Die in der Anzeige geäußerten Vorwürfe weise ich vollumfänglich zurück. Ich verfüge über eine lückenlose Dokumentation der relevanten Vorgänge, die ich Ihnen auf Anforderung über meine anwaltliche Vertretung zur Verfügung stelle.

Ich bitte um schriftliche Mitteilung des weiteren Verfahrensablaufs. Eine direkte Kontaktaufnahme durch die anzeigende Person lehne ich ab; sämtliche Kommunikation läuft über meine anwaltliche Vertretung:

[Name der Anwältin / Kanzlei]
[Adresse / Telefon / E-Mail]

Für Rückfragen stehe ich Ihnen schriftlich zur Verfügung.

Mit freundlichen Grüßen
`;

const EMPTY: State = {
  senderName: "",
  senderAddress: "",
  recipientName: "",
  recipientAddress: "",
  city: "",
  date: new Date().toISOString().slice(0, 10),
  subject: "",
  reference: "",
  body: TEMPLATE_BODY,
};

/**
 * LetterToAuthority · Übung 4 · Brief an Behörde im Fenstermuster
 *
 * Vorlage erfüllt Briefing-Punkt „Vorlagensammlung + Brief an Behörden".
 * Ausdruckbar (window.print), gespeichert in module_progress.
 */
export function LetterToAuthority({
  slug,
  storageKey,
}: {
  slug: string;
  storageKey: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const state: State = exerciseState[storageKey] ?? EMPTY;
  const update = (patch: Partial<State>) =>
    setExercise(storageKey, { ...state, ...patch });

  const reset = () => setExercise(storageKey, EMPTY);

  const formattedDate = (() => {
    if (!state.date) return "";
    try {
      return new Date(state.date).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch {
      return state.date;
    }
  })();

  return (
    <ExerciseFrame
      title="Übung 4 · Brief an Behörde (Vorlage)"
      subtitle="Sachlich, juristisch sauber, ohne Drama. Du kannst diesen Brief drucken und mit deiner Anwältin abstimmen."
      meta="📨 Vorlage · ⏱ 15 Min"
      accent="bordeaux"
    >
      <div className="rounded-lg bg-bordeaux/5 p-3 text-xs leading-relaxed text-graphite/85">
        <strong className="text-bordeaux">Wichtig:</strong> Diese Vorlage ersetzt
        keine Rechtsberatung. Lass den finalen Brief immer von deiner Anwältin
        prüfen, bevor du ihn versendest. Sie weiß, welche Formulierungen für dein
        Verfahren strategisch sinnvoll sind.
      </div>

      {/* Eingabefelder */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
            Absender (Name)
          </label>
          <input
            type="text"
            value={state.senderName}
            onChange={(e) => update({ senderName: e.target.value })}
            placeholder="Vor- und Nachname"
            className="mt-1 w-full rounded-md border border-bordeaux/20 bg-white/85 p-2 text-sm outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
          />
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
            Absender (Adresse)
          </label>
          <input
            type="text"
            value={state.senderAddress}
            onChange={(e) => update({ senderAddress: e.target.value })}
            placeholder="Straße, PLZ, Ort"
            className="mt-1 w-full rounded-md border border-bordeaux/20 bg-white/85 p-2 text-sm outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
          />
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
            Empfänger (Behörde)
          </label>
          <input
            type="text"
            value={state.recipientName}
            onChange={(e) => update({ recipientName: e.target.value })}
            placeholder="z. B. Jugendamt Musterstadt"
            className="mt-1 w-full rounded-md border border-bordeaux/20 bg-white/85 p-2 text-sm outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
          />
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
            Empfänger (Adresse)
          </label>
          <input
            type="text"
            value={state.recipientAddress}
            onChange={(e) => update({ recipientAddress: e.target.value })}
            placeholder="Straße, PLZ, Ort"
            className="mt-1 w-full rounded-md border border-bordeaux/20 bg-white/85 p-2 text-sm outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
          />
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
            Ort
          </label>
          <input
            type="text"
            value={state.city}
            onChange={(e) => update({ city: e.target.value })}
            placeholder="z. B. Berlin"
            className="mt-1 w-full rounded-md border border-bordeaux/20 bg-white/85 p-2 text-sm outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
          />
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
            Datum
          </label>
          <input
            type="date"
            value={state.date}
            onChange={(e) => update({ date: e.target.value })}
            className="mt-1 w-full rounded-md border border-bordeaux/20 bg-white/85 p-2 text-sm outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
            Betreff
          </label>
          <input
            type="text"
            value={state.subject}
            onChange={(e) => update({ subject: e.target.value })}
            placeholder="z. B. Stellungnahme zu Verfahren Nr. …"
            className="mt-1 w-full rounded-md border border-bordeaux/20 bg-white/85 p-2 text-sm outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
            Aktenzeichen / Verfahrensnummer (falls bekannt)
          </label>
          <input
            type="text"
            value={state.reference}
            onChange={(e) => update({ reference: e.target.value })}
            placeholder="z. B. AZ 123/2025"
            className="mt-1 w-full rounded-md border border-bordeaux/20 bg-white/85 p-2 text-sm outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
          />
        </div>
      </div>

      <div>
        <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
          Brieftext (Vorlage — passe ihn deiner Situation an)
        </label>
        <textarea
          value={state.body}
          onChange={(e) => update({ body: e.target.value })}
          rows={12}
          className="mt-1 w-full resize-y rounded-md border border-bordeaux/20 bg-white/85 p-3 font-mono text-sm leading-relaxed text-graphite outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
        />
      </div>

      {/* Vorschau im Fenstermuster (DIN-A4-Briefkopf) */}
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
          Vorschau (Fenstermuster)
        </p>
        <div
          id="letter-print-area"
          className="mx-auto max-w-[640px] rounded-md border border-graphite/15 bg-white p-8 shadow-soft print:border-0 print:shadow-none"
          style={{ minHeight: 520, fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {/* Absenderzeile (klein, oberhalb Empfänger-Fenster) */}
          <p className="text-[10px] text-graphite/70 underline decoration-graphite/30 underline-offset-2">
            {state.senderName || "Absender"}
            {state.senderAddress && ` · ${state.senderAddress}`}
          </p>
          {/* Empfänger-Fenster */}
          <div className="mt-4 min-h-[80px] text-sm leading-relaxed text-graphite">
            <div>{state.recipientName || "[Empfänger-Behörde]"}</div>
            <div className="whitespace-pre-line">{state.recipientAddress || "[Adresse]"}</div>
          </div>
          {/* Ort, Datum */}
          <p className="mt-8 text-right text-sm text-graphite">
            {(state.city || "[Ort]") + ", " + (formattedDate || "[Datum]")}
          </p>
          {/* Betreff */}
          <p className="mt-6 text-sm font-bold text-graphite">
            {state.subject || "[Betreff]"}
          </p>
          {state.reference && (
            <p className="mt-1 text-xs text-graphite/80">{state.reference}</p>
          )}
          {/* Body */}
          <div className="mt-4 whitespace-pre-line text-[13.5px] leading-7 text-graphite">
            {state.body}
          </div>
          {/* Unterschrift */}
          <p className="mt-10 text-sm text-graphite">
            {state.senderName || "[Name]"}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-bordeaux/5 px-3 py-2">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 rounded-md border border-bordeaux/30 bg-white px-3 py-1.5 text-xs font-semibold text-bordeaux transition hover:bg-bordeaux/5"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Vorlage zurücksetzen
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
        >
          <Printer className="h-3.5 w-3.5" />
          Drucken / als PDF speichern
        </button>
      </div>

      <p className="text-[11px] italic text-graphite/60">
        <Mail className="mr-1 inline h-3 w-3" />
        Tipp: Versende Briefe an Behörden immer per Einwurf-Einschreiben oder
        Übergabe-Einschreiben. So hast du einen Beleg über Datum und Zugang.
      </p>
    </ExerciseFrame>
  );
}
