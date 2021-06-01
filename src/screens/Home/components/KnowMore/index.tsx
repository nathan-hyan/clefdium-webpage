import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';
import { GlobalModalContext } from 'contexts/Modal';
import { MODAL_TYPE } from 'contexts/constants';

import styles from './styles.module.scss';

function KnowMore() {
  const { toggleOpen } = useContext(GlobalModalContext);
  const { t } = useTranslation('KnowMore');
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>
      <Button
        className={styles.button}
        label={t('buttonText')}
        onClick={() => toggleOpen(MODAL_TYPE.comingSoon)}
      />
    </div>
  );
}
export default KnowMore;
