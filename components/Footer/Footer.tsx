import Link from 'next/link';
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaScrewdriverWrench,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-secondary text-gray-500 lg:mt-20">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="mx-auto flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* Logo i opis firmy */}
          <div className="lg:w-1/3">
            <div className="mb-6 flex items-center">
              <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-10">
                <FaScrewdriverWrench className="text-2xl text-primary" />
              </div>
              <h3 className="text-gray-800 text-xl font-bold">Haris Instal</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Profesjonalne usługi hydrauliczne i budowlane. Zapewniamy
              kompleksowe rozwiązania dla domów i budynków komercyjnych z
              wieloletnim doświadczeniem.
            </p>
          </div>

          {/* Kontakt i Usługi - przy prawej krawędzi */}
          <div className="flex flex-col gap-8 md:flex-row lg:w-2/3 lg:justify-end">
            {/* Kontakt */}
            <div className="lg:w-1/2">
              <h4 className="text-gray-800 relative mb-6 text-lg font-semibold">
                Kontakt
                <div className="mt-2 h-1 w-12 rounded-full bg-primary"></div>
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-50 hover:bg-gray-100 transition-colors flex items-center gap-3 rounded-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary bg-opacity-10">
                    <FaPhone className="text-primary" size="14" />
                  </div>
                  <Link
                    href="tel:+48791334999"
                    className="transition-colors text-sm font-medium hover:text-primary"
                  >
                    +48 791334999
                  </Link>
                </div>
                <div className="bg-gray-50 hover:bg-gray-100 transition-colors flex items-center gap-3 rounded-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary bg-opacity-10">
                    <FaEnvelope className="text-primary" size="14" />
                  </div>
                  <Link
                    href="mailto:haris.instal@onet.pl"
                    className="transition-colors text-sm font-medium hover:text-primary"
                  >
                    haris.instal@onet.pl
                  </Link>
                </div>
                <div className="bg-gray-50 hover:bg-gray-100 transition-colors flex items-start gap-3 rounded-lg">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary bg-opacity-10">
                    <FaLocationDot className="text-primary" size="14" />
                  </div>
                  <p className="text-sm font-medium">
                    ul. Szkolna 17
                    <br />
                    07-300 Ostrów Mazowiecka
                  </p>
                </div>
              </div>
            </div>

            {/* Usługi */}
            <div>
              <h4 className="text-gray-800 relative mb-6 text-lg font-semibold">
                Nasze usługi
                <div className="mt-2 h-1 w-12 rounded-full bg-primary"></div>
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                  Instalacje wodno-kanalizacyjne
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                  Instalacje cieplne i klimatyzacyjne
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                  Roboty budowlane
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                  Przygotowanie terenu pod budowę
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                  Tynkowanie i wykończenia
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                  Badania naukowe i prace rozwojowe
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dolna linia */}
        <div className="mt-8 border-t border-gray-300 pt-6">
          <div className="text-gray-600 flex flex-col items-center justify-between text-sm md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Haris Instal. Wszystkie prawa
              zastrzeżone.
            </p>
            <div className="mt-2 md:mt-0">
              <Link
                href="#services"
                className="transition-colors mr-4 hover:text-primary"
              >
                Usługi
              </Link>
              <Link
                href="#contact"
                className="transition-colors mr-4 hover:text-primary"
              >
                Kontakt
              </Link>
              <Link
                href="#faq"
                className="transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
