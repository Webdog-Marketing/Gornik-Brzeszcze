'use client';
import { useLang } from '../LanguageContext';

const sponsors = [
  { file: 'gmina-herb.jpg', name: 'Coat of arms', w: 140, h: 158 },
  { file: 'rodzina.jpg', name: 'Family heart logo', w: 170, h: 136 },
  { file: 'hanczar.jpg', name: 'Hanczar Nieruchomości', w: 244, h: 150 },
  { file: 'robtronic.jpg', name: 'Robtronic Węgiel Kruszywa', w: 262, h: 140 },
  { file: 'solidarnosc.jpg', name: 'NSZZ Solidarność', w: 262, h: 124 },
  { file: 'matteo.jpg', name: 'Matteo', w: 286, h: 122 },
  { file: 'gtrans.jpg', name: 'GTrans', w: 252, h: 114 },
  { file: 'bs-miedzna.jpg', name: 'Bank Spółdzielczy w Miedźnej', w: 222, h: 114 },
  { file: 'krion.jpg', name: 'Krion.pl', w: 290, h: 94 },
  { file: 'bistro-bilard.jpg', name: 'Bistro Bilard', w: 282, h: 96 },
  { file: 'renomex.jpg', name: 'Renomex Firma Budowlana', w: 204, h: 118 },
  { file: 'nsm.jpg', name: 'Nadwiślańska Spółka Mieszkaniowa', w: 222, h: 204 },
  { file: 'adexbud.jpg', name: 'Adexbud Materiały Budowlane', w: 302, h: 112 },
  { file: 'ila-klima.jpg', name: 'ILA Klima', w: 250, h: 116 },
  { file: 'skand.jpg', name: 'Skand Ubezpieczenia', w: 254, h: 106 },
  { file: 'moto-pasja.jpg', name: 'Moto Pasja', w: 210, h: 192 },
  { file: '3fit.jpg', name: '3Fit Spaces', w: 148, h: 158 },
  { file: 'smakosfera.jpg', name: 'Smakosfera', w: 176, h: 158 },
  { file: 'abc.jpg', name: 'ABC', w: 182, h: 94 },
  { file: 'baran.jpg', name: 'Inż. Janusz Baran', w: 350, h: 98 },
  { file: 'bp.jpg', name: 'bp', w: 114, h: 134 },
  { file: 'zz-dozoru.jpg', name: 'Związek Zawodowy Pracowników Dozoru', w: 136, h: 120 },
  { file: 'bielbud.jpg', name: 'Bielbud Budownictwo', w: 296, h: 112 },
  { file: 'puma-auto-serwis.jpg', name: 'Puma Auto Serwis', w: 326, h: 114 },
  { file: 'everest.jpg', name: 'Everest Budownictwo', w: 256, h: 102 },
  { file: 'loca.jpg', name: 'Loca', w: 172, h: 74 },
  { file: 'feniks.jpg', name: 'Feniks Drukarnia', w: 176, h: 96 },
  { file: 'intermarche.jpg', name: 'Intermarché', w: 288, h: 72 },
  { file: 'leonarczyk.jpg', name: 'Grupa Leonarczyk', w: 276, h: 92 },
];

export default function SponsorsPage() {
  const { t } = useLang();
  const tr = t.sponsors;
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
          <div style={{ maxWidth: 700, marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--light-grey)', fontSize: '1.05rem', lineHeight: 1.9 }}>{tr.intro}</p>
          </div>

          <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{tr.others_label}</div>

          <div className="sponsor-wall">
            {sponsors.map(s => (
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
