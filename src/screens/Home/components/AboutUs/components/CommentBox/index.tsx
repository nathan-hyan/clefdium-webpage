import React from 'react';

import styles from './styles.module.scss';

interface Props {
  text: string;
}

function CommentBox({ text }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
export default CommentBox;
