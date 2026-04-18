const ebookStyles = {
  shell: {display:'grid',gridTemplateColumns:'320px 1fr',minHeight:'100vh',background:'#F4EDE4',fontFamily:"'Lato',sans-serif",color:'#2D3236'},
  sidebar: {background:'#E8DED4',borderRight:'3px solid #7A9E8A',padding:'28px 24px',position:'sticky',top:0,height:'100vh',overflowY:'auto',boxSizing:'border-box'},
  logo: {fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:24,letterSpacing:4,color:'#6B1A1A',marginBottom:4},
  tagline: {fontFamily:"'Montserrat',sans-serif",fontSize:10,letterSpacing:3,color:'#2D4F3C',fontWeight:800,marginBottom:28,textTransform:'uppercase'},
  progressLabel: {fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:2,color:'#2D4F3C',fontWeight:800,textTransform:'uppercase',marginBottom:6},
  progressBar: {height:8,background:'#D3CDC7',borderRadius:4,overflow:'hidden',marginBottom:28,border:'1px solid #7A9E8A'},
  progressFill: {height:'100%',background:'linear-gradient(90deg,#7A9E8A,#2D4F3C)',borderRadius:3},
  tocItem: {display:'flex',alignItems:'center',gap:10,padding:'10px 10px',borderRadius:8,cursor:'pointer',fontFamily:"'Lato',sans-serif",fontSize:14,fontWeight:600,color:'#2D3236',marginBottom:2},
  tocActive: {background:'#7A9E8A',color:'#FFFFFF',fontWeight:800},
  tocNum: {fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:11,letterSpacing:1,width:28,height:28,display:'flex',alignItems:'center',justifyContent:'center',background:'#F4EDE4',borderRadius:14,flexShrink:0,color:'#6B1A1A'},
  tocDone: {background:'#2D4F3C',color:'#fff'},
  main: {padding:'48px 64px',maxWidth:800,boxSizing:'border-box'},
  eyebrow: {fontFamily:"'Montserrat',sans-serif",fontSize:12,letterSpacing:3,fontWeight:800,color:'#2D4F3C',textTransform:'uppercase',marginBottom:10},
  h1: {fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:42,color:'#6B1A1A',lineHeight:1.15,margin:'0 0 18px',letterSpacing:'-0.5px'},
  lead: {fontFamily:"'Lato',sans-serif",fontWeight:700,fontSize:19,color:'#6B1A1A',lineHeight:1.55,marginBottom:26,paddingLeft:16,borderLeft:'4px solid #7A9E8A'},
  p: {fontSize:16,lineHeight:1.75,marginBottom:16,fontWeight:500,color:'#2D3236'},
  science: {background:'#fff',padding:'20px 24px',borderRadius:12,borderLeft:'6px solid #7A9E8A',margin:'24px 0',boxShadow:'0 4px 15px rgba(0,0,0,0.05)'},
  story: {background:'#E8DED4',padding:'22px 26px',borderRadius:14,borderLeft:'6px solid #6B1A1A',margin:'24px 0',color:'#2D3236'},
  exercise: {background:'#2D4F3C',color:'#F4EDE4',padding:'24px 26px',borderRadius:14,borderLeft:'6px solid #6B1A1A',margin:'28px 0'},
  h4: {fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:15,color:'#6B1A1A',margin:'0 0 10px',letterSpacing:1,textTransform:'uppercase'},
  dashInput: {width:'100%',border:'none',borderBottom:'1px dashed rgba(244,237,228,0.5)',padding:'10px 2px',fontFamily:"'Lato',sans-serif",fontSize:15,fontWeight:500,background:'transparent',color:'#F4EDE4',marginBottom:10,boxSizing:'border-box'}
};
window.ebookStyles = ebookStyles;
