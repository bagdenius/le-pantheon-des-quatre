import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='fixed w-full flex justify-between gap-20 items-center px-10 h-18 bg-primary-dark text-gray-light text-2xl border-b-1 border-gray-light'>
      <Logo />
      <Navigation />
    </header>
  );
}
