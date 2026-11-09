'use client';
import Link from 'next/link';
import { useLang } from '../app/LanguageContext';
import { TAX } from '../app/data';


export default function Footer() {
  const { lang, t } = useLang();
  const tr = t.footer;
  const nav = t.nav;



  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid var(--dark-3)', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <img src="/crest.webp" alt="KS Górnik Brzeszcze" width="58" height="72" style={{ height: 72, width: 'auto', marginBottom: '1rem' }} />
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: 2, marginBottom: '0.5rem' }}>
              GÓRNIK<br /><span style={{ color: 'var(--gold)' }}>BRZESZCZE</span>
            </div>
            <p style={{ color: 'var(--grey)', fontSize: '0.85rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{tr.tagline}</p>
            {lang !== 'en' && (
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', lineHeight: 1.6 }}>
                <Link href="/#podatek" style={{ color: 'var(--gold)' }}>Przekaż 1,5% podatku · KRS {TAX.krs}</Link>
              </p>
            )}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 3, fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{tr.nav_label}</div>
            {[['/', nav.home], ['/about', nav.about], ['/team', nav.team], ['/fixtures', nav.fixtures], ['/results', nav.results]].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', color: 'var(--grey)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>{label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 3, fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{tr.club_label}</div>
            {[['/news', nav.news], ['/history', nav.history], ['/100-years', lang === 'en' ? '100 years' : '100 lat'], ['/poland-lithuania-1993', lang === 'en' ? 'Poland v Lithuania 1993' : 'Polska – Litwa 1993'], ['/team#youth', lang === 'en' ? 'Youth teams' : 'Młodzież'], ['/gallery', nav.gallery], ['/sponsors', nav.sponsors], ['/contact', nav.contact]].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', color: 'var(--grey)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>{label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 3, fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{tr.contact_label}</div>
            <p style={{ color: 'var(--grey)', fontSize: '0.85rem', lineHeight: 2 }}>
              ul. Ofiar Oświęcimia 68<br />32-620 Brzeszcze<br />
              {lang === 'en' ? 'Poland' : 'Polska'}<br />
              Tel. 32 211 10 19<br />
              gornik1922brzeszcze@interia.pl
            </p>
            <div style={{ marginTop: '1rem' }}>
              <a href="https://www.facebook.com/gornikbrzeszcze" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--grey)' }}>Facebook →</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--dark-3)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--grey)', fontSize: '0.8rem' }}>© {new Date().getFullYear()} KS Górnik Brzeszcze. {tr.copyright}</p>
          <p style={{ color: 'var(--grey)', fontSize: '0.8rem' }}>{tr.founded}</p>
        </div>
      </div>
    </footer>
  );
}
