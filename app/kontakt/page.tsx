'use client';

import HeadingHero from '@/app/components/Heading/HeadingHero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapLocationDot,
  faPhoneVolume,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import Header from '@/app/components/Header/Header';

export default function ContactUs() {
  return (
    <>
      <Header />
      <HeadingHero title="Kontakt" breadcrumb="Kontakt" />
      <div className="container mx-auto mt-10 p-4 lg:mt-20 lg:flex">
        <div className="grow bg-gray-500 px-5 py-10 text-center font-semibold">
          <FontAwesomeIcon
            icon={faMapLocationDot}
            className="text-4xl text-primary"
          />
          <p className="py-3 text-sm text-gray-700">Nasze biuro</p>
          <p className="font-bold">ul. Szkolna, Ostrów Mazowiecka</p>
        </div>
        <div className="grow bg-primary px-5 py-10 text-center font-semibold text-white">
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="text-4xl text-white"
          />
          <p className="py-3 text-sm">Masz pytanie?</p>
          <p className="font-bold">
            <a href="tel:+48666666666">+48-666-666-666</a>
          </p>
        </div>
        <div className="grow bg-gray-500 px-5 py-10 text-center font-semibold">
          <FontAwesomeIcon
            icon={faComments}
            className="text-4xl text-primary"
          />
          <p className="py-3 text-sm text-gray-700">Napisz do nas!</p>
          <p className="font-bold">
            <a href="mailto:kontakt@haris-instal.pl">kontakt@haris-instal.pl</a>
          </p>
        </div>
      </div>
      <iframe
        className="mx-auto my-10 max-w-full grayscale lg:my-20"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.059573611699!2d21.906539777830897!3d52.80326407213673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471fab149d253567%3A0xba23ef1f5a64a72c!2sSzkolna%2C%2007-300%20Ostr%C3%B3w%20Mazowiecka!5e0!3m2!1spl!2spl!4v1695202430673!5m2!1spl!2spl"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
