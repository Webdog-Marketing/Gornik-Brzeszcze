'use client';
import { useLang } from '../LanguageContext';
import { SQUAD, STAFF, TEAM_PHOTO, SEASON, YOUTH, PHOTOS, PAGE_PHOTOS } from '../data';
import { playerStats, coverage } from '../stats';

const T = {
  pl: {
    subtitle: 'Sezon ' + SEASON,
    title: 'DRUŻYNA',
    photoPh: 'Zdjęcie drużyny – wkrótce',
    photoAlt: 'Zdjęcie całego klubu KS Górnik Brzeszcze',
    photoCap: 'Cały klub: seniorzy, młodzież i najmłodsi zawodnicy.',
    playersLabel: 'Pierwsza drużyna',
    playersTitle: 'ZAWODNICY',
    gk: 'Bramkarz',
    noNumber: 'Numer wkrótce',
    staffLabel: 'Sztab szkoleniowy',
    staffTitle: 'TRENER I KIEROWNIK',
    count: 'zawodników',
    sApps: 'Mecze', sMins: 'Min.', sGoals: 'Gole', sYellow: 'ŻK', sRed: 'CK',
    statsNote: (r, p) => r === p ? 'Statystyki sezonu 2026/27 ze wszystkich ' + p + ' meczów (dane MPZPN).' : 'Statystyki sezonu 2026/27 z ' + r + ' z ' + p + ' meczów (dane MPZPN).',
    youthLabel: 'Akademia',
    youthTitle: 'MŁODZIEŻ',
    youthIntro: 'Od najmłodszych żaków po juniorów – nasze grupy młodzieżowe według roku urodzenia.',
  },
  en: {
    subtitle: 'Season ' + SEASON,
    title: 'THE TEAM',
    photoPh: 'Team photo – coming soon',
    photoAlt: 'KS Górnik Brzeszcze – the whole club',
    photoCap: 'The whole club: seniors, youth and our youngest players.',
    playersLabel: 'First team',
    playersTitle: 'PLAYERS',
    gk: 'Goalkeeper',
    noNumber: 'Number TBC',
    staffLabel: 'Coaching staff',
    staffTitle: 'COACH & MANAGER',
    count: 'players',
    sApps: 'Apps', sMins: 'Mins', sGoals: 'Goals', sYellow: 'YC', sRed: 'RC',
    statsNote: (r, p) => r === p ? 'Season 2026/27 statistics from all ' + p + ' matches (MPZPN data).' : 'Season 2026/27 statistics from ' + r + ' of ' + p + ' matches (MPZPN data).',
    youthLabel: 'Academy',
    youthTitle: 'YOUTH TEAMS',
    youthIntro: 'From our youngest players up to the juniors – our youth groups by year of birth.',
  },
};

const initials = name => name.split(' ').map(w => w[0]).slice(0, 2).join('');

export default function TeamPage() {
  const { lang } = useLang();
  const c = T[lang];
  const youthPhotos = PHOTOS.filter(p => p.cat === 'youth');
  return (
    <>
      <div className="page-header has-photo" style={{ '--ph': "url('" + PAGE_PHOTOS.team + "')" }}>
        <div className="container">
          <div className="subtitle">{c.subtitle}</div>
          <h1>{c.title}</h1>
        </div>
      </div>

      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          {TEAM_PHOTO
            ? (
              <figure className="photo-figure">
                <img className="team-photo" src={TEAM_PHOTO} alt={c.photoAlt} />
                <figcaption>{c.photoCap}</figcaption>
              </figure>
            )
            : <div className="team-photo-ph">{c.photoPh}</div>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <div className="eyebrow">{c.playersLabel}</div>
              <h2 className="block-title" style={{ marginBottom: 0 }}>{c.playersTitle}</h2>
            </div>
            <div style={{ color: 'var(--grey)', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.8rem' }}>{SQUAD.length} {c.count}</div>
          </div>
          <p style={{ color: 'var(--grey)', fontSize: '0.85rem', margin: '-1.25rem 0 2rem' }}>{c.statsNote(coverage().recorded, coverage().played)}</p>

          <div className="squad-grid">
            {SQUAD.map(p => (
              <div key={p.name} className="pcard">
                <div className={'pcard-photo' + (p.photo ? '' : ' ph')}>
                  {p.photo
                    ? <img src={p.photo} alt={p.name} width="600" height="750" loading="lazy" />
                    : <img className="crest" src="/crest.webp" alt="" aria-hidden="true" />}
                  {p.no && <span className="pcard-no">{p.no}</span>}
                </div>
                <div className="pcard-body">
                  <div className="pcard-name">{p.name}</div>
                  {p.gk && <span className="pcard-tag">{c.gk}</span>}
                  {!p.no && !p.gk && <span className="pcard-tag muted">{c.noNumber}</span>}
                  {(() => { const st = playerStats(p.name); const red = st.second + st.red; return (
                    <div className="pcard-stats">
                      <div><b>{st.apps}</b><span>{c.sApps}</span></div>
                      <div><b>{st.mins}</b><span>{c.sMins}</span></div>
                      <div><b>{st.goals}</b><span>{c.sGoals}</span></div>
                      <div><b>{st.yellow}</b><span>{c.sYellow}</span></div>
                      {red > 0 && <div><b>{red}</b><span>{c.sRed}</span></div>}
                    </div>); })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="eyebrow">{c.staffLabel}</div>
          <h2 className="block-title">{c.staffTitle}</h2>
          <div className="staff-grid">
            {STAFF.map(m => (
              <div key={m.name} className="staff-card">
                {m.photo
                  ? <div className="pcard-photo"><img src={m.photo} alt={m.name} width="600" height="750" loading="lazy" /></div>
                  : <div className="avatar">{initials(m.name)}</div>}
                <div className="staff-body">
                  <div className="pcard-name">{m.name}</div>
                  <div className="staff-role">{m.role[lang]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="youth" className="section">
        <div className="container">
          <div className="eyebrow">{c.youthLabel}</div>
          <h2 className="block-title">{c.youthTitle}</h2>
          <p className="story" style={{ margin: '0 0 2.5rem' }}>{c.youthIntro}</p>

          <div className="youth-grid">
            {YOUTH.map(y => (
              <div key={y.name} className="youth-card">
                <div className="youth-name">{y.name}</div>
                <div className="youth-years">{y.years[lang]}</div>
              </div>
            ))}
          </div>

          <div className="youth-photos">
            {youthPhotos.map(p => (
              <a key={p.src} href={p.src} target="_blank" rel="noopener noreferrer" className={p.h < 600 ? 'wide' : ''}>
                <img src={p.src} alt={p.cap[lang]} width={p.w} height={p.h} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
