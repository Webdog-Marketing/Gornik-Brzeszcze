'use client';
import Link from 'next/link';
import { useLang } from './LanguageContext';


export default function HomePage() {
  const { lang, t } = useLang();
  const tr = t.home;
  const news = t.news_items;

  return (
    <>
      <section style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(26,117,74,0.04) 40px, rgba(26,117,74,0.04) 80px)' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', background: 'linear-gradient(135deg, #1A754A 0%, #0A0A0A 65%)', clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)', opacity: 0.18 }} />
        <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: 3, background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }} />
        <img className="hero-crest" src="/crest.webp" alt="" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: 750 }}>
            <div style={{ display: 'inline-block', background: 'var(--green)', border: '1px solid var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', padding: '0.4rem 1rem', marginBottom: '2rem', color: 'var(--gold)' }}>{tr.badge}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.88, letterSpacing: 2, marginBottom: '2rem' }}>
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
            {tr.stats.map(([num, label]) => (
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
              <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{tr.next_match}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: 1 }}>{t.fixtures.title}</h2>
            </div>
            <Link href="/fixtures" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{tr.full_fixtures}</Link>
          </div>
          <div style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: 'var(--green)' }} />
            <div style={{ position: 'absolute', top: 0, left: 4, bottom: 0, width: 2, background: 'var(--gold)', opacity: 0.4 }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: 3, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '2rem' }}>{tr.match_date}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src="/crest.webp" alt="KS Górnik Brzeszcze" width="78" height="100" style={{ height: 100, width: 'auto', margin: '0 auto 1rem' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: 2 }}>GÓRNIK BRZESZCZE</div>
                  <div style={{ color: 'var(--grey)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{tr.home_team}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--grey)', letterSpacing: 8 }}>VS</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: 80, height: 80, background: 'var(--dark-3)', clipPath: 'polygon(50% 0%, 100% 15%, 100% 75%, 50% 100%, 0% 75%, 0% 15%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0 auto 1rem', color: 'var(--grey)' }}>P</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: 2 }}>POGOŃ OŚWIĘCIM</div>
                  <div style={{ color: 'var(--grey)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{tr.away_team}</div>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <span style={{ background: 'var(--green)', border: '1px solid var(--gold)', padding: '0.5rem 2rem', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{tr.league}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{tr.latest}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: 1 }}>{tr.news_title}</h2>
            </div>
            <Link href="/news" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{tr.all_news}</Link>
          </div>
          <div className="grid-3">
            {news.map((article, i) => (
              <div key={article.id} className="card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: i === 0 ? 'var(--gold)' : 'var(--dark-3)' }} />
                <div style={{ color: 'var(--grey)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, marginBottom: '1rem', textTransform: 'uppercase' }}>{article.date}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>{article.title}</h3>
                <p style={{ color: 'var(--grey)', fontSize: '0.9rem', lineHeight: 1.7 }}>{article.excerpt}</p>
                <Link href="/news" style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{tr.read_more}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--green)', padding: '6rem 0', position: 'relative', overflow: 'hidden', borderTop: '2px solid var(--gold-dark)', borderBottom: '2px solid var(--gold-dark)' }}>
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
