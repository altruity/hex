import { Analytics } from '@vercel/analytics/react';
import 'superkey/styles.css';

import ThemeRegistry from '@/_theme/ThemeRegistry';
import { inter, mono } from '@/_lib/constants';
import './globals.css';

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
          <main className="min-h-screen">{children}</main>
          <Analytics />
        </body>
      </html>
    </ThemeRegistry>
  );
}
