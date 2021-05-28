import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

import styles from './styles.module.scss';

function WhyInvest() {
  const { t } = useTranslation('WhyInvest');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.text}>{t('text')}</p>
      <p className={styles.text}>{t('textSecondPart')}</p>
      <Button className={styles.button} label={t('buttonText')} onClick={() => console.log('sadwda')} />
    </div>
  );
}
export default WhyInvest;
