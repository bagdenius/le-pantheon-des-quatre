import React from 'react';
import MainButton from './MainButton';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className={`relative h-hero px-25 py-40 flex flex-col bg-hero bg-cover bg-center text-gray-light text-4xl`}
    >
      <h1 className='max-w-[85%] mb-[2dvw] text-[5.5rem] font-bold text-secondary leading-20 text-shadow-lg text-shadow-black hover:scale-103 transition-all'>
        Where Myth and Gastronomy Unite
      </h1>
      <p className='max-w-[65%] text-justify mb-[4dvw] px-10 py-5 bg-primary-extradark/70 leading-12 text-shadow-sm text-shadow-black hover:-skew-x-14 transition-all'>
        Step into a world where divine elegance, artistic spirit, and culinary
        mastery converge. Each hall of Le Panthéon des Quatre offers a unique
        dining journey inspired by gods, goddesses, and timeless artistry.
      </p>
      <div className='flex gap-12'>
        <MainButton href='#'>Reserve Table</MainButton>
        <MainButton href='#'>Discover Our Halls</MainButton>
      </div>
      <Link
        href='/halls#nyx'
        className='absolute bottom-5 right-10 flex flex-col items-center text-6xl text-black font-light hover:animate-pulsate'
      >
        <span>NYX</span>
        <span>HALL</span>
      </Link>
    </section>
  );
}
