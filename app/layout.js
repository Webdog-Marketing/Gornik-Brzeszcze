import './globals.css';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
  title: 'KS Górnik Brzeszcze',
  description: 'Official website of KS Górnik Brzeszcze football club — proudly since 1922.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
