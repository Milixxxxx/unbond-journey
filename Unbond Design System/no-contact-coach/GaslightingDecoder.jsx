const { useState: useDecoderState } = React;

const DECODER_Qs = [
  {q:'Sie bestreitet Dinge, die du mit eigenen Augen gesehen oder gehört hast.', tag:'Realitätsverleugnung'},
  {q:'Nach Konflikten fühlst du dich schuldig, obwohl sie das Verhalten begonnen hat.', tag:'Täter-Opfer-Umkehr'},
  {q:'Freund:innen oder Familie sagen Dinge wie „Du bist nicht mehr du selbst".', tag:'Isolation'},
  {q:'Du entschuldigst dich oft für Gefühle, die du eigentlich haben darfst.', tag:'Unterwerfung'}
];

function GaslightingDecoder() {
  const [i, setI] = useDecoderState(0);
  const [score, setScore] = useDecoderState(0);
  const answer = (val) => {
    const ns = score + val;
    if (i < DECODER_Qs.length - 1) { setI(i+1); setScore(ns); }
    else { setI(i+1); setScore(ns); }
  };
  const done = i >= DECODER_Qs.length;
  const max = DECODER_Qs.length * 3;
  const pct = Math.round((score / max) * 100);
  return (
    <div style={coachStyles.card}>
      <div style={{...coachStyles.cardEyebrow,color:'#9B7FA4'}}>Decoder · Mini-Version</div>
      <h3 style={coachStyles.cardTitle}>Gaslighting erkennen</h3>
      {!done ? (
        <>
          <p style={{fontSize:15,color:'#4A4E52',margin:'14px 0 18px',minHeight:56,lineHeight:1.6,fontWeight:700}}>„{DECODER_Qs[i].q}"</p>
          <div style={{display:'flex',justifyContent:'space-between',color:'#9B7FA4',fontFamily:"'Montserrat',sans-serif",fontSize:9,letterSpacing:1.5,fontWeight:700,textTransform:'uppercase',marginBottom:8}}>
            <span>Nie</span><span>Manchmal</span><span>Oft</span><span>Immer</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6}}>
            {[0,1,2,3].map(v => (
              <button key={v} onClick={() => answer(v)} style={{
                padding:'14px 0',background:'rgba(155,127,164,0.12)',border:'1px solid rgba(155,127,164,0.3)',
                color:'#9B7FA4',borderRadius:8,cursor:'pointer',fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:14
              }}>{v}</button>
            ))}
          </div>
          <div style={{marginTop:16,fontSize:11,color:'#9AA0A5',letterSpacing:1,fontFamily:"'Montserrat',sans-serif",fontWeight:600,textTransform:'uppercase'}}>Frage {i+1}/{DECODER_Qs.length} · {DECODER_Qs[i].tag}</div>
        </>
      ) : (
        <div style={{textAlign:'center',padding:'12px 0'}}>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:48,fontWeight:800,color: pct > 50 ? '#6B3E44' : '#5A8A6F',lineHeight:1}}>{pct}%</div>
          <div style={{fontSize:12,color:'#6C7075',margin:'8px 0 16px',lineHeight:1.6}}>{pct > 50 ? 'Starkes Muster. Die lange Version im E-Book hilft dir, es genau zu benennen.' : 'Einige Signale. Beobachte weiter — Klarheit kommt mit Abstand.'}</div>
          <button onClick={() => {setI(0); setScore(0);}} style={{background:'none',border:'1px solid #9B7FA4',color:'#9B7FA4',padding:'8px 18px',borderRadius:20,fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:10,letterSpacing:1.5,textTransform:'uppercase',cursor:'pointer'}}>Nochmal</button>
        </div>
      )}
    </div>
  );
}

window.GaslightingDecoder = GaslightingDecoder;
