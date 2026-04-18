const MODULES = [
  {n:'01', t:'Die Diagnose'},
  {n:'02', t:'Abstand schaffen — akut stabilisieren'},
  {n:'03', t:'Das Spielautomaten-Gehirn'},
  {n:'04', t:'Polyvagal & Nervensystem'},
  {n:'05', t:'Gaslighting entschlüsseln'},
  {n:'06', t:'Täter-Opfer-Umkehr'},
  {n:'07', t:'Grenzen setzen — ohne Schuld'},
  {n:'08', t:'Die Trauer der Hoffnung'},
  {n:'09', t:'Wer du ohne sie bist'},
  {n:'10', t:'Zukunft bauen — Kintsugi'},
];

function Sidebar({active, setActive, done}) {
  const pct = Math.round((done.size / MODULES.length) * 100);
  return (
    <aside style={ebookStyles.sidebar}>
      <div style={ebookStyles.logo}>UNBOND</div>
      <div style={ebookStyles.tagline}>Breaking Chains</div>
      <div style={ebookStyles.progressLabel}>Fortschritt · {pct}%</div>
      <div style={ebookStyles.progressBar}><div style={{...ebookStyles.progressFill, width: `${pct}%`}}/></div>
      {MODULES.map((m, i) => {
        const isActive = i === active;
        const isDone = done.has(i);
        return (
          <div key={i} style={{...ebookStyles.tocItem, ...(isActive ? ebookStyles.tocActive : {})}} onClick={() => setActive(i)}>
            <div style={{...ebookStyles.tocNum, ...(isDone ? ebookStyles.tocDone : {})}}>{isDone ? '✓' : m.n}</div>
            <div>{m.t}</div>
          </div>
        );
      })}
    </aside>
  );
}

window.Sidebar = Sidebar;
window.MODULES = MODULES;
