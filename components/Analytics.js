'use client';
import { useEffect, useState } from 'react';
import { useLang } from '../app/LanguageContext';

const GA_ID = 'G-9GTFBGT558';
const KEY = 'gornik-consent';

const T = {
  pl: {
    text: 'Używamy plików cookie Google Analytics, aby sprawdzać, które strony są odwiedzane i ulepszać stronę klubu. Statystyki włączymy tylko za Twoją zgodą.',
    accept: 'Akceptuję', reject: 'Odrzucam', more: 'Polityka prywatności', href: '/privacy',
  },
  en: {
    text: 'We use Google Analytics cookies to see which pages are visited and to improve the club website. Analytics only switch on if you agree.',
    accept: 'Accept', reject: 'Decline', more: 'Privacy policy', href: '/en/privacy',
  },
};

function loadGA() {
  if (typeof window === 'undefined' || window.__gaLoaded) return;
  window.__gaLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
}

export default function Analytics() {
  const { lang } = useLang();
  const [choice, setChoice] = useState('loading');
  const t = T[lang === 'en' ? 'en' : 'pl'];

  useEffect(() => {
    let v = null;
    try { v = localStorage.getItem(KEY); } catch (e) {}
    setChoice(v || 'ask');
    if (v === 'granted') loadGA();
    const reopen = () => setChoice('ask');
    window.addEventListener('gornik-cookie-settings', reopen);
    return () => window.removeEventListener('gornik-cookie-settings', reopen);
  }, []);

  const decide = (v) => {
    try { localStorage.setItem(KEY, v); } catch (e) {}
    setChoice(v);
    if (v === 'granted') loadGA();
    else if (window.__gaLoaded) {
      // withdrawing consent: stop measurement and clear GA cookies
      window['ga-disable-' + GA_ID] = true;
      document.cookie.split(';').forEach(c => {
        const n = c.split('=')[0].trim();
        if (n.indexOf('_ga') === 0) document.cookie = n + '=; Max-Age=0; path=/; domain=' + location.hostname;
      });
    }
  };

  if (choice !== 'ask') return null;
  const btn = { padding: '0.55rem 1.1rem', fontWeight: 700, cursor: 'pointer', border: '1px solid var(--gold)', fontSize: '0.85rem' };
  return (
    <div role="dialog" aria-live="polite" aria-label="Cookies" translate="no" className="notranslate"
      style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 1000, background: 'var(--dark-2, #111)', borderTop: '2px solid var(--gold)', padding: '1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
      <p style={{ margin: 0, maxWidth: 640, fontSize: '0.85rem', color: 'var(--white, #fff)' }} translate="yes">
        {t.text} <a href={t.href} style={{ color: 'var(--gold)', textDecoration: 'underline' }}>{t.more}</a>
      </p>
      <div style={{ display: 'flex', gap: '0.6rem' }}>
        <button onClick={() => decide('denied')} style={{ ...btn, background: 'transparent', color: 'var(--gold)' }}>{t.reject}</button>
        <button onClick={() => decide('granted')} style={{ ...btn, background: 'var(--gold)', color: '#000' }}>{t.accept}</button>
      </div>
    </div>
  );
}
