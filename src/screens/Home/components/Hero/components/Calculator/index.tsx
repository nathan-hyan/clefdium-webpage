import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import CustomInput from 'components/CustomInput';
import Button from 'components/Button';
import { GlobalModalContext } from 'contexts/Modal';
import { MODAL_TYPE } from 'contexts/constants';

import styles from './styles.module.scss';

function Calculator() {
  const { t } = useTranslation('Calculator');

  const { toggleOpen } = useContext(GlobalModalContext);

  const toggle = () => {
    toggleOpen(MODAL_TYPE.comingSoon);
  };

  return (
    <div className={styles.container}>
      <CustomInput className={styles.input} label={t('city')} name="xd" />
      <CustomInput className={styles.input} label={t('propertyType')} name="xd" />
      <CustomInput className={styles.input} label={t('roomQuantity')} name="xd" />
      <Button label={t('send')} onClick={toggle} />
    </div>
  );
}
export default Calculator;
