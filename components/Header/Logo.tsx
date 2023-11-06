import logo from '@/public/images/haris-instal_logo.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link className="flex items-center" href="/">
      <Image
        src={logo}
        alt="haris instal logo obrazek"
        width={300}
        height={60}
      />
    </Link>
  );
}
