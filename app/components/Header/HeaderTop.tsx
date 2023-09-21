import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function HeaderTop() {
  return (
    <div className="header__top hidden text-white lg:flex">
      <div className="relative bg-secondary p-6 after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:origin-bottom-right after:-skew-x-30 after:skew-y-0 after:bg-secondary md:basis-3/12">
        <div className="relative z-10">Witamy na stronie haris-instal 😼</div>
      </div>

      <div className="header__socialMedia flex grow items-center justify-end bg-primary p-2 md:p-6">
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
