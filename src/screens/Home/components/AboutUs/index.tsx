import React from 'react';
import { useTranslation } from 'react-i18next';

import MainTitle from '~components/MainTitle';

import CommentBox from './components/CommentBox';
import { COMMENTS } from './constants';

import styles from './styles.module.scss';

function AboutUs() {
  const { t } = useTranslation('Comments');
  return (
    <div className={styles.container}>
      <MainTitle text={t('title')} />

      <div className={styles.boxContainer}>
        {COMMENTS.map((comment) => (
          <CommentBox key={comment.id} text={t(comment.text)} />
        ))}
      </div>
    </div>
  );
}
export default AboutUs;
