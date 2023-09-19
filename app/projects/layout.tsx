import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projekt | Haris Install',
  description: 'Opis projektu',
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container mx-auto p-4">tralala {children}</main>;
}
