const { useState: useToxiState } = React;

function ToxiCometerCTA() {
  const [started, setStarted] = useToxiState(false);
  const [q, setQ] = useToxiState(0);
  const questions = [
    'Hast du oft das Gefühl, an deiner eigenen Wahrnehmung zu zweifeln?',
    'Wechselt sie schnell zwischen intensiver Nähe und eiskaltem Rückzug?',
    'Fühlst du dich nach Gesprächen schuldig, obwohl du nichts getan hast?'
  ];
  return (
    <section id="test" style={landingStyles.section}>
      <div style={landingStyles.glassBox}>
        <span style={landingStyles.eyebrow}>Der ToxiCometer-Test</span>
        {!started ? (
          <>
            <h2 style={{...landingStyles.h2, color: '#F4EDE4', border: 'none', padding: 0}}>15 Fragen. 2 Minuten.<br/>Ein klares Profil.</h2>
            <p style={{color: 'rgba(244,237,228,0.88)', fontSize: 17, lineHeight: 1.7, margin: '16px 0 28px'}}>
              Wissenschaftlich fundiert auf Basis der Forschung von Dr. Helen Fisher und Dr. Stephen Porges. Keine Diagnose — ein Orientierungstool, das dir hilft, das Muster zu benennen.
            </p>
            <button onClick={() => setStarted(true)} style={{...landingStyles.cta, ...landingStyles.ctaBordeaux, border: 'none', cursor: 'pointer'}}>Test jetzt starten</button>
            <p style={{color: 'rgba(244,237,228,0.55)', fontSize: 13, marginTop: 14}}>100% anonym · keine E-Mail nötig</p>
          </>
        ) : (
          <>
            <div style={{display: 'flex', justifyContent: 'space-between', color: '#7A9E8A', fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 14}}>
              <span>Frage {q + 1} von 15</span>
              <span>{Math.round(((q+1)/15)*100)}%</span>
            </div>
            <div style={{height: 4, background: 'rgba(255,255,255,0.12)', borderRadius: 2, marginBottom: 28, overflow: 'hidden'}}>
              <div style={{height: '100%', width: `${((q+1)/15)*100}%`, background: 'linear-gradient(90deg,#7A9E8A,#9B7FA4)', transition: 'width 0.5s'}} />
            </div>
            <h3 style={{fontFamily: 'Poppins, sans-serif', color: '#F4EDE4', fontSize: 24, lineHeight: 1.4, marginBottom: 24, fontWeight: 500}}>{questions[q % questions.length]}</h3>
            <div style={{display: 'grid', gap: 10}}>
              {['Trifft voll zu','Trifft eher zu','Trifft eher nicht zu','Trifft gar nicht zu'].map(lbl => (
                <button key={lbl} onClick={() => setQ(q+1)} style={{
                  background: 'rgba(244,237,228,0.06)', border: '1px solid rgba(122,158,138,0.3)', color: '#F4EDE4',
                  padding: '14px 20px', borderRadius: 10, textAlign: 'left', fontFamily: 'Poppins, sans-serif', fontSize: 15, cursor: 'pointer'
                }}>{lbl}</button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

window.ToxiCometerCTA = ToxiCometerCTA;
