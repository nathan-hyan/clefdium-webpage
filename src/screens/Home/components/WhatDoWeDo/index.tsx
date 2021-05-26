import React from 'react';
import { useTranslation } from 'react-i18next';

import ItemDisplay from './components/ItemDisplay';
import { ITEMS } from './constants';
import styles from './styles.module.scss';

function WhatDoWeDo() {
  const { t } = useTranslation('WhatDoWeDo');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>
      <div className={styles.items}>
        {ITEMS.map((item) => (
          <ItemDisplay key={item.id} title={t(item.title)} text={t(item.text)} />
        ))}
      </div>
    </div>
  );
}
export default WhatDoWeDo;
