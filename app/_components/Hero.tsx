import React from 'react';
import MainButton from './MainButton';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id='hero'
      className={`relative h-hero px-25 flex flex-col justify-center items-start bg-hero bg-cover bg-center text-gray-light text-4xl xl:px-20 md:px-15 sm:px-10 xs:px-5`}
    >
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
