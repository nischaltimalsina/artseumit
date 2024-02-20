'use client';
import { Logo } from '@/assets/jsx/logo';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ThemeSwitch } from '@/components/common';

export function Header() {
  return (
    <header className='fixed top-0 w-full text-foreground font-light z-50 bg-background/70 backdrop-blur-sm'>
      <div className='max-w-screen-2xl text-lg mx-auto flex gap-24 items-center px-5 h-24 font-normal'>
        <div className=' flex items-center h-10'>
          <Link href={'/'} className='flex gap-2 items-center'>
            <Logo className='h-8 w-8 [&>path]:fill-foreground/80 transition-colors duration-300' />
            {/* <span className=' text-2xl leading-none'>ARTSEUM</span> */}
          </Link>
        </div>
        <nav className='hidden md:flex gap-8  items-center  justify-center h-10 '>
          <Link
            href={'/'}
            className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
            Home
          </Link>
          <Link
            href={'/about'}
            className=' hover:text-primary ease-in-out duration-300 whitespace-nowrap'>
            Why Us?
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
            className='border-primary bg-transparent rounded-full text-lg font-normal'>
            Contact Us
          </Button>
        </div>
        <div className='flex md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:border-0 focus:outline-none focus:ring-0 focus:ring-transparent'>
              <HamburgerMenuIcon className='h-8 w-8 hover:text-white transition-colors duration-300' />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='p-5 w-64 rounded-xl bg-black/70 backdrop-blur-sm hidden'>
              <DropdownMenuGroup className='pt-12'>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/'}>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/docs'}>Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/lightpaper'}>Lightpaper</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/contact'}>Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup className='px-2 pt-12 pb-6'>
                <h4 className='mt-6 text-sm mb-4 '>Join us on </h4>
                <ul className='flex gap-3 '>
                  <li className='p-1 bg-primary/50 rounded hover:bg-primary/100 transition-colors duration-200'>
                    <a
                      href='https://discord.com/invite/PJcWyCB8'
                      target='_blank'>
                      <Image
                        src='/discord.png'
                        alt=''
                        className='invert'
                        height={20}
                        width={20}
                      />
                    </a>
                  </li>
                  <li className='p-1 bg-primary/50 rounded hover:bg-primary/100 transition-colors duration-200'>
                    <a href='https://twitter.com/adsflow_net' target='_blank'>
                      <Image
                        src='/x.png'
                        alt=''
                        className='invert '
                        height={20}
                        width={20}
                      />
                    </a>
                  </li>
                </ul>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
