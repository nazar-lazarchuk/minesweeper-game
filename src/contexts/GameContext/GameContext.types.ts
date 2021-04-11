export type GameColType = {
  i: number;
  j: number;
  bombExists: boolean;
  opened: boolean;
};

export type GameContextType = {
  state: {
    isGameOver: boolean;
    field: GameColType[][];
  };

  createGame(rows: number, cols: number): void;
  push(coordinates: { i: number; j: number }): void;
};
