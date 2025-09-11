import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link
      href='/'
      className='flex items-center text-nowrap gap-2 text-4xl font-normal tracking-tight hover:text-secondary hover:brightness-110 hover:scale-y-115 transition-all text'
    >
      <span>
        &#x2015; <span className='italic'>Le</span> PANTHÉON{' '}
        <span className='italic'>des</span> QUATRE &#x2015;
      </span>
    </Link>
  );
}
