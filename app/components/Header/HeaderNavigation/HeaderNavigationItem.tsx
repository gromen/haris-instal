import Link from 'next/link';

type HeaderNavigationItemProps = {
  title: string;
  href: string;
  label: string;
  classes?: string;
  setOpened: (param: boolean) => void;
};

export default function HeaderNavigationItem({
  title,
  label,
  href,
  classes,
  setOpened,
}: HeaderNavigationItemProps) {
  return (
    <li
      className={`transition-colors hover:text-primary${
        classes ? ` ${classes}` : ''
      }`}
    >
      <Link href={href} aria-label={label} onClick={() => setOpened(false)}>
        {title}
      </Link>
    </li>
  );
}
