import React from 'react';
import { ContactForm } from './sections';
import { sendMail } from '@/lib/mail';
import { template } from '@/components/templates/template';
import ContactFormServer from './sections/form-server';

export const Contact = () => {
  


  return (
    <section className='flex flex-col w-full min-h-fit items-center justify-between gap-4 pt-12'>
      <div className='flex flex-col lg:flex-row gap-12 w-full h-full lg:items-center py-24 max-w-screen-2xl px-5 mx-auto'>
        <div className='lg:basis-1/2 flex flex-col items-center lg:items-start gap-4'>
          <p className='text-2xl text-center lg:text-start font-light text-muted-foreground'>
            Let&apos;s Talk
          </p>
          <h2 className='text-[39px] sm:text-[44px] md:text-5xl line-clamp-2 text-center lg:text-start text-pretty text-primary max-w-3xl font-medium leading-[1.1] z-10'>
            Your Digital Journey Starts Here
          </h2>
          <h2 className='text-lg font-light text-pretty max-w-3xl text-center lg:text-start'>
            Partner with Artseum to unlock your digital potential. Contact our
            passionate team of experts and collaborate on crafting solutions
            that empower your business. Share your vision, discuss your
            challenges, and explore how we can bridge the gap between ideas and
            impactful results.
          </h2>
        </div>
        <div className='lg:basis-1/2 flex flex-col gap-4 '>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
