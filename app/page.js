'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLang } from './LanguageContext';
import { useToday } from './useToday';
import { FIXTURES, RESULTS, CLUB, CLUB_TEAM, SEASON, TAX, SPONSORS, fmtDate, outcome } from './data';

const COPY = {
  pl: {
    stats: [['1922', 'Rok założenia'], ['100+', 'Lat historii'], ['1954', 'Otwarcie stadionu'], ['1993', 'Reprezentacja Polski w Brzeszczach']],
    league: 'Klasa A · grupa Oświęcim',
    nextLabel: 'Następny mecz',
    lastLabel: 'Ostatni wynik',
    home: 'Gospodarz', away: 'Gość',
    noNext: 'Terminarz rundy wiosennej – zobacz wszystkie mecze',
    resultsLabel: 'Najnowsze',
    resultsTitle: 'OSTATNIE WYNIKI',
    allResults: 'Wyniki i tabela →',
    round: 'kolejka',
    cup: 'Puchar Polski',
    storyLabel: 'Historia',
    storyTitle: 'WIELKIE CHWILE NA STADIONIE',
    stories: [
      { href: '/100-years', score: '0 : 8', title: '100 lat klubu', text: 'Jubileuszowy mecz z Górnikiem Zabrze, 18 czerwca 2022.' },
      { href: '/poland-lithuania-1993', score: '1 : 1', title: 'Polska – Litwa 1993', text: 'Jedyny mecz reprezentacji Polski w Brzeszczach.' },
    ],
    read: 'Czytaj historię →',
    spLabel: 'Partnerzy klubu',
    spTitle: 'DZIĘKUJEMY NASZYM SPONSOROM',
    spAll: 'Wszyscy sponsorzy →',
  },
  en: {
    stats: [['1922', 'Founded'], ['100+', 'Years of history'], ['1954', 'Stadium opened'], ['1993', 'Poland national team played here']],
    league: 'Klasa A · Oświęcim group',
    nextLabel: 'Next match',
    lastLabel: 'Latest result',
    home: 'Home', away: 'Away',
    noNext: 'Spring round fixtures – see all matches',
    resultsLabel: 'Latest',
    resultsTitle: 'LATEST RESULTS',
    allResults: 'Results & table →',
    round: 'round',
    cup: 'Polish Cup',
    storyLabel: 'History',
    storyTitle: 'GREAT DAYS AT THE STADIUM',
    stories: [
      { href: '/100-years', score: '0 : 8', title: '100 years of the club', text: 'The centenary match against Górnik Zabrze, 18 June 2022.' },
      { href: '/poland-lithuania-1993', score: '1 : 1', title: 'Poland v Lithuania 1993', text: 'The only Poland national-team match ever played in Brzeszcze.' },
    ],
    read: 'Read the story →',
    spLabel: 'Club partners',
    spTitle: 'THANK YOU TO OUR SPONSORS',
    spAll: 'All sponsors →',
  },
};

const OUT = { W: '#27A847', D: '#BFA163', L: '#C8102E' };

function Side({ name, label }) {
  const ours = name === CLUB_TEAM;
  return (
    <div style={{ textAlign: 'center', minWidth: 180 }}>
      {ours
        ? <img src="/crest.webp" alt="KS Górnik Brzeszcze" width="78" height="100" style={{ height: 100, width: 'auto', margin: '0 auto 1rem' }} />
        : <div style={{ width: 80, height: 80, background: 'var(--dark-3)', clipPath: 'polygon(50% 0%, 100% 15%, 100% 75%, 50% 100%, 0% 75%, 0% 15%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.8rem', margin: '10px auto 1rem', color: 'var(--grey)' }}>{name.replace(/^(LKS|KS)\s/, '')[0]}</div>}
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: 2, lineHeight: 1.1 }}>{name.toUpperCase()}</div>
      <div style={{ color: 'var(--grey)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{label}</div>
    </div>
  );
}

function CopyKrs() {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(TAX.krs);
      setDone(true);
      setTimeout(() => setDone(false), 2500);
    } catch (e) { /* clipboard unavailable – the number is shown on screen anyway */ }
  };
  return <button className="tax-btn" onClick={copy}>{done ? 'Skopiowano ✓' : 'Skopiuj numer KRS'}</button>;
}

export default function HomePage() {
  const { lang, t } = useLang();
  const tr = t.home;
  const c = COPY[lang];
  const today = useToday();
  const next = FIXTURES.find(f => f.date && f.date >= today);
  const recent = RESULTS.slice(0, 3);

  return (
    <>
      <section style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-photo" />
        <div className="hero-shade" />
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: 750 }}>
            <div style={{ display: 'inline-block', background: 'var(--green)', border: '1px solid var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', padding: '0.4rem 1rem', marginBottom: '2rem', color: 'var(--gold)' }}>{lang === 'en' ? 'Season ' + SEASON : 'Sezon ' + SEASON}</div>
            <h1 translate="no" className="notranslate" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.88, letterSpacing: 2, marginBottom: '2rem' }}>
              GÓRNIK<br />
              <span style={{ color: 'var(--gold)', WebkitTextStroke: '1px var(--gold-dark)', WebkitTextFillColor: 'var(--gold)' }}>BRZESZCZE</span>
            </h1>
            <p style={{ color: 'var(--light-grey)', fontSize: '1.1rem', maxWidth: 520, marginBottom: '3rem', lineHeight: 1.8 }}>{tr.hero_sub}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/fixtures" className="btn btn-primary">{tr.fixtures_btn}</Link>
              <Link href="/team" className="btn btn-outline">{tr.team_btn}</Link>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--grey)', fontSize: '0.7rem', letterSpacing: 3, fontFamily: 'var(--font-heading)' }}>
          {tr.scroll}
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        </div>
      </section>

      <section style={{ background: 'var(--green)', padding: '2rem 0', borderTop: '2px solid var(--gold-dark)', borderBottom: '2px solid var(--gold-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', textAlign: 'center' }}>
            {c.stats.map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', lineHeight: 1, color: 'var(--gold)' }}>{num}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', letterSpacing: 2, opacity: 0.85, textTransform: 'uppercase', marginTop: '0.3rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>{c.nextLabel}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: 1 }}>{t.fixtures.title}</h2>
            </div>
            <Link href="/fixtures" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{tr.full_fixtures}</Link>
          </div>

          <div style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: 'var(--green)' }} />
            <div style={{ position: 'absolute', top: 0, left: 4, bottom: 0, width: 2, background: 'var(--gold)', opacity: 0.4 }} />
            {next ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: 3, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1.9 }}>
                  {fmtDate(next.date, lang, { weekday: 'long' })} · {next.time}{next.home === CLUB_TEAM ? ' · ' + CLUB.stadiumName : next.venue ? ' · ' + next.venue : ''}
                </div>
                <div className="match-teams">
                  <Side name={next.home} label={c.home} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--grey)', letterSpacing: 8 }}>VS</div>
                  <Side name={next.away} label={c.away} />
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <span style={{ background: 'var(--green)', border: '1px solid var(--gold)', padding: '0.5rem 2rem', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{c.league}</span>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'var(--light-grey)' }}>{c.noNext}</div>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>{c.resultsLabel}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: 1 }}>{c.resultsTitle}</h2>
            </div>
            <Link href="/results" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{c.allResults}</Link>
          </div>
          <div className="grid-3">
            {recent.map((r, i) => {
              const o = outcome(r);
              return (
                <div key={r.date} className="card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: OUT[o] }} />
                  <div style={{ color: 'var(--grey)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                    {fmtDate(r.date, lang, { year: undefined })} · {r.comp === 'cup' ? c.cup : r.round + '. ' + c.round}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4 }}>{r.home}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', letterSpacing: 4, color: OUT[o], lineHeight: 1.2, margin: '0.25rem 0' }}>{r.hs} : {r.as}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4 }}>{r.away}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark)', padding: '4.5rem 0 4rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.25rem' }}>
          <div>
            <div className="eyebrow">{c.spLabel}</div>
            <h2 className="block-title" style={{ marginBottom: 0 }}>{c.spTitle}</h2>
          </div>
          <Link href="/sponsors" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{c.spAll}</Link>
        </div>
        <div className="marquee" aria-label={c.spTitle}>
          <div className="marquee-track">
            {[0, 1].map(copy => SPONSORS.map(sp => (
              <div key={copy + sp.file} className="marquee-item" aria-hidden={copy === 1 ? 'true' : undefined}>
                <img src={'/sponsors/' + sp.file} alt={copy === 0 ? sp.name : ''} loading="lazy" />
              </div>
            )))}
          </div>
        </div>
      </section>

      <section className="section gfx" style={{ background: 'var(--dark)', '--gfx': "url('/graffiti/crest.jpg')", '--gfx-size': 'auto 150%', '--gfx-pos': '100% 32%', '--gfx-o': 0.3, '--gfx-bg': 'var(--dark)', '--gfx-fade': '14%', '--gfx-mask': 'linear-gradient(90deg, transparent 0%, transparent 30%, #000 62%)' }}>
        <div className="container">
          <div className="eyebrow">{c.storyLabel}</div>
          <h2 className="block-title">{c.storyTitle}</h2>
          <div className="landmark-grid">
            {c.stories.map(st => (
              <Link key={st.href} href={st.href} className="landmark-card">
                <div className="landmark-score">{st.score}</div>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
                <span className="landmark-cta">{c.read}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {lang === 'pl' && (
        <section id="podatek" className="tax-band">
          <div className="container">
            <div className="tax-inner">
              <div>
                <div className="eyebrow" style={{ marginBottom: 0 }}>Wesprzyj klub</div>
                <h2 className="tax-title">PRZEKAŻ 1,5% PODATKU NA RZECZ KS GÓRNIK BRZESZCZE</h2>
                <p style={{ color: 'var(--white)', opacity: 0.92, lineHeight: 1.8, maxWidth: 520 }}>
                  Wystarczy wpisać numer KRS w rocznym zeznaniu podatkowym (PIT). To nic nie kosztuje – 1,5% to część podatku, który i tak płacisz.
                </p>
              </div>
              <div className="tax-box">
                <div className="tax-krs-label">Numer KRS</div>
                <div className="tax-krs">{TAX.krs}</div>
                <CopyKrs />
              </div>
            </div>
          </div>
        </section>
      )}

      <section style={{ background: 'var(--green)', padding: '6rem 0', position: 'relative', overflow: 'hidden', borderTop: '2px solid var(--gold-dark)', borderBottom: '2px solid var(--gold-dark)' }}>
        <div className="gfx-layer" style={{ '--gfx': "url('/graffiti/gornik.jpg')" }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(191,161,99,0.05) 60px, rgba(191,161,99,0.05) 61px)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--gold)' }}>{tr.cta_label}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: 2, marginBottom: '1.5rem' }}>{tr.cta_title}</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: 500, margin: '0 auto 2.5rem', color: 'var(--white)' }}>{tr.cta_sub}</p>
          <Link href="/contact" style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--black)', padding: '1rem 3rem', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: 3, textTransform: 'uppercase' }}>{tr.cta_btn}</Link>
        </div>
      </section>
    </>
  );
}
