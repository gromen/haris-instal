import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { clsx } from 'clsx';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Haris-instal',
  description: 'Usługi hydrauliczne',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={openSans.className}>
        <Header />
        <main className="min-h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
