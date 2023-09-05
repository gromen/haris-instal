import Image from 'next/image';

type ServiceProps = {
  title: string;
  body: string;
  imgUrl: string;
  imgAlt: string;
};

const services = [
  {
    title: 'Basement plumbing',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ipsum magnam maiores, pariatur repellendus ullam. Accusamus blanditiis dolor fugiat illo iusto laboriosam nam provident quas quisquam, sapiente suscipit voluptatum.',
    imgUrl: '/images/logo-trusted-partner-1.svg',
    imgAlt: 'obrazki',
  },
  {
    title: 'Drain plumbing',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ipsum magnam maiores, pariatur repellendus ullam. Accusamus blanditiis dolor fugiat illo iusto laboriosam nam provident quas quisquam, sapiente suscipit voluptatum.',
    imgUrl: '/images/logo-trusted-partner-1.svg',
    imgAlt: 'obrazki',
  },
  {
    title: 'Water Line repair',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ipsum magnam maiores, pariatur repellendus ullam. Accusamus blanditiis dolor fugiat illo iusto laboriosam nam provident quas quisquam, sapiente suscipit voluptatum.',
    imgUrl: '/images/logo-trusted-partner-1.svg',
    imgAlt: 'obrazki',
  },
];

function Service({ imgUrl, imgAlt, title, body }: ServiceProps) {
  return (
    <article className="mb-5 md:mb-0 bg-white p-4 pt-16 mt-16 relative hover:bg-primary hover:text-white transition-colors">
      <div className="-top-6 bg-navy-100 rounded-full absolute left-1/2 transform -translate-x-1/2 flex items-center p-4">
        <Image src={imgUrl} alt={imgAlt} width={100} height={100} />
      </div>
      <h3 className="text-2xl pb-4">{title}</h3>
      <p className="pb-4">{body}</p>
      <button
        className="bg-navy-100 hover:bg-primary text-white px-4 py-2"
        type="button"
      >
        Czytaj więcej
      </button>
    </article>
  );
}

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
