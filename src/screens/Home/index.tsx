import React from 'react';
/* import { useTranslation } from 'react-i18next'; */

/* import Button from 'components/Button'; */
import MainTitle from 'components/MainTitle';

import styles from './styles.module.scss';

function Home() {
  /* const { t } = useTranslation('Home'); */

  return <MainTitle className={styles.title} text="¿Quienes Somos?" />;
}
export default Home;
