import React from 'react';

import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KnowMore from './components/KnowMore';
import WhatDoWeDo from './components/WhatDoWeDo';
import WhoAreWe from './components/WhoAreWe';
import WhyInvest from './components/WhyInvest';

function Home() {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <WhatDoWeDo />
      <KnowMore />
      <WhyInvest />
      <AboutUs />
      <Footer />
    </>
  );
}
export default Home;
