import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

interface Props {
  icon: IconProp;
  text: string;
}

function Sign({ icon, text }: Props) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
export default Sign;
