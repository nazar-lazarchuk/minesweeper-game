export type GameColType = {
  i: number;
  j: number;
  bombExists: boolean;
  opened: boolean;
};

export type GameContextType = {
  state: {
    isGameStarted: boolean;
    isGameOver: boolean;
    field: GameColType[][];
  };

  startGame(coordinates: { i: number; j: number }): void;
};
