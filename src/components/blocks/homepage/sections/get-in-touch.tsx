import { Button } from '@/components/ui';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';

export const GetInTouch = () => {
  return (
    <div className='w-full py-20 bg-border'>
      <div className='flex flex-col lg:flex-row gap-x-12 gap-y-8 w-full max-w-screen-2xl mx-auto p-5 items-center lg:items-start'>
        <div className='lg:basis-1/2'>
          <h3 className='text-4xl text-pretty max-w-xl text-center lg:text-start'>
            Elevate Your Digital Presence with Artseum&apos;s Dynamic Web
            Experiences.
          </h3>
        </div>
        <div className='lg:basis-1/2 flex flex-col items-end'>
          <p className='text-lg font-light max-w-2xl text-center lg:text-start'>
            Crafted by a passionate team of developers and designers, Artseum
            specializes in creating visually stunning and functionally seamless
            websites that engage audiences and drive results.
          </p>
          <div className='w-full max-w-2xl flex justify-center lg:justify-start'>
            <Button
              size={'lg'}
              variant='outline'
              className='border-primary bg-transparent rounded-full text-lg sm:text-xl font-light sm:w-fit h-14 gap-4 mt-6'>
              Get in Touch
              <ArrowRightIcon className='h-6 w-6' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
