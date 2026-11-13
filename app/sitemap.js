const BASE = 'https://gornikbrzeszcze.pl';
const ROUTES = ['', '/about', '/team', '/fixtures', '/results', '/news', '/history', '/gallery', '/sponsors', '/contact', '/100-years', '/poland-lithuania-1993'];

export default function sitemap() {
  const now = new Date();
  return ROUTES.flatMap(r => {
    const languages = { pl: BASE + r, en: BASE + '/en' + r };
    return [
      { url: BASE + r, lastModified: now, alternates: { languages } },
      { url: BASE + '/en' + r, lastModified: now, alternates: { languages } },
    ];
  });
}
