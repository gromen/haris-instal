'use client';
import ContactForm from '@/components/ContactUs/ContactForm';
import { eventBus } from '@/app/utils/eventBus';
import { useEffect, useRef, useState } from 'react';
import Alert, { AlertProps } from '@/components/Alert/Alert';
import { FaEnvelope } from 'react-icons/fa6';

interface AlertComponent {
  scrollToView: () => void;
}

export default function UrgentContact() {
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
    <section className="container mx-auto p-4 lg:p-0">
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
          <FaEnvelope className=" text-3xl" />
        </div>
        <div className="p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
