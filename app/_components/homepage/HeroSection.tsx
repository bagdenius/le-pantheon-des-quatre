import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MainButton from '../reusable/MainButton';

import heroImage from '@/public/img/interior-nyx-1.jpg';

export default function HeroSection() {
  return (
    <section
      id='hero'
      className={`relative h-lvh px-25 flex flex-col justify-center items-start text-gray-light text-4xl xl:px-20 md:px-15 sm:px-10 xs:px-5`}
    >
      <Image
        src={heroImage}
        fill
        className='object-cover object-center -z-10'
        placeholder='blur'
        alt='NYX Hall interior'
        priority
      />
      <div
        className='absolute inset-0 -z-1'
        style={{
          backgroundImage: `
        linear-gradient(
          rgba(27, 38, 59, 0.5) 85%,
          rgba(27, 38, 59, 1)
        )
      `,
        }}
      />
      <h1 className='mb-[2dvw] text-[5rem] font-bold text-secondary leading-20 text-shadow-lg text-shadow-black hover:scale-102 transition-all 2xl:text-7xl xs:text-center xs:text-6xl xs:basis-1/4'>
        Where Myth and Gastronomy Unite
      </h1>
      <p className='max-w-[65%] text-justify mb-[4dvw] px-10 py-5 bg-primary-extradark/70 leading-12 text-shadow-sm text-shadow-black hover:-skew-x-14 transition-all xl:max-w-[80%] sm:max-w-full sm:px-5 sm:py-3'>
        Step into a world where divine elegance, artistic spirit, and culinary
        mastery converge. Each hall of Le Panthéon des Quatre offers a unique
        dining journey inspired by gods, goddesses, and timeless artistry.
      </p>
      <div className='flex gap-12'>
        <MainButton href='/reservation'>Reserve Table</MainButton>
        <MainButton href='/halls'>Discover Our Halls</MainButton>
      </div>
      <Link
        href='/halls#nyx'
        className='absolute bottom-5 right-10 flex flex-col items-center text-6xl text-black font-light hover:animate-pulsate xs:text-5xl'
      >
        <span>NYX</span>
        <span>HALL</span>
      </Link>
    </section>
  );
}
