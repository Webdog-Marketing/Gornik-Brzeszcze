'use client';
import { useLang } from '../app/LanguageContext';

// Annotated club crest: desktop shows callouts joined to the crest by lines, mobile stacks them as cards.
const W = 900, H = 420, CW = 300, CH = 385, CX = 300, CY = 17;
const pt = (fx, fy) => [((CX + fx * CW) / W) * 100, ((CY + fy * CH) / H) * 100];

const COPY = {
  pl: {
    label: 'Symbolika herbu', title: 'ZIELONO-BIAŁO-CZARNI',
    motto: 'Nadzieja · Uczciwość · Ciężka praca — to jest KSG!',
    items: {
      white: ['Biel', 'Czyste intencje, fair play oraz tradycyjny biały pióropusz noszony przez inżynierów górniczych i nadzorców.'],
      green: ['Zieleń', 'Nadzieja górników na bezpieczny powrót z szychty, charakter regionu Brzeszcz oraz zielony pióropusz noszony przez dyrektora generalnego na galowym mundurze górniczym.'],
      black: ['Czerń', 'Węgiel kamienny, ciężka praca pod ziemią oraz czarny pióropusz na tradycyjnej górniczej czapce.'],
      year: ['1922', 'Rok założenia klubu jako KS Strzała.'],
    },
    alt: 'Herb KS Górnik Brzeszcze',
  },
  en: {
    label: 'Crest symbolism', title: 'GREEN, WHITE AND BLACK',
    motto: 'Hope · Fair play · Hard work — this is KSG!',
    items: {
      white: ['White', 'Pure intentions, fair play, and the traditional white plume worn by mining engineers and supervisors.'],
      green: ['Green', 'Reflects the miners’ hope for a safe return from a shift, the nature of the Brzeszcze region, and the green plume worn by a general director on a ceremonial mining uniform.'],
      black: ['Black', 'Hard coal, the grit of underground labour, and the black plume on a traditional miner’s shako hat.'],
      year: ['1922', 'The year the club was founded, as KS Strzała.'],
    },
    alt: 'KS Górnik Brzeszcze crest',
  },
};

// side, card centre y (px in the 900x420 frame), crest point the line ends on, colour chip
const LAYOUT = [
  ['white', 'l', 80, [0.2, 0.17], '#F2F5EE'],
  ['green', 'l', 270, [0.13, 0.55], '#1A754A'],
  ['black', 'r', 150, [0.52, 0.72], '#0A0A0A'],
  ['year', 'r', 340, [0.6, 0.9], '#BFA163'],
];

export default function CrestMeaning() {
  const { lang } = useLang();
  const c = COPY[lang === 'en' ? 'en' : 'pl'];
  return (
    <section className="section crest-section" style={{ background: 'var(--dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{c.label}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>{c.title}</h2>
        </div>
        <div className="crest-stage">
          <img className="crest-img" src="/crest.webp" alt={c.alt} width="483" height="620" />
          <svg className="crest-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {LAYOUT.map(([k, side, y, [fx, fy]]) => {
              const [x2, y2] = pt(fx, fy);
              const x1 = side === 'l' ? (250 / W) * 100 : (650 / W) * 100;
              return <line key={k} x1={x1} y1={(y / H) * 100} x2={x2} y2={y2} />;
            })}
          </svg>
          {LAYOUT.map(([k, side, y, [fx, fy], chip]) => {
            const [x, yy] = pt(fx, fy);
            return <span key={k + 'd'} className="crest-dot" style={{ left: x + '%', top: yy + '%' }} aria-hidden="true" />;
          })}
          {LAYOUT.map(([k, side, y, , chip]) => (
            <div key={k} className={'crest-card ' + (side === 'l' ? 'crest-l' : 'crest-r')} style={{ top: (y / H) * 100 + '%' }}>
              <span className="crest-chip" style={{ background: chip }} />
              <div>
                <h3 translate="no" className="notranslate">{c.items[k][0]}</h3>
                <p>{c.items[k][1]}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="crest-motto">{c.motto}</p>
      </div>
    </section>
  );
}
