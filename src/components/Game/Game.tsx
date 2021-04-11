import { FC, useLayoutEffect, useState } from 'react';

import { Field, Col as FieldComponentCol } from './components/Field';

import { GameProps } from './Game.types';
import { useGame } from '../../contexts/GameContext/GameContext';

import { FieldCol } from './components/FieldCol';

import styles from './Game.module.scss';

const FIELD_ROWS = 20;
const FIELD_COLS = 15;

export const Game: FC<GameProps> = ({ onClose }) => {
  const [isSoundEnabled, setSoundEnabled] = useState<boolean>(true);
  const {
    state: { field },
    createGame,
  } = useGame();

  useLayoutEffect(() => {
    createGame(FIELD_ROWS, FIELD_COLS);
  }, [createGame]);

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
      <Field
        rows={field.map((r) =>
          r.map((c) => {
            const gameCol: FieldComponentCol = {
              gameColData: c,
              Component: FieldCol,
            };

            return gameCol;
          })
        )}
      />
    </div>
  );
};
