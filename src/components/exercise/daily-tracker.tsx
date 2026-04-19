import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  CartesianGrid,
  Legend,
} from "recharts";
import { Pencil, Plus, Trash2, X, AlertCircle, TrendingDown, TrendingUp } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";

export type DailyEntry = {
  date: string; // ISO yyyy-mm-dd
  schlaf: number; // 0–10
  anspannung: number; // 0–10
  drang: number; // 0–10
  note?: string;
};

const STORAGE_KEY = "nervensystem_log";

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function shortDate(iso: string) {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}`;
}

/**
 * Tägliches Tracking mit Liniendiagramm + Schwellen-Zonen + Edit.
 * Speichert Liste DailyEntry[] unter exerciseState.nervensystem_log.
 */
export function DailyTracker({ slug }: { slug: string }) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  const [editing, setEditing] = useState<string | null>(null);
  const [showAddOther, setShowAddOther] = useState(false);

  if (!loaded) return null;

  const entries: DailyEntry[] = (exerciseState[STORAGE_KEY] ?? []) as DailyEntry[];
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
  const today = todayISO();
  const todayEntry = entries.find((e) => e.date === today);

  const upsert = (entry: DailyEntry) => {
    const next = entries.filter((e) => e.date !== entry.date);
    next.push(entry);
    setExercise(STORAGE_KEY, next.sort((a, b) => a.date.localeCompare(b.date)));
  };
  const remove = (date: string) => {
    setExercise(STORAGE_KEY, entries.filter((e) => e.date !== date));
  };

  // letzte 14 Tage für Diagramm
  const last14 = sorted.slice(-14);
  const chartData = last14.map((e) => ({
    date: shortDate(e.date),
    rawDate: e.date,
    Schlaf: e.schlaf,
    Anspannung: e.anspannung,
    Drang: e.drang,
  }));

  const trendCallout = useMemo(() => analyseTrend(sorted), [sorted]);

  return (
    <ExerciseFrame
      title="Mein Nervensystem-Tagebuch"
      subtitle="Trag jeden Tag deine drei Werte ein. Sichtbarkeit der eigenen Veränderung wirkt selbst regulierend (Kabat-Zinn, 1990)."
      meta="🩺 Selbst-Monitoring · ⏱ 1 Min/Tag"
      accent="sage"
    >
      {/* Diagramm */}
      <div className="rounded-xl bg-white/85 p-3 sm:p-4">
        {chartData.length === 0 ? (
          <div className="grid h-56 place-items-center rounded-lg bg-sage/5 px-4 text-center">
            <div>
              <p className="font-display text-base font-bold text-bordeaux">
                Noch keine Einträge
              </p>
              <p className="mt-1 text-xs text-graphite/65">
                Trag heute deinen ersten Wert ein – darunter siehst du dann deinen Verlauf.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-2 flex items-baseline justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-mauve">
                Verlauf · letzte {chartData.length} Tage
              </p>
              <p className="text-[11px] text-graphite/55">Skala 0–10</p>
            </div>
            <div className="h-56 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 6, right: 12, left: -16, bottom: 0 }}>
                  <defs />
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.85 0.02 60)" />
                  {/* Zonen */}
                  <ReferenceArea
                    y1={0}
                    y2={3}
                    fill="oklch(0.66 0.045 155)"
                    fillOpacity={0.08}
                  />
                  <ReferenceArea
                    y1={3}
                    y2={7}
                    fill="oklch(0.78 0.11 65)"
                    fillOpacity={0.08}
                  />
                  <ReferenceArea
                    y1={7}
                    y2={10}
                    fill="oklch(0.55 0.21 25)"
                    fillOpacity={0.08}
                  />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11, fill: "oklch(0.45 0.025 30)" }}
                    axisLine={{ stroke: "oklch(0.85 0.02 60)" }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 10]}
                    ticks={[0, 3, 7, 10]}
                    tick={{ fontSize: 11, fill: "oklch(0.45 0.025 30)" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid oklch(0.85 0.02 60)",
                      background: "white",
                      fontSize: 12,
                    }}
                  />
                  <Legend
                    iconType="circle"
                    wrapperStyle={{ fontSize: 11, paddingTop: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Schlaf"
                    stroke="oklch(0.66 0.045 155)"
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Anspannung"
                    stroke="oklch(0.7 0.085 45)"
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Drang"
                    stroke="oklch(0.395 0.075 14)"
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-wider text-graphite/55">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-sage" /> Grünzone 0–3
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-warning" /> Gelbzone 3–7
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[var(--color-sos)]" /> Rote Zone 7–10
              </span>
            </div>
          </>
        )}
      </div>

      {/* Schwellen-Callout */}
      {trendCallout && (
        <div
          className={`flex gap-3 rounded-xl border-l-4 p-3 text-sm ${
            trendCallout.kind === "warn"
              ? "border-[var(--color-sos)] bg-[var(--color-sos)]/8"
              : trendCallout.kind === "good"
                ? "border-sage bg-sage/10"
                : "border-warning bg-warning/10"
          }`}
        >
          <div className="mt-0.5 flex-shrink-0">
            {trendCallout.kind === "warn" ? (
              <AlertCircle className="h-4 w-4 text-[var(--color-sos)]" />
            ) : trendCallout.kind === "good" ? (
              <TrendingDown className="h-4 w-4 text-sage" />
            ) : (
              <TrendingUp className="h-4 w-4 text-warning" />
            )}
          </div>
          <p className="leading-snug text-graphite/85">{trendCallout.text}</p>
        </div>
      )}

      {/* Heute-Eintrag */}
      <DayForm
        key={`today-${todayEntry?.date ?? "new"}`}
        date={today}
        existing={todayEntry}
        title={todayEntry ? "Heute · bereits eingetragen" : "Heute eintragen"}
        onSave={upsert}
        onCancel={null}
      />

      {/* Liste vergangener Tage */}
      {sorted.length > 0 && (
        <div className="rounded-xl bg-white/65 p-3 sm:p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-mauve">
              Alle Einträge ({sorted.length})
            </p>
            <button
              type="button"
              onClick={() => setShowAddOther((v) => !v)}
              className="inline-flex items-center gap-1 rounded-full bg-bordeaux/10 px-2.5 py-1 text-[11px] font-semibold text-bordeaux hover:bg-bordeaux/15"
            >
              <Plus className="h-3 w-3" />
              {showAddOther ? "Schließen" : "Anderen Tag nachtragen"}
            </button>
          </div>

          {showAddOther && (
            <div className="mb-3">
              <DayForm
                date=""
                existing={undefined}
                title="Anderen Tag nachtragen"
                allowDateChange
                onSave={(e) => {
                  upsert(e);
                  setShowAddOther(false);
                }}
                onCancel={() => setShowAddOther(false)}
              />
            </div>
          )}

          <ul className="space-y-1.5">
            {[...sorted].reverse().map((e) => (
              <li
                key={e.date}
                className="flex flex-wrap items-center gap-2 rounded-lg bg-white/85 px-3 py-2 text-xs"
              >
                <span className="min-w-[64px] font-display font-bold text-bordeaux tabular-nums">
                  {shortDate(e.date)}
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-sage" /> {e.schlaf}
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-terracotta" /> {e.anspannung}
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-bordeaux" /> {e.drang}
                </span>
                {e.note && (
                  <span className="ml-1 truncate text-graphite/65 italic max-w-[200px]">
                    „{e.note}"
                  </span>
                )}
                <span className="ml-auto flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setEditing(editing === e.date ? null : e.date)}
                    className="grid h-7 w-7 place-items-center rounded-md text-graphite/55 hover:bg-bordeaux/10 hover:text-bordeaux"
                    aria-label="Bearbeiten"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Eintrag vom ${shortDate(e.date)} löschen?`)) remove(e.date);
                    }}
                    className="grid h-7 w-7 place-items-center rounded-md text-graphite/55 hover:bg-[var(--color-sos)]/10 hover:text-[var(--color-sos)]"
                    aria-label="Löschen"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </span>
                {editing === e.date && (
                  <div className="basis-full pt-2">
                    <DayForm
                      date={e.date}
                      existing={e}
                      title={`Eintrag vom ${shortDate(e.date)} bearbeiten`}
                      onSave={(updated) => {
                        upsert(updated);
                        setEditing(null);
                      }}
                      onCancel={() => setEditing(null)}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </ExerciseFrame>
  );
}

/* ─────────────── DayForm ─────────────── */
function DayForm({
  date,
  existing,
  title,
  allowDateChange = false,
  onSave,
  onCancel,
}: {
  date: string;
  existing: DailyEntry | undefined;
  title: string;
  allowDateChange?: boolean;
  onSave: (e: DailyEntry) => void;
  onCancel: (() => void) | null;
}) {
  const [d, setD] = useState(date || todayISO());
  const [schlaf, setSchlaf] = useState<number>(existing?.schlaf ?? 5);
  const [anspannung, setAnspannung] = useState<number>(existing?.anspannung ?? 5);
  const [drang, setDrang] = useState<number>(existing?.drang ?? 5);
  const [note, setNote] = useState<string>(existing?.note ?? "");

  const submit = () => {
    onSave({ date: d, schlaf, anspannung, drang, note: note.trim() || undefined });
  };

  return (
    <div className="rounded-xl border border-sage/30 bg-white/85 p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-mauve">{title}</p>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="grid h-6 w-6 place-items-center rounded-md text-graphite/55 hover:bg-black/5"
            aria-label="Schließen"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {allowDateChange && (
        <div className="mt-2">
          <label className="text-[11px] font-semibold text-bordeaux">Datum</label>
          <input
            type="date"
            value={d}
            max={todayISO()}
            onChange={(e) => setD(e.target.value)}
            className="mt-1 w-full rounded-lg border-2 border-sage/40 bg-white p-2 text-sm outline-none focus:border-sage"
          />
        </div>
      )}

      <div className="mt-3 space-y-3">
        <CompactSlider
          label="😴 Schlafqualität"
          hint="0 kaum geschlafen · 10 erholt"
          value={schlaf}
          onChange={setSchlaf}
        />
        <CompactSlider
          label="😤 Körperanspannung"
          hint="0 entspannt · 10 unter Strom"
          value={anspannung}
          onChange={setAnspannung}
        />
        <CompactSlider
          label="📱 Kontakt-Drang"
          hint="0 gar nicht · 10 übermächtig"
          value={drang}
          onChange={setDrang}
        />
      </div>

      <div className="mt-3">
        <label className="text-[11px] font-semibold text-bordeaux">
          Notiz (optional)
        </label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="z.B. Trigger heute Morgen, Spaziergang am Nachmittag …"
          className="mt-1 w-full rounded-lg border-2 border-sage/40 bg-white p-2 text-sm outline-none focus:border-sage"
        />
      </div>

      <button
        type="button"
        onClick={submit}
        className="mt-3 w-full rounded-lg bg-bordeaux py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
      >
        {existing ? "Eintrag aktualisieren" : "Eintrag speichern"}
      </button>
    </div>
  );
}

function CompactSlider({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="font-semibold text-bordeaux">{label}</span>
        <span className="font-display text-base font-bold text-sage">{value}</span>
      </div>
      <div className="grid grid-cols-11 gap-1 rounded-lg bg-sage/5 p-1.5">
        {Array.from({ length: 11 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i)}
            aria-pressed={value === i}
            className={`grid h-7 place-items-center rounded text-[11px] font-semibold transition ${
              value === i
                ? "bg-bordeaux text-white shadow-soft"
                : "bg-white text-graphite/70 hover:bg-sage/10"
            }`}
          >
            {i}
          </button>
        ))}
      </div>
      {hint && <p className="mt-1 text-[10px] text-graphite/55">{hint}</p>}
    </div>
  );
}

/* ─────────────── Trend-Analyse für Schwellen-Callout ─────────────── */
function analyseTrend(
  entries: DailyEntry[],
): { kind: "warn" | "good" | "info"; text: string } | null {
  if (entries.length < 3) return null;
  const last = entries.slice(-7);
  const avgAns = last.reduce((s, e) => s + e.anspannung, 0) / last.length;
  const avgDr = last.reduce((s, e) => s + e.drang, 0) / last.length;
  const avgSchlaf = last.reduce((s, e) => s + e.schlaf, 0) / last.length;

  if (avgAns >= 7 || avgDr >= 7) {
    return {
      kind: "warn",
      text: `Anspannung Ø ${avgAns.toFixed(1)} · Drang Ø ${avgDr.toFixed(1)} – im roten Bereich. Probier jetzt das TIPP-Skill oder Urge-Surf aus dem SOS-Drawer.`,
    };
  }
  if (entries.length >= 7) {
    const prev = entries.slice(-14, -7);
    if (prev.length >= 3) {
      const prevAns = prev.reduce((s, e) => s + e.anspannung, 0) / prev.length;
      const prevDr = prev.reduce((s, e) => s + e.drang, 0) / prev.length;
      const delta = (avgAns - prevAns + (avgDr - prevDr)) / 2;
      if (delta <= -1) {
        return {
          kind: "good",
          text: `Anspannung & Drang sinken im Wochenvergleich um Ø ${Math.abs(delta).toFixed(1)} Punkte. Dein Nervensystem reguliert sich – das ist Heilung in Daten.`,
        };
      }
      if (delta >= 1) {
        return {
          kind: "info",
          text: `Anspannung & Drang sind diese Woche um Ø ${delta.toFixed(1)} Punkte gestiegen. Was war der Auslöser? Schau dir die Notizen der letzten Tage an.`,
        };
      }
    }
  }
  if (avgSchlaf <= 3) {
    return {
      kind: "warn",
      text: `Schlafqualität Ø ${avgSchlaf.toFixed(1)} – seit ${last.length} Tagen niedrig. Schlaf ist die Grundlage jeder Regulation. Plane Ruhe heute aktiv ein.`,
    };
  }
  return null;
}
