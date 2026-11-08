'use client';
import Link from 'next/link';
import { useLang } from '../LanguageContext';

const C = {
  pl: {
    subtitle: '31 marca 1993',
    title: 'POLSKA – LITWA',
    intro: 'Raz w historii stadion Górnika Brzeszcze gościł piłkarską reprezentację Polski. W środę 31 marca 1993 roku biało-czerwoni zremisowali tu 1:1 z Litwą – w pierwszym w historii meczu obu reprezentacji.',
    home: 'POLSKA',
    away: 'LITWA',
    scorerHome: 'Piotr Świerczewski 11′',
    scorerAway: 'Eimantas Poderis 41′',
    meta: ['Mecz towarzyski', 'Środa, 31 marca 1993 · 14:00', 'Stadion Górnika, Brzeszcze · ok. 7000 widzów'],
    facts: [
      ['1993', 'pierwsze w historii spotkanie reprezentacji Polski i Litwy'],
      ['1', 'jedyny mecz kadry narodowej rozegrany na stadionie w Brzeszczach'],
      ['≈7000', 'kibiców na trybunach'],
      ['11′', 'gol Piotra Świerczewskiego – jedyny w jego reprezentacyjnej karierze'],
    ],
    storyLabel: 'Historia meczu',
    storyTitle: 'KADRA W BRZESZCZACH',
    story: [
      'Litwa od nieco ponad trzech lat była niepodległym państwem, a wcześniej, od zakończenia II wojny światowej, wchodziła w skład Związku Radzieckiego. Dlatego dotąd reprezentacje Polski i Litwy nigdy się nie spotkały. Premierowe spotkanie PZPN zorganizował w małym mieście, na stadionie przy ul. Ofiar Oświęcimia.',
      'Mecz wzbudził w Brzeszczach ogromne zainteresowanie – na trybuny przyszło około 7 tysięcy widzów. Kadra prowadzona przez Andrzeja Strejlaua objęła prowadzenie w 11. minucie po golu Piotra Świerczewskiego, jednak w 41. minucie wyrównał Eimantas Poderis i spotkanie zakończyło się remisem 1:1.',
      'W składzie biało-czerwonych wystąpili m.in. Adam Matysek, Tomasz Wałdoch, Jerzy Brzęczek – późniejszy selekcjoner reprezentacji Polski – Jan Furtok, Krzysztof Warzycha oraz Piotr Świerczewski.',
    ],
    stadiumLabel: 'Stadion',
    stadium: 'Stadion Górnika otwarto w 1954 roku dzięki wsparciu finansowemu kopalni „Brzeszcze”. Spotkanie z Litwą pozostaje jedynym meczem reprezentacji Polski rozegranym na tym obiekcie.',
    photosLabel: 'Z archiwum klubu',
    photoPh: 'Zdjęcia z meczu – wkrótce',
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
    meta: ['International friendly', 'Wednesday 31 March 1993 · 14:00', 'Górnik Stadium, Brzeszcze · approx. 7,000 spectators'],
    facts: [
      ['1993', 'the first-ever meeting of the Poland and Lithuania national teams'],
      ['1', 'the only national-team match ever played at the stadium in Brzeszcze'],
      ['≈7,000', 'spectators in the stands'],
      ['11′', 'Piotr Świerczewski’s goal, the only one of his international career'],
    ],
    storyLabel: 'The story',
    storyTitle: 'THE NATIONAL TEAM COMES TO BRZESZCZE',
    story: [
      'Lithuania had been independent for just over three years; before that, from the end of the Second World War, it had been part of the Soviet Union. Because of that, the Polish and Lithuanian national teams had never met. The Polish FA chose a small town and the stadium on ul. Ofiar Oświęcimia for the historic first fixture.',
      'The match generated huge excitement in Brzeszcze, with around 7,000 spectators in the ground. Poland, managed by Andrzej Strejlau, went ahead in the 11th minute through Piotr Świerczewski, but Eimantas Poderis equalised in the 41st minute and the game finished 1–1.',
      'The Poland side featured Adam Matysek, Tomasz Wałdoch, Jerzy Brzęczek – later manager of the national team – Jan Furtok, Krzysztof Warzycha and Piotr Świerczewski.',
    ],
    stadiumLabel: 'The stadium',
    stadium: 'The Górnik stadium opened in 1954 with financial support from the Brzeszcze coal mine. The match against Lithuania remains the only Poland national-team game played there.',
    photosLabel: 'From the club archive',
    photoPh: 'Match photos – coming soon',
    sourcesLabel: 'Sources',
    historyLabel: '← Club history',
    moreLabel: '100 years of the club →',
  },
};

const SOURCES = [
  ['PZPN – Łączy nas piłka: Polska – Litwa 1:1', 'https://www.laczynaspilka.pl/biblioteka/mecze/polska-litwa-11-31031993'],
  ['PZPN – Łączy nas piłka: Litewska dwunastka', 'https://www.laczynaspilka.pl/biblioteka/kroniki/litewska-dwunastka'],
  ['Historia Polskiej Piłki Nożnej (hppn.pl)', 'http://www.hppn.pl/reprezentacja/mecze/rok-1993/210,Polska-Litwa-31-03-1993-mecz-towarzyski'],
];

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
          <div className="story" style={{ margin: 0 }}>
            {c.story.map((p, i) => <p key={i}>{p}</p>)}
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
            <Link href="/history" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{c.historyLabel}</Link>
            <Link href="/100-years" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>{c.moreLabel}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
