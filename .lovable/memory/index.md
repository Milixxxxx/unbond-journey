# UNBOND – Breaking Chains · Loveable System Prompt

# Version: 2.0 · Stand: April 2026

---

## KERNREGEL: Single Source of Truth

Die einzige Wahrheitsquelle für ALLE Buchinhalte ist:
`.lovable/source/UNBOND_Final_v5.html`

Alle anderen Entwürfe, Drafts und Vorgängerversionen werden ignoriert.

---

## ANONYMISIERUNG – HARTE REGEL, KEINE AUSNAHMEN

**Milena → Mary | Silke → Sandra**

Diese Anonymisierung gilt in JEDER Story-Passage, JEDER Übung, JEDEM
Beispiel, JEDEM Kommentar, JEDEM Dateinamen. Niemals rückgängig machen.
Niemals den echten Namen verwenden, auch nicht versehentlich.

---

## TECHNIK-STACK

- Framework: **React**
- Datenbank & Auth: **Supabase** (kein localStorage, kein sessionStorage)
- Design-System: gesondert hinterlegt – nicht hier definieren, immer
  aus dem Design-System-File lesen
- Interaktivität: React-State für UI-Zustand; Supabase für
  persistierte Nutzerdaten (Journaling, Checkboxen, Fortschritt)

---

## KAPITELSTRUKTUR (final, nach Zusammenführung 01+02)

**SOS-Modul** (Freebee / Lead-Magnet / Floating Drawer)
Slug: `sos-soforthilfe` · Permanent erreichbar aus jedem Kapitel
Inhalt: nur Werkzeuge, keine Theorie (siehe unten)

| Nr      | Titel                          | Kernthema                                                         |
| ------- | ------------------------------ | ----------------------------------------------------------------- |
| 01      | SOS & Trauma-Bonding verstehen | Neurobiologie, kPTBS, Spielautomat-Effekt, 4-Phasen-Zyklus        |
| 02      | Die Rosa-Brille abnehmen       | Kognitive Dissonanz, Negative Reappraisal, Entzauberung           |
| 03      | No Contact                     | Entzug als medizinische Notwendigkeit, Suchtmuster brechen        |
| 04      | Trigger entmachten             | Trigger-Landkarte, Reiz-Reaktions-Unterbrechung, STOP             |
| 05      | Der Körper zuerst              | Polyvagal-Theorie, somatische Übungen, Fenster der Toleranz       |
| 06      | Suchtmuster brechen            | Dopamin-Loop, Ersatzhandlungen, Rückfallprävention                |
| 07      | WLW-Dynamiken                  | Queere Spezifika, enge Community, U-Hauling, weaponized Queerness |
| 08      | Bindungsmuster & Inneres Kind  | Bindungsstile, Anxious-Avoidant Trap, Reparenting                 |
| 09      | Identität & Zukunft            | Self-Expansion, Werte, neue Identität jenseits der Beziehung      |
| 10      | Abschluss & Integration        | Kintsugi, Brief, Ritual, Transformationsrückblick                 |
| Bonus D | Behörden als Waffe             | Litigation Abuse, Dokumentation, rechtliche Absicherung           |
| Bonus E | Das Warum hinter dem Warum     | Schema-Therapie, IFS, Bindungstheorie                             |
| Bonus F | Ankommen in der Trauer         | Disenfranchised Grief, queerspezifische Trauer                    |

**Bonus D/E/F sind gesperrt.** Freischaltung via Code-Modal.
Freischalt-Code: `UNBOND-COMPLETE-2025`

---

## SOS-MODUL – Inhalt (vollständig)

Funktion: Freebee + permanenter Anker via SOS-Floating-Button
Erreichbar aus jedem Kapitel als Drawer/Overlay

Enthält NUR:

1. Mary & Sandra Story (Eröffnungsszene, 1:1 verbatim aus Leitdatei)
2. Nervensystem-Check (Tap-Skala 0–10, 3 Items)
3. Notfall-Kontaktliste (Telefonseelsorge 0800 111 0 111 etc.)
4. TIPP-Skill (Temperature / Intense exercise / Paced breathing / Progressive relaxation)
5. STOPP-Übung (mentale Notbremse)
6. 5-4-3-2-1 Grounding (Supermarkt-Version)
7. Urge Surfing Kurzversion

Theorie-Inhalte aus altem Kapitel 0 wurden umverteilt:

- Dopamin/Neurobiologie → Kapitel 01
- Polyvagal-Theorie → Kapitel 05
- Sucht-Vertiefung → Kapitel 06
- ACT-Inhalte → nach Absprache mit User

---

## ARBEITSWEISE – VERBINDLICH

### Kapitel-Reihenfolge

- Immer ein Kapitel auf einmal
- Warten auf explizite User-Freigabe vor dem nächsten Kapitel
- Kapitel 03–10 + Bonus bleiben gesperrt bis freigegeben
- Bei Fragen immer **3 konkrete Optionen** anbieten

### Inhaltsübertragung

- Story-Passagen (Mary & Sandra): **1:1 verbatim** aus der Leitdatei –
  keine Kürzung, keine Paraphrasierung, keine Zusammenfassung
- Wissenschaftliche Inhalte, Übungen, Quellen: ebenfalls 1:1 übernehmen
- **Textlastige Passagen** werden interaktiv aufgearbeitet –
  konkrete Methode **vorher mit User abstimmen**, nicht selbstständig entscheiden
  (Optionen z.B.: Swipe-Cards, Accordion, Progressive Disclosure,
  Highlight-Quiz, Animated Scroll)

---

## PFLICHT-ELEMENTE PRO KAPITEL

Jedes Kapitel enthält diese Elemente – kein Element darf fehlen:

1. **Mary & Sandra Story** – 3 Absätze, konkrete Szene, emotionale Tiefe
2. **Einführungstext** – mind. 5 Abschnitte, Kernaussage klar, wichtige Begriffe hervorgehoben
3. **Wissenschaftliche Grundlage** – mind. 3 Konzepte mit Quellen
4. **Infografiken** – mind. 1–2 pro Kapitel, Beschriftung linksbündig darunter
5. **Übungen** – mind. 3 pro Kapitel (Was / Wie / Dauer / Format / Warum)
6. **Reflexionsfrage** – 1 Frage pro Kapitel, Eingabefeld
7. **Transformationsziele** – 5 Ziele, mind. 3 von 5 müssen erreicht sein

---

## 8-PUNKTE QA-WORKFLOW (nach jedem Kapitel-Build)

1. Alle 7 Pflicht-Elemente vorhanden?
2. Mary & Sandra Story 1:1 aus Leitdatei übernommen – keine Kürzung?
3. Keypoints des Kapitels als Einleitungssätze vorne zusammengefasst?
4. Alle Aussagen wissenschaftlich belegt (Quellen genannt)?
5. Interaktivität implementiert + konkreter neuer Vorschlag für nächste Iteration?
6. Abgleich mit Mini-Tools (Notion: https://www.notion.so/webApps-2eb4ac5f437580d7995be0bf07399f01) – welche WebApps einsetzbar?
7. Transformationsziele helfen die Transformationsanforderungen umzusetzen?
8. Gamification-Logik korrekt implementiert (Sternchen → Supabase)?

---

## GAMIFICATION-SYSTEM

- Jedes erreichte Transformationsziel = 1 Stern → in Supabase persistiert
- Gesammelte Sterne → später eintauschbar gegen Kronen / Abzeichen
- Bonuskapitel-Freischaltung via Supabase-Flag nach Code-Eingabe
- Supabase-Tabellen: `user_progress`, `chapter_goals`, `unlock_codes`
- Stern-Counter pro Kapitel sichtbar in Navigation

---

## MOBILE-INTERAKTION

Schieberegler sind auf Mobile zu umständlich → nicht verwenden.

Bevorzugte Alternativen:

- **Tap-Skala** (0–10 Buttons, nebeneinander) – Standard für Bewertungen
- **Emoji-Skala** (5 Stufen: 😣 😟 😐 🙂 😊) – für emotionale Selbsteinschätzung
- Beide Varianten vor Implementierung mit User abstimmen

---

## NICHT ERLAUBT OHNE EXPLIZITE FREIGABE

- Kapitel umbenennen
- Kapitel umstrukturieren oder neu sortieren
- Story-Passagen kürzen oder paraphrasieren
- Transformationsziele ändern
- Design-System-Variablen überschreiben
- Neue Kapitel hinzufügen
- Bonuskapitel ohne Code freischalten

---

## PRODUKT-KONTEXT

Verkauf über Copecart:

- Core (Kapitel 01–10): https://copecart.com/products/56b047e4/checkout · 29 € EB / 49 € reg.
- Complete (+ Bonus D/E/F): https://copecart.com/products/8135e2ac/checkout · 45 € EB / 69 € reg.
- Bundle (nur Bonus): https://copecart.com/products/ad1d8a74/checkout · 19 € EB / 29 € reg.
  Early Bird bis 29. April 2026.
