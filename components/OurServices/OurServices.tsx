import Service from '@/components/OurServices/Service';
import { services } from '@/app/constants';
import Heading from '@/components/Heading/Heading';

export default function OurServices() {
  return (
    <section className="container mx-auto bg-gray-400 p-4 lg:p-28">
      <Heading title="Sprawdź nasze usługi" subtitle="Nasze usługi" />
      <div className=" gap-5 text-center lg:flex lg:justify-around">
        {services.map((service) => (
          <Service
            key={service.title}
            title={service.title}
            body={service.body}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
