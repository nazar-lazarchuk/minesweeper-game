export type GameColType = {
  bombExists: boolean;
  opened: boolean;
};

export type GameContextType = {
  state: {
    isGameOver: boolean;
    field: GameColType[][];
  };

  createGame(rows: number, cols: number): void;
  push(i: number, j: number ): void;
};
