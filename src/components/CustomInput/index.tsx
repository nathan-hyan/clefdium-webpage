import React from 'react';

import styles from './styles.module.scss';

interface Props {
  label: string;
  name: string;
  type?: 'text';
  className?: string;
}

function CustomInput({ label, name, type = 'text', className }: Props) {
  return (
    <div className={`${styles.container} ${className}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input className={styles.input} id={name} type={type} />
    </div>
  );
}
export default CustomInput;
