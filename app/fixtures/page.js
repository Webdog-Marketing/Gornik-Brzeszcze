'use client';
import { useLang } from '../LanguageContext';
import { useToday } from '../useToday';
import { FIXTURES, CLUB, CLUB_TEAM, REGIO_URL, fmtDate, PAGE_PHOTOS } from '../data';

const T = {
  pl: {
    subtitle: 'Sezon 2026/27 · runda wiosenna',
    title: 'TERMINARZ',
    league: 'Klasa A · grupa Oświęcim',
    tbc: 'Termin do ustalenia',
    home: 'Domowy',
    away: 'Wyjazdowy',
    next: 'Następny mecz',
    stadium: 'Stadion KS Górnik',
    live: 'Aktualny terminarz i relacje na RegioWyniki.pl →',
    note: 'Terminy mogą ulec zmianie – sprawdzaj aktualizacje.',
  },
  en: {
    subtitle: 'Season 2026/27 · spring round',
    title: 'FIXTURES',
    league: 'Klasa A · Oświęcim group',
    tbc: 'Date to be confirmed',
    home: 'Home',
    away: 'Away',
    next: 'Next match',
    stadium: 'KS Górnik Stadium',
    live: 'Live fixtures and match reports on RegioWyniki.pl →',
    note: 'Dates may change – check back for updates.',
  },
};

export default function FixturesPage() {
  const { lang } = useLang();
  const c = T[lang];
  const today = useToday();
  const nextDated = FIXTURES.find(f => f.date && f.date >= today);

  return (
    <>
      <div className="page-header has-photo" style={{ '--ph': "url('" + PAGE_PHOTOS.fixtures + "')" }}>
        <div className="container">
          <div className="subtitle">{c.subtitle}</div>
          <h1>{c.title}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>{c.league}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FIXTURES.map((f, i) => {
              const isHome = f.home === CLUB_TEAM;
              const isNext = nextDated && f === nextDated;
              return (
                <div key={i} className="fixture-row notranslate" translate="no" style={isNext ? { borderColor: 'var(--gold)' } : undefined}>
                  <div className="fixture-date">
                    {f.date ? (
                      <>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem' }}>
                          {fmtDate(f.date, lang, { weekday: 'short', year: undefined })}
                        </div>
                        <div style={{ color: 'var(--grey)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                          {f.time}{isNext ? ' · ' + c.next : ''}
                        </div>
                        {f.venue && <div style={{ color: 'var(--grey)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{f.venue}</div>}
                      </>
                    ) : (
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--gold)' }}>{c.tbc}</div>
                    )}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', textAlign: 'right' }}>{f.home}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: 4, color: 'var(--grey)', textAlign: 'center', padding: '0 0.5rem' }}>VS</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}>{f.away}</div>
                  <div className="fixture-badge" style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase', padding: '0.25rem 0.75rem', background: isHome ? 'rgba(26,117,74,0.15)' : 'var(--dark-3)', color: isHome ? 'var(--gold)' : 'var(--grey)', border: isHome ? '1px solid var(--gold)' : 'none' }}>
                      {isHome ? c.home : c.away}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <p style={{ color: 'var(--grey)', fontSize: '0.85rem', marginTop: '1.5rem' }}>{c.note}</p>

          <div style={{ marginTop: '2.5rem', padding: '1.5rem 2rem', background: 'var(--dark-2)', border: '1px solid var(--dark-3)', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, color: 'var(--gold)', textTransform: 'uppercase' }}>{c.stadium}</div>
              <div style={{ color: 'var(--grey)', fontSize: '0.9rem', marginTop: '0.3rem' }}>{CLUB.stadiumAddress}</div>
            </div>
            <a href={REGIO_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.8rem', textTransform: 'uppercase' }}>{c.live}</a>
          </div>
        </div>
      </section>
    </>
  );
}
