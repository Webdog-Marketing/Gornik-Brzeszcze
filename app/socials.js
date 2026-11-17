import { CLUB } from './data';

// Instagram: the English account shows on both languages; the Polish account only on the Polish site
export function socialLinks(lang) {
  const links = [['Facebook', CLUB.facebook]];
  if (lang !== 'en') links.push(['Instagram (PL)', CLUB.instagramPl]);
  links.push([lang === 'en' ? 'Instagram' : 'Instagram (EN)', CLUB.instagramEn]);
  links.push(['TikTok', CLUB.tiktok]);
  links.push(['LinkedIn', CLUB.linkedin]);
  return links;
}
