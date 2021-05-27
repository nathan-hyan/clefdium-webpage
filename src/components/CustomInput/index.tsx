import React from 'react';

import styles from './styles.module.scss';

interface Props {
  label: string;
  name: string;
  type?: 'text';
}

function CustomInput({ label, name, type = 'text' }: Props) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input className={styles.input} id={name} type={type} />
    </div>
  );
}
export default CustomInput;
