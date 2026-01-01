import Link from 'next/link';
import React, { ReactNode } from 'react';

export default function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      className='text-center px-8 py-4 mx-auto font-normal text-primary-dark underline underline-offset-15 decoration-1 text-3xl text-shadow-sm hover:bg-primary-dark hover:text-gray-light hover:no-underline hover:-translate-y-0.5 hover:shadow-xl active:-translate-y-0 active:shadow-none transition-all sm:px-4 sm:py-4'
      href={href}
    >
      {children} &rarr;
    </Link>
  );
}
