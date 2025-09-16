import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Header from './_components/Header';
import Footer from './_components/Footer';

import { cormorantGaramond } from './fonts';
import '@/app/_styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Le Panthéon des Quatre',
    default: 'Le Panthéon des Quatre – French Luxury Restaurant in Paris',
  },
  description:
    'Discover Le Panthéon des Quatre, a French luxury restaurant inspired by mythology and art. Explore four divine halls — Nyx, Hera, Hygieia, and Thalia — each offering a unique atmosphere and exquisite dining experience. Reserve your table or enjoy our new delivery service, brought by Hermes.',
  keywords: [
    'luxury restaurant Paris',
    'French fine dining',
    'mythological restaurant',
    'Nyx Hall',
    'Hera Hall',
    'Hygieia Hall',
    'Thalia Hall',
    'Le Panthéon des Quatre',
    'gourmet dining',
    'artistic restaurant',
    'elegant halls',
    'Hermes delivery',
    'haute cuisine Paris',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='selection:bg-secondary selection:text-primary-extradark  focus:outline-none focus:border-none focus:ring-8 focus:ring-primary xl:text-sm lg:text-xs md:text-[0.625rem] sm:text-[0.625rem]'
    >
      <body
        className={`${cormorantGaramond.className} flex flex-col min-h-dvh max-w-dvw text-base text-primary-extradark bg-gray-light`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
