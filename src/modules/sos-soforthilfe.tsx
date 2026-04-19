import { useEffect, useRef, useState } from "react";
import { CollapsibleBox } from "@/components/collapsible-box";
import { GlossarTerm } from "@/components/glossar-term";
import { ZoomableImage } from "@/components/zoomable-image";
import { ChecklistGoals } from "@/components/checklist-goals";
import {
  ReflectionField,
  ReflectionInput,
  SliderField,
} from "@/components/exercise-fields";
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
  Hand,
  Eye,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

const SLUG = "sos-soforthilfe";

export function SosSoforthilfe() {
  return (
    <article className="space-y-7">
      {/* ─── STORY · 3:14 Uhr nachts (1:1 verbatim aus UNBOND_Final_v5.html) ─── */}
      <Section icon={<ScrollText className="h-4 w-4" />} label="Story · 3:14 Uhr nachts">
        <div className="glass-card-strong p-5">
          <div className="grid gap-5 sm:grid-cols-[200px_1fr]">
            <ZoomableImage alt="Mary · Die erste Nacht" caption="Mary · Die erste Nacht" />
            <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
              <h3 className="font-display text-base font-bold text-bordeaux">Der Kontaktabbruch</h3>
              <p>
                Eigentlich ist es ein sonniger, schöner Tag. Doch Mary kann nichts davon wirklich
                wahrnehmen. Sie sitzt auf ihrer Couch und starrt das tutende Smartphone an, das sie in der
                Hand hält. Alles wirkt unwirklich auf sie. Ihr Herz hämmert so heftig gegen ihre Rippen,
                dass es schmerzt. Der Auslöser?
              </p>
              <p>
                Ein plötzlicher, eiskalter Kontaktabbruch von Sandra, nur 4 Tage nach einem innigen,
                harmonischen Wochenende. Marys Verstand rattert: <em>„Was habe ich falsch gemacht? Warum
                stoßt sie mich wieder weg?"</em> 3 Tage hatte sie Sandras Rückzug ausgehalten, doch
                paradoxerweise, je mehr sie aushielt, desto komischer und abweisender wurde Sandra.
                Schließlich stellte sie sie zur Rede, nicht anklagend, nicht fordernd in einem ruhigen
                Ton. Doch Sandra legte auf und blockierte sie. Allein die Frage nach ihrem komischen
                Verhalten löste aggressive Abwehr aus. Mary verstand die Welt nicht mehr…
              </p>
              <p>
                Ihr Körper ist in Alarmbereitschaft. Die{" "}
                <GlossarTerm termKey="amygdala-hijacking">Amygdala</GlossarTerm> hat das Schweigen als
                Bedrohung registriert — so, als ob sie einer physischen Gefahr ausgesetzt wäre.
              </p>
              <p>
                Cortisol flutet. Der präfrontale Kortex, der Marys rationale Stimme ist, schaltet sich
                zunehmend ab. Was bleibt: Drang. Reflexe. Schmerz. Ihr Körper schreit nach Kontakt,
                obwohl sie genau weiß, dass Sandra sie blockiert hat. Sie könnte ihr nun Mails schreiben,
                denn diese hatte Sandra noch nie blockiert…
              </p>
              <p>
                Doch Mary weiß: Wenn sie jetzt zum Handy greift, füttert sie nur das Monster. Stattdessen
                zwingt sie sich, aufzustehen. Sie wankt ins Badezimmer, füllt das Waschbecken mit
                eiskaltem Wasser und taucht ihr Gesicht für 30 Sekunden unter.
              </p>
              <p>
                Der Tauchreflex kickt ein. Ihr Herzschlag wird ruhiger, das Rauschen in den Ohren
                verstummt. <strong>Die Gefahr ist nicht real, es ist nur ihr Nervensystem.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── DIAGNOSE · Was in deinem Körper passiert (1:1 verbatim) ─── */}
      <Section icon={<Brain className="h-4 w-4" />} label="Diagnose · Was in deinem Körper passiert">
        <div className="diagnose-box space-y-3 text-sm">
          <p>
            Was du gerade erlebst – die Gedankenschleifen um 3 Uhr morgens, das Herzrasen, wenn ihr Name
            auftaucht, das Wissen, dass du gehen musst, und der Körper, der trotzdem zurückwill – das ist
            kein Zeichen, dass du verrückt bist. Es ist ein neurobiologisches Ereignis. Dein Gehirn
            reagiert auf Trennung wie auf Drogenentzug.{" "}
            <GlossarTerm termKey="dopamin">Dopamin</GlossarTerm> bricht ein. Cortisol steigt. Der
            präfrontale Kortex – dein rationales Denken – ist buchstäblich offline.
          </p>
          <p>
            Romantische Liebe aktiviert dieselben neuronalen Belohnungspfade wie Kokain (Fisher et al.,
            2005). Bei{" "}
            <GlossarTerm termKey="intermittierende-verstaerkung">
              intermittierender Verstärkung
            </GlossarTerm>{" "}
            – dem unvorhersehbaren Wechsel aus Nähe und Rückzug – wird dieses Belohnungssystem besonders
            stark konditioniert. Die Unberechenbarkeit erzeugt die stärkste biochemische Bindung
            überhaupt. Wir nennen sie{" "}
            <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm>.
          </p>
        </div>
      </Section>

      {/* ─── LÖSUNG · Dein Ausgangspunkt (1:1 verbatim) ─── */}
      <Section icon={<Lightbulb className="h-4 w-4" />} label="Lösung · Dein Ausgangspunkt">
        <div className="loesung-box space-y-3 text-sm">
          <p>
            Bevor du mit der aktiven Arbeit beginnst, ist Selbst-Monitoring das erste wirksame Werkzeug
            deiner Heilung. Kabat-Zinn (1990) zeigte, dass die bloße Beobachtung eines Zustands – ohne
            ihn verändern zu müssen – bereits den präfrontalen Kortex aktiviert und die
            Amygdala-Reaktivität senkt. Indem du täglich drei Werte dokumentierst – Schlafqualität,
            Körperspannung und Kontakt-Drang – schaffst du eine datenbasierte Außenperspektive auf dein
            Nervensystem.
          </p>
          <p>
            Im Trauma fühlen sich Zustände endlos und unveränderlich an; tatsächliche Zahlen beweisen die
            Veränderlichkeit deines Erlebens. Deine Kontaktliste und deine sicheren Orte sind dabei keine
            Schwäche, sondern neurologisch fundierte Ressourcen, die dich in Sicherheit verankern, wenn
            die Amygdala Alarm schlägt.
          </p>
          <p className="text-[11px] italic text-graphite/65">
            Quellen: Kabat-Zinn (1990), <em>Full Catastrophe Living</em>; Linehan (1993), <em>DBT Skills
            Training Manual</em>.
          </p>
        </div>
      </Section>

      {/* ─── ÜBUNG 1 · Nervensystem-Check (Tap-Skala 0–10) ─── */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 1 · Nervensystem-Check">
        <div className="uebung-box space-y-4">
          <p className="text-sm">
            Bewerte jeden Wert auf einer Skala von 0–10. Tippe die Zahl an. Dein erster Eintrag wird dein
            Ausgangspunkt.
          </p>
          <div className="space-y-5 rounded-lg bg-white/65 p-4">
            <SliderField slug={SLUG} exerciseKey="schlaf" label="😴 Schlafqualität" hint="0 = kaum geschlafen · 10 = erholt" />
            <SliderField slug={SLUG} exerciseKey="anspannung" label="😤 Körperanspannung" hint="0 = entspannt · 10 = unter Strom" />
            <SliderField slug={SLUG} exerciseKey="drang" label="📱 Kontakt-Drang" hint="0 = gar nicht · 10 = übermächtig" />
          </div>
          <p className="text-xs text-graphite/60">💾 Wird automatisch gespeichert.</p>
        </div>
      </Section>

      {/* ─── ÜBUNG 2 · Notfall-Kontaktliste ─── */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 2 · Notfall-Kontaktliste">
        <div className="uebung-box space-y-3">
          <p className="text-sm">
            Trage jetzt – nicht in der Krise – mindestens eine Person pro Kategorie ein. Diese Liste
            kommt ans Handy und an den Kühlschrank.
          </p>
          <ReflectionInput
            slug={SLUG}
            exerciseKey="kontakt_a"
            label="💛 A · Wärme – jemand, der zuhört und nicht urteilt"
            placeholder="Name & Telefonnummer"
          />
          <ReflectionInput
            slug={SLUG}
            exerciseKey="kontakt_b"
            label="🧩 B · Struktur – jemand, der dir hilft den Tag zu planen"
            placeholder="Name & Telefonnummer"
          />
          <ReflectionInput
            slug={SLUG}
            exerciseKey="kontakt_c"
            label="🩺 C · Professionell – Therapeutin oder Krisentelefon"
            placeholder="z.B. Telefonseelsorge 0800 111 0 111"
          />
        </div>
      </Section>

      {/* ─── QUICK-TOOLS (SOS Werkzeugkasten · ohne Theorie) ─── */}
      <Section icon={<Sparkles className="h-4 w-4" />} label="Quick-Tools · Sofort einsetzbar">
        <div className="space-y-4">
          <p className="text-sm">
            Diese vier Werkzeuge wirken körperlich – bevor dein Verstand wieder online ist. Übe sie in
            ruhigen Momenten, dann sind sie in der Krise abrufbar.
          </p>

          {/* TIPP-Karte */}
          <div className="loesung-box space-y-3">
            <h4 className="font-display text-sm font-bold text-bordeaux">🆘 TIPP-Skill (DBT)</h4>
            <p className="text-xs text-graphite/80">
              Vier Sofortmaßnahmen, die deine Physiologie regulieren – bevor Kognition möglich ist. Eine
              reine biochemische Emotionswelle dauert <strong>nur 90 Sekunden</strong> (Taylor, 2006).
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <TippCard
                letter="T"
                title="Temperature"
                text="Eiskaltes Wasser ins Gesicht (30 Sek.) – aktiviert den Tauchreflex, senkt Herzfrequenz."
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

          {/* STOPP */}
          <div className="loesung-box space-y-2">
            <h4 className="font-display text-sm font-bold text-bordeaux">✋ STOPP-Übung</h4>
            <p className="text-xs text-graphite/80">
              Setze dich hin. Stell dir vor, du willst gerade schreiben. Heb die Hand wie ein
              Stoppschild. Sag laut <strong>„STOPP!"</strong>. Zähl bis 5. Wähl dann eine Ersatzhandlung.
              3× am Stück.
            </p>
            <div className="flex items-center gap-2 rounded-lg bg-white/70 p-3">
              <Hand className="h-5 w-5 flex-shrink-0 text-bordeaux" />
              <p className="text-xs">
                <strong>S</strong>top · <strong>T</strong>ake a step back · <strong>O</strong>bserve ·{" "}
                <strong>P</strong>roceed mindfully · <strong>P</strong>raise yourself
              </p>
            </div>
          </div>

          {/* 5-4-3-2-1 Grounding */}
          <Grounding54321 />

          {/* Urge-Surf-Timer */}
          <UrgeSurfTimer />
        </div>
      </Section>

      {/* ─── REFLEXIONSFRAGE ─── */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Reflexion · Dein erster Schritt">
        <div className="uebung-box space-y-3">
          <ReflectionField
            slug={SLUG}
            exerciseKey="erster_schritt"
            label="Was nimmst du dir aus diesem Modul mit – und was probierst du als erstes aus?"
            placeholder="z.B. Ich werde heute Abend die Notfall-Kontaktliste fertig ausfüllen…"
          />
        </div>
      </Section>

      {/* ─── DEEP DIVE ─── */}
      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive · Die 90-Sekunden-Regel">
        <CollapsibleBox title="Die Neurobiologie der Emotionswelle (Jill Bolte Taylor, 2006)">
          <p>
            Die Neuroanatomin Jill Bolte Taylor beschrieb, dass eine reine biochemische Emotionswelle nur
            <strong> 90 Sekunden</strong> dauert. Was danach kommt, ist kein Gefühl mehr, sondern ein
            Gedanke, der die Emotion neu aktiviert. Wenn du 90 Sekunden lang nicht auf den Impuls
            reagierst, ist die ursprüngliche Welle vorbei.
          </p>
          <p>
            Das TIPP-Protokoll (Linehan, 1993) nutzt genau dieses Fenster: Kaltes Wasser aktiviert den
            Tauchreflex und senkt die Herzfrequenz innerhalb von Sekunden. Intensive Bewegung
            metabolisiert Cortisol und Adrenalin direkt.
          </p>
          <p className="text-xs italic text-graphite/65">
            Quellen: Linehan (1993), <em>DBT Skills Training Manual</em> · Taylor (2006), <em>My Stroke
            of Insight</em> · Fisher et al. (2005), <em>Romantic Love: An fMRI Study</em>.
          </p>
        </CollapsibleBox>
      </Section>

      {/* ─── CHECKLISTE ─── */}
      <ChecklistGoals
        slug={SLUG}
        goals={[
          { id: "g1", text: "Ich verstehe, dass mein Schmerz Entzug ist – keine Einbildung." },
          { id: "g2", text: "Ich habe meinen Nervensystem-Check ausgefüllt." },
          { id: "g3", text: "Ich habe meine Notfall-Kontaktliste erstellt." },
          { id: "g4", text: "Ich kenne die vier Quick-Tools: TIPP, STOPP, 5-4-3-2-1, Urge-Surf." },
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

/* ─── 5-4-3-2-1 Grounding Walk-through ─── */
function Grounding54321() {
  const steps = [
    { n: 5, sense: "siehst", hint: "z.B. Lampe, Fenster, Stift, Tisch, Hand", color: "text-bordeaux" },
    { n: 4, sense: "fühlst", hint: "z.B. Stoff, Tasse, Boden unter den Füßen, Luft auf der Haut", color: "text-mauve" },
    { n: 3, sense: "hörst", hint: "z.B. Atem, Auto draußen, Kühlschrank, eigene Stimme", color: "text-sage" },
    { n: 2, sense: "riechst", hint: "z.B. Tee, Kaffee, Haut, Frische Luft", color: "text-bordeaux" },
    { n: 1, sense: "schmeckst", hint: "z.B. den Nachgeschmack vom letzten Schluck Wasser", color: "text-mauve" },
  ];
  const [idx, setIdx] = useState(0);
  const step = steps[idx];

  return (
    <div className="loesung-box space-y-3">
      <h4 className="font-display text-sm font-bold text-bordeaux">👁️ 5-4-3-2-1 Grounding</h4>
      <p className="text-xs text-graphite/80">
        Hol dich aus dem Gedankenkarussell zurück in den Raum. Tippe dich Schritt für Schritt durch deine
        fünf Sinne.
      </p>
      <div className="rounded-lg bg-white/75 p-4 text-center">
        <Eye className="mx-auto mb-2 h-5 w-5 text-mauve" />
        <p className={`font-display text-3xl font-extrabold ${step.color}`}>{step.n}</p>
        <p className="mt-1 text-sm font-semibold text-bordeaux">Dinge, die du {step.sense}</p>
        <p className="mt-1 text-xs text-graphite/70">{step.hint}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="flex-1 rounded-lg border border-bordeaux/30 bg-white py-2 text-xs font-semibold text-bordeaux disabled:opacity-30"
        >
          ← Zurück
        </button>
        <button
          onClick={() => setIdx((i) => Math.min(steps.length - 1, i + 1))}
          disabled={idx === steps.length - 1}
          className="flex-1 rounded-lg bg-bordeaux py-2 text-xs font-semibold text-white disabled:opacity-30"
        >
          Weiter →
        </button>
        {idx === steps.length - 1 && (
          <button
            onClick={() => setIdx(0)}
            className="rounded-lg border border-mauve/30 bg-white px-3 py-2 text-xs font-semibold text-mauve"
          >
            ↺
          </button>
        )}
      </div>
      <div className="flex justify-center gap-1.5">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-8 rounded-full ${i <= idx ? "bg-bordeaux" : "bg-sage/25"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Urge-Surf-Timer · 90 Sekunden ─── */
function UrgeSurfTimer() {
  const TARGET = 90;
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

  const pct = ((TARGET - seconds) / TARGET) * 100;
  const done = seconds === 0;

  return (
    <div className="loesung-box space-y-3">
      <h4 className="font-display text-sm font-bold text-bordeaux">🌊 Urge-Surf · 90 Sekunden</h4>
      <p className="text-xs text-graphite/80">
        Wenn der Drang kommt, ihr zu schreiben: Beobachte ihn wie eine Welle. Sie steigt, erreicht ihren
        Höhepunkt – und fällt wieder ab. Du musst nicht handeln. Du musst nur warten.
      </p>
      <div className="rounded-lg bg-white/75 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-mauve">
              {done ? "Welle vorbei" : "Reite die Welle"}
            </p>
            <p className="font-display text-3xl font-extrabold text-bordeaux tabular-nums">
              {String(Math.floor(seconds / 60)).padStart(2, "0")}:
              {String(seconds % 60).padStart(2, "0")}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setRunning((r) => !r)}
              disabled={done}
              className="grid h-11 w-11 place-items-center rounded-full bg-bordeaux text-white disabled:opacity-30"
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
        {done && (
          <p className="mt-2 text-xs text-sage">
            ✓ Die Welle ist vorbei. Du hast nichts geschrieben. Das ist Heilung.
          </p>
        )}
      </div>
    </div>
  );
}
