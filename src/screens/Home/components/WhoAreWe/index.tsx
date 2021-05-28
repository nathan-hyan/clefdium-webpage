import React from 'react';
import { useTranslation } from 'react-i18next';

import MainTitle from 'components/MainTitle';

import Sign from './components/Sign';
import { MESSAGES } from './constants';
import styles from './styles.module.scss';

function WhoAreWe() {
  const { t } = useTranslation('WhoAreWe');

  return (
    <div className={styles.container}>
      <MainTitle text={t('title')} />

      <div className={styles.signContainer}>
        {MESSAGES.map((message) => (
          <Sign key={message.id} icon={message.icon} text={t(message.text)} />
        ))}
      </div>
    </div>
  );
}
export default WhoAreWe;
