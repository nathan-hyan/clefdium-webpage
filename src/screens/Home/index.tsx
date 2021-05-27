import React from 'react';

import NavigationBar from './components/NavigationBar';
import WhatDoWeDo from './components/WhatDoWeDo';
import WhoAreWe from './components/WhoAreWe';

function Home() {
  return (
    <>
      <NavigationBar />
      <WhoAreWe />
      <WhatDoWeDo />
    </>
  );
}
export default Home;
