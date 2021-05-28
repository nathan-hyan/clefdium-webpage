import React from 'react';
<<<<<<< HEAD
/* import { useTranslation } from 'react-i18next'; */

/* import Button from 'components/Button'; */
import MainTitle from 'components/MainTitle';
=======
>>>>>>> development

import NavigationBar from './components/NavigationBar';
import WhatDoWeDo from './components/WhatDoWeDo';
import WhoAreWe from './components/WhoAreWe';

function Home() {
<<<<<<< HEAD
  /* const { t } = useTranslation('Home'); */

  return <MainTitle className={styles.title} text="¿Quienes Somos?" />;
=======
  return (
    <>
      <NavigationBar />
      <WhoAreWe />
      <WhatDoWeDo />
    </>
  );
>>>>>>> development
}
export default Home;
