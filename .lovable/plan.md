## Option 3 + Selbstcheck-Konzept

### Teil A — Option 3: Inhalte verteilen (verlustfrei)

**Garantie:** Kein Text aus Fundament.txt wird gelöscht oder gekürzt. Alles wird in bestehende Module integriert, mit voller Länge. Besonders der **Narzissmus-Block (Altruistischer Narzissmus + Weaponized Virtue)** bleibt als **eigenes, vollständiges Teilkapitel** erhalten — er wandert komplett nach **Schritt 03 (Rosa-Brille abnehmen / modul-02)**, weil dort thematisch der Platz für "Wer war diese Person wirklich?" ist.

**Verteilung der 5 Fundament-Blöcke:**

| Fundament-Block | Zielmodul | Status der Übung |
|---|---|---|
| 0.1 Amygdala-Hijacking + Story "Erste Nacht" + Notfallkontakte | bleibt in **SOS** (schon dort, 70% identisch) | vorhanden |
| 0.2 Polyvagal (3 Zustände, Vagus-Reset, 5-4-3-2-1) | bleibt in **Schritt 06 / modul-05** | vorhanden |
| **0.3 Altruistischer Narzissmus + Weaponized Virtue** (NEU als Teilkapitel mit voller Länge) | **Schritt 03 / modul-02** | + neuer **Weaponized-Virtue-Checker** |
| 0.4 kPTBS-Konzept (Text bisher nur als Infografik) | **Schritt 02 / modul-01** | + neuer **kPTBS-Symptom-Check** |
| 0.5 Liebe vs. Sucht (Bancroft-Entitlement + Tango) | Bancroft → **modul-02**, Tango → **modul-09 / Bindungsmuster**, Sucht-Check → **modul-07 / Suchtmuster** | + 3 neue Übungen |

**Konkret zu bauen:**
1. **modul-02 erweitern:** neues Teilkapitel "Altruistischer Narzissmus & Weaponized Virtue" (voller Fundament-Text, Diagnose/Lösung/Übungen/Ziele-Reihenfolge) + Weaponized-Virtue-Checker + Bancroft-Entitlement-Check.
2. **modul-01 erweitern:** kPTBS-Textblock + Symptom-Check (statt nur Infografik).
3. **modul-07 erweitern:** Liebe-vs-Sucht-Selbsttest (Sucht-Check).
4. **modul-09 erweitern:** Tango-Erkenner (Anxious-Avoidant-Dynamik).

Kein neues Kapitel im TOC, keine neue Route. Bestehende Module werden inhaltlich vollständiger.

---

### Teil B — Selbstcheck-Konzept (ersetzt /routing)

**Idee:** Statt der jetzigen 2-Wege-Auswahl "Bin ich in akuter Not vs. will ich verstehen?" bekommt die Seite **/routing** einen **5-Konzept-Selbstcheck** als Einstieg. Der User klickt sich durch 5 kurze Diagnose-Karten und sieht am Ende, welche Kapitel für ihn besonders relevant sind.

**Die 5 Konzepte = die 5 Fundament-Blöcke:**
1. **Nervensystem im Alarm?** (4 Ja/Nein-Fragen → führt zu SOS + modul-05)
2. **Polyvagal-Zustand?** (3-Zustands-Selbsteinschätzung → führt zu modul-05)
3. **Altruistischer Narzissmus / Weaponized Virtue?** (4 Fragen → führt zu modul-02)
4. **kPTBS-Symptome?** (6 Fragen Symptom-Check → führt zu modul-01)
5. **Liebe oder Sucht?** (4 Fragen → führt zu modul-07)

**Ergebnis-Anzeige:** Ampel pro Konzept (grün/gelb/rot) + direkte Links zu den 2-3 relevantesten Kapiteln. Persistiert in localStorage, kann jederzeit wiederholt werden.

**Was passiert mit der jetzigen "akut vs. klarheit"-Auswahl?**
Sie ist redundant: Frage 1 (Nervensystem im Alarm) beantwortet dasselbe diagnostisch sauberer. Die `path-mode`-Logik im Dashboard ("Was kommt als nächstes?") kann automatisch aus dem Check-Ergebnis abgeleitet werden — rotes Nervensystem = akut-Pfad, sonst Klarheits-Pfad.

**Vorteil gegenüber der jetzigen Lösung:**
- Diagnostisch fundiert statt Selbst-Etikettierung
- Nutzt genau das Material aus Fundament.txt, das sonst nirgends hinpasst
- Ersetzt eine binäre Wahl durch ein nuanciertes Profil
- Reaktiviert das didaktische Ziel des Fundament-Kapitels (Filter "Was trifft auf mich zu?") ohne neues Kapitel zu bauen

**Was passiert mit den vollen Fundament-Texten zu diesen 5 Konzepten?**
Sie bleiben in den jeweiligen Tiefenmodulen (siehe Teil A). Der Selbstcheck ist **kurz** (nur Fragen + Ampel), die **Theorie** steht im Tiefenmodul, zu dem der Check verlinkt. So keine Doppelung.

---

### Offene Frage

Soll der Selbstcheck:
- **(a)** die jetzige akut/klarheit-Auswahl **komplett ersetzen** (sauber, aber Eingangshürde steigt: 5 Mini-Checks statt 1 Klick)?
- **(b)** **zusätzlich** als optionaler "Vertiefter Check" angeboten werden (akut/klarheit bleibt als 30-Sekunden-Eingang)?
- **(c)** nur als **eigenständige Diagnostik-Seite** unter z.B. `/selbstcheck` existieren (unabhängig vom Einstiegsrouting)?

Sag mir deine Präferenz für (a/b/c), dann finalisiere ich den Plan und wir starten mit der Umsetzung.
