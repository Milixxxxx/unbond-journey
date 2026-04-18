const { useState: useCardState } = React;

const CARDS = [
  {
    img: '../../assets/illustration-gaslighting.png',
    title: 'Gaslighting',
    keyword: 'Realitätsverschiebung',
    accent: '#6B3E44',
    back: 'Sie bestreitet Dinge, die du mit eigenen Augen gesehen hast. „Das habe ich nie gesagt." — und du beginnst, an deinem Gedächtnis zu zweifeln. Das ist keine Meinungsverschiedenheit. Das ist Gaslighting.'
  },
  {
    img: '../../assets/illustration-traumabonding.png',
    title: 'Trauma Bonding',
    keyword: 'Intermittierende Verstärkung',
    accent: '#4A4E52',
    back: 'Ein unvorhersehbarer Wechsel aus eiskaltem Entzug und intensiver Belohnung. Dein Gehirn wird wie bei einem Spielautomat trainiert. Das ist Neurobiologie — kein persönliches Versagen.'
  },
  {
    img: '../../assets/illustration-weaponized.png',
    title: 'Verdeckter Narzissmus',
    keyword: 'Die Maske fällt',
    accent: '#7A9E8A',
    back: 'Öffentlich die Tugendhafte, privat die Täterin. Hoovering, Täter-Opfer-Umkehr, weaponized Queerness. Verdeckter Narzissmus ist schwer zu erkennen — genau deshalb bleiben Betroffene so lange.'
  }
];

function ProblemCard({ c, i }) {
  const [flipped, setFlipped] = useCardState(false);
  return (
    <div style={landingStyles.flipWrap} onClick={() => setFlipped(!flipped)}>
      <div style={{...landingStyles.flipInner, transform: flipped ? 'rotateY(180deg)' : 'none'}}>
        <div style={{...landingStyles.flipFace, ...landingStyles.flipFront, borderTop: `4px solid ${c.accent}`}}>
          <img src={c.img} alt="" style={landingStyles.flipImg} />
          <div style={landingStyles.flipLabel}>
            <h3 style={landingStyles.flipH3}>{c.title}</h3>
            <span style={landingStyles.flipKeyword}>{c.keyword}</span>
            <div style={landingStyles.flipHint}>Karte umdrehen ↻</div>
          </div>
        </div>
        <div style={{...landingStyles.flipFace, ...landingStyles.flipBack, background: `linear-gradient(135deg, ${c.accent}cc, ${c.accent}99)`}}>
          <p style={landingStyles.flipBackText}>{c.back}</p>
        </div>
      </div>
    </div>
  );
}

function ProblemCards() {
  return (
    <section style={landingStyles.section}>
      <div style={landingStyles.sectionIntro}>
        <h2 style={landingStyles.h2}>Du bist nicht zu empfindlich. Du erkennst ein Muster.</h2>
        <p style={landingStyles.muted}>Drei Dynamiken, die Betroffene am häufigsten beschreiben. Tippe eine Karte an.</p>
      </div>
      <div style={landingStyles.cardsGrid}>
        {CARDS.map((c, i) => <ProblemCard c={c} i={i} key={i} />)}
      </div>
    </section>
  );
}

window.ProblemCards = ProblemCards;
