'use client';
import React, { useState } from 'react';
import NavLink from './NavLink';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [iconActive, setIconActive] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIconActive(true);
    } else {
      setIsOpen(false);
      setTimeout(() => setIconActive(false), 500);
    }
  };

  const handleClose = () => setIsOpen(false);

  return (
    <div
      className={`relative hidden w-18 h-18 justify-center items-center md:flex text-current`}
    >
      {/* navigation button */}
      <div
        className='fixed top-1 right-10 w-18 h-18 text-center z-2000 cursor-pointer sm:right-6'
        onClick={handleToggle}
      >
        {/* navigation icon */}
        <span
          className={`fixed top-1 right-10 w-18 h-18 flex flex-col justify-center items-center gap-3 sm:right-6`}
        >
          <span
            className={`w-11 h-0.25 bg-current transition-all 
              ${isOpen && 'absolute top-9 rotate-135'}
              ${iconActive && 'bg-gray-light'}`}
          />
          <span
            className={`w-11 h-0.25 bg-current transition-all 
              ${isOpen && 'opacity-0'}
              ${iconActive && 'bg-gray-light'}`}
          />
          <span
            className={`w-11 h-0.25 bg-current transition-all 
              ${isOpen && 'absolute top-9.5 -rotate-135'}
              ${iconActive && 'bg-gray-light'}`}
          />
        </span>
      </div>
      {/* navigation background */}
      <div
        onTransitionEnd={() => {
          if (!isOpen) setIconActive(false);
        }}
        className={`fixed top-1 right-10 w-18 h-18 rounded-full bg-mobile-nav backdrop-blur-2xl transition-transform scale-0 duration-700 ease-[cubic-bezier(0.86,0,0.07,1)] z-1000 ${
          isOpen && 'scale-6500'
        } sm:right-6`}
      />
      {/* navigation nav */}
      <nav
        className={`fixed top-0 right-0 w-0 h-dvh text-gray-light opacity-0 z-1500 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
          isOpen && 'w-dvw opacity-100'
        }`}
      >
        {/* navigation list */}
        <ul className='absolute w-full top-1/2 left-1/2 -translate-1/2 text-center flex flex-col gap-6 text-7xl'>
          <NavLink href='/' onClick={handleClose}>
            Home
          </NavLink>
          <NavLink href='/halls' onClick={handleClose}>
            Halls
          </NavLink>
          <NavLink href='/menu' onClick={handleClose}>
            Menu
          </NavLink>
          <NavLink href='/about' onClick={handleClose}>
            About
          </NavLink>
          <NavLink href='/order' onClick={handleClose}>
            Order
          </NavLink>
          <NavLink href='/reservation' onClick={handleClose}>
            Reservation
          </NavLink>
          <NavLink href='/account' onClick={handleClose}>
            Account
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
