import React from 'react';

import styles from './styles.module.scss';

interface Props {
  label: string;
  name: string;
  type?: 'text';
  className?: string;
  defaultValue?: number;
  disabled?: boolean;
}

function CustomInput({ label, name, type = 'text', className, defaultValue, disabled }: Props) {
  return (
    <div className={`${styles.container} ${className}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input disabled={disabled} defaultValue={defaultValue} className={styles.input} id={name} type={type} />
    </div>
  );
}
export default CustomInput;
