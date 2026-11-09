'use client';
import Link from 'next/link';
import { useLang } from '../LanguageContext';
import { BOARD, BOARD_PHOTO, PAGE_PHOTOS, VALUE_PHOTOS } from '../data';

const BOARD_COPY = {
  pl: { label: 'Władze klubu', title: 'ZARZĄD', photoPh: 'Zdjęcie zarządu – wkrótce', alt: 'Zarząd KS Górnik Brzeszcze' },
  en: { label: 'Club leadership', title: 'THE BOARD', photoPh: 'Board photo – coming soon', alt: 'The KS Górnik Brzeszcze board' },
};

export default function AboutPage() {
  const { lang, t } = useLang();
  const tr = t.about;
  return (
    <>
      <div className="page-header has-photo" style={{ '--ph': "url('" + PAGE_PHOTOS.about + "')" }}>
        <div className="container">
          <div className="subtitle">{tr.subtitle}</div>
          <h1>{tr.title}</h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>{tr.mission_label}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', lineHeight: 1 }}>{tr.mission_title}</h2>
              <p style={{ color: 'var(--light-grey)', lineHeight: 1.9, marginBottom: '1.5rem' }}>{tr.p1}</p>
              <p style={{ color: 'var(--light-grey)', lineHeight: 1.9, marginBottom: '1.5rem' }}>{tr.p2}</p>
              <p style={{ color: 'var(--light-grey)', lineHeight: 1.9 }}>{tr.p3}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {tr.facts.map(([label, value, desc]) => (
                <div key={label} style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: 4, alignSelf: 'stretch', background: 'var(--gold)', flexShrink: 0 }} />
                  <div>
                    <div style={{ color: 'var(--grey)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.25rem' }}>{label}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{value}</div>
                    <div style={{ color: 'var(--grey)', fontSize: '0.85rem' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>{tr.values_label}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: 1 }}>{tr.values_title}</h2>
          </div>
          <div className="grid-3">
            {tr.values.map(([, title, desc], i) => (
              <div key={title} className="value-card">
                <img src={VALUE_PHOTOS[i]} alt="" loading="lazy" />
                <div className="value-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="eyebrow">{BOARD_COPY[lang].label}</div>
          <h2 className="block-title">{BOARD_COPY[lang].title}</h2>
          {BOARD_PHOTO
            ? <img className="team-photo" src={BOARD_PHOTO} alt={BOARD_COPY[lang].alt} style={{ marginBottom: '2rem' }} />
            : <div className="team-photo-ph" style={{ marginBottom: '2rem' }}>{BOARD_COPY[lang].photoPh}</div>}
          <div className="board-grid">
            {BOARD.map((b, i) => (
              <div key={b.name} className={'board-card' + (i === 0 ? ' lead' : '')}>
                <div className="board-name">{b.name}</div>
                <div className="board-role">{b.role[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>{tr.history_cta}</h2>
          <p style={{ color: 'var(--grey)', maxWidth: 500, margin: '0 auto 2rem' }}>{tr.history_sub}</p>
          <Link href="/history" className="btn btn-primary">{tr.history_btn}</Link>
        </div>
      </section>
    </>
  );
}
