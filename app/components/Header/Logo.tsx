import logo from '@/public/images/haris-instal_logo.png';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

export default function Logo() {
  return (
    <Link className="flex items-center" href="/">
      <ExportedImage
        src={logo}
        alt="haris instal logo obrazek"
        width={300}
        height={60}
      />
    </Link>
  );
}
