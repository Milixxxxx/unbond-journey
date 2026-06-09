## Plan

### 1) Hauptnavigation kürzen
In `src/components/site-header.tsx` bleiben nur noch zwei Einträge:

- **Dashboard**
- **Inhalt**

Entfernt werden: Vorwort · Einleitung & Marys Story · Profil.

### 2) Vorwort / Einleitung weiter erreichbar machen
Damit niemand das Vorwort/die Einleitung verliert, werden sie aus dem **Inhaltsverzeichnis (`/inhalt`)** verlinkt — ganz oben als „Bevor du anfängst"-Block mit zwei Karten:

- Vorwort (Milena + Gedicht)
- Einleitung & Marys Story

So bleibt die Top-Nav schlank, aber die Bereiche sind über einen klaren Ort (Inhaltsverzeichnis) und zusätzlich über die bestehenden Vor/Zurück-Buttons innerhalb der Seiten erreichbar. Routen selbst bleiben unverändert (`/vorwort`, `/einleitung`).

### 3) Profil
Aktuell ist `/einstellungen` ein leerer „Gastmodus"-Platzhalter — kein Login, keine Daten, kein Export. Ich empfehle den Eintrag **aus der Top-Nav zu entfernen** (Teil von Schritt 1). Die Route selbst lasse ich vorerst stehen, damit später ohne Bruch reaktiviert werden kann.

### 4) Wie wird der Fortschritt aktuell gespeichert?
Aktuell **vollständig im Browser via `localStorage`**:

- `use-journey-progress` (Transformationsziele Dashboard-Pfad)
- `use-module-progress` (Kapitel-Fortschritt, Übungseingaben)
- `use-detox-counter`, `use-bonus-unlock`, `path-mode`, `selbstcheck`

**Konsequenzen, die die Nutzerin kennen sollte:**

- ✅ Sofort nutzbar, kein Login, datenschutzfreundlich (nichts verlässt das Gerät).
- ❌ Wechsel auf ein anderes Gerät / anderen Browser = Fortschritt weg.
- ❌ Inkognito-Modus / Browser-Daten löschen = Fortschritt weg.
- ❌ Kein Schutz vor versehentlichem Verlust, kein Export.

**Klug für diese Inhalte?** Für ein Buch mit *intimen Reflexionen zu toxischen Beziehungen* hat localStorage tatsächlich einen großen Vorteil: **Nichts liegt auf einem Server, niemand kann mitlesen.** Das passt zum Thema. Der Preis ist die fehlende Geräte-Synchronisation.

### Drei Optionen für die Speicherung — bitte wähle:

1. **Lokal bleiben (Empfehlung für Launch)** + sichtbarer „Fortschritt exportieren / importieren"-Button in den Einstellungen (JSON-Datei). Maximale Privatsphäre, einfacher Backup-Weg.
2. **Optionales Cloud-Konto** über Lovable Cloud: Wer will, loggt sich ein und synchronisiert verschlüsselt; wer nicht, bleibt lokal. Mehr Aufwand, aber Geräte-übergreifend.
3. **Alles vorerst so lassen** wie jetzt (nur localStorage, kein Export). Schnellster Weg, aber Risiko bleibt.

### Dateien, die in Schritt 1+2 angefasst werden
- `src/components/site-header.tsx` — Nav reduzieren.
- `src/routes/inhalt.tsx` — „Bevor du anfängst"-Block mit Vorwort + Einleitung ergänzen.
