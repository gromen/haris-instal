import Service from '@/app/components/OurServices/Service';
import { services } from '@/app/constants';

export default function OurServices() {
  return (
    <section className="container mx-auto bg-gray-400 p-4 lg:p-28">
      <p>Our services</p>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">Sprawdź nasze usługi</h3>
        <button
          type="button"
          className="bg-primary p-3 text-white hover:bg-navy-100"
        >
          Explore all services
        </button>
      </div>
      <div className=" gap-5 text-center md:flex md:justify-around">
        {services.map((service) => (
          <Service
            key={service.title}
            title={service.title}
            body={service.body}
            imgUrl={service.imgUrl}
            imgAlt={service.imgAlt}
          />
        ))}
      </div>
    </section>
  );
}
