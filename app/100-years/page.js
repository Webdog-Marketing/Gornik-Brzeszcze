'use client';
import Link from 'next/link';
import { useLang } from '../LanguageContext';

const C = {
  pl: {
    subtitle: '1922 – 2022',
    title: '100 LAT KLUBU',
    intro: 'W sobotę 18 czerwca 2022 roku Górnik Brzeszcze świętował stulecie istnienia. Dzień pełen turniejów, wyróżnień i muzyki zwieńczył mecz towarzyski z Górnikiem Zabrze – czternastokrotnym mistrzem Polski.',
    dayLabel: 'Wielki dzień',
    dayTitle: 'SOBOTA, 18 CZERWCA 2022',
    home: 'GÓRNIK BRZESZCZE',
    away: 'GÓRNIK ZABRZE',
    meta: ['Mecz towarzyski', 'Stadion Górnika, ul. Ofiar Oświęcimia', 'Do przerwy 0:5'],
    programmeLabel: 'Program obchodów',
    programme: [
      ['Turnieje dla dzieci i młodzieży', 'Rano na boisku zagrali skrzaci, żacy, orlicy, młodzicy i juniorzy młodsi – łącznie 20 drużyn i około 250 zawodników.'],
      ['Mecz z Górnikiem Zabrze', 'Głównym punktem obchodów był towarzyski mecz z ekstraklasowym Górnikiem Zabrze. Gospodarze, grający wówczas w lidze okręgowej, zebrali bezcenne doświadczenie.'],
      ['Wyróżnienia i koncerty', 'Jubileusz był okazją do wspomnień i wręczenia licznych wyróżnień – Górnik to nie tylko piłka nożna, ale także lekkoatletyka. Obchody uświetniły koncerty muzyczne.'],
      ['Kibice', 'Na trybunach około 150-osobowy młyn miejscowych kibiców, wspierany przez sympatyków z Kęt i Oświęcimia. W przerwie meczu kibice przygotowali oprawę z liczbą „100”.'],
    ],
    goalsLabel: 'Przebieg meczu',
    goalsTitle: 'BRAMKI DLA GÓRNIKA ZABRZE',
    ht: 'Przerwa · 0:5',
    tradLabel: 'Tradycja',
    tradTitle: 'ZABRZANIE NA KAŻDYM JUBILEUSZU',
    tradIntro: 'Górnik Zabrze jest stałym gościem klubowych rocznic w Brzeszczach. W 2022 roku zawitał na stadion przy ul. Ofiar Oświęcimia już po raz trzeci.',
    visits: [
      ['1972 · 50-lecie', '1 : 6', 'Towarzyski mecz obejrzało prawie 10 tysięcy widzów. Po stronie gości wystąpili m.in. Andrzej Szarmach, Jerzy Gorgoń i Włodzimierz Lubański.'],
      ['2002 · 80-lecie', '1 : 1', 'Remis 22 czerwca 2002 roku. Bramkę dla gospodarzy zdobył Mirosław Madeja.'],
      ['2022 · 100-lecie', '0 : 8', 'Zabrzanie rozpoczęli tu przygotowania do sezonu i wygrali 8:0.'],
    ],
    alumniLabel: 'Wychowankowie i zawodnicy',
    alumni: 'Do piłkarzy Górnika Brzeszcze, którzy mają za sobą występy w najwyższych ligach, należą m.in. Tadeusz Olma, Jan Bielenin, Krzysztof Chrapek i Arkadiusz Kłoda.',
    photosLabel: 'Z archiwum klubu',
    photoPh: 'Zdjęcia z jubileuszu – wkrótce',
    sources: 'Źródła: relacje Fakty Oświęcim, Dziennika Zachodniego, Gazety Krakowskiej i Nasze Miasto Oświęcim.',
    moreLabel: 'Zobacz też: Polska – Litwa 1993 →',
    historyLabel: '← Historia klubu',
  },
  en: {
    subtitle: '1922 – 2022',
    title: '100 YEARS OF THE CLUB',
    intro: 'On Saturday 18 June 2022, Górnik Brzeszcze celebrated its centenary. A day of youth tournaments, awards and music ended with a friendly against Górnik Zabrze, 14-time champions of Poland.',
    dayLabel: 'The big day',
    dayTitle: 'SATURDAY 18 JUNE 2022',
    home: 'GÓRNIK BRZESZCZE',
    away: 'GÓRNIK ZABRZE',
    meta: ['Friendly', 'Górnik Stadium, ul. Ofiar Oświęcimia', 'Half-time 0–5'],
    programmeLabel: 'Programme of the day',
    programme: [
      ['Youth tournaments', 'In the morning the pitch belonged to the youngest age groups: 20 teams and around 250 players took part across five age categories.'],
      ['The match vs Górnik Zabrze', 'The highlight was a friendly against Ekstraklasa side Górnik Zabrze. The hosts, then playing in the regional league, gained invaluable experience.'],
      ['Awards and concerts', 'The anniversary was a chance to look back and to present many awards – Górnik is not only football but also athletics. Live music rounded off the celebrations.'],
      ['Supporters', 'Around 150 home fans filled the ultras’ section, backed by supporters from Kęty and Oświęcim. At half-time the fans marked the occasion with a “100” display.'],
    ],
    goalsLabel: 'How it unfolded',
    goalsTitle: 'GÓRNIK ZABRZE GOALS',
    ht: 'Half-time · 0–5',
    tradLabel: 'Tradition',
    tradTitle: 'ZABRZE AT EVERY MILESTONE',
    tradIntro: 'Górnik Zabrze is a regular guest at Brzeszcze’s club anniversaries. In 2022 they came to the stadium on ul. Ofiar Oświęcimia for the third time.',
    visits: [
      ['1972 · 50th anniversary', '1 : 6', 'Almost 10,000 spectators watched the friendly. The visitors included Andrzej Szarmach, Jerzy Gorgoń and Włodzimierz Lubański.'],
      ['2002 · 80th anniversary', '1 : 1', 'A draw on 22 June 2002. Mirosław Madeja scored for the hosts.'],
      ['2022 · 100th anniversary', '0 : 8', 'Zabrze began their pre-season preparations here and won 8–0.'],
    ],
    alumniLabel: 'Players from our ranks',
    alumni: 'Górnik Brzeszcze players who have gone on to play in Poland’s top flight include Tadeusz Olma, Jan Bielenin, Krzysztof Chrapek and Arkadiusz Kłoda.',
    photosLabel: 'From the club archive',
    photoPh: 'Anniversary photos – coming soon',
    sources: 'Sources: match reports in Fakty Oświęcim, Dziennik Zachodni, Gazeta Krakowska and Nasze Miasto Oświęcim.',
    moreLabel: 'Also see: Poland v Lithuania 1993 →',
    historyLabel: '← Club history',
  },
};

const GOALS = [
  ['7′', 'Krawczyk'], ['9′', 'Krawczyk'], ['16′', 'Olkowski'], ['27′', 'Dadok'], ['37′', 'Dadok'],
  ['HT'],
  ['48′', 'Włodarczyk'], ['77′', 'Lubaski'], ['85′', 'Liszka'],
];

export default function CentenaryPage() {
  const { lang } = useLang();
  const c = C[lang];
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
          <p className="story story-intro">{c.intro}</p>

          <div className="eyebrow">{c.dayLabel}</div>
          <h2 className="block-title">{c.dayTitle}</h2>
          <div className="scoreboard">
            <div className="scoreboard-row">
              <div className="scoreboard-team">
                <img src="/crest.webp" alt="KS Górnik Brzeszcze" width="75" height="96" />
                {c.home}
              </div>
              <div className="scoreboard-score">0 : 8</div>
              <div className="scoreboard-team">{c.away}</div>
            </div>
            <div className="scoreboard-meta">
              {c.meta.map(m => <div key={m}>{m}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="eyebrow">{c.programmeLabel}</div>
          <div className="programme">
            {c.programme.map(([h, p]) => (
              <div key={h} className="programme-item">
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">{c.goalsLabel}</div>
          <h2 className="block-title">{c.goalsTitle}</h2>
          <ul className="goal-list">
            {GOALS.map((g, i) => g.length === 1
              ? <li key={i} className="ht"><span /><span>{c.ht}</span></li>
              : <li key={i}><span className="goal-min">{g[0]}</span><span>{g[1]}</span></li>
            )}
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="eyebrow">{c.tradLabel}</div>
          <h2 className="block-title">{c.tradTitle}</h2>
          <p className="story" style={{ margin: '0 0 2.5rem' }}>{c.tradIntro}</p>
          <div className="visit-grid">
            {c.visits.map(([year, score, text], i) => (
              <div key={year} className={'visit' + (i === 2 ? ' now' : '')}>
                <div className="visit-year">{year}</div>
                <div className="visit-score">{score}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="story" style={{ margin: '3rem 0 0', fontSize: '0.95rem' }}>
            <strong style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>{c.alumniLabel}</strong>
            {c.alumni}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">{c.photosLabel}</div>
          <div className="photo-strip">
            {[0, 1, 2].map(i => <div key={i} className="photo-ph">{c.photoPh}</div>)}
          </div>
          <p className="sources" style={{ marginTop: '2.5rem' }}>{c.sources}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/history" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{c.historyLabel}</Link>
            <Link href="/poland-lithuania-1993" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{c.moreLabel}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
