import './globals.css';
import ClientLayout from '../components/ClientLayout';
import FormaConnectorScript from "next/script";


export const metadata = {
  title: 'KS Górnik Brzeszcze',
  description: 'Official website of KS Górnik Brzeszcze football club — proudly since 1922.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <ClientLayout>{children}</ClientLayout>
      
<FormaConnectorScript id="forma-connector" data-forma-connector="1" src="https://formacms.app/visual-cms.js" strategy="afterInteractive" data-editor="https://formacms.app" data-content="/forma/content.json" />
</body>
    </html>
  );
}
