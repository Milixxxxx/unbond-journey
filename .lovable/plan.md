

# Strukturtreuer Sync · Cover bis Modul 01

Single Source of Truth: `UNBOND_Final_02-3.html`. Keine Inhalte erfinden, keine Vorwort-/Einleitungs-Texte kürzen, kein Re-Numbering.

## 1 · Mapping-Übersicht (was lebt wo)

| Quelle (HTML) | Ziel in App | Bemerkung |
|---|---|---|
| `section-cover` | bestehende `/` (Landing) – wird auf das Cover-Original zurückgeführt: Healing-Hearts-Bild, Title „UNBOND · Breaking Chains", Tagline, Milena-Quote, CTA „Beginne deine Reise" | Hero-Inhalt 1:1 |
| `section-vorwort` | **neu** `/vorwort` (eigene Route, eigenes Meta) | Vorworttext 1:1, kein Kürzen |
| `section-poem` ("Am Anfang war das Gefühl") | **neu** `/poem` (eigene Route) | Mary's Eröffnungstext 1:1 |
| `section-toc` | **neu** `/inhalt` (Inhaltsverzeichnis) | TOC-Karten verlinken auf bestehende Module |
| `section-einleitung` | **ersetzt** `/willkommen` ⇒ neu `/einleitung` (alter Slug bleibt als Redirect/Alias bestehen) | „Was ist UNBOND" + Wissenschaftlicher Aufbau + 5 Säulen + 4-Phasen-Heilungsweg + Mary&Sandra-Vorstellung — alles 1:1 |
| `section-toxicometer` (25-Fragen-Test) | **vorerst nicht** als Test umgesetzt | per Beschluss heute nur Routing-Buttons |
| `section-routing` | **neu** `/routing` mit den 2 Self-Select-Buttons („Beziehung beendet" / „noch in Beziehung") aus `section-einleitung` (Original-Antworttexte 1:1) | inkl. CTA-Buttons zu Kapitel 1 / Schritt 02 |
| `section-kapitel0` | **aufgelöst gemäß Vereinbarung**: <br>• Story 3:14 Uhr nachts → wird Story-Intro von **modul-01** (passt zur bestehenden Mary-Story-Box; Originaltext 1:1) <br>• Diagnose Amygdala-Hijacking-Text → bestehende Diagnose-Sektion in modul-01 ergänzen <br>• Akut-Notfall-Übungen (TIPP, Tauchreflex etc.) → in **`/modul/sos-soforthilfe`** (SOS-Button) konsolidieren <br>• Krisen-Banner-Block → bleibt nur im SOS, nicht in jedem Kapitel | siehe Detail unten |
| `section-modul1` (SOS/TIPP/STOPP) | **inhaltlich gespalten**: <br>• TIPP-Notfallplan + STOPP-Technik + Urge Surfing + High-Load Distraction + 90-Sekunden-Regel → **`/modul/sos-soforthilfe`** als ausführlicher Notfallkoffer <br>• Story „Mary auf dem Küchenboden um 3 Uhr" → Mary-Story-Variante in **modul-01** (zweites Bild) <br>• Transformationsziele Schritt 01 (5 Items) → **modul-01** ergänzen | bewahrt deine App-Numerierung; gleicht Mary-Texte 1:1 ab |

`Kapitel 0` als eigene Route entfällt; in `lib/modules.ts` wird kein `kapitel-0`-Eintrag angelegt.

## 2 · Sitemap nach dem Sync

```text
/                       Cover (Landing)
/vorwort                Vorwort (Milena)
/poem                   Am Anfang war das Gefühl
/inhalt                 Inhaltsverzeichnis (TOC)
/einleitung             Bevor du anfängst (alt: /willkommen → Redirect)
/routing                Wo stehst du? (Self-Select)
/dashboard              Sicherer Hafen + Healing-Tree + Reading-Flow
/modul/sos-soforthilfe  SOS-Notfallkoffer (TIPP, STOPP, Urge Surfing, 90s)
/modul/modul-01         Trauma-Bonding (mit Mary-Storys aus Kap0+Modul1)
/modul/modul-02 … /modul/modul-10
/modul/bonus-d|e|f
/glossar /journal /datenschutz /einstellungen /unlock /auth
```

## 3 · Dashboard als „sicherer Hafen"

Sticky Top-Bar (bleibt minimal, kein Druck):  
`UNBOND · Mein Fortschritt · SOS (orange) · Einstellungen`

### Layout (top → bottom)

```text
┌────────────────────────────────────────────┐
│  Begrüßung (tageszeit-abhängig, ruhig)     │
│  „Wie fühlst du dich heute?"               │
│  [ Panik → SOS ]   [ Sehnsucht → Modul 01 ]│
├────────────────────────────────────────────┤
│  HEALING TREE (SVG, zentriert)             │
│   - Stamm + Äste = 10 Module              │
│   - Blatt = Modul abgeschlossen           │
│   - Blüte = 3 von 5 Zielen erfüllt        │
│   - heute: Dummy-Zustand (2 Blätter,1Blüte)│
├────────────────────────────────────────────┤
│  „Bevor es losgeht" — Reading-Flow         │
│   Cards: Vorwort · Poem · Inhalt ·         │
│          Einleitung · Routing              │
├────────────────────────────────────────────┤
│  Modul-Karten (Status: Offen/InArbeit/✓)   │
│  Phase 1 · Phase 2 · Phase 3 · Phase 4     │
│  Bonus D · E · F (Lock-Logik bleibt)       │
├────────────────────────────────────────────┤
│  Trust-Badge:                              │
│  „Daten-Safe · EU-Server Frankfurt ·       │
│   Cross-Device-Sync via Login"             │
└────────────────────────────────────────────┘
```

### Healing-Tree (Phase 1: Hülle + Dummy)

- Eigenkomponente `components/healing-tree.tsx` — pure SVG, monochrom-graphite Stamm, sage-green Blätter, mauve Blüten.
- Stilrichtung: minimaler Linien-Tree (kein Disney-Stil), inspiriert an Apple-Symbol-Sprache: dünne 1.5px Strokes, keine Farbverläufe innerhalb der Blätter, dezenter Glow.
- Props: `leafSlugs: string[]`, `bloomSlugs: string[]`. Heute: hartkodierter Demo-State.
- Animationen: Blätter faden 400ms ein (cubic-bezier .4,0,.2,1), keine Bounce.
- Spätere Erweiterung: echter Reader aus `unbond-progress:*` LocalStorage + Supabase `module_progress`.

## 4 · Inhalts-Übernahme aus der Quelle

- **Vorwort (Z. 829–869)**: vollständig, jeder Absatz, Blockquote „157.680.000 Sekunden", Signatur „— Milena". Bild: Platzhalter für `milena_autor.png` (User liefert nach).
- **Poem (Z. 879+)**: Mary-Eröffnungstext 1:1 inkl. Glossar-Spans (`Dopamin` etc.) — werden auf `<GlossarTerm>` gemappt.
- **TOC (Z. 936–1022)**: Karten 1:1; Links zeigen auf bestehende Modul-Routen.
- **Einleitung (Z. 1044–1172)**: alle Absätze, alle 4 Intro-Items, „Wissenschaftlicher Aufbau der Module" (Story/Diagnose/Lösung/Übungen/Deep-Dive) inkl. Transformationsziele-Hinweis, „Warum funktioniert" + 5 Säulen, „4-Phasen-Heilungsweg", Mary&Sandra-Vorstellung mit Bild und Caption.
- **Routing (Z. 1182–1222)**: 2 Wege („Beziehung beendet" / „noch in Beziehung") + jeweilige Antwort-Box mit den exakten Original-Empfehlungen.
- **Kapitel-0-Story 3:14 Uhr (Z. 1370–1375)**: wandert als zweite `StoryPortrait`-Variante in modul-01 (Original-Wortlaut, „Tauchreflex"-Absatz inkl.).
- **Modul-1-Story (Z. 1962–1965)**: Mary-Küchenboden-Szene — 1:1 in `sos-soforthilfe` als Story-Eröffnung.
- **TIPP/STOPP/Urge-Übungen (Z. 2005–2052)** + 90s-Regel (Z. 2055–2061) + TIPP-Bild → SOS-Seite.
- **Transformationsziele Schritt 01 (Z. 2080–2086)**: 1:1 in modul-01 unter `ChecklistGoals`.

Mary-Sandra-Kanon-Regel bleibt absolut. Wo Original-Text in der App eine bessere Variante existiert (z. B. der „Spielautomat"-Block), bleibt der Kanon-Text. Neue Absätze werden additiv eingefügt.

## 5 · Globale UX-Regeln (Apple-Style)

- Transitions: 300–500 ms, `cubic-bezier(.4,0,.2,1)`, kein Bounce, kein Snap.
- Keine Gamification-Pop-ups, keine Streak-Counter, keine Punkte. Nur Blätter/Blüten am Tree.
- Reading-Flow-Cards: glass-card-light, 1px Border, Hover = sanfter Lift (translateY -2px, shadow weicher).
- Crisis-Banner verschwindet aus jedem Modul-Top — bleibt nur im SOS sichtbar (bereits Konsens).

## 6 · Technische Schritte (READ-ONLY heute, Build nach Freigabe)

1. `lib/modules.ts` — Subtitles & Reihenfolge prüfen (kein Renumbering).
2. **Routen anlegen**: `src/routes/vorwort.tsx`, `poem.tsx`, `inhalt.tsx`, `einleitung.tsx`, `routing.tsx` — jede mit eigenem `head()` (title, description, og:title, og:description). Bestehende `/willkommen` wird auf `/einleitung` umgelenkt (TanStack `redirect()` in beforeLoad).
3. **`/` (index.tsx)** komplett auf das Cover-Original umstellen (Healing-Hearts-Hero, Title „UNBOND · Breaking Chains", Milena-Quote, CTA „Beginne deine Reise →" → `/vorwort`).
4. **`dashboard.tsx`** umbauen: Greeting-Block + Mood-Routing („Panik" / „Sehnsucht"), neue `HealingTree`-Komponente, „Bevor es losgeht"-Karten-Reihe, Trust-Badge.
5. **`components/healing-tree.tsx`** neu (Hülle + Dummy-State, Props vorbereitet).
6. **`modules/modul-01.tsx`** ergänzen: zweite Mary-Story (3:14 Uhr) + Diagnose-Block-Erweiterung + Schritt-01-Transformationsziele übernehmen.
7. **`modules/sos-soforthilfe.tsx`** als vollwertiger Notfallkoffer ausbauen: Mary-Küchenboden-Story, TIPP-Plan (4 Felder), STOPP-Technik, Urge Surfing, High-Load Distraction, 90s-Regel inkl. TIPP-Grafik.
8. **Bilder-Bedarf** (vom User nachzuliefern):
   - `healing_hearts_logo.png` (Cover)
   - `milena_autor.png` (Vorwort)
   - `freepik__85299_1774887769478.png` (Mary&Sandra Einleitung)
   - `freepik__0001_1774887361238.png` (Mary 3:14 Uhr)
   - `TIPP_1774948999615.png` (SOS)
   Bis dahin: dezente Platzhalter-Frames im bestehenden Stil — kein Layout-Bruch.
9. **Memory-Update**: `mary-sandra-canon.md` um die zwei zusätzlichen Story-Szenen ergänzen; neuer Eintrag `structure/preface-flow.md` als Sync-Snapshot.

## 7 · Was heute NICHT passiert

- Modul 02–10 inhaltlich nicht angefasst (nur Links/Subtitles, falls technisch nötig).
- Toxicometer-Test bleibt ungebaut (nur Routing-Buttons aus `section-einleitung`).
- Healing-Tree-Datenbindung später.
- Keine Login/Onboarding-Erfindungen, kein Stripe, kein neues Branding.

