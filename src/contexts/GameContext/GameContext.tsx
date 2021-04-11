import { createContext, useContext, FC, useState, useCallback } from 'react';
import { GameColType, GameContextType } from './GameContext.types';

const initialState: GameContextType = {
  state: {
    isGameOver: false,
    field: [],
  },
  createGame() {},
  push() {},
};

const context = createContext<GameContextType>(initialState);

export const GameProvider: FC = ({ children }) => {
  const { Provider } = context;

  const [isGameOver] = useState<boolean>(false);
  const [field, setField] = useState<GameColType[][]>([]);

  const createGame: GameContextType['createGame'] = useCallback(
    (rows, cols) => {
      setField(
        new Array(cols).fill(null).map((c, j) =>
          new Array(rows).fill(null).map<GameColType>((r, i) => {
            const gameCol: GameColType = {
              bombExists: false,
              opened: false,
            };

            return gameCol;
          })
        )
      );
    },
    []
  );

  const push: GameContextType['push'] = (i, j) => {
    const f = JSON.parse(JSON.stringify(field));
    f[i][j].opened = true;
    setField(f);
  };

  return (
    <Provider value={{ state: { isGameOver, field }, createGame, push }}>
      {children}
    </Provider>
  );
};

export const useGame = () => useContext(context);
