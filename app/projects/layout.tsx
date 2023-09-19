import { Metadata } from 'next';
import './../globals.css';

export const metadata: Metadata = {
  title: 'Projekt| Haris Install',
  description: 'Opis projektu',
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
