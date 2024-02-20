import React from 'react';

export const Hero = () => {
  return (
      <section className='w-full'>
        <div className='flex flex-col pt-44 pb-28 gap-x-12 gap-y-8 w-full max-w-screen-2xl mx-auto p-5 items-center '>
          <div className='flex flex-col gap-4'>
            <p className='text-2xl text-center font-light text-muted-foreground'>
              Unveiling Excellence
            </p>
            <h3 className='text-[39px] sm:text-[44px] md:text-6xl font-semibold max-w-4xl text-center text-pretty leading-none'>
              Witnessing the Power of Digital Transformation
            </h3>
          </div>
          <div className='flex flex-col'>
            <p className='text-lg font-light max-w-5xl text-center text-pretty'>
              Immerse yourself in a world of impactful projects, crafted by the
              dedicated minds at Artseum. Explore our diverse portfolio,
              showcasing the innovative solutions we&apos;ve tailored for
              businesses across industries. Discover how we turn vision into
              reality, driving efficiency, growth, and success.
            </p>
          </div>
        </div>
      </section>
  );
};
