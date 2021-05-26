import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './styles.module.scss';

interface Props {
  title: string;
  text: string;
}

function ItemDisplay({ title, text }: Props) {
  return (
    <div className={styles.container}>
      <div>
        <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
export default ItemDisplay;
