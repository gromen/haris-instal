import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

type HeadingProps = {
  title: string;
  subtitle: string;
};

export default function Heading({ subtitle, title }: HeadingProps) {
  return (
    <>
      <p className="mt-5 pb-2 text-sm font-semibold text-primary">
        <FontAwesomeIcon className="pr-2" icon={faScrewdriverWrench} />
        {subtitle}
      </p>
      <h3 className="mb-5 pb-4 text-3xl font-semibold">{title}</h3>
    </>
  );
}
