import { ArrowTopRightIcon, PersonIcon, StarIcon, TransparencyGridIcon } from '@radix-ui/react-icons';
import React from 'react';

export const Mission = () => {
  return (
    <div className='w-full py-20'>
      <div className='flex flex-col gap-12 w-full max-w-screen-2xl mx-auto p-5 items-center '>
        <div className='basis-full 2xl:basis-1/2 flex flex-col gap-6'>
          <h3 className='text-4xl text-pretty text-center max-w-3xl'>
            Guided by Values, Driven by Purpose.
          </h3>
          <p className='text-lg text-pretty font-light text-center max-w-3xl'>
            At <span className='font-medium'>Artseum</span>, we believe that
            technology is more than just tools and solutions; it&apos;s a
            powerful force for progress and innovation. This belief fuels our{' '}
            <span className='font-medium'>core values</span>, shaping every
            interaction and decision we make.
          </p>
        </div>
        <div className='basis-full 2xl:basis-1/2 grid grid-cols-4 gap-12'>
          <div className='col-span-4 sm:col-span-2 xl:col-span-1 flex flex-col gap-3 items-center'>
            <div className='p-5 bg-border hover:bg-accent rounded-lg ease-in-out duration-300 text-muted-foreground'>
              <StarIcon className='h-6 w-6' />
            </div>
            <h3 className='text-2xl text-pretty text-center'>Excellence</h3>
            <p className=' text-pretty font-light text-center max-w-96'>
              We are a team of passionate experts, dedicated to providing
              best-in-class solutions anchored in deep technical knowledge.
            </p>
          </div>
          <div className='col-span-4 sm:col-span-2 xl:col-span-1 flex flex-col gap-3 items-center'>
            <div className='p-5 bg-border hover:bg-accent rounded-lg ease-in-out duration-300 text-muted-foreground'>
              <ArrowTopRightIcon className='h-6 w-6' />
            </div>
            <h3 className='text-2xl text-pretty text-center'>Growth</h3>
            <p className=' text-pretty font-light text-center max-w-96'>
              We provide the tools and expertise to streamline your operations,
              enhance efficiency, and unlock new avenues for expansion.
            </p>
          </div>
          <div className='col-span-4 sm:col-span-2 xl:col-span-1 flex flex-col gap-3 items-center'>
            <div className='p-5 bg-border hover:bg-accent rounded-lg ease-in-out duration-300 text-muted-foreground'>
              <PersonIcon className='h-6 w-6' />
            </div>
            <h3 className='text-2xl text-pretty text-center'>Customer First</h3>
            <p className=' text-pretty font-light text-center max-w-96'>
              We prioritize listening to and understanding our clients&apos;
              needs, building trust and lasting partnerships through
              personalized service.
            </p>
          </div>
          <div className='col-span-4 sm:col-span-2 xl:col-span-1 flex flex-col gap-3 items-center'>
            <div className='p-5 bg-border hover:bg-accent rounded-lg ease-in-out duration-300 text-muted-foreground'>
              <TransparencyGridIcon className='h-6 w-6' />
            </div>
            <h3 className='text-2xl text-pretty text-center'>Integrity</h3>
            <p className=' text-pretty font-light text-center max-w-96'>
              Honesty, transparency, and ethical conduct are the cornerstones of
              our relationships with clients, partners, and employees alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
