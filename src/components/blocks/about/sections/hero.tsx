import React from 'react';

export const Hero = () => {
  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col pt-44 pb-20 gap-x-12 gap-y-8 w-full max-w-screen-2xl mx-auto p-5 items-center '>
          <div className='flex flex-col gap-4'>
            <h3 className='text-[39px] sm:text-[44px] md:text-6xl font-semibold max-w-4xl text-center text-pretty leading-none'>
              <span className='text-blue-600 relative font-semibold'>
                Artseum
              </span>
              : Born from Passion, Fueled by Innovation
            </h3>
            <p className='text-2xl text-center font-light text-muted-foreground'>
              Your Trusted IT Solution Provider in all of UAE
            </p>
          </div>
          <div className='flex flex-col'>
            <p className='text-lg font-light max-w-4xl text-center text-pretty'>
              It all began in 2021, with a spark of passion and a vision to
              provide exceptional IT solutions in Dubai. Our first project,
              though challenging and yielding minimal profit, became the
              cornerstone of our commitment to excellence. We learned, we
              evolved, and we built upon that foundation, transforming Artseum
              into the trusted IT partner you see today.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
