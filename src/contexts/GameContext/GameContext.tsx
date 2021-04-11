import { createContext, useContext, FC, useState } from 'react';
import { GameColType, GameContextType } from './GameContext.types';

const initialState: GameContextType = {
  state: {
    isGameStarted: false,
    isGameOver: false,
    field: [],
  },
  startGame() {},
};

const context = createContext<GameContextType>(initialState);

export const GameProvider: FC = ({ children }) => {
  const { Provider } = context;

  const [isGameStarted, setGameStarted] = useState<boolean>(false);
  const [isGameOver] = useState<boolean>(false);
  const [field, setField] = useState<GameColType[][]>([]);

  const startGame = () => {
    setField([]);
    setGameStarted(true);
  };

  return (
    <Provider
      value={{ state: { isGameStarted, isGameOver, field }, startGame }}
    >
      {children}
    </Provider>
  );
};

export const useGame = () => useContext(context);
