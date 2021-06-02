import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

function Sign() {
  const { t } = useTranslation('Sign');

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{t('lowInvestmentsAmounts')}</h1>
      <h1 className={styles.text}>{t('fewParkingMonths')}</h1>
      <h1 className={styles.text}>{t('goodProfitability')}</h1>
      <h1 className={styles.text}>{t('outsideProperties')}</h1>
      <h1 className={styles.text}>{t('dollarIncome')}</h1>
      <h1 className={styles.text}>{t('wideVariety')}</h1>
    </div>
  );
}
export default Sign;
