

## Modul 08 · Bindungsmuster & Inneres Kind

**Quelle:** UNBOND_Final_v5.html → Schritt 09 (Zeilen 3942–4060)
**Meditation-ID (Memory-bestätigt):** `fXObOa9E_X4` — "Heile dein inneres Kind im Schlaf"
**Position im roten Faden:** Phase 4 · Identitätsrekonstruktion. Nach 07 (WLW-Realität, äußere Schutzarchitektur) wendet sich 08 nach innen: Warum bist du in genau diese Bindung geraten? Es bildet die Brücke zu 09 (Identität neu bauen) und 10 (Kintsugi).

### Roter Faden des Kapitels

```text
Erkennen (mein Stil)  →  Diagnostizieren (Mary↔Sandra-System)  →  Vergeben (Reactive Abuse)
                                  ↓
              Umlernen (Opposite Action somatisch verankert)
                                  ↓
                  Reparenten (das innere Kind hören)
```

### Keywords (für ChapterIntro)
Anxious-Avoidant-Trap · Reactive Abuse · Opposite Action · Inneres Kind · Reparenting · Desorganisierte Bindung · Selbstmitgefühl

### Sektionen (Pflicht-Reihenfolge)

1. **ChapterIntro** — Keywords + 2 Absätze ("weise Freundin"-Ton)
2. **Story** — Mary auf dem Boden mit den Chatverläufen (1:1 aus Quelle, gekürzt + emotional verdichtet)
3. **Diagnose · Anxious-Avoidant-Trap** — `CalloutBold kind="science"` + 4 `FlipCard`s für die vier Bindungsstile (Sicher / Anxious / Avoidant / Desorganisiert) mit Klick-Hinweis (Memory-Regel)
4. **Mary↔Sandra · Das System** — neue Mini-Komponente *AttachmentDance*: zwei animierte Kreise (Mary anxious / Sandra avoidant), die sich annähern → einer flieht → beide eskalieren. Click-to-replay. Visualisiert den Tanz, den 90 % aller Leserinnen wiedererkennen.
5. **Lösung · Opposite Action somatisch** — Erklärtext + somatischer Anker (3-Schritt-Atemleitung)
6. **Übungen** (3 Stück, alle persistent gespeichert):
   - **Ü1 · Bindungsstil-Selbsttest** *(neue Komponente `AttachmentStyleQuiz`)* — 8 Aussagen, Likert 1–5, errechnet dominanten Stil (Anxious/Avoidant/Disorganized/Secure) + Kurzbeschreibung. Vibe-Check.
   - **Ü2 · Reactive-Abuse-Reframe** *(neue Komponente `ReactiveAbuseReframe`)* — 3-Spalten-Karte: "Was ich tat (Scham)" → "Was sie davor tat (Kontext)" → "Die radikale Vergebung". Generiert eine speicherbare "Vergebungs-Karte" mit Datum.
   - **Ü3 · Brief ans innere Kind** *(neue Komponente `InnerChildLetter`)* — geführter Mini-Editor mit 4 Anstoß-Sätzen ("Liebes kleines Ich, ich sehe, dass du …", "Du musstest lernen, dass …", "Heute verspreche ich dir …", "Du bist sicher, weil …"). Wird als versiegelter Brief mit Wachs-Siegel-Animation abgespeichert.
7. **Deep Dive** — `CalloutBold kind="deepdive"` mit Linehan, Porges, Levine, Neff (1:1 aus Quelle paraphrasiert)
8. **Reflexion** — `Reflection3Step` (2 Fragen): "Welcher kindliche Moment taucht hoch, wenn du an dein Protestverhalten denkst?" + "Welche Worte hat dein inneres Kind nie gehört, die es heute von dir braucht?"
9. **Meditation** — `MeditationCard` mit YouTube-ID `fXObOa9E_X4`
10. **TransformationGoals** — 5 Ziele aus Quelle (g9-1 bis g9-5)

### Neue Komponenten (3)

| Komponente | Zweck | Persistenz |
|---|---|---|
| `AttachmentDance` (`src/components/exercise/attachment-dance.tsx`) | Animierte Visualisierung des Anxious-Avoidant-Tanzes (Mary/Sandra) — keine Speicherung, rein didaktisch mit Replay-Button | nein |
| `AttachmentStyleQuiz` (`src/components/exercise/attachment-style-quiz.tsx`) | 8-Item-Likert-Quiz → Bindungsstil-Auswertung mit Erklärung | `useModuleProgress` |
| `ReactiveAbuseReframe` (`src/components/exercise/reactive-abuse-reframe.tsx`) | 3-Spalten-Reframing zur Vergebung, generiert "Vergebungs-Karte" | `useModuleProgress` |
| `InnerChildLetter` (`src/components/exercise/inner-child-letter.tsx`) | 4-Felder-Brief mit Wachs-Siegel-Versiegelung (Hover-State zeigt Datum) | `useModuleProgress` |

### Vibe-Check Micro-Interactions (sparsam)
- Bindungsstile-FlipCards mit Hand-Icon (Memory-Regel: einheitliches Klick-Indicator-Design)
- AttachmentDance: weiche, ruhige Animation (kein Kitsch) — auto-pause nach 3 Loops, sonst überfordernd
- Brief ans innere Kind: beim Speichern erscheint Wachs-Siegel mit Schimmer-Animation (1× , dann statisch)
- Ziele-Checkbox Modul 08 löst sanftes Sage-Glow aus (consistent mit anderen Modulen)

### App-Integration

| Datei | Änderung |
|---|---|
| `src/modules/modul-08.tsx` | **NEU** (ersetzt Stub) — komplettes Kapitel |
| `src/components/exercise/index.ts` | Exports der 4 neuen Komponenten |
| `src/lib/modules.ts` | `modul-08`: `available: false` → `true`, Subtitle bereits gut, optional verfeinert |
| `src/routes/modul.$slug.tsx` | Bereits dynamisch — keine Änderung nötig (zu prüfen) |

### Tonfall-Beispiel (Diagnose-Einleitung)
> Was du in dir „hysterisch" genannt hast, war biologische Notwehr. Du warst nicht zu viel — du warst die Eine, die noch atmen wollte, während dir systematisch die Luft abgedreht wurde. Lass uns anschauen, warum dein Körper genau so reagieren musste.

### Was ich NICHT tue (Memory & Konsistenz)
- Keine Erfindung von Studien — alle Zitate (Linehan, Porges, Levine, Neff, Bowlby) stammen aus der Quelldatei
- Keine Buttons mit `rounded-full` außer Tags/Pills (Memory: `rounded-md` Buch-Standard)
- Keine Veränderung der Kapitelstruktur oder -reihenfolge
- Keine Pop-Therapie-Vereinfachungen — desorganisierter Bindungsstil wird respektvoll erklärt

### Aufgaben (sequenziell)
1. `AttachmentDance` bauen (CSS-Animation, kein externes lib)
2. `AttachmentStyleQuiz` bauen (Likert-Pattern aus `LikertScale` recyceln)
3. `ReactiveAbuseReframe` bauen (3 Textareas + Karten-Render)
4. `InnerChildLetter` bauen (4 Felder + Siegel-SVG)
5. `index.ts` aktualisieren
6. `modul-08.tsx` schreiben
7. `modules.ts` auf `available: true`
8. End-to-end im Preview testen

