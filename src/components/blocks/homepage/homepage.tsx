import React from 'react';
import { Hero } from './sections/hero';
import { GetInTouch } from './sections/get-in-touch';
import { Mission } from './sections/mission';

export const Homepage = () => {
  return (
    <>
        <Hero />
        <GetInTouch/>
        <Mission/>
    </>
  );
};
