import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Sparkles,
  AlertTriangle,
  Smartphone,
  Phone,
  Calendar,
  ShieldAlert,
  Quote,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import {
  TwentyOneDayChallenge,
  StackedCards,
  Reflection3Step,
  SliderDiscrete,
  CalloutBold,
  TransformationGoals,
  NoContactSchleusen,
  NoContactContract,
  MeditationCard,
  WhatIsNoContact,
  DetoxKiste,
} from "@/components/exercise";

const SLUG = "modul-03";

/**
 * MODUL 03 · No Contact als Neurobiologie
 * Quelle: UNBOND_Final_v5.html, Z. 2886–3340
 * Pflichtelemente:
 *  - Einleitungs-Block (ChapterIntro)
 *  - Story · Der kalte Entzug (Mary & das einzelne Emoji)
 *  - Diagnose · Neurobiologie des Kontaktabbruchs (Helen Fisher, VTA)
 *  - Lösung · Die drei Schleusen (digital, physisch, sozial)
 *  - Breadcrumbing entlarven (Spielautomaten-Effekt)
 *  - 5 Übungen: Schleusen-Inventur · Breadcrumb-Decoder (7 Tage) · Blockade-Tracker
 *               · 90-Tage-Kontrakt · Wenn-Dann-Notfallplan
 *  - Transformationsziele (7 Stück, 1:1 aus Leitdatei)
 */
export function Modul03() {
  return (
    <article className="space-y-7">
      {/* ── Einleitungs-Block (NEU) ── */}
      <ChapterIntro
        title="Kapitel 03 · No Contact als Neurobiologie"
        keywords={[
          "Medizinisches Protokoll",
          "90-Tage-Detox",
          "Drei Schleusen",
          "Breadcrumbing",
          "Extinction Burst",
        ]}
      >
        <p>
          No Contact ist kein Liebesentzug — es ist Entgiftung. Dein Gehirn
          unterscheidet biochemisch nicht zwischen ihrem Profilbild und einer
          Line Kokain.
        </p>
        <p>
          Die nächsten 90 Tage sind kein Test deiner Stärke, sondern{" "}
          <strong>medizinisches Protokoll</strong> für ein Nervensystem, das
          gerade lernt, ohne Gift zu atmen.
        </p>
      </ChapterIntro>

      {/* ── Was No Contact ist · 6-Karten-Karussell ── */}
      <WhatIsNoContact />

      {/* ── Story · Der kalte Entzug ── */}
      <Section icon={<ScrollText className="h-4 w-4" />} label="Story · Der kalte Entzug">
        <div className="glass-card-strong p-5">
          <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
            <h3 className="font-display text-base font-bold text-bordeaux">
              Marys Handy leuchtet auf
            </h3>
            <p>
              Monate sind vergangen. Mary hat durchgehalten – kein Kontakt, keine Profilbesuche,
              kein Nachgeben. Der Schmerz kommt noch in Wellen, aber die Abstände werden länger.
              Dann, an einem stillen Dienstagabend, leuchtet ihr Bildschirm auf: Sandra hat auf
              einen Status reagiert, den Mary am Tag zuvor gepostet hatte. Ein einziges
              Herzchen-Emoji. ❤️ Einfach so. Aus dem Nichts. Nach Monaten der Stille.
            </p>
            <p>
              Marys Herz hämmert sofort. <em>Hat Sandra an mich gedacht? Vermisst sie mich? Soll
              ich antworten?</em> In Sekundenbruchteilen schmilzt das mühsam aufgebaute
              No-Contact-Fundament. Der Impuls zu reagieren ist so stark wie ein physischer Sog.
              Dann – Stille. Keine Nachricht, kein Anruf, kein weiteres Zeichen. Nur dieses
              einzelne Emoji, das in der Leere hängt.
            </p>
            <p>
              Doch Mary greift zu ihrem Breadcrumb-Decoder – dem Notizbuch, das neben ihrem Bett
              liegt – und schreibt: <em>Signal: Herz-Emoji auf meinen Status. Nach Monaten. Meine
              Hoffnung: Sie vermisst mich. Realitätscheck: Ein Emoji ist kein Gespräch, kein
              Angebot, keine Veränderung. Es ist ein Ping, der meine Verfügbarkeit testet. Es hat
              sie zwei Sekunden gekostet – und mich fast alles.</em>
            </p>
            <p>
              Mary legt das Handy weg und atmet dreimal lang aus. Der Drang ebbt ab.{" "}
              <strong>Nicht, weil er nicht real war – sondern weil sie ihn durchschaut hat.</strong>
            </p>
            <p className="border-l-2 border-bordeaux/30 pl-3 italic text-graphite/80">
              Wochen zuvor hatte Mary etwas anderes getan, das jetzt trägt: Sie holte die
              Schuhschachtel unter dem Bett hervor und legte Sandras Armband, zwei gemeinsame
              Fotos und den Brief vom Herbst hinein. Sie schloss den Deckel und schrieb mit
              dickem Filzstift ein Datum drauf: <strong>90 Tage von heute. „Nicht vernichten.
              Nur verwahren."</strong> Kein emotionaler Akt. Medizin. Genau diese Kiste hilft
              ihr heute, das Emoji als Ping zu lesen — nicht als Liebesbeweis.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Diagnose · Neurobiologie des Kontaktabbruchs ── */}
      <Section
        icon={<Brain className="h-4 w-4" />}
        label="Diagnose · Warum No-Contact medizinisch notwendig ist"
      >
        <CalloutBold
          kind="science"
          title="Die Neurobiologie des Kontaktabbruchs"
          source="Helen Fisher · O'Brien et al., 1992 · Marlatt & Gordon, 1985"
        >
          <p>
            No-Contact ist keine Taktik, um sie zurückzugewinnen. Es ist eine medizinische
            Notwendigkeit für dein Gehirn. <strong>Helen Fisher</strong> hat bewiesen, dass
            Liebeskummer dieselben Hirnareale aktiviert wie{" "}
            <GlossarTerm termKey="kokainentzug">Kokainentzug</GlossarTerm>. Jeder Kontakt ist wie
            ein Schuss für eine Süchtige.
          </p>
          <p>
            Solange du Cues bekommst – eine Nachricht, ein Profilbild, ein Lied auf ihrer
            Playlist – feuert das Suchtzentrum weiter. Der{" "}
            <GlossarTerm termKey="nucleus-accumbens">Nucleus Accumbens</GlossarTerm> kann nicht
            zwischen einer Nachricht von ihr und einer Dosis Kokain unterscheiden.
          </p>
        </CalloutBold>
      </Section>

      {/* ── Lösung · Die drei Schleusen ── */}
      <Section
        icon={<Lightbulb className="h-4 w-4" />}
        label="Lösung · Die drei Schleusen schließen"
      >
        <div
          className="rounded-2xl border-l-4 border-bordeaux bg-bordeaux/5 p-4 italic text-bordeaux"
        >
          <Quote className="mb-1 h-4 w-4" />
          <p className="text-sm font-medium leading-relaxed">
            „No-Contact ist kein emotionaler Akt. Es ist medizinisches Protokoll."
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <SchleusenCard
            number="01"
            title="Neurobiologische Notwendigkeit, keine Taktik"
            text="Jeder Blick auf ihr Profil, jede gemeinsame Playlist, jeder Flying Monkey aktiviert denselben Nucleus Accumbens, der die Sucht am Leben hält – und setzt die neurologische Heilungsuhr auf null zurück (O'Brien et al., 1992)."
          />
          <SchleusenCard
            number="02"
            title="Willenskraft verliert gegen Neurobiologie"
            text="Marlatt & Gordon (1985): Die konsequente Reduktion von Umgebungs-Cues ist ein stärkerer Prädiktor für erfolgreiche Suchtremission als Motivation. Du kämpfst nicht gegen Gefühle – du kämpfst gegen konditionierte neuronale Bahnen."
          />
          <SchleusenCard
            number="03"
            title="Die drei Schleusen"
            text="No-Contact erfordert das Schließen von drei Schleusen: physisch (Orte, Gegenstände, Rituale) · sozial (Flying Monkeys, Informationen über Umwege) · digital (Löschen, Blockieren). Jede offene Schleuse ist eine Hintertür für die Sucht."
          />
          <SchleusenCard
            number="04"
            title="Kein permanenter Zustand – eine Phase"
            text="Dies ist kein Lebensurteil. Es ist eine Phase des neuronalen Relearnings. Wenn alle Cues konsequent gemieden werden, schwächt das Gehirn nach Wochen die emotionalen Verknüpfungen. Die Neuroplastizität arbeitet für dich."
          />
        </div>
      </Section>

      {/* ── Breadcrumbing entlarven ── */}
      <Section
        icon={<AlertTriangle className="h-4 w-4" />}
        label="Breadcrumbing · Wenn minimale Signale maximalen Schaden anrichten"
      >
        <CalloutBold
          kind="deepdive"
          title="Was Breadcrumbing neurologisch anrichtet"
          source="B. F. Skinner · Ramani Durvasula"
        >
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🎰</span>
              <div>
                <strong className="text-bordeaux">Der Spielautomaten-Effekt</strong>
                <p className="mt-1">
                  Breadcrumbing – das gezielte Streuen minimaler Kontaktsignale wie Emojis,
                  Story-Ansichten, Likes oder kurzes Entblockieren – ist eine der wirksamsten
                  Formen{" "}
                  <GlossarTerm termKey="intermittierende-verstaerkung">
                    intermittierender Verstärkung
                  </GlossarTerm>
                  . Skinner zeigte: Unregelmäßige, unvorhersehbare Belohnungen erzeugen die
                  stärkste Verhaltenskonditionierung. Dein Nucleus Accumbens feuert einen
                  Dopaminstoß, der stärker ist als bei regelmäßigem Kontakt – weil das Signal
                  unerwartet kam.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🪝</span>
              <div>
                <strong className="text-bordeaux">Hoovering ohne Substanz</strong>
                <p className="mt-1">
                  Durvasula beschreibt Breadcrumbing als bewusstes{" "}
                  <GlossarTerm termKey="hoovering">Hoovering</GlossarTerm>-Instrument: Es testet,
                  ob du noch emotional verfügbar bist, ohne dass die Täterin echte Nähe anbieten
                  muss. Der Kontakt kostet sie nichts – aber er kostet dich alles, weil er deinen
                  Heilungsprozess zurücksetzt.
                </p>
              </div>
            </div>
          </div>
        </CalloutBold>

        <div className="rounded-2xl border-l-4 border-warning bg-warning/10 p-4">
          <p className="text-sm leading-relaxed text-graphite">
            <strong className="text-bordeaux">Klartext:</strong> Ein Emoji ist nicht Kontakt. Ein
            Like ist nicht Zuwendung. Eine Story-Ansicht ist nicht Interesse. Es ist ein Hook –
            ein Test, ob du noch verfügbar bist. Jede Reaktion deinerseits bestätigt: Ja, sie ist
            noch da. Und der Zyklus beginnt von vorn.
          </p>
        </div>
      </Section>

      {/* ── ÜBUNGEN ── */}
      <Section icon={<Sparkles className="h-4 w-4" />} label="Übungen · Deine 5 Werkzeuge">
        {/* Übung 1 · Die digitale Kontakt-Inventur (3 Schleusen) */}
        <NoContactSchleusen slug={SLUG} />

        {/* Übung 2 · Breadcrumb-Decoder (7-Tage-Protokoll) */}
        <TwentyOneDayChallenge
          slug={SLUG}
          storageKey="bc_decoder_7"
          title="Übung 2 · Breadcrumb-Decoder · 7-Tage-Protokoll"
          subtitle="Notiere 7 Tage lang jedes Mini-Signal und entlarve es: Hoffnung vs. Realität."
          meta="🎣 7 Tage · 5 Min/Tag · 💡 Cue-Identifikation"
          accent="terracotta"
          placeholder={`Signal: z.B. „Story angesehen, Like auf altem Foto, Profil entblockiert."\nMeine Hoffnung: „Sie vermisst mich, sie hat sich geändert…"\nRealitätscheck: „War es ein Gespräch? Ein Angebot? Eine Verhaltensänderung? Oder ein Ping ohne Substanz?"`}
        />

        {/* Übung 3 · Blockade-Tracker · Muster-Timeline */}
        <StackedCards
          slug={SLUG}
          storageKey="nc_blockade_tracker"
          title="Übung 3 · Blockade-Tracker · Muster-Timeline"
          subtitle="Wenn sie blockiert, entblockiert, wieder blockiert: Du dokumentierst — und durchschaust den Drei-Phasen-Zyklus."
          meta="📱 5 Einträge · ⏱ 15 Min · 💡 Drei-Phasen-Zyklus"
          accent="terracotta"
          rows={[
            {
              id: "b1",
              title: "Vorfall 1",
              fields: [
                { key: "datum", label: "Wann?", placeholder: "Datum / Uhrzeit", rows: 1 },
                { key: "was", label: "Was passierte?", placeholder: "z.B. plötzlich entblockiert auf Instagram", rows: 2 },
                { key: "gefuehl", label: "Mein Gefühl 1–10", placeholder: "Skala + 1 Wort", rows: 1 },
              ],
            },
            {
              id: "b2",
              title: "Vorfall 2",
              fields: [
                { key: "datum", label: "Wann?", placeholder: "Datum / Uhrzeit", rows: 1 },
                { key: "was", label: "Was passierte?", placeholder: "Welche Plattform? Welche Aktion?", rows: 2 },
                { key: "gefuehl", label: "Mein Gefühl 1–10", placeholder: "Skala + 1 Wort", rows: 1 },
              ],
            },
            {
              id: "b3",
              title: "Vorfall 3",
              fields: [
                { key: "datum", label: "Wann?", placeholder: "Datum / Uhrzeit", rows: 1 },
                { key: "was", label: "Was passierte?", placeholder: "Vielleicht eine Story-Reaktion?", rows: 2 },
                { key: "gefuehl", label: "Mein Gefühl 1–10", placeholder: "Skala + 1 Wort", rows: 1 },
              ],
            },
          ]}
        />

        {/* Vibe-Slider · Emoji-Immunität */}
        <SliderDiscrete
          slug={SLUG}
          storageKey="emoji_immunity"
          title="Übung 3a · Emoji-Immunität · Schutzschild-Level"
          subtitle="Wie gut bist du heute gewappnet, wenn ein einzelnes ❤️ aufploppt?"
          meta="🛡️ Selbst-Check · ⏱ 1 Min"
          accent="sage"
          min={0}
          max={10}
          leftLabel="Komplett triggerbar"
          rightLabel="Maximaler Schutz"
          scaleHint="Tipp: Ein Wert unter 5 = Übung 1 + Übung 4 (Vertrag) ernsthaft angehen. Ein Wert ab 7 = du hast den Spielautomaten durchschaut."
        />

        {/* Übung 4 · No-Contact-Kontrakt mit Countdown */}
        <NoContactContract slug={SLUG} />

        {/* Übung 5 · Die Detox-Kiste (NEU aus SCHRITT_4_FINAL) */}
        <DetoxKiste slug={SLUG} />

        {/* Übung 6 · Wenn-Dann-Notfallplan */}
        <Reflection3Step
          slug={SLUG}
          title="Übung 6 · Mein Wenn-Dann-Notfallplan"
          subtitle="Implementation Intentions (Gollwitzer): vorbereitete Trigger-Antworten halten, wenn Willenskraft versagt."
          meta="🚨 Notfall-Skript · ⏱ 10 Min · 💡 Implementation Intentions"
          accent="bordeaux"
          steps={[
            {
              key: "wenn",
              label: "Wenn ich den Drang habe, sie zu kontaktieren …",
              placeholder: 'z.B. „Wenn ich nachts ihr Profil suchen will…" / „Wenn ich ein Lied von uns höre…"',
              rows: 2,
            },
            {
              key: "dann",
              label: "… dann tue ich konkret das hier:",
              placeholder: 'z.B. „… lege ich mein Handy in die Küchenschublade und gehe 10 Min spazieren."',
              rows: 3,
            },
            {
              key: "anker",
              label: "Mein Anker-Mensch (Name + Nummer):",
              placeholder: 'z.B. „Lisa · +49 152 …" – die ich bei extremem Drang sofort anrufen darf.',
              rows: 1,
            },
          ]}
        />
      </Section>

      {/* ── Deep Dive ── */}
      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive · Die Wissenschaft">
        <CalloutBold
          kind="deepdive"
          title="Helen Fisher: Dein Gehirn auf Liebeskummer"
          source="Fisher et al., 2010 · J Neurophysiol"
        >
          <p>
            In ihrer fMRI-Studie zeigte Fisher: Bei Probandinnen, die gerade von ihrer großen
            Liebe verlassen worden waren, leuchteten dieselben Hirnareale auf wie bei
            Kokainsüchtigen im Entzug — Ventrales Tegmentales Areal, Nucleus Accumbens, Insula.
            Dein Schmerz ist also kein „Charakterproblem". Er ist neurochemischer Entzug.
          </p>
          <p>
            <strong>Das Hebbsche Gesetz</strong> der neuronalen Plastizität besagt: „Neurons that
            fire together, wire together." Umgekehrt: „Neurons that fire apart, wire apart."
            Jeder Tag No Contact schwächt die konditionierte Bahn{" "}
            <em>„Gedanke an sie → Dopaminausschüttung → Sehnsucht → Kontaktimpuls"</em>. Nach 90
            Tagen konsequenter Nicht-Aktivierung ist diese Bahn messbar schwächer.
          </p>
        </CalloutBold>
      </Section>

      {/* ── Transformationsziele (1:1 aus Leitdatei, alle 7) ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="No Contact als medizinisches Protokoll"
        goals={[
          { id: "g1", text: "Ich habe ALLE digitalen Kanäle geschlossen." },
          { id: "g2", text: "Ich habe physische Erinnerungsstücke entfernt." },
          { id: "g3", text: "Ich habe mein soziales Umfeld informiert." },
          { id: "g4", text: "Ich habe einen Wenn-Dann-Notfallplan erstellt." },
          { id: "g5", text: "Ich verstehe, dass No-Contact medizinisch notwendig ist." },
          { id: "g6", text: "Ich erkenne Breadcrumbing als Kontrollinstrument, nicht als Liebesbeweis." },
          { id: "g7", text: "Ich habe meine Benachrichtigungen optimiert und eine 48h-Pause-Regel etabliert." },
        ]}
      />
    </article>
  );
}

/** Visuelle Karte für die „4 Säulen der drei Schleusen"-Logik */
function SchleusenCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-sage/25 bg-white/75 p-4 shadow-soft">
      <p className="font-display text-2xl font-extrabold text-bordeaux/30 leading-none">
        {number}
      </p>
      <h4 className="mt-1 font-display text-sm font-bold text-bordeaux">{title}</h4>
      <p className="mt-2 text-xs leading-relaxed text-graphite/80">{text}</p>
    </div>
  );
}

function Section({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3 animate-fade-in">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
        {icon}
        {label}
      </div>
      {children}
    </section>
  );
}
