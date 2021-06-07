import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { MODAL_TYPE } from 'contexts/constants';
import { GlobalModalContext } from 'contexts/Modal';

import NavItem from './components';
import { LINKS } from './components/constants';
import styles from './styles.module.scss';

function NavBarItems() {
  const { t } = useTranslation('NavItems');
  const { toggleOpen } = useContext(GlobalModalContext);
  const toggle = () => {
    toggleOpen(MODAL_TYPE.comingSoon);
  };
  return (
    <div className={styles.downside}>
      {LINKS.map((list) => (
        <NavItem key={list.id} onClick={toggle} label={t(list.text)} isActive={list.active} />
      ))}
    </div>
  );
}
export default NavBarItems;
