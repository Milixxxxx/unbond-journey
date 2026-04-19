import { useState } from "react";
import { Loader2, Send, RotateCcw, Shield, AlertTriangle, Info } from "lucide-react";
import { ExerciseFrame } from "./exercise-frame";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * ÜBUNG 4 · Hoover-Mail Decoder
 * Phase 1: Klickbare Beispiel-Segmente einer typischen Hoover-Nachricht.
 * Phase 2: Eigene Nachricht eingeben → Edge Function (Lovable AI Gateway, GPT-5 Mini)
 * analysiert auf Manipulationstaktiken und gibt eine empathische Dekonstruktion zurück.
 */

const SEGMENTS = [
  {
    text: `Unser letztes Gespräch war sehr belastend für mich, weil du dich sofort in die Opferrolle begeben hast.`,
    tactic: `DARVO – Täter-Opfer-Umkehr`,
    truth: `Die Maske der Verletzten. Indem sie dich als „Opferrolle-Spielerin“ framed, wirst du zur Täterin ihres schlechten Gewissens – und sie selbst zur eigentlich Leidenden. Deine Reaktion auf echten Schmerz wird zum Vergehen erklärt.`,
  },
  {
    text: `Ich möchte dir ans Herz legen, die Dinge nicht immer so zu verdrehen.`,
    tactic: `Gaslighting – Realitätsverdrehung`,
    truth: `Die Maske der Vernunft. Sie kontrolliert das Narrativ, indem deine berechtigte Darstellung zur „Verdrehung“ erklärt wird. Dein Gedächtnis ist kein Fehler – es ist eine Bedrohung für ihre Version der Geschichte.`,
  },
  {
    text: `Ich war doch immer für dich da. Schade, dass du das alles im Nachhinein so siehst.`,
    tactic: `Pity Play & Gaslighting kombiniert`,
    truth: `Die Maske der treuen Begleiterin. Das „Immer-für-dich-da-sein“ war eine selektive Inszenierung. Jetzt wird deine klare Wahrnehmung als nachträgliche Verzerrung abgestempelt.`,
  },
  {
    text: `Es wäre so schön gewesen. Lass uns doch wenigstens im Frieden sein.`,
    tactic: `Friedens-Falle – Hoovering`,
    truth: `Die Maske der Reife. „Frieden“ bedeutet hier: schweige, verzichte auf Konsequenzen, erkenne meine Version an. Der Appell an „wie schön es hätte sein können“ zieht dich zurück in ein Narrativ der verpassten Gelegenheit – das dich wieder erreichbar macht.`,
  },
  {
    text: `Jede hätte ihren Anteil daran gehabt. Schuldzuweisungen führen nirgendwo hin.`,
    tactic: `Falsche Äquivalenz`,
    truth: `Die Maske der Fairness. Wenn ihr „beide schuld“ seid, gibt es kein Unrecht – nur unterschiedliche Perspektiven. Ihre Verhaltensweisen und deine Reaktionen darauf werden gleichgestellt. Das ist keine Fairness, das ist die Verwischung von Verantwortlichkeit.`,
  },
];

export function HooverDecoder({ slug }: { slug: string }) {
  const { exerciseState, setExercise } = useModuleProgress(slug);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [input, setInput] = useState<string>(exerciseState.hoover_input ?? "");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>(exerciseState.hoover_result ?? "");
  const [error, setError] = useState<string | null>(null);

  const handleInput = (val: string) => {
    setInput(val);
    setExercise("hoover_input", val);
  };

  const analyze = async () => {
    if (!input.trim()) {
      setError("Bitte gib einen Text ein, um die Analyse zu starten.");
      return;
    }
    setError(null);
    setLoading(true);
    setResult("");

    try {
      const { data, error: fnError } = await supabase.functions.invoke("hoover-decoder", {
        body: { message: input.trim() },
      });

      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);

      const analysis = data?.analysis ?? "";
      if (!analysis) throw new Error("Keine Antwort vom Decoder erhalten.");

      setResult(analysis);
      setExercise("hoover_result", analysis);
    } catch (e: any) {
      const msg = e?.message ?? "Unbekannter Fehler";
      if (msg.includes("429") || msg.toLowerCase().includes("rate")) {
        toast.error("Zu viele Anfragen. Bitte einen Moment warten.");
        setError("Zu viele Anfragen – bitte gleich erneut versuchen.");
      } else if (msg.includes("402") || msg.toLowerCase().includes("payment")) {
        toast.error("KI-Guthaben aufgebraucht. Bitte Workspace-Admin informieren.");
        setError("KI-Guthaben aufgebraucht. Die Funktion ist vorübergehend nicht verfügbar.");
      } else {
        toast.error("Decoder-Analyse fehlgeschlagen.");
        setError(`Analyse nicht möglich: ${msg}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setInput("");
    setResult("");
    setError(null);
    setExercise("hoover_input", "");
    setExercise("hoover_result", "");
  };

  return (
    <ExerciseFrame
      title="Hoover-Mail Decoder · Manipulationssprache entlarven"
      subtitle={`Wenn der „Wolf“ zurückschreibt, klingt es selten offensichtlich böse. Hoovering-Nachrichten sind meisterhaft konstruiert – sie klingen nach Frieden, nach Reue, nach Sorge. Lerne, die Maske zu durchschauen.`}
      meta="Phase 1: Beispiel-Analyse · Phase 2: KI-gestützte Dekonstruktion deiner eigenen Nachricht"
      accent="bordeaux"
    >
      {/* Hinweis */}
      <div className="rounded-xl border-l-4 border-mauve bg-mauve/10 p-3 text-xs leading-relaxed text-graphite">
        <p className="flex items-start gap-2">
          <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-mauve" />
          <span>
            <strong className="text-mauve">Hinweis:</strong> Dies ist eine Selbsthilfe-Übung im
            UNBOND-Programm – <strong>keine klinische Diagnose</strong>. Ziel ist, dir Werkzeuge zu
            geben, manipulative Sprachmuster zu erkennen und deiner Wahrnehmung zu vertrauen.
          </span>
        </p>
      </div>

      {/* Datenschutzhinweis */}
      <div className="rounded-xl border border-graphite/20 bg-graphite/5 p-3 text-xs leading-relaxed text-graphite">
        <p className="mb-1.5 flex items-center gap-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-graphite">
          <Shield className="h-3 w-3" />
          Datenschutzhinweis · KI-Analyse
        </p>
        <p className="mb-1.5">
          Wenn du den Decoder nutzt, wird dein eingegebener Text verschlüsselt (HTTPS) an die
          UNBOND-Backend-Funktion übermittelt und dort einmalig vom KI-Sprachmodell analysiert.
          <strong> Es findet keine dauerhafte Speicherung deiner Eingabe für Trainingszwecke statt.</strong>
        </p>
        <p className="mb-1.5">
          <strong>Empfehlung:</strong> Gib keine vollständigen Namen, Adressen oder eindeutig
          identifizierende Daten ein. Verwende Platzhalter wie „meine Ex" statt echter Namen.
        </p>
        <p>
          Deine Eingaben verlassen deinen Browser nur für die Dauer der Analyse. Reflexionen,
          Tagebuch und Checklisten bleiben ausschließlich in deinem UNBOND-Konto.
        </p>
      </div>

      {/* PHASE 1 · Klickbare Segmente */}
      <div className="rounded-xl border-2 border-bordeaux/25 bg-white/70 p-4">
        <p className="mb-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-bordeaux">
          Schritt 1 · Fallanalyse einer typischen Hoover-Nachricht
        </p>
        <p className="mb-3 text-xs text-graphite/80">
          Klicke auf die Passagen, um die Manipulationstaktik dahinter sichtbar zu machen. Fiktives,
          aber realitätsnahes Beispiel.
        </p>

        <div className="space-y-2">
          {SEGMENTS.map((seg, i) => {
            const active = activeIdx === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIdx(active ? null : i)}
                className={`flex w-full items-start gap-3 rounded-lg border-2 p-3 text-left text-sm leading-relaxed transition-all ${
                  active
                    ? "border-bordeaux bg-bordeaux/10 text-bordeaux"
                    : "border-bordeaux/20 bg-cream/55 text-graphite hover:border-bordeaux/60 hover:bg-bordeaux/5"
                }`}
              >
                <span
                  className={`mt-0.5 flex-shrink-0 rounded-full px-2 py-0.5 font-display text-[9px] font-bold uppercase tracking-wider ${
                    active ? "bg-bordeaux text-white" : "bg-bordeaux/15 text-bordeaux"
                  }`}
                >
                  {active ? "▼" : "Klick"}
                </span>
                <span className="italic">„{seg.text}"</span>
              </button>
            );
          })}
        </div>

        {activeIdx !== null && (
          <div className="relative mt-4 rounded-xl border-2 border-sage bg-sage/12 p-4 animate-fade-in">
            <span className="absolute -top-2.5 left-4 rounded-full bg-sage px-2.5 py-0.5 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white">
              Die klinische Wahrheit
            </span>
            <p className="mb-1.5 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-sage">
              Taktik: {SEGMENTS[activeIdx].tactic}
            </p>
            <p className="text-sm italic leading-relaxed text-graphite">
              {SEGMENTS[activeIdx].truth}
            </p>
          </div>
        )}
      </div>

      {/* Übergang */}
      <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-bordeaux to-mauve p-4 text-white">
        <span className="text-2xl">🔓</span>
        <div>
          <p className="font-display text-sm font-bold">Jetzt bist du an der Reihe.</p>
          <p className="text-xs opacity-90">
            Hast du eine Nachricht, die dich verunsichert hat? Lass den Decoder analysieren, welche
            Taktiken dahinter stecken.
          </p>
        </div>
      </div>

      {/* PHASE 2 · Eigener Decoder */}
      <div className="rounded-xl border-2 border-bordeaux/15 bg-white/70 p-4">
        <p className="mb-2 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-bordeaux">
          Schritt 2 · Dein persönlicher Realitäts-Decoder
        </p>

        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="Füge hier eine Passage ein, die dich verunsichert hat – eine Nachricht, die du immer wieder liest und nicht weißt, wie du sie einordnen sollst…"
            rows={5}
            className="w-full resize-y rounded-lg border-2 border-bordeaux/20 bg-cream/40 p-3 pr-14 text-sm leading-relaxed focus:border-bordeaux focus:outline-none"
            disabled={loading}
          />
          <button
            type="button"
            onClick={analyze}
            disabled={loading || !input.trim()}
            className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-bordeaux text-white shadow-soft transition hover:bg-mauve disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Analysieren"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>

        {loading && (
          <div className="mt-3 flex items-center justify-center gap-2 py-3 text-xs text-graphite/70">
            <Loader2 className="h-4 w-4 animate-spin text-bordeaux" />
            Der Decoder analysiert…
          </div>
        )}

        {error && (
          <div className="mt-3 flex items-start gap-2 rounded-lg border-l-4 border-terracotta bg-terracotta/10 p-3 text-xs text-graphite">
            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-terracotta" />
            <span>{error}</span>
          </div>
        )}

        {result && !loading && (
          <div className="mt-3 space-y-2">
            <div className="rounded-xl bg-[#1c2a22] p-5 text-cream">
              <div className="mb-3 flex items-center gap-2">
                <Shield className="h-4 w-4 text-sage" />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-sage">
                  UNBOND Dekonstruktion
                </span>
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-cream/90">{result}</p>
              <p className="mt-4 border-t border-white/10 pt-3 text-[10px] italic text-cream/45">
                „Worte sind Schatten. Deine Wahrnehmung ist das Licht." — UNBOND
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-lg border-2 border-bordeaux px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-bordeaux transition hover:bg-bordeaux hover:text-white"
            >
              <RotateCcw className="h-3 w-3" />
              Neue Analyse
            </button>
          </div>
        )}
      </div>

      {/* Taktik-Übersicht */}
      <div className="rounded-xl bg-cream/55 p-4">
        <p className="mb-3 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-graphite">
          Die 5 häufigsten Hoovering-Taktiken auf einen Blick
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TAKTIKEN.map((t) => (
            <div
              key={t.name}
              className="rounded-lg p-3"
              style={{ background: `${t.bg}` }}
            >
              <p className="mb-1 text-xs font-bold" style={{ color: t.color }}>
                {t.emoji} {t.name}
              </p>
              <p className="text-[11px] leading-snug text-graphite/85">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ExerciseFrame>
  );
}

const TAKTIKEN = [
  {
    name: "Gaslighting",
    emoji: "🎭",
    color: "var(--color-bordeaux)",
    bg: "rgba(107,62,68,0.10)",
    desc: "„Du verdrehst alles." „Du bist zu empfindlich." Deine Realität wird zur Erfindung erklärt.",
  },
  {
    name: "DARVO",
    emoji: "🔄",
    color: "var(--color-mauve)",
    bg: "rgba(155,127,164,0.12)",
    desc: "Täter*in wird Opfer. Deine Reaktion auf Schmerz wird als Angriff umgedeutet.",
  },
  {
    name: "Pity Play",
    emoji: "💧",
    color: "var(--color-terracotta)",
    bg: "rgba(196,131,110,0.12)",
    desc: "„Ich leide so sehr." Mitleid als Zugangscode zu deinen Grenzen.",
  },
  {
    name: "Friedens-Falle",
    emoji: "🕊",
    color: "var(--color-sage)",
    bg: "rgba(122,158,138,0.12)",
    desc: "„Lass uns im Frieden sein." Frieden als Tarnung für: schweige und vergib ohne Konsequenz.",
  },
  {
    name: "Falsche Äquivalenz",
    emoji: "⚖️",
    color: "var(--color-graphite)",
    bg: "rgba(74,78,82,0.08)",
    desc: "„Wir waren beide schuld." Gewalt und Reaktion darauf werden gleichgesetzt.",
  },
];
