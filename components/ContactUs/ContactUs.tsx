'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ContactForm from '@/components/ContactUs/ContactForm';
import { eventBus } from '@/app/utils/eventBus';
import { useEffect, useRef, useState } from 'react';
import Alert, { AlertProps } from '@/components/Alert/Alert';
import {
  faComments,
  faMapLocationDot,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import HeadingHero from '../Heading/HeadingHero';

interface AlertComponent {
  scrollToView: () => void;
}

export default function ContactUs() {
  const [alert, setAlert] = useState<{
    variant?: 'success' | 'error';
    message?: string;
  }>({});
  const alertRef = useRef<AlertComponent | null>(null);

  useEffect(() => {
    const displayAlert = (data: AlertProps) => {
      setAlert(data);
      requestAnimationFrame(() => {
        if (alertRef.current) {
          alertRef.current.scrollToView();
        }
      });
    };

    eventBus.on('submit', displayAlert);

    return () => {
      eventBus.off('submit', displayAlert);
    };
  }, []);

  return (
    <>
      <HeadingHero id="contact">Kontakt</HeadingHero>
      <section className="container mx-auto p-4 lg:p-0">
        <div className="flex flex-col lg:hidden">
          <div className="flex-1 bg-gray-500 px-5 py-10 text-center font-semibold">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="text-4xl text-primary"
            />
            <p className="py-3 text-sm text-gray-700">Nasze biuro</p>
            <p className="font-bold">ul. Szkolna 17, Ostrów Mazowiecka</p>
          </div>
          <div className="flex-1 bg-primary px-5 py-10 text-center font-semibold text-white">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="text-4xl text-white"
            />
            <p className="py-3 text-sm">Masz pytanie?</p>
            <p className="font-bold">
              <a href="tel:+48791334999">+48 791 334 999</a>
            </p>
          </div>
          <div className="flex-1 bg-gray-500 px-5 py-10 text-center font-semibold">
            <FontAwesomeIcon
              icon={faComments}
              className="text-4xl text-primary"
            />
            <p className="py-3 text-sm text-gray-700">Napisz do nas!</p>
            <p className="font-bold">
              <a href="mailto:kontakt@haris-instal.pl">haris.instal@onet.pl</a>
            </p>
          </div>
        </div>
        {alert.variant && (
          <Alert
            variant={alert.variant}
            message={alert.message}
            onClickCloseAlert={() => setAlert({})}
            ref={alertRef}
          />
        )}
        <div className="bg-secondary text-white md:flex">
          <div className="flex items-center bg-primary p-6">
            <FontAwesomeIcon icon={faEnvelope} className=" text-3xl" />
          </div>
          <div className="p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
