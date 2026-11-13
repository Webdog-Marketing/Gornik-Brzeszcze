'use client';
import NextLink from 'next/link';
import { useLang, withLang } from '../app/LanguageContext';

// Drop-in replacement for next/link that keeps visitors in their language (/en prefix)
export default function Link({ href, ...props }) {
  const { lang } = useLang();
  return <NextLink href={withLang(href, lang)} {...props} />;
}
