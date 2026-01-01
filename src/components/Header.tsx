'use client';
import React, { useEffect, useState } from 'react';
import Logo from '@/src/components/Logo';
import Navigation from '@/src/components/Navigation';
import MobileNavigation from '@/src/components/MobileNavigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const updateHeroHeight = () => {
      const hero = document.querySelector<HTMLElement>('#hero');
      setHeroHeight(hero?.offsetHeight || 0);
    };

    const handleScroll = () => {
      setScrolled(heroHeight ? window.scrollY > heroHeight : true);
    };

    // initial measure
    updateHeroHeight();
    handleScroll();

    // attach listeners
    window.addEventListener('resize', updateHeroHeight);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateHeroHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroHeight]);

  return (
    <header
      className={`fixed top-0 w-full h-header flex justify-between items-center px-10 backdrop-blur-sm border-b z-100 text-2xl xs:px-6 ${
        scrolled
          ? 'bg-gray-light/70'
          : 'bg-primary-extradark/75 text-gray-light border-primary-extradark'
      }`}
    >
      <Logo />
      <Navigation />
      <MobileNavigation />
    </header>
  );
}
