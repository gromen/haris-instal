'use client';
import { useParams, usePathname } from 'next/navigation';

export default function Page() {
  const querystr = usePathname();
  return <article>project1</article>;
}
