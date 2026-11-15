'use client';
import { useLang } from '../LanguageContext';
import { CLUB } from '../data';

const C = {
  pl: {
    subtitle: 'Twoje dane', title: 'POLITYKA PRYWATNOŚCI', updated: 'Ostatnia aktualizacja: listopad 2026',
    sections: [
      ['Administrator danych', `Administratorem danych jest KS Górnik Brzeszcze, ${CLUB.address}, ${CLUB.postcode}. Kontakt: ${CLUB.email}.`],
      ['Statystyki odwiedzin (Google Analytics)', 'Za Twoją zgodą korzystamy z Google Analytics 4 (Google Ireland Ltd.), aby zobaczyć, ile osób odwiedza stronę, z jakich krajów i które podstrony czytają. Zbierane są dane zbiorcze: odwiedzane strony, typ urządzenia i przeglądarki, przybliżona lokalizacja oraz źródło wejścia (np. adres, z którego przekierowano Cię na stronę). Adresy IP są anonimizowane. Bez Twojej zgody pliki cookie analityczne nie są ustawiane.'],
      ['Zgoda i jej wycofanie', 'Zgodę możesz w każdej chwili zmienić lub wycofać przyciskiem „Ustawienia cookies” w stopce strony. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania przed jej wycofaniem.'],
      ['Formularz kontaktowy', 'Formularz otwiera Twój program pocztowy i wiadomość trafia na adres klubu. Dane z wiadomości wykorzystujemy wyłącznie, aby Ci odpowiedzieć.'],
      ['Twoje prawa', `Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu oraz skargi do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl). Napisz do nas: ${CLUB.email}.`],
    ],
    settings: 'Ustawienia cookies',
  },
  en: {
    subtitle: 'Your data', title: 'PRIVACY POLICY', updated: 'Last updated: November 2026',
    sections: [
      ['Data controller', `The data controller is KS Górnik Brzeszcze, ${CLUB.address}, ${CLUB.postcode}, Poland. Contact: ${CLUB.email}.`],
      ['Visitor statistics (Google Analytics)', 'With your consent we use Google Analytics 4 (Google Ireland Ltd.) to see how many people visit the site, from which countries, and which pages they read. We collect aggregated data: pages visited, device and browser type, approximate location and how you arrived (for example, which web address redirected you here). IP addresses are anonymised. Without your consent no analytics cookies are set.'],
      ['Consent and withdrawing it', 'You can change or withdraw your consent at any time using the “Cookie settings” button in the page footer. Withdrawing consent does not affect the lawfulness of processing before withdrawal.'],
      ['Contact form', 'The form opens your email app and the message goes to the club’s address. We use the details in your message only to reply to you.'],
      ['Your rights', `You have the right to access, correct or delete your data, restrict or object to processing, and to complain to the Polish data protection authority (UODO, uodo.gov.pl). Write to us at ${CLUB.email}.`],
    ],
    settings: 'Cookie settings',
  },
};

export default function Privacy() {
  const { lang } = useLang();
  const c = C[lang === 'en' ? 'en' : 'pl'];
  return (
    <>
      <section className="page-header"><div className="container">
        <p className="section-label">{c.subtitle}</p>
        <h1 className="section-title">{c.title}</h1>
      </div></section>
      <section className="section"><div className="container" style={{ maxWidth: 760 }}>
        <p style={{ color: 'var(--grey)', marginBottom: '2rem' }}>{c.updated}</p>
        {c.sections.map(([h, p]) => (
          <div key={h} style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{h}</h2>
            <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>{p}</p>
          </div>
        ))}
        <button className="btn btn-outline" onClick={() => window.dispatchEvent(new Event('gornik-cookie-settings'))}>{c.settings}</button>
      </div></section>
    </>
  );
}
