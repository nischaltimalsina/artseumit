import React from 'react';
import { Button } from '@/components/ui';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export const JoinUs = () => {
  return (
    <div className='w-full bg-foreground text-background py-20'>
      <div className='flex flex-col lg:flex-row gap-x-12 gap-y-8 w-full max-w-screen-2xl mx-auto p-5 justify-center items-center'>
        <h3 className='text-[39px] sm:text-[44px] font-semibold max-w-4xl text-center text-pretty leading-none'>
          Lets Work Together
        </h3>
      </div>
      <div className='flex flex-col gap-x-12 gap-y-8 w-full max-w-screen-2xl mx-auto px-5 justify-center items-center'>
        <h3 className='text-lg sm:text-xl font-light text-pretty max-w-3xl text-center'>
          Join us on your digital transformation journey. Let Artseum be your
          trusted partner, guiding you towards a brighter, more efficient
          future.
        </h3>
        <div className=' flex flex-col items-end'>
          <div className='w-full max-w-2xl flex justify-center lg:justify-start'>
            <a href='/contact' className='w-fit'>
              <Button
                size={'lg'}
                variant='outline'
                className='border-accent bg-transparent rounded-full text-lg sm:text-xl font-light sm:w-fit h-14 gap-4 mt-6'>
                Get in Touch
                <ArrowRightIcon className='h-6 w-6' />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
