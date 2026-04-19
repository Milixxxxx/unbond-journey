# Memory: index.md
Updated: now

# Project Memory

## Core
Single source of truth for ALL book content: .lovable/source/UNBOND_Final_v5.html. Ignore all other versions.
Anonymisierung HARTE REGEL: Milena → Mary | Silke → Sandra. Niemals echte Namen verwenden.
Kapitelstruktur (final): SOS (sos-soforthilfe) · 01 Trauma-Bonding · 02 Rosa-Brille · 03 No Contact · 04 Trigger entmachten · 05 Körper zuerst · 06 Suchtmuster brechen · 07 WLW-Dynamiken · 08 Bindungsmuster & Inneres Kind · 09 Identität & Zukunft · 10 Kintsugi/PTG. Bonus D/E/F (gesperrt). Niemals umstrukturieren ohne Freigabe.
KEINE Schieberegler auf Mobile. Stattdessen Tap-Skala 0–10 (siehe TapScale-Komponente) oder Emoji-Skala. Vor Implementierung mit User abstimmen.
Bei Fragen immer 3 konkrete Optionen anbieten.
Story-Passagen Mary/Sandra: 1:1 verbatim aus Quelldatei — keine Kürzung/Paraphrasierung.
Pflichtelemente pro Kapitel in dieser REIHENFOLGE: ChapterIntro mit Keywords · Story · Diagnose · Lösung · ≥3 Übungen · Reflexion · Meditation (Sage-Akzent) · 5–6 Transformationsziele. KEINE Mikro-Botschaft, KEIN Story-Zitat-Kasten am Ende.
Meditationen IMMER 1:1 aus Leitdatei übernehmen — die in der Leitdatei verlinkte ID, KEINE andere. App-Modul → Leitdatei-Schritt-Mapping ist FIX.
Verifizierte YouTube-IDs aus Leitdatei (alle 200 OK, App-Modul→ID): SOS=v9XmIgvP0Wc (Schritt 01) · 01=VXrIMaXIpkQ (Schritt 02) · 02=UnjielNyg08 (Schritt 03) · 03=9SpjxxYsDm8 (Schritt 04) · 04=B4MjEWg-3Dw (Schritt 05) · 05=1-vFTMy5DSU (Schritt 06) · 06=AEsnRt54VPY (Schritt 07) · 07=MYkQ3EU284g (Schritt 08) · 08=fXObOa9E_X4 (Schritt 09) · 09=d8pO3mbj-90 (Schritt 10).
Vor Einsatz neuer YouTube-Links: oembed prüfen — `curl -s -o /dev/null -w "%{http_code}" "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=ID&format=json"` muss 200 liefern.
Diagnose-Karten IMMER mit FlipCard-Komponente (`@/components/exercise` → `FlipCard`). Einheitliches Design im gesamten Buch: 5px Topborder in Akzentfarbe, Vorder-/Rückseite, animiertes Hand-Tap-Icon unten rechts als Geste-Hint. Niemals lokale DiagnosisCard neu definieren.

## Memories
