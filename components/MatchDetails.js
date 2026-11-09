'use client';
import { CLUB_TEAM } from '../app/data';

const T = {
  pl: { summary: 'Szczegóły meczu', goals: 'Bramki', cards: 'Kartki', lineup: 'Skład Górnika', came: 'Wchodzili z ławki', ref: 'Sędzia',
        pen: 'rzut karny', og: 'samobój', yellow: 'żółta', second: 'druga żółta', red: 'czerwona', gk: 'B', cap: 'K', source: 'Źródło: MPZPN', none: 'Brak bramek', noCards: 'Brak kartek', noMin: 'minuta nieznana', bench: 'z ławki' },
  en: { summary: 'Match details', goals: 'Goals', cards: 'Cards', lineup: 'Górnik line-up', came: 'Came on', ref: 'Referee',
        pen: 'pen.', og: 'own goal', yellow: 'yellow', second: 'second yellow', red: 'red', gk: 'GK', cap: 'C', source: 'Source: MPZPN', none: 'No goals', noCards: 'No cards', noMin: 'minute unknown', bench: 'from the bench' },
};

export default function MatchDetails({ m, lang }) {
  const c = T[lang];
  const oppName = m.home === CLUB_TEAM ? m.away : m.home;
  const byMin = (a, b) => a.m - b.m;

  const goals = m.events.filter(e => ['goal', 'pen', 'og'].includes(e.type)).sort(byMin);
  // own goals are credited to the other side
  const creditedToGornik = e => (e.type === 'og' ? e.team === 'O' : e.team === 'G');
  const cards = m.events.filter(e => ['yellow', 'yellow2', 'red'].includes(e.type)).sort(byMin);
  const loCards = (m.lineup_only_cards || []).filter(x => x.type === 'yellow');
  const starters = m.lineup.filter(p => p.role === 'S');
  const cameOn = m.lineup.filter(p => p.role === 'B' && p.on != null).sort((a, b) => a.on - b.on);
  const tag = p => (p.gk ? ' (' + c.gk + ')' : '') + (p.c ? ' (' + c.cap + ')' : '');
  const cardLabel = t => (t === 'yellow' ? c.yellow : t === 'yellow2' ? c.second : c.red);

  return (
    <details className="match-details">
      <summary>{c.summary}</summary>
      <div className="md-grid">
        <div>
          <h4>{c.goals}</h4>
          {goals.length === 0 && <p className="md-muted">{c.none}</p>}
          <ul>
            {goals.map((e, i) => (
              <li key={i} className={creditedToGornik(e) ? 'md-g' : ''}>
                <span className="md-min">{e.min}′</span>
                <span>{e.player}{e.type === 'pen' ? ' (' + c.pen + ')' : ''}{e.type === 'og' ? ' (' + c.og + ')' : ''}
                  <em>{creditedToGornik(e) ? 'Górnik' : oppName}</em></span>
              </li>
            ))}
          </ul>
          <h4 style={{ marginTop: '1.25rem' }}>{c.cards}</h4>
          {cards.length === 0 && loCards.length === 0 && <p className="md-muted">{c.noCards}</p>}
          <ul>
            {cards.map((e, i) => (
              <li key={i} className={e.team === 'G' ? 'md-g' : ''}>
                <span className="md-min">{e.min}′</span>
                <span><i className={'md-card ' + (e.type === 'yellow' ? 'y' : e.type === 'yellow2' ? 'y2' : 'r')} />{e.player}
                  <em>{e.team === 'G' ? 'Górnik' : oppName} · {cardLabel(e.type)}{e.bench ? ' · ' + c.bench : ''}</em></span>
              </li>
            ))}
            {loCards.map((x, i) => (
              <li key={'lo' + i} className="md-g">
                <span className="md-min">?</span>
                <span><i className="md-card y" />{x.player}
                  <em>Górnik · {c.yellow} · {c.noMin}</em></span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{c.lineup}</h4>
          <ol className="md-lineup">
            {starters.map(p => (
              <li key={p.name}><span className="md-no">{p.no != null ? p.no : '–'}</span><span>{p.name}{tag(p)}{p.off != null ? <em> ↓ {p.off}′</em> : null}</span></li>
            ))}
          </ol>
          {cameOn.length > 0 && (
            <>
              <h4 style={{ marginTop: '1.25rem' }}>{c.came}</h4>
              <ol className="md-lineup">
                {cameOn.map(p => (
                  <li key={p.name}><span className="md-no">{p.no != null ? p.no : '–'}</span><span>{p.name}{tag(p)}<em> ↑ {p.on}′</em></span></li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
      <p className="md-foot">
        {m.referee ? c.ref + ': ' + m.referee + ' · ' : ''}{c.source}
      </p>
    </details>
  );
}
