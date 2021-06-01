import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import logo from 'assets/logo.png';
import Button from 'components/Button';

import styles from './styles.module.scss';
import CustomSelect from './components/CustomSelect';
import { LANGUAGES } from './constants';

function NavigationBar() {
  const { t } = useTranslation('NavigationBar');

  const handleLanguageChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    console.log('This is going to change eventually', value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src={logo} alt="Clefdium" className={styles.logo} />
      </div>
      <div className={styles.rightSide}>
        <CustomSelect options={LANGUAGES} translationKey="none" onChange={handleLanguageChange} />
        <Button label={t('register')} onClick={() => console.log('Thing')} />
        <Button label={t('login')} onClick={() => console.log('Thing')} />
      </div>
    </div>
  );
}

export default NavigationBar;
