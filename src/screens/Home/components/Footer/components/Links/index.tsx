import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { GlobalModalContext } from 'contexts/Modal';
import { MODAL_TYPE } from 'contexts/constants';

import styles from './styles.module.scss';

function Links() {
  const { toggleOpen } = useContext(GlobalModalContext);
  const { t } = useTranslation('Footer');
  return (
    <div className={styles.link}>
      <p onClick={() => toggleOpen(MODAL_TYPE.comingSoon)}>{t('textOne')}</p>
      <p onClick={() => toggleOpen(MODAL_TYPE.comingSoon)}>{t('textTwo')}</p>
      <p onClick={() => toggleOpen(MODAL_TYPE.comingSoon)}>{t('textThree')}</p>
      <p onClick={() => toggleOpen(MODAL_TYPE.comingSoon)}>{t('textFour')}</p>
      <p onClick={() => toggleOpen(MODAL_TYPE.comingSoon)}>{t('textFive')}</p>
    </div>
  );
}

export default Links;
