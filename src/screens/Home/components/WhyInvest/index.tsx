import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';
import { MODAL_TYPE } from 'contexts/constants';
import { GlobalModalContext } from 'contexts/Modal';

import styles from './styles.module.scss';

function WhyInvest() {
  const { toggleOpen } = useContext(GlobalModalContext);
  const { t } = useTranslation('WhyInvest');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.text}>{t('text')}</p>
      <p className={styles.text}>{t('textSecondPart')}</p>
      <Button
        className={styles.button}
        label={t('buttonText')}
        onClick={() => toggleOpen(MODAL_TYPE.comingSoon)}
      />
    </div>
  );
}
export default WhyInvest;
