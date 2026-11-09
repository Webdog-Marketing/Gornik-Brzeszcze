'use client';
import { useLang } from '../LanguageContext';
import { SPONSORS, PAGE_PHOTOS } from '../data';



export default function SponsorsPage() {
  const { t } = useLang();
  const tr = t.sponsors;
  return (
    <>
      <div className="page-header has-photo" style={{ '--ph': "url('" + PAGE_PHOTOS.sponsors + "')" }}>
        <div className="container">
          <div className="subtitle">{tr.subtitle}</div>
          <h1>{tr.title}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 700, marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--light-grey)', fontSize: '1.05rem', lineHeight: 1.9 }}>{tr.intro}</p>
          </div>

          <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{tr.others_label}</div>

          <div className="sponsor-wall">
            {SPONSORS.map(s => (
              <div key={s.file} className="sponsor-tile">
                <img src={'/sponsors/' + s.file} alt={s.name} title={s.name} width={s.w} height={s.h} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark)', padding: '6rem 0' }}>
        <div className="container">
          <div className="become-sponsor-grid">
            <div>
              <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>{tr.become_label}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: 1, marginBottom: '1.5rem' }}>{tr.become_title}</h2>
              <p style={{ color: 'var(--light-grey)', lineHeight: 1.9, marginBottom: '2rem' }}>{tr.become_text}</p>
              <a href="/contact" style={{ display: 'inline-block', background: 'var(--green)', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.85rem 2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: 2, textTransform: 'uppercase' }}>{tr.become_btn}</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tr.benefits.map(benefit => (
                <div key={benefit} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', background: 'var(--dark-2)', border: '1px solid var(--dark-3)' }}>
                  <div style={{ width: 8, height: 8, background: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
