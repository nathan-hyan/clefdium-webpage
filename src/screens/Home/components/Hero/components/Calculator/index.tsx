import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import CustomInput from 'components/CustomInput';
import Button from 'components/Button';
import { GlobalModalContext } from 'contexts/Modal';
import { MODAL_TYPE } from 'contexts/constants';
import CustomCheckbox from 'components/CustomCheckbox';

import styles from './styles.module.scss';

function Calculator() {
  const [sell, setSell] = useState(false);
  const { t } = useTranslation('Calculator');
  const { toggleOpen } = useContext(GlobalModalContext);
  const DEFAULT_VALUE = 300;

  const toggle = () => {
    toggleOpen(MODAL_TYPE.comingSoon);
  };

  const toggleSell = () => {
    setSell((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <CustomInput className={styles.input} label={t('city')} name="xd" />
        <CustomInput className={styles.input} label={t('propertyType')} name="xd" />
        <CustomInput disabled={!sell} className={styles.input} label={t('roomQuantity')} name="xd" />
      </div>
      <div className={styles.amount}>
        <CustomInput className={styles.input} label={t('minAmount')} name="xd" defaultValue={DEFAULT_VALUE} />
        <CustomInput className={styles.input} label={t('maxAmount')} name="xd" />
      </div>
      <div className={styles.lowerButtons}>
        <Button label={t('send')} onClick={toggle} />
        <CustomCheckbox label={t('sell')} checked={sell} name="xd" onChange={toggleSell} />
      </div>
    </div>
  );
}
export default Calculator;
