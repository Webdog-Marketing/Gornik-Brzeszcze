/** @type {import('next').NextConfig} */
const MAIN = 'https://gornikbrzeszcze.pl';
const hosts = (...h) => h.flatMap(x => [x, 'www.' + x]);
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
      rules.push({ source: '/', has: fromHost(host), destination: MAIN + '/en', permanent: true });
      rules.push({ source: '/:path+', has: fromHost(host), destination: MAIN + '/en/:path+', permanent: true });
    }
    for (const host of ['jestesmygornik.pl', 'www.jestesmygornik.pl']) {
      rules.push({ source: '/', has: fromHost(host), destination: MAIN, permanent: true });
      rules.push({ source: '/:path+', has: fromHost(host), destination: MAIN + '/:path+', permanent: true });
    }
    return rules;
  },
};
module.exports = nextConfig;
