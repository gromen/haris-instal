import Image from 'next/image';
import logo from '@/public/Bohus-logo.svg';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link className="flex" href="/">
      <Image src={logo} alt="main logo image" width={200} height={60} />
    </Link>
  );
}
