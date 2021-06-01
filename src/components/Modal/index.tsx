import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

import styles from './styles.module.scss';

interface Props {
  type: string;
  toggle: (value: string) => void;
}

function Modal({ type, toggle }: Props) {
  const { t } = useTranslation('Modal');

  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <h1 className={styles.title}>{t(`${type}_title`)}</h1>
        <p className={styles.text}>{t(`${type}_text`)}</p>
        <Button label={t('close')} onClick={() => toggle('')} />
      </div>
      <div className={styles.backDrop} onClick={() => toggle('')} />
    </div>
  );
}
export default Modal;
