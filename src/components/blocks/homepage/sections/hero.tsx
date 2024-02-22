'use client';
import { Button, ScrollArea, ScrollBar } from '@/components/ui';
import Image from 'next/image';
import React from 'react';
import { HiOutlineCalendarDays, HiOutlineArrowUpRight } from 'react-icons/hi2';
import hero from '@/assets/images/dev.jpg';
import proj from '@/assets/images/proj.jpg';
import logo_white from '@/assets/images/logo-white.jpeg';
import Marquee from '@/lib/marqee';

export const Hero = () => {
  return (
    <section className='flex flex-col w-full min-h-fit items-center justify-between gap-4 pt-24'>
      <div className='flex flex-col lg:flex-row gap-x-12 gap-y-24 w-full h-full lg:items-center py-24 max-w-screen-2xl px-5 mx-auto'>
        <div className='lg:basis-1/2 flex flex-col gap-4'>
          <h2 className='text-[39px] sm:text-[44px] md:text-6xl text-center sm:text-start text-pretty text-primary max-w-3xl font-medium leading-[1.1] z-10'>
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
          <a href='/contact' className='w-fit'>
            <Button
              size={'lg'}
              variant={'outline'}
              className='border-primary rounded-full text-lg sm:text-xl font-light sm:w-fit h-14 gap-4 mt-6'>
              Schedule a consultation today!
              <HiOutlineCalendarDays className='h-6 w-6 hidden sm:block' />
            </Button>
          </a>
        </div>
        <div className='lg:basis-1/2 flex flex-col gap-4 '>
          <div className='bg-blue-600 w-full overflow-hidden rounded-xl relative mx-auto lg:max-w-2xl h-[34rem]'>
            <Image
              src={hero}
              alt='Artseum IT Logo'
              className='h-full object-cover w-full hover:scale-125 ease-in-out duration-300'
            />
            <div className='absolute bg-background h-64 w-64 rounded-br-xl top-0 left-0 before:absolute before:[content:"_"] before:left-0 before:-bottom-12 before:h-12 before:w-12 before:rounded-tl-xl before:[box-shadow:0px_-1rem_0px_0px_hsl(var(--background))] after:absolute after:[content:"_"] after:top-0 after:-right-12 after:h-12 after:w-12 after:rounded-tl-xl after:[box-shadow:-1rem_0px_0px_0px_hsl(var(--background))] pr-4 pb-4'>
              <div className='h-full w-full bg-slate-400 rounded-xl overflow-hidden'>
                <Image
                  src={logo_white}
                  alt='Artseum IT Logo'
                  className='h-full invert dark:invert-0 w-full hover:scale-125 ease-in-out duration-300'
                />
              </div>
            </div>
            <div className='absolute bg-background h-40 w-24 ease-out duration-200 sm:h-56 sm:w-48 rounded-tl-xl right-0 bottom-0 before:absolute before:[content:"_"] before:-left-12 before:bottom-0 before:h-12 before:w-12 before:rounded-br-xl before:[box-shadow:1rem_0px_0px_0px_hsl(var(--background))] after:absolute after:[content:"_"] after:right-0 after:-top-12 after:h-12 after:w-12 after:rounded-br-xl after:[box-shadow:1rem_0px_0px_0px_hsl(var(--background))] pl-4 pt-4'>
              <div className='h-full w-full bg--400 rounded-xl hidden border'>
                <Image
                  src={proj}
                  alt='Artseum IT Logo'
                  className='h-full w-full hover:scale-125 ease-in-out duration-300 '
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-foreground text-background w-screen font-light'>
        <ScrollArea aria-orientation='horizontal' className='w-full'>
          <div className='w-full max-w-screen-2xl mx-auto flex justify-between gap-12 py-8 text-2xl'>
            <Marquee speed={60} pauseOnHover className='cursor-pointer'>
              <p className=' flex gap-2 items-center leading-none whitespace-nowrap pr-12'>
                <span>
                  <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
                </span>
                Branding
              </p>
              <p className=' flex gap-2 items-center leading-none whitespace-nowrap pr-12'>
                <span>
                  <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
                </span>
                Graphic Design
              </p>
              <p className=' flex gap-2 items-center leading-none whitespace-nowrap pr-12'>
                <span>
                  <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
                </span>
                Web Development
              </p>
              <p className=' flex gap-2 items-center leading-none whitespace-nowrap pr-12'>
                <span>
                  <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
                </span>
                Mobile Development
              </p>
              <p className=' flex gap-2 items-center leading-none whitespace-nowrap pr-12'>
                <span>
                  <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
                </span>
                Digital Marketing
              </p>
              <p className=' flex gap-2 items-center leading-none whitespace-nowrap pr-12'>
                <span>
                  <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
                </span>
                Social Media Management
              </p>
              <p className=' flex gap-2 items-center leading-none whitespace-nowrap pr-12'>
                <span>
                  <HiOutlineArrowUpRight className='h-6 w-6 mb-1' />
                </span>
                3D Design and Animation
              </p>
            </Marquee>
          </div>
          <ScrollBar className='opacity-0' orientation='horizontal' />
        </ScrollArea>
      </div>
    </section>
  );
};
