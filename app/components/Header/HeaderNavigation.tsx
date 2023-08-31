import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/Bohus-logo.svg';

export default function HeaderNavigation() {
  return (
    <nav className="flex self-center md:self-start w-full p-4 justify-between">
      <Link href="/" className="md:hidden">
        <Image src={logo} alt="main logo image" width={100} height={60} />
      </Link>
      <div className="flex md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul className="hidden md:flex font-medium text-lg">
        <li className="pr-6 transition-colors hover:text-primary">
          <Link href="/" aria-label="Home Page">
            Home
          </Link>
        </li>
        <li className="pr-6 transition-colors hover:text-primary">
          <Link href="/o-nas" aria-label="About us page">
            O nas
          </Link>
        </li>
        <li className="transition-colors hover:text-primary">
          <Link href="/kontakt" aria-label="Contact page">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
