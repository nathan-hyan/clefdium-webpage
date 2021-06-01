import React from 'react';
// import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

function LoadingScreen() {
  // const { t } = useTranslation('LoadingScreen');

  return (
    <div className={styles.container}>
      <div className={styles.skFadingCircle}>
        <div className={`${styles.skCircle1} ${styles.skCircle}`} />
        <div className={`${styles.skCircle2} ${styles.skCircle}`} />
        <div className={`${styles.skCircle3} ${styles.skCircle}`} />
        <div className={`${styles.skCircle4} ${styles.skCircle}`} />
        <div className={`${styles.skCircle5} ${styles.skCircle}`} />
        <div className={`${styles.skCircle6} ${styles.skCircle}`} />
        <div className={`${styles.skCircle7} ${styles.skCircle}`} />
        <div className={`${styles.skCircle8} ${styles.skCircle}`} />
        <div className={`${styles.skCircle9} ${styles.skCircle}`} />
        <div className={`${styles.skCircle10} ${styles.skCircle}`} />
        <div className={`${styles.skCircle11} ${styles.skCircle}`} />
        <div className={`${styles.skCircle12} ${styles.skCircle}`} />
      </div>
    </div>
  );
}
export default LoadingScreen;
