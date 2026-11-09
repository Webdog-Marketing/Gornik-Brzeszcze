'use client';
import { useLang } from '../LanguageContext';
import MatchDetails from '../../components/MatchDetails';
import { matchByDate, coverage } from '../stats';
import { RESULTS, TABLE, TABLE_AFTER_ROUND, CLUB_TEAM, REGIO_URL, REGIO_TABLE_URL, fmtDate, outcome, leagueRecord, PAGE_PHOTOS } from '../data';

const T = {
  pl: {
    subtitle: 'Sezon 2026/27 · runda jesienna',
    title: 'WYNIKI I TABELA',
    played: 'Mecze', wins: 'Zwycięstwa', draws: 'Remisy', losses: 'Porażki', scored: 'Gole strzelone', conceded: 'Gole stracone',
    resultsLabel: 'Wyniki',
    round: 'kolejka',
    cup: 'Puchar Polski (Oświęcim)',
    tableLabel: 'Tabela',
    tableTitle: 'KLASA A · GRUPA OŚWIĘCIM',
    after: 'Stan po',
    afterSuffix: 'kolejce',
    cols: ['#', 'Drużyna', 'M', 'Z', 'R', 'P', 'Bramki', 'Pkt'],
    live: 'Aktualna tabela i wyniki na RegioWyniki.pl →',
    source: 'Źródło danych: RegioWyniki.pl',
  },
  en: {
    subtitle: 'Season 2026/27 · autumn round',
    title: 'RESULTS & TABLE',
    played: 'Played', wins: 'Wins', draws: 'Draws', losses: 'Losses', scored: 'Goals scored', conceded: 'Goals conceded',
    resultsLabel: 'Results',
    round: 'round',
    cup: 'Polish Cup (Oświęcim)',
    tableLabel: 'Table',
    tableTitle: 'KLASA A · OŚWIĘCIM GROUP',
    after: 'After',
    afterSuffix: 'rounds',
    cols: ['#', 'Team', 'P', 'W', 'D', 'L', 'Goals', 'Pts'],
    live: 'Live table and results on RegioWyniki.pl →',
    source: 'Data source: RegioWyniki.pl',
  },
};

const BADGE = {
  W: { color: '#27A847', bg: 'rgba(39,168,71,0.1)', l: { pl: 'Z', en: 'W' } },
  D: { color: '#BFA163', bg: 'rgba(191,161,99,0.1)', l: { pl: 'R', en: 'D' } },
  L: { color: '#C8102E', bg: 'rgba(200,16,46,0.1)', l: { pl: 'P', en: 'L' } },
};

export default function ResultsPage() {
  const { lang } = useLang();
  const c = T[lang];
  const rec = leagueRecord();

  return (
    <>
      <div className="page-header has-photo" style={{ '--ph': "url('" + PAGE_PHOTOS.results + "')" }}>
        <div className="container">
          <div className="subtitle">{c.subtitle}</div>
          <h1>{c.title}</h1>
        </div>
      </div>

      <section style={{ background: 'var(--dark)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1px', background: 'var(--dark-3)' }}>
            {[[c.played, rec.P, 'var(--white)'], [c.wins, rec.W, '#27A847'], [c.draws, rec.D, '#BFA163'], [c.losses, rec.L, '#C8102E'], [c.scored, rec.GF, 'var(--white)'], [c.conceded, rec.GA, 'var(--grey)']].map(([label, value, color]) => (
              <div key={label} style={{ background: 'var(--dark-2)', padding: '1.5rem 1rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color, lineHeight: 1 }}>{value}</div>
                <div style={{ color: 'var(--grey)', fontSize: '0.7rem', fontFamily: 'var(--font-heading)', letterSpacing: 1, textTransform: 'uppercase', marginTop: '0.5rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>{c.resultsLabel}</div>
          <p style={{ color: 'var(--grey)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            {lang === 'en'
              ? (coverage().recorded === coverage().played
                  ? 'Match details (scorers, cards, line-ups) for all ' + coverage().played + ' matches this season.'
                  : 'Match details (scorers, cards, line-ups) are available for ' + coverage().recorded + ' of ' + coverage().played + ' matches so far.')
              : (coverage().recorded === coverage().played
                  ? 'Szczegóły meczów (strzelcy, kartki, składy) dla wszystkich ' + coverage().played + ' spotkań sezonu.'
                  : 'Szczegóły meczów (strzelcy, kartki, składy) dostępne dla ' + coverage().recorded + ' z ' + coverage().played + ' meczów.')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {RESULTS.map((r, i) => {
              const o = outcome(r);
              const b = BADGE[o];
              const sub = r.comp === 'cup' ? c.cup : r.round + '. ' + c.round;
              return (
                <div key={i} className="result-block">
                <div className="result-row">
                  <div className="result-date">
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem' }}>{fmtDate(r.date, lang, { year: undefined })}</div>
                    <div style={{ color: 'var(--grey)', fontSize: '0.72rem', marginTop: '0.2rem' }}>{sub}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', textAlign: 'right', color: r.home === CLUB_TEAM ? 'var(--white)' : 'var(--light-grey)' }}>{r.home}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: 4, textAlign: 'center', padding: '0 0.5rem', lineHeight: 1 }}>{r.hs} : {r.as}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: r.away === CLUB_TEAM ? 'var(--white)' : 'var(--light-grey)' }}>{r.away}</div>
                  <div className="result-badge" style={{ textAlign: 'right' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, background: b.bg, color: b.color, fontFamily: 'var(--font-display)', fontSize: '1rem', border: '1px solid ' + b.color }}>{b.l[lang]}</span>
                  </div>
                </div>
                {matchByDate(r.date) && <MatchDetails m={matchByDate(r.date)} lang={lang} />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="eyebrow">{c.tableLabel}</div>
          <h2 className="block-title" style={{ marginBottom: '0.75rem' }}>{c.tableTitle}</h2>
          <p style={{ color: 'var(--grey)', fontSize: '0.85rem', marginBottom: '1.75rem' }}>
            {lang === 'en' ? c.after + ' ' + TABLE_AFTER_ROUND + ' ' + c.afterSuffix : c.after + ' ' + TABLE_AFTER_ROUND + '. ' + c.afterSuffix} · {c.source}
          </p>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>{c.cols[0]}</th><th className="team">{c.cols[1]}</th><th>{c.cols[2]}</th>
                  <th className="opt">{c.cols[3]}</th><th className="opt">{c.cols[4]}</th><th className="opt">{c.cols[5]}</th>
                  <th>{c.cols[6]}</th><th>{c.cols[7]}</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map(([team, p, w, d, l, gf, ga, pts], i) => (
                  <tr key={team} className={team === CLUB_TEAM ? 'me' : ''}>
                    <td className="pos">{i + 1}</td>
                    <td className="team">{team}</td>
                    <td>{p}</td>
                    <td className="opt">{w}</td><td className="opt">{d}</td><td className="opt">{l}</td>
                    <td>{gf}:{ga}</td>
                    <td className="pts">{pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            <a href={REGIO_TABLE_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.8rem', textTransform: 'uppercase' }}>{c.live}</a>
          </p>
        </div>
      </section>
    </>
  );
}
