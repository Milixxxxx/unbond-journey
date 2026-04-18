const { useState: useSOSState } = React;

function SOSButton() {
  const [open, setOpen] = useSOSState(false);
  const [step, setStep] = useSOSState(0);
  const STEPS = [
    {title:'STOP. Rotes Kreuz.', body:'Schließe die Augen. Stelle dir ein großes rotes Kreuz vor. Atme dreimal tief ein und aus. Das unterbricht den Gedankenstrom.'},
    {title:'Benenne fünf Dinge.', body:'Nenne laut fünf Objekte, die du gerade im Raum siehst. Beginne jedes mit „Ich sehe…". Das holt deinen präfrontalen Cortex zurück online.'},
    {title:'Kaltes Wasser, 30 Sekunden.', body:'Kaltes Wasser auf das Gesicht oder Eiswürfel in die Hand. Der Dive-Reflex senkt deinen Puls unmittelbar — Polyvagal-Skill.'},
    {title:'Du hast es geschafft.', body:'Der Impuls war nur ein Impuls. Er wird vorbeigehen. Du hast gerade dein Nervensystem reguliert — das ist Training, keine Schwäche.'}
  ];
  return (
    <>
      <button onClick={() => {setOpen(true); setStep(0);}} style={{
        position:'fixed',bottom:28,right:28,zIndex:50,
        background:'#C74B4B',color:'#fff',border:'none',borderRadius:30,
        padding:'14px 22px',fontFamily:"'Montserrat',sans-serif",fontWeight:700,
        fontSize:12,letterSpacing:2,textTransform:'uppercase',cursor:'pointer',
        boxShadow:'0 8px 28px rgba(199,75,75,0.45)',display:'flex',gap:10,alignItems:'center'
      }}>
        <span style={{width:8,height:8,background:'#fff',borderRadius:4,animation:'pulse 2s infinite'}}/>
        SOS · Jetzt Hilfe
      </button>
      {open && (
        <div style={{position:'fixed',inset:0,background:'rgba(26,36,32,0.88)',zIndex:100,display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
          <div style={{background:'#F4EDE4',borderRadius:20,maxWidth:500,padding:'40px 36px',boxShadow:'0 20px 60px rgba(0,0,0,0.4)',position:'relative'}}>
            <button onClick={() => setOpen(false)} style={{position:'absolute',top:16,right:18,background:'none',border:'none',fontSize:24,color:'#6C7075',cursor:'pointer'}}>×</button>
            <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:10,letterSpacing:3,color:'#C74B4B',fontWeight:700,textTransform:'uppercase',marginBottom:10}}>SOS · Schritt {step+1} von {STEPS.length}</div>
            <h3 style={{fontFamily:"'Montserrat',sans-serif",fontSize:24,color:'#6B3E44',margin:'0 0 14px',fontWeight:700}}>{STEPS[step].title}</h3>
            <p style={{fontSize:15,lineHeight:1.7,color:'#4A4E52',marginBottom:26}}>{STEPS[step].body}</p>
            <div style={{height:4,background:'#E8DED4',borderRadius:2,marginBottom:20,overflow:'hidden'}}>
              <div style={{height:'100%',background:'#C74B4B',width:`${((step+1)/STEPS.length)*100}%`,transition:'width 0.5s'}}/>
            </div>
            {step < STEPS.length - 1 ? (
              <button onClick={() => setStep(step+1)} style={{width:'100%',padding:'14px',background:'#6B3E44',color:'#fff',border:'none',borderRadius:8,fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:12,letterSpacing:1.5,textTransform:'uppercase',cursor:'pointer'}}>Nächster Schritt →</button>
            ) : (
              <button onClick={() => setOpen(false)} style={{width:'100%',padding:'14px',background:'#5A8A6F',color:'#fff',border:'none',borderRadius:8,fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:12,letterSpacing:1.5,textTransform:'uppercase',cursor:'pointer'}}>✓ Fertig — gut gemacht</button>
            )}
          </div>
        </div>
      )}
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </>
  );
}

window.SOSButton = SOSButton;
