import { Separator } from '@/components/ui';
import React from 'react';

export const Services = () => {
  return (
    <section id='services' className='w-full py-24 scroll-smooth'>
      <div className='flex flex-col gap-12 w-fit mx-auto p-5 items-center '>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center leading-[1.1] gap-2'>
            <p className='text-2xl text-center font-light text-muted-foreground'>
              Tailored Solutions for your Needs
            </p>
            <h3 className='text-[32px] sm:text-[44px] font-medium text-pretty text-center max-w-3xl'>
              Crafting Digital Experiences that Drive Results
            </h3>
          </div>
        </div>
        <div className='w-full flex flex-col mt-20 gap-3 lg:gap-6'>
          <div className='flex flex-col lg:flex-row items- gap-6 w-full justify-center'>
            <div className='text-3xl sm:text-4xl lg:basis-1/2 text-pretty max-w-xl '>
              Graphic Design
            </div>
            <div className='lg:basis-1/2 sm:text-lg font-light max-w-3xl lg:text-start '>
              <p className=''>
                We don&apos;t just create visuals, we tell stories. Our design
                team breathes life into your brand with captivating graphics,
                ensuring a consistent and impactful identity across every
                touchpoint.
              </p>
            </div>
          </div>
          <Separator className='my-8' />
          <div className='flex flex-col lg:flex-row items- gap-6 w-full justify-center'>
            <div className='text-3xl sm:text-4xl lg:basis-1/2 text-pretty max-w-xl '>
              Web Development
            </div>
            <div className='lg:basis-1/2 sm:text-lg font-light max-w-3xl lg:text-start '>
              <p className=''>
                Seamless functionality meets stunning design in our custom-built
                websites. We prioritize user experience and mobile-first
                development to drive traffic, conversions, and brand loyalty.
              </p>
            </div>
          </div>
          <Separator className='my-8' />
          <div className='flex flex-col lg:flex-row items- gap-6 w-full justify-center'>
            <div className='text-3xl sm:text-4xl lg:basis-1/2 text-pretty max-w-xl '>
              Mobile App Development
            </div>
            <div className='lg:basis-1/2 sm:text-lg font-light max-w-3xl lg:text-start '>
              <p className=''>
                Whether native or cross-platform, our expertise delivers
                user-friendly, feature-rich apps that engage your audience and
                drive growth. We craft future-proof solutions that adapt to your
                evolving needs.
              </p>
            </div>
          </div>
          <Separator className='my-8' />
          <div className='flex flex-col lg:flex-row items- gap-6 w-full justify-center'>
            <div className='text-3xl sm:text-4xl lg:basis-1/2 text-pretty max-w-xl '>
              Digital Marketing
            </div>
            <div className='lg:basis-1/2 sm:text-lg font-light max-w-3xl lg:text-start '>
              <p className=''>
                Reach the right audience across online channels with targeted
                campaigns and data-driven strategies. We help you boost brand
                awareness, build relationships, and achieve measurable results.
              </p>
            </div>
          </div>
          <Separator className='my-8' />
          <div className='flex flex-col lg:flex-row items- gap-6 w-full justify-center'>
            <div className='text-3xl sm:text-4xl lg:basis-1/2 text-pretty max-w-xl '>
              Social Media Management
            </div>
            <div className='lg:basis-1/2 sm:text-lg font-light max-w-3xl lg:text-start '>
              <p className=''>
                We amplify your brand voice and build meaningful connections
                with your audience through engaging content, community
                management, and strategic social media management.
              </p>
            </div>
          </div>
          <Separator className='my-8' />
          <div className='flex flex-col lg:flex-row items- gap-6 w-full justify-center'>
            <div className='text-3xl sm:text-4xl lg:basis-1/2 text-pretty max-w-xl '>
              3D Design and Animation
            </div>
            <div className='lg:basis-1/2 sm:text-lg font-light max-w-3xl lg:text-start '>
              <p className=''>
                Bring your vision to life with captivating 3D models,
                animations, and product visualizations. We showcase your
                products, explain complex concepts, and engage your audience in
                unique ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
