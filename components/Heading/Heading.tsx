import { IconType } from 'react-icons';

type HeadingProps = {
  title: string;
  subtitle: string;
  icon?: IconType;
  iconSize?: number;
  subtitleClasses?: string;
  titleClasses?: string;
  titleId?: string;
  containerClasses?: string;
};

export default function Heading({
  subtitle,
  title,
  icon: Icon,
  iconSize = 30,
  subtitleClasses = 'flex items-center mt-5 pb-2 text-sm lg:text-lg font-semibold text-primary',
  titleClasses = 'mb-5 scroll-mt-28 pb-4 text-3xl font-semibold',
  titleId,
  containerClasses = '',
}: HeadingProps) {
  return (
    <div className={containerClasses}>
      <p className={subtitleClasses}>
        {Icon && <Icon className="pr-2" size={iconSize} />}
        {subtitle}
      </p>
      <h3 className={titleClasses} id={titleId}>
        {title}
      </h3>
    </div>
  );
}
