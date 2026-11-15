/** @type {import('next').NextConfig} */
const MAIN = 'https://gornikbrzeszcze.pl';
const hosts = (...h) => h.flatMap(x => [x, 'www.' + x]);
// Tag redirected visits so Google Analytics shows which domain brought them in
const utm = host => '?utm_source=' + host.replace(/^www\./, '') + '&utm_medium=redirect&utm_campaign=domain';
const fromHost = host => [{ type: 'host', value: host }];

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Extra domains all lead to the main site:
  //   wearegornik.club, gornikbrzeszcze.com  -> English site (/en)
  //   jestesmygornik.pl -> Polish site
  // (www.gornikbrzeszcze.pl <-> gornikbrzeszcze.pl is handled in Vercel's Domains settings, not here,
  //  so the two can never redirect to each other)
  async redirects() {
    const rules = [];
    for (const host of hosts('wearegornik.club', 'gornikbrzeszcze.com')) {
      rules.push({ source: '/', has: fromHost(host), destination: MAIN + '/en' + utm(host), permanent: true });
      rules.push({ source: '/:path+', has: fromHost(host), destination: MAIN + '/en/:path+' + utm(host), permanent: true });
    }
    for (const host of ['jestesmygornik.pl', 'www.jestesmygornik.pl']) {
      rules.push({ source: '/', has: fromHost(host), destination: MAIN + utm(host), permanent: true });
      rules.push({ source: '/:path+', has: fromHost(host), destination: MAIN + '/:path+' + utm(host), permanent: true });
    }
    return rules;
  },
};
module.exports = nextConfig;
