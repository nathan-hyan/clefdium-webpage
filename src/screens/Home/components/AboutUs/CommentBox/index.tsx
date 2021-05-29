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
      <p className={styles.personName}>{personName}</p>
    </div>
  );
}
export default CommentBox;
