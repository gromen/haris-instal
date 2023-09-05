import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath } from '@fortawesome/free-solid-svg-icons';

type ServiceProps = {
  title: string;
  body: string;
};

export default function Service({ title, body }: ServiceProps) {
  return (
    <article className="transition-colors group relative mb-24 mt-16 bg-white p-4 pb-10 pt-24 shadow-xl even:bg-primary even:text-white lg:mb-5">
      <div className="absolute -top-16 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-navy-100 bg-opacity-40 p-3">
        <FontAwesomeIcon
          icon={faBath}
          className="rounded-full bg-navy-800 p-6 text-6xl text-white group-even:bg-white group-even:text-primary"
        />
      </div>
      <h3 className="pb-4 text-2xl font-semibold">{title}</h3>
      <p className="pb-4">{body}</p>
      {/*<button*/}
      {/*  className="bg-navy-100 px-4 py-2 text-white hover:bg-primary group-even:bg-white group-even:text-primary"*/}
      {/*  type="button"*/}
      {/*>*/}
      {/*  Czytaj więcej*/}
      {/*</button>*/}
    </article>
  );
}
