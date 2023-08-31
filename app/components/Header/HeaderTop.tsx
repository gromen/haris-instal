import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function HeaderTop() {
  return (
    <div className="header__top flex text-white">
      <div className="relative bg-secondary p-6 md:basis-3/12 after:block after:absolute after:-skew-x-30 after:skew-y-0 after:left-0 after:h-full after:top-0 after:origin-bottom-right after:w-full after:bg-secondary">
        <div className="z-10 relative">Witamy na stronie haris-instal 😼</div>
      </div>

      <div className="header__socialMedia p-2 md:p-6 bg-primary grow flex items-center justify-end">
        <Link href="/">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="pr-4"
            style={{ fontSize: 25, color: 'white' }}
          />
        </Link>
        <Link href="/">
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ fontSize: 25, color: 'white' }}
          />
        </Link>
      </div>
    </div>
  );
}
