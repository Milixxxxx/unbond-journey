import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { TOXI_QUESTIONS, classify } from "@/lib/toxicometer";
import { CrisisBanner } from "@/components/crisis-banner";
import { ChevronLeft, ChevronRight, Heart, HeartCrack } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/onboarding")({
  component: Onboarding,
  head: () => ({ meta: [{ title: "Wo stehst du? · UNBOND" }] }),
});

type Step = "routing" | "toxi" | "result";

function Onboarding() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("routing");
  const [routing, setRouting] = useState<"after" | "still_in" | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [qIdx, setQIdx] = useState(0);

  const max = TOXI_QUESTIONS.length * 5;
  const score = answers.reduce((a, b) => a + b, 0);

  const chooseRouting = async (r: "after" | "still_in") => {
    setRouting(r);
    if (user) {
      await supabase.from("profiles").update({ relationship_status: r }).eq("id", user.id);
    }
    setStep("toxi");
  };

  const answer = (n: number) => {
    const next = [...answers];
    next[qIdx] = n;
    setAnswers(next);
    if (qIdx < TOXI_QUESTIONS.length - 1) {
      setTimeout(() => setQIdx(qIdx + 1), 180);
    } else {
      finish(next);
    }
  };

  const finish = async (final: number[]) => {
    const total = final.reduce((a, b) => a + b, 0);
    if (user) {
      await supabase
        .from("profiles")
        .update({ toxicometer_score: total, toxicometer_completed_at: new Date().toISOString() })
        .eq("id", user.id);
    }
    setStep("result");
  };

  const goBack = () => {
    if (qIdx > 0) setQIdx(qIdx - 1);
  };

  return (
    <main className="min-h-screen px-4 py-8 pb-24">
      <div className="mx-auto max-w-xl space-y-6">
        <Link to="/dashboard" className="text-sm text-bordeaux hover:underline">
          ← Zum Dashboard
        </Link>

        {step === "routing" && (
          <section className="space-y-5 animate-fade-in">
            <header className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-mauve">Schritt 1</p>
              <h1 className="mt-2 font-display text-3xl font-extrabold text-bordeaux">
                Wo stehst du gerade?
              </h1>
              <p className="mt-2 text-sm text-graphite/75">
                Damit wir dir den passenden Einstieg empfehlen können.
              </p>
            </header>

            <button
              onClick={() => chooseRouting("after")}
              className="glass-card flex w-full items-center gap-4 p-5 text-left transition hover:shadow-soft"
            >
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-sage/20 text-2xl">
                🌊
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-bordeaux">
                  Die Beziehung ist beendet
                </h3>
                <p className="text-xs text-graphite/70">
                  Ich habe mich getrennt oder wurde verlassen – und komme nicht los.
                </p>
              </div>
            </button>

            <button
              onClick={() => chooseRouting("still_in")}
              className="glass-card flex w-full items-center gap-4 p-5 text-left transition hover:shadow-soft"
            >
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-warning/30 text-2xl">
                💔
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-bordeaux">
                  Ich bin noch in der Beziehung
                </h3>
                <p className="text-xs text-graphite/70">
                  Ich bin unglücklich oder verwirrt – und weiß nicht, was ich tun soll.
                </p>
              </div>
            </button>

            <CrisisBanner />
          </section>
        )}

        {step === "toxi" && (
          <section className="space-y-5 animate-fade-in">
            <header>
              <p className="text-xs font-semibold uppercase tracking-widest text-mauve">
                Toxicometer · Frage {qIdx + 1} von {TOXI_QUESTIONS.length}
              </p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-sage/15">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--color-sage)] to-[var(--color-mauve)] transition-all duration-500"
                  style={{ width: `${((qIdx + 1) / TOXI_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </header>

            <div className="glass-card-strong p-6">
              <p className="font-display text-lg font-semibold leading-snug text-bordeaux">
                {TOXI_QUESTIONS[qIdx].text}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[11px] uppercase tracking-wider text-graphite/55">
                <span>Trifft nicht zu</span>
                <span>Trifft voll zu</span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {[0, 1, 2, 3, 4, 5].map((n) => {
                  const selected = answers[qIdx] === n;
                  return (
                    <button
                      key={n}
                      onClick={() => answer(n)}
                      className={`h-12 rounded-lg border-2 font-display text-base font-bold transition ${
                        selected
                          ? "border-bordeaux bg-bordeaux text-white shadow-soft"
                          : "border-sage/40 bg-white/60 text-bordeaux hover:border-sage"
                      }`}
                    >
                      {n}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <button
                onClick={goBack}
                disabled={qIdx === 0}
                className="inline-flex items-center gap-1 text-bordeaux disabled:opacity-30"
              >
                <ChevronLeft className="h-3.5 w-3.5" /> Zurück
              </button>
              {answers[qIdx] !== undefined && qIdx < TOXI_QUESTIONS.length - 1 && (
                <button
                  onClick={() => setQIdx(qIdx + 1)}
                  className="inline-flex items-center gap-1 text-bordeaux"
                >
                  Weiter <ChevronRight className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </section>
        )}

        {step === "result" && (
          <section className="space-y-5 animate-fade-in">
            <header className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-mauve">
                Dein Ergebnis
              </p>
              <h1 className="mt-2 font-display text-3xl font-extrabold text-bordeaux">
                Auswertung
              </h1>
            </header>

            <ResultCard score={score} max={max} />

            <button
              onClick={() => navigate({ to: "/modul/$slug", params: { slug: "kapitel-0" } })}
              className="w-full rounded-full bg-bordeaux py-3.5 text-sm font-semibold text-white shadow-elegant hover:opacity-90"
            >
              Mit Kapitel 0 beginnen →
            </button>
            <Link
              to="/dashboard"
              className="block text-center text-xs text-bordeaux underline"
            >
              Erst zum Dashboard
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}

function ResultCard({ score, max }: { score: number; max: number }) {
  const cls = classify(score, max);
  const pct = (score / max) * 100;
  return (
    <div className="glass-card-strong p-6">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-graphite/60">
          Dein Gesamtwert
        </p>
        <p className="mt-1 font-display text-5xl font-extrabold text-bordeaux">{score}</p>
        <p className="text-xs text-graphite/55">von {max} möglichen Punkten</p>
      </div>

      <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-sage/15">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sage via-warning to-bordeaux transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-1 flex justify-between text-[10px] uppercase tracking-wider text-graphite/55">
        <span>Gering</span>
        <span>Mittel</span>
        <span>Hoch</span>
        <span>Akut</span>
      </div>

      <div className="mt-5 rounded-lg bg-mauve/10 p-4 text-sm">
        <p className="mb-1 font-display font-bold text-bordeaux">{cls.label}</p>
        <p className="text-graphite/85">{cls.recommendation}</p>
      </div>
    </div>
  );
}
