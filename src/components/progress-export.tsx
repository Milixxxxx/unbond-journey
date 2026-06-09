import { useRef, useState } from "react";
import { Download, Upload, ShieldCheck, Check } from "lucide-react";

const APP_KEY_PREFIXES = [
  "use-journey-progress",
  "use-module-progress",
  "use-detox-counter",
  "use-bonus-unlock",
  "path-mode",
  "selbstcheck",
  "unbond:",
];

function collectAppData() {
  const data: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;
    if (APP_KEY_PREFIXES.some((p) => key === p || key.startsWith(p))) {
      const v = localStorage.getItem(key);
      if (v !== null) data[key] = v;
    }
  }
  return data;
}

export function ProgressExport() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const onExport = () => {
    const payload = {
      app: "UNBOND",
      version: 1,
      exportedAt: new Date().toISOString(),
      data: collectAppData(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const stamp = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `unbond-fortschritt-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setStatus("Fortschritt heruntergeladen.");
    setTimeout(() => setStatus(null), 3000);
  };

  const onImportFile = async (file: File) => {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const data = parsed?.data;
      if (!data || typeof data !== "object") {
        setStatus("Datei nicht erkannt. Bitte UNBOND-Export auswählen.");
        return;
      }
      const ok = window.confirm(
        "Aktuellen Fortschritt mit der Datei überschreiben? Das kann nicht rückgängig gemacht werden.",
      );
      if (!ok) return;
      let count = 0;
      for (const [k, v] of Object.entries(data)) {
        if (typeof v === "string") {
          localStorage.setItem(k, v);
          count++;
        }
      }
      setStatus(`${count} Einträge wiederhergestellt. Seite wird neu geladen…`);
      setTimeout(() => window.location.reload(), 1200);
    } catch {
      setStatus("Datei konnte nicht gelesen werden.");
    }
  };

  return (
    <section className="glass-card p-5 animate-fade-in">
      <div className="mb-3 flex items-center gap-2 text-bordeaux">
        <ShieldCheck className="h-4 w-4" />
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">
          Dein Fortschritt
        </h2>
      </div>

      <p className="text-sm text-graphite/80">
        Alles, was du in UNBOND eingibst — Übungen, Reflexionen, dein Pfad —
        bleibt <strong>nur auf diesem Gerät</strong> in deinem Browser.
        Nichts wird auf einen Server geladen, niemand kann mitlesen.
      </p>

      <div className="mt-3 rounded-lg border border-mauve/25 bg-mauve/5 p-3 text-xs leading-relaxed text-graphite/80">
        <strong className="text-mauve">Was das bedeutet:</strong> Wenn du
        den Browser-Cache löschst, in den Inkognito-Modus wechselst oder ein
        anderes Gerät benutzt, ist dein Fortschritt weg. Lade dir
        regelmäßig eine Sicherung herunter — z.B. einmal pro Woche.
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={onExport}
          className="flex items-center justify-center gap-2 rounded-lg bg-bordeaux px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-bordeaux/90"
        >
          <Download className="h-4 w-4" />
          Fortschritt sichern
        </button>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="flex items-center justify-center gap-2 rounded-lg border border-bordeaux/40 bg-white px-4 py-2.5 text-sm font-semibold text-bordeaux transition hover:bg-bordeaux/5"
        >
          <Upload className="h-4 w-4" />
          Sicherung einspielen
        </button>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="application/json,.json"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onImportFile(f);
          e.target.value = "";
        }}
      />

      {status && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-sage">
          <Check className="h-3.5 w-3.5" /> {status}
        </p>
      )}
    </section>
  );
}
