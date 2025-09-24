import { IconType } from 'react-icons';

export interface ServiceProps {
  title: string;
  body: string;
  icon: IconType;
}

export default function Service({ title, body, icon }: ServiceProps) {
  const Icon = icon;
  return (
    <article className="transition-colors group relative mb-5 mt-16 bg-white p-4 pb-10 pt-24 shadow-xl even:bg-primary even:text-white lg:pb-24">
      <div className="absolute -top-16 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-navy-100 bg-opacity-40 p-3">
        <div className="rounded-full bg-navy-800 p-6 text-6xl text-white group-even:bg-white group-even:text-primary">
          <Icon />
        </div>
      </div>
      <h3 className="pb-4 text-2xl font-semibold">{title}</h3>
      <p className="pb-4">{body}</p>
    </article>
  );
}
