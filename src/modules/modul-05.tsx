import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Sparkles,
  Wind,
  Quote,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import {
  PillCloud,
  Reflection3Step,
  StackedCards,
  CalloutBold,
  TransformationGoals,
  MeditationCard,
} from "@/components/exercise";
import { BreathPacer } from "@/components/exercise/breath-pacer";
import { ButterflyHug } from "@/components/exercise/butterfly-hug";
import { NervousSystemCheck } from "@/components/exercise/nervous-system-check";

const SLUG = "modul-05";

/**
 * MODUL 05 · Der Körper zuerst
 * Quelle: UNBOND_Final_v5.html, Z. 3460–3650 (Schritt 06 · Körper zuerst)
 *
 * Roter Faden:
 *  Modul 04 hat Trigger kognitiv + somatisch (Urge Surfing) entmachtet.
 *  Hier zoomen wir tief ins Nervensystem: Polyvagal-Theorie als Landkarte,
 *  Vagus-Reset als Werkzeug. Bevor das Selbst (Modul 06+) neu wachsen kann,
 *  muss der Körper lernen: die Gefahr ist vorbei.
 *
 * Vermeidung von Doppelungen:
 *  - 4-7-8-Atem ist im SOS als Notfall-Tool — hier didaktisch vertieft mit Pacer.
 *  - Urge Surfing (Modul 04) wird referenziert, aber NICHT wiederholt.
 *  - Polyvagal wird hier ZUERST inhaltlich entwickelt (vorher nur erwähnt).
 *
 * Pflichtelemente:
 *  - ChapterIntro
 *  - Story · Der Knoten löst sich
 *  - Diagnose · 3 Zustände des Nervensystems (Ventral · Sympathisch · Dorsal)
 *  - Lösung · Vagus-Reset Sofort-Techniken (4 Karten)
 *  - 4 Übungen: Körper-Radar · 6-Atemzüge-Pacer · Butterfly Hug · 5-4-3-2-1
 *  - Vibe-Check · Polyvagal-Status
 *  - Deep Dive · Van der Kolk · Damasio · Levine · Porges
 *  - Reflexionsfrage
 *  - Meditation · "Nervensystem beruhigen"
 *  - TransformationGoals (6 Ziele aus Quelle)
 */
export function Modul05() {
  return (
    <article className="space-y-7">
      {/* ── Einleitungs-Block ── */}
      <ChapterIntro
        title="Kapitel 05 · Der Körper zuerst"
        keywords={[
          "Polyvagal-Theorie",
          "Vagus-Reset",
          "Somatische Marker",
          "Body Keeps the Score",
        ]}
      >
        <p>
          Trauma sitzt nicht im Kopf — es lebt in deiner Atmung, im Knoten im
          Magen, in den Schultern, die seit Jahren nicht mehr ganz unten sind.
        </p>
        <p>
          Bevor dein Verstand weiß, dass die Gefahr vorbei ist, muss dein
          Körper es spüren. Diese Werkzeuge sprechen direkt mit deinem
          Nervensystem — vorbei am rationalen Verstand.
        </p>
      </ChapterIntro>

      {/* ── Story · Der Knoten löst sich ── */}
      <Section icon={<ScrollText className="h-4 w-4" />} label="Story · Der Knoten löst sich">
        <div className="glass-card-strong p-5">
          <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
            <h3 className="font-display text-base font-bold text-bordeaux">
              Mary auf dem Teppich
            </h3>
            <p>
              Über vier Jahre lang trug Mary einen steinharten Knoten im Magen.
              Ihr Nervensystem war zu einem einzigen Alarmzustand verkommen:
              jedes Vibrieren des Handys ein Zucken — wäre es Wärme oder
              eiskalte Zurückweisung? Wachsamkeit war ihre einzige
              Überlebensstrategie geworden.
            </p>
            <p>
              An diesem stillen Abend wählt sie einen anderen Weg. Sie setzt
              sich bewusst auf den Teppich, spürt den festen Boden unter sich,
              legt die rechte Hand auf den Bauch, die linke aufs Herz. Dann
              beginnt sie, die Panik mit Biologie zu überschreiben:{" "}
              <strong>vier Sekunden einatmen, sieben Sekunden die Luft anhalten,
              acht Sekunden ausatmen</strong>.
            </p>
            <p>
              Schicht für Schicht bricht die neuronale Rüstung auf. Die
              verkrampften Schultern senken sich. Der Knoten löst sich ein
              Stückchen. Ihr von{" "}
              <GlossarTerm termKey="kortisol">Cortisol</GlossarTerm>{" "}
              durchtränkter Körper begreift zum ersten Mal seit Jahren:{" "}
              <strong>Die Gefahr ist vorbei.</strong> Keine plötzlichen
              Abbrüche. Keine Lügen. Keine berechnende Kälte. Sie ist allein —
              und sie ist endlich sicher.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Diagnose · 3 Zustände ── */}
      <Section
        icon={<Brain className="h-4 w-4" />}
        label="Diagnose · Die drei Zustände deines Nervensystems"
      >
        <div className="rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-graphite/85 shadow-glass">
          <p>
            Stephen Porges entwickelte 2011 die{" "}
            <GlossarTerm termKey="polyvagal-theorie">Polyvagal-Theorie</GlossarTerm>
            . Sie erklärt, warum dein Körper in dieser Beziehung dauerhaft im
            Überlebensmodus war — und es nach der Trennung oft noch immer ist.
            Das autonome Nervensystem kennt drei Zustände, die hierarchisch
            aktiviert werden:
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <PolyVagalCard
            emoji="🌿"
            label="Ventral Vagal"
            color="var(--color-sage)"
            heading="Sicherheit & Verbindung"
            text="Offenheit, Neugier, Kontaktfähigkeit. Atmung tief, Schultern weich. Dein Ziel — und dein Geburtsrecht."
          />
          <PolyVagalCard
            emoji="⚡"
            label="Sympathikus"
            color="var(--color-terracotta)"
            heading="Kampf / Flucht"
            text="Herzrasen, Panik, Wut, Daueranspannung. Dein Alltag in der toxischen Beziehung — und Wochen danach."
          />
          <PolyVagalCard
            emoji="🧊"
            label="Dorsal Vagal"
            color="var(--color-bordeaux)"
            heading="Erstarrung / Shutdown"
            text="Taubheit, Dissoziation, Erschöpfung. Wenn Kampf nicht mehr möglich war, hat dein System abgeschaltet."
          />
        </div>

        <div className="rounded-2xl border-l-4 border-mauve bg-mauve/8 p-4 text-sm leading-relaxed text-graphite/90">
          In einer toxischen Beziehung pendelt das System dauerhaft zwischen
          Sympathikus und dorsalem Vagus. Der ventrale Vagus — der Zustand
          echter Sicherheit — wird systematisch untergraben. Nach der Trennung
          bleibt das System in Alarmbereitschaft, weil es gelernt hat:{" "}
          <em>Ruhe ist gefährlich, weil auf Ruhe immer der nächste Einbruch
          folgte.</em> No Contact + Körperarbeit geben deinem System die
          Signale, die es braucht, um zurückzufinden.
        </div>
      </Section>

      {/* ── Lösung · Vagus-Reset ── */}
      <Section
        icon={<Lightbulb className="h-4 w-4" />}
        label="Lösung · Somatische Marker & Vagus-Reset"
      >
        <CalloutBold
          kind="science"
          title="Warum Körperarbeit schneller wirkt als Reden"
          source="Damasio (1994) · Van der Kolk (2014) · Levine (1997) · Porges (2011)"
        >
          <p>
            Antonio Damasio prägte den Begriff der{" "}
            <GlossarTerm termKey="somatische-marker">somatischen Marker</GlossarTerm>
            : körperliche Signale — Engegefühl in der Brust, Übelkeit, ein sich
            zusammenziehender Magen — die dir blitzschnell, unterhalb der
            Bewusstseinsschwelle, sagen, ob etwas gut oder schlecht für dich
            ist. In einer toxischen Beziehung hast du diese Signale systematisch
            umgedeutet: Was Angst war, wurde als Aufregung gelabelt; was
            Erschöpfung war, als mangelnde Belastbarkeit.
          </p>
          <p>
            Bessel van der Kolk zeigt: Trauma speichert sich im Körper — in
            Atemmustern, Haltung, Herzfrequenzvariabilität. Rein kognitive
            Arbeit erreicht diese Speicher oft nicht. Peter Levines Somatic
            Experiencing setzt hier an: Durch achtsame Körperwahrnehmung werden
            blockierte Überlebensreaktionen entladen — ohne Retraumatisierung.
          </p>
        </CalloutBold>

        <h4 className="mt-2 font-display text-base font-bold text-bordeaux">
          Vagus-Reset · Vier Sofort-Techniken
        </h4>
        <p className="text-xs text-graphite/75">
          Diese Techniken wirken direkt auf das autonome Nervensystem — ohne
          Umweg über den rationalen Verstand. Übe sie regelmäßig, nicht erst in
          der Krise.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <ResetCard
            emoji="🧊"
            color="var(--color-sage)"
            title="Kaltes Wasser"
            text="Gesicht 30 Sek. in kaltes Wasser tauchen oder Eiswürfel halten. Aktiviert den Tauchreflex — sofortige Herzfrequenzsenkung."
          />
          <ResetCard
            emoji="🎵"
            color="var(--color-mauve)"
            title="Summen oder Singen"
            text="Laut summen oder singen. Der Vagusnerv verläuft durch den Kehlkopf — Vibration stimuliert ihn direkt."
          />
          <ResetCard
            emoji="🌬️"
            color="var(--color-terracotta)"
            title="4-7-8 Atmung"
            text="4 Sek. ein · 7 Sek. halten · 8 Sek. aus. Verlängerte Ausatmung aktiviert den parasympathischen Ast (siehe Übung 2)."
          />
          <ResetCard
            emoji="👁️"
            color="var(--color-bordeaux)"
            title="Panorama-Blick"
            text="Augen langsam von links nach rechts bewegen, ohne den Kopf zu drehen. Signalisiert: keine Bedrohung in Sicht."
          />
        </div>
      </Section>

      {/* ── Übungen ── */}
      <Section icon={<Wind className="h-4 w-4" />} label="Übungen · Deine vier Werkzeuge">
        <div className="space-y-5">
          {/* Übung 1 · Körper-Radar */}
          <PillCloud
            slug={SLUG}
            storageKey="koerper_radar"
            title="Übung 1 · Mein Körper-Radar"
            subtitle={`Erinnere dich an die letzte belastende Interaktion. Wo hat dein Körper „Nein" gesagt — schon bevor dein Kopf es wusste?`}
            meta="🫀 Somatische Inventur · ~5 Min · Mehrfachauswahl"
            accent="sage"
            pills={[
              { id: "hals", label: "Kloss im Hals" },
              { id: "brust", label: "Druck auf der Brust" },
              { id: "magen", label: "Magenkrämpfe" },
              { id: "schulter", label: "Schultern hoch" },
              { id: "atem", label: "Flacher Atem" },
              { id: "herz", label: "Herzrasen" },
              { id: "kalt", label: "Kalte Hände" },
              { id: "taub", label: "Taubheit / Dissoziation" },
              { id: "uebel", label: "Übelkeit" },
              { id: "erschoepft", label: "Bleierne Erschöpfung" },
            ]}
          />

          <Reflection3Step
            slug={SLUG}
            title="Übung 1b · Was wollte mein Körper sagen?"
            subtitle="Übersetze das Signal in Worte. Dein Körper hat schon vor Monaten gewusst, was dein Kopf nicht zulassen wollte."
            meta="🗣️ Übersetzungsarbeit · ~5 Min"
            accent="sage"
            steps={[
              {
                key: "radar_situation",
                label: "Welche Situation war das?",
                placeholder: "z.B. Sie hat mein Geburtstagsgeschenk vergessen und ist genervt geworden …",
                rows: 2,
              },
              {
                key: "radar_signal",
                label: "Welches körperliche Signal war am stärksten?",
                placeholder: "z.B. Druck auf der Brust und Atem flach …",
                rows: 2,
              },
              {
                key: "radar_satz",
                label: "Wenn dieser Körperteil sprechen könnte, würde er sagen:",
                placeholder: 'z.B. „Komm mir nicht zu nah." / „Das ist nicht sicher." / „Ich glaube ihr nicht."',
                rows: 3,
              },
            ]}
          />

          {/* Übung 2 · Atem-Pacer */}
          <BreathPacer slug={SLUG} totalCycles={6} />

          {/* Übung 3 · Butterfly Hug */}
          <ButterflyHug slug={SLUG} />

          {/* Vibe-Check */}
          <NervousSystemCheck slug={SLUG} />

          {/* 5-4-3-2-1 Grounding ist als Notfall-Tool im SOS-Drawer (roter Button rechts unten) — hier bewusst nicht doppeln. */}
          <div className="rounded-2xl border-l-4 border-bordeaux bg-bordeaux/8 p-4 text-sm leading-relaxed text-graphite/85">
            <p className="font-display text-sm font-bold text-bordeaux">
              🆘 Flashback-Stopper · 5-4-3-2-1 lebt im SOS-Koffer
            </p>
            <p className="mt-1.5 text-xs">
              Bei plötzlichen Bildern, Herzrasen oder weggleitendem Zeitgefühl
              brauchst du keine Vorbereitung — du brauchst <strong>sofort</strong>{" "}
              ein Werkzeug. Tippe rechts unten auf den roten SOS-Button. Dort
              wartet die geführte 5-4-3-2-1-Übung jederzeit auf dich, aus jedem
              Kapitel heraus.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Deep Dive ── */}
      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive · Warum der Körper das letzte Wort hat">
        <CalloutBold
          kind="deepdive"
          title="Van der Kolk · Damasio · Levine · Porges"
          source="The Body Keeps the Score (2014) · Descartes' Error (1994) · Waking the Tiger (1997) · The Polyvagal Theory (2011)"
        >
          <p>
            Bessel van der Kolk fasste 2014 zusammen: Traumatische Erfahrungen
            speichern sich nicht nur als Erinnerungen, sondern als{" "}
            <strong>körperliche Zustände</strong> — in Atemmustern,
            Muskelspannung und Herzfrequenzvariabilität. Rein kognitive Arbeit
            erreicht diese somatischen Speicher oft nicht.
          </p>
          <p>
            Damasios Somatic-Marker-Hypothese ergänzt: Körperliche Signale
            beeinflussen Entscheidungen schneller als rationale Analyse — in
            toxischen Beziehungen wurden diese Signale systematisch
            umgedeutet. Heilung beginnt damit, dem Körper wieder zuzuhören,
            bevor der rationalisierende Verstand das Wort ergreift.
          </p>
          <p>
            Porges (2011) liefert das neurobiologische Fundament: Der ventrale
            Vagus — der evolutionär jüngste Ast des Nervensystems — ist nur
            aktiv, wenn das System echte Sicherheit registriert. In toxischen
            Beziehungen wird dieser Ast systematisch deaktiviert: durch
            Unvorhersehbarkeit, Drohungen und Schweigen. Körperorientierte
            Interventionen wie Atem, Panorama-Blick oder Butterfly Hug zielen{" "}
            <em>direkt</em> auf die ventrale Vagus-Aktivierung — sie
            signalisieren Sicherheit, bevor der Verstand mitdenkt.
          </p>
        </CalloutBold>

        <aside
          className="mt-3 rounded-2xl border-2 border-sage/30 bg-sage/8 p-4"
          style={{ borderLeft: "5px solid var(--color-sage)" }}
        >
          <div className="flex items-start gap-3">
            <Quote className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
            <p className="text-sm italic leading-relaxed text-graphite/85">
              „Sandra fragt nach einem Treffen ‚zur Aussprache'. Marys Kopf
              sagt: ‚Ja, vielleicht kriegen wir einen Abschluss.' Aber ihr
              Magen zieht sich zusammen, ihre Schultern wandern zu den Ohren.
              Früher hätte Mary das als Aufregung uminterpretiert. Heute spürt
              sie das <strong>Nein</strong>. Sie schreibt: ‚Das ist gerade
              nicht möglich für mich.'"
            </p>
          </div>
        </aside>
      </Section>

      {/* ── Reflexionsfrage ── */}
      <Reflection3Step
        slug={SLUG}
        title="Reflexion · Wem hast du jahrelang nicht zugehört?"
        subtitle="Eine Einladung — neugierig, nicht vorwurfsvoll."
        meta="🌸 Tiefenfrage · ~10 Min"
        accent="mauve"
        steps={[
          {
            key: "refl_signal",
            label: "An welche körperlichen Signale erinnerst du dich, die du immer wieder übergangen hast?",
            placeholder: "z.B. Magendrücken vor jedem ihrer Anrufe …",
            rows: 3,
          },
          {
            key: "refl_warum",
            label: "Was hast du dir damals stattdessen erzählt?",
            placeholder: 'z.B. „Ich bin halt zu sensibel." / „Es liegt an mir." …',
            rows: 3,
          },
          {
            key: "refl_jetzt",
            label: "Was würdest du heute zu diesem Körper sagen?",
            placeholder: 'z.B. „Du hattest Recht. Es tut mir leid, dass ich dich nicht gehört habe." …',
            rows: 3,
          },
        ]}
      />

      {/* ── Begleitende Meditation ── */}
      <MeditationCard
        title="Nervensystem beruhigen — Sanfte Erdung bei Stress & Unruhe"
        duration="13 Min"
        source="ChakraTunes · Vagusnerv-Aktivierung & somatische Visualisierung"
        youtubeId="1-vFTMy5DSU"
      />

      {/* ── Transformationsziele ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="Polyvagal-Aktivierung & somatische Wiederverbindung"
        goals={[
          { id: "g1", text: "Ich kann die drei Zustände meines Nervensystems benennen — Ventral, Sympathikus, Dorsal." },
          { id: "g2", text: "Ich habe das Körper-Radar mindestens einmal angewendet und meine Top-Signale identifiziert." },
          { id: "g3", text: "Ich nutze den 4-7-8-Atem als Vagus-Reset, wenn mich ein Trigger erwischt." },
          { id: "g4", text: "Ich nehme körperliche Warnsignale als Information ernst — nicht als Schwäche." },
          { id: "g5", text: "Ich habe den Butterfly Hug ausprobiert und seine Wirkung selbst erlebt." },
          { id: "g6", text: "Ich weiß, wo der SOS-Button lebt — und dass dort 5-4-3-2-1, TIPP, STOPP, Urge-Surf und 4-7-8-Atem jederzeit warten." },
        ]}
      />
    </article>
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

function PolyVagalCard({
  emoji,
  label,
  color,
  heading,
  text,
}: {
  emoji: string;
  label: string;
  color: string;
  heading: string;
  text: string;
}) {
  return (
    <div
      className="rounded-2xl bg-white/75 p-4 shadow-soft"
      style={{ borderTop: `5px solid ${color}` }}
    >
      <div className="text-2xl">{emoji}</div>
      <p className="mt-1 font-display text-sm font-bold uppercase tracking-wider" style={{ color }}>
        {label}
      </p>
      <p className="mt-1 font-display text-sm font-bold text-bordeaux">{heading}</p>
      <p className="mt-1.5 text-xs leading-snug text-graphite/80">{text}</p>
    </div>
  );
}

function ResetCard({
  emoji,
  color,
  title,
  text,
}: {
  emoji: string;
  color: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="rounded-xl bg-white/75 p-4 shadow-glass"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{emoji}</span>
        <div className="min-w-0">
          <p className="font-display text-sm font-bold text-bordeaux">{title}</p>
          <p className="mt-1 text-xs leading-relaxed text-graphite/80">{text}</p>
        </div>
      </div>
    </div>
  );
}
