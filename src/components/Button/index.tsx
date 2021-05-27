import React from 'react';

import styles from './styles.module.scss';

interface Props {
  label: string;
  onClick: () => void;
}
function Button({ onClick, label }: Props) {
  return (
    <div className={styles.primaryButton}>
      <button type="button" onClick={onClick}>
        <p className={styles.label}>{label}</p>
      </button>
    </div>
  );
}

export default Button;
