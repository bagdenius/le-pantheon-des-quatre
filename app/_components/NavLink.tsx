import Link from 'next/link';
import React, { ReactNode } from 'react';

export default function NavLink({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick: () => void;
}) {
  return (
    <li className='hover:text-secondary hover:scale-115 transition-all duration-200'>
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}
