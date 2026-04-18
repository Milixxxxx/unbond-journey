const coachStyles = {
  shell: {minHeight:'100vh',background:'#F4EDE4',fontFamily:"'Lato',sans-serif",color:'#4A4E52',padding:'32px 40px',boxSizing:'border-box'},
  header: {display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:28,paddingBottom:20,borderBottom:'1px solid #E8DED4'},
  brand: {display:'flex',alignItems:'center',gap:14},
  mark: {width:44,height:44,borderRadius:12,background:'#6B3E44',display:'flex',alignItems:'center',justifyContent:'center',color:'#F4EDE4'},
  title: {fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:18,letterSpacing:3,color:'#6B3E44',margin:0},
  subtitle: {fontFamily:"'Montserrat',sans-serif",fontSize:10,letterSpacing:2,color:'#C4836E',fontWeight:600,marginTop:2,textTransform:'uppercase'},
  streakBadge: {background:'rgba(122,158,138,0.2)',color:'#2D4F3C',padding:'8px 16px',borderRadius:20,fontFamily:"'Montserrat',sans-serif",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:'uppercase',display:'flex',alignItems:'center',gap:8},
  greeting: {marginBottom:32},
  greetingEyebrow: {fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:2,color:'#7A9E8A',fontWeight:700,textTransform:'uppercase',marginBottom:8},
  greetingH1: {fontFamily:"'Montserrat',sans-serif",fontSize:28,fontWeight:700,color:'#4A4E52',margin:'0 0 8px'},
  greetingP: {fontSize:15,color:'#6C7075',lineHeight:1.6,maxWidth:580,margin:0},
  grid: {display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,marginBottom:32},
  card: {background:'#fff',borderRadius:16,padding:24,boxShadow:'0 4px 20px rgba(0,0,0,0.05)',border:'1px solid #E8DED4'},
  cardTitle: {fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:15,color:'#4A4E52',margin:'0 0 4px',letterSpacing:0.3},
  cardEyebrow: {fontFamily:"'Montserrat',sans-serif",fontSize:10,letterSpacing:2,fontWeight:700,textTransform:'uppercase',marginBottom:10},
  cardDesc: {fontSize:13,lineHeight:1.6,color:'#6C7075',margin:'0 0 16px'}
};
window.coachStyles = coachStyles;
