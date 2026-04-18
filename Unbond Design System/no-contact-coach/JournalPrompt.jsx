const { useState: useJournalState } = React;

function JournalPrompt() {
  const [text, setText] = useJournalState('');
  const [saved, setSaved] = useJournalState(false);
  const [streak, setStreak] = useJournalState(12);
  return (
    <div style={coachStyles.card}>
      <div style={{...coachStyles.cardEyebrow,color:'#C4836E'}}>Heutiger Check-in · 2 min</div>
      <h3 style={coachStyles.cardTitle}>Was trägst du gerade?</h3>
      <p style={coachStyles.cardDesc}>Eine Zeile genügt. Benennen ist schon die halbe Miete.</p>
      <textarea value={text} onChange={e => {setText(e.target.value); setSaved(false);}}
        placeholder="Heute fühle ich…"
        style={{
          width:'100%',minHeight:90,padding:'12px 14px',border:'2px solid #E8DED4',
          borderRadius:8,fontFamily:"'Lato',sans-serif",fontSize:14,background:'#FBF6EE',
          color:'#4A4E52',resize:'vertical',boxSizing:'border-box',outline:'none'
        }}/>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:12}}>
        <div style={{display:'flex',alignItems:'center',gap:6,color:'#C4836E',fontFamily:"'Montserrat',sans-serif",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:'uppercase'}}>
          <span>🔥</span> {streak} Tage Streak
        </div>
        <button onClick={() => {setSaved(true); setStreak(streak+1); setText('');}} disabled={!text.trim()} style={{
          background: text.trim() ? 'linear-gradient(135deg,#C4836E,#6B3E44)' : '#E8DED4',
          color: text.trim() ? '#fff' : '#9AA0A5',border:'none',padding:'10px 20px',borderRadius:8,
          fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:11,letterSpacing:1.5,
          textTransform:'uppercase',cursor: text.trim() ? 'pointer' : 'not-allowed'
        }}>Speichern</button>
      </div>
      {saved && <div style={{marginTop:10,fontSize:11,color:'#5A8A6F',fontFamily:"'Montserrat',sans-serif",fontWeight:700,letterSpacing:1}}>✓ Heute abgehakt. Morgen wieder.</div>}
    </div>
  );
}

window.JournalPrompt = JournalPrompt;
