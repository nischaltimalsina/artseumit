import Image from 'next/image';
import React from 'react';
import innovation from '@/assets/images/innovation.svg';
import reliable from '@/assets/images/reliable.svg';
import startup from '@/assets/images/startup.svg';

export const History = () => {
  return (
    <>
      <div className='w-full py-20  bg-border'>
        <div className='flex flex-col gap-16  w-full max-w-screen-2xl mx-auto p-5 items-center'>
          <div className='basis-full 2xl:basis-1/2 flex flex-col gap-6'>
            <div className='flex flex-col items-center leading-[1.1]'>
              <p className='text-2xl text-center font-light text-muted-foreground'>
                More Than Code, More Than Design
              </p>
              <h3 className='text-[32px] sm:text-[44px] font-medium text-pretty text-center max-w-3xl'>
                A Look Back at Artseum&apos;s Growth Story
              </h3>
            </div>
          </div>
          <div className=' flex flex-col-reverse lg:flex-row gap-12 items-center lg:items-end'>
            <div className='flex flex-col gap-6'>
              <h3 className='text-3xl font-medium text-pretty text-center lg:text-start'>
                Humble Beginnings to Industry Experts
              </h3>
              <p className='font-light text-center max-w-4xl lg:text-start'>
                Our journey has been fueled by a relentless pursuit of
                innovation and an unwavering dedication to our clients.
                We&apos;ve grown from a passionate team with a single project to
                a leading provider of IT solutions, empowering businesses across
                the Globe to leverage the power of technology for growth and
                success.
              </p>
            </div>
            <Image src={startup} alt='Humble Beginning' className='h-48 w-48' />
          </div>
          <div className='flex flex-col lg:flex-row gap-12 items-center lg:items-end'>
            <Image
              src={reliable}
              alt='Excellence and Reliability'
              className='h-48 w-48'
            />
            <div className='flex flex-col gap-6'>
              <h3 className='text-3xl font-medium text-pretty text-center lg:text-end'>
                A Legacy of Excellence and Reliability
              </h3>
              <p className='font-light text-pretty text-center max-w-4xl lg:text-end'>
                Over the years, we&apos;ve built a comprehensive portfolio,
                successfully delivering a wide range of projects. Our consistent
                excellence and reliability have earned us the trust of countless
                businesses, solidifying our reputation as a premier IT solutions
                provider in the global market.
              </p>
            </div>
          </div>
          <div className='flex flex-col-reverse lg:flex-row gap-12 items-center lg:items-end'>
            <div className='flex flex-col gap-6'>
              <h3 className='text-3xl font-medium text-pretty text-center lg:text-start'>
                Beyond the Present, Embracing the Future
              </h3>
              <p className='font-light text-pretty text-center max-w-4xl lg:text-start'>
                The journey doesn&apos;t end here. At Artseum, we continue to
                push the boundaries, exploring new technologies and innovative
                solutions to stay ahead of the curve. We are driven by a
                deep-seated passion for progress and a unwavering commitment to
                our clients&apos; success. In this dynamic technological
                landscape, we empower you to embrace the future with confidence.
              </p>
            </div>
            <Image
              src={innovation}
              alt='Beyond the Present, Embracing the Future'
              className='h-48 w-48'
            />
          </div>
        </div>
      </div>
    </>
  );
};
