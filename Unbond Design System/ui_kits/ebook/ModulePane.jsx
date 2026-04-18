function ModulePane({ moduleIdx, onComplete }) {
  const m = MODULES[moduleIdx];
  return (
    <main style={ebookStyles.main}>
      <div style={ebookStyles.eyebrow}>Modul {m.n} · {moduleIdx < 3 ? 'Stabilisierung' : moduleIdx < 7 ? 'Verstehen' : 'Wachsen'}</div>
      <h1 style={ebookStyles.h1}>{m.t}</h1>
      <p style={ebookStyles.lead}>Du kämpfst nicht gegen die große Liebe. Du kämpfst gegen eine einfache Synapse — und genau die können wir verändern.</p>

      <p style={ebookStyles.p}>Was du gerade erlebst, hat einen Namen und einen Mechanismus. Dein Gehirn reagiert auf emotionale Kälte wie auf eine existenzielle Bedrohung. Das ist keine Schwäche, das ist Biologie — und Biologie lässt sich mit dem richtigen Werkzeug neu verdrahten.</p>

      <div style={ebookStyles.science}>
        <div style={ebookStyles.h4}>🧠 Neurowissenschaft</div>
        <p style={{...ebookStyles.p, marginBottom: 0}}>Dr. Helen Fisher (Rutgers University) hat gezeigt: Das Gehirn einer abgelehnten Liebhaberin zeigt im fMRT dieselben Aktivierungsmuster wie bei Kokain-Entzug. Der Schmerz ist nicht eingebildet — er ist neurochemisch real.</p>
      </div>

      <div style={ebookStyles.story}>
        <div style={{...ebookStyles.h4, color:'#9B7FA4'}}>Marys Geschichte</div>
        „Es war 3:47 Uhr morgens, als ich begriff, dass ich nicht sie vermisste, sondern den Menschen, den ich in ihr gesehen hatte. Diese Unterscheidung hat alles verändert."
      </div>

      <p style={ebookStyles.p}>Im Rest dieses Moduls lernst du, wie intermittierende Verstärkung dein Belohnungssystem trainiert und warum der erste Schritt nicht „vergessen" heißt, sondern „benennen".</p>

      <div style={ebookStyles.exercise}>
        <div style={ebookStyles.h4}>✍️ Übung · 5 Minuten</div>
        <p style={{...ebookStyles.p, marginBottom: 14}}>Benenne ohne Bewertung, was du heute gefühlt hast:</p>
        <input style={ebookStyles.dashInput} placeholder="Heute Morgen fühlte ich…"/>
        <input style={ebookStyles.dashInput} placeholder="Mein Körper reagierte mit…"/>
        <input style={ebookStyles.dashInput} placeholder="Was ich jetzt weiß ist…"/>
      </div>

      <button onClick={onComplete} style={{
        marginTop: 24, padding: '14px 28px', borderRadius: 8, border: 'none',
        background: 'linear-gradient(135deg,#6B3E44,#8B3E44)', color: '#fff',
        fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 1.5,
        textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 4px 18px rgba(107,62,68,0.3)'
      }}>Modul abschließen →</button>
    </main>
  );
}

window.ModulePane = ModulePane;
