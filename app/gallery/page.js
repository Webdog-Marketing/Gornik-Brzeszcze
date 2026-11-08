'use client';
import { useLang } from '../LanguageContext';


const gallery = [
  { id: 1, titlePl: 'Mecz z LKS Zator – maj 2025', titleEn: 'Match vs LKS Zator – May 2025', cat: 'Mecze', catEn: 'Matches' },
  { id: 2, titlePl: 'Trening przed sezonem', titleEn: 'Pre-season training', cat: 'Treningi', catEn: 'Training' },
  { id: 3, titlePl: 'Stadion Górnika', titleEn: 'Górnik Stadium', cat: 'Stadion', catEn: 'Stadium' },
  { id: 4, titlePl: 'Akademia młodzieżowa', titleEn: 'Youth academy', cat: 'Akademia', catEn: 'Academy' },
  { id: 5, titlePl: 'Derby powiatu 2024', titleEn: 'County derby 2024', cat: 'Mecze', catEn: 'Matches' },
  { id: 6, titlePl: 'Obóz letni 2024', titleEn: 'Summer camp 2024', cat: 'Treningi', catEn: 'Training' },
  { id: 7, titlePl: 'Boisko przy ul. Sportowej', titleEn: 'Pitch on ul. Sportowa', cat: 'Stadion', catEn: 'Stadium' },
  { id: 8, titlePl: 'Turniej juniorów', titleEn: 'Junior tournament', cat: 'Akademia', catEn: 'Academy' },
  { id: 9, titlePl: 'Sezon 2023/24 – najlepsze momenty', titleEn: '2023/24 season highlights', cat: 'Mecze', catEn: 'Matches' },
];

export default function GalleryPage() {
  const { lang, t } = useLang();
  const tr = t.gallery;
  const cats = lang === 'en' ? [tr.all, 'Matches', 'Training', 'Stadium', 'Academy'] : [tr.all, 'Mecze', 'Treningi', 'Stadion', 'Akademia'];

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
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {cats.map((cat, i) => (
              <div key={cat} style={{ padding: '0.5rem 1.25rem', background: i === 0 ? 'var(--green)' : 'var(--dark-2)', border: i === 0 ? '1px solid var(--gold)' : '1px solid var(--dark-3)', color: i === 0 ? 'var(--gold)' : 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>{cat}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {gallery.map((item, i) => (
              <div key={item.id} style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: i === 0 || i === 4 ? '16/9' : '4/3', background: ['#1A1A1A','#1F1010','#101A1A','#1A1018','#101510'][i%5], border: '1px solid var(--dark-3)' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ width: 60, height: 60, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'rgba(191,161,99,0.15)' }} />
                  <div style={{ color: 'var(--dark-3)', fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: 2 }}>FOTO</div>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0}
                >
                  <span style={{ display: 'inline-block', marginBottom: '0.5rem', padding: '0.2rem 0.6rem', background: 'var(--green)', border: '1px solid var(--gold)', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: 2, textTransform: 'uppercase', width: 'fit-content' }}>{lang === 'en' ? item.catEn : item.cat}</span>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}>{lang === 'en' ? item.titleEn : item.titlePl}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--grey)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            <p>{tr.add_note}</p>
            <p>{tr.fb_note} <a href="https://www.facebook.com/gornikbrzeszcze" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>{tr.fb_link}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
