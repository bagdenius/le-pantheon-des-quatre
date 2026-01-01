import React from 'react';
import NavLink from './NavLink';

export default function Navigation() {
  return (
    <nav>
      <ul className='flex items-center gap-6 md:hidden'>
        <NavLink href='/halls'>Halls</NavLink>
        <NavLink href='/menu'>Menu</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/order'>Order</NavLink>
        <NavLink href='/account'>Account</NavLink>
      </ul>
    </nav>
  );
}
