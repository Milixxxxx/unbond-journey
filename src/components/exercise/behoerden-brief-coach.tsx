import { useState, useRef, useEffect } from "react";
import { Loader2, Send, RotateCcw, Shield, AlertTriangle, MessageCircle, Info } from "lucide-react";
import { ExerciseFrame } from "./exercise-frame";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type ChatMsg = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "Ich muss eine Stellungnahme ans Jugendamt schreiben — kannst du mir helfen, sie sachlich zu formulieren?",
  "Hier ist mein erster Entwurf — kannst du mir die emotionalen Stellen entschärfen?",
  "Wie formuliere ich neutral, dass sie immer wieder über Dritte Druck auf mich ausübt?",
];

const STORAGE_KEY = "bd-coach-history";

/**
 * BehoerdenBriefCoach · Übung Bonus D
 * Multi-turn Chat mit dem UNBOND Brief-Coach (warm + juristisch präzise).
 * Hilft dabei, behördentaugliche Briefe zu formulieren.
 */
export function BehoerdenBriefCoach({ slug }: { slug: string }) {
  const { exerciseState, setExercise } = useModuleProgress(slug);
  const [messages, setMessages] = useState<ChatMsg[]>(
    Array.isArray(exerciseState[STORAGE_KEY]) ? exerciseState[STORAGE_KEY] : [],
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const persist = (next: ChatMsg[]) => {
    setMessages(next);
    setExercise(STORAGE_KEY, next);
  };

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setError(null);

    const next: ChatMsg[] = [...messages, { role: "user", content: trimmed }];
    persist(next);
    setInput("");
    setLoading(true);

    try {
      const { data, error: fnError } = await supabase.functions.invoke(
        "behoerden-brief-coach",
        { body: { messages: next } },
      );

      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);
      const reply = data?.reply ?? "";
      if (!reply) throw new Error("Leere Antwort vom Coach.");

      persist([...next, { role: "assistant", content: reply }]);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      if (msg.includes("429") || msg.toLowerCase().includes("rate")) {
        toast.error("Zu viele Anfragen. Bitte einen Moment warten.");
        setError("Zu viele Anfragen — bitte gleich erneut versuchen.");
      } else if (msg.includes("402") || msg.toLowerCase().includes("payment")) {
        toast.error("KI-Guthaben aufgebraucht.");
        setError("KI-Guthaben aufgebraucht. Funktion vorübergehend nicht verfügbar.");
      } else {
        toast.error("Coach-Antwort fehlgeschlagen.");
        setError(`Antwort nicht möglich: ${msg}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    persist([]);
    setError(null);
  };

  return (
    <ExerciseFrame
      title="Übung 5 · Brief-Coach (KI-Assistenz)"
      subtitle="Frag den Coach um Hilfe beim Formulieren — er übersetzt Wut, Ohnmacht und Selbstzweifel in behördentaugliche Sprache. Warm, sachlich, ohne Drama."
      meta="🤖 KI-Assistent · ⏱ frei nutzbar"
      accent="bordeaux"
    >
      {/* Datenschutzhinweis */}
      <div className="rounded-xl border border-graphite/20 bg-graphite/5 p-3 text-xs leading-relaxed text-graphite">
        <p className="mb-1.5 flex items-center gap-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-graphite">
          <Shield className="h-3 w-3" />
          Datenschutz · Kein Anwalts-Ersatz
        </p>
        <p>
          Deine Nachrichten werden verschlüsselt an die UNBOND-Backend-Funktion übermittelt
          und einmalig analysiert — <strong>nicht für Trainingszwecke gespeichert</strong>.
          Verwende Platzhalter („meine Ex", „die Stadt") statt echter Namen. Der Coach ersetzt
          keine Rechtsberatung — final immer mit deiner Anwältin abstimmen.
        </p>
      </div>

      {/* Chat-Verlauf */}
      <div
        ref={scrollRef}
        className="max-h-[420px] min-h-[180px] overflow-y-auto rounded-xl border-2 border-bordeaux/15 bg-cream/40 p-3"
      >
        {messages.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
            <MessageCircle className="h-6 w-6 text-bordeaux/50" />
            <p className="text-xs text-graphite/70">
              Stell dem Coach deine erste Frage — oder nutze einen Starter unten.
            </p>
          </div>
        )}

        <div className="space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-bordeaux text-white"
                    : "bg-white text-graphite shadow-soft"
                }`}
              >
                {m.role === "assistant" && (
                  <p className="mb-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-sage">
                    Brief-Coach
                  </p>
                )}
                <p className="whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-white px-3.5 py-2.5 shadow-soft">
                <div className="flex items-center gap-2 text-xs text-graphite/70">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-bordeaux" />
                  Coach denkt nach…
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Starter-Vorschläge nur bei leerem Chat */}
      {messages.length === 0 && (
        <div className="space-y-1.5">
          <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-graphite/70">
            <Info className="h-3 w-3" />
            Starter (klicken zum Senden)
          </p>
          <div className="flex flex-wrap gap-1.5">
            {STARTERS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                disabled={loading}
                className="rounded-full border border-bordeaux/30 bg-white/80 px-3 py-1 text-[11px] text-bordeaux transition hover:bg-bordeaux hover:text-white disabled:opacity-50"
              >
                {s.length > 60 ? s.slice(0, 57) + "…" : s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Eingabe */}
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              send(input);
            }
          }}
          placeholder="Schreibe deine Frage oder füge einen Brief-Entwurf ein… (Cmd/Ctrl+Enter zum Senden)"
          rows={3}
          className="w-full resize-y rounded-lg border-2 border-bordeaux/20 bg-cream/40 p-3 pr-14 text-sm leading-relaxed focus:border-bordeaux focus:outline-none"
          disabled={loading}
        />
        <button
          type="button"
          onClick={() => send(input)}
          disabled={loading || !input.trim()}
          className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-bordeaux text-white shadow-soft transition hover:bg-mauve disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Senden"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-lg border-l-4 border-terracotta bg-terracotta/10 p-3 text-xs text-graphite">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-terracotta" />
          <span>{error}</span>
        </div>
      )}

      {messages.length > 0 && (
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 self-start rounded-lg border-2 border-bordeaux px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-bordeaux transition hover:bg-bordeaux hover:text-white"
        >
          <RotateCcw className="h-3 w-3" />
          Neuer Chat
        </button>
      )}
    </ExerciseFrame>
  );
}
