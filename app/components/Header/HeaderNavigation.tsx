import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/Bohus-logo.svg';
import HeaderNavigationItem from '@/app/components/Header/HeaderNavigation/HeaderNavigationItem';

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
        <HeaderNavigationItem
          title={'Home'}
          href={'/'}
          label="Home page"
          classes={'pr-6'}
        />
        <HeaderNavigationItem
          title={'O nas'}
          href={'/o-nas'}
          label="O nas"
          classes={'pr-6'}
        />
        <HeaderNavigationItem
          title={'Kontakt'}
          href={'/kontakt'}
          label="Kontakt"
        />
      </ul>
    </nav>
  );
}
