const { useState: useTimerState, useEffect: useTimerEffect } = React;

function UrgeTimer() {
  const [running, setRunning] = useTimerState(false);
  const [sec, setSec] = useTimerState(20 * 60);
  useTimerEffect(() => {
    if (!running || sec <= 0) return;
    const t = setTimeout(() => setSec(sec-1), 1000);
    return () => clearTimeout(t);
  }, [running, sec]);
  const m = Math.floor(sec/60).toString().padStart(2,'0');
  const s = (sec%60).toString().padStart(2,'0');
  const pct = ((20*60 - sec) / (20*60)) * 100;
  const breathPhase = Math.floor(sec / 4) % 2 === 0 ? 'Einatmen' : 'Ausatmen';
  return (
    <div style={coachStyles.card}>
      <div style={{...coachStyles.cardEyebrow,color:'#7A9E8A'}}>Urge-Timer · 20 min</div>
      <h3 style={coachStyles.cardTitle}>Der Impuls vergeht</h3>
      <p style={coachStyles.cardDesc}>Cravings brechen nach 20 Minuten zusammen. Bleib bei deinem Atem, bis der Timer abläuft.</p>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'8px 0 4px'}}>
        <div style={{position:'relative',width:160,height:160,marginBottom:12}}>
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="70" fill="none" stroke="#E8DED4" strokeWidth="8"/>
            <circle cx="80" cy="80" r="70" fill="none" stroke="#7A9E8A" strokeWidth="8"
              strokeDasharray={`${2*Math.PI*70}`} strokeDashoffset={`${2*Math.PI*70*(1-pct/100)}`}
              transform="rotate(-90 80 80)" strokeLinecap="round" style={{transition:'stroke-dashoffset 1s linear'}}/>
          </svg>
          <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:32,fontWeight:700,color:'#4A4E52'}}>{m}:{s}</div>
            <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:10,letterSpacing:2,color:'#7A9E8A',fontWeight:700,textTransform:'uppercase',marginTop:4}}>{running ? breathPhase : 'bereit'}</div>
          </div>
        </div>
        <button onClick={() => setRunning(!running)} style={{
          background: running ? '#E8DED4' : 'linear-gradient(135deg,#7A9E8A,#5A8A6F)',
          color: running ? '#4A4E52' : '#fff',border:'none',padding:'10px 24px',borderRadius:20,
          fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:11,letterSpacing:1.5,textTransform:'uppercase',cursor:'pointer'
        }}>{running ? 'Pause' : 'Start'}</button>
      </div>
    </div>
  );
}

window.UrgeTimer = UrgeTimer;
