import Image from 'next/image';

type ServiceProps = {
  title: string;
  body: string;
  imgUrl: string;
  imgAlt: string;
};

export default function Service({ imgUrl, imgAlt, title, body }: ServiceProps) {
  return (
    <article className="relative mb-5 mt-16 bg-white p-4 pt-16 transition-colors hover:bg-primary hover:text-white md:mb-0">
      <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-navy-100 p-4">
        <Image src={imgUrl} alt={imgAlt} width={100} height={100} />
      </div>
      <h3 className="pb-4 text-2xl">{title}</h3>
      <p className="pb-4">{body}</p>
      <button
        className="bg-navy-100 px-4 py-2 text-white hover:bg-primary"
        type="button"
      >
        Czytaj więcej
      </button>
    </article>
  );
}
