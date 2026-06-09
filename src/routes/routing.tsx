import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  LifeBuoy,
  Compass,
} from "lucide-react";
import {
  CONCEPTS,
  evaluate,
  readProfile,
  writeProfile,
  clearProfile,
  recommendedChapters,
  getConcept,
  type AnswerMap,
  type ConceptId,
  type Ampel,
  type SelbstcheckProfile,
} from "@/lib/selbstcheck";
import { writePathMode } from "@/lib/path-mode";

export const Route = createFileRoute("/routing")({
  component: Routing,
  head: () => ({
    meta: [
      { title: "Selbstcheck · Wo stehst du gerade? · UNBOND" },
      {
        name: "description",
        content:
          "5-Konzept-Selbstcheck: Nervensystem, Polyvagal, Altruistischer Narzissmus, kPTBS und Liebe vs. Sucht — dein persönlicher Einstieg in UNBOND.",
      },
      { property: "og:title", content: "Selbstcheck · UNBOND" },
      {
        property: "og:description",
        content:
          "Diagnostischer Einstieg: fünf Konzepte, eine Ampel, drei priorisierte Kapitel.",
      },
    ],
  }),
});

const LIKERT: { value: number; label: string }[] = [
  { value: 1, label: "trifft nicht zu" },
  { value: 2, label: "eher nicht" },
  { value: 3, label: "eher schon" },
  { value: 4, label: "trifft voll zu" },
];

function ampelStyle(a: Ampel) {
  if (a === "rot")
    return {
      bg: "bg-[var(--color-sos)]/12",
      border: "border-[var(--color-sos)]",
      text: "text-[var(--color-sos)]",
      icon: AlertOctagon,
      label: "deutlich betroffen",
    };
  if (a === "gelb")
    return {
      bg: "bg-terracotta/12",
      border: "border-terracotta",
      text: "text-terracotta",
      icon: AlertTriangle,
      label: "spürbar",
    };
  return {
    bg: "bg-sage/12",
    border: "border-sage",
    text: "text-sage",
    icon: CheckCircle2,
    label: "stabil",
  };
}

function Routing() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [profile, setProfile] = useState<SelbstcheckProfile | null>(null);
  const [step, setStep] = useState(0); // 0..CONCEPTS.length-1 = Konzepte, =CONCEPTS.length = Ergebnis
  const [mode, setMode] = useState<"intro" | "questions" | "result">("intro");

  useEffect(() => {
    const p = readProfile();
    if (p) {
      setProfile(p);
      setAnswers(p.answers);
      setMode("result");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step, mode]);

  const current = CONCEPTS[step];
  const totalSteps = CONCEPTS.length;
  const allAnswered = useMemo(
    () =>
      CONCEPTS.every(
        (c) => (answers[c.id]?.length ?? 0) === c.questions.length &&
          (answers[c.id] ?? []).every((v) => v >= 1 && v <= 4),
      ),
    [answers],
  );

  const setAnswer = (cid: ConceptId, qIdx: number, value: number) => {
    setAnswers((prev) => {
      const arr = [...(prev[cid] ?? Array(getConcept(cid).questions.length).fill(0))];
      arr[qIdx] = value;
      return { ...prev, [cid]: arr };
    });
  };

  const currentComplete = current
    ? (answers[current.id]?.length ?? 0) === current.questions.length &&
      (answers[current.id] ?? []).every((v) => v >= 1 && v <= 4)
    : false;

  const currentOpenCount = current
    ? current.questions.length -
      (answers[current.id] ?? []).filter((v) => v >= 1 && v <= 4).length
    : 0;

  const missingConcepts = CONCEPTS.filter(
    (c) =>
      (answers[c.id]?.length ?? 0) !== c.questions.length ||
      !(answers[c.id] ?? []).every((v) => v >= 1 && v <= 4),
  );

  const finish = () => {
    const p = evaluate(answers);
    writeProfile(p);
    writePathMode(p.recommendedPath);
    setProfile(p);
    setMode("result");
  };

  const restart = () => {
    clearProfile();
    setAnswers({});
    setProfile(null);
    setStep(0);
    setMode("questions");
  };

  return (
    <main className="min-h-screen px-4 py-10 pb-24">
      <article className="mx-auto max-w-3xl space-y-7">
        <Link
          to="/einleitung"
          className="inline-flex items-center gap-1 text-sm text-bordeaux hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Einleitung
        </Link>

        <header className="text-center animate-fade-in">
          <p className="inline-block rounded-full bg-gradient-to-r from-bordeaux to-sage px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
            Dein Einstieg
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-bordeaux">
            5-Konzept-Selbstcheck
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-graphite/75">
            Fünf Konzepte aus der Trauma-Bond-Forschung. Pro Konzept drei
            kurze Fragen. Am Ende: eine Ampel pro Bereich, drei priorisierte
            Startkapitel und dein automatisch gesetzter Pfad-Modus. Du
            kannst den Check jederzeit wiederholen.
          </p>
        </header>

        {mode === "intro" && (
          <section className="space-y-4 animate-fade-in">
            <div className="science-box">
              <h2 className="font-display text-base font-bold text-bordeaux">
                Was bringt dir der Check?
              </h2>
              <ul className="mt-2 space-y-1.5 text-[13.5px] leading-relaxed text-graphite/85">
                <li>
                  <strong>Ampel pro Konzept</strong> — grün = stabil, gelb
                  = spürbar, rot = deutlich betroffen.
                </li>
                <li>
                  <strong>Drei Startkapitel</strong>, die zu deinem Profil
                  passen — statt linear von vorn anzufangen.
                </li>
                <li>
                  <strong>Auto-Pfadmodus</strong>: rotes Nervensystem
                  aktiviert den akut-Pfad (SOS zuerst), sonst Klarheits-Pfad.
                </li>
                <li>
                  <strong>Wiederholbar als Fortschrittsmessung</strong> —
                  dein Profil wird lokal gespeichert.
                </li>
              </ul>
            </div>

            <div className="grid gap-2 sm:grid-cols-5">
              {CONCEPTS.map((c) => (
                <div
                  key={c.id}
                  className="rounded-xl border border-bordeaux/10 bg-white/70 p-3 text-center"
                >
                  <p className="font-display text-[12.5px] font-bold text-bordeaux leading-tight">
                    {c.label}
                  </p>
                  <p className="mt-1 text-[10.5px] text-graphite/70">{c.short}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setMode("questions");
                  setStep(0);
                }}
                className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
              >
                Selbstcheck starten <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <Link
                to="/modul/$slug"
                params={{ slug: "sos-soforthilfe" }}
                onClick={() => writePathMode("akut")}
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-sos)]/40 bg-white/70 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-sos)] transition hover:bg-white"
              >
                <LifeBuoy className="h-3.5 w-3.5" /> Ich bin in akuter Not — direkt zu SOS
              </Link>
            </div>
            <p className="text-[11px] text-graphite/60">
              Der Check dauert ca. 2 Minuten. In akuter Krise: überspringe
              ihn und geh direkt ins SOS-Modul.
            </p>
          </section>
        )}

        {mode === "questions" && current && (
          <section className="space-y-5 animate-fade-in">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-graphite/60">
              <span>
                Konzept {step + 1} / {totalSteps}
              </span>
              <span>{current.short}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-bordeaux/10">
              <div
                className="h-full bg-gradient-to-r from-bordeaux to-sage transition-all"
                style={{ width: `${((step + (currentComplete ? 1 : 0)) / totalSteps) * 100}%` }}
              />
            </div>

            <div
              key={current.id}
              className="rounded-2xl border border-bordeaux/10 p-5 shadow-sm animate-fade-in transition-colors"
              style={{
                backgroundColor: [
                  "rgba(255,255,255,0.85)",
                  "rgba(245,235,224,0.75)",
                  "rgba(232,221,235,0.55)",
                  "rgba(220,232,225,0.55)",
                  "rgba(244,228,215,0.7)",
                ][step % 5],
              }}
            >

              <h2 className="font-display text-xl font-extrabold text-bordeaux">
                {current.label}
              </h2>
              <p className="mt-1 text-sm text-graphite/75">{current.desc}</p>

              <div className="mt-5 space-y-5">
                {current.questions.map((q, qIdx) => {
                  const val = answers[current.id]?.[qIdx] ?? 0;
                  return (
                    <div key={qIdx}>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[14px] leading-relaxed text-graphite/90">
                          {qIdx + 1}. {q}
                        </p>
                        <span
                          className={`mt-0.5 inline-flex flex-shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                            val >= 1
                              ? "bg-sage/15 text-sage"
                              : "bg-graphite/8 text-graphite/55"
                          }`}
                        >
                          <span
                            className={`inline-block h-1.5 w-1.5 rounded-full ${
                              val >= 1
                                ? "bg-sage"
                                : "border border-dashed border-graphite/55"
                            }`}
                          />
                          {val >= 1 ? "beantwortet" : "noch offen"}
                        </span>
                      </div>
                      <div className="mt-2 grid grid-cols-4 gap-1.5">
                        {LIKERT.map((opt) => {
                          const on = val === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setAnswer(current.id, qIdx, opt.value)}
                              aria-pressed={on}
                              className={`rounded-lg border-2 px-2 py-2 text-[11px] font-semibold transition active:scale-95 ${
                                on
                                  ? "border-bordeaux bg-bordeaux text-white"
                                  : "border-bordeaux/15 bg-white/60 text-graphite/75 hover:border-bordeaux/40"
                              }`}
                            >
                              <span className="block text-base font-extrabold">{opt.value}</span>
                              <span className="block text-[10px] font-normal opacity-90">
                                {opt.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 rounded-md border border-bordeaux/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bordeaux transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Zurück
                </button>
                {step < totalSteps - 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!currentComplete}
                    className={`inline-flex items-center gap-1.5 rounded-md px-5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                      currentComplete
                        ? "bg-bordeaux text-white shadow-elegant hover:opacity-90"
                        : "cursor-not-allowed border border-graphite/20 bg-graphite/10 text-graphite/55"
                    }`}
                  >
                    Weiter <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={finish}
                    disabled={!allAnswered}
                    className={`inline-flex items-center gap-1.5 rounded-md px-5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                      allAnswered
                        ? "bg-sage text-white shadow-elegant hover:opacity-90"
                        : "cursor-not-allowed border border-graphite/20 bg-graphite/10 text-graphite/55"
                    }`}
                  >
                    Auswerten <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              {step < totalSteps - 1 && !currentComplete && (
                <p className="text-right text-[11px] text-bordeaux/75">
                  Beantworte alle {current.questions.length} Fragen, um weiterzugehen — noch {currentOpenCount} offen.
                </p>
              )}
              {step === totalSteps - 1 && !allAnswered && (
                <p className="text-right text-[11px] text-bordeaux/75">
                  Es fehlen noch Antworten in: {missingConcepts.map((c) => c.short).join(", ")}.
                </p>
              )}
            </div>
          </section>
        )}

        {mode === "result" && profile && (
          <section className="space-y-5 animate-fade-in">
            <div className="science-box">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-lg font-extrabold text-bordeaux">
                  Dein Profil
                </h2>
                <span className="text-[10.5px] uppercase tracking-wider text-graphite/55">
                  Stand: {new Date(profile.updatedAt).toLocaleDateString("de-DE")}
                </span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-5">
                {profile.results.map((r) => {
                  const c = getConcept(r.id);
                  const s = ampelStyle(r.ampel);
                  const Icon = s.icon;
                  return (
                    <div
                      key={r.id}
                      className={`rounded-xl border-2 ${s.border} ${s.bg} p-3 text-center`}
                    >
                      <Icon className={`mx-auto h-5 w-5 ${s.text}`} />
                      <p className="mt-1 font-display text-[12px] font-bold leading-tight text-bordeaux">
                        {c.label}
                      </p>
                      <p className={`mt-1 text-[10.5px] font-semibold uppercase tracking-wider ${s.text}`}>
                        {s.label}
                      </p>
                      <p className="text-[10px] text-graphite/60">Score {r.score}/12</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl border border-bordeaux/10 bg-cream/50 p-3 text-[13px]">
                <div className="flex items-center gap-2">
                  {profile.recommendedPath === "akut" ? (
                    <LifeBuoy className="h-4 w-4 text-[var(--color-sos)]" />
                  ) : (
                    <Compass className="h-4 w-4 text-sage" />
                  )}
                  <strong className="text-bordeaux">
                    Pfad-Modus aktiviert:{" "}
                    {profile.recommendedPath === "akut"
                      ? "Akut · Erst stabilisieren"
                      : "Klarheit · Verstehen & aufarbeiten"}
                  </strong>
                </div>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-graphite/80">
                  {profile.recommendedPath === "akut"
                    ? "Dein Nervensystem zeigt deutliche Alarm-Werte. Theorie greift nicht im Sturm — beginne mit dem SOS-Modul. Sobald sich dein Körper beruhigt, führt dich der Pfad weiter."
                    : "Du bist nicht in akuter Panik. Du kannst die Dynamik in Ruhe durchschauen. SOS bleibt jederzeit über den Herz-Button rechts unten erreichbar."}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-base font-bold text-bordeaux">
                Deine drei priorisierten Startkapitel
              </h3>
              <p className="mt-1 text-[12.5px] text-graphite/70">
                Basierend auf deinen höchsten Werten — nicht in Buchreihenfolge, sondern nach Bedarf.
              </p>
              <div className="mt-3 grid gap-2">
                {recommendedChapters(profile).map((rec, i) => {
                  const s = ampelStyle(rec.ampel);
                  return (
                    <button
                      key={rec.slug}
                      type="button"
                      onClick={() =>
                        navigate({ to: "/modul/$slug", params: { slug: rec.slug } })
                      }
                      className="group flex items-center justify-between gap-3 rounded-xl border border-bordeaux/15 bg-white/80 p-4 text-left transition hover:-translate-y-[1px] hover:bg-white hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-bordeaux/10 font-display text-sm font-extrabold text-bordeaux">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-display text-sm font-bold text-bordeaux">
                            {rec.label}
                          </p>
                          <p className={`text-[11px] font-semibold uppercase tracking-wider ${s.text}`}>
                            wegen: {rec.reason}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-bordeaux/60 transition group-hover:translate-x-0.5" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
              >
                Zum Dashboard <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <button
                type="button"
                onClick={restart}
                className="inline-flex items-center gap-1.5 rounded-md border border-bordeaux/20 bg-white/70 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-bordeaux transition hover:bg-white"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Check wiederholen
              </button>
            </div>
          </section>
        )}

        <div className="rounded-xl border border-bordeaux/10 bg-cream/40 p-4 text-[12px] leading-relaxed text-graphite/75">
          <p>
            <strong>In akuter Lebensgefahr:</strong> Hilfetelefon Gewalt gegen
            Frauen <strong>0800 116 016</strong> (kostenlos, 24/7) ·
            Telefonseelsorge <strong>0800 111 0 111</strong> · Notruf{" "}
            <strong>112</strong>.
          </p>
        </div>
      </article>
    </main>
  );
}
