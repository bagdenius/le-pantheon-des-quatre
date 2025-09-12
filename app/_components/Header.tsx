import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  return (
    <header className='sticky top-0 w-full h-header flex justify-between items-center px-10 bg-primary-dark text-gray-light text-2xl z-2 xs:px-6'>
      <Logo />
      <Navigation />
      <MobileNavigation />
    </header>
  );
}
