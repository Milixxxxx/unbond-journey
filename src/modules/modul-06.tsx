import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Sparkles,
  Quote,
  Flame,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import {
  PillCloud,
  Reflection3Step,
  CalloutBold,
  TransformationGoals,
  MeditationCard,
  RelapseTrafficLight,
} from "@/components/exercise";

const SLUG = "modul-06";

/**
 * MODUL 06 · Suchtmuster brechen
 *
 * Quelle: UNBOND_Final_v5.html · Schritt 06 (in der Quelle als „Schritt 07" gerendert,
 * laut Memory-Reihenfolge ist es Kapitel 06).
 *
 * Roter Faden:
 *  Nach dem Körper (Modul 05) ist jetzt der Drang dran. Wenn nach Wochen
 *  No Contact plötzlich der stärkste Hunger nach ihr kommt — der Extinction
 *  Burst — entscheidet sich, ob die Sucht stirbt oder ob sie neu anwächst.
 *  Hier bauen wir das Frühwarnsystem (Rückfall-Ampel), kartieren Cues
 *  (Cue-Audit) und ersetzen toxisches Dopamin durch gesunde Belohnung
 *  (Reward Replacement).
 *
 * Vermeidung von Doppelungen:
 *  - Urge Surfing / 4-7-8: bereits global im SOS (modul SOS-Soforthilfe).
 *  - Polyvagal/Atemarbeit: in Modul 05.
 *  - No-Contact-Schleusen: in Modul 03.
 *  - Identitätsarbeit / Self-Expansion: erst in Modul 09.
 */
export function Modul06() {
  return (
    <article className="space-y-7">
      {/* ── Einleitung ── */}
      <ChapterIntro
        title="Kapitel 06 · Suchtmuster brechen"
        keywords={[
          "Extinction Burst",
          "Cue-Audit",
          "Rückfall-Ampel",
          "Reward Replacement",
          "Dopamin-Reset",
        ]}
      >
        <p>
          Wenn nach Wochen No Contact plötzlich der stärkste Drang überhaupt
          einsetzt — Hände zittern, Herz rast, Finger über dem Send-Button —
          ist das <strong>kein Rückfall</strong>. Es ist das letzte Aufbäumen
          einer sterbenden Sucht. Du bist nicht zurück am Anfang. Du bist
          mitten in der Wende.
        </p>
        <p>
          In diesem Kapitel lernst du, deinen ganz persönlichen Spielautomaten
          zu entlarven: Welche Uhrzeit, welcher Ort, welcher Song — was hat
          dein Gehirn alles mit ihr verknotet? Du baust deine Rückfall-Ampel
          und ersetzt das toxische Dopamin durch ein neues, eigenes
          Belohnungssystem.
        </p>
      </ChapterIntro>

      {/* ── Story ── */}
      <Section
        icon={<ScrollText className="h-4 w-4" />}
        label="Story · Das Feuer vor dem Erlöschen"
      >
        <div className="glass-card-strong p-5">
          <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
            <h3 className="font-display text-base font-bold text-bordeaux">
              Mary, Tag 21 · Der absolute Tiefpunkt
            </h3>
            <p>
              Einundzwanzig Tage ohne Kontakt. Mary hatte begonnen, sich
              stabiler zu fühlen — der rohe Schmerz einem tauben, berechenbaren
              Pochen gewichen. Dann, an einem regnerischen Donnerstagabend,
              trifft es sie wie ein physischer Schlag: ein unwiderstehlicher
              Drang, Sandra zu kontaktieren. Herz rasend, Hände zitternd, der
              Verstand im Panikmodus: <em>Nur eine Nachricht. Sag ihr, dass du
              sie hasst. Dass du sie liebst. Egal was — aber tu es jetzt.</em>
            </p>
            <p>
              Früher hätte das unweigerlich zur Kurzschlussreaktion geführt:
              eine nächtliche Sprachnachricht voller Tränen, die Sandra am
              nächsten Tag ignoriert oder kalt als Waffe gegen Mary gewendet
              hätte. Das Handy liegt in ihrer Hand. Ein einziger Touch trennt
              sie von der kurzfristigen Erlösung. Jede Zelle ihres Körpers
              verlangt nach dem toxischen Dopamin-Hit.
            </p>
            <p>
              Doch Mary weiß jetzt: Das ist nicht die Rückkehr der Liebe. Kein
              Zeichen des Universums. Es ist der{" "}
              <strong>Extinction Burst</strong> — das letzte verzweifelte
              Aufbäumen ihres süchtigen Nervensystems, weil die dysfunktionale
              Belohnung ausbleibt. Wie ein sterbendes Feuer, das kurz vor dem
              Erlöschen noch einmal aufloht. Sie legt das Handy zitternd auf
              den Tisch, atmet — und ruft ihre engste Freundin an statt Sandra.
              Sie schwitzt, sie weint, aber sie überlebt die Nacht. Am nächsten
              Morgen ist der Drang verflogen. Das Feuer brennt ab.{" "}
              <strong>Mary ist stärker als der Reflex.</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* ── Diagnose ── */}
      <Section
        icon={<Brain className="h-4 w-4" />}
        label="Diagnose · Extinction Burst & Cue-Reaktivität"
      >
        <CalloutBold
          kind="science"
          title="Warum dein Gehirn keinen Unterschied macht"
          source="O'Brien et al. (1992) · Marlatt & Gordon (1985) · Bouton (2002)"
        >
          <p>
            In der Suchtforschung spricht man vom{" "}
            <GlossarTerm termKey="extinction-burst">Extinction Burst</GlossarTerm>
            : Wenn eine gelernte Belohnung ausbleibt, verstärkt das Gehirn
            zunächst genau das Verhalten, das früher zur Belohnung führte. Das
            ist kein Versagen — es ist das Gegenteil. Es bedeutet, dass die
            Suchtstruktur zu bröckeln beginnt. Wenn du nach drei Wochen
            plötzlich einen massiven Drang verspürst, ist das nicht der
            Rückfall. Es ist das <strong>Sterben der Sucht</strong>.
          </p>
          <p>
            O&rsquo;Brien et al. (1992) zeigten: Konditionierte Umgebungsreize —
            Cues — lösen bei suchtähnlichen Bindungen dieselben physiologischen
            Reaktionen aus wie bei Substanzabhängigkeit. Ein Lied, eine
            Uhrzeit, ein Ort, ein Geruch. Dein Gehirn hat Hunderte unsichtbarer
            Verknüpfungen gespeichert, die automatisch das Suchtzentrum
            aktivieren — ohne dein Zutun.
          </p>
          <p>
            Marlatt &amp; Gordon (1985) identifizierten <strong>drei
            Hochrisiko-Kategorien</strong> für Rückfall: negative emotionale
            Zustände (Einsamkeit, Trauer), sozialer Druck und direkter
            Cue-Kontakt. Bouton (2002) ergänzte: Konditionierte Reaktionen
            löschen sich nie vollständig — sie werden durch neue, konkurrierende
            Assoziationen <em>überlagert</em>. Deshalb kann ein einziger
            Profil-Klick nach Monaten alles zurückwerfen. Die alte Bahn ist
            nicht weg. Sie ist nur leiser geworden.
          </p>
        </CalloutBold>

        <div className="grid gap-3 sm:grid-cols-2">
          <DiagnosisCard
            emoji="🔥"
            color="var(--color-bordeaux)"
            label="Extinction Burst"
            heading="Das Feuer vor dem Erlöschen"
            text="Tag 14, 21, 30 · plötzlicher Drang. Nicht Liebe. Nicht das Universum. Es ist die Sucht, die stirbt."
          />
          <DiagnosisCard
            emoji="🧲"
            color="var(--color-mauve)"
            label="Cue-Reaktivität"
            heading="Die unsichtbaren Auslöser"
            text="Lieder, Orte, Uhrzeiten, Düfte — dein Gehirn hat sie alle mit ihr verknotet. Erkennen ist der erste Knoten lösen."
          />
        </div>
      </Section>

      {/* ── Lösung ── */}
      <Section
        icon={<Lightbulb className="h-4 w-4" />}
        label="Lösung · Cue-Audit & Rückfall-Ampel"
      >
        <div className="rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-graphite/85 shadow-glass">
          <p>
            Die Rückfallforschung zeigt klar: Die konsequente Reduktion von
            Umgebungs-Cues ist ein <strong>stärkerer Prädiktor</strong> für
            erfolgreiche Remission als Motivation oder Willenskraft. Du
            kämpfst nicht gegen Gefühle — du kämpfst gegen konditionierte
            neuronale Bahnen. Das ist ein biologischer Prozess, kein
            Charaktermangel.
          </p>
          <p className="mt-2">
            Die <strong>Rückfall-Ampel</strong> ist kein Warnsystem für
            Versagen, sondern ein Früherkennungssystem für Zustände, die ohne
            Intervention zur Krise werden. Rot ist kein Urteil. Rot ist ein
            Handlungsauftrag. Und wer rechtzeitig handelt, fällt nicht.
          </p>
        </div>
      </Section>

      {/* ── Übungen ── */}
      <Section
        icon={<Sparkles className="h-4 w-4" />}
        label="Übungen · Drei Werkzeuge gegen den Sog"
      >
        <div className="space-y-5">
          {/* Übung 1 · Cue-Audit als PillCloud */}
          <PillCloud
            slug={SLUG}
            storageKey="cue_audit"
            title="Übung 1 · Cue-Audit · Was triggert dein Suchtzentrum?"
            subtitle="Klick alles an, was dein Gehirn mit ihr verknotet hat. Jeder erkannte Cue ist ein gelöster Knoten — und ein zukünftiger Rückfall verhindert."
            meta="🧲 Inventur · ~10 Min · Mehrfachauswahl"
            accent="mauve"
            pills={[
              { id: "musik", label: "Bestimmte Lieder / Playlists" },
              { id: "uhrzeit", label: "Eine bestimmte Uhrzeit (z.B. 22 Uhr)" },
              { id: "ort", label: "Orte, an denen ihr wart" },
              { id: "duft", label: "Ein Parfum / Geruch" },
              { id: "instagram", label: "Social-Media-Apps" },
              { id: "wochentag", label: "Ein bestimmter Wochentag" },
              { id: "wetter", label: "Wetter (Regen, erster Schnee …)" },
              { id: "essen", label: "Ein gemeinsames Essen / Restaurant" },
              { id: "kleidung", label: "Etwas, das sie dir geschenkt hat" },
              { id: "alkohol", label: "Alkohol / spätes Wachsein" },
              { id: "freunde", label: "Gemeinsame Freund:innen" },
              { id: "jahrestag", label: "Jahres- oder Geburtstag" },
              { id: "einsamkeit", label: "Stille / Alleinsein am Abend" },
              { id: "mueder", label: "Müdigkeit / Hunger" },
            ]}
          />

          {/* Übung 2 · Plan pro Cue */}
          <Reflection3Step
            slug={SLUG}
            title="Übung 2 · Mein Anti-Cue-Plan"
            subtitle="Wähle die DREI gefährlichsten Cues von oben aus. Schreib für jeden eine konkrete Alternative auf — bevor die Krise eintritt, nicht danach."
            meta="🛡 Plan-B · ~10 Min"
            accent="bordeaux"
            steps={[
              {
                key: "plan_cue1",
                label: "Cue 1 (mein gefährlichster) — und mein Notfallplan dafür",
                placeholder:
                  'z.B. „Sonntag 22 Uhr Stille → Anruf bei Lara einplanen + neue Audiobook-Playlist."',
                rows: 3,
              },
              {
                key: "plan_cue2",
                label: "Cue 2 — und mein Notfallplan dafür",
                placeholder:
                  'z.B. „Unser altes Café → für 90 Tage komplett meiden, neue Route zur Arbeit."',
                rows: 3,
              },
              {
                key: "plan_cue3",
                label: "Cue 3 — und mein Notfallplan dafür",
                placeholder:
                  'z.B. „Instagram → App-Limit 10 Min/Tag + ihr Profil blockiert, nicht nur entfolgt."',
                rows: 3,
              },
            ]}
          />

          {/* Übung 3 · Reward Replacement */}
          <PillCloud
            slug={SLUG}
            storageKey="reward_replacement"
            title="Übung 3 · Reward Replacement · Neues Dopamin auftanken"
            subtitle="Welche kleinen, gesunden Belohnungen kannst du diese Woche dreimal in deinen Tag einbauen? Jede neue Quelle ersetzt einen Tropfen toxisches Dopamin durch einen eigenen."
            meta="💎 Belohnungssystem neu verdrahten · ~5 Min"
            accent="sage"
            pills={[
              { id: "spaziergang", label: "Spaziergang in der Sonne" },
              { id: "kaltdusche", label: "Kalte Dusche / Wechseldusche" },
              { id: "sport", label: "20 Min Sport / Yoga" },
              { id: "freund", label: "Anruf bei einer Freundin" },
              { id: "neue_playlist", label: "Neue Playlist (nicht eure)" },
              { id: "buch", label: "30 Min Buch / Audiobook" },
              { id: "kreativ", label: "Kreatives Tun (Malen, Schreiben …)" },
              { id: "kochen", label: "Etwas Neues kochen" },
              { id: "lernen", label: "Neue Skill üben (Sprache, Tool …)" },
              { id: "natur", label: "Wald / Park / Wasser" },
              { id: "cafe", label: "Neues Café entdecken" },
              { id: "haustier", label: "Zeit mit Tier(en)" },
              { id: "tanz", label: "Tanzen (allein, in der Küche)" },
              { id: "warm", label: "Warmes Bad mit Salz" },
            ]}
          />

          {/* Vibe-Check · Rückfall-Ampel */}
          <RelapseTrafficLight slug={SLUG} />
        </div>
      </Section>

      {/* ── Deep Dive ── */}
      <Section
        icon={<Microscope className="h-4 w-4" />}
        label="Deep Dive · Warum Cues stärker sind als Vorsätze"
      >
        <CalloutBold
          kind="deepdive"
          title="O'Brien · Marlatt & Gordon · Bouton · Witkiewitz"
          source="Cue-Reaktivität (1992) · Relapse Prevention (1985) · Bouton (2002) · Urge Surfing (2004)"
        >
          <p>
            O&rsquo;Brien et al. (1992) zeigten in wegweisenden Studien:
            Konditionierte Umgebungsreize lösen bei suchtähnlichen Bindungen
            dieselben physiologischen Reaktionen aus wie bei
            Substanzabhängigkeit. Ein Lied, eine Uhrzeit, ein Ort — das Gehirn
            hat Hunderte unsichtbarer Verknüpfungen gespeichert, die
            automatisch das Suchtzentrum aktivieren.
          </p>
          <p>
            Marlatt &amp; Gordon (1985) identifizierten in ihrer
            Rückfallforschung drei Hochrisiko-Kategorien: negative emotionale
            Zustände, sozialer Druck und direkter Cue-Kontakt. Die konsequente
            Reduktion von Umgebungs-Cues erwies sich als{" "}
            <strong>stärkerer Prädiktor</strong> für erfolgreiche Remission als
            Motivation oder Willenskraft allein.
          </p>
          <p>
            Bouton (2002) ergänzte: Konditionierte Reaktionen löschen sich nie
            vollständig — sie werden durch neue, konkurrierende Assoziationen
            überlagert. Witkiewitz &amp; Marlatt (2004) zeigten in klinischen
            Studien, dass{" "}
            <GlossarTerm termKey="urge-surfing">Urge Surfing</GlossarTerm> die
            Rückfallrate signifikant senkt: Das bloße Aushalten des Cravings
            ohne Handeln schwächt die neuronale Verknüpfung zwischen Cue und
            Verhalten ab. Das Gehirn lernt: Drang bedeutet keine Verpflichtung.
          </p>
        </CalloutBold>

        <aside
          className="mt-3 rounded-2xl border-2 border-mauve/30 bg-mauve/8 p-4"
          style={{ borderLeft: "5px solid var(--color-mauve)" }}
        >
          <div className="flex items-start gap-3">
            <Quote className="mt-0.5 h-4 w-4 flex-shrink-0 text-mauve" />
            <p className="text-sm italic leading-relaxed text-graphite/85">
              „Mary legt das Handy zitternd auf den Tisch. Sie atmet. Sie ruft
              Lara an statt Sandra. Sie schwitzt, sie weint, aber sie überlebt
              die Nacht. Am nächsten Morgen ist der Drang verflogen. Das Feuer
              brennt ab. Sie ist stärker als der Reflex."
            </p>
          </div>
        </aside>
      </Section>

      {/* ── Reflexion ── */}
      <Reflection3Step
        slug={SLUG}
        title="Reflexion · Welcher Drang bist du heute geworden?"
        subtitle="Eine ehrliche Standortbestimmung — kein Richtig, kein Falsch."
        meta="🌸 Tiefenfrage · ~5 Min"
        accent="bordeaux"
        steps={[
          {
            key: "drang_letzter",
            label: "Wann war dein letzter Extinction Burst — und was hast du getan?",
            placeholder: 'z.B. „Vorgestern Nacht. Ich habe geweint und meiner Schwester geschrieben statt ihr."',
            rows: 4,
          },
          {
            key: "drang_lehre",
            label: "Was hast du daraus über dich gelernt?",
            placeholder: 'z.B. „Dass ich nicht mehr glaube, dass der Drang Wahrheit bedeutet."',
            rows: 4,
          },
        ]}
      />

      {/* ── Mikro-Botschaft ── */}
      <div
        className="rounded-2xl border-2 border-bordeaux/15 bg-gradient-to-br from-bordeaux/5 via-cream/60 to-sage/8 p-5 sm:p-6"
        style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
      >
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-bordeaux" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bordeaux">
            Mikro-Botschaft an dich
          </p>
        </div>
        <p className="mt-2 font-display text-base leading-relaxed text-bordeaux sm:text-lg">
          Wenn das Feuer am stärksten brennt — bist du am nächsten daran,
          dass es verlischt.
        </p>
      </div>

      {/* ── Meditation ── */}
      <MeditationCard
        title="Geführte Mindfulness · Den Drang aushalten"
        duration="5 Min"
        source="Great Meditation · Mindfulness Practice"
        youtubeId="ssss7V1_eyA"
      />

      {/* ── Transformationsziele ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="Suchtmuster brechen · Reward Replacement"
        goals={[
          { id: "g1", text: "Ich verstehe, dass ein massiver Drang nach Wochen No Contact ein Extinction Burst ist — kein Rückfall." },
          { id: "g2", text: "Ich habe meine persönlichen Cues kartiert und kenne meine Top-3-Risiken." },
          { id: "g3", text: "Ich habe für jeden Top-Cue einen konkreten Anti-Cue-Plan formuliert." },
          { id: "g4", text: "Ich habe mindestens 3 neue, gesunde Belohnungen ausgewählt und diese Woche eingebaut." },
          { id: "g5", text: "Ich kenne die Rückfall-Ampel und kann ehrlich sagen, wo ich heute stehe." },
          { id: "g6", text: "Ich weiß: Drang ≠ Wahrheit. Ich muss nicht alles tun, was mein Gehirn verlangt." },
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

function DiagnosisCard({
  emoji,
  color,
  label,
  heading,
  text,
}: {
  emoji: string;
  color: string;
  label: string;
  heading: string;
  text: string;
}) {
  return (
    <div
      className="rounded-2xl bg-white/75 p-4 shadow-soft"
      style={{ borderTop: `5px solid ${color}` }}
    >
      <div className="text-2xl">{emoji}</div>
      <p
        className="mt-1 font-display text-xs font-bold uppercase tracking-wider"
        style={{ color }}
      >
        {label}
      </p>
      <p className="mt-1 font-display text-sm font-bold text-bordeaux">
        {heading}
      </p>
      <p className="mt-1.5 text-xs leading-snug text-graphite/80">{text}</p>
    </div>
  );
}
