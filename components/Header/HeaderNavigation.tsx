'use client';
import Link from 'next/link';
import logo from '@/public/images/haris-instal_logo.png';
import HeaderNavigationItem from '@/components/Header/HeaderNavigation/HeaderNavigationItem';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import useWindowSize from '@/app/hooks/useWindowSize';
import { navigationItems } from '@/app/constants/index';
import Image from 'next/image';
import { FaBars, FaXmark } from 'react-icons/fa6';

export default function HeaderNavigation() {
  const [isMobile] = useWindowSize();
  const [opened, setOpened] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState('');

  const onClickLink = (title: string) => {
    setActiveSection(title);
    setOpened(false);
  };

  const onClickHamburger = () => setOpened((prevState) => !prevState);
  const classesUl = clsx(
    'lg:gap-6 w-full max-[1023px]:h-screen text-center text-4xl lg:text-lg top-0 space-y-6 lg:space-y-0 font-bold lg:flex  lg:w-auto lg:text-left absolute lg:static lg:flex-row left-0',
    {
      'bg-white flex flex-col items-center justify-center bg-opacity-90':
        opened && isMobile,
    },
    { 'mt-0 hidden': !opened && isMobile }
  );
  const classesHamburger = clsx('flex lg:hidden', {
    'absolute right-5 top-5 z-50': opened,
  });
  const navItems = navigationItems.map((item) => (
    <HeaderNavigationItem
      key={item.title}
      title={item.title}
      href={item.href}
      label={item.label}
      onClick={() => onClickLink(item.title)}
      activeSection={activeSection}
    />
  ));

  useEffect(() => {
    const classList = document.body.classList;

    classList.toggle('overflow-hidden', opened);
    classList.toggle('md:overflow-auto', opened);
  }, [opened]);

  return (
    <nav className="flex w-full flex-wrap justify-between self-center p-4 md:self-start">
      <Link href="/" className="flex lg:collapse lg:hidden">
        <Image src={logo} alt="main logo image" width={100} height={60} />
      </Link>
      <button className={classesHamburger} onClick={onClickHamburger}>
        {!opened ? (
          <FaBars className="text-4xl" />
        ) : (
          <FaXmark className="text-4xl" />
        )}
      </button>
      <div className="w-full"></div>
      <ul className={classesUl}>{navItems}</ul>
    </nav>
  );
}
