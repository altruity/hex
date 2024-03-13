import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';

export const EXAMPLE_PATH = 'cms-contentful';
export const CMS_NAME = 'Contentful';
export const CMS_URL = 'https://www.contentful.com';

export const inter = IBM_Plex_Sans({
  variable: '--font-inter',
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});
