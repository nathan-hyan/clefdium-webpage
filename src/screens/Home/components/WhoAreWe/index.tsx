import React from 'react';
import { useTranslation } from 'react-i18next';

import Sign from './components/Sign';
import { MESSAGES } from './constants';
import styles from './styles.module.scss';

function WhoAreWe() {
  const { t } = useTranslation('WhoAreWe');

  return (
    <div className={styles.container}>
      {/* TODO: Replace this title with the MainTitle component once it's ready */}
      <h1 className={styles.title}>{t('title')}</h1>

      <div className={styles.signContainer}>
        {MESSAGES.map((message) => (
          <Sign key={message.id} icon={message.icon} text={t(message.text)} />
        ))}
      </div>
    </div>
  );
}
export default WhoAreWe;
