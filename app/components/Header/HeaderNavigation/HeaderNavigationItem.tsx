import Link from 'next/link';

type HeaderNavigationItemProps = {
  title: string;
  href: string;
  label: string;
  classes?: string;
};

export default function HeaderNavigationItem({
  title,
  label,
  href,
  classes,
}: HeaderNavigationItemProps) {
  return (
    <li
      className={`transition-colors hover:text-primary${
        classes ? ` ${classes}` : ''
      }`}
    >
      <Link href={href} aria-label={label}>
        {title}
      </Link>
    </li>
  );
}
