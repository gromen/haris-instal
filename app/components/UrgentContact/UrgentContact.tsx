'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Contact from '@/app/components/Contact/Contact';
import { eventBus } from '@/app/utils/event-bus';
import { useEffect, useState } from 'react';
import Alert, { AlertProps } from '@/app/components/Alert/Alert';

export default function UrgentContact() {
  const [alert, setAlert] = useState<{
    variant?: 'success' | 'error';
    message?: string;
  }>({});

  useEffect(() => {
    eventBus.on('submit', (data: AlertProps) => {
      setAlert(data);
    });
  }, []);

  return (
    <section className="container mx-auto p-4 lg:p-0">
      {alert.variant && (
        <Alert
          variant={alert.variant}
          message={alert.message}
          onClickCloseAlert={() => setAlert({})}
        />
      )}
      <div className="bg-secondary text-white md:flex">
        <div className="flex items-center bg-primary p-6">
          <FontAwesomeIcon icon={faEnvelope} className=" text-3xl" />
        </div>
        <div className="p-6">
          <Contact />
        </div>
      </div>
    </section>
  );
}
