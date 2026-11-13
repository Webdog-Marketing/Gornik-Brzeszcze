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
  //   jestesmygornik.pl, www.gornikbrzeszcze.pl -> Polish site
  async redirects() {
    const rules = [];
    for (const host of hosts('wearegornik.club', 'gornikbrzeszcze.com')) {
      rules.push({ source: '/', has: fromHost(host), destination: MAIN + '/en', permanent: true });
      rules.push({ source: '/:path+', has: fromHost(host), destination: MAIN + '/en/:path+', permanent: true });
    }
    for (const host of ['jestesmygornik.pl', 'www.jestesmygornik.pl', 'www.gornikbrzeszcze.pl']) {
      rules.push({ source: '/', has: fromHost(host), destination: MAIN, permanent: true });
      rules.push({ source: '/:path+', has: fromHost(host), destination: MAIN + '/:path+', permanent: true });
    }
    return rules;
  },
};
module.exports = nextConfig;
