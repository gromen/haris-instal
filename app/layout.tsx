import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { clsx } from 'clsx';

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
    <html lang="pl" className="relative !scroll-smooth">
      <body className={clsx([openSans.className, 'min-h-screen'])}>
        <Header />
        <main className="pb-40 pt-20 lg:pt-[140px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
