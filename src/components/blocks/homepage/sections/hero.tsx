import { Button, ScrollArea, ScrollBar } from '@/components/ui';
import React from 'react';
import { HiOutlineCalendarDays, HiOutlineArrowUpRight } from 'react-icons/hi2';

export const Hero = () => {
  return (
    <section className='flex flex-col w-full items-center justify-between gap-4 pt-24'>
      <div className='flex flex-col lg:flex-row w-full lg:items-center py-32 max-w-screen-2xl px-5 mx-auto'>
        <div className='lg:basis-1/2 flex flex-col gap-4'>
          <h2 className='text-[39px] sm:text-[44px] md:text-5xl lg:text-6xl text-center sm:text-start text-pretty text-primary max-w-3xl font-medium leading-[1.1] z-10'>
            Build Dynamic Web Experiences with{' '}
            <span className='text-blue-600 relative font-semibold'>
              Artseum
            </span>
          </h2>
          <h2 className='text-lg font-light text-pretty max-w-3xl text-center sm:text-start'>
            Empowering businesses to achieve their digital goals through
            impactful web experiences. Weaving innovative design with intuitive
            functionality, resulting in websites that not only captivate
            visitors but also facilitate conversion and engagement.
          </h2>
          <h2 className='text-lg text-pretty max-w-3xl font-light text-center sm:text-start'>
            Artseum equips you with the tools to succeed in the online
            landscape.
          </h2>
          <Button
            size={'lg'}
            className='border-primary rounded-full text-lg sm:text-xl font-light sm:w-fit h-14 gap-4 mt-6'>
            Schedule a consultation today!
            <HiOutlineCalendarDays className='h-6 w-6 hidden sm:block' />
          </Button>
        </div>
      </div>
      <div className='bg-foreground text-background w-screen font-light'>
        <ScrollArea aria-orientation='horizontal' className='w-full'>
          <div className='w-full max-w-screen-2xl mx-auto flex justify-between gap-12 px-5 py-8 text-2xl'>
            <p className=' flex gap-2 items-center leading-none whitespace-nowrap'>
              <span>
                <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
              </span>
              Branding
            </p>
            <p className=' flex gap-2 items-center leading-none whitespace-nowrap'>
              <span>
                <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
              </span>
              Graphic Design
            </p>
            <p className=' flex gap-2 items-center leading-none whitespace-nowrap'>
              <span>
                <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
              </span>
              Web Development
            </p>
            <p className=' flex gap-2 items-center leading-none whitespace-nowrap'>
              <span>
                <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
              </span>
              Mobile Development
            </p>
            <p className=' flex gap-2 items-center leading-none whitespace-nowrap'>
              <span>
                <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
              </span>
              Digital Marketing
            </p>
          </div>
          <ScrollBar className='opacity-0' orientation='horizontal' />
        </ScrollArea>
      </div>
    </section>
  );
};
