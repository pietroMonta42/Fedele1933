import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family-playfair',
});

export const metadata: Metadata = {
  title: 'Fedele 1933 | Tradizione in ogni sapore',
  description:
    'Dal 1933 produciamo artigianalmente preparati per brodi, spezie e creme istantanee. La qualità delle materie prime fa la differenza.',
  keywords: ['brodo', 'spezie', 'Genova', 'artigianale', 'tradizione', 'Fedele 1933'],
  openGraph: {
    title: 'Fedele 1933 | Tradizione in ogni sapore',
    description:
      'Dal 1933 produciamo artigianalmente preparati per brodi, spezie e creme istantanee.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
