// ---------------------------------------------------------------------------
// KS Górnik Brzeszcze – site data
// Every page reads from this one file. To update the site after a match, edit
// RESULTS / TABLE / FIXTURES below. Dates are ISO (YYYY-MM-DD), 24h times.
// ---------------------------------------------------------------------------

export const SEASON = '2026/27';

// The date this data was last checked. Pages use it as a safe starting point
// and then switch to the visitor's real date once loaded.
export const DATA_ASOF = '2026-11-08';

export const CLUB_TEAM = 'Górnik Brzeszcze';

export const CLUB = {
  address: 'ul. Ofiar Oświęcimia 68',
  postcode: '32-620 Brzeszcze',
  stadiumName: 'Stadion KS Górnik',
  stadiumAddress: 'ul. Ofiar Oświęcimia 49, 32-620 Brzeszcze',
  phone: '32 211 10 19',          // listed on RegioWyniki – please confirm
  facebook: 'https://www.facebook.com/gornikbrzeszcze',
  email: 'gornik1922brzeszcze@interia.pl',
};

export const REGIO_URL = 'https://regiowyniki.pl/druzyna/Pilka_Nozna/Malopolskie/Gornik_Brzeszcze/';
export const REGIO_TABLE_URL = REGIO_URL + 'tabela/';

// Whole-club photo shown at the top of the Team page.
export const TEAM_PHOTO = '/photos/club/club-2026.jpg';

export const STAFF = [
  { name: 'Daniel Płonka', photo: '/photos/players/plonka-daniel.jpg', role: { pl: 'Trener', en: 'Head coach' } },
  { name: 'Bogdan Pietras', photo: '/photos/players/pietras-bogdan.jpg', role: { pl: 'Kierownik drużyny', en: 'Team manager' } },
];

// gk: true = goalkeeper. no: null = no squad number listed yet.
export const SQUAD = [
  { no: 1, name: 'Bartosz Sikora', photo: '/photos/players/sikora-bartosz.jpg', gk: true },
  { no: 3, name: 'Michał Baraniak', photo: '/photos/players/baraniak-michal.jpg' },
  { no: 4, name: 'Adrian Pawela', photo: '/photos/players/pawela-adrian.jpg' },
  { no: 5, name: 'Oskar Palusiński', photo: '/photos/players/palusinski-oskar.jpg' },
  { no: 6, name: 'Kacper Iwanicki', photo: '/photos/players/iwanicki-kacper.jpg' },
  { no: 7, name: 'Kamil Nowak', photo: '/photos/players/nowak-kamil.jpg' },
  { no: 8, name: 'Łukasz Zawadzki', photo: '/photos/players/zawadzki-lukasz.jpg' },
  { no: 9, name: 'Mateusz Baran', photo: '/photos/players/baran-mateusz.jpg' },
  { no: 10, name: 'Paweł Kępka', photo: '/photos/players/kepka-pawel.jpg' },
  { no: 11, name: 'Jakub Rymarczyk', photo: '/photos/players/rymarczyk-jakub.jpg' },
  { no: 12, name: 'Miłosz Korzec', photo: '/photos/players/korzec-milosz.jpg', gk: true },
  { no: 13, name: 'Kajetan Kojm' },
  { no: 14, name: 'Kacper Brach', photo: '/photos/players/brach-kacper.jpg' },
  { no: 16, name: 'Wojciech Senkowski', photo: '/photos/players/senkowski-wojciech.jpg' },
  { no: 17, name: 'Bartosz Borończyk' },
  { no: 18, name: 'Patryk Dętkoś', photo: '/photos/players/detkos-patryk.jpg' },
  { no: 19, name: 'Beniamin Kojm', photo: '/photos/players/kojm-beniamin.jpg' },
  { no: 20, name: 'Kevin Czarkowski', photo: '/photos/players/czarkowski-kevin.jpg' },
  { no: 21, name: 'Maksymilian Kojm', photo: '/photos/players/kojm-maksymilian.jpg' },
  { no: null, name: 'Michał Kloc' },
  { no: null, name: 'Bartłomiej Kozak', photo: '/photos/players/kozak-bartlomiej.jpg' },
  { no: null, name: 'Maciej Mrowiec', photo: '/photos/players/mrowiec-maciej.jpg' },
  { no: null, name: 'Wiktor Nowak' },
  { no: null, name: 'Paskal Piekarski' },
  { no: null, name: 'Szymon Żurek', photo: '/photos/players/zurek-szymon.jpg' },
];

// Remaining fixtures, spring round 2026/27 (Klasa A, Oświęcim group).
// date: null = date not yet announced.
export const FIXTURES = [
  { date: '2027-03-13', time: '14:00', home: 'Zatorzanka Zator', away: 'Górnik Brzeszcze', venue: 'Zator, ul. Parkowa 4' },
  { date: '2027-03-20', time: '14:00', home: 'Górnik Brzeszcze', away: 'Strumień Polanka Wielka' },
  { date: '2027-03-27', time: '14:00', home: 'LKS Jawiszowice', away: 'Górnik Brzeszcze' },
  { date: '2027-04-03', time: '15:00', home: 'Górnik Brzeszcze', away: 'Soła Łęki' },
  { date: '2027-04-10', time: '15:00', home: 'Solavia Grojec', away: 'Górnik Brzeszcze' },
  { date: '2027-04-17', time: '15:00', home: 'Górnik Brzeszcze', away: 'Orzeł Witkowice' },
  { date: '2027-04-24', time: '16:00', home: 'Unia II Oświęcim', away: 'Górnik Brzeszcze' },
  { date: '2027-05-01', time: '16:00', home: 'Górnik Brzeszcze', away: 'Hejnał Kęty' },
  { date: '2027-05-08', time: '16:00', home: 'Soła Oświęcim', away: 'Górnik Brzeszcze' },
  { date: '2027-05-15', time: '16:00', home: 'Górnik Brzeszcze', away: 'Zgoda Malec' },
  { date: '2027-05-22', time: '16:00', home: 'Przeciszovia Przeciszów', away: 'Górnik Brzeszcze' },
  { date: '2027-05-29', time: '16:00', home: 'Pogórze Gierałtowice', away: 'Górnik Brzeszcze' },
  { date: '2027-06-05', time: '16:00', home: 'Górnik Brzeszcze', away: 'Puls Broszkowice' },
];

// Results so far, newest first. hs / as = home score / away score.
// comp: 'cup' marks the cup tie; everything else is the Klasa A league.
export const RESULTS = [
  { date: '2026-11-07', time: '11:00', round: 13, home: 'Puls Broszkowice', away: 'Górnik Brzeszcze', hs: 4, as: 0 },
  { date: '2026-10-31', time: '11:00', round: 12, home: 'Górnik Brzeszcze', away: 'Pogórze Gierałtowice', hs: 1, as: 1 },
  { date: '2026-10-24', time: '15:00', round: 11, home: 'Górnik Brzeszcze', away: 'Przeciszovia Przeciszów', hs: 0, as: 3 },
  { date: '2026-10-18', time: '15:00', round: 10, home: 'Zgoda Malec', away: 'Górnik Brzeszcze', hs: 3, as: 4 },
  { date: '2026-10-11', time: '15:30', round: 9, home: 'Górnik Brzeszcze', away: 'Soła Oświęcim', hs: 2, as: 3 },
  { date: '2026-10-03', time: '12:00', round: 8, home: 'Hejnał Kęty', away: 'Górnik Brzeszcze', hs: 4, as: 0 },
  { date: '2026-09-26', time: '16:00', round: 7, home: 'Górnik Brzeszcze', away: 'Unia II Oświęcim', hs: 0, as: 3 },
  { date: '2026-09-19', time: '15:00', round: 6, home: 'Orzeł Witkowice', away: 'Górnik Brzeszcze', hs: 5, as: 0 },
  { date: '2026-09-12', time: '14:00', round: 5, home: 'Górnik Brzeszcze', away: 'Solavia Grojec', hs: 1, as: 2 },
  { date: '2026-09-05', time: '16:30', round: 4, home: 'Soła Łęki', away: 'Górnik Brzeszcze', hs: 2, as: 0 },
  { date: '2026-08-29', time: '16:30', round: 3, home: 'Górnik Brzeszcze', away: 'LKS Jawiszowice', hs: 1, as: 2 },
  { date: '2026-08-22', time: '17:00', round: 2, home: 'Strumień Polanka Wielka', away: 'Górnik Brzeszcze', hs: 1, as: 1 },
  { date: '2026-08-15', time: '17:00', round: 1, home: 'Górnik Brzeszcze', away: 'Zatorzanka Zator', hs: 3, as: 2 },
  { date: '2026-07-25', time: '17:00', comp: 'cup', home: 'Górnik Brzeszcze', away: 'Strumień Polanka Wielka', hs: 1, as: 2 },
];

// League table snapshot (Klasa A, Oświęcim) from RegioWyniki.pl.
// Update TABLE_AFTER_ROUND and the rows together.
export const TABLE_AFTER_ROUND = 12;
// [team, played, won, drawn, lost, goalsFor, goalsAgainst, points]
export const TABLE = [
  ['Orzeł Witkowice', 12, 10, 2, 0, 45, 6, 32],
  ['Przeciszovia Przeciszów', 12, 9, 2, 1, 31, 15, 29],
  ['Hejnał Kęty', 12, 9, 0, 3, 36, 11, 27],
  ['LKS Jawiszowice', 12, 7, 3, 2, 29, 25, 24],
  ['Pogórze Gierałtowice', 12, 6, 3, 3, 16, 11, 21],
  ['Strumień Polanka Wielka', 12, 5, 3, 4, 17, 14, 18],
  ['Solavia Grojec', 12, 4, 3, 5, 27, 29, 15],
  ['Unia II Oświęcim', 12, 4, 2, 6, 28, 23, 14],
  ['Soła Oświęcim', 12, 3, 5, 4, 30, 47, 14],
  ['Soła Łęki', 12, 4, 1, 7, 25, 29, 13],
  ['Puls Broszkowice', 12, 3, 3, 6, 30, 32, 12],
  ['Górnik Brzeszcze', 12, 2, 2, 8, 13, 31, 8],
  ['Zgoda Malec', 12, 2, 0, 10, 18, 48, 6],
  ['Zatorzanka Zator', 12, 1, 1, 10, 13, 37, 4],
];

// Club board (from the KRS register). Set BOARD_PHOTO to a path once a board photo is uploaded.
export const BOARD_PHOTO = null;
export const BOARD = [
  { name: 'Krzysztof Januszyk', role: { pl: 'Prezes', en: 'President' } },
  { name: 'Łukasz Strzelczyk', role: { pl: 'Wiceprezes', en: 'Vice-president' } },
  { name: 'Dawid Bednarczyk', role: { pl: 'Wiceprezes', en: 'Vice-president' } },
  { name: 'Piotr Janusz', role: { pl: 'Członek zarządu', en: 'Board member' } },
  { name: 'Przemysław Torba', role: { pl: 'Członek zarządu', en: 'Board member' } },
  { name: 'Michał Kojm', role: { pl: 'Członek zarządu', en: 'Board member' } },
  { name: 'Lloyd Owers', role: { pl: 'Członek zarządu', en: 'Board member' } },
  { name: 'Matt Webb', role: { pl: 'Członek zarządu', en: 'Board member' } },
];

// Youth groups by birth year.
export const YOUTH = [
  { name: 'Junior', years: { pl: 'rocznik 2011 i starsi', en: 'born 2011 and older' } },
  { name: 'Trampkarz', years: { pl: 'roczniki 2012–2013', en: 'born 2012–2013' } },
  { name: 'Orlik', years: { pl: 'roczniki 2015–2016', en: 'born 2015–2016' } },
  { name: 'Żak', years: { pl: 'rocznik 2017 i młodsi', en: 'born 2017 and younger' } },
];

// 1.5% tax donation (Polish site only)
export const TAX = { krs: '0000011590' };

// Sponsor logos (the wall on /sponsors and the slider on the homepage).
export const SPONSORS = [
  { file: 'gmina-herb.jpg', name: 'Coat of arms', w: 140, h: 158 },
  { file: 'rodzina.jpg', name: 'Moja Przyjazna Poradnia', w: 440, h: 420 },
  { file: 'hop-fun.jpg', name: 'Hop&Fun', w: 680, h: 420 },
  { file: 'hanczar.jpg', name: 'Hanczar Nieruchomości', w: 420, h: 420 },
  { file: 'robtronic.jpg', name: 'Robtronic Węgiel Kruszywa', w: 262, h: 140 },
  { file: 'solidarnosc.jpg', name: 'NSZZ Solidarność', w: 597, h: 270 },
  { file: 'matteo.jpg', name: 'Matteo', w: 491, h: 315 },
  { file: 'gtrans.jpg', name: 'GTrans', w: 720, h: 269 },
  { file: 'bs-miedzna.jpg', name: 'Bank Spółdzielczy w Miedźnej', w: 222, h: 114 },
  { file: 'krion.jpg', name: 'Krion.pl', w: 290, h: 94 },
  { file: 'bistro-bilard.jpg', name: 'Bistro Bilard', w: 320, h: 320 },
  { file: 'renomex.jpg', name: 'Renomex Firma Budowlana', w: 204, h: 118 },
  { file: 'nsm.jpg', name: 'Nadwiślańska Spółka Mieszkaniowa', w: 222, h: 204 },
  { file: 'adexbud.jpg', name: 'Adexbud Materiały Budowlane', w: 720, h: 274 },
  { file: 'ila-klima.jpg', name: 'ILA Klima', w: 602, h: 332 },
  { file: 'skand.jpg', name: 'Skand Ubezpieczenia', w: 469, h: 148 },
  { file: 'moto-pasja.jpg', name: 'Moto Pasja', w: 210, h: 192 },
  { file: '3fit.jpg', name: '3Fit Spaces', w: 304, h: 353 },
  { file: 'smakosfera.jpg', name: 'Smakosfera', w: 326, h: 265 },
  { file: 'abc.jpg', name: 'ABC', w: 626, h: 226 },
  { file: 'baran.jpg', name: 'Inż. Janusz Baran', w: 720, h: 311 },
  { file: 'bp.jpg', name: 'bp', w: 114, h: 134 },
  { file: 'zz-dolowych.jpg', name: 'Związek Zawodowy Pracowników Dołowych', w: 421, h: 420 },
  { file: 'bielbud.jpg', name: 'Bielbud Budownictwo', w: 420, h: 420 },
  { file: 'puma-auto-serwis.jpg', name: 'Puma Auto Serwis', w: 407, h: 170 },
  { file: 'everest.jpg', name: 'Everest Budownictwo', w: 256, h: 102 },
  { file: 'loca.jpg', name: 'Loca', w: 172, h: 74 },
  { file: 'feniks.jpg', name: 'Feniks Drukarnia', w: 720, h: 277 },
  { file: 'intermarche.jpg', name: 'Intermarché', w: 288, h: 72 },
  { file: 'leonarczyk.jpg', name: 'Grupa Leonarczyk', w: 453, h: 162 },
];

// Photo library used by the Gallery page. cat: matches | club | youth | history
const ACTION_CAP = { pl: 'Mecz KS Górnik Brzeszcze', en: 'KS Górnik Brzeszcze in action' };
export const PHOTOS = [
  { src: '/photos/action/a04.jpg', cat: 'matches', wide: true, w: 1600, h: 900,
    cap: { pl: 'Radość po zdobyciu bramki', en: 'Celebrating a goal' } },
  { src: '/photos/club/club-2026.jpg', cat: 'club', wide: true, w: 1800, h: 635,
    cap: { pl: 'Cały klub: seniorzy, młodzież i najmłodsi zawodnicy', en: 'The whole club: seniors, youth and our youngest players' } },
  { src: '/photos/action/a03.jpg', cat: 'matches', w: 1600, h: 900, cap: ACTION_CAP },
  { src: '/photos/action/a10.jpg', cat: 'matches', w: 1600, h: 900, cap: ACTION_CAP },
  { src: '/photos/action/a01.jpg', cat: 'matches', w: 1600, h: 900, cap: ACTION_CAP },
  { src: '/photos/action/a02.jpg', cat: 'matches', w: 1600, h: 900, cap: ACTION_CAP },
  { src: '/photos/action/a05.jpg', cat: 'matches', w: 1600, h: 900, cap: ACTION_CAP },
  { src: '/photos/action/a06.jpg', cat: 'matches', w: 1600, h: 1203, cap: ACTION_CAP },
  { src: '/photos/action/a07.jpg', cat: 'matches', w: 1600, h: 966, cap: ACTION_CAP },
  { src: '/photos/action/a08.jpg', cat: 'matches', w: 1600, h: 1055, cap: ACTION_CAP },
  { src: '/photos/action/a09.jpg', cat: 'matches', w: 1600, h: 1027, cap: ACTION_CAP },
  { src: '/photos/action/a11.jpg', cat: 'matches', w: 1600, h: 1075, cap: ACTION_CAP },
  { src: '/photos/youth/youth-1.jpg', cat: 'youth', w: 1600, h: 810,
    cap: { pl: 'Młodzież KS Górnik Brzeszcze', en: 'KS Górnik Brzeszcze youth teams' } },
  { src: '/photos/youth/youth-2.jpg', cat: 'youth', w: 1600, h: 890,
    cap: { pl: 'Młodzież KS Górnik Brzeszcze', en: 'KS Górnik Brzeszcze youth teams' } },
  { src: '/photos/youth/youth-3.jpg', cat: 'youth', w: 1600, h: 867,
    cap: { pl: 'Najmłodsze grupy KS Górnik Brzeszcze', en: 'KS Górnik Brzeszcze’s youngest groups' } },
  { src: '/photos/youth/youth-4.jpg', cat: 'youth', w: 1500, h: 520,
    cap: { pl: 'Młodzież KS Górnik Brzeszcze', en: 'KS Górnik Brzeszcze youth teams' } },
  { src: '/photos/2022/teams.jpg', cat: 'history', set: '2022', w: 1280, h: 854,
    cap: { pl: 'Przed meczem: zawodnicy obu drużyn, sędziowie i najmłodsi z piłkami', en: 'Before kick-off: both teams, the officials and the young mascots' } },
  { src: '/photos/2022/action-1.jpg', cat: 'history', set: '2022', w: 1280, h: 807,
    cap: { pl: 'Górnik Brzeszcze – Górnik Zabrze, 18.06.2022', en: 'Górnik Brzeszcze v Górnik Zabrze, 18.06.2022' } },
  { src: '/photos/2022/action-2.jpg', cat: 'history', set: '2022', w: 1280, h: 961,
    cap: { pl: 'Mecz jubileuszowy z Górnikiem Zabrze', en: 'The jubilee match against Górnik Zabrze' } },
  { src: '/photos/1993/frame-1.jpg', cat: 'history', set: '1993', w: 955, h: 701,
    cap: { pl: 'Reprezentanci Polski w meczu z Litwą, Brzeszcze 1993', en: 'Poland players in the match v Lithuania, Brzeszcze 1993' } },
  { src: '/photos/1993/frame-2.jpg', cat: 'history', set: '1993', w: 799, h: 626,
    cap: { pl: 'Obie drużyny przed meczem na stadionie w Brzeszczach', en: 'Both teams lined up before the match at the stadium in Brzeszcze' } },
  { src: '/photos/1993/frame-3.jpg', cat: 'history', set: '1993', w: 802, h: 638,
    cap: { pl: 'Akcja pod bramką w meczu Polska – Litwa, 31.03.1993', en: 'Action in front of goal, Poland v Lithuania, 31.03.1993' } },
  { src: '/photos/1993/poland-lineup.jpg', cat: 'history', w: 632, h: 443,
    cap: { pl: 'Reprezentacja Polski przed meczem z Litwą, 31.03.1993', en: 'Poland line up before the match v Lithuania, 31.03.1993' } },
];

// Photos behind the page titles. Swap any path to change a page's header photo.
export const PAGE_PHOTOS = {
  fixtures: '/photos/action/a08.jpg',
  results: '/photos/action/a10.jpg',
  team: '/photos/action/a02.jpg',
  news: '/photos/action/a06.jpg',
  sponsors: '/photos/action/a11.jpg',
  about: '/photos/action/a05.jpg',
  contact: '/photos/action/a09.jpg',
};

// Photos for the three "Our values" cards on the About page (passion, community, drive).
export const VALUE_PHOTOS = ['/photos/values/passion.jpg', '/photos/values/community.jpg', '/photos/values/drive.jpg'];

// PZPN youth age categories for the 2026/27 season (reference for labelling teams).
export const PZPN_CATEGORIES = [
  { name: 'Junior starszy', code: 'A', ages: 'U-19 / U-18', born: '2008–2009' },
  { name: 'Junior młodszy', code: 'B', ages: 'U-17 / U-16', born: '2010–2011' },
  { name: 'Trampkarz', code: 'C', ages: 'U-15 / U-14', born: '2012–2013' },
  { name: 'Młodzik', code: 'D', ages: 'U-13 / U-12', born: '2014–2015' },
  { name: 'Orlik', code: 'E', ages: 'U-11 / U-10', born: '2016–2017' },
  { name: 'Żak', code: 'F', ages: 'U-9 / U-8', born: '2018–2019' },
  { name: 'Skrzat', code: 'G', ages: 'U-7 / U-6', born: '2020 and younger' },
];

// ---- helpers --------------------------------------------------------------

export function fmtDate(iso, lang, opts) {
  if (!iso) return '';
  const d = new Date(iso + 'T12:00:00Z');
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'pl-PL', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC', ...(opts || {}),
  }).format(d);
}

// 'W' | 'D' | 'L' from Górnik's point of view
export function outcome(r) {
  const home = r.home === CLUB_TEAM;
  const mine = home ? r.hs : r.as;
  const theirs = home ? r.as : r.hs;
  return mine > theirs ? 'W' : mine === theirs ? 'D' : 'L';
}

export function leagueRecord() {
  const league = RESULTS.filter(r => r.comp !== 'cup');
  const rec = { P: league.length, W: 0, D: 0, L: 0, GF: 0, GA: 0 };
  league.forEach(r => {
    const home = r.home === CLUB_TEAM;
    rec.GF += home ? r.hs : r.as;
    rec.GA += home ? r.as : r.hs;
    rec[outcome(r)] += 1;
  });
  rec.Pts = rec.W * 3 + rec.D;
  return rec;
}
