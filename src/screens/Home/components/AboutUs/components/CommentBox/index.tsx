import React from 'react';

import styles from './styles.module.scss';

interface Props {
  text: string;
  personName: string;
}

function CommentBox({ text, personName }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div className={styles.alingRight}>
        <p className={styles.personName}>- {personName}</p>
      </div>
    </div>
  );
}
export default CommentBox;
