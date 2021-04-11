import { FC } from 'react';

export type ColProps = {
  i: number;
  j: number;
};

type Col = {
    Component: FC<ColProps>;
    isOpen: boolean;
}
type Row = Col[];

export type FieldProps = {
  rows: Row[];
};
