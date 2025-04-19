import React from 'react';
import Form from './Form';

const MovingAhead = () => {
  return (
    <div data-scroll data-scroll-speed='-0.05' className='px-6 md:px-20 lg:px-72 py-20'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <img src='../../src/assets/virohlogo.jpeg' className='w-16 md:w-20' alt='' />
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold font-dm tracking-tight text-navy text-center'>
          Moving Ahead Together
        </h1>
        <p className='font-inter text-navy font-medium text-center text-sm md:text-md mt-3 max-w-2xl'>
          With your support, we can continue to empower and uplift every child, fostering resilience, confidence, and self-worth.
          Join us as we build a brighter, inclusive future for all.
        </p>
      </div>

      <div className='mt-10 flex flex-col lg:flex-row gap-10'>
        <div className='w-full lg:w-1/2'>
          <img src='public/images/logowotext.png' className='w-full' alt='' />
        </div>
        <div className='w-full lg:w-1/2'>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default MovingAhead;
