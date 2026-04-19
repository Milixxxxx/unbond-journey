// Zentrales Glossar – Tooltips überall konsistent.
// Spätere Glossar-Seite generiert sich daraus automatisch.

export type GlossarEntry = {
  term: string;
  short: string; // für Tooltip
  long?: string; // für Glossar-Seite
};

export const GLOSSAR: Record<string, GlossarEntry> = {
  "extinction-burst": {
    term: "Extinction Burst",
    short:
      "Kurze Intensivierung des Suchtverhaltens, wenn die gewohnte Belohnung ausbleibt — das letzte Aufbäumen vor dem Erlöschen.",
  },
  "self-expansion": {
    term: "Self-Expansion Model",
    short:
      "Aron & Aron (1986): Wir wachsen durch Erweiterung — neue Erfahrungen, Menschen, Skills integrieren wir ins eigene Selbst.",
  },
  "ptg": {
    term: "Posttraumatisches Wachstum",
    short:
      "Tedeschi & Calhoun (2004): Nach Krisen wachsen viele Menschen über den Ausgangszustand hinaus — mit klareren Werten und tieferer Empathie.",
  },
  "act": {
    term: "ACT (Acceptance & Commitment Therapy)",
    short:
      "Hayes et al. (2006): Akzeptiere, was du nicht kontrollieren kannst — und handle nach deinen Werten.",
  },
  "trauma-bonding": {
    term: "Trauma-Bonding",
    short:
      "Emotionale Bindung durch unvorhersehbaren Wechsel aus Nähe und Rückzug – suchtähnlich konditioniert.",
  },
  "intermittierende-verstaerkung": {
    term: "Intermittierende Verstärkung",
    short:
      "Unregelmäßige Belohnungen erzeugen die stärkste Konditionierung – das Prinzip hinter dem Wechsel aus Nähe und Rückzug.",
  },
  "polyvagal": {
    term: "Polyvagal-Theorie",
    short:
      "Neurobiologisches Modell von Porges (2011): Das autonome Nervensystem reagiert auf Sicherheit, Gefahr und Erstarrung.",
  },
  "polyvagal-theorie": {
    term: "Polyvagal-Theorie",
    short:
      "Neurobiologisches Modell von Porges (2011): Das autonome Nervensystem reagiert auf Sicherheit, Gefahr und Erstarrung.",
  },
  "kortisol": {
    term: "Cortisol",
    short:
      "Stresshormon der Nebenniere – bei chronischem Stress dauerhaft erhöht und erschöpfend.",
  },
  "somatische-marker": {
    term: "Somatische Marker",
    short:
      "Körpersignale (Bauchgefühl, Engegefühl), die unbewusst Entscheidungen steuern – Damasio (1994).",
  },
  "negative-reappraisal": {
    term: "Negative Reappraisal",
    short:
      "Bewusste Fokussierung auf negative Aspekte, um Liebesgefühle aktiv zu reduzieren – neurobiologisch messbar.",
  },
  "minority-stress": {
    term: "Minority Stress",
    short:
      "Erhöhtes Stressniveau durch gesellschaftliche Diskriminierung und Stigmatisierung queerer Menschen (Meyer, 2003).",
  },
  "tipp": {
    term: "TIPP-Protokoll",
    short:
      "Temperature, Intense Exercise, Paced Breathing, Progressive Relaxation – sofortige Notfall-Regulation des Nervensystems.",
  },
  "detached-mindfulness": {
    term: "Detached Mindfulness",
    short:
      "Gedanken aus beobachtender Distanz wahrnehmen – ohne sich mit ihnen zu identifizieren oder auf sie zu reagieren.",
  },
  "kognitive-dissonanz": {
    term: "Kognitive Dissonanz",
    short:
      "Zustand, wenn zwei widersprüchliche Überzeugungen gleichzeitig existieren – das Gehirn versucht, den Widerspruch aufzulösen.",
  },
  "urge-surfing": {
    term: "Urge Surfing",
    short:
      "Den Impuls wie eine Welle beobachten – er steigt, erreicht seinen Höhepunkt und fällt wieder ab, ohne dass man handeln muss.",
  },
  "dopamin": {
    term: "Dopamin",
    short:
      "Neurotransmitter des Belohnungssystems – bei Erwartung von Nähe ausgeschüttet, bei Entzug abrupt abfallend.",
  },
  "amygdala-hijacking": {
    term: "Amygdala-Hijacking",
    short:
      "Das Alarmsystem des Gehirns übernimmt die Kontrolle – der präfrontale Kortex (rationales Denken) ist offline.",
  },
  "kintsugi": {
    term: "Kintsugi",
    short:
      "Japanische Kunst: Bruchstellen mit Gold reparieren. Narben sind kein Makel, sondern Teil der Stärke.",
  },
  "defusion": {
    term: "Kognitive Defusion (ACT)",
    short:
      "Gedanken als mentale Ereignisse beobachten („Da ist der Gedanke, dass…“) statt mit ihnen zu fusionieren – Kerntechnik der ACT (Hayes et al., 2006).",
  },
  "kokainentzug": {
    term: "Kokainentzug (Hirnareale)",
    short:
      "Helen Fishers fMRI-Studien zeigen: Liebeskummer aktiviert dieselben Hirnareale (VTA, Nucleus Accumbens, Insula) wie der Entzug von Kokain — neurochemisch identisch.",
  },
  "nucleus-accumbens": {
    term: "Nucleus Accumbens",
    short:
      "Belohnungszentrum im Mittelhirn — feuert bei Drogenkonsum genauso wie bei intermittierender Verstärkung. Es unterscheidet nicht zwischen Kontakt und Substanz.",
  },
  "hoovering": {
    term: "Hoovering",
    short:
      "„Aufsaugen“: Manipulationsversuch, dich nach Trennung wieder in den Bindungs-Zyklus zu ziehen — von freundlichen Nachrichten bis zu False-Self-Tränen (Durvasula).",
  },
};

