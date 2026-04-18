const { useState: useFaqState } = React;

const FAQS = [
  { q: 'Kann ich UNBOND auch nutzen, wenn ich heterosexuell bin?', a: 'Ja. UNBOND ist für lesbische Frauen und WLW entwickelt — die beschriebenen Dynamiken sind jedoch geschlechtsunabhängig und lassen sich 1:1 übertragen.' },
  { q: 'Ist der ToxiCometer-Test wirklich kostenlos und anonym?', a: 'Ja, vollständig kostenlos und 100% anonym. Deine Antworten werden nicht gespeichert und nicht an Dritte weitergegeben.' },
  { q: 'Kann der Test Narzissmus diagnostizieren?', a: 'Nein — er ist ein Orientierungstool, keine klinische Diagnose. Für eine professionelle Einschätzung empfehlen wir eine trauma-informierte Therapeutin.' },
  { q: 'Was ist Trauma Bonding?', a: 'Trauma Bonding entsteht durch intermittierende Verstärkung — der unvorhersehbare Wechsel zwischen Zuneigung und Abwertung aktiviert dieselben Gehirnregionen wie Sucht. Das ist Neurobiologie, kein persönliches Versagen.' }
];

function FAQItem({ f, i }) {
  const [open, setOpen] = useFaqState(i === 0);
  return (
    <div style={{background: 'rgba(15,20,45,0.45)', backdropFilter: 'blur(18px)', border: '1px solid rgba(122,158,200,0.18)', borderRadius: 12, marginBottom: 10, overflow: 'hidden'}}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', background: 'transparent', border: 'none', padding: '18px 22px', textAlign: 'left',
        color: '#F4EDE4', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, cursor: 'pointer',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <span>{f.q}</span>
        <span style={{color: '#7A9E8A', fontSize: 20, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s'}}>+</span>
      </button>
      {open && <div style={{padding: '0 22px 20px', color: 'rgba(244,237,228,0.82)', fontSize: 14, lineHeight: 1.75, fontFamily: 'Lato, sans-serif'}}>{f.a}</div>}
    </div>
  );
}

function FAQ() {
  return (
    <section style={landingStyles.section} id="faq">
      <h2 style={{...landingStyles.h2, textAlign: 'center', color: '#F4EDE4'}}>Häufige Fragen</h2>
      <div style={{maxWidth: 720, margin: '32px auto 0'}}>
        {FAQS.map((f, i) => <FAQItem f={f} i={i} key={i} />)}
      </div>
    </section>
  );
}

window.FAQ = FAQ;
