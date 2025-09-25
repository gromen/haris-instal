// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { clsx } from 'clsx';

const vremenaGrotesk = localFont({
  src: [
    {
      path: './fonts/VremenaGrotesk.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/VremenaGroteskBook.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/VremenaGroteskMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/VremenaGroteskBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-vremena-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Home | Haris-instal',
  description: 'Usługi hydrauliczne',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="relative !scroll-smooth">
      <body
        className={clsx([
          vremenaGrotesk.variable,
          vremenaGrotesk.className,
          'min-h-screen',
        ])}
      >
        <Header />
        <main className="pb-40 pt-20 lg:pt-[140px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
