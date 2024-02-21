'use client';
import { Logo } from '@/assets/jsx/logo';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ThemeSwitch } from '@/components/common';

export function Header() {
  return (
    <header className='fixed top-0 w-full text-foreground font-light z-50 bg-background/70 backdrop-blur-sm'>
      <div className='max-w-screen-2xl text-lg mx-auto flex gap-6 lg:gap-24 items-center px-5 h-24 font-normal'>
        <div className=' flex items-center h-10'>
          <Link href={'/'} className='flex gap-2 items-center'>
            <Logo className='h-8 w-8 [&>path]:fill-foreground/80 transition-colors duration-300' />
            {/* <span className=' text-2xl leading-none'>ARTSEUM</span> */}
          </Link>
        </div>
        <nav className='hidden lg:flex gap-8  items-center  justify-center h-10 '>
          <Link
            href={'/'}
            className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
            Home
          </Link>
          <Link
            href={'/about'}
            className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
            About
          </Link>
          <Link
            href={'/#services'}
            className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
            Services
          </Link>
          <Link
            href={'/showcase'}
            className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
            Showcase
          </Link>
          <Link
            href={'/contact'}
            className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
            Contact
          </Link>
        </nav>
        <div className='flex gap-6 items-center justify-end h-10 ml-auto'>
          <ThemeSwitch />
          <Button
            size={'lg'}
            variant='outline'
            className='border-primary bg-transparent rounded-full text-lg font-normal hidden sm:flex'>
            Contact Us
          </Button>
        </div>
        <div className='flex lg:hidden'>
          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon className='h-8 w-8 hover:text-muted-foreground transition-colors duration-300' />
            </SheetTrigger>
            <SheetContent className='bg-background border-none w-full h-full sm:max-w-lg p-8 flex flex-col '>
              <div className=' flex items-center h-10'>
                <Link href={'/'} className='flex gap-4 items-center'>
                  <Logo className='h-8 w-8 [&>path]:fill-foreground/80 transition-colors duration-300' />
                  <span className=' text-4xl text-foreground/80 leading-none font-light mt-1.5'>
                    ARTSEUM
                  </span>
                </Link>
              </div>
              <nav className='flex max-h-full flex-col gap-6 font-light text-xl items-start mt-24 justify-center '>
                <Link
                  href={'/'}
                  className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
                  Home
                </Link>
                <Link
                  href={'/about'}
                  className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
                  About
                </Link>
                <Link
                  href={'/#services'}
                  className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
                  Services
                </Link>
                <Link
                  href={'/showcase'}
                  className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
                  Showcase
                </Link>
                <Link
                  href={'/contact'}
                  className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
                  Contact
                </Link>
              </nav>
              <div className='flex gap-4 mt-auto'>
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
              <p className='text-start text-sm font-light'>
                Copyright &#169; 2021 - {new Date().getFullYear()}. Arteseum IT
                Solution{' '}
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
