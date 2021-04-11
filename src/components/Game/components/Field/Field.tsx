import { FC } from 'react';
import { FieldProps } from './Field.types';
import styles from './Field.module.scss';

export const Field: FC<FieldProps> = ({ rows }) => {
  return (
    <table className={styles.field}>
      <tbody>
        {rows.map((row, i) => (
          <tr key={`row-${i}`}>
            {row.map(({ Component, isOpen }, j) => (
              <td
                key={`col-${j}`}
                className={isOpen ? styles.opened : undefined}
              >
                <Component i={i} j={j} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
