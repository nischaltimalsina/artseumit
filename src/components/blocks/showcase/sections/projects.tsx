import Image from 'next/image';
import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui';
import leena from '@/assets/images/showcase/leenafinance.jpg';
import hnm from '@/assets/images/showcase/hnmae.jpg';
import fitmama from '@/assets/images/showcase/fitmama.jpg';
import dreamover from '@/assets/images/showcase/dreamoverseas.jpg';
import gardenia from '@/assets/images/showcase/gardenia.jpg';
import pakparade from '@/assets/images/showcase/pakparade.jpg';
import sheinic from '@/assets/images/showcase/sheinic.jpg';
import rulesvip from '@/assets/images/showcase/rulesvip.jpg';

export const Projects = () => {
  return (
    <section id='services' className='w-full pb-24 scroll-smooth'>
      <div className='w-full flex justify-center pb-12'>
        <h3 className='text-4xl text-pretty text-center max-w-3xl'>
          Take a look at our Recent Projects
        </h3>
      </div>
      <div className='flex gap-12 w-full max-w-screen-2xl mx-auto p-5 flex-wrap justify-center lg:flex-nowrap'>
        <div className='w-full flex flex-col gap-12 max-w-2xl items-center lg:mt-24'>
          <ScrollArea className='aspect-square w-full rounded-lg shadow-xl border'>
            <a
              href='https://leenafinance.com.au/'
              target='_blank'
              className='h-fit w-full '>
              <Image
                unoptimized
                src={leena}
                alt=''
                width={100}
                height={100}
                className='w-full h-full'
              />
            </a>
            <ScrollBar className='hidden' />
          </ScrollArea>
          <ScrollArea className='aspect-[4/3] w-full rounded-lg shadow-xl border'>
            <a
              href='https://gardeniaservice.com/'
              target='_blank'
              className='h-fit w-full '>
              <Image
                unoptimized
                src={gardenia}
                alt=''
                width={100}
                height={100}
                className='w-full h-full'
              />
            </a>
            <ScrollBar className='hidden' />
          </ScrollArea>
          <ScrollArea className='aspect-[4/5] w-full rounded-lg shadow-xl border'>
            <a
              href='https://rulesvip.ae/'
              target='_blank'
              className='h-fit w-full '>
              <Image
                unoptimized
                src={rulesvip}
                alt=''
                width={100}
                height={100}
                className='w-full h-full'
              />
            </a>
            <ScrollBar className='hidden' />
          </ScrollArea>
          <ScrollArea className='aspect-[3/2] w-full rounded-lg shadow-xl border'>
            <a
              href='https://dreamoverseashr.ae/'
              target='_blank'
              className='h-fit w-full '>
              <Image
                unoptimized
                src={dreamover}
                alt=''
                width={100}
                height={100}
                className='w-full h-full'
              />
            </a>
            <ScrollBar className='hidden' />
          </ScrollArea>
        </div>
        <div className='w-full flex flex-col gap-12 max-w-2xl items-center flex-wrap'>
          <ScrollArea className='aspect-[4/3] w-full rounded-lg shadow-xl border'>
            <a
              href='https://ae.hm.com/en/'
              target='_blank'
              className='h-fit w-full '>
              <Image
                unoptimized
                src={hnm}
                alt=''
                width={100}
                height={100}
                className='w-full h-full'
              />
            </a>
            <ScrollBar className='hidden' />
          </ScrollArea>
          <ScrollArea className='aspect-[3/2] w-full rounded-lg shadow-xl border'>
            <a
              href='https://www.fitmama-apparel.com/'
              target='_blank'
              className='h-fit w-full '>
              <Image
                unoptimized
                src={fitmama}
                alt=''
                width={100}
                height={100}
                className='w-full h-full'
              />
            </a>
            <ScrollBar className='hidden' />
          </ScrollArea>
          <ScrollArea className='aspect-[1/1] w-full rounded-lg shadow-xl border'>
            <a
              href='https://www.sheinicnp.com/'
              target='_blank'
              className='h-fit w-full '>
              <Image
                unoptimized
                src={sheinic}
                alt=''
                width={100}
                height={100}
                className='w-full h-full'
              />
            </a>
            <ScrollBar className='hidden' />
          </ScrollArea>
          <ScrollArea className='aspect-[4/5] w-full rounded-lg shadow-xl border'>
            <a
              href='https://pakparade.org/'
              target='_blank'
              className='h-fit w-full '>
              <Image
                unoptimized
                src={pakparade}
                alt=''
                width={100}
                height={100}
                className='w-full h-full'
              />
            </a>
            <ScrollBar className='hidden' />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};
