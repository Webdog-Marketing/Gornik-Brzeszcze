'use client';
import Link from 'next/link';
import { useLang } from '../LanguageContext';
import { RESULTS, fmtDate, outcome, PAGE_PHOTOS } from '../data';

const OUT = { W: '#27A847', D: '#BFA163', L: '#C8102E' };

const T = {
  pl: {
    subtitle: 'Bądź na bieżąco',
    title: 'AKTUALNOŚCI',
    noticeTitle: 'Wiadomości klubowe wkrótce',
    notice: 'Zapowiedzi, relacje i komunikaty klubu będą pojawiać się właśnie tutaj. Na razie zobacz najnowsze wyniki drużyny.',
    label: 'Ostatnie mecze',
    round: 'kolejka',
    cup: 'Puchar Polski',
    league: 'Klasa A',
    all: 'Wszystkie wyniki i tabela →',
    fb: 'Więcej od klubu na Facebooku →',
  },
  en: {
    subtitle: 'Stay up to date',
    title: 'NEWS',
    noticeTitle: 'Club news coming soon',
    notice: 'Match previews, reports and club announcements will appear here. For now, here are the team’s latest results.',
    label: 'Recent matches',
    round: 'round',
    cup: 'Polish Cup',
    league: 'Klasa A',
    all: 'All results & table →',
    fb: 'More from the club on Facebook →',
  },
};

export default function NewsPage() {
  const { lang } = useLang();
  const c = T[lang];
  return (
    <>
      <div className="page-header has-photo" style={{ '--ph': "url('" + PAGE_PHOTOS.news + "')" }}>
        <div className="container">
          <div className="subtitle">{c.subtitle}</div>
          <h1>{c.title}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', borderTop: '3px solid var(--gold)', padding: '2rem 2.25rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', letterSpacing: 1, marginBottom: '0.6rem' }}>{c.noticeTitle}</h2>
            <p style={{ color: 'var(--light-grey)', lineHeight: 1.8, maxWidth: 640 }}>{c.notice}</p>
            <a href="https://www.facebook.com/gornikbrzeszcze" target="_blank" rel="noopener noreferrer" className="ext-link" style={{ marginTop: '1.25rem' }}>{c.fb}</a>
          </div>

          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>{c.label}</div>
          <div className="grid-3">
            {RESULTS.slice(0, 6).map(r => {
              const o = outcome(r);
              return (
                <div key={r.date} className="card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: OUT[o] }} />
                  <div style={{ color: 'var(--grey)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                    {fmtDate(r.date, lang)} · {r.comp === 'cup' ? c.cup : c.league + ', ' + r.round + '. ' + c.round}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4 }}>{r.home}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', letterSpacing: 4, color: OUT[o], lineHeight: 1.2, margin: '0.25rem 0' }}>{r.hs} : {r.as}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4 }}>{r.away}</div>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: '2rem' }}>
            <Link href="/results" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{c.all}</Link>
          </p>
        </div>
      </section>
    </>
  );
}
