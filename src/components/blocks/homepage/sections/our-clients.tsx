import React from 'react';

import uniliver from '@/assets/images/clients/uniliver.png';
import fitmama from '@/assets/images/clients/fitmama.png';
import posapt from '@/assets/images/clients/poslogo.png';
import bridge from '@/assets/images/clients/bridgestone.png';
import suzuki from '@/assets/images/clients/suzuki.png';
import modelhunt from '@/assets/images/clients/modelhunt.png';
import newlook from '@/assets/images/clients/newlook.png';
import sheinic from '@/assets/images/clients/sheinic.png';
import swornim from '@/assets/images/clients/swornim.png';
import unicamp from '@/assets/images/clients/unicamp.png';
import labline from '@/assets/images/clients/labline.jpg';
import rulesvip from '@/assets/images/clients/rulesvip.png';
import Image from 'next/image';

export const OurClients = () => {
  return (
    <div className='w-full pt-20 pb-10 bg-background dark:bg-foreground dark:text-background'>
      <div className='flex flex-col gap-12 w-full max-w-screen-2xl mx-auto p-5 items-center '>
        <div className='basis-full 2xl:basis-1/2 flex flex-col gap-6'>
          <div className='flex flex-col items-center leading-[1.1]'>
            <p className='text-2xl text-center font-light text-muted-foreground'>
              More Than Just Logos
            </p>
            <h3 className='text-[32px] sm:text-[44px] font-medium text-pretty text-center max-w-3xl'>
              Building Meaningful Partnerships
            </h3>
          </div>
          <p className='sm:text-lg text-pretty font-light text-center max-w-4xl'>
            Our impact extends beyond individual projects. We build long-lasting
            relationships with our clients, becoming trusted partners that
            understand their unique needs and challenges. By supporting their
            digital aspirations, we help them grow, evolve, and thrive in the
            ever-evolving landscape.
          </p>
        </div>
      </div>
      <div className='w-full py-10'>
        <div className='max-w-screen-2xl mx-auto p-5  flex gap-6 lg:gap-10 justify-center items-center flex-wrap py-20'>
          <div className=''>
            <Image
              src={uniliver}
              alt='Unilever'
              className='h-16 md:h-24 w-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={fitmama}
              alt='Fit Mama'
              className=' w-28 md:w-56 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={posapt}
              alt='POS Apt'
              className=' w-24 md:w-48 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={bridge}
              alt='Bridgestone'
              className=' w-32 md:w-64 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={suzuki}
              alt='Maruti Suzuki'
              className=' w-32 md:w-48 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={sheinic}
              alt='Sheinic'
              className=' w-24 md:w-48 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={newlook}
              alt='New Look Mr Nepal 2023'
              className=' w-24 md:w-48 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={labline}
              alt='Labline Traders'
              className=' brightness-110 w-24 md:w-48 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={unicamp}
              alt='Unicampus Global'
              className=' w-24 md:w-48 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={modelhunt}
              alt='Model Hunt 2023 Season 8'
              className=' w-24 md:w-48 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={rulesvip}
              alt='Rules Public Relations'
              className=' w-32 md:w-64 h-fit object-contain mix-blend-multiply'
            />
          </div>
          <div className=''>
            <Image
              src={swornim}
              alt='Swornim Studio Atelier'
              className='h-16 md:h-24 w-fit object-contain mix-blend-multiply'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
