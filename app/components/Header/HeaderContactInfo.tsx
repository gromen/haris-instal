import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function HeaderContactInfo() {
  return (
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
            <Link href="mailto:example@example.com" className="font-bold">
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
            <p className="font-bold">ul. Szkolna 34, Ostrów Mazowiecka</p>
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
  );
}
