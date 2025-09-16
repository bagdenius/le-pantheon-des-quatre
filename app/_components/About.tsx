import Image from 'next/image';
import React from 'react';
import detailsImg1 from '@/public/img/details-3.jpg';
import detailsImg2 from '@/public/img/details-1.jpg';
import detailsImg3 from '@/public/img/details-2.jpg';
import detailsImg4 from '@/public/img/details-4.jpg';
import exteriorImg1 from '@/public/img/exterior-2.png';
import exteriorImg2 from '@/public/img/exterior-3.jpg';
import SecondaryButton from './SecondaryButton';

export default function About() {
  return (
    <section className='snap-start px-10 py-20 bg-gray-light text-primary-dark text-lg'>
      <h2 className='text-center text-6xl mb-2'>A Temple of Gastronomy</h2>
      <h4 className='text-center italic mb-15'>
        “Where the gods would dine, if Olympus were in Paris”
      </h4>
      <p className='w-3/5 mb-15 text-xl'>
        Step into Le Panthéon des Quatre, where mythology meets haute cuisine.
        Inspired by the gods and muses, our restaurant is more than a dining
        space—it is an artistic sanctuary where every hall tells a story, and
        every dish becomes part of a legend.
      </p>
      <div className='grid grid-cols-4 grid-rows-3 h-[42rem] gap-4 mb-15'>
        <figure className='flex-1 relative transition-transform    hover:scale-110 hover:outline-8 hover:z-10 hover:shadow-xl'>
          <Image
            className='block size-full object-cover '
            src={exteriorImg1}
            alt='exterior 1'
          />
        </figure>
        <figure className='flex-1 relative row-span-3 transition-transform    hover:scale-110 hover:outline-8 hover:z-10 hover:shadow-xl'>
          <Image
            className='block size-full object-cover'
            src={detailsImg1}
            alt='details 1'
          />
        </figure>
        <figure className='flex-1 relative row-span-3 transition-transform    hover:scale-110 hover:outline-8 hover:z-10 hover:shadow-xl'>
          <Image
            className='block size-full object-cover'
            src={detailsImg2}
            alt='details 2'
          />
        </figure>
        <figure className='flex-1 relative row-span-3 transition-transform    hover:scale-110 hover:outline-8 hover:z-10 hover:shadow-xl'>
          <Image
            className='block size-full object-cover'
            src={detailsImg3}
            alt='details 3'
          />
        </figure>
        <figure className='flex-1 relative transition-transform    hover:scale-110 hover:outline-8 hover:z-10 hover:shadow-xl'>
          <Image
            className='block size-full object-cover'
            src={detailsImg4}
            alt='details 4'
          />
        </figure>
        <figure className='flex-1 relative transition-transform    hover:scale-110 hover:outline-8 hover:z-10 hover:shadow-xl'>
          <Image
            className='block size-full object-cover'
            src={exteriorImg2}
            alt='exterior 2'
          />
        </figure>
      </div>
      <div className='grid grid-cols-2 px-50 gap-x-50'>
        <h3 className='text-center text-4xl mb-4'>
          A French Soul with a Mythical Touch
        </h3>
        <h3 className='text-center text-4xl mb-4'>
          A New Chapter – Delivery by Hermes
        </h3>
        <p className='mb-6 text-justify self-center'>
          Our chefs blend traditional French techniques with modern creativity,
          curating a menu that is both refined and daring. Just as the gods
          shaped destinies, we craft experiences—through seasonal ingredients,
          inspired pairings, and elegant presentation.
        </p>
        <p className='mb-6 text-justify self-center'>
          The divine experience is no longer confined to our halls. With the
          swiftness of Hermes, Le Panthéon des Quatre now offers
          delivery—bringing elegance and artistry directly to your home.
        </p>
        <SecondaryButton href='/menu'>View our menu</SecondaryButton>
        <SecondaryButton href='/order'>Try our new delivery</SecondaryButton>
      </div>
    </section>
  );
}
