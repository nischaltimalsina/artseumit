import { JoinUs } from '../about/sections';
import { GetInTouch, Hero, OurClients, Testimonial } from './sections';

export const Homepage = () => {
  return (
    <>
      <Hero />
      {/* <Services/> */}
      <GetInTouch />
      <OurClients/>
      <Testimonial/>
      <JoinUs/>
    </>
  );
};
