import Image from 'next/image';

type ServiceProps = {
  title: string;
  body: string;
  imgUrl: string;
  imgAlt: string;
};

export default function Service({ imgUrl, imgAlt, title, body }: ServiceProps) {
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
