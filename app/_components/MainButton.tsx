import Link from 'next/link';
import React from 'react';

export default function MainButton({ href, children }) {
  return (
    <Link
      className='px-8 py-4 bg-secondary uppercase font-normal text-primary-extradark text-3xl text-shadow-md hover:brightness-120 hover:-translate-y-0.5 hover:shadow-xl active:-translate-y-0 active:shadow-none transition-all duration-100'
      href={href}
    >
      {children}
    </Link>
  );
}
