import React from 'react';

import styles from './styles.module.scss';

interface Props {
  label: string;
  onClick: () => void;
  className?: string;
}
function Button({ onClick, label, className }: Props) {
  return (
    <div className={className}>
      <button className={styles.primaryButton} type="button" onClick={onClick}>
        <p className={styles.label}>{label}</p>
      </button>
    </div>
  );
}

export default Button;
