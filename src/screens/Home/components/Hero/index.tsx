import React from 'react';
import { useTranslation } from 'react-i18next';

import Calculator from './components/Calculator';
import InfoNumber from './components/InfoNumber';
import Sign from './components/Sign';
import { INFO } from './container';
import styles from './styles.module.scss';

function Hero() {
  const { t } = useTranslation('Hero');
  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <div className={styles.leftWing}>
          <Calculator />
        </div>
        <div className={styles.rightWing}>
          <Sign />
        </div>
      </div>
      <div className={styles.lowerSection}>
        {INFO.map((item) => (
          <InfoNumber key={item.id} title={t(item.title)} quantity={item.number} />
        ))}
      </div>
    </div>
  );
}
export default Hero;
