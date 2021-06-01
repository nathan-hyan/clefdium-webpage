import React from 'react';

import AboutUs from './components/AboutUs';
import KnowMore from './components/KnowMore';
import NavigationBar from './components/NavigationBar';
import WhatDoWeDo from './components/WhatDoWeDo';
import WhoAreWe from './components/WhoAreWe';
import WhyInvest from './components/WhyInvest';

function Home() {
  return (
    <>
      <NavigationBar />
      <WhoAreWe />
      <WhatDoWeDo />
      <KnowMore />
      <WhyInvest />
      <AboutUs />
    </>
  );
}
export default Home;
