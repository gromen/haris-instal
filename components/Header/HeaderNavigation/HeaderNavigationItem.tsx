import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

type HeaderNavigationItemProps = {
  title: string;
  href: string;
  label: string;
  classes?: string;
  activeSection: string;
  onClick?: () => void;
};

export default function HeaderNavigationItem({
  title,
  label,
  href,
  classes,
  activeSection,
  onClick,
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
      <Link
        href={href}
        aria-label={label}
        onClick={onClick}
        className={clsx({ 'text-primary': title === activeSection })}
      >
        {title}
      </Link>
    </motion.li>
  );
}
