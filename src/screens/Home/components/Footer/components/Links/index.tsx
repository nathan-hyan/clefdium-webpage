import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { GlobalModalContext } from 'contexts/Modal';
import { MODAL_TYPE } from 'contexts/constants';

import styles from './styles.module.scss';

function Links() {
  const { toggleOpen } = useContext(GlobalModalContext);
  const { t } = useTranslation('Footer');
  const toggle = () => {
    toggleOpen(MODAL_TYPE.comingSoon);
  };

  return (
    <div className={styles.link}>
      <p onClick={toggle}>{t('privacyPolicies')}</p>
      <p onClick={toggle}>{t('termsOfUse')}</p>
      <p onClick={toggle}>{t('coockiesPolicies')}</p>
      <p onClick={toggle}>{t('clientDefense')}</p>
      <p onClick={toggle}>{t('investorInformation')}</p>
    </div>
  );
}

export default Links;
