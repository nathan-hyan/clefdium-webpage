import React from 'react';

import styles from './styles.module.scss';

interface Props {
  name: string;
  checked: boolean;
  label: string;
  onChange: () => void;
}

function CustomCheckbox({ name, checked, onChange, label }: Props) {
  return (
    <div className={styles.container}>
      <label>
        <input name={name} type="checkbox" checked={checked} onChange={onChange} />
        <p className={styles.text}>{label}</p>
      </label>
    </div>
  );
}
export default CustomCheckbox;
