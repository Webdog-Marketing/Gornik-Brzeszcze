import './globals.css';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
  metadataBase: new URL('https://gornikbrzeszcze.pl'),
  title: 'KS Górnik Brzeszcze',
  description: 'Official website of KS Górnik Brzeszcze football club — proudly since 1922.',
  openGraph: {
    type: 'website',
    siteName: 'KS Górnik Brzeszcze',
    title: 'KS Górnik Brzeszcze',
    description: 'Górnicze Miasto – Górniczy Klub. Official website of KS Górnik Brzeszcze, proudly since 1922.',
    url: 'https://gornikbrzeszcze.pl',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'KS Górnik Brzeszcze' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KS Górnik Brzeszcze',
    description: 'Górnicze Miasto – Górniczy Klub. Official website of KS Górnik Brzeszcze, proudly since 1922.',
    images: ['/og-image.jpg'],
  },
};

// English pages live under /en: label the document accordingly before the page hydrates
const LANG_SCRIPT = "(function(){var p=location.pathname;if(p==='/en'||p.indexOf('/en/')===0)document.documentElement.lang='en'})()";

export default function RootLayout({ children }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
