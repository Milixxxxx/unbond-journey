import { useEffect, useRef, useState } from "react";
import { Heart, Phone, X, Wind, Hand, Eye, Activity, Thermometer, Sparkles, Play, Pause, RotateCcw } from "lucide-react";

type Tool = "tipp" | "stopp" | "ground" | "urge" | "atem";

export function SosFloatingButton() {
  const [open, setOpen] = useState(false);
  const [tool, setTool] = useState<Tool | null>(null);

  // ESC schließt
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (tool) setTool(null);
        else setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, tool]);

  // SOS ist immer erreichbar — auch ohne Login. Krise wartet nicht.

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="SOS – Notfallkoffer öffnen"
        className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--color-sos)] text-white shadow-elegant animate-pulse-soft transition hover:scale-105 md:bottom-8 md:right-8"
        style={{ boxShadow: "0 10px 36px oklch(0.55 0.21 25 / 0.45)" }}
      >
        <Heart className="h-6 w-6" fill="currentColor" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm animate-fade-in sm:items-center sm:p-4"
          onClick={() => {
            setTool(null);
            setOpen(false);
          }}
        >
          <div
            className="glass-card-strong relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl p-5 sm:rounded-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setTool(null);
                setOpen(false);
              }}
              aria-label="Schließen"
              className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/70 text-graphite hover:bg-black/5"
            >
              <X className="h-4 w-4" />
            </button>

            {!tool ? (
              <Menu onPick={setTool} />
            ) : (
              <ToolView tool={tool} onBack={() => setTool(null)} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────── Menü ─────────── */
function Menu({ onPick }: { onPick: (t: Tool) => void }) {
  const tools: { id: Tool; label: string; sub: string; icon: React.ReactNode; tone: string }[] = [
    { id: "atem", label: "4-7-8 Atem", sub: "Vagus aktivieren", icon: <Wind className="h-5 w-5" />, tone: "from-sage/30 to-sage/10" },
    { id: "tipp", label: "TIPP-Skill", sub: "Physiologie zuerst", icon: <Thermometer className="h-5 w-5" />, tone: "from-terracotta/30 to-terracotta/10" },
    { id: "ground", label: "5-4-3-2-1", sub: "Grounding", icon: <Eye className="h-5 w-5" />, tone: "from-mauve/30 to-mauve/10" },
    { id: "stopp", label: "STOPP", sub: "Impulsbremse", icon: <Hand className="h-5 w-5" />, tone: "from-bordeaux/25 to-bordeaux/10" },
    { id: "urge", label: "Urge-Surf", sub: "90 Sekunden", icon: <Sparkles className="h-5 w-5" />, tone: "from-warning/30 to-warning/10" },
  ];
  return (
    <div>
      <div className="pr-8">
        <h2 className="font-display text-xl font-bold text-bordeaux">SOS · Notfallkoffer</h2>
        <p className="mt-1 text-sm text-graphite/75">
          Atme zuerst. Dein Verstand ist offline – dein Körper braucht jetzt einen Anker.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => onPick(t.id)}
            className={`flex flex-col items-start gap-1 rounded-xl bg-gradient-to-br ${t.tone} p-3 text-left transition hover:scale-[1.02]`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/80 text-bordeaux">
              {t.icon}
            </span>
            <span className="mt-1 font-display text-sm font-bold text-bordeaux">{t.label}</span>
            <span className="text-[11px] text-graphite/70">{t.sub}</span>
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-[var(--color-sos)]/8 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-sos)]">
          Krise · Kostenlos · 24/7
        </p>
        <div className="mt-2 space-y-2">
          <a
            href="tel:08001110111"
            className="flex items-center gap-3 rounded-lg bg-white/80 p-2.5 text-sm transition hover:bg-white"
          >
            <Phone className="h-4 w-4 flex-shrink-0 text-bordeaux" />
            <div className="min-w-0 flex-1">
              <div className="font-bold">Telefonseelsorge</div>
              <div className="text-xs text-graphite/65">0800 111 0 111</div>
            </div>
          </a>
          <a
            href="tel:08001160160"
            className="flex items-center gap-3 rounded-lg bg-white/80 p-2.5 text-sm transition hover:bg-white"
          >
            <Phone className="h-4 w-4 flex-shrink-0 text-bordeaux" />
            <div className="min-w-0 flex-1">
              <div className="font-bold">Hilfetelefon Gewalt gegen Frauen</div>
              <div className="text-xs text-graphite/65">0800 116 016</div>
            </div>
          </a>
        </div>
        <p className="mt-2 text-center text-[11px] text-graphite/65">
          In akuter Lebensgefahr: <strong>112</strong>
        </p>
      </div>
    </div>
  );
}

function ToolView({ tool, onBack }: { tool: Tool; onBack: () => void }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-3 inline-flex items-center gap-1 rounded-full bg-bordeaux/10 px-3 py-1 text-xs font-semibold text-bordeaux hover:bg-bordeaux/15"
      >
        ← Alle Tools
      </button>
      {tool === "atem" && <BreathTool />}
      {tool === "tipp" && <TippTool />}
      {tool === "ground" && <Grounding54321 />}
      {tool === "stopp" && <StoppTool />}
      {tool === "urge" && <UrgeSurfTimer />}
    </div>
  );
}

/* ─────────── 4-7-8 Atem mit Animation ─────────── */
function BreathTool() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");
  const [count, setCount] = useState(4);
  const [cycles, setCycles] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) {
      if (ref.current) clearInterval(ref.current);
      return;
    }
    ref.current = setInterval(() => {
      setCount((c) => {
        if (c > 1) return c - 1;
        // Phase wechseln
        setPhase((p) => {
          if (p === "in") {
            setCount(7);
            return "hold";
          }
          if (p === "hold") {
            setCount(8);
            return "out";
          }
          setCount(4);
          setCycles((x) => x + 1);
          return "in";
        });
        return c;
      });
    }, 1000);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [running]);

  const reset = () => {
    setRunning(false);
    setPhase("in");
    setCount(4);
    setCycles(0);
  };

  const label = phase === "in" ? "einatmen" : phase === "hold" ? "halten" : "ausatmen";
  const scale = phase === "in" ? 1.4 : phase === "hold" ? 1.4 : 0.85;

  return (
    <div>
      <h3 className="font-display text-lg font-bold text-bordeaux">4-7-8 Atem</h3>
      <p className="mt-1 text-xs text-graphite/70">
        Aktiviert den Vagusnerv. 4 Sek. einatmen, 7 Sek. halten, 8 Sek. ausatmen. Drei Zyklen reichen oft.
      </p>
      <div className="mt-5 grid place-items-center">
        <div
          className="grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-sage/40 to-mauve/40 text-white transition-transform duration-1000 ease-in-out"
          style={{ transform: `scale(${running ? scale : 1})` }}
        >
          <div className="text-center">
            <p className="font-display text-4xl font-extrabold">{count}</p>
            <p className="mt-1 text-xs uppercase tracking-wider">{label}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={() => setRunning((r) => !r)}
          className="grid h-12 w-12 place-items-center rounded-full bg-bordeaux text-white"
          aria-label={running ? "Pause" : "Start"}
        >
          {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button
          onClick={reset}
          className="grid h-12 w-12 place-items-center rounded-full bg-white text-bordeaux border border-bordeaux/20"
          aria-label="Zurücksetzen"
        >
          <RotateCcw className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-graphite/65">Zyklen: <strong>{cycles}</strong></p>
    </div>
  );
}

/* ─────────── TIPP ─────────── */
function TippTool() {
  return (
    <div>
      <h3 className="font-display text-lg font-bold text-bordeaux">TIPP-Skill (DBT)</h3>
      <p className="mt-1 text-xs text-graphite/70">
        Vier Sofortmaßnahmen, die deine Physiologie regulieren. Eine biochemische Welle dauert nur 90 Sek.
      </p>
      <div className="mt-3 space-y-2">
        {[
          { l: "T", t: "Temperature", d: "Eiskaltes Wasser ins Gesicht (30 Sek.) – aktiviert Tauchreflex.", i: <Thermometer className="h-4 w-4" /> },
          { l: "I", t: "Intense Exercise", d: "60 Sek. Sprint, Hampelmänner, Liegestütze – Cortisol abbauen.", i: <Activity className="h-4 w-4" /> },
          { l: "P", t: "Paced Breathing", d: "4 ein · 7 halten · 8 aus. Vagusnerv aktivieren.", i: <Wind className="h-4 w-4" /> },
          { l: "P", t: "Progressive Relaxation", d: "Muskeln 5 Sek. anspannen, 10 Sek. lösen. Füße bis Kopf.", i: <Sparkles className="h-4 w-4" /> },
        ].map((c, i) => (
          <div key={i} className="flex gap-3 rounded-lg bg-white/80 p-3">
            <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-bordeaux to-mauve font-display text-lg font-extrabold text-white">
              {c.l}
            </div>
            <div className="min-w-0">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-bordeaux">
                {c.i} {c.t}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-graphite/85">{c.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────── STOPP ─────────── */
function StoppTool() {
  return (
    <div>
      <h3 className="font-display text-lg font-bold text-bordeaux">STOPP · Impulsbremse</h3>
      <p className="mt-1 text-xs text-graphite/70">
        Setze dich hin. Heb die Hand wie ein Stoppschild. Sag laut <strong>„STOPP!"</strong>. Zähl bis 5.
      </p>
      <div className="mt-3 space-y-2 text-sm">
        {[
          { k: "S", v: "Stop · Halt jetzt sofort an." },
          { k: "T", v: "Take a step back · Geh innerlich einen Schritt zurück." },
          { k: "O", v: "Observe · Was spürst du im Körper? Was denkst du?" },
          { k: "P", v: "Proceed mindfully · Wähl bewusst die nächste Handlung." },
          { k: "P", v: "Praise yourself · Du hast nicht reagiert. Das ist Heilung." },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-white/80 p-2.5">
            <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-bordeaux text-white font-display text-base font-extrabold">
              {s.k}
            </span>
            <span className="text-xs leading-snug">{s.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────── 5-4-3-2-1 Grounding ─────────── */
function Grounding54321() {
  const steps = [
    { n: 5, sense: "siehst", hint: "z.B. Lampe, Fenster, Stift, Tisch, Hand" },
    { n: 4, sense: "fühlst", hint: "z.B. Stoff, Tasse, Boden unter den Füßen, Luft auf der Haut" },
    { n: 3, sense: "hörst", hint: "z.B. Atem, Auto draußen, Kühlschrank, eigene Stimme" },
    { n: 2, sense: "riechst", hint: "z.B. Tee, Kaffee, Haut, frische Luft" },
    { n: 1, sense: "schmeckst", hint: "z.B. Nachgeschmack vom letzten Schluck Wasser" },
  ];
  const [idx, setIdx] = useState(0);
  const step = steps[idx];

  return (
    <div>
      <h3 className="font-display text-lg font-bold text-bordeaux">5-4-3-2-1 Grounding</h3>
      <p className="mt-1 text-xs text-graphite/70">
        Hol dich aus dem Karussell zurück in den Raum. Tippe dich Schritt für Schritt durch deine fünf Sinne.
      </p>
      <div className="mt-4 rounded-xl bg-white/80 p-5 text-center">
        <Eye className="mx-auto h-5 w-5 text-mauve" />
        <p className="mt-1 font-display text-5xl font-extrabold text-bordeaux">{step.n}</p>
        <p className="mt-1 text-sm font-semibold text-bordeaux">Dinge, die du {step.sense}</p>
        <p className="mt-1 text-xs text-graphite/70">{step.hint}</p>
      </div>
      <div className="mt-3 flex gap-2">
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
            aria-label="Neu starten"
          >
            ↺
          </button>
        )}
      </div>
      <div className="mt-3 flex justify-center gap-1.5">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-7 rounded-full ${i <= idx ? "bg-bordeaux" : "bg-sage/25"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────── Urge-Surf 90 Sek ─────────── */
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
    <div>
      <h3 className="font-display text-lg font-bold text-bordeaux">Urge-Surf · 90 Sekunden</h3>
      <p className="mt-1 text-xs text-graphite/70">
        Beobachte den Drang wie eine Welle. Sie steigt, gipfelt – fällt. Du musst nichts tun.
      </p>
      <div className="mt-4 rounded-xl bg-white/80 p-5">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-mauve">
            {done ? "Welle vorbei" : "Reite die Welle"}
          </p>
          <p className="font-display text-5xl font-extrabold text-bordeaux tabular-nums">
            {String(Math.floor(seconds / 60)).padStart(2, "0")}:
            {String(seconds % 60).padStart(2, "0")}
          </p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-sage/15">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sage to-mauve transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-4 flex justify-center gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            disabled={done}
            className="grid h-12 w-12 place-items-center rounded-full bg-bordeaux text-white disabled:opacity-30"
            aria-label={running ? "Pause" : "Start"}
          >
            {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setSeconds(TARGET);
            }}
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-bordeaux border border-bordeaux/20"
            aria-label="Zurücksetzen"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
        {done && (
          <p className="mt-3 text-center text-xs text-sage">
            ✓ Die Welle ist vorbei. Du hast nichts geschrieben. Das ist Heilung.
          </p>
        )}
      </div>
    </div>
  );
}
