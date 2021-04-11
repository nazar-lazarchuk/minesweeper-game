import { FC } from 'react';
import { FieldProps, FieldStyleType } from './Field.types';
import styles from './Field.module.scss';

const getStyleType = (i: number, j: number): FieldStyleType => {
  if (i % 2 === 0 && j % 2 === 0) return FieldStyleType.even;
  if (i % 2 === 1 && j % 2 === 1) return FieldStyleType.even;
  return FieldStyleType.odd;
};

export const Field: FC<FieldProps> = ({ rows }) => {
  return (
    <table className={styles.field}>
      <tbody>
        {rows.map((row, i) => (
          <tr key={`row-${i}`}>
            {row.map(({ Component }, j) => (
              <td key={`row-${i} col-${j}`}>
                <Component
                  styleType={getStyleType(i, j)}
                  open={() => {}}
                  isOpened={false}
                  isBomb={false}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
