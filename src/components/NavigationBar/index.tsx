import React, { ChangeEvent, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import logo from 'assets/logo.png';
import Button from 'components/Button';
import { LangContext } from 'contexts/Language';
import { MODAL_TYPE } from 'contexts/constants';
import { GlobalModalContext } from 'contexts/Modal';

import styles from './styles.module.scss';
import CustomSelect from './components/CustomSelect';
import { LANGUAGES } from './constants';
import NavBarItems from './components/NavbarLink';

interface Props {
  changeLanguage: (value: string) => void;
}

function NavigationBar({ changeLanguage }: Props) {
  const { language } = useContext(LangContext);
  const { toggleOpen } = useContext(GlobalModalContext);

  const { t } = useTranslation('NavigationBar');

  const handleLanguageChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(value);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img src={logo} alt="Clefdium" className={styles.logo} />
        </div>
        <div className={styles.rightSide}>
          <CustomSelect
            options={LANGUAGES}
            selected={language}
            translationKey="none"
            onChange={handleLanguageChange}
          />
          <Button label={t('register')} onClick={() => toggleOpen(MODAL_TYPE.comingSoon)} />
          <Button label={t('login')} onClick={() => toggleOpen(MODAL_TYPE.comingSoon)} />
        </div>
      </div>
      <NavBarItems />
    </div>
  );
}

export default NavigationBar;
