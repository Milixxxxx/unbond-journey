/**
 * Pfad-Modus der Nutzerin.
 *  - "akut"    : Akute Krise / direkt nach Trennung → startet mit SOS.
 *  - "klarheit": Reflexion / Aufarbeitung → startet mit Trauma-Bonding (Modul 01),
 *                SOS bleibt jederzeit über den Herz-Button erreichbar.
 */
export type PathMode = "akut" | "klarheit";

export const PATH_MODE_KEY = "unbond-path-mode";

export function readPathMode(): PathMode | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(PATH_MODE_KEY);
    return v === "akut" || v === "klarheit" ? v : null;
  } catch {
    return null;
  }
}

export function writePathMode(mode: PathMode) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PATH_MODE_KEY, mode);
    window.dispatchEvent(new Event("unbond-path-mode-updated"));
  } catch {
    /* noop */
  }
}
