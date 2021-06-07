import React from 'react';

import styles from './styles.module.scss';

interface Props {
  title: string;
  quantity: number;
}

function InfoNumber({ title, quantity }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h1 className={styles.number}>{quantity}</h1>
    </div>
  );
}
export default InfoNumber;
