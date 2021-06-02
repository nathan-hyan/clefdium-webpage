import React from 'react';

import NavBarItems from 'components/NavigationBar/components/NavbarLink';

import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import KnowMore from './components/KnowMore';
import WhatDoWeDo from './components/WhatDoWeDo';
import WhoAreWe from './components/WhoAreWe';
import WhyInvest from './components/WhyInvest';

function Home() {
  return (
    <>
      <NavBarItems />
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
