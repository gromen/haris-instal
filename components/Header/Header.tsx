'use client';
// import HeaderTop from '@/components/Header/HeaderTop';
import HeaderNavigation from '@/components/Header/HeaderNavigation';
import HeaderContactInfo from '@/components/Header/HeaderContactInfo';
import Logo from '@/components/Header/Logo';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={clsx([
        { 'fixed bg-opacity-80': isHeaderFixed },
        'z-[999] w-full bg-white',
      ])}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto">
        {/* <HeaderTop /> */}
        <div className="flex">
          <div className="hidden basis-3/12 md:flex md:justify-start">
            <Logo />
          </div>
          <div className="divide-gray-50 flex grow flex-col divide-y">
            <HeaderContactInfo />
            <HeaderNavigation />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
