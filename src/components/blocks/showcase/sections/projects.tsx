import { Separator } from '@/components/ui';
import React from 'react';

export const Projects = () => {
  return (
    <section
      id='services'
      className='w-full py-24 scroll-smooth bg-foreground skew-y-3 -mb-12 -mt-12'>
      <div className='flex flex-col pt-44 gap-12 w-full max-w-screen-2xl mx-auto p-5 items-center -skew-y-3'>
        <div className='w-full flex gap-6 justify-center flex-wrap '>
          <iframe
            src='https://leenafinance.com.au/'
            sandbox='allow-scripts'
            className='w-full aspect-[4/3] max-w-2xl rounded-xl shadow-xl '
          />
          <iframe
            src='https://gardeniaservice.com/'
            sandbox='allow-scripts'
            className='w-full aspect-[4/3] max-w-2xl rounded-xl shadow-xl '
          />
          <iframe
            src='https://pakparade.org/'
            sandbox='allow-scripts'
            className='w-full aspect-[4/3] max-w-2xl rounded-xl shadow-xl '
          />
          <iframe
            src='https://www.rulesvip.ae'
            sandbox='allow-scripts'
            className='w-full aspect-[4/3] max-w-2xl rounded-xl shadow-xl '
          />
          {/* <iframe
            src='https://www.sheinicnp.com'
            sandbox='allow-scripts'
            allow='same-origin'
            className='w-full aspect-[4/3] max-w-2xl rounded-xl shadow-xl '
          /> */}
          <iframe
            src='https://www.dreamoverseashr.ae'
            sandbox='allow-scripts'
            className='w-full aspect-[4/3] max-w-2xl rounded-xl shadow-xl '
          />
          {/* <iframe
            src='https://www.fitmama-apparel.com'
            sandbox='allow-scripts'
            className='w-full aspect-[4/3] max-w-2xl rounded-xl shadow-xl '
          /> */}
        </div>
      </div>
    </section>
  );
};
