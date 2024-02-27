import React from 'react';
import { Separator } from '@/components/ui';
import Image from 'next/image';
import graphic from '@/assets/images/services/graphic.svg';
import social from '@/assets/images/services/social.svg';
import animation from '@/assets/images/services/animation.svg';
import digital from '@/assets/images/services/digital.svg';
import mobile from '@/assets/images/services/mobile.svg';
import web from '@/assets/images/services/web.svg';

export const ServicesList = () => {
  return (
    <section id="services" className="w-full py-24 scroll-smooth">
      <div className="flex flex-col gap-12 w-fit mx-auto p-5 items-center ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center leading-[1.1] gap-2">
            <p className="text-2xl text-center font-light text-muted-foreground">
              Our Range of Services
            </p>
            <h3 className="text-[32px] sm:text-[44px] font-medium text-pretty text-center max-w-3xl">
              Empowering Your Digital World
            </h3>
          </div>
        </div>
        <div className="w-full flex flex-col items-center lg:mt-10 gap-8 lg:gap-12 divide-y">
          <div className="w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 pt-8 lg:pt-12 justify-around items-center">
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-medium text-pretty text-center lg:text-start">
                Graphic Design
              </h3>
              <p className="font-light text-center max-w-2xl lg:text-start">
                We don&apos;t just create visuals, we tell stories. Our design
                team breathes life into your brand with captivating graphics,
                ensuring a consistent and impactful identity across every
                touchpoint.
              </p>
            </div>
            <Image src={graphic} alt="Humble Beginning" className="h-48 w-48" />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 pt-8 lg:pt-12 justify-around items-center">
            <Image src={web} alt="Humble Beginning" className="h-48 w-48" />
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-medium text-pretty text-center lg:text-start">
                Web Development
              </h3>
              <p className="font-light text-center max-w-2xl lg:text-start">
                Seamless functionality meets stunning design in our custom-built
                websites. We prioritize user experience and mobile-first
                development to drive traffic, conversions, and brand loyalty.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 pt-8 lg:pt-12 justify-around items-center">
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-medium text-pretty text-center lg:text-start">
                Mobile App Development
              </h3>
              <p className="font-light text-center max-w-2xl lg:text-start">
                Whether native or cross-platform, our expertise delivers
                user-friendly, feature-rich apps that engage your audience and
                drive growth. We craft future-proof solutions that adapt to your
                evolving needs.
              </p>
            </div>
            <Image src={mobile} alt="Humble Beginning" className="h-48 w-48" />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 pt-8 lg:pt-12 justify-around items-center">
            <Image src={digital} alt="Humble Beginning" className="h-48 w-48" />
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-medium text-pretty text-center lg:text-start">
                Digital Marketing
              </h3>
              <p className="font-light text-center max-w-2xl lg:text-start">
                Reach the right audience across online channels with targeted
                campaigns and data-driven strategies. We help you boost brand
                awareness, build relationships, and achieve measurable results.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 pt-8 lg:pt-12 justify-around items-center">
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-medium text-pretty text-center lg:text-start">
                Social Media Management
              </h3>
              <p className="font-light text-center max-w-2xl lg:text-start">
                We amplify your brand voice and build meaningful connections
                with your audience through engaging content, community
                management, and strategic social media management.
              </p>
            </div>
            <Image src={social} alt="Humble Beginning" className="h-48 w-48" />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 pt-8 lg:pt-12 justify-around items-center">
            <Image src={animation} alt="Humble Beginning" className="h-48 w-48" />
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-medium text-pretty text-center lg:text-start">
                3D Design and Animation
              </h3>
              <p className="font-light text-center max-w-2xl lg:text-start">
                Bring your vision to life with captivating 3D models,
                animations, and product visualizations. We showcase your
                products, explain complex concepts, and engage your audience in
                unique ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
