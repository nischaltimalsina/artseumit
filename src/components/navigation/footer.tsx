import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui';
import { Logo } from '@/assets/jsx/logo';
import Link from 'next/link';
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='w-full bg-foreground text-background pt-16 pb-8'>
      <div className='flex flex-col gap-12 w-full max-w-screen-2xl mx-auto p-5 items-center '>
        <div className='w-full grid grid-cols-4 gap-16'>
          <div className='col-span-4 sm:col-span-3 lg:col-span-2 flex flex-col gap-4 items-start'>
            <div className=' flex items-center h-10'>
              <Link href={'/'} className='flex gap-2 items-center'>
                <Logo className='h-8 w-8 [&>path]:fill-background' />
                <span className='mt-2 font-light text-4xl leading-none'>
                  ARTSEUM
                </span>
              </Link>
            </div>
            <p className='font-light max-w-xl mt-4'>
              Artseum, a dedicated team of developers and designers, specializes
              in crafting dynamic web experiences that drive results. Whether
              you&apos;re looking to increase brand awareness, generate leads,
              or boost sales, our team has the expertise to help you achieve
              your goals.
            </p>
            {/* <Button
              size={'lg'}
              variant='outline'
              className='border-accent bg-transparent rounded-full text-lg sm:text-xl font-light sm:w-fit gap-4 mt-4'>
              Get in Touch
              <ArrowRightIcon className='h-6 w-6' />
            </Button> */}
          </div>
          <div className='col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col gap-6 lg:items-end'>
            <h3 className='text-xl'>Useful Links</h3>
            <Link href={'/'} className='flex gap-2 items-start mt-3'>
              <span className='font-light leading-none'>Home</span>
            </Link>
            <Link href={'/about'} className='flex gap-2 items-start'>
              <span className='font-light leading-none'>About</span>
            </Link>
            <Link href={'/contact'} className='flex gap-2 items-start'>
              <span className='font-light leading-none'>Contact Us</span>
            </Link>
            <Link href={'/#services'} className='flex gap-2 items-start'>
              <span className='font-light leading-none'>Services</span>
            </Link>
          </div>
          <div className='col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col gap-2 lg:items-end'>
            <h3 className='text-xl'>Contact Info</h3>
            <p className='font-light mt-4'>Alseef, Dubai</p>
            <a href='tel:+97156900748' className='font-light hover:underline'>
              +971 56900748
            </a>
            <p className='font-light mt-4'>Kathmandu, Nepal</p>
            <div className='flex gap-2 flex-wrap lg:justify-end'>
              <a
                href='tel:+9779855011772'
                className='font-light hover:underline'>
                +977 9855011772
              </a>
              |
              <a
                href='tel:+9719840528731'
                className='font-light hover:underline'>
                +971 9840528731
              </a>
            </div>
            <a
              href='mailto:artseumitsolution@gmail.com'
              className='font-light hover:underline'>
              artseumitsolution@gmail.com
            </a>
            <div className='flex gap-4'>
              <Link
                href={
                  'https://api.whatsapp.com/send/?phone=971569007480&text&type=phone_number&app_absent=0'
                }
                className='flex gap-2 items-center'>
                <FaWhatsapp className='h-7 w-7 text-green-500' />
              </Link>
              <Link
                href={
                  'https://www.instagram.com/artseum_it_solution/?igsh=MTByZG5tazJzMzhiMg%3D%3D&utm_source=qr'
                }
                className='flex gap-2 items-center'>
                <FaInstagram className='h-7 w-7 text-pink-500' />
              </Link>
              <Link
                href={
                  'https://www.linkedin.com/in/artseum-it-solution-2a15762b4/'
                }
                className='flex gap-2 items-center'>
                <FaLinkedin className='h-7 w-7 text-blue-600' />
              </Link>
              <Link
                href={
                  'https://www.facebook.com/profile.php?id=61556533765869&sfnsn=scwspwa&mibextid=RUbZ1f'
                }
                className='flex gap-2 items-center'>
                <FaFacebook className='h-7 w-7 text-blue-500' />
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <p className='text-center font-light'>
            Copyright &#169; 2021 - {new Date().getFullYear()}. Arteseum IT
            Solution{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
