
User fragt offen „was würdest du empfehlen?" nachdem ich vier Architektur-Achsen aufgespannt habe (Hosting, Test/Brevo, Verkaufsmodell, Design). Ich gebe eine klare Empfehlung mit Begründung — keine Optionsliste mehr, sondern ein konkreter Vorschlag den der/die User:in nur noch absegnen muss.

Ich kenne die Landingpage (dunkel, Glass, Bordeaux/Sage, ToxiCometer als Lead-Magnet mit Brevo) und das eBook (hell/Cream, gleiche Brand-Farben, bereits in Lovable mit Cloud + Auth + 10 Modulen). Beide gehören zusammen — das eBook ist die logische Konversion nach dem Test.

Wichtig: Ich präsentiere KEINEN technischen Plan zum direkten Umsetzen, sondern eine strategische Empfehlung. Der User entscheidet dann, ob wir loslegen.

---

## Meine Empfehlung

Du hast bereits zwei perfekt komplementäre Assets:
- **unbond.de**: Marketing-Landingpage + ToxiCometer-Lead-Magnet (PHP, läuft, konvertiert E-Mails in Brevo)
- **Lovable-App**: Das interaktive eBook mit Auth, 10 Modulen, Journal, DSGVO-Export

Das ist die **idealste Funnel-Architektur**, die man sich vorstellen kann. Nicht alles in eines zwingen — sondern beide Stärken nutzen.

### 1) Hosting: Subdomain `app.unbond.de`

**unbond.de bleibt wie sie ist** (PHP, schnell, SEO-optimiert, ToxiCometer läuft).
**app.unbond.de** = die Lovable-App (eBook, Login, Module, Journal).

Warum: Du behältst deine SEO-Power auf der Hauptdomain, der Test bleibt schnell und einfach, und das eBook bekommt seinen eigenen App-Charakter. Cookies/Sessions bleiben sauber getrennt. Migration später möglich, aber jetzt unnötiger Aufwand.

### 2) Test bleibt auf Landingpage — Brevo-Mail wird zur Funnel-Brücke

ToxiCometer + Brevo-PHP NICHT neu in Lovable bauen. Stattdessen:
- Brevo-E-Mail (die der/die User:in mit dem Ergebnis bekommt) bekommt einen prominenten **CTA „Starte jetzt das Programm — kostenlos beginnen"** → Link zu `app.unbond.de/auth?source=toxicometer&level={LEVEL}`
- Beim Auth-Magic-Link wird `source` und `toxicometer_level` ins User-Profil übernommen
- Dashboard begrüßt sie personalisiert: „Dein Test zeigte hohe Belastung — wir empfehlen Modul 01 (SOS) als Einstieg"

Vorteil: Brevo bleibt das CRM, du nutzt die bereits implementierten 25 Attribute (`Tox_Score`, `Toxicometer_Stage` etc.) für späteres Newsletter-Targeting. Die App muss den Test nicht doppelt bauen.

### 3) Verkaufsmodell: Freemium

- **Kostenlos:** Kapitel 0 (Fundament) + Modul 01 (SOS) — die kritischste Phase
- **Paywall ab Modul 02:** Einmalkauf via Stripe (z.B. 79–149€, lifetime access)
- Kapitel 0 + Modul 01 sind so wertvoll, dass User schnell merken „das hilft" → hohe Conversion zur Vollversion. Gleichzeitig hilfst du auch denen, die kein Geld haben, in der Akutphase.

Optional später: Therapeutinnen-Lizenz (3-Sitzplätze, 299€) als zweite Stufe.

### 4) Design-Brücke: Mittel-Stark

- **Modul-Header & SOS-Banner** im dunklen Landingpage-Stil (Bordeaux/Dark-Green, Glass)
- **Lese-/Übungsbereiche** bleiben hell (Cream/Sage-tinted) — Trauma-sensibel, augenschonend bei längerer Nutzung
- **Top-Bar dunkel** mit Logo aus Landingpage, gleiche Font (Playfair Display für Headlines)
- **Floating SOS-Button & Krisen-Banner** im Bordeaux der Landingpage

So spürt man sofort: gleiche Marke, andere Funktion (Marketing vs. tägliches Arbeitstool).

---

## Was ich technisch konkret machen würde (in dieser Reihenfolge)

1. **Design-Angleichung der App** an Landingpage (Header/Footer/Buttons in Bordeaux-Dark, Playfair-Headlines, Glass-Cards aus LP übernehmen)
2. **Source-Tracking aufsetzen**: `?source=` und `?toxicometer_level=` aus URL → Profil; personalisierte Dashboard-Begrüßung
3. **Stripe-Paywall** mit Lovable's nativer Stripe-Integration (kein API-Key nötig); Lock auf Module 02–10
4. **Brevo-Mail-Template** anpassen → CTA-Button zur App ergänzen (das machst du im Brevo-UI, ich liefere dir den fertigen HTML-Block)
5. **Custom Domain** `app.unbond.de` in Lovable verbinden (DNS-Anleitung gebe ich dir)

**Was ich von dir brauche, falls du zustimmst:**
- DNS-Zugriff auf unbond.de (für CNAME zu app.unbond.de)
- Brevo-API-Zugriff bleibt wie er ist — du musst nichts ändern, nur den Mail-Text anpassen
- Stripe: Soll ich Lovable's nativen Stripe-Connector nutzen (kein Account-Setup, sofort startklar) oder hast du schon ein Stripe-Konto?

---

## Alternative falls du es einfacher willst

Wenn dir das zu viele bewegliche Teile sind: **Variante Light** = nur Schritte 1+4+5 (Design + Brevo-CTA + Subdomain). Erstmal alles kostenlos, Paywall kommt später wenn die ersten 50 User durch sind und du Feedback hast. Das ist auch psychologisch sauberer für den Launch — erst Vertrauen aufbauen, dann monetarisieren.

**Mein Tipp:** Variante Light starten, in 4–6 Wochen Stripe-Paywall nachrüsten.

---

Sag mir: **Vollvariante** oder **Light**? Und: **Stripe nativ** oder **eigenes Konto**? Dann lege ich los.
