import './globals.css';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
  metadataBase: new URL('https://gornikbrzeszcze.pl'),
  title: 'KS Górnik Brzeszcze',
  description: 'Official website of KS Górnik Brzeszcze football club — proudly since 1922.',
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
