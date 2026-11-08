'use client';
import { useLang } from '../LanguageContext';

const results = [
  { datePl: '17 maja 2025', dateEn: '17 May 2025', home: 'Górnik Brzeszcze', away: 'LKS Zator', scoreH: 3, scoreA: 1 },
  { datePl: '10 maja 2025', dateEn: '10 May 2025', home: 'Orkan Kasinka', away: 'Górnik Brzeszcze', scoreH: 0, scoreA: 2 },
  { datePl: '3 maja 2025', dateEn: '3 May 2025', home: 'Górnik Brzeszcze', away: 'Victoria Jawiszowice', scoreH: 1, scoreA: 1 },
  { datePl: '26 kwietnia 2025', dateEn: '26 April 2025', home: 'Skawa Wadowice', away: 'Górnik Brzeszcze', scoreH: 2, scoreA: 0 },
  { datePl: '19 kwietnia 2025', dateEn: '19 April 2025', home: 'Górnik Brzeszcze', away: 'Spartak Libiąż', scoreH: 4, scoreA: 0 },
  { datePl: '12 kwietnia 2025', dateEn: '12 April 2025', home: 'LKS Chełmek', away: 'Górnik Brzeszcze', scoreH: 1, scoreA: 3 },
  { datePl: '5 kwietnia 2025', dateEn: '5 April 2025', home: 'Górnik Brzeszcze', away: 'Orzeł Zator', scoreH: 2, scoreA: 2 },
  { datePl: '29 marca 2025', dateEn: '29 March 2025', home: 'Pogoń Oświęcim', away: 'Górnik Brzeszcze', scoreH: 1, scoreA: 2 },
];

function getResult(home, away, scoreH, scoreA) {
  const isHome = home === 'Górnik Brzeszcze';
  if (scoreH === scoreA) return { label: 'R', color: '#BFA163', bg: 'rgba(191,161,99,0.1)' };
  if ((isHome && scoreH > scoreA) || (!isHome && scoreA > scoreH)) return { label: 'W', color: '#27A847', bg: 'rgba(39,168,71,0.1)' };
  return { label: 'L', color: '#C8102E', bg: 'rgba(200,16,46,0.1)' };
}

export default function ResultsPage() {
  const { lang, t } = useLang();
  const tr = t.results;
  const wins = results.filter(r => getResult(r.home, r.away, r.scoreH, r.scoreA).label === 'W').length;
  const draws = results.filter(r => getResult(r.home, r.away, r.scoreH, r.scoreA).label === 'R').length;
  const losses = results.filter(r => getResult(r.home, r.away, r.scoreH, r.scoreA).label === 'L').length;
  const goalsFor = results.reduce((sum, r) => sum + (r.home === 'Górnik Brzeszcze' ? r.scoreH : r.scoreA), 0);
  const goalsAgainst = results.reduce((sum, r) => sum + (r.home === 'Górnik Brzeszcze' ? r.scoreA : r.scoreH), 0);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="subtitle">{tr.subtitle}</div>
          <h1>{tr.title}</h1>
        </div>
      </div>
      <section style={{ background: 'var(--dark)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1px', background: 'var(--dark-3)' }}>
            {[[tr.played, results.length, 'var(--white)'], [tr.wins, wins, '#27A847'], [tr.draws, draws, '#BFA163'], [tr.losses, losses, '#C8102E'], [tr.scored, goalsFor, 'var(--white)'], [tr.conceded, goalsAgainst, 'var(--grey)']].map(([label, value, color]) => (
              <div key={label} style={{ background: 'var(--dark-2)', padding: '1.5rem 1rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color, lineHeight: 1 }}>{value}</div>
                <div style={{ color: 'var(--grey)', fontSize: '0.7rem', fontFamily: 'var(--font-heading)', letterSpacing: 1, textTransform: 'uppercase', marginTop: '0.5rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {results.map((r, i) => {
              const res = getResult(r.home, r.away, r.scoreH, r.scoreA);
              return (
                <div key={i} className="result-row">
                  <div className="result-date" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--grey)' }}>{lang === 'en' ? r.dateEn : r.datePl}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', textAlign: 'right', color: r.home === 'Górnik Brzeszcze' ? 'var(--white)' : 'var(--light-grey)' }}>{r.home}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: 4, textAlign: 'center', padding: '0 0.5rem', lineHeight: 1 }}>{r.scoreH} : {r.scoreA}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: r.away === 'Górnik Brzeszcze' ? 'var(--white)' : 'var(--light-grey)' }}>{r.away}</div>
                  <div className="result-badge" style={{ textAlign: 'right' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, background: res.bg, color: res.color, fontFamily: 'var(--font-display)', fontSize: '1rem', border: `1px solid ${res.color}` }}>{res.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
