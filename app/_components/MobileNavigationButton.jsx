'use client';
import React, { useRef } from 'react';
import NavLink from './NavLink';
import Link from 'next/link';

export default function MobileNavigation() {
  const checkboxRef = useRef(null);

  const handleClose = () => {
    if (checkboxRef.current) checkboxRef.current.checked = false;
  };

  return (
    // navigation
    <div className='relative hidden w-18 h-18 justify-center items-center md:flex'>
      {/* navigation checkbox */}
      <input
        id='navigation-toggle'
        type='checkbox'
        className='hidden peer'
        ref={checkboxRef}
      ></input>
      {/* navigation button */}
      <label
        htmlFor='navigation-toggle'
        className='fixed top-1 right-6 w-18 h-18 text-center z-2000 cursor-pointer hover:scale-y-120 transition-all'
      >
        {/* navigation icon */}
        <span
          className={`absolute top-1/2 left-1/2 -translate-1/2 w-12 h-0.5 bg-current 
            before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:w-12 before:h-0.5 before:bg-inherit before:-translate-y-4
            after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:w-12 after:h-0.5 after:bg-inherit after:translate-y-3.25`}
        >
          &nbsp;
        </span>
      </label>
      {/* navigation background */}
      <div className='fixed top-1 right-6 w-18 h-18 rounded-full bg-mobile-nav transition-transform duration-700 ease-[cubic-bezier(0.86,0,0.07,1)] z-1000 peer-checked:scale-6500'>
        &nbsp;
      </div>
      {/* navigation nav */}
      <nav className='fixed top-0 right-0 w-0 h-dvh opacity-0 z-1500 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] peer-checked:w-dvw peer-checked:opacity-100'>
        <ul className='absolute w-dvw h-dvh flex flex-col justify-center gap-10 text-center font-light text-7xl'>
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
          <NavLink href='/account' onClick={handleClose}>
            Account
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
