'use client';
import React from 'react';
import { testimonial } from '@/assets/data/testimonial/testimonial';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

import Image from 'next/image';

export const Testimonial = () => {
  return (
    <section className="flex flex-col w-full min-h-fit items-center justify-between gap-4 pt-12">
      <div className="flex flex-col gap-12 w-full h-full items-center lg:items-start pb-24 max-w-screen-2xl px-5 mx-auto">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <p className="text-2xl text-center lg:text-start font-light text-muted-foreground">
            Voices that Speak Volumes
          </p>
          <h2 className="text-[39px] sm:text-[44px] md:text-5xl line-clamp-2 text-center lg:text-start text-pretty text-primary max-w-3xl font-medium leading-[1.1] z-10">
            Our Clients&apos; Success Stories
          </h2>
        </div>
        <div className="w-[calc(100%-100px)] mx-auto h-fit lg:mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full h-fit"
          >
            <CarouselContent>
              {testimonial.map((item, index) => (
                <CarouselItem key={index} className="lg:basis-1/2">
                  <div className="p-1">
                    <div className="relative flex flex-col items-start justify-start p-6 gap-8 w-full shadow-sm rounded-xl bg-secondary h-80 h-full pr-56 overflow-hidden">
                      <span className="text-3xl font-semibold">
                        {item.title}
                      </span>
                      <p className="font-light">{item.description}</p>
                      <div className="flex w-full justify-end absolute  right-0 bottom-0">
                        <Image
                          unoptimized
                          src={item.image.src}
                          alt={item.title}
                          className="h-56 w-56 object-contain object-center"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
