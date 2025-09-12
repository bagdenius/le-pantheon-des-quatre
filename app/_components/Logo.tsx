import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link
      href='/'
      className='flex items-center text-nowrap gap-2 text-4xl font-normal tracking-tight hover:text-secondary hover:brightness-110 hover:scale-y-115 transition-all'
    >
      <span>
        <span className='xs:hidden'>&#x2015;</span>{' '}
        <span className='italic'>Le</span> PANTHÉON{' '}
        <span className='italic'>des</span> QUATRE{' '}
        <span className='xs:hidden'>&#x2015;</span>
      </span>
    </Link>
  );
}
