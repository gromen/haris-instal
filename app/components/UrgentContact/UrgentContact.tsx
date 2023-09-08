'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Contact from '@/app/components/Contact/Contact';

export default function UrgentContact() {
  return (
    <section className="md:flex container mx-auto bg-secondary text-white">
      <div className="bg-primary p-6">
        <FontAwesomeIcon icon={faEnvelope} className=" text-3xl" />
      </div>
      <div className="p-6">
        <Contact />
      </div>
    </section>
  );
}
