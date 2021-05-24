import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

function NavigationBar() {
  const { t } = useTranslation('NavigationBar');

  return <h1 className={styles.foo}>{t('foo')}</h1>;
}

export default NavigationBar;
