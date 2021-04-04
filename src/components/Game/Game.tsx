import { FC, useState } from 'react';
import { GameProps } from './Game.types';

import styles from './Game.module.scss';

export const Game: FC<GameProps> = ({ onClose }) => {
  const [isSoundEnabled, setSoundEnabled] = useState<boolean>(true);

  return (
    <div>
      <div className={styles.panel}>
        <span className={styles.flag}>
          <i className="fas fa-flag"></i>
          <span>69</span>
        </span>
        <span className={styles.clock}>
          <i className="far fa-clock"></i>
          <span>00:00:00</span>
        </span>
        <button
          className={`${styles.panelBtn} ${styles.soundBtn} ${
            isSoundEnabled ? styles.active : ''
          }`}
          onClick={() => setSoundEnabled(!isSoundEnabled)}
        >
          <i className="fas fa-volume-up"></i>
          <i className="fas fa-volume-mute"></i>
        </button>
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
