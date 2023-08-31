import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faComments,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/Bohus-logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="container mx-auto">
        <div className="header__top flex text-white">
          <div className="header__welcome bg-secondary p-6 md:basis-1/5">
            <div>Witamy na stronie haris-instal 😼</div>
          </div>

          <div className="header__socialMedia p-2 md:p-6 bg-primary grow  md:basis-3/5 flex items-center justify-end">
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
          <div className="hidden md:block basis-1/5">
            <Link href="/">
              <Image
                src={logo}
                alt="main logo image"
                width={200}
                height={60}
                layout="responsive"
              />
            </Link>
          </div>
          <div className="bg-white flex flex-col grow divide-y divide-gray-500">
            <address className="grow w-full hidden md:flex justify-between not-italic items-center ">
              <ul className="flex">
                <li className="flex p-4 items-center">
                  <div className="rounded-full bg-gray-400 ring-2 ring-gray-500 w-9 h-9 mr-3 flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-primary"
                      size="lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-700">Zadzwoń do nas:</div>
                    <Link href="tel:+48666666666" className="font-bold">
                      +48 666666666
                    </Link>
                  </div>
                </li>
                <li className="flex p-4 items-center">
                  <div className="rounded-full bg-gray-400 ring-2 ring-gray-500 w-9 h-9 mr-4 flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faComments}
                      className="text-primary"
                      size="lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-700">Napisz do nas:</div>
                    <Link
                      href="mailto:example@example.com"
                      className="font-bold"
                    >
                      example@example.com
                    </Link>
                  </div>
                </li>
                <li className="flex p-4 items-center">
                  <div className="rounded-full bg-gray-400 ring-2 ring-gray-500 w-9 h-9 mr-4 flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-primary"
                      size="lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-700">Lokalizacja:</div>
                    <p className="font-bold">
                      ul. Szkolna 34, Ostrów Mazowiecka
                    </p>
                  </div>
                </li>
              </ul>
              <button
                type="button"
                className="p-4 mr-4 bg-navy-800 transition-colors text-white hover:bg-navy-100 w-1/6"
              >
                Zapytaj
              </button>
            </address>
            <nav className="flex self-center md:self-start w-full p-4 justify-between">
              <Link href="/" className="md:hidden">
                <Image
                  src={logo}
                  alt="main logo image"
                  width={100}
                  height={60}
                />
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
          </div>
        </div>
      </div>
    </header>
  );
}
