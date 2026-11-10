'use client';
import Link from 'next/link';
import { useLang } from '../LanguageContext';


const timeline = {
  pl: [
    { year: '1922', title: 'Założenie klubu', desc: 'Klub zostaje założony jako KS Strzała.' },
    { year: '1925', title: 'Pierwsze rozgrywki', desc: 'Drużyna startuje w klasie C i szybko awansuje do wyższej ligi.' },
    { year: '1930', title: 'Klasa B', desc: 'Przez 5 lat klub gra w klasie B, budując fundamenty pod dalszy rozwój.' },
    { year: '1957', title: 'Narodziny Górnika', desc: 'Klub zmienia nazwę na Klub Sportowy Górnik. 17 lipca rejestracja w PKPN w Krakowie jako samodzielne stowarzyszenie.' },
    { year: '1980s', title: 'Złota era', desc: 'Najlepszy okres w historii klubu. Silna pozycja w regionalnych rozgrywkach, liczna kibicowska baza.' },
    { year: '2022', title: 'Stulecie', desc: 'Klub obchodzi 100-lecie istnienia. Dzień turniejów młodzieżowych i uroczystości kończy jubileuszowy mecz z Górnikiem Zabrze, 18 czerwca 2022.' },
    { year: '2025', title: 'Dziś', desc: 'KS Górnik Brzeszcze prowadzi trzy drużyny i aktywną akademię młodzieżową.' },
  ],
  en: [
    { year: '1922', title: 'Founding of the club', desc: 'The club is founded as KS Strzała.' },
    { year: '1925', title: 'First competitions', desc: 'The team enters class C and quickly earns promotion to a higher division.' },
    { year: '1930', title: 'Class B', desc: 'For five years the club competes in class B, building the foundations for future growth.' },
    { year: '1957', title: 'Birth of Górnik', desc: 'The club is renamed KS Górnik. On 17 July it is registered in Kraków as an independent association.' },
    { year: '1980s', title: 'Golden era', desc: 'The best period in the club\'s history. Strong position in regional leagues, large supporter base.' },
    { year: '2022', title: 'Centenary', desc: 'The club celebrates its 100th anniversary. A day of youth tournaments and celebrations ends with the jubilee friendly against Górnik Zabrze on 18 June 2022.' },
    { year: '2025', title: 'Today', desc: 'KS Górnik Brzeszcze runs three teams and an active youth academy.' },
  ],
};

const landmarks = {
  pl: {
    label: 'Najważniejsze mecze',
    title: 'WIELKIE CHWILE NA STADIONIE',
    cards: [
      { href: '/100-years', score: '0 : 8', title: '100 lat klubu', text: 'Jubileuszowy mecz z Górnikiem Zabrze, 18 czerwca 2022 – i tradycja wizyt zabrzan od 1972 roku.', cta: 'Czytaj historię →' },
      { href: '/poland-lithuania-1993', score: '1 : 1', title: 'Polska – Litwa 1993', text: 'Jedyny mecz reprezentacji Polski w Brzeszczach – 31 marca 1993, pierwsze spotkanie obu drużyn w historii.', cta: 'Czytaj historię →' },
    ],
  },
  en: {
    label: 'Landmark matches',
    title: 'GREAT DAYS AT THE STADIUM',
    cards: [
      { href: '/100-years', score: '0 : 8', title: '100 years of the club', text: 'The centenary match against Górnik Zabrze on 18 June 2022 – and Zabrze’s tradition of visiting since 1972.', cta: 'Read the story →' },
      { href: '/poland-lithuania-1993', score: '1 : 1', title: 'Poland v Lithuania 1993', text: 'The only Poland national-team match ever played in Brzeszcze – 31 March 1993, the first meeting of the two sides.', cta: 'Read the story →' },
    ],
  },
};

export default function HistoryPage() {
  const { lang, t } = useLang();
  const tr = t.history;
  const tl = timeline[lang];
  return (
    <>
      <div className="page-header has-photo soft" style={{ '--ph': "url('/graffiti/gornik.jpg')", '--ph-size': 'auto 112%', '--ph-pos': '100% 50%' }}>
        <div className="container">
          <div className="subtitle">{tr.subtitle}</div>
          <h1>{tr.title}</h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ color: 'var(--light-grey)', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '5rem', textAlign: 'center' }}>{tr.intro}</p>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, var(--gold), var(--dark-3))' }} />
              {tl.map((item, i) => (
                <div key={item.year} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', marginBottom: '3rem', position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--gold)', paddingRight: '1rem', textAlign: 'right', paddingTop: '0.2rem' }}>{item.year}</div>
                  <div style={{ position: 'absolute', left: '72px', top: '0.4rem', width: 16, height: 16, background: i === 0 ? 'var(--gold)' : 'var(--dark-3)', border: '2px solid var(--gold)', borderRadius: '50%', zIndex: 1 }} />
                  <div style={{ paddingLeft: '2.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--grey)', lineHeight: 1.8, fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="eyebrow">{landmarks[lang].label}</div>
          <h2 className="block-title">{landmarks[lang].title}</h2>
          <div className="landmark-grid">
            {landmarks[lang].cards.map(card => (
              <Link key={card.href} href={card.href} className="landmark-card">
                <div className="landmark-score">{card.score}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span className="landmark-cta">{card.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--dark)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '1.5rem' }}>"</div>
          <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: 1, maxWidth: 700, margin: '0 auto 2rem', lineHeight: 1.3 }}>{tr.quote}</blockquote>
          <p style={{ color: 'var(--grey)', fontFamily: 'var(--font-heading)', letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{tr.quote_attr}</p>
        </div>
      </section>
    </>
  );
}
