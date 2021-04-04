import { FC } from 'react';
import { FieldProps } from './Field.types';
import styles from './Field.module.scss';

export const Field: FC<FieldProps> = () => {
  return (
    <table className={styles.field}>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};
