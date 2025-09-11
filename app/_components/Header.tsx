import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='fixed w-full h-header flex justify-between gap-20 items-center px-10 bg-primary-extradark text-gray-light text-2xl z-2'>
      <Logo />
      <Navigation />
    </header>
  );
}
