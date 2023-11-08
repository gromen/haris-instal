import Service from '@/components/OurServices/Service';
import { services } from '@/app/constants';
import Heading from '@/components/Heading/Heading';
import { motion } from 'framer-motion';

export default function OurServices() {
  return (
    <section
      id="services"
      className="container mx-auto bg-gray-400 p-4 lg:p-28"
    >
      <Heading title="Sprawdź nasze usługi" subtitle="Nasze usługi" />
      <motion.div
        className=" gap-5 text-center lg:flex lg:justify-around"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {services.map((service) => (
          <Service
            key={service.title}
            title={service.title}
            body={service.body}
            icon={service.icon}
          />
        ))}
      </motion.div>
    </section>
  );
}
