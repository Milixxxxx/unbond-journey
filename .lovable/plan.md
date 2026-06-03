## Befund: Woher die Verwirrung kommt

In der App liegt aktuell viel **Schritt-02-Stoff in Modul 01** (laut `modul-01-fallback.md`: „10 Warnsignale als FlipCards", „ACT-Defusion + Dopamin-Reset"). Das passt nicht zur Core-Memory („01 SOS · 02 Trauma-Bonding") und nicht zu deinen frischen Claude-Texten. Deshalb fühlt sich Schritt 01 überladen an und Schritt 02 dünn.

Die `Vorlauf.zip` enthält **kein Modulmaterial**, sondern Cover, Vorwort, Gedicht, Inhaltsverzeichnis, Einleitung, Toxicometer + Routing — alles **vor** den 10 Schritten. Dafür existieren bereits Routen (`/vorwort`, `/poem`, `/inhalt`, `/einleitung`, `/willkommen`, `/routing`).

---

## Ziel-Zuordnung

### Modul 01 — „SOS · Akute Stabilisierung" (rein Notfall)
Nur das, was du in einer 3-Uhr-nachts-Krise brauchst.

1. **Hero** + Subline („präfrontaler Kortex offline …")
2. **Crisis-Banner** (Hilfetelefon 0800 116 016 · Telefonseelsorge 0800 111 0 111) — als `<CrisisBanner />` (existiert)
3. **STORY** „3:14 Uhr nachts — Die erste Nacht" (Mary Küchenboden, Schlüssel im Briefkasten, taucht Gesicht in eiskaltes Wasser) → `<SectionBlock kind="story">` + `<StoryPortrait>`
4. **DIAGNOSE** „Amygdala-Hijacking" → `<SectionBlock kind="diagnose">` + `<TextCollapse>`
5. **LÖSUNG** „TIPP-Protokoll (DBT)" inkl. 90-Sekunden-Fenster, TIPP-Infografik
6. **ÜBUNGEN (4 statt 3)**
   - Ü1 · **TIPP-Notfallplan** → 4× `ReflectionField` (T / I / P / P)
   - Ü2 · **Urge Surfing** → `<UrgeSurfWave>` (existiert) + 2 `ReflectionField`
   - Ü3 · **STOPP-Technik** → `<ButtonChoice multi>` (10 Ersatzhandlungen als Pillen) + `ReflectionField`
   - Ü4 · **High-Load Distraction (Supermarkt)** → neue Mini-Komponente `<HighLoadDistraction>` mit 3 nacheinander schaltbaren Tasks + Timer (im Stil von `urge-ring-timer`)
7. **DEEP DIVE** „90-Sekunden-Regel" (Bolte Taylor) → `<SectionBlock kind="deep-dive">`
8. **MEDITATION-Karte** (YouTube-Link) → bestehende `<MeditationCard>`
9. **CHECKLISTE** 5 neue Ziele (TIPP kennen, Amygdala-Hijacking verstehen, Notfallplan ausgefüllt, Urge Surfing/STOPP ausprobiert, 90-Sek-Regel) → `<ChecklistGoals>` (Badge bei 3/5 bleibt)

→ **Raus aus Modul 01**: 10 Warnsignale, Spielautomaten-Story, ACT-Defusion, Hot/Cold-Diagnose. Wandern in Modul 02.

### Modul 02 — „Trauma-Bonding · Anatomie der Fessel"
1. **Hero** + Eyebrow „Phase 1 · Die Fessel verstehen"
2. **Quick-Tools-Trio** (Sofort-Erkenntnis · 4-7-8-Atem · Merksatz) → neue kleine Komponente `<QuickToolsTrio>` (3 farbige Pills, mauve/sage/bordeaux)
3. **STORY** „Der Spielautomat" (Mary nachts, 6–8 Stunden pro Monat)
4. **DIAGNOSE** „Neurobiologie der toxischen Bindung" (Skinner · Fisher · Dutton & Painter) + Infografik `toxLiebe.png`
5. **10 WARNSIGNALE** → `<FlipCard>`-Grid (vorhandene Komponente, 2-spaltig)
6. **LÖSUNG** „ACT-Defusion & Dopamin-Reset"
7. **ÜBUNGEN**
   - Ü1 · **Warnsignal-Radar** → `<ButtonChoice multi>` mit den 10 Signalen + Auto-Count
   - Ü2 · **Rationalisierungs-Karten („Innere Anwältinnen der Sucht")** → `<StackedCards>` (Vorderseite = Rationalisierung, Rückseite = Reframe) + `ReflectionField` für eigene
   - Ü3 · **Jackpot-Protokoll** → neue Komponente `<JackpotProtokoll>` (zentrales SVG-Rad Kälte→Sehnsucht→Jackpot→Dopamin + 3× Jackpot-Eintrag mit je 3 `ReflectionField`)
   - Ü4 · **4-7-8 Atem** → bestehender `<BreathPacer>`
8. **DEEP DIVE** „Warum Trauma-Bonding stärker ist als gesunde Liebe" (Fisher · Skinner · Langeslag · Grant)
9. **MEDITATION** „Lass los — ohne darüber zu reden"
10. **CHECKLISTE** 5 neue Ziele (Trauma-Bonding verstehen, 3 Warnsignale identifiziert, Spielautomaten-Zyklus benennen, Rationalisierungen erkennen, …)

### Vorlauf — **nicht** in die Module
Alles aus `Vorlauf.zip` füllt bestehende Routen, nicht Schritt 01/02:

| Vorlauf-Block | Ziel-Route in der App |
|---|---|
| Cover / Crisis-Note | `/willkommen` (Hero refresh) |
| Vorwort von Milena | `/vorwort` |
| „Am Anfang war das Gefühl" + Gedicht „Liebe fragt nicht nach der Uhr" + Reflexion „Was hat dich hierher geführt?" | `/poem` |
| Inhaltsverzeichnis | `/inhalt` |
| Einleitung (Was ist UNBOND, Aufbau, Mary & Sandra, „Für wen…/Wo fängst du an") | `/einleitung` |
| Toxicometer (25 Fragen, Hints, Routing-Ergebnis 0–125) | bestehende Toxicometer-Logik (`src/lib/toxicometer.ts`) — Inhalte abgleichen, evtl. ergänzen |

---

## Vorgehen, Reihenfolge

1. **Plan freigeben** ← hier sind wir
2. **Modul 02 zuerst neu bauen** (vollständige Vorlage liegt vor → sauberer Schnitt). Neue Komponenten: `QuickToolsTrio`, `JackpotProtokoll`. Wiederverwenden: `FlipCard`, `StackedCards`, `ButtonChoice`, `BreathPacer`, `MeditationCard`, `ChecklistGoals`.
3. **Modul 01 entschlacken** auf reines SOS/TIPP. Bestehende Übungen (vor allem Slider/Reflection-Logik) **bleiben technisch** erhalten, werden nur thematisch auf TIPP umgeschrieben. Neue Komponente: `HighLoadDistraction`.
4. **Vorlauf-Routen** mit Claude-Text befüllen — separater Pass, nachdem 01/02 abgenommen sind.
5. **Bilder** (`TIPP_…png`, `toxLiebe_…png`, `Traumabonding_…jpg`, Mary-Portraits) per `lovable-assets` aus `/mnt/user-uploads` ziehen — **danach** in einem dedizierten Bild-Pass einbauen. Heute nicht.

---

## Offene Punkte für dich (bitte 1 von 3 wählen)

**A — Übungsanzahl in Modul 01**
1. Bei **3 Übungen** bleiben (Memory-Regel) → Supermarkt-Übung fällt weg oder wird Teil von Ü2/Ü3
2. **4 Übungen** zulassen (TIPP / Urge Surfing / STOPP / Supermarkt) → Memory entsprechend anpassen
3. **STOPP + Supermarkt** zu einer Übung „Notfall-Stopper" kombinieren (bleibt bei 3)

**B — Quick-Tools-Trio in Modul 02**
1. Direkt unter Hero (wie in Claude-Vorlage) — Inhaltsanker oben
2. Erst nach der Story einblenden — weniger Reizüberflutung
3. Weglassen, weil 4-7-8-Atem ohnehin als Übung kommt

**C — Vorlauf-Pass**
1. Erst Modul 01+02 fertig, dann Vorlauf in einem Rutsch
2. Vorlauf parallel mitlaufen lassen
3. Vorlauf vorziehen (Cover/Vorwort/Toxicometer zuerst)

Sag mir A/B/C und ich gehe in den Build.