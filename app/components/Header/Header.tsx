import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faComments,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container mx-auto">
        <div className="header__top flex text-white">
          <div className="header__welcome bg-secondary p-6 ">
            <div>Witamy na stronie haris-instal 😼</div>
          </div>

          <div className="header__socialMedia p-6 bg-primary grow text-right">
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
        <div className="flex">
          <div>
            <Link href="/">
              <Image
                src="public/next.svg"
                alt="main logo image"
                width={200}
                height={60}
              />
            </Link>
          </div>
          <div className="bg-white">
            <address>
              <ul className="flex">
                <li className="flex">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-primary"
                    size="2x"
                  />
                  <div className="flex flex-col">
                    <div>Zadzwoń do nas</div>
                    <Link href="tel:666666666">+48 666666666</Link>
                  </div>
                </li>
                <li className="flex">
                  <FontAwesomeIcon
                    icon={faComments}
                    className="text-primary"
                    size="2x"
                  />
                  <div className="flex flex-col">
                    <div>Zadzwoń do nas</div>
                    <Link href="tel:666666666">+48 666666666</Link>
                  </div>
                </li>
                <li className="flex">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-primary"
                    size="2x"
                  />
                  <div className="flex flex-col">
                    <div>Zadzwoń do nas</div>
                    <Link href="tel:666666666">+48 666666666</Link>
                  </div>
                </li>
                <li>
                  <button
                    type="button"
                    className="p-4 bg-navy-800 text-white hover:bg-navy-100"
                  >
                    Zapytaj
                  </button>
                </li>
              </ul>
            </address>
            <nav>
              <ul className="flex">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/o-nas">O nas</Link>
                </li>
                <li>
                  <Link href="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
