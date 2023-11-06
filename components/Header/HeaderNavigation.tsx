'use client';
import Link from 'next/link';
import logo from '@/public/images/haris-instal_logo.png';
import HeaderNavigationItem from '@/components/Header/HeaderNavigation/HeaderNavigationItem';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '@/app/hooks/useWindowSize';
import { navigationItems } from '@/app/constants/index';
import Image from 'next/image';

export default function HeaderNavigation() {
  const [isMobile] = useWindowSize();
  const [opened, setOpened] = useState<boolean>(false);
  const onClickHamburger = () => setOpened((prevState) => !prevState);
  const classesUl = clsx([
    'md:gap-4 w-full max-[767px]:h-screen text-center transition-opacity text-4xl md:text-lg top-0 space-y-6 md:space-y-0 font-bold flex flex-col items-center justify-center md:w-auto md:text-left absolute md:static md:flex-row left-0',
    { 'opacity-100 z-20 bg-white': opened && isMobile },
    { 'mt-0 opacity-0 -z-10': !opened && isMobile },
  ]);

  const classesHamburger = clsx([
    'flex md:hidden',
    { 'absolute right-5 top-5 z-50': opened },
  ]);
  const navItems = navigationItems.map((item) => (
    <HeaderNavigationItem
      key={item.title}
      title={item.title}
      href={item.href}
      label={item.label}
      setOpened={setOpened}
    />
  ));

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', opened);
    document.body.classList.toggle('md:overflow-auto', opened);
  }, [opened]);

  return (
    <nav className="flex w-full flex-wrap justify-between self-center p-4 md:self-start">
      <Link href="/" className="flex md:collapse md:hidden">
        <Image src={logo} alt="main logo image" width={100} height={60} />
      </Link>
      <button className={classesHamburger} onClick={onClickHamburger}>
        <FontAwesomeIcon
          icon={!opened ? faBars : faXmark}
          className="text-4xl"
        />
      </button>
      <div className="w-full"></div>
      <ul className={classesUl}>{navItems}</ul>
    </nav>
  );
}