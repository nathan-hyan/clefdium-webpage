import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

import styles from './styles.module.scss';

function KnowMore() {
  const { t } = useTranslation('KnowMore');
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>
      <Button className={styles.button} label={t('buttonText')} onClick={() => console.log('Proximamente')} />
    </div>
  );
}
export default KnowMore;
