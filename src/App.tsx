import { FC, useState } from 'react';

import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { Game } from './components/Game';
import { GameProvider } from './contexts/GameContext/GameContext';

import styles from './App.module.scss';

const App: FC = () => {
  const [isGameEnabled, setGameEnabling] = useState<boolean>(false);
  return (
    <div>
      <Button className={styles.playBtn} onClick={() => setGameEnabling(true)}>
        Let's play!
      </Button>

      {isGameEnabled && (
        <Modal>
          <GameProvider>
            <Game onClose={() => setGameEnabling(false)} />
          </GameProvider>
        </Modal>
      )}
    </div>
  );
};

export default App;
