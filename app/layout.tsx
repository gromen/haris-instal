import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { clsx } from 'clsx';
import { headerHeight } from './constants';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Haris-instal',
  description: 'Usługi hydrauliczne',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="relative">
      <body className={clsx([openSans.className, 'min-h-screen'])}>
        <Header />
        <main className={`pb-40 pt-[${headerHeight}px]`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
