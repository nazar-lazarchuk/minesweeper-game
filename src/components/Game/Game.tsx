import { FC } from 'react';
import { GameProps } from './Game.types';

import styles from './Game.module.scss';

export const Game: FC<GameProps> = ({ onClose }) => {
  return (
    <div>
      <div className={styles.panel}>
        <button
          className={`${styles.panelBtn} ${styles.closeBtn}`}
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};
