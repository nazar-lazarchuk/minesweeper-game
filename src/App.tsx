import { FC } from 'react';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div>
      <Button className={styles.playBtn}>Let's play!</Button>
      <Modal>
        <h1 style={{ background: 'white' }}>Work</h1>
      </Modal>
    </div>
  );
};

export default App;
