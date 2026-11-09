// Match details and player statistics, computed from app/matches.json
// (transcribed from MPZPN screenshots). Add a match to that file and every
// number on the site updates.
import raw from './matches.json';
import { RESULTS, CLUB_TEAM } from './data';

export const MATCHES = raw.matches;
export const matchByDate = date => MATCHES.find(m => m.date === date);

export function coverage() {
  return { recorded: MATCHES.length, played: RESULTS.length };
}

export function playerStats(name) {
  const s = { apps: 0, starts: 0, mins: 0, goals: 0, yellow: 0, second: 0, red: 0 };
  for (const m of MATCHES) {
    const p = m.lineup.find(x => x.name === name);
    if (p && (p.role === 'S' || p.on != null)) {
      s.apps += 1;
      if (p.role === 'S') s.starts += 1;
      s.mins += (p.off != null ? p.off : 90) - (p.on != null ? p.on : 0);
    }
    for (const e of m.events) {
      if (e.team !== 'G' || e.player !== name) continue;
      if (e.type === 'goal' || e.type === 'pen') s.goals += 1;
      if (e.type === 'yellow') s.yellow += 1;
      if (e.type === 'yellow2') s.second += 1;
      if (e.type === 'red') s.red += 1;
    }
    for (const c of m.lineup_only_cards || []) {
      if (c.player === name && c.type === 'yellow') s.yellow += 1;
    }
  }
  return s;
}

// Goals credited to each side (own goals count for the other team)
export function sidesOf(m) {
  const gor = m.home === CLUB_TEAM ? 'home' : 'away';
  return { gor, opp: gor === 'home' ? 'away' : 'home' };
}
