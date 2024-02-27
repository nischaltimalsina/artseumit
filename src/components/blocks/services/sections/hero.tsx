"use client"
import { ScrollArea, ScrollBar } from '@/components/ui';
import Marquee from '@/lib/marqee';
import React from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

export const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col pt-44 pb-28 gap-x-12 gap-y-8 w-full max-w-screen-2xl mx-auto p-5 items-center ">
        <div className="flex flex-col gap-4">
          <p className="text-2xl text-center font-light text-muted-foreground">
            
            Tailored Solutions for your Needs
          </p>
          <h3 className="text-[39px] sm:text-[44px] md:text-6xl font-semibold max-w-4xl text-center text-pretty leading-none">
            
            Crafting Digital Experiences that Drive Results
          </h3>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-light max-w-5xl text-center text-pretty">
            At Artseum, we offer a comprehensive suite of IT solutions designed
            to elevate your digital presence and propel your business forward.
            From crafting captivating websites and user-friendly mobile apps to
            building impactful digital marketing campaigns and managing your
            social media presence, we have the expertise and passion to
            transform your digital landscape. Discover how our diverse services
            can unlock your full potential and fuel your digital journey.
          </p>
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
