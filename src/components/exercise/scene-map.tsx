import { useState, useRef } from "react";
import { Plus, X, MapPin } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

/**
 * Szene-Karte · interaktives Drag&Drop-Pin-Board.
 * Drei Zonen (Grün/Gelb/Rot). Nutzerin legt eigene Orte an, zieht sie zwischen
 * Zonen oder positioniert sie frei in der jeweiligen Zone (x/y in %).
 * Speichert in exercise_state unter "scene_pins" (Array) — Übung ist autosaved.
 */

type Zone = "green" | "yellow" | "red";
type Pin = {
  id: string;
  label: string;
  zone: Zone;
  x: number; // 0-100 (% innerhalb Zone)
  y: number; // 0-100
};

const ZONES: { id: Zone; title: string; hint: string; bg: string; ring: string; dot: string }[] = [
  {
    id: "green",
    title: "🟢 GRÜN · Sichere Räume",
    hint: "Hier triffst du sie garantiert nicht — dein Nervensystem darf hier ruhen.",
    bg: "bg-emerald-50/70",
    ring: "ring-emerald-300/60",
    dot: "bg-emerald-500",
  },
  {
    id: "yellow",
    title: "🟡 GELB · Riskante Räume",
    hint: "Begegnung möglich — Grey-Rock-Skript bereithalten, Exit kennen.",
    bg: "bg-amber-50/70",
    ring: "ring-amber-300/60",
    dot: "bg-amber-500",
  },
  {
    id: "red",
    title: "🔴 ROT · Meiden",
    hint: "Ihr Territorium · Flying-Monkey-Zonen · gerade nicht dein Ort.",
    bg: "bg-rose-50/70",
    ring: "ring-rose-300/60",
    dot: "bg-rose-500",
  },
];

export function SceneMap({
  slug,
  title = "Übung 1 · Meine Szene-Karte",
  subtitle = "Lege Orte an (Bar, Arbeit, Yoga, Heimweg) und ziehe sie in die Zone, die sich heute richtig anfühlt. Du kannst Pins auch innerhalb einer Zone frei positionieren.",
  meta = "🗺 Drag & Drop · ~10 Min",
  accent = "sage",
}: {
  slug: string;
  title?: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  const [newLabel, setNewLabel] = useState("");
  const [newZone, setNewZone] = useState<Zone>("green");
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const zoneRefs = useRef<Record<Zone, HTMLDivElement | null>>({
    green: null,
    yellow: null,
    red: null,
  });

  if (!loaded) return null;

  const pins: Pin[] = Array.isArray(exerciseState["scene_pins"])
    ? (exerciseState["scene_pins"] as Pin[])
    : [];

  const persist = (next: Pin[]) => setExercise("scene_pins", next);

  const addPin = () => {
    const label = newLabel.trim();
    if (!label) return;
    const next: Pin = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      label,
      zone: newZone,
      x: 20 + Math.random() * 60,
      y: 25 + Math.random() * 50,
    };
    persist([...pins, next]);
    setNewLabel("");
  };

  const removePin = (id: string) => persist(pins.filter((p) => p.id !== id));

  const onDragStart = (e: React.DragEvent, id: string) => {
    setDraggingId(id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
  };

  const onDrop = (e: React.DragEvent, zone: Zone) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain") || draggingId;
    if (!id) return;
    const target = zoneRefs.current[zone];
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = Math.max(4, Math.min(96, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(8, Math.min(92, ((e.clientY - rect.top) / rect.height) * 100));
    persist(pins.map((p) => (p.id === id ? { ...p, zone, x, y } : p)));
    setDraggingId(null);
  };

  // Mobile fallback: Tap auf Pin → Zonen-Wechsler-Buttons
  const cyclePinZone = (id: string) => {
    persist(
      pins.map((p) => {
        if (p.id !== id) return p;
        const order: Zone[] = ["green", "yellow", "red"];
        const next = order[(order.indexOf(p.zone) + 1) % order.length];
        return { ...p, zone: next };
      }),
    );
  };

  const counts = {
    green: pins.filter((p) => p.zone === "green").length,
    yellow: pins.filter((p) => p.zone === "yellow").length,
    red: pins.filter((p) => p.zone === "red").length,
  };

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      {/* Pin-Eingabe */}
      <div className="rounded-xl bg-white/80 p-3 shadow-sm">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-bordeaux">
          Neuen Ort hinzufügen
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addPin()}
            placeholder="z.B. Heimweg über Karl-Marx-Str., Yoga-Studio, Bar XY"
            className="flex-1 rounded-lg border-2 border-sage/30 bg-white px-3 py-2 text-sm outline-none transition focus:border-sage"
          />
          <select
            value={newZone}
            onChange={(e) => setNewZone(e.target.value as Zone)}
            className="rounded-lg border-2 border-sage/30 bg-white px-3 py-2 text-sm outline-none focus:border-sage"
          >
            <option value="green">🟢 Grün</option>
            <option value="yellow">🟡 Gelb</option>
            <option value="red">🔴 Rot</option>
          </select>
          <button
            type="button"
            onClick={addPin}
            disabled={!newLabel.trim()}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-bordeaux px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-bordeaux/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus className="h-4 w-4" />
            Pin
          </button>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-graphite/65">
          Ziehe Pins zwischen Zonen oder innerhalb einer Zone. Auf dem Handy: tippe einen Pin an, um die Zone zu wechseln.
        </p>
      </div>

      {/* Drei Zonen */}
      <div className="grid gap-3 sm:grid-cols-3">
        {ZONES.map((z) => {
          const zonePins = pins.filter((p) => p.zone === z.id);
          return (
            <div
              key={z.id}
              ref={(el) => { zoneRefs.current[z.id] = el; }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDrop(e, z.id)}
              className={`relative min-h-[180px] rounded-2xl ${z.bg} p-3 ring-2 ${z.ring} transition ${
                draggingId ? "ring-4" : ""
              }`}
            >
              <div className="mb-1 flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-bordeaux">
                  {z.title}
                </h4>
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${z.dot} text-[10px] font-bold text-white`}>
                  {counts[z.id]}
                </span>
              </div>
              <p className="mb-3 text-[11px] leading-snug text-graphite/70">{z.hint}</p>
              {zonePins.length === 0 && (
                <div className="absolute inset-x-3 bottom-3 rounded-lg border-2 border-dashed border-graphite/20 py-4 text-center text-[11px] text-graphite/40">
                  Pin hierher ziehen
                </div>
              )}
              {zonePins.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  draggable
                  onDragStart={(e) => onDragStart(e, p.id)}
                  onClick={() => cyclePinZone(p.id)}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
                  title="Klick: Zone wechseln · Ziehen: frei positionieren"
                >
                  <div className="flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-bordeaux shadow-md ring-2 ring-white/80 transition group-hover:scale-105">
                    <MapPin className={`h-3 w-3 ${z.id === "green" ? "text-emerald-600" : z.id === "yellow" ? "text-amber-600" : "text-rose-600"}`} />
                    <span className="max-w-[110px] truncate">{p.label}</span>
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label="Pin entfernen"
                      onClick={(e) => {
                        e.stopPropagation();
                        removePin(p.id);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          removePin(p.id);
                        }
                      }}
                      className="ml-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full text-graphite/40 transition hover:bg-rose-100 hover:text-rose-600"
                    >
                      <X className="h-3 w-3" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          );
        })}
      </div>

      {pins.length === 0 && (
        <p className="rounded-lg bg-sage/10 p-3 text-center text-xs text-graphite/70">
          ✨ Starte mit 3–5 Orten aus deinem Alltag: Heimweg, Arbeit, dein liebstes Café, ihre Stamm-Bar.
        </p>
      )}
    </ExerciseFrame>
  );
}
