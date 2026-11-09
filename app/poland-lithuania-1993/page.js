'use client';
import Link from 'next/link';
import { useLang } from '../LanguageContext';

const PZPN_URL = 'https://www.laczynaspilka.pl/biblioteka/mecze/polska-litwa-11-31031993';
const VIDEO_ID = 'dPkr5bTY9y0';

const XI = [
  [1, 'Adam Matysek'], [2, 'Marcin Jałocha'], [3, 'Dariusz Grzesik'], [4, 'Adam Fedoruk'],
  [5, 'Tomasz Wałdoch'], [6, 'Ryszard Staniek'], [7, 'Piotr Świerczewski'], [8, 'Krzysztof Warzycha'],
  [9, 'Jan Furtok'], [10, 'Jerzy Brzęczek'], [11, 'Maciej Śliwowski'],
];

const C = {
  pl: {
    subtitle: '31 marca 1993',
    title: 'POLSKA – LITWA',
    intro: 'Raz w historii stadion Górnika Brzeszcze gościł piłkarską reprezentację Polski. W środę 31 marca 1993 roku biało-czerwoni zremisowali tu 1:1 z Litwą – w pierwszym w historii meczu obu reprezentacji.',
    home: 'POLSKA',
    away: 'LITWA',
    scorerHome: 'Piotr Świerczewski 11′',
    scorerAway: 'Eimantas Poderis 41′',
    meta: ['Mecz towarzyski', 'Środa, 31 marca 1993 · 14:00', 'Stadion Górnika, Brzeszcze · ok. 7000 widzów', 'Sędzia: Piotr Werner'],
    facts: [
      ['1993', 'pierwsze w historii spotkanie reprezentacji Polski i Litwy'],
      ['1', 'jedyny mecz kadry narodowej rozegrany na stadionie w Brzeszczach'],
      ['33.', 'polski stadion (i 23. miasto), które gościło reprezentację Polski'],
      ['≈7000', 'kibiców na trybunach'],
      ['11′', 'gol Piotra Świerczewskiego – pierwszy w kadrze i jedyny w 70 występach'],
    ],
    storyLabel: 'Historia meczu',
    storyTitle: 'KADRA W BRZESZCZACH',
    story: [
      'Litwa od nieco ponad trzech lat była niepodległym państwem, a wcześniej, od zakończenia II wojny światowej, wchodziła w skład Związku Radzieckiego. Dlatego dotąd reprezentacje Polski i Litwy nigdy się nie spotkały. Premierowe spotkanie PZPN zorganizował w małym mieście, na stadionie przy ul. Ofiar Oświęcimia.',
      'Przyjazd kadry przyciągnął na trybuny większość mieszkańców miasta. Kibiców nie zniechęciła zimowa pogoda, a murawa pokryta śniegiem i lodem została przygotowana tak starannie, że sami piłkarze chwalili jej stan.',
      'Biało-czerwoni, prowadzeni przez Andrzeja Strejlaua, objęli prowadzenie w 11. minucie. Piotr Świerczewski zdobył swojego pierwszego gola w reprezentacji – jak się okazało, jedynego w 70 meczach, wśród których był mundial 2002. W 41. minucie Eimantas Poderis dobił strzał V. Šlekysa i wyrównał.',
      'W przerwie trener Polaków dokonał czterech zmian: na boisko weszli Aleksander Kłak, Krzysztof Maciejewski, Dariusz Gęsior i Jacek Bednarz, a zeszli Matysek, Grzesik, Śliwowski i Świerczewski. Dla Bednarza był to debiut w reprezentacji. Wynik się nie zmienił, a remis był czwartym z rzędu – wyrównał rekord kadry z 1965 roku.',
      'Kapitan reprezentacji Jerzy Brzęczek powiedział w rozmowie z TVP, że lubi grać w mniejszych miejscowościach, bo dla ludzi, którzy przychodzą na takie spotkania, możliwość zobaczenia kadry to coś wielkiego.',
    ],
    captionMain: 'Reprezentacja Polski przed meczem z Litwą.',
    captionNames: 'Od lewej (wg opisu PZPN): Dariusz Grzesik, Krzysztof Warzycha, Jan Furtok, Ryszard Staniek, Piotr Świerczewski, Marcin Jałocha, Maciej Śliwowski, Tomasz Wałdoch, Adam Fedoruk, Adam Matysek i Jerzy Brzęczek.',
    credit: 'Fot. Archiwum Górnika Brzeszcze',
    videoLabel: 'Wideo',
    videoTitle: 'SKRÓT MECZU',
    videoLink: 'Obejrzyj na YouTube →',
    videoFrameTitle: 'Polska – Litwa 1:1, 31.03.1993 – skrót meczu',
    lineupLabel: 'Skład',
    lineupTitle: 'POLSKA – PIERWSZA JEDENASTKA',
    coachLabel: 'Trener',
    coach: 'Andrzej Strejlau',
    subsLabel: 'Zmiany w przerwie',
    subs: 'Kłak (12), Maciejewski (14), Gęsior (15), Bednarz (16, debiut w kadrze)',
    cardsLabel: 'Żółte kartki',
    cards: 'Marcin Jałocha (Polska), Virginijus Baltušnikas (Litwa)',
    pzpnCta: 'Pełna relacja, składy i notatki statystyka – Biblioteka PZPN →',
    stadiumLabel: 'Stadion',
    stadium: 'Stadion Górnika otwarto w 1954 roku dzięki wsparciu finansowemu kopalni „Brzeszcze”. Spotkanie z Litwą pozostaje jedynym meczem reprezentacji Polski rozegranym na tym obiekcie.',
    photosLabel: 'Z archiwum klubu',
    photoPh: 'Więcej zdjęć – wkrótce',
    sourcesLabel: 'Źródła',
    historyLabel: '← Historia klubu',
    moreLabel: '100 lat klubu →',
  },
  en: {
    subtitle: '31 March 1993',
    title: 'POLAND v LITHUANIA',
    intro: 'Just once has the Górnik Brzeszcze stadium hosted the Polish national football team. On Wednesday 31 March 1993 the white-and-reds drew 1–1 with Lithuania here, in the first-ever meeting between the two national sides.',
    home: 'POLAND',
    away: 'LITHUANIA',
    scorerHome: 'Piotr Świerczewski 11′',
    scorerAway: 'Eimantas Poderis 41′',
    meta: ['International friendly', 'Wednesday 31 March 1993 · 14:00', 'Górnik Stadium, Brzeszcze · approx. 7,000 spectators', 'Referee: Piotr Werner'],
    facts: [
      ['1993', 'the first-ever meeting of the Poland and Lithuania national teams'],
      ['1', 'the only national-team match ever played at the stadium in Brzeszcze'],
      ['33rd', 'stadium in Poland (and 23rd town) to host the national team'],
      ['≈7,000', 'spectators in the stands'],
      ['11′', 'Piotr Świerczewski’s goal – his first for Poland and his only one in 70 appearances'],
    ],
    storyLabel: 'The story',
    storyTitle: 'THE NATIONAL TEAM COMES TO BRZESZCZE',
    story: [
      'Lithuania had been independent for just over three years; before that, from the end of the Second World War, it had been part of the Soviet Union. Because of that, the Polish and Lithuanian national teams had never met. The Polish FA chose a small town and the stadium on ul. Ofiar Oświęcimia for the historic first fixture.',
      'The arrival of the national team brought most of the town’s residents to the ground. The winter weather did not put fans off, and the snow- and ice-covered pitch had been prepared so carefully that the players themselves praised its condition.',
      'Poland, managed by Andrzej Strejlau, took the lead in the 11th minute. Piotr Świerczewski scored his first goal for the national team – and, as it turned out, his only one in 70 appearances, which included the 2002 World Cup. In the 41st minute Eimantas Poderis followed up a shot by V. Šlekys to equalise.',
      'At half-time Poland made four changes: Aleksander Kłak, Krzysztof Maciejewski, Dariusz Gęsior and Jacek Bednarz came on, with Matysek, Grzesik, Śliwowski and Świerczewski coming off. It was Bednarz’s international debut. The score did not change, and the draw was Poland’s fourth in a row, equalling a record from 1965.',
      'Poland captain Jerzy Brzęczek told TVP that he likes playing in smaller towns, because for the people who turn out for such matches, seeing the national team is something big.',
    ],
    captionMain: 'Poland line up before the match against Lithuania.',
    captionNames: 'From left (per PZPN’s caption): Dariusz Grzesik, Krzysztof Warzycha, Jan Furtok, Ryszard Staniek, Piotr Świerczewski, Marcin Jałocha, Maciej Śliwowski, Tomasz Wałdoch, Adam Fedoruk, Adam Matysek and Jerzy Brzęczek.',
    credit: 'Photo: Górnik Brzeszcze archive',
    videoLabel: 'Video',
    videoTitle: 'MATCH HIGHLIGHTS',
    videoLink: 'Watch on YouTube →',
    videoFrameTitle: 'Poland v Lithuania 1–1, 31.03.1993 – match highlights',
    lineupLabel: 'Line-up',
    lineupTitle: 'POLAND’S STARTING XI',
    coachLabel: 'Coach',
    coach: 'Andrzej Strejlau',
    subsLabel: 'Half-time changes',
    subs: 'Kłak (12), Maciejewski (14), Gęsior (15), Bednarz (16, international debut)',
    cardsLabel: 'Yellow cards',
    cards: 'Marcin Jałocha (Poland), Virginijus Baltušnikas (Lithuania)',
    pzpnCta: 'Full report, line-ups and match notes – PZPN Library →',
    stadiumLabel: 'The stadium',
    stadium: 'The Górnik stadium opened in 1954 with financial support from the Brzeszcze coal mine. The match against Lithuania remains the only Poland national-team game played there.',
    photosLabel: 'From the club archive',
    photoPh: 'More photos – coming soon',
    sourcesLabel: 'Sources',
    historyLabel: '← Club history',
    moreLabel: '100 years of the club →',
  },
};

const SOURCES = [
  ['PZPN – Biblioteka: Polska – Litwa 1:1', PZPN_URL],
  ['PZPN – Łączy nas piłka: Litewska dwunastka', 'https://www.laczynaspilka.pl/biblioteka/kroniki/litewska-dwunastka'],
  ['Historia Polskiej Piłki Nożnej (hppn.pl)', 'http://www.hppn.pl/reprezentacja/mecze/rok-1993/210,Polska-Litwa-31-03-1993-mecz-towarzyski'],
];

const linkStyle = { color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' };

export default function Poland1993Page() {
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

          <div className="scoreboard">
            <div className="scoreboard-row">
              <div>
                <div className="scoreboard-team">{c.home}</div>
                <div className="scoreboard-scorers">{c.scorerHome}</div>
              </div>
              <div className="scoreboard-score">1 : 1</div>
              <div>
                <div className="scoreboard-team">{c.away}</div>
                <div className="scoreboard-scorers">{c.scorerAway}</div>
              </div>
            </div>
            <div className="scoreboard-meta">
              {c.meta.map(m => <div key={m}>{m}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="fact-grid">
            {c.facts.map(([n, label]) => (
              <div key={label} className="fact">
                <div className="fact-num">{n}</div>
                <div className="fact-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">{c.storyLabel}</div>
          <h2 className="block-title">{c.storyTitle}</h2>
          <div className="story-split">
            <div className="story">
              {c.story.map((p, i) => <p key={i}>{p}</p>)}
              <a className="ext-link" href={PZPN_URL} target="_blank" rel="noopener noreferrer">{c.pzpnCta}</a>
            </div>
            <figure className="photo-figure">
              <img src="/photos/1993/poland-lineup.jpg" alt={c.captionMain} width="632" height="443" />
              <figcaption>
                <strong>{c.captionMain}</strong> {c.captionNames}
                <span className="photo-credit">{c.credit}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="eyebrow">{c.videoLabel}</div>
          <h2 className="block-title">{c.videoTitle}</h2>
          <div className="video-wrap">
            <iframe
              src={'https://www.youtube-nocookie.com/embed/' + VIDEO_ID}
              title={c.videoFrameTitle}
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p style={{ marginTop: '1rem' }}>
            <a href={'https://www.youtube.com/watch?v=' + VIDEO_ID} target="_blank" rel="noopener noreferrer" style={linkStyle}>{c.videoLink}</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">{c.lineupLabel}</div>
          <h2 className="block-title">{c.lineupTitle}</h2>
          <div className="lineup-wrap">
            <ul className="lineup">
              {XI.map(([n, name]) => (
                <li key={n}><span className="lineup-no">{n}</span><span>{name}</span></li>
              ))}
            </ul>
            <div className="lineup-side">
              <h4>{c.coachLabel}</h4>
              <p>{c.coach}</p>
              <h4>{c.subsLabel}</h4>
              <p>{c.subs}</p>
              <h4>{c.cardsLabel}</h4>
              <p>{c.cards}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="eyebrow">{c.stadiumLabel}</div>
          <p className="story" style={{ margin: 0 }}>{c.stadium}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">{c.photosLabel}</div>
          <div className="photo-strip">
            {[0, 1, 2].map(i => <div key={i} className="photo-ph">{c.photoPh}</div>)}
          </div>

          <p className="sources" style={{ marginTop: '2.5rem' }}>
            {c.sourcesLabel}:{' '}
            {SOURCES.map(([label, href], i) => (
              <span key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                {i < SOURCES.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/history" style={linkStyle}>{c.historyLabel}</Link>
            <Link href="/100-years" style={linkStyle}>{c.moreLabel}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
