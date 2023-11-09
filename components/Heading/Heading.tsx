import { FaScrewdriverWrench } from 'react-icons/fa6';

type HeadingProps = {
  title: string;
  subtitle: string;
};

export default function Heading({ subtitle, title }: HeadingProps) {
  return (
    <>
      <p className="mt-5 pb-2 text-sm font-semibold text-primary">
        <FaScrewdriverWrench className="pr-2" />
        {subtitle}
      </p>
      <h3
        className="mb-5 scroll-mt-28 pb-4 text-3xl font-semibold "
        id="services"
      >
        {title}
      </h3>
    </>
  );
}
