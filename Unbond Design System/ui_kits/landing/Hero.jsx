const { useState } = React;

function Hero() {
  return (
    <section style={landingStyles.hero}>
      <div style={landingStyles.heroContent}>
        <span style={landingStyles.heroBadge}>SPEZIELL FÜR WLW & LESBISCHE FRAUEN</span>
        <h1 style={landingStyles.h1}>
          Erkenne das Muster.<br/>
          Verstehe die Dynamik.
          <span style={landingStyles.h1Sub}>Der wissenschaftlich fundierte ToxiCometer-Test — 100% anonym, 2 Minuten.</span>
        </h1>
        <p style={landingStyles.heroText}>
          15 Fragen, 1 psychologisches Profil deiner Ex-Partnerin. Erkenne Gaslighting, verdeckten Narzissmus und Trauma Bonding — bevor du dich wieder selbst in Frage stellst.
        </p>
        <div style={landingStyles.ctaRow}>
          <a href="#test" style={{...landingStyles.cta, ...landingStyles.ctaBordeaux}}>Test jetzt starten</a>
          <a href="#ebook" style={{...landingStyles.cta, ...landingStyles.ctaGhost}}>UNBOND E-Book ansehen</a>
        </div>
        <p style={landingStyles.subtext}>Keine E-Mail für das Profil nötig. Kein Verkaufsdruck.</p>
      </div>
    </section>
  );
}

window.Hero = Hero;
