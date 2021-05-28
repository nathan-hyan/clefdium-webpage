import React from 'react';

import style from './styles.module.scss';

interface Props {
  text: string;
  className: string;
}

function MainTitle({ text, className }: Props) {
  return (
    <div className={`${className} ${style.container}`}>
      <h1 className={style.title}>{text}</h1>

      <div className={style.underline} />
    </div>
  );
}
export default MainTitle;
