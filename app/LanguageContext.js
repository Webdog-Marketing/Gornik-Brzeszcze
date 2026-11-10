'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { t } from './translations';

const LanguageContext = createContext({ lang: 'pl', setLang: () => {}, t: t['pl'] });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pl');
  // keep <html lang> in step with the visible language so browsers don't try to translate the page
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  return context;
}
