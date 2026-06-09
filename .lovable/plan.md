
## Mapping-Hinweis

Buch-Schritt 02 (Trauma-Bonding) liegt in `src/modules/modul-01.tsx` (Off-by-one aus dem Memory-Mapping).

---

## 1) Audit: aktuelle Reihenfolge vs. Knowledge-Vorgabe

Soll-Reihenfolge (laut `chapter-element-order`): **1 Titel · 2 Einleitung · 3 Story+Bild · 4 Diagnose · 5 Lösung · 6 Deep Dive · 7 Infografik (80%) · 8 ≥3 Übungen · 9 Meditation · 10 Checkliste**.

| # | Soll | Ist (modul-01.tsx) | Status |
|---|------|--------------------|--------|
| – | (kein Bild vor Story) | „Visualisierungen"-Block mit 5 Infografiken **direkt nach Intro** | ❌ Verstoß |
| – | (Quick-Tools optional, nicht zwischen Intro & Story) | Quick-Tools-Trio nach Visualisierungen | ⚠️ Position |
| 1 | Titel | ChapterHero + ChapterIntro | ✅ |
| 2 | Einleitung | ChapterIntro mit Keywords | ✅ |
| 3 | Story + Bild links umflossen | StoryPortrait `side="left"` + Reveal-Absätze | ✅ |
| 4 | Diagnose | Accordion Skinner/Fisher/Dutton + 10 Warnsignale FlipCards | ✅ |
| 5 | Lösung | ACT-Defusion + Dopamin-Reset + CalloutBold | ✅ |
| 6 | Deep Dive | 5 FlipCards | ✅ (aber **nach** Infografik – Reihenfolge gedreht) |
| 7 | Infografik (80%, Text darunter) | InfoGraphicBlock `aspect 16/9` **vor** Deep Dive | ⚠️ Reihenfolge |
| 8 | ≥3 Übungen | 4 Übungen (Warnsignale · Rationalisierung · Jackpot · 4-7-8) | ✅ |
| 9 | Meditation | MeditationCard | ✅ |
| 10 | Checkliste | ChecklistGoals (5 Ziele) | ✅ |

---

## 2) Was die Uploads bieten, was im Modul fehlt

| Element aus `schritt-2.Traumabonding.html` / `Schritt_2.txt` | Im Modul vorhanden? | Meinung |
|---|---|---|
| Phase-Eyebrow „Phase 1 · Die Fessel verstehen" + Hero-Nummer „02" | ❌ | **Übernehmen** — schafft Orientierung im Pfad |
| Quick-Tools-Trio (Sofort-Erkenntnis · Atem 4-7-8 · Merksatz) | ✅ aus `QUICK_TOOLS_M02` | Position korrigieren (nach Intro **vor** Story ist OK, aber **kein Bild davor**) |
| Story mit Mary-Sandra-Bild links + Drop-Cap | ✅ | – |
| Diagnose-Text Skinner/Fisher/Dutton | ✅ als Accordion | – |
| Infografik „Neurobiologie der toxischen Liebe" (toxLiebe) direkt unter Diagnose, mit ausführlicher Caption (VTA · Spielautomat · Vagus-Reset) | ⚠️ liegt im oberen „Visualisierungen"-Stack, nicht inline unter Diagnose | **Inline unter Diagnose** verschieben (siehe TODO im Code Z.277) |
| 10 Warnsignale-Grid | ✅ als FlipCards | – |
| Lösung-Text ACT-Defusion + Dopamin-Reset | ✅ | – |
| Übung 1: 3 Textareas „Meine 3 klarsten Warnsignale in eigenen Worten" | ❌ (nur PillCloud + ButtonChoice) | **Hinzufügen** — gibt der Übung den im Buch vorgesehenen Schreib-Schritt |
| Übung 2: Rationalisierungskarten + Reframes („was steckt wirklich dahinter") + freie Textarea | ⚠️ ButtonChoice + Reflection3Step, aber **Reframes** fehlen | **Reframe-Texte** ergänzen (Karte zeigt Rationalisierung → Tap zeigt ACT-Reframe) |
| Übung 3: Jackpot-Wheel-SVG (4 Stages: Kälte · Sehnsucht · Jackpot · Dopamin · ♾️) + 3 Jackpot-Momente + Muster-Frage | ⚠️ StackedCards vorhanden, **Wheel-Visualisierung & Muster-Textarea** fehlen | **Wheel als brand-styled Komponente** + Muster-Textarea ergänzen |
| Übung 4: 4-7-8 Atem | ✅ via `BreathPacer` | – |
| Extinction-Burst (animierte Diagnose-Box) | ❌ | **Nicht übernehmen** — doppelt zu Lösung/Deep Dive, eher Inhalt für Modul 04 (No Contact) |
| Rückfall-Ampel (grün/gelb/rot, interaktiv) | ❌ | **Nicht übernehmen** — gehört thematisch zu Modul „Suchtmuster brechen" (Buch-Schritt 07) |
| Cue-Audit Mapper | ❌ | **Nicht übernehmen** — gehört zu Dopamin-Reset Praxis = passt besser in Modul 04/05 |
| Deep-Dive-Text Fisher/Skinner/Langeslag/Grant | ✅ als FlipCards | – |
| Meditation „Lass los" (Kempermann, YouTube) | ✅ | – |
| 5 Transformationsziele | ✅ identisch | – |

---

## 3) Geplante Änderungen an `src/modules/modul-01.tsx`

1. **„Visualisierungen"-Block entfernen** (Z. 88–97). Verstößt gegen „kein Bild vor Story". Die einzelne wichtige Infografik (`infoToxliebe`) wird stattdessen inline unter die Diagnose-Accordion verschoben — 80 % Breite, Caption mit Vagus-Reset-Hinweis darunter (ersetzt den TODO bei Z. 277).
2. **Quick-Tools-Trio** bleibt direkt nach Intro (vor Story) — keine Bilder davor, also regelkonform.
3. **Reihenfolge tauschen**: Deep Dive **vor** Infografik `trauma-bonding-kreislauf` rücken, damit die Vorgabe „7. Infografik mit Erklärung" nach dem Deep Dive sitzt. Caption-Text wird zur didaktischen Erklärung ausgebaut.
4. **Hero**: Eyebrow „Phase 1 · Die Fessel verstehen" + große „02"-Nummer ergänzen (über `ChapterHero` props oder im JSX direkt darüber).
5. **Übung 1**: Unter PillCloud drei `Reflection3Step`-Felder „Meine 3 klarsten Warnsignale in eigenen Worten" anhängen.
6. **Übung 2**: Aus den 10 Rationalisierungen werden Flip-/Reveal-Karten mit ACT-Reframe auf der Rückseite (z. B. „Sie hatte eine schwere Kindheit" → „Mitgefühl ersetzt nicht Sicherheit"). Bestehende `ButtonChoice` + `Reflection3Step` bleiben darunter.
7. **Übung 3**: Neue kleine Komponente `JackpotWheel` (SVG, 4 Stages im Kreis, brand-tokens), darunter die bestehenden StackedCards. Zusätzliche Textarea „Was erkennst du in deinem persönlichen Muster?".
8. **Keine** Übernahme von Extinction-Burst, Rückfall-Ampel, Cue-Audit Mapper (gehören thematisch in spätere Module).

Alle Inhalte bleiben textlich nahe am Buch (Mary-Sandra-Story, Skinner/Fisher/Dutton, ACT-Defusion). Persistenz weiter über `useModuleProgress("modul-01")` / `unbond_m01_*`.

---

## Hinweis vor Implementierung

Soll ich die ACT-Reframes (Übung 2) und den Wheel (Übung 3) direkt umsetzen, oder willst du die Reframe-Texte vorab gegenlesen? Sonst formuliere ich sie selbst aus dem ACT-Defusion-Stil des Buchs.
