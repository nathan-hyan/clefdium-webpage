import React, { ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

interface Props {
  options: Item[];
  translationKey: string;
  selected: string | number;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

interface Item {
  id: number;
  value: string | number;
  translate: string;
}

function CustomSelect({ options, translationKey, onChange, selected }: Props) {
  const { t } = useTranslation(translationKey);

  return (
    <div>
      <select defaultValue={selected} className={styles.select} onChange={onChange}>
        {options.map((item) => (
          <option key={item.id} value={item.value}>
            {t(item.translate)}
          </option>
        ))}
      </select>
    </div>
  );
}
export default CustomSelect;
