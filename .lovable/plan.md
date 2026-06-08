## Diagnose

Im Code (`src/routes/routing.tsx`) ist die Weiter-Logik technisch korrekt:

```ts
const currentComplete =
  (answers[current.id]?.length ?? 0) === current.questions.length &&
  (answers[current.id] ?? []).every((v) => v >= 1 && v <= 4);
```

Der Button ist `disabled={!currentComplete}`. Auf dem Screenshot ist auch keine der 12 Polyvagal-Antworten ausgewählt (kein Bordeaux-Highlight) — d.h. der Weiter-Button ist **bewusst deaktiviert**, weil noch nicht alle 3 Polyvagal-Fragen beantwortet sind. Das einzige visuelle Signal dafür ist `opacity-40`, was bei dem mauve-rosa Button auf cremefarbenem Hintergrund kaum erkennbar ist. Daher der Eindruck: "Klick passiert, aber Weiter macht nichts."

Es ist also **kein State-Bug, sondern ein UX-Problem**: zu schwaches Feedback, was fehlt.

## Fix

Minimale, gezielte Verbesserungen in `src/routes/routing.tsx` — nur Frontend, keine Logikänderung an `selbstcheck.ts`:

1. **Pro-Frage-Status sichtbar machen**  
   Neben jeder Fragenummer einen kleinen Status zeigen:
   - unbeantwortet: gepunkteter Kreis + "noch offen" in `graphite/55`
   - beantwortet: gefüllter Sage-Punkt + "beantwortet" in `sage`
   So sieht die Nutzerin sofort, welche Fragen noch fehlen.

2. **Stärkeres Disabled-Styling für Weiter**  
   - Klar grau statt mauve-mit-Opacity (z.B. `bg-graphite/15 text-graphite/55 border border-graphite/20`)
   - `cursor-not-allowed`

3. **Inline-Hinweis bei deaktiviertem Weiter**  
   Direkt unterhalb der Button-Zeile (nur wenn `!currentComplete`):  
   *"Beantworte alle 3 Fragen, um weiterzugehen — `{offene}` noch offen."*  
   In `text-[11px] text-bordeaux/75`.

4. **Smooth Scroll nach oben bei Step-Wechsel**  
   `useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [step])` — damit nach Klick auf Weiter sichtbar wird, dass das neue Konzept geladen ist (zusätzlicher Schutz gegen den "passiert nichts"-Eindruck, falls die Nutzerin doch alle 3 beantwortet hat).

5. **Gleiche Logik für "Auswerten"-Button** auf dem letzten Step: Hinweis "Es fehlen noch `N` Antworten in `{Konzeptliste}`".

## Nicht-Ziel

- Keine Änderung der Scoring-Logik, der Fragen, der Ampel oder der Persistenz.
- Keine Auto-Advance (Buch-Doktrin: aktive Entscheidung pro Frage bleibt).

## Dateien

- `src/routes/routing.tsx` — UI/State-Hinweise (ca. 30 Zeilen geändert)
