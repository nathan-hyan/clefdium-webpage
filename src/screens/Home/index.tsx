import React from 'react';

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
      <WhyInvest />
    </>
  );
}
export default Home;
