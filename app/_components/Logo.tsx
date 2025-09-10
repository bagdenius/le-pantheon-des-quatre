import Link from 'next/link';
import React from 'react';
import NotteStellataLogo from '@/app/icon.svg';

export default function Logo() {
  return (
    <Link
      href='/'
      className='flex items-center text-nowrap gap-2 text-4xl font-normal uppercase tracking-tight hover:text-secondary hover:brightness-110 hover:scale-y-115 transition-all'
    >
      {/* <NotteStellataLogo className='size-8 fill-current stroke-current' /> */}
      <span>
        {/* <span className='text-6xl leading-0 text-secondary'>&#10086;</span> */}
        &#x2015; Notte Stellata &#x2015;
      </span>
    </Link>
  );
}
