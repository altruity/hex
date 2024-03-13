import './globals.css';

import ThemeRegistry from '@/_theme/ThemeRegistry';
import { inter, mono } from '@/_lib/constants';

export const metadata = {
  title: 'Community | Hex',
  description: 'Hex community page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeRegistry options={{ key: 'mui' }}>
      <html lang="en" className={inter.variable}>
        <body className={mono.variable}>
          <section className="min-h-screen">
            <main>{children}</main>
          </section>
        </body>
      </html>
    </ThemeRegistry>
  );
}
