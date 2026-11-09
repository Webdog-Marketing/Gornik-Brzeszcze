'use client';
import { useState } from 'react';
import { useLang } from '../LanguageContext';
import { PHOTOS } from '../data';

const T = {
  pl: {
    subtitle: 'Wspomnienia i chwile',
    title: 'GALERIA',
    filters: [['all', 'Wszystkie'], ['matches', 'Mecze'], ['club', 'Klub'], ['youth', 'Młodzież'], ['history', 'Historia']],
    more: 'Kolejne zdjęcia wkrótce. Więcej na naszym',
    fb: 'Facebooku →',
  },
  en: {
    subtitle: 'Memories & moments',
    title: 'GALLERY',
    filters: [['all', 'All'], ['matches', 'Matches'], ['club', 'Club'], ['youth', 'Youth'], ['history', 'History']],
    more: 'More photos coming soon. See also our',
    fb: 'Facebook →',
  },
};

export default function GalleryPage() {
  const { lang } = useLang();
  const c = T[lang];
  const [cat, setCat] = useState('all');
  const shown = PHOTOS.filter(p => cat === 'all' || p.cat === cat);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="subtitle">{c.subtitle}</div>
          <h1>{c.title}</h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {c.filters.map(([key, label]) => (
              <button key={key} className={'gallery-chip' + (cat === key ? ' active' : '')} onClick={() => setCat(key)}>{label}</button>
            ))}
          </div>

          <div className="gallery-grid">
            {shown.map(p => (
              <figure key={p.src} className={'gallery-item' + (p.wide ? ' wide' : '')}>
                <a href={p.src} target="_blank" rel="noopener noreferrer">
                  <img src={p.src} alt={p.cap[lang]} width={p.w} height={p.h} loading="lazy" />
                </a>
                <figcaption>{p.cap[lang]}</figcaption>
              </figure>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--grey)', fontSize: '0.9rem' }}>
            {c.more}{' '}
            <a href="https://www.facebook.com/gornikbrzeszcze" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>{c.fb}</a>
          </p>
        </div>
      </section>
    </>
  );
}
