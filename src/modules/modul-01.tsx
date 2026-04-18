import { useEffect, useRef, useState } from "react";
import { CollapsibleBox } from "@/components/collapsible-box";
import { GlossarTerm } from "@/components/glossar-term";
import { ZoomableImage } from "@/components/zoomable-image";
import { ChecklistGoals } from "@/components/checklist-goals";
import { ReflectionField, ReflectionInput } from "@/components/exercise-fields";
import { useModuleProgress } from "@/hooks/use-module-progress";
import {
  Brain,
  Lightbulb,
  ScrollText,
  Pencil,
  Microscope,
  Thermometer,
  Activity,
  Wind,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Trash2,
} from "lucide-react";

const SLUG = "modul-01";

export function Modul01() {
  return (
    <article className="space-y-7">
      {/* Story */}
      <Section icon={<ScrollText className="h-4 w-4" />} label="Story · Auf dem Küchenboden">
        <div className="glass-card-strong p-5">
          <div className="grid gap-5 sm:grid-cols-[200px_1fr]">
            <ZoomableImage alt="Mary auf dem Küchenboden" caption="Mary · Schritt 01" />
            <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
              <h3 className="font-display text-base font-bold text-bordeaux">SOS · Die erste Nacht</h3>
              <p>
                Mary sitzt um 3 Uhr nachts auf dem Küchenboden. Ihr Herz rast, sie bekommt kaum Luft.
                Vor dem endgültigen Abbruch hatte Sandra sie mit ihrer Ambivalenz in den Wahnsinn
                getrieben: Morgens innig ein Liebeskettchen entgegengenommen, abends Schluss gemacht.
              </p>
              <p>
                Der Auslöser für die Eskalation: ein intimer, harmonischer Vormittag. Als Mary erst am
                nächsten Tag anrief, blockte Sandra sofort ab. Auf die Frage nach dem Verhalten – einfach
                aufgelegt. Überall blockiert.
              </p>
              <p>
                Statt Sandra anzuflehen, stoppt Mary. Sie nutzt das{" "}
                <GlossarTerm termKey="tipp">TIPP-Protokoll</GlossarTerm>, taucht ihr Gesicht in eiskaltes
                Wasser und zwingt ihr Nervensystem durch tiefe Bauchatmung aus der Panik. <strong>Sie
                schreibt nicht. Sie atmet.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Diagnose */}
      <Section icon={<Brain className="h-4 w-4" />} label="Diagnose · Amygdala-Hijacking">
        <div className="diagnose-box space-y-3 text-sm">
          <p>
            Was Mary erlebt – und du vielleicht gerade erlebst – hat einen Namen:{" "}
            <GlossarTerm termKey="amygdala-hijacking">Amygdala-Hijacking</GlossarTerm>. Das Alarmsystem
            deines Gehirns hat das Schweigen als lebensbedrohlich registriert. Dein präfrontaler Kortex
            ist buchstäblich offline.
          </p>
          <p>
            Das ist keine Schwäche, sondern Biologie. Dein Nervensystem hat gelernt, dass Entzug von
            Aufmerksamkeit existenziell bedrohlich ist – weil er es in dieser Beziehung immer wieder war.
          </p>
          <p>
            Die gute Nachricht: Das Nervensystem lässt sich regulieren. Nicht durch Willenskraft, sondern
            durch gezielte körperliche Interventionen, die direkt aufs autonome Nervensystem wirken –
            bevor der Verstand überhaupt eingeschaltet ist.
          </p>
        </div>
      </Section>

      {/* Lösung: TIPP-Karte interaktiv */}
      <Section icon={<Lightbulb className="h-4 w-4" />} label="Lösung · Das TIPP-Protokoll (DBT)">
        <div className="loesung-box space-y-4">
          <p className="text-sm">
            Vier Sofortmaßnahmen, die deine Physiologie regulieren – bevor Kognition möglich ist. Jill
            Bolte Taylor (2006): Eine reine biochemische Emotionswelle dauert <strong>nur 90 Sekunden</strong>.
            Du musst sie nur überstehen, ohne zu handeln.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <TippCard
              letter="T"
              title="Temperature"
              text="Eiskaltes Wasser ins Gesicht (30 Sek.) – aktiviert den Tauchreflex und senkt Herzfrequenz."
              icon={<Thermometer className="h-4 w-4" />}
            />
            <TippCard
              letter="I"
              title="Intense Exercise"
              text="60 Sek. Sprint, Hampelmänner, Liegestütze – metabolisiert Cortisol und Adrenalin."
              icon={<Activity className="h-4 w-4" />}
            />
            <TippCard
              letter="P"
              title="Paced Breathing"
              text="4 ein, 7 halten, 8 aus. Aktiviert den Vagusnerv – aus Kampf in Ruhe."
              icon={<Wind className="h-4 w-4" />}
            />
            <TippCard
              letter="P"
              title="Progressive Relaxation"
              text="Muskelgruppen 5 Sek. anspannen, 10 Sek. lösen. Von den Füßen bis zum Kopf."
              icon={<Sparkles className="h-4 w-4" />}
            />
          </div>
        </div>
      </Section>

      {/* Übung 1: TIPP-Notfallplan */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 1 · Mein TIPP-Notfallplan">
        <div className="uebung-box space-y-3">
          <p className="text-sm">
            Schreibe jetzt – nicht in der Krise – auf, wie du jede Phase konkret umsetzt.
          </p>
          <ReflectionInput slug={SLUG} exerciseKey="tipp_t" label="T · Wo ist bei mir kaltes Wasser verfügbar?" />
          <ReflectionInput slug={SLUG} exerciseKey="tipp_i" label="I · Welche Bewegung kann ich sofort machen?" />
          <ReflectionInput slug={SLUG} exerciseKey="tipp_p1" label="P · Mein Atemrhythmus" placeholder="z.B. 4-7-8" />
          <ReflectionInput slug={SLUG} exerciseKey="tipp_p2" label="P · Wann und wo übe ich Muskelentspannung?" />
        </div>
      </Section>

      {/* Übung 2: Urge Surfing */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 2 · Urge Surfing">
        <div className="uebung-box space-y-4">
          <UrgeSurfingWave />
          <p className="text-sm">
            Wenn der Drang kommt, ihr zu schreiben: Beobachte ihn wie eine Welle. Er steigt, erreicht
            seinen Höhepunkt – und fällt wieder ab. Du musst nicht handeln. Du musst nur warten.
          </p>
          <ReflectionField
            slug={SLUG}
            exerciseKey="urge_body"
            label="Wie fühlt sich der Impuls in meinem Körper an?"
            placeholder="z.B. Kribbeln in den Fingern, Druck in der Brust…"
          />
          <ReflectionField
            slug={SLUG}
            exerciseKey="urge_alt"
            label="Was tue ich stattdessen, wenn die Welle kommt?"
            placeholder="z.B. duschen, spazieren, Freundin anrufen…"
          />
        </div>
      </Section>

      {/* Übung 3: STOPP - Ersatzhandlungen-Liste */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 3 · STOPP-Technik">
        <div className="uebung-box space-y-3">
          <p className="text-sm">
            Setze dich hin. Stell dir vor, du willst gerade schreiben. Heb die Hand wie ein Stoppschild.
            Sag laut <strong>„STOPP!"</strong>. Zähl bis 5. Wähl dann eine Ersatzhandlung. 3× am Stück.
          </p>
          <ErsatzhandlungenListe />
          <p className="rounded-lg bg-warning/15 p-3 text-xs text-graphite/80">
            ⚠️ Übe diese Technik zuerst in ruhigen Momenten, wenn du nicht akut betroffen bist.
          </p>
        </div>
      </Section>

      {/* Übung 4: High-Load Distraction */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 4 · High-Load Distraction">
        <div className="uebung-box space-y-4">
          <p className="text-sm">
            Drei kognitive Aufgaben gleichzeitig – dein Arbeitsgedächtnis hat dann keine Kapazität mehr
            für obsessive Gedanken. Klinisch validierte DBT-Technik (Linehan, 1993).
          </p>
          <DistractionTimer />
          <ol className="space-y-2 text-sm">
            <li className="flex gap-3 rounded-lg bg-white/60 p-3">
              <span className="font-display font-bold text-bordeaux">1️⃣</span>
              <span>Buchstabiere deine Lieblingseissorte rückwärts.</span>
            </li>
            <li className="flex gap-3 rounded-lg bg-white/60 p-3">
              <span className="font-display font-bold text-bordeaux">2️⃣</span>
              <span>Geh gedanklich durch deinen Lieblingssupermarkt und zähl alle Regale auf.</span>
            </li>
            <li className="flex gap-3 rounded-lg bg-white/60 p-3">
              <span className="font-display font-bold text-bordeaux">3️⃣</span>
              <span>Zähl rückwärts von 200 in 7er-Schritten – gleichzeitig.</span>
            </li>
          </ol>
        </div>
      </Section>

      {/* Deep Dive */}
      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive · Die 90-Sekunden-Regel">
        <CollapsibleBox title="Die Neurobiologie der Emotion (Jill Bolte Taylor, 2006)">
          <p>
            Neuroanatomin Jill Bolte Taylor beschrieb, dass eine reine biochemische Emotionswelle nur
            <strong> 90 Sekunden</strong> dauert. Was danach kommt, ist kein Gefühl mehr, sondern ein
            Gedanke, der die Emotion neu aktiviert. Wenn du 90 Sekunden lang nicht auf den Impuls
            reagierst, ist die ursprüngliche Welle vorbei.
          </p>
          <p>
            Das TIPP-Protokoll nutzt genau dieses Fenster. Kaltes Wasser aktiviert den Tauchreflex und
            senkt die Herzfrequenz innerhalb von Sekunden. Intensive Bewegung metabolisiert Cortisol und
            Adrenalin.
          </p>
          <p className="text-xs italic text-graphite/65">
            Quellen: Linehan (1993), DBT Skills Training Manual · Taylor (2006), My Stroke of Insight.
          </p>
        </CollapsibleBox>
      </Section>

      {/* Begleitende Meditation */}
      <Section icon={<Sparkles className="h-4 w-4" />} label="Begleitende Meditation">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-mauve/15 to-sage/15 p-4 transition hover:shadow-soft"
        >
          <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-white/70 text-2xl">
            🧘
          </div>
          <div>
            <p className="font-display text-sm font-bold text-bordeaux">
              Nervensystem beruhigen &amp; Cortisol senken
            </p>
            <p className="text-xs text-graphite/70">2 Std · ChakraTunes / Raphael Kempermann</p>
            <p className="mt-0.5 text-[11px] text-mauve underline">▹ Auf YouTube anhören</p>
          </div>
        </a>
      </Section>

      {/* Checkliste */}
      <ChecklistGoals
        slug={SLUG}
        goals={[
          { id: "g1", text: "Ich kenne das TIPP-Protokoll und kann es im Notfall anwenden." },
          { id: "g2", text: "Ich verstehe, dass Amygdala-Hijacking biologisch ist – kein Charakterfehler." },
          { id: "g3", text: "Ich habe meinen persönlichen TIPP-Notfallplan ausgefüllt." },
          { id: "g4", text: "Ich habe Urge Surfing oder STOPP mindestens einmal ausprobiert." },
          { id: "g5", text: "Ich weiß: Eine Emotionswelle klingt nach 90 Sekunden ab – ich muss sie nur überstehen." },
        ]}
      />
    </article>
  );
}

function Section({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3 animate-fade-in">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
        {icon}
        {label}
      </div>
      {children}
    </section>
  );
}

function TippCard({
  letter,
  title,
  text,
  icon,
}: {
  letter: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 rounded-lg bg-white/75 p-3">
      <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-bordeaux to-mauve font-display text-xl font-extrabold text-white">
        {letter}
      </div>
      <div>
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-bordeaux">
          {icon} {title}
        </p>
        <p className="mt-0.5 text-xs leading-snug text-graphite/85">{text}</p>
      </div>
    </div>
  );
}

function UrgeSurfingWave() {
  return (
    <div className="relative h-28 overflow-hidden rounded-lg bg-gradient-to-b from-sage/10 to-mauve/15">
      <svg viewBox="0 0 400 120" className="h-full w-full">
        <path
          d="M0,80 Q50,30 100,60 T200,55 T300,65 T400,50 L400,120 L0,120 Z"
          fill="url(#wave)"
          className="animate-wave"
          style={{ transformOrigin: "center" }}
        />
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.6 0.075 320)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.66 0.045 155)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <p className="font-display text-sm font-bold text-bordeaux">🏄‍♀️ Reite die Welle</p>
      </div>
    </div>
  );
}

function ErsatzhandlungenListe() {
  const { exerciseState, setExercise, loaded } = useModuleProgress(SLUG);
  const [draft, setDraft] = useState("");
  if (!loaded) return null;
  const items: string[] = exerciseState.ersatzhandlungen ?? [];

  const add = () => {
    if (!draft.trim()) return;
    setExercise("ersatzhandlungen", [...items, draft.trim()]);
    setDraft("");
  };
  const remove = (idx: number) => {
    setExercise(
      "ersatzhandlungen",
      items.filter((_, i) => i !== idx),
    );
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-bordeaux">Meine Ersatzhandlungen ({items.length}/10)</p>
      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="z.B. Hund streicheln, Lied singen…"
          className="flex-1 rounded-lg border-2 border-sage/40 bg-white/85 p-2.5 text-sm outline-none focus:border-sage"
        />
        <button
          onClick={add}
          disabled={items.length >= 10}
          className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-bordeaux text-white disabled:opacity-40"
          aria-label="Hinzufügen"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      {items.length > 0 && (
        <ul className="space-y-1.5">
          {items.map((it, i) => (
            <li key={i} className="flex items-center justify-between gap-2 rounded-lg bg-white/65 px-3 py-2 text-sm">
              <span>
                <span className="mr-2 font-display font-bold text-mauve">{i + 1}.</span>
                {it}
              </span>
              <button
                onClick={() => remove(i)}
                aria-label="Löschen"
                className="text-graphite/40 hover:text-bordeaux"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DistractionTimer() {
  const TARGET = 20 * 60; // 20 Min
  const [seconds, setSeconds] = useState(TARGET);
  const [running, setRunning] = useState(false);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      ref.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            setRunning(false);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [running]);

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const pct = ((TARGET - seconds) / TARGET) * 100;

  return (
    <div className="rounded-lg bg-white/75 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-mauve">Timer</p>
          <p className="font-display text-3xl font-extrabold text-bordeaux tabular-nums">
            {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="grid h-11 w-11 place-items-center rounded-full bg-bordeaux text-white"
            aria-label={running ? "Pause" : "Start"}
          >
            {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setSeconds(TARGET);
            }}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-bordeaux border border-bordeaux/20"
            aria-label="Zurücksetzen"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-sage/15">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sage to-mauve transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
