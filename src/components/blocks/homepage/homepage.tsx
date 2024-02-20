import { JoinUs } from '../about/sections';
import { GetInTouch, Hero, Mission, OurClients, Services } from './sections';

export const Homepage = () => {
  return (
    <>
      <Hero />
      <Services/>
      <GetInTouch />
      <OurClients/>
      <JoinUs/>
    </>
  );
};
