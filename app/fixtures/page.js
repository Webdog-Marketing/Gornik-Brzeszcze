'use client';
import { useLang } from '../LanguageContext';

const fixtures = [
  { date: '24 maja 2025', dateEn: '24 May 2025', time: '15:00', home: 'Górnik Brzeszcze', away: 'Pogoń Oświęcim', competition: 'Liga Okręgowa' },
  { date: '31 maja 2025', dateEn: '31 May 2025', time: '17:00', home: 'Orzeł Zator', away: 'Górnik Brzeszcze', competition: 'Liga Okręgowa' },
  { date: '7 czerwca 2025', dateEn: '7 June 2025', time: '15:00', home: 'Górnik Brzeszcze', away: 'LKS Chełmek', competition: 'Liga Okręgowa' },
  { date: '14 czerwca 2025', dateEn: '14 June 2025', time: '17:30', home: 'Spartak Libiąż', away: 'Górnik Brzeszcze', competition: 'Liga Okręgowa' },
  { date: '21 czerwca 2025', dateEn: '21 June 2025', time: '15:00', home: 'Górnik Brzeszcze', away: 'Skawa Wadowice', competition: 'Liga Okręgowa' },
  { date: '28 czerwca 2025', dateEn: '28 June 2025', time: '17:00', home: 'Victoria Jawiszowice', away: 'Górnik Brzeszcze', competition: 'Liga Okręgowa' },
];

export default function FixturesPage() {
  const { lang, t } = useLang();
  const tr = t.fixtures;
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="subtitle">{tr.subtitle}</div>
          <h1>{tr.title}</h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {fixtures.map((f, i) => (
              <div key={i} className="fixture-row">
                <div className="fixture-date">
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem' }}>{lang === 'en' ? f.dateEn : f.date}</div>
                  <div style={{ color: 'var(--grey)', fontSize: '0.8rem', marginTop: '0.2rem' }}>{f.time}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', textAlign: 'right' }}>{f.home}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: 4, color: 'var(--grey)', textAlign: 'center', padding: '0 0.5rem' }}>VS</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}>{f.away}</div>
                <div className="fixture-badge" style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase', padding: '0.25rem 0.75rem', background: f.home === 'Górnik Brzeszcze' ? 'rgba(26,117,74,0.15)' : 'var(--dark-3)', color: f.home === 'Górnik Brzeszcze' ? 'var(--gold)' : 'var(--grey)', border: f.home === 'Górnik Brzeszcze' ? '1px solid var(--gold)' : 'none' }}>
                    {f.home === 'Górnik Brzeszcze' ? tr.home : tr.away}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', background: 'var(--dark-2)', border: '1px solid var(--dark-3)', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, color: 'var(--gold)', textTransform: 'uppercase' }}>{tr.stadium}</div>
            <div style={{ color: 'var(--grey)', fontSize: '0.9rem' }}>{tr.address}</div>
          </div>
        </div>
      </section>
    </>
  );
}
