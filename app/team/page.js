'use client';
import { useLang } from '../LanguageContext';


const players = [
  { num: 1, name: 'Marek Kowalski', pos: 'GK', age: 28 },
  { num: 2, name: 'Tomasz Nowak', pos: 'DEF', age: 24 },
  { num: 3, name: 'Piotr Wiśniewski', pos: 'DEF', age: 26 },
  { num: 4, name: 'Łukasz Wójcik', pos: 'DEF', age: 22 },
  { num: 5, name: 'Adam Kowalczyk', pos: 'DEF', age: 30 },
  { num: 6, name: 'Michał Kamiński', pos: 'MID', age: 25 },
  { num: 7, name: 'Jakub Lewandowski', pos: 'MID', age: 27 },
  { num: 8, name: 'Paweł Zieliński', pos: 'MID', age: 23 },
  { num: 9, name: 'Rafał Szymański', pos: 'FWD', age: 29 },
  { num: 10, name: 'Krzysztof Woźniak', pos: 'MID', age: 26 },
  { num: 11, name: 'Bartosz Dąbrowski', pos: 'FWD', age: 21 },
  { num: 12, name: 'Sławomir Kozłowski', pos: 'GK', age: 22 },
  { num: 14, name: 'Grzegorz Mazur', pos: 'DEF', age: 28 },
  { num: 15, name: 'Marcin Krawczyk', pos: 'MID', age: 24 },
  { num: 17, name: 'Dominik Piotrowicz', pos: 'FWD', age: 20 },
  { num: 18, name: 'Artur Grabowski', pos: 'MID', age: 31 },
  { num: 20, name: 'Wojciech Nowakowski', pos: 'FWD', age: 25 },
  { num: 22, name: 'Sebastian Pawlak', pos: 'DEF', age: 23 },
];

const staff = [
  { name: 'Andrzej Nowicki', rolePl: 'Trener główny', roleEn: 'Head coach' },
  { name: 'Jerzy Malinowski', rolePl: 'Asystent trenera', roleEn: 'Assistant coach' },
  { name: 'Krzysztof Lis', rolePl: 'Trener bramkarzy', roleEn: 'Goalkeeping coach' },
  { name: 'Tomasz Baran', rolePl: 'Fizjoterapeuta', roleEn: 'Physiotherapist' },
];

const posColors = { GK: '#BFA163', DEF: '#2E86C8', MID: '#27A847', FWD: '#E8A020' };

export default function TeamPage() {
  const { lang, t } = useLang();
  const tr = t.team;
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{lang === 'en' ? 'First team' : 'Pierwsza drużyna'}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: 1 }}>{tr.players_title}</h2>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {Object.entries(tr.positions).map(([key, label]) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontFamily: 'var(--font-heading)', letterSpacing: 1 }}>
                  <div style={{ width: 10, height: 10, background: posColors[key], borderRadius: '50%' }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {players.map(p => (
              <div key={p.num} style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: posColors[p.pos] }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--dark-3)', lineHeight: 1, marginBottom: '1rem' }}>{p.num}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.3rem', lineHeight: 1.2 }}>{p.name}</div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, color: posColors[p.pos], textTransform: 'uppercase' }}>{tr.positions[p.pos]}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--grey)', marginTop: '0.5rem' }}>{p.age} {tr.age}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{tr.staff_label}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: 1, marginBottom: '3rem' }}>{tr.staff_title}</h2>
          <div className="grid-4">
            {staff.map(s => (
              <div key={s.name} style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'var(--dark-3)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--gold)' }}>{s.name.charAt(0)}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.3rem' }}>{s.name}</div>
                <div style={{ color: 'var(--gold)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase' }}>{lang === 'en' ? s.roleEn : s.rolePl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
