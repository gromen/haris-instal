import Service from '@/app/components/OurServices/Service';
import { services } from '@/app/constants';

export default function OurServices() {
  return (
    <section className="container mx-auto bg-gray-400 p-4 md:p-28">
      <p>Our services</p>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">Sprawdź nasze usługi</h3>
        <button
          type="button"
          className="bg-primary text-white hover:bg-navy-100 p-3"
        >
          Explore all services
        </button>
      </div>
      <div className=" md:flex md:justify-around text-center gap-5">
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
