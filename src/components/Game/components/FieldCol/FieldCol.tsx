import { FC } from 'react';
import { ColProps, FieldStyleType } from '../Field/Field.types';

import styles from './FieldCol.module.scss';

export const FieldCol: FC<ColProps> = ({ styleType, isOpened, isBomb, open }) => {
  const styleClass =
    styleType === FieldStyleType.even ? styles.type1 : styles.type2;

  if (!isOpened) return <span className={`${styles.col} ${styleClass}`} onClick={open} />;

  if (isOpened && !isBomb) {
    return <span className={`${styles.col} ${styleClass} ${styles.opened}`} />;
  }

  return <span className={`${styles.col} ${styleClass} ${styles.bomb}`} />;
};
