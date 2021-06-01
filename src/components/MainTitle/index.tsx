import React from 'react';

import styles from './styles.module.scss';

interface Props {
  text: string;
  className?: string;
}

function MainTitle({ text, className }: Props) {
  return (
    <div className={`${className} ${styles.container}`}>
      <h1 className={styles.title}>{text}</h1>
      <div className={styles.underline} />
    </div>
  );
}
export default MainTitle;
