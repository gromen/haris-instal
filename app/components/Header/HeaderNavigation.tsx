'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/Bohus-logo.svg';
import HeaderNavigationItem from '@/app/components/Header/HeaderNavigation/HeaderNavigationItem';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function HeaderNavigation() {
  const [opened, setOpened] = useState<boolean>(false);
  const onClickHamburger = () => setOpened((prevState) => !prevState);
  const classesUl = clsx([
    'w-full h-full text-center transition-opacity text-4xl md:text-lg top-0 space-y-6 md:space-y-0 font-bold flex flex-col items-center justify-center md:w-auto md:text-left absolute md:static md:flex-row left-0 bg-white',
    { 'opacity-100 z-20': opened },
    { 'mt-0 opacity-0 -z-10': !opened },
  ]);
  const classesHamburger = clsx([
    'flex md:hidden',
    { 'absolute right-10 top-10 z-50': opened },
  ]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', opened);
    document.body.classList.toggle('md:overflow-auto', opened);
  }, [opened]);

  return (
    <nav className="flex-c text z text- flex w-full flex-wrap justify-between self-center p-4 md:self-start">
      <Link href="/" className="md:hidden">
        <Image src={logo} alt="main logo image" width={100} height={60} />
      </Link>
      <button className={classesHamburger} onClick={onClickHamburger}>
        <FontAwesomeIcon
          icon={!opened ? faBars : faXmark}
          className="text-4xl"
        />
      </button>
      <div className="w-full"></div>
      <ul className={classesUl}>
        <HeaderNavigationItem
          title={'Home'}
          href={'/'}
          label="Home page"
          classes={'md:pr-6'}
          setOpened={setOpened}
        />
        <HeaderNavigationItem
          title={'O nas'}
          href={'/o-nas'}
          label="O nas"
          classes={'md:pr-6'}
          setOpened={setOpened}
        />
        <HeaderNavigationItem
          title={'Kontakt'}
          href={'/kontakt'}
          label="Kontakt"
          setOpened={setOpened}
        />
      </ul>
    </nav>
  );
}
