import React from 'react';

export const Hero = () => {
  return (
    <section className='w-full'>
      <div className='flex flex-col pt-44 pb-8 gap-x-12 gap-y-8 w-full max-w-screen-2xl mx-auto p-5 items-center '>
        <div className='flex flex-col gap-4'>
          <p className='text-2xl text-center font-light text-muted-foreground'>
            Let&apos;s Talk
          </p>
          <h3 className='text-[39px] sm:text-[44px] md:text-6xl font-semibold max-w-3xl text-center text-pretty leading-none'>
            Your Digital Journey Starts Here
          </h3>
        </div>
        <div className='flex flex-col'>
          <p className='text-lg font-light max-w-5xl text-center text-pretty'>
            Partner with Artseum to unlock your digital potential. Contact our
            passionate team of experts and collaborate on crafting solutions
            that empower your business. Share your vision, discuss your
            challenges, and explore how we can bridge the gap between ideas and
            impactful results.
          </p>
        </div>
      </div>
    </section>
  );
};
