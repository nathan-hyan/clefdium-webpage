import React from 'react';

import logo from 'assets/logo.png';

import styles from './styles.module.scss';
import Links from './components/Links';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.upSide}>
        <img src={logo} alt="Clefdium" className={styles.logo} />{' '}
        <div className={styles.data}>
          <h2>Clefdium</h2>
          <p>Av.Falsa 123</p>
          <p>Tel. 381654358</p>
          <p>email@falso.com</p>
        </div>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
}
export default Footer;
