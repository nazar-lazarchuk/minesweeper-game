import { FC } from 'react';
import { GameColType } from '../../../../contexts/GameContext/GameContext.types';

export enum FieldStyleType {
  even,
  odd,
}

export type ColProps = {
  styleType: FieldStyleType,
  open(): void;
  isOpened: boolean;
  isBomb: boolean;
};

export type Col = {
  gameColData: GameColType;
  Component: FC<ColProps>;
};
type Row = Col[];

export type FieldProps = {
  rows: Row[];
  push(i: number, j: number): void;
};
