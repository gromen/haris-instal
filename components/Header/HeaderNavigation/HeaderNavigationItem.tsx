import { motion } from 'framer-motion';
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
    <motion.li
      className={`transition hover:text-primary${classes ? ` ${classes}` : ''}`}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Link href={href} aria-label={label} onClick={() => setOpened(false)}>
        {title}
      </Link>
    </motion.li>
  );
}
