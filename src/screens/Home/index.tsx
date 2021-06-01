import React from 'react';

import AboutUs from './components/AboutUs';
import KnowMore from './components/KnowMore';
import WhatDoWeDo from './components/WhatDoWeDo';
import WhoAreWe from './components/WhoAreWe';
import WhyInvest from './components/WhyInvest';

function Home() {
  return (
    <>
      <WhoAreWe />
      <WhatDoWeDo />
      <KnowMore />
      <WhyInvest />
      <AboutUs />
    </>
  );
}
export default Home;
