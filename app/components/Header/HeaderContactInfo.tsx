'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function HeaderContactInfo() {
  const onClickButton = () => {
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <address className="hidden w-full grow items-center justify-between not-italic md:flex ">
      <ul className="flex">
        <li className="flex items-center p-4">
          <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-400 ring-2 ring-gray-500">
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
        <li className="flex items-center p-4">
          <div className="mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-400 ring-2 ring-gray-500">
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
        <li className="flex items-center p-4">
          <div className="mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-400 ring-2 ring-gray-500">
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
        className="transition-colors mr-4 w-1/6 bg-navy-800 p-4 text-white hover:bg-navy-100"
        onClick={onClickButton}
      >
        Zapytaj
      </button>
    </address>
  );
}
