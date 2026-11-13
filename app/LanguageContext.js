'use client';
import { createContext, useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { t } from './translations';

// English pages live under /en, Polish pages at the root.
export const isEnPath = p => p === '/en' || (p || '').startsWith('/en/');
export const stripLang = p => (isEnPath(p) ? (p.slice(3) || '/') : (p || '/'));
// Prefix an internal href with /en when the visitor is reading English
export const withLang = (href, lang) => {
  if (lang !== 'en' || typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//') || isEnPath(href)) return href;
  if (href === '/') return '/en';
  if (href.startsWith('/#') || href.startsWith('/?')) return '/en' + href.slice(1);
  return '/en' + href;
};

const LanguageContext = createContext({ lang: 'pl', setLang: () => {}, t: t['pl'] });

export function LanguageProvider({ children }) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const lang = isEnPath(pathname) ? 'en' : 'pl';

  // keep <html lang> in step with the visible language so browsers don't try to translate the page
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // the PL / EN toggle moves to the same page in the other language
  const setLang = next => {
    if (next === lang) return;
    const base = stripLang(pathname);
    const target = next === 'en' ? '/en' + (base === '/' ? '' : base) : base;
    router.push(target + (typeof window !== 'undefined' ? window.location.hash : ''));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
